'use client'

import { useState, useEffect } from 'react'
import { TrendingUp, Package, ShoppingCart, Users, DollarSign, Eye, Plus, Edit, Trash2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useProductStore } from '@/store/products'
import { formatPrice } from '@/lib/utils'
import Link from 'next/link'
import toast from 'react-hot-toast'

export function DashboardContent() {
  const { products, deleteProduct } = useProductStore()
  
  const [stats, setStats] = useState({
    totalProducts: 0,
    totalOrders: 156,
    totalCustomers: 1247,
    totalRevenue: 2850000,
    lowStockItems: 0,
    pendingOrders: 23
  })

  useEffect(() => {
    const totalProducts = products.length
    const lowStockItems = products.filter(p => p.stockQuantity < 5).length
    const totalRevenue = products.reduce((sum, p) => sum + (p.price * p.stockQuantity), 0)
    
    setStats(prev => ({
      ...prev,
      totalProducts,
      lowStockItems,
      totalRevenue
    }))
  }, [products])

  const handleQuickDelete = (productId: string) => {
    if (confirm('Are you sure you want to delete this product?')) {
      deleteProduct(productId)
      toast.success('Product deleted successfully')
    }
  }

  const statCards = [
    {
      title: 'Total Revenue',
      value: formatPrice(stats.totalRevenue),
      change: '+12.5%',
      changeType: 'positive' as const,
      icon: DollarSign,
      color: 'text-green-600 bg-green-50'
    },
    {
      title: 'Total Products',
      value: stats.totalProducts.toString(),
      change: '+3 new',
      changeType: 'positive' as const,
      icon: Package,
      color: 'text-blue-600 bg-blue-50'
    },
    {
      title: 'Total Orders',
      value: stats.totalOrders.toString(),
      change: '+8.2%',
      changeType: 'positive' as const,
      icon: ShoppingCart,
      color: 'text-purple-600 bg-purple-50'
    },
    {
      title: 'Total Customers',
      value: stats.totalCustomers.toString(),
      change: '+15.3%',
      changeType: 'positive' as const,
      icon: Users,
      color: 'text-gold-600 bg-gold-50'
    }
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600">Welcome back! Here's what's happening with your store.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow-card p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                <p className={`text-sm mt-1 ${
                  stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {stat.change} from last month
                </p>
              </div>
              <div className={`p-3 rounded-lg ${stat.color}`}>
                <stat.icon className="h-6 w-6" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-card p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
          <div className="space-y-3">
            <Link href="/admin/products" className="w-full flex items-center space-x-3 p-3 bg-gold-50 text-gold-700 rounded-lg hover:bg-gold-100 transition-colors">
              <Plus className="h-5 w-5" />
              <span>Add New Product</span>
            </Link>
            <Link href="/admin/orders" className="w-full flex items-center space-x-3 p-3 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors">
              <Eye className="h-5 w-5" />
              <span>View All Orders</span>
            </Link>
            <Link href="/admin/analytics" className="w-full flex items-center space-x-3 p-3 bg-purple-50 text-purple-700 rounded-lg hover:bg-blue-100 transition-colors">
              <TrendingUp className="h-5 w-5" />
              <span>View Analytics</span>
            </Link>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-card p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Alerts</h3>
          <div className="space-y-3">
            <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-sm font-medium text-red-800">Low Stock Alert</p>
              <p className="text-sm text-red-600">{stats.lowStockItems} products are running low on stock</p>
            </div>
            <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-sm font-medium text-yellow-800">Pending Orders</p>
              <p className="text-sm text-yellow-600">{stats.pendingOrders} orders need attention</p>
            </div>
            <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-sm font-medium text-green-800">System Status</p>
              <p className="text-sm text-green-600">All systems operational</p>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Products */}
      <div className="bg-white rounded-lg shadow-card p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Recent Products</h3>
          <Link href="/admin/products">
            <Button variant="outline" size="sm">View All</Button>
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-medium text-gray-600">Product</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Category</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Price</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Stock</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.slice(0, 5).map((product) => (
                <tr key={product.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4">
                    <div className="font-medium text-gray-900">{product.name}</div>
                    <div className="text-sm text-gray-500">{product.material}</div>
                  </td>
                  <td className="py-3 px-4 text-gray-600">{product.category}</td>
                  <td className="py-3 px-4 font-medium">{formatPrice(product.price)}</td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      product.stockQuantity > 10 
                        ? 'bg-green-100 text-green-800'
                        : product.stockQuantity > 5
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {product.stockQuantity} units
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex space-x-1">
                      <Link href="/admin/products">
                        <Button variant="ghost" size="sm">
                          <Edit className="h-3 w-3" />
                        </Button>
                      </Link>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="text-red-600 hover:text-red-700"
                        onClick={() => handleQuickDelete(product.id)}
                      >
                        <Trash2 className="h-3 w-3" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}