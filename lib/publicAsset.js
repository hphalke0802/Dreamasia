function normalizeBasePath(value) {
  if (!value) return '';

  const trimmed = `${value}`.trim();
  if (!trimmed || trimmed === '/') return '';

  return trimmed.startsWith('/') ? trimmed.replace(/\/+$/, '') : `/${trimmed.replace(/\/+$/, '')}`;
}

function isExternalPath(value) {
  return !value || /^https?:\/\//i.test(value) || value.startsWith('//') || /^[a-z][a-z0-9+.-]*:/i.test(value);
}

export function publicAsset(path) {
  if (!path || isExternalPath(path)) {
    return path || '/';
  }

  const basePath = normalizeBasePath(process.env.NEXT_PUBLIC_BASE_PATH || process.env.BASE_PATH || '');
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;

  return `${basePath}${normalizedPath}`;
}
