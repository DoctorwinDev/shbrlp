/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  
  images: {
    domains: ['picsum.photos'],
  },

  // Configuração mínima para build estável
  trailingSlash: false,
}

module.exports = nextConfig 