'use client'

import Link from 'next/link'
import { Bell, User, LogOut, Package, TrendingUp, Users, DollarSign, RefreshCw, Eye } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useProductStore } from '@/store/products'
import { useAuthStore } from '@/store/auth'
import { useState, useEffect } from 'react'

export function AdminHeader() {
  const { products } = useProductStore()
  const { user } = useAuthStore()
  const [lastUpdate, setLastUpdate] = useState(new Date())

  useEffect(() => {
    setLastUpdate(new Date())
  }, [products])

  const totalProducts = products.length
  const inStockProducts = products.filter(p => p.inStock).length
  const totalValue = products.reduce((sum, p) => sum + (p.price * p.stockQuantity), 0)

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <Link href="/admin/dashboard" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-gold-400 to-gold-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">AJ</span>
              </div>
              <div>
                <h1 className="text-lg font-bold text-gray-900">Admin Panel</h1>
                <p className="text-xs text-gray-500">AJ Abhi Jewels Management</p>
              </div>
            </Link>

            {/* Real-time Stats */}
            <div className="hidden lg:flex items-center space-x-6 pl-6 border-l border-gray-200">
              <div className="flex items-center space-x-2">
                <Package className="h-4 w-4 text-blue-600" />
                <div>
                  <p className="text-xs text-gray-500">Products</p>
                  <p className="text-sm font-semibold text-gray-900">{totalProducts}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-4 w-4 text-green-600" />
                <div>
                  <p className="text-xs text-gray-500">In Stock</p>
                  <p className="text-sm font-semibold text-gray-900">{inStockProducts}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <DollarSign className="h-4 w-4 text-gold-600" />
                <div>
                  <p className="text-xs text-gray-500">Inventory Value</p>
                  <p className="text-sm font-semibold text-gray-900">₹{(totalValue / 100000).toFixed(1)}L</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            {/* Last Update */}
            <div className="hidden md:flex items-center space-x-2 text-xs text-gray-500">
              <RefreshCw className="h-3 w-3" />
              <span>Updated {lastUpdate.toLocaleTimeString()}</span>
            </div>

            {/* Quick Actions */}
            <Link href="/" target="_blank">
              <Button variant="ghost" size="sm">
                <Eye className="h-4 w-4 mr-2" />
                View Site
              </Button>
            </Link>
            
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gold-100 rounded-full flex items-center justify-center">
                <span className="text-gold-600 font-semibold text-sm">
                  {user?.name?.charAt(0) || 'A'}
                </span>
              </div>
              <div className="hidden sm:block">
                <p className="text-sm font-medium text-gray-900">{user?.name}</p>
                <p className="text-xs text-gray-500">{user?.role}</p>
              </div>
            </div>

            <Link href="/">
              <Button variant="outline" size="sm">
                <LogOut className="h-4 w-4 mr-2" />
                Exit
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}