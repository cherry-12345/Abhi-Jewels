'use client'

import { MessageCircle, X } from 'lucide-react'
import { useState } from 'react'

export function WhatsAppButton() {
  const [isExpanded, setIsExpanded] = useState(false)
  const phoneNumber = process.env.NEXT_PUBLIC_CONTACT_WHATSAPP || '917947106192' // Read from env variable
  const defaultMessage = 'Hi! I am interested in your jewelry collection.'

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Expanded Message Box */}
      {isExpanded && (
        <div className="absolute bottom-20 right-0 w-72 bg-white rounded-2xl shadow-2xl border border-gray-200 mb-4 animate-in slide-in-from-bottom-5">
          <div className="p-4 bg-gradient-to-r from-green-500 to-green-600 rounded-t-2xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <span className="text-lg">💎</span>
                </div>
                <div className="text-white">
                  <p className="font-semibold text-sm">AJ Abhi Jewels</p>
                  <p className="text-xs opacity-90">Typically replies instantly</p>
                </div>
              </div>
              <button
                onClick={() => setIsExpanded(false)}
                className="text-white hover:bg-white/20 rounded-full p-1 transition-colors"
                aria-label="Close chat"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>
          
          <div className="p-4">
            <div className="bg-gray-100 rounded-lg p-3 mb-3">
              <p className="text-sm text-gray-700">
                👋 Hello! How can we help you today?
              </p>
            </div>
            
            <button
              onClick={handleWhatsAppClick}
              className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 rounded-lg font-semibold hover:from-green-600 hover:to-green-700 transition-all flex items-center justify-center gap-2 shadow-lg"
            >
              <MessageCircle className="h-5 w-5" />
              Start Chat
            </button>
            
            <p className="text-xs text-gray-500 text-center mt-3">
              Chat with us on WhatsApp for instant assistance
            </p>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="group relative bg-gradient-to-r from-green-500 to-green-600 text-white p-4 rounded-full shadow-2xl hover:shadow-green-500/50 hover:scale-110 transition-all duration-300 flex items-center justify-center"
        aria-label="Chat on WhatsApp"
      >
        {isExpanded ? (
          <X className="h-7 w-7" />
        ) : (
          <>
            <MessageCircle className="h-7 w-7" />
            {/* Pulse Animation */}
            <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75"></span>
          </>
        )}
        
        {/* Tooltip */}
        {!isExpanded && (
          <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Chat with us on WhatsApp
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 w-2 h-2 bg-gray-900 rotate-45"></div>
          </div>
        )}
      </button>

      {/* Pulsing indicator dot (optional) */}
      {!isExpanded && (
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white animate-pulse"></div>
      )}
    </div>
  )
}
