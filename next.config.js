/** @type {import('next').NextConfig} */
const nextConfig = {
  // Image Optimization - Mobile First
  images: {
    domains: ['shakirabr.com', 'www.shakirabr.com', 'img.shields.io'],
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 31536000, // 1 year
    deviceSizes: [375, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384, 500],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Compression
  compress: true,

  // Redirects
  async redirects() {
    return [
      // Redirect non-www to www for all pages (301 permanent)
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'shakirabr.com',
          },
        ],
        destination: 'https://www.shakirabr.com/:path*',
        permanent: true,
      },
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
      {
        source: '/blog/como-ser-modelo-webcam-iniciante',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blog/onlyfans-brasil-como-ganhar-dinheiro',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blog/privacy-brasil-plataforma-modelo',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/old-blog',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blog/old-post',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/old-blog',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/galeria-antiga',
        destination: '/',
        permanent: true,
      },
      {
        source: '/contato-antigo',
        destination: '/',
        permanent: true,
      },
    ]
  },

  // Headers otimizados para mobile
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload',
          },
        ],
      },
      {
        source: '/sitemap.xml',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/xml',
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, s-maxage=604800',
          },
        ],
      },
      {
        source: '/robots.txt',
        headers: [
          {
            key: 'Content-Type',
            value: 'text/plain',
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, s-maxage=604800',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig 