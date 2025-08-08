/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['shakirabr.com', 'www.shakirabr.com'],
  },
  async redirects() {
    return [
      // Redirecionamentos para páginas antigas removidas
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
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'index, follow',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig 