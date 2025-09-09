'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { useAuthStore } from '@/store/auth'
import { Lock, Mail, Eye, EyeOff, Shield } from 'lucide-react'
import toast from 'react-hot-toast'

export function AdminLogin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const { login } = useAuthStore()
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    try {
      // Enhanced input validation
      if (!email.trim()) {
        toast.error('Email is required')
        return
      }
      
      if (!password.trim()) {
        toast.error('Password is required')
        return
      }
      
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        toast.error('Please enter a valid email address')
        return
      }
      
      // Check for suspicious patterns
      if (password.includes('<script>') || password.includes('javascript:')) {
        toast.error('Invalid input detected')
        return
      }
      
      const result = await login(email.trim(), password)
      if (result.success) {
        toast.success('Login successful! Redirecting...')
        // Add small delay for security
        setTimeout(() => {
          router.push('/admin/dashboard')
        }, 1000)
      } else {
        toast.error(result.message || 'Login failed')
        // Clear password on failed attempt
        setPassword('')
      }
    } catch (error) {
      toast.error('Login failed. Please try again.')
      setPassword('')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gold-50 via-white to-platinum-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <Shield className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-2xl font-playfair font-bold text-gray-900 mb-2">
            Admin Panel
          </h1>
          <p className="text-gray-600">AJ Abhi Jewels Management System</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                placeholder="admin@ajabhijewels.com"
                aria-describedby="email-help"
                autoComplete="email"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                placeholder="Enter your password"
                aria-describedby="password-help"
                autoComplete="current-password"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </div>
          </div>

          <Button
            type="submit"
            variant="luxury"
            className="w-full"
            disabled={isLoading}
          >
            {isLoading ? 'Signing In...' : 'Sign In'}
          </Button>
        </form>

        <div className="mt-6 p-4 bg-gold-50 rounded-lg">
          <p className="text-sm text-gold-700 font-medium mb-2">Demo Credentials:</p>
          <p className="text-xs text-gold-600">Email: admin@ajabhijewels.com</p>
          <p className="text-xs text-gold-600">Password: admin123</p>
        </div>
      </div>
    </div>
  )
}