'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuthStore } from '@/store/auth'
import { AdminHeader } from '@/components/admin/admin-header'
import { AdminSidebar } from '@/components/admin/admin-sidebar'

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { isAuthenticated, checkAuth, validateSession, refreshToken, logout } = useAuthStore()
  const router = useRouter()

  useEffect(() => {
    const validateAndRefresh = async () => {
      if (!isAuthenticated || !checkAuth()) {
        router.push('/admin')
        return
      }
      
      const isValid = await validateSession()
      if (!isValid) {
        logout()
        router.push('/admin')
        return
      }
      
      await refreshToken()
    }
    
    validateAndRefresh()
    const interval = setInterval(validateAndRefresh, 5 * 60 * 1000)
    return () => clearInterval(interval)
  }, [isAuthenticated, checkAuth, validateSession, refreshToken, logout, router])

  // Don't render layout for login page
  if (!isAuthenticated) {
    return <>{children}</>
  }

  return (
    <div className="flex h-screen bg-gray-50">
      <AdminSidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <AdminHeader />
        <main className="flex-1 overflow-y-auto p-6">
          {children}
        </main>
      </div>
    </div>
  )
}