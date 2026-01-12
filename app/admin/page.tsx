'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { AdminLogin } from '@/components/admin/admin-login'
import { useAuthStore } from '@/store/auth'

export default function AdminPage() {
  const { isAuthenticated, checkAuth } = useAuthStore()
  const router = useRouter()

  useEffect(() => {
    if (isAuthenticated && checkAuth()) {
      router.replace('/admin/dashboard')
    }
  }, [isAuthenticated, checkAuth, router])

  return <AdminLogin />
}