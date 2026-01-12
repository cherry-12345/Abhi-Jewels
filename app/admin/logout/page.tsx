'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuthStore } from '@/store/auth'

export default function AdminLogoutPage() {
  const router = useRouter()
  const { logout } = useAuthStore()

  useEffect(() => {
    logout()
    router.replace('/admin')
  }, [logout, router])

  return null
}

