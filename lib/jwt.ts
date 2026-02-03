// JWT token management with enhanced security
import { CryptoManager } from './crypto'

interface JWTPayload {
  sub: string
  email: string
  role: string
  iat: number
  exp: number
  jti: string
  sessionId: string
}

export class JWTManager {
  private static readonly SECRET = process.env.JWT_SECRET || 'change-in-production'
  private static readonly ALGORITHM = 'HS256'
  private static readonly EXPIRY = 24 * 60 * 60 // 24 hours

  static async sign(payload: Omit<JWTPayload, 'iat' | 'exp' | 'jti'>): Promise<string> {
    const now = Math.floor(Date.now() / 1000)
    const fullPayload: JWTPayload = {
      ...payload,
      iat: now,
      exp: now + this.EXPIRY,
      jti: CryptoManager.generateSecureToken()
    }

    const header = { alg: this.ALGORITHM, typ: 'JWT' }
    const encodedHeader = this.base64UrlEncode(JSON.stringify(header))
    const encodedPayload = this.base64UrlEncode(JSON.stringify(fullPayload))
    
    const signature = await this.createSignature(`${encodedHeader}.${encodedPayload}`)
    
    return `${encodedHeader}.${encodedPayload}.${signature}`
  }

  static async verify(token: string): Promise<JWTPayload | null> {
    try {
      const [encodedHeader, encodedPayload, signature] = token.split('.')
      
      if (!encodedHeader || !encodedPayload || !signature) {
        return null
      }

      const expectedSignature = await this.createSignature(`${encodedHeader}.${encodedPayload}`)
      
      // Use constant-time comparison to prevent timing attacks
      if (!this.constantTimeCompare(signature, expectedSignature)) {
        return null
      }

      const payload: JWTPayload = JSON.parse(this.base64UrlDecode(encodedPayload))
      
      if (payload.exp < Math.floor(Date.now() / 1000)) {
        return null
      }

      return payload
    } catch {
      return null
    }
  }

  private static constantTimeCompare(a: string, b: string): boolean {
    const maxLength = Math.max(a.length, b.length)
    let result = a.length ^ b.length
    for (let i = 0; i < maxLength; i++) {
      const aChar = i < a.length ? a.charCodeAt(i) : 0
      const bChar = i < b.length ? b.charCodeAt(i) : 0
      result |= aChar ^ bChar
    }
    return result === 0

  private static async createSignature(data: string): Promise<string> {
    const encoder = new TextEncoder()
    const key = await crypto.subtle.importKey(
      'raw',
      encoder.encode(this.SECRET),
      { name: 'HMAC', hash: 'SHA-256' },
      false,
      ['sign']
    )

    const signature = await crypto.subtle.sign('HMAC', key, encoder.encode(data))
    return this.base64UrlEncode(new Uint8Array(signature))
  }

  private static base64UrlEncode(data: string | Uint8Array): string {
    const base64 = typeof data === 'string' 
      ? btoa(data) 
      : btoa(String.fromCharCode(...Array.from(data)))
    
    return base64.replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '')
  }

  private static base64UrlDecode(data: string): string {
    const base64 = data.replace(/-/g, '+').replace(/_/g, '/')
    const padded = base64.padEnd(base64.length + (4 - base64.length % 4) % 4, '=')
    return atob(padded)
  }
}

// Simplified JWT verification function for middleware
export async function verifyJWT(token: string, secret?: string): Promise<{ role?: string; [key: string]: any } | null> {
  try {
    const [encodedHeader, encodedPayload, signature] = token.split('.')
    
    if (!encodedHeader || !encodedPayload || !signature) {
      return null
    }

    // Create signature using the same algorithm
    const encoder = new TextEncoder()
    const keyMaterial = secret || process.env.JWT_SECRET
    
    if (!keyMaterial) {
      throw new Error('JWT secret is not configured. Set JWT_SECRET environment variable.')
    }
    
    const key = await crypto.subtle.importKey(
      'raw',
      encoder.encode(keyMaterial),
      { name: 'HMAC', hash: 'SHA-256' },
      false,
      ['sign', 'verify']
    )

    // Use Web Crypto API for constant-time comparison
    const signatureData = await crypto.subtle.sign('HMAC', key, encoder.encode(`${encodedHeader}.${encodedPayload}`))
    const expectedSignature = btoa(String.fromCharCode(...Array.from(new Uint8Array(signatureData))))
      .replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '')
    
    // Constant-time comparison to prevent timing attacks
    if (!constantTimeCompare(signature, expectedSignature)) {
      return null
    }

    // Decode and verify payload
    const base64 = encodedPayload.replace(/-/g, '+').replace(/_/g, '/')
    const padded = base64.padEnd(base64.length + (4 - base64.length % 4) % 4, '=')
    const payload = JSON.parse(atob(padded))
    
    if (payload.exp < Math.floor(Date.now() / 1000)) {
      return null
    }

    return payload
  } catch {
    return null
  }
}

// Constant-time string comparison to prevent timing attacks
function constantTimeCompare(a: string, b: string): boolean {
  const maxLength = Math.max(a.length, b.length)
  let result = a.length ^ b.length // XOR lengths into result
  for (let i = 0; i < maxLength; i++) {
    const aChar = i < a.length ? a.charCodeAt(i) : 0
    const bChar = i < b.length ? b.charCodeAt(i) : 0
    result |= aChar ^ bChar
  }
  return result === 0
}