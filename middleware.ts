import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Simple in-memory rate limiter for API routes
const apiRateLimit = new Map<string, { count: number; resetTime: number }>()

const API_MAX_REQUESTS = 30 // Max requests per window for general API
const API_WINDOW_MS = 60 * 1000 // 1 minute

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const response = NextResponse.next()

  // --- Security Headers (defense in depth, CSP is in next.config.mjs) ---
  response.headers.set('X-DNS-Prefetch-Control', 'on')

  // --- Block direct access to API from non-browser sources (basic bot protection) ---
  if (pathname.startsWith('/api/')) {
    const ip = request.headers.get('x-forwarded-for') || 'unknown_ip'

    // Rate limiting for all API routes
    const now = Date.now()
    const limitInfo = apiRateLimit.get(ip)

    if (limitInfo) {
      if (now < limitInfo.resetTime) {
        limitInfo.count++
        if (limitInfo.count > API_MAX_REQUESTS) {
          return NextResponse.json(
            { error: 'Demasiadas peticiones. Por favor, espera un momento.' },
            { status: 429 }
          )
        }
      } else {
        apiRateLimit.set(ip, { count: 1, resetTime: now + API_WINDOW_MS })
      }
    } else {
      apiRateLimit.set(ip, { count: 1, resetTime: now + API_WINDOW_MS })
    }

    // Block requests with suspicious user-agent patterns (basic bot filtering)
    const userAgent = request.headers.get('user-agent') || ''
    const suspiciousPatterns = [
      /sqlmap/i,
      /nikto/i,
      /masscan/i,
      /nmap/i,
      /dirbuster/i,
      /gobuster/i,
      /wfuzz/i,
      /hydra/i,
      /medusa/i,
    ]

    for (const pattern of suspiciousPatterns) {
      if (pattern.test(userAgent)) {
        return NextResponse.json(
          { error: 'Forbidden' },
          { status: 403 }
        )
      }
    }
  }

  // --- Prevent clickjacking on non-API routes ---
  if (!pathname.startsWith('/api/')) {
    response.headers.set('X-Frame-Options', 'DENY')
  }

  return response
}

export const config = {
  matcher: [
    // Match all paths except static files and images
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)',
  ],
}
