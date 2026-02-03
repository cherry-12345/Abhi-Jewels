'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuthStore } from '@/store/auth'

export default function AdminLogoutPage() {
  const router = useRouter()
  const { logout } = useAuthStore()

  useEffect(() => {
    // Clear server-side cookie first
    fetch('/api/auth/logout', { method: 'POST', credentials: 'include' })
      .then(() => {
        // Then clear client-side state
        logout()
        // Finally redirect
        router.replace('/admin')
      })
      .catch((error) => {
        console.error('Logout error:', error)
        // Still clear client state and redirect even if cookie clear fails
        logout()
        router.replace('/admin')
      })
  }, [logout, router])

  return null
}

