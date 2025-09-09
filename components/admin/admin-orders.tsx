'use client'

import { useState } from 'react'
import { Search, Filter, Eye, Package, Truck, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { formatPrice } from '@/lib/utils'

const mockOrders = [
  {
    id: 'ORD-001',
    customer: 'Lakshmi Devi',
    email: 'lakshmi@example.com',
    phone: '+91 9876543210',
    items: 'Diamond Ring, Gold Chain',
    total: 125000,
    status: 'delivered',
    date: '2024-03-15',
    address: 'Kurnool, AP'
  },
  {
    id: 'ORD-002',
    customer: 'Ravi Kumar',
    email: 'ravi@example.com',
    phone: '+91 9876543211',
    items: 'Bridal Set',
    total: 250000,
    status: 'processing',
    date: '2024-03-14',
    address: 'Kurnool, AP'
  },
  {
    id: 'ORD-003',
    customer: 'Sunitha Reddy',
    email: 'sunitha@example.com',
    phone: '+91 9876543212',
    items: 'Pearl Earrings',
    total: 45000,
    status: 'shipped',
    date: '2024-03-13',
    address: 'Kurnool, AP'
  }
]

export function AdminOrders() {
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'processing': return <Package className="h-4 w-4" />
      case 'shipped': return <Truck className="h-4 w-4" />
      case 'delivered': return <CheckCircle className="h-4 w-4" />
      default: return <Package className="h-4 w-4" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'processing': return 'bg-yellow-100 text-yellow-800'
      case 'shipped': return 'bg-blue-100 text-blue-800'
      case 'delivered': return 'bg-green-100 text-green-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Orders</h1>
        <p className="text-gray-600">Manage customer orders and track deliveries</p>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg shadow-card p-6">
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search orders..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500"
              />
            </div>
          </div>
          <div>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500"
            >
              <option value="all">All Status</option>
              <option value="processing">Processing</option>
              <option value="shipped">Shipped</option>
              <option value="delivered">Delivered</option>
            </select>
          </div>
        </div>
      </div>

      {/* Orders Table */}
      <div className="bg-white rounded-lg shadow-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left py-3 px-6 font-medium text-gray-600">Order ID</th>
                <th className="text-left py-3 px-6 font-medium text-gray-600">Customer</th>
                <th className="text-left py-3 px-6 font-medium text-gray-600">Items</th>
                <th className="text-left py-3 px-6 font-medium text-gray-600">Total</th>
                <th className="text-left py-3 px-6 font-medium text-gray-600">Status</th>
                <th className="text-left py-3 px-6 font-medium text-gray-600">Date</th>
                <th className="text-left py-3 px-6 font-medium text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {mockOrders.map((order) => (
                <tr key={order.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-4 px-6">
                    <div className="font-medium text-gray-900">{order.id}</div>
                  </td>
                  <td className="py-4 px-6">
                    <div>
                      <div className="font-medium text-gray-900">{order.customer}</div>
                      <div className="text-sm text-gray-500">{order.email}</div>
                      <div className="text-sm text-gray-500">{order.phone}</div>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="text-sm text-gray-900">{order.items}</div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="font-medium">{formatPrice(order.total)}</div>
                  </td>
                  <td className="py-4 px-6">
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                      {getStatusIcon(order.status)}
                      <span className="ml-1 capitalize">{order.status}</span>
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="text-sm text-gray-900">{order.date}</div>
                  </td>
                  <td className="py-4 px-6">
                    <Button variant="ghost" size="sm">
                      <Eye className="h-4 w-4" />
                    </Button>
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