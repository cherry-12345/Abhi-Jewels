'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { LayoutDashboard, Package, ShoppingCart, Users, Settings, BarChart3, LogOut, Home, Eye } from 'lucide-react'
import { useAuthStore } from '@/store/auth'
import { useProductStore } from '@/store/products'
import { Button } from '@/components/ui/button'
import { ClientOnly } from '@/components/ui/client-only'

const navigation = [
  { name: 'Dashboard', href: '/admin/dashboard', icon: LayoutDashboard },
  { name: 'Products', href: '/admin/products', icon: Package },
  { name: 'Orders', href: '/admin/orders', icon: ShoppingCart },
  { name: 'Customers', href: '/admin/customers', icon: Users },
  { name: 'Analytics', href: '/admin/analytics', icon: BarChart3 },
  { name: 'Settings', href: '/admin/settings', icon: Settings },
]

export function AdminSidebar() {
  const pathname = usePathname()
  const router = useRouter()
  const { logout, user } = useAuthStore()
  const { products } = useProductStore()

  const handleLogout = () => {
    logout()
    router.push('/admin')
  }

  const totalProducts = products.length
  const inStockProducts = products.filter(p => p.inStock).length
  const outOfStockProducts = totalProducts - inStockProducts

  return (
    <div className="w-64 bg-white shadow-sm border-r border-gray-200 min-h-screen flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">AJ</span>
          </div>
          <div>
            <h2 className="font-semibold text-gray-900">Admin Panel</h2>
            <p className="text-xs text-gray-500">{user?.name}</p>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <ClientOnly>
        <div className="p-4 border-b border-gray-200">
          <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-3">Quick Stats</h3>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Total Products</span>
              <span className="text-sm font-semibold text-gray-900">{totalProducts}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">In Stock</span>
              <span className="text-sm font-semibold text-green-600">{inStockProducts}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Out of Stock</span>
              <span className="text-sm font-semibold text-red-600">{outOfStockProducts}</span>
            </div>
          </div>
        </div>
      </ClientOnly>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {navigation.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-gold-50 text-gold-700 border-r-2 border-gold-500'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              <div className="flex items-center space-x-3">
                <item.icon className="h-5 w-5" />
                <span>{item.name}</span>
              </div>
              <ClientOnly>
                {item.name === 'Products' && (
                  <span className="bg-gold-100 text-gold-700 text-xs px-2 py-1 rounded-full">
                    {totalProducts}
                  </span>
                )}
              </ClientOnly>
            </Link>
          )
        })}
      </nav>

      {/* Quick Actions */}
      <div className="p-4 border-t border-gray-200 space-y-2">
        <Link href="/" target="_blank">
          <Button variant="outline" size="sm" className="w-full justify-start">
            <Eye className="mr-2 h-4 w-4" />
            View Main Site
          </Button>
        </Link>
        <Link href="/">
          <Button variant="ghost" size="sm" className="w-full justify-start">
            <Home className="mr-2 h-4 w-4" />
            Go to Homepage
          </Button>
        </Link>
        <Button 
          variant="ghost" 
          size="sm" 
          className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50"
          onClick={handleLogout}
        >
          <LogOut className="mr-2 h-4 w-4" />
          Logout
        </Button>
      </div>
    </div>
  )
}