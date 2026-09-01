/** @type {import('next').NextConfig} */
function normalizeBasePath(value) {
  if (!value) return '';

  const trimmed = `${value}`.trim();
  if (!trimmed || trimmed === '/') return '';

  return trimmed.startsWith('/') ? trimmed.replace(/\/+$/, '') : `/${trimmed.replace(/\/+$/, '')}`;
}

const basePath = normalizeBasePath(process.env.NEXT_PUBLIC_BASE_PATH || process.env.BASE_PATH || '');

const nextConfig = {
  output: 'export',
  basePath,
  assetPrefix: basePath,
  trailingSlash: true,
};

module.exports = nextConfig;