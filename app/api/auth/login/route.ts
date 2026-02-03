import { NextRequest, NextResponse } from 'next/server'
import { CryptoManager } from '@/lib/crypto'
import { JWTManager } from '@/lib/jwt'
import { sanitizeInput, validateEmail, rateLimit } from '@/lib/security'

interface LoginRequest {
  email: string
  password: string
}

/**
 * Server-side admin authentication endpoint
 * Handles password verification against environment-stored hash
 * Issues JWT token on successful authentication
 * 
 * POST /api/auth/login
 * Body: { email: string, password: string }
 * Response: { success: boolean, token?: string, message?: string }
 */
export async function POST(request: NextRequest) {
  try {
    // Only allow POST requests
    if (request.method !== 'POST') {
      return NextResponse.json(
        { success: false, message: 'Method not allowed' },
        { status: 405 }
      )
    }

    const body: LoginRequest = await request.json()
    const { email, password } = body

    // Input validation
    if (!email || !password) {
      return NextResponse.json(
        { success: false, message: 'Email and password are required' },
        { status: 400 }
      )
    }

    if (!validateEmail(email)) {
      return NextResponse.json(
        { success: false, message: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Rate limiting (per IP) - parse first IP from x-forwarded-for header
    const ipHeader = request.headers.get('x-forwarded-for')
    const ip = ipHeader ? ipHeader.split(',')[0].trim() : 'unknown'
    if (!rateLimit.isAllowed(`login:${ip}`)) {
      return NextResponse.json(
        { success: false, message: 'Too many login attempts. Please try again later.' },
        { status: 429 }
      )
    }

    // Sanitize email only (password must remain unchanged for authentication)
    const sanitizedEmail = sanitizeInput(email)

    // Password validation (minimum 8 characters, consistent with validatePassword in lib/security.ts)
    if (password.trim().length < 8) {
      return NextResponse.json(
        { success: false, message: 'Invalid credentials' },
        { status: 401 }
      )
    }

    // Verify against admin email
    if (sanitizedEmail !== 'admin@ajabhijewels.com') {
      return NextResponse.json(
        { success: false, message: 'Invalid credentials' },
        { status: 401 }
      )
    }

    // Retrieve hashed password from environment (server-only, never exposed to client)
    const storedPasswordHash = process.env.ADMIN_PASSWORD

    if (!storedPasswordHash) {
      console.error('ADMIN_PASSWORD not configured on server')
      return NextResponse.json(
        { success: false, message: 'Server configuration error' },
        { status: 500 }
      )
    }

    // Verify password using constant-time comparison
    const passwordMatch = await CryptoManager.verifyPasswordHash(password.trim(), storedPasswordHash)

    if (!passwordMatch) {
      return NextResponse.json(
        { success: false, message: 'Invalid credentials' },
        { status: 401 }
      )
    }

    // Generate secure JWT token
    const sessionId = CryptoManager.generateSecureToken()
    
    const token = await JWTManager.sign({
      sub: 'admin-user',
      email: sanitizedEmail,
      role: 'admin',
      sessionId
    })

    // Set token as httpOnly cookie for secure storage
    const response = NextResponse.json({
      success: true,
      token,
      user: {
        name: 'Admin User',
        email: sanitizedEmail,
        role: 'admin',
        loginTime: new Date().toISOString()
      }
    })

    response.cookies.set({
      name: 'admin_auth_token',
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 24 * 60 * 60 // 24 hours
    })

    return response
  } catch (error) {
    console.error('Login error:', error)
    return NextResponse.json(
      { success: false, message: 'Authentication failed' },
      { status: 500 }
    )
  }
}
