'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Save, Store, Bell, Shield, Mail } from 'lucide-react'

export function AdminSettings() {
  const [settings, setSettings] = useState({
    storeName: 'AJ Abhi Jewels',
    storeEmail: 'info@ajabhijewels.com',
    storePhone: '+91 7947106192',
    storeAddress: 'Shop No 05, Skanda Business Park, Rajvihar, Kurnool - 518001',
    emailNotifications: true,
    smsNotifications: true,
    orderAlerts: true,
    lowStockAlerts: true
  })

  const handleSave = () => {
    // Save settings logic here
    console.log('Settings saved:', settings)
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
        <p className="text-gray-600">Manage your store settings and preferences</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Store Information */}
        <div className="bg-white rounded-lg shadow-card p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Store className="h-5 w-5 text-gold-600" />
            <h2 className="text-lg font-semibold text-gray-900">Store Information</h2>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Store Name</label>
              <input
                type="text"
                value={settings.storeName}
                onChange={(e) => setSettings({...settings, storeName: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input
                type="email"
                value={settings.storeEmail}
                onChange={(e) => setSettings({...settings, storeEmail: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
              <input
                type="tel"
                value={settings.storePhone}
                onChange={(e) => setSettings({...settings, storePhone: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
              <textarea
                value={settings.storeAddress}
                onChange={(e) => setSettings({...settings, storeAddress: e.target.value})}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500"
              />
            </div>
          </div>
        </div>

        {/* Notification Settings */}
        <div className="bg-white rounded-lg shadow-card p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Bell className="h-5 w-5 text-gold-600" />
            <h2 className="text-lg font-semibold text-gray-900">Notifications</h2>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900">Email Notifications</p>
                <p className="text-sm text-gray-600">Receive order updates via email</p>
              </div>
              <input
                type="checkbox"
                checked={settings.emailNotifications}
                onChange={(e) => setSettings({...settings, emailNotifications: e.target.checked})}
                className="h-4 w-4 text-gold-600 focus:ring-gold-500 border-gray-300 rounded"
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900">SMS Notifications</p>
                <p className="text-sm text-gray-600">Receive alerts via SMS</p>
              </div>
              <input
                type="checkbox"
                checked={settings.smsNotifications}
                onChange={(e) => setSettings({...settings, smsNotifications: e.target.checked})}
                className="h-4 w-4 text-gold-600 focus:ring-gold-500 border-gray-300 rounded"
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900">Order Alerts</p>
                <p className="text-sm text-gray-600">Get notified of new orders</p>
              </div>
              <input
                type="checkbox"
                checked={settings.orderAlerts}
                onChange={(e) => setSettings({...settings, orderAlerts: e.target.checked})}
                className="h-4 w-4 text-gold-600 focus:ring-gold-500 border-gray-300 rounded"
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900">Low Stock Alerts</p>
                <p className="text-sm text-gray-600">Alert when inventory is low</p>
              </div>
              <input
                type="checkbox"
                checked={settings.lowStockAlerts}
                onChange={(e) => setSettings({...settings, lowStockAlerts: e.target.checked})}
                className="h-4 w-4 text-gold-600 focus:ring-gold-500 border-gray-300 rounded"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className="flex justify-end">
        <Button onClick={handleSave} variant="default" className="flex items-center">
          <Save className="mr-2 h-4 w-4" />
          Save Settings
        </Button>
      </div>
    </div>
  )
}