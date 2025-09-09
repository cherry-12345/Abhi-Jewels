'use client'

import { useState } from 'react'
import { Search, Mail, Phone, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'

const mockCustomers = [
  {
    id: 1,
    name: 'Lakshmi Devi',
    email: 'lakshmi@example.com',
    phone: '+91 9876543210',
    location: 'Kurnool, AP',
    orders: 3,
    totalSpent: 275000,
    joinDate: '2023-12-15'
  },
  {
    id: 2,
    name: 'Ravi Kumar',
    email: 'ravi@example.com',
    phone: '+91 9876543211',
    location: 'Kurnool, AP',
    orders: 2,
    totalSpent: 180000,
    joinDate: '2024-01-20'
  },
  {
    id: 3,
    name: 'Sunitha Reddy',
    email: 'sunitha@example.com',
    phone: '+91 9876543212',
    location: 'Kurnool, AP',
    orders: 4,
    totalSpent: 320000,
    joinDate: '2023-11-10'
  }
]

export function AdminCustomers() {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Customers</h1>
        <p className="text-gray-600">Manage customer information and relationships</p>
      </div>

      {/* Search */}
      <div className="bg-white rounded-lg shadow-card p-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search customers..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500"
          />
        </div>
      </div>

      {/* Customers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockCustomers.map((customer) => (
          <div key={customer.id} className="bg-white rounded-lg shadow-card p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center">
                <span className="text-gold-600 font-bold text-lg">
                  {customer.name.charAt(0)}
                </span>
              </div>
              <span className="text-sm text-gray-500">
                Member since {new Date(customer.joinDate).toLocaleDateString()}
              </span>
            </div>
            
            <h3 className="font-semibold text-gray-900 mb-2">{customer.name}</h3>
            
            <div className="space-y-2 text-sm text-gray-600 mb-4">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>{customer.email}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>{customer.phone}</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>{customer.location}</span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200">
              <div className="text-center">
                <div className="text-lg font-bold text-gray-900">{customer.orders}</div>
                <div className="text-xs text-gray-500">Orders</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-gold-600">₹{(customer.totalSpent / 1000).toFixed(0)}K</div>
                <div className="text-xs text-gray-500">Total Spent</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}