// Security utilities and validation
export const sanitizeInput = (input: string): string => {
  return input.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/javascript:/gi, '')
    .replace(/on\w+\s*=/gi, '')
    .trim()
}

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export const validatePassword = (password: string): { isValid: boolean; errors: string[] } => {
  const errors: string[] = []
  
  if (password.length < 8) {
    errors.push('Password must be at least 8 characters long')
  }
  if (!/[A-Z]/.test(password)) {
    errors.push('Password must contain at least one uppercase letter')
  }
  if (!/[a-z]/.test(password)) {
    errors.push('Password must contain at least one lowercase letter')
  }
  if (!/\d/.test(password)) {
    errors.push('Password must contain at least one number')
  }
  
  return {
    isValid: errors.length === 0,
    errors
  }
}

export const hashPassword = async (password: string): Promise<string> => {
  // In production, use bcrypt or similar
  const encoder = new TextEncoder()
  const data = encoder.encode(password + 'salt_key_2024')
  const hashBuffer = await crypto.subtle.digest('SHA-256', data)
  const hashArray = Array.from(new Uint8Array(hashBuffer))
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('')
}

export const generateCSRFToken = (): string => {
  return crypto.randomUUID()
}

export const validateCSRFToken = (token: string, storedToken: string): boolean => {
  // Constant-time comparison to prevent timing attacks
  if (token.length !== 36 || storedToken.length !== 36) {
    return false
  }
  
  // Manual constant-time comparison
  let result = 0
  for (let i = 0; i < 36; i++) {
    result |= token.charCodeAt(i) ^ storedToken.charCodeAt(i)
  }
  return result === 0
}

export const rateLimit = {
  attempts: new Map<string, { count: number; lastAttempt: number }>(),
  
  isAllowed(identifier: string, maxAttempts = 5, windowMs = 15 * 60 * 1000): boolean {
    const now = Date.now()
    const record = this.attempts.get(identifier)
    
    // Clean up old entries to prevent memory leaks
    if (this.attempts.size > 10000) {
      const cutoff = now - windowMs
      for (const [key, value] of this.attempts.entries()) {
        if (value.lastAttempt < cutoff) {
          this.attempts.delete(key)
        }
      }
    }
    
    if (!record || now - record.lastAttempt > windowMs) {
      this.attempts.set(identifier, { count: 1, lastAttempt: now })
      return true
    }
    
    if (record.count >= maxAttempts) {
      return false
    }
    
    record.count++
    record.lastAttempt = now
    return true
  },
  
  reset(identifier: string): void {
    this.attempts.delete(identifier)
  }
}

export const sanitizeHTML = (html: string): string => {
  return html
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;')
}

export const validatePhoneNumber = (phone: string): boolean => {
  const phoneRegex = /^\+?[1-9]\d{1,14}$/
  return phoneRegex.test(phone.replace(/[\s-]/g, ''))
}