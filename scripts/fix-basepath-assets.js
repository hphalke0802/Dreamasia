const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const targetDir = path.join(root, 'app');
const helperImport = "import { publicAsset } from '@/lib/publicAsset';";
const extensions = new Set(['.js', '.jsx', '.ts', '.tsx']);
let totalFiles = 0;
let changedFiles = 0;

function normalizeBasePath(value) {
  if (!value) return '';

  const trimmed = `${value}`.trim();
  if (!trimmed || trimmed === '/') return '';

  return trimmed.startsWith('/') ? trimmed.replace(/\/+$/, '') : `/${trimmed.replace(/\/+$/, '')}`;
}

function isExternalPath(value) {
  return !value || /^https?:\/\//i.test(value) || value.startsWith('//') || /^[a-z][a-z0-9+.-]*:/i.test(value);
}

function buildAssetPath(pathValue) {
  if (!pathValue || isExternalPath(pathValue)) {
    return pathValue || '/';
  }

  const basePath = normalizeBasePath(process.env.NEXT_PUBLIC_BASE_PATH || process.env.BASE_PATH || '');
  const normalizedPath = pathValue.startsWith('/') ? pathValue : `/${pathValue}`;

  return `${basePath}${normalizedPath}`;
}

function walk(dir) {
  for (const name of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, name.name);
    if (name.isDirectory()) {
      walk(full);
    } else if (name.isFile() && extensions.has(path.extname(name.name))) {
      totalFiles += 1;
      patchFile(full);
    }
  }
}

function patchFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  const original = content;

  const replaceAttr = (attr) => {
    const reDouble = new RegExp(`${attr}="\/(?!\/)([^\"]*)"`, 'g');
    const reSingle = new RegExp(`${attr}='\/(?!\/)([^\']*)'`, 'g');
    content = content.replace(reDouble, `${attr}={publicAsset("/$1")}`);
    content = content.replace(reSingle, `${attr}={publicAsset('/$1')}`);
  };

  replaceAttr('src');
  replaceAttr('href');

  content = content.replace(/use\s+href="\/(?!\/)([^\"]*)"/g, 'use href={publicAsset("/$1")}');
  content = content.replace(/use\s+href='\/(?!\/)([^\']*)'/g, "use href={publicAsset('/$1')}");
  content = content.replace(/icon:\s*"\/(.*?)"/g, 'icon: publicAsset("/$1")');
  content = content.replace(/icon:\s*'\/(.*?)'/g, "icon: publicAsset('/$1')");

  if (content !== original) {
    if (!content.includes(helperImport)) {
      const importIndex = content.indexOf('import ');
      if (importIndex !== -1) {
        const firstNewline = content.indexOf('\n', importIndex);
        if (firstNewline !== -1) {
          content = content.slice(0, firstNewline + 1) + helperImport + '\n' + content.slice(firstNewline + 1);
        } else {
          content = helperImport + '\n' + content;
        }
      } else {
        content = helperImport + '\n' + content;
      }
    }
    fs.writeFileSync(filePath, content, 'utf8');
    changedFiles += 1;
    console.log('Updated', path.relative(root, filePath));
  }
}

walk(targetDir);
console.log(`Total files scanned: ${totalFiles}`);
console.log(`Files updated: ${changedFiles}`);
