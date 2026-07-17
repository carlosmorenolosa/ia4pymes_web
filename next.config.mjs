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
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://*.google-analytics.com https://www.google-analytics.com https://r2.leadsy.ai https://assets.calendly.com https://calendly.com https://cal.eu https://www.cal.eu https://*.metricool.com https://ddwl4m2hdecbv.cloudfront.net",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "img-src 'self' data: blob: https: http:",
              "font-src 'self' https://fonts.gstatic.com",
              "connect-src 'self' https://*.google-analytics.com https://www.google-analytics.com https://www.googletagmanager.com https://r2.leadsy.ai https://calendly.com https://cal.eu https://www.cal.eu https://api.resend.com https://*.metricool.com https://*.instantly.ai",
              "frame-src https://www.youtube.com https://calendly.com https://assets.calendly.com https://cal.eu https://www.cal.eu",
              "frame-ancestors 'none'",
              "base-uri 'self'",
              "form-action 'self'",
            ].join('; '),
          },
        ],
      },
    ]
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
