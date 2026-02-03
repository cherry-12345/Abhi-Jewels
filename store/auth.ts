'use client'

import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { sanitizeInput, validateEmail, generateCSRFToken, rateLimit } from '@/lib/security'
import { CryptoManager } from '@/lib/crypto'
import { JWTManager } from '@/lib/jwt'

interface AuthStore {
  isAuthenticated: boolean
  user: { name: string; email: string; role: string; loginTime?: string; sessionId?: string } | null
  token: string | null
  loginAttempts: number
  lastLoginAttempt: number
  isLocked: boolean
  login: (email: string, password: string) => Promise<{ success: boolean; message?: string }>
  logout: () => void
  checkAuth: () => boolean
  refreshToken: () => Promise<boolean>
  validateSession: () => Promise<boolean>
}

export const useAuthStore = create<AuthStore>()(
  persist(
    (set, get) => ({
      isAuthenticated: false,
      user: null,
      token: null,
      loginAttempts: 0,
      lastLoginAttempt: 0,
      isLocked: false,
      
      login: async (email: string, password: string) => {
        const state = get()
        const now = Date.now()
        
        try {
          // Check if account is locked
          if (state.isLocked && now - state.lastLoginAttempt < 30 * 60 * 1000) {
            return { success: false, message: 'Account locked. Try again in 30 minutes.' }
          }
          
          // Rate limiting
          if (!rateLimit.isAllowed(email)) {
            return { success: false, message: 'Too many attempts. Please try again later.' }
          }
          
          // Input validation
          if (!validateEmail(email)) {
            return { success: false, message: 'Invalid email format' }
          }
          
          const sanitizedEmail = sanitizeInput(email)
          const sanitizedPassword = sanitizeInput(password)
          
          // Enhanced password validation
          if (sanitizedPassword.length < 6) {
            return { success: false, message: 'Password too short' }
          }
          
      // Call server-side login endpoint for secure credential verification
      // The server reads ADMIN_PASSWORD from environment (never exposed to browser)
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: sanitizedEmail,
          password: sanitizedPassword
        })
      })


      let result
      let errorBody = ''
      
      try {
        // Read body once and try to parse as JSON
        const bodyText = await response.clone().text()
        errorBody = bodyText
        
        try {
          result = JSON.parse(bodyText)
        } catch {
          // If JSON parsing fails, use raw text
          result = { success: false, message: bodyText }
        }
      } catch {
        errorBody = 'Unable to read response body'
        result = { success: false, message: errorBody }
      }
      
      if (!response.ok || !result.success) {
        // Handle failed login attempts
        const newAttempts = state.loginAttempts + 1
        const shouldLock = newAttempts >= 5
        
        set({
          loginAttempts: newAttempts,
          lastLoginAttempt: now,
          isLocked: shouldLock
        })

        return { 
          success: false, 
          message: result.message || `Request failed with status ${response.status}` 
        }
      }
      if (!response.ok || !result.success) {
        // Handle failed login attempts
        const newAttempts = state.loginAttempts + 1
        const shouldLock = newAttempts >= 5
        
        set({
          loginAttempts: newAttempts,
          lastLoginAttempt: now,
          isLocked: shouldLock
        })

        return { success: false, message: result.message || 'Login failed' }
      }

      // Authentication successful - store user info
      const sessionId = CryptoManager.generateSecureToken()
      set({
        isAuthenticated: true,
        user: {
          name: result.user.name,
          email: result.user.email,
          role: result.user.role,
          sessionId,
          loginTime: result.user.loginTime
        },
        token: result.token || null,
        loginAttempts: 0,
        isLocked: false
      })
      
      return { success: true }
    } catch (error) {
      console.error('Login error:', error)
      return { success: false, message: 'Login failed. Please try again.' }
    }
  },
      
      logout: () => {
        // Secure logout with token invalidation
        set({ 
          isAuthenticated: false, 
          user: null, 
          token: null,
          loginAttempts: 0,
          isLocked: false
        })
        
        // Clear any sensitive data from memory
        if (typeof window !== 'undefined') {
          sessionStorage.clear()
          localStorage.removeItem('auth-store')
        }
      },
      
      checkAuth: () => {
        const state = get()
        return state.isAuthenticated && state.token !== null
      },
      
      refreshToken: async () => {
        const state = get()
        if (!state.token || !state.user) return false
        
        try {
          const payload = await JWTManager.verify(state.token)
          if (!payload) {
            set({ isAuthenticated: false, user: null, token: null })
            return false
          }
          
          // Generate new token if expiring soon (within 1 hour)
          const timeUntilExpiry = payload.exp - Math.floor(Date.now() / 1000)
          if (timeUntilExpiry < 3600) {
            const newToken = await JWTManager.sign({
              sub: payload.sub,
              email: payload.email,
              role: payload.role,
              sessionId: payload.sessionId
            })
            
            set({ token: newToken })
          }
          
          return true
        } catch {
          set({ isAuthenticated: false, user: null, token: null })
          return false
        }
      },
      
      validateSession: async () => {
        const state = get()
        if (!state.token) return false
        
        try {
          const payload = await JWTManager.verify(state.token)
          if (!payload) {
            set({ isAuthenticated: false, user: null, token: null })
            return false
          }
          
          return true
        } catch {
          set({ isAuthenticated: false, user: null, token: null })
          return false
        }
      }
    }),
    {
      name: 'auth-store',
    }
  )
)