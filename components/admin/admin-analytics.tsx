'use client'

import { TrendingUp, Users, ShoppingBag, DollarSign } from 'lucide-react'

export function AdminAnalytics() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Analytics</h1>
        <p className="text-gray-600">Track your business performance and insights</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { title: 'Total Revenue', value: '₹28.5L', change: '+12.5%', icon: DollarSign, color: 'text-green-600' },
          { title: 'Total Orders', value: '156', change: '+8.2%', icon: ShoppingBag, color: 'text-blue-600' },
          { title: 'New Customers', value: '23', change: '+15.3%', icon: Users, color: 'text-purple-600' },
          { title: 'Conversion Rate', value: '3.2%', change: '+0.5%', icon: TrendingUp, color: 'text-gold-600' }
        ].map((metric, index) => (
          <div key={index} className="bg-white rounded-lg shadow-card p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{metric.title}</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{metric.value}</p>
                <p className={`text-sm mt-1 ${metric.color}`}>
                  {metric.change} from last month
                </p>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg">
                <metric.icon className="h-6 w-6 text-gray-600" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Placeholder */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-card p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Sales Trend</h3>
          <div className="h-64 bg-gradient-to-r from-gold-100 to-gold-200 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <TrendingUp className="h-12 w-12 text-gold-600 mx-auto mb-2" />
              <p className="text-gold-700 font-medium">Sales trending upward</p>
              <p className="text-sm text-gold-600">+15% this month</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-card p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Products</h3>
          <div className="space-y-4">
            {[
              { name: 'Diamond Rings', sales: 45, revenue: '₹12.5L' },
              { name: 'Gold Necklaces', sales: 38, revenue: '₹8.2L' },
              { name: 'Bridal Sets', sales: 22, revenue: '₹15.8L' },
              { name: 'Pearl Earrings', sales: 31, revenue: '₹4.5L' }
            ].map((product, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">{product.name}</p>
                  <p className="text-sm text-gray-600">{product.sales} units sold</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-gray-900">{product.revenue}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}