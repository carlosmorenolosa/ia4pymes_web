/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    // unoptimized: true, // Optimización activada para Vercel
  },
  async redirects() {
    return [
      {
        source: '/contacto',
        destination: '/#contacto',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
