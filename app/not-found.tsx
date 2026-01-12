import Link from 'next/link'
import { Home, Search, AlertCircle } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-[70vh] bg-gradient-to-br from-gold-50 via-white to-platinum-50 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Error Icon */}
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-gold-100 to-gold-200 rounded-full mb-6">
            <AlertCircle className="h-12 w-12 text-gold-600" />
          </div>
          <h1 className="text-6xl md:text-7xl font-playfair font-bold text-gray-900 mb-4">
            404
          </h1>
          <h2 className="text-2xl md:text-3xl font-playfair font-semibold text-gray-800 mb-3">
            Page Not Found
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            We couldn't find the page you're looking for. It may have been moved or doesn't exist.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-gold-600 to-gold-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-gold-700 hover:to-gold-600 transition-all shadow-lg hover:shadow-xl"
          >
            <Home className="h-5 w-5" />
            Go to Homepage
          </Link>
          
          <Link 
            href="/collections"
            className="inline-flex items-center gap-2 bg-white text-gray-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-all border-2 border-gray-200 hover:border-gold-400"
          >
            <Search className="h-5 w-5" />
            Browse Collections
          </Link>
        </div>

        {/* Helpful Links */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-4">You might be looking for:</p>
          <div className="flex flex-wrap gap-3 justify-center text-sm">
            <Link href="/collections/rings" className="text-gold-600 hover:text-gold-700 hover:underline">
              Rings
            </Link>
            <span className="text-gray-300">•</span>
            <Link href="/collections/necklaces" className="text-gold-600 hover:text-gold-700 hover:underline">
              Necklaces
            </Link>
            <span className="text-gray-300">•</span>
            <Link href="/collections/earrings" className="text-gold-600 hover:text-gold-700 hover:underline">
              Earrings
            </Link>
            <span className="text-gray-300">•</span>
            <Link href="/collections/bridal" className="text-gold-600 hover:text-gold-700 hover:underline">
              Bridal Collection
            </Link>
            <span className="text-gray-300">•</span>
            <Link href="/contact" className="text-gold-600 hover:text-gold-700 hover:underline">
              Contact Us
            </Link>
          </div>
        </div>

        {/* Support Section */}
        <div className="mt-8 p-6 bg-white rounded-2xl shadow-lg border border-gold-100">
          <p className="text-gray-700 mb-3">
            <strong>Need help?</strong> Our team is here to assist you.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center text-sm">
            <a 
              href="tel:+917947106192" 
              className="text-gold-600 hover:text-gold-700 font-medium hover:underline"
            >
              📞 Call: +91 7947106192
            </a>
            <span className="hidden sm:inline text-gray-300">|</span>
            <a 
              href="mailto:info@ajabhijewels.com" 
              className="text-gold-600 hover:text-gold-700 font-medium hover:underline"
            >
              ✉️ Email: info@ajabhijewels.com
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
