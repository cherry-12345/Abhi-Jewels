import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { verifyJWT } from '@/lib/jwt'

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  
  // Admin Panel Protection - enforce in all non-test environments
  if (pathname.startsWith('/admin') && pathname !== '/admin') {
    // Check for authentication token
    const authToken = request.cookies.get('admin_auth_token')?.value
    
    // Only skip auth enforcement during testing
    if (process.env.NODE_ENV !== 'test') {
      if (!authToken) {
        const loginUrl = request.nextUrl.clone()
        loginUrl.pathname = '/admin'
        return NextResponse.redirect(loginUrl)
      }
      
      // Verify JWT signature using JWT_SECRET (same secret used for token signing)
      try {
        const jwtSecret = process.env.JWT_SECRET
        const payload = await verifyJWT(authToken, jwtSecret)
        if (!payload || payload.role !== 'admin') {
          const loginUrl = request.nextUrl.clone()
          loginUrl.pathname = '/admin'
          return NextResponse.redirect(loginUrl)
        }
      } catch {
        const loginUrl = request.nextUrl.clone()
        loginUrl.pathname = '/admin'
        return NextResponse.redirect(loginUrl)
      }
    }
  }
  
  const response = NextResponse.next()

  // Content Security Policy
  const csp = `
    default-src 'self';
    script-src 'self' 'unsafe-eval' 'unsafe-inline' https://vercel.live;
    style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
    img-src 'self' data: https: blob:;
    font-src 'self' https://fonts.gstatic.com;
    connect-src 'self' https: wss:;
    frame-ancestors 'none';
    base-uri 'self';
    form-action 'self';
    upgrade-insecure-requests;
  `.replace(/\s{2,}/g, ' ').trim()

  // Security Headers
  response.headers.set('Content-Security-Policy', csp)
  response.headers.set('X-Frame-Options', 'DENY')
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')
  response.headers.set('X-XSS-Protection', '1; mode=block')
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()')
  response.headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload')

  // Rate limiting for admin routes
  if (pathname.startsWith('/admin')) {
    const ip = request.ip || request.headers.get('x-forwarded-for') || 'unknown'
    const key = `admin_${ip}`
    const maxRequests = 100
    
    // In production, use Redis or similar for distributed rate limiting
    if (!isRateLimited(key, maxRequests)) {
      response.headers.set('X-RateLimit-Limit', maxRequests.toString())
      const remaining = getRateLimitRemaining(key, maxRequests)
      response.headers.set('X-RateLimit-Remaining', remaining.toString())
    } else {
      return new NextResponse('Too Many Requests - Please try again later', { 
        status: 429,
        headers: {
          'Retry-After': '900', // 15 minutes
          'X-RateLimit-Limit': maxRequests.toString(),
          'X-RateLimit-Remaining': '0'
        }
      })
    }
  }

  return response
}

// Simple in-memory rate limiting (use Redis in production)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>()

function isRateLimited(key: string, maxRequests = 100): boolean {
  const now = Date.now()
  const windowMs = 15 * 60 * 1000 // 15 minutes

  // Cleanup expired entries to prevent memory leak
  if (rateLimitMap.size > 1000) {
    for (const [k, v] of rateLimitMap.entries()) {
      if (now > v.resetTime) {
        rateLimitMap.delete(k)
      }
    }
  }

  const record = rateLimitMap.get(key)
  
  if (!record || now > record.resetTime) {
    rateLimitMap.set(key, { count: 1, resetTime: now + windowMs })
    return false
  }

  if (record.count >= maxRequests) {
    return true
  }

  record.count++
  return false
}

function getRateLimitRemaining(key: string, maxRequests = 100): number {
  const record = rateLimitMap.get(key)
  if (!record) return maxRequests
  return Math.max(0, maxRequests - record.count)
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}