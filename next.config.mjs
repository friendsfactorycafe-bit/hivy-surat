/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    formats: ['image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 365, // 1 year cache
  },
  async headers() {
    return [
      {
        // llms.txt - AI crawler friendly headers
        source: '/llms.txt',
        headers: [
          { key: 'Content-Type', value: 'text/plain; charset=utf-8' },
          { key: 'Cache-Control', value: 'public, max-age=86400, stale-while-revalidate=43200' },
          { key: 'X-Robots-Tag', value: 'all' },
        ],
      },
      {
        // .well-known AI plugin metadata
        source: '/.well-known/:path*',
        headers: [
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Cache-Control', value: 'public, max-age=86400' },
        ],
      },
      {
        // Video files - proper MIME type and caching
        source: '/videos/:path*',
        headers: [
          { key: 'Content-Type', value: 'video/mp4' },
          { key: 'Accept-Ranges', value: 'bytes' },
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        // Static assets (fonts, images) - Long term cache
        source: '/:all*(svg|jpg|jpeg|png|gif|ico|webp|woff|woff2|ttf|eot)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        // JavaScript and CSS - Versioned cache
        source: '/_next/static/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        // All pages - AI friendly indexing headers + Security headers
        source: '/:path*',
        headers: [
          { key: 'X-Robots-Tag', value: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        ],
      },
    ];
  },
}

export default nextConfig
