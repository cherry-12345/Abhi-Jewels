'use client'

import { useState } from 'react'
import { User, Package, Heart, Settings, LogOut } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function AccountDashboard() {
  const [activeTab, setActiveTab] = useState('profile')

  const tabs = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'orders', label: 'Orders', icon: Package },
    { id: 'wishlist', label: 'Wishlist', icon: Heart },
    { id: 'settings', label: 'Settings', icon: Settings },
  ]

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-playfair font-bold text-gray-900 mb-2">
          My Account
        </h1>
        <p className="text-gray-600">
          Manage your account settings and view your order history.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-card p-6">
            <div className="space-y-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                    activeTab === tab.id
                      ? 'bg-gold-50 text-gold-700 border-l-4 border-gold-500'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <tab.icon className="h-5 w-5" />
                  <span>{tab.label}</span>
                </button>
              ))}
              <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left text-red-600 hover:bg-red-50 transition-colors">
                <LogOut className="h-5 w-5" />
                <span>Sign Out</span>
              </button>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="lg:col-span-3">
          <div className="bg-white rounded-lg shadow-card p-6">
            {activeTab === 'profile' && (
              <div>
                <h2 className="text-xl font-semibold mb-6">Profile Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      defaultValue="John"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gold-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      defaultValue="Doe"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gold-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      defaultValue="john@example.com"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gold-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      defaultValue="+91 9876543210"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gold-500"
                    />
                  </div>
                </div>
                <div className="mt-6">
                  <Button variant="default">Update Profile</Button>
                </div>
              </div>
            )}

            {activeTab === 'orders' && (
              <div>
                <h2 className="text-xl font-semibold mb-6">Order History</h2>
                <div className="space-y-4">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <p className="font-medium">Order #AJ123456</p>
                        <p className="text-sm text-gray-600">Placed on March 15, 2024</p>
                      </div>
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
                        Delivered
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">
                      Diamond Solitaire Ring, Gold Pearl Necklace
                    </p>
                    <p className="font-semibold">₹1,70,000</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'wishlist' && (
              <div>
                <h2 className="text-xl font-semibold mb-6">My Wishlist</h2>
                <p className="text-gray-600">Your wishlist is empty. Start adding items you love!</p>
              </div>
            )}

            {activeTab === 'settings' && (
              <div>
                <h2 className="text-xl font-semibold mb-6">Account Settings</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-medium mb-2">Notifications</h3>
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input type="checkbox" defaultChecked className="mr-2" />
                        Email notifications for new products
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" defaultChecked className="mr-2" />
                        SMS notifications for order updates
                      </label>
                    </div>
                  </div>
                  <div>
                    <Button variant="default">Save Settings</Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}