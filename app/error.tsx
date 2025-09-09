'use client'

import { useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { RefreshCw, Home } from 'lucide-react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-diamond via-white to-platinum-50">
      <div className="text-center max-w-md mx-auto p-6">
        <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="text-2xl">💎</span>
        </div>
        
        <h2 className="text-2xl font-playfair font-bold text-gray-900 mb-4">
          Oops! Something went wrong
        </h2>
        
        <p className="text-gray-600 mb-8">
          We encountered an unexpected error while loading your jewelry experience. 
          Please try again or return to the homepage.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button onClick={reset} variant="default" className="flex items-center">
            <RefreshCw className="mr-2 h-4 w-4" />
            Try Again
          </Button>
          
          <Button onClick={() => window.location.href = '/'} variant="outline" className="flex items-center">
            <Home className="mr-2 h-4 w-4" />
            Go Home
          </Button>
        </div>
        
        <p className="text-sm text-gray-500 mt-6">
          If the problem persists, please contact us at{' '}
          <a href="tel:+917947106192" className="text-gold-600 hover:text-gold-700">
            +91 7947106192
          </a>
        </p>
      </div>
    </div>
  )
}