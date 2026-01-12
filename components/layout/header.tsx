'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Search, ShoppingBag, Heart, User, Menu, X, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useCartStore } from '@/store/cart'
import { useWishlistStore } from '@/store/wishlist'
import { categories } from '@/lib/data'
import { cn } from '@/lib/utils'
import { SmartSearch } from '@/components/modern/smart-search'
import { ClientOnly } from '@/components/ui/client-only'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  
  const router = useRouter()
  const { getTotalItems, toggleCart } = useCartStore()
  const { getTotalItems: getWishlistItems } = useWishlistStore()
  
  const cartItemsCount = getTotalItems()
  const wishlistItemsCount = getWishlistItems()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`)
      setSearchQuery('')
    }
  }

  return (
    <header className={cn(
      'sticky top-0 z-50 w-full transition-all duration-300',
      isScrolled 
        ? 'glass-effect shadow-xl border-b border-white/20' 
        : 'bg-white'
    )}>
      {/* Top Bar */}
      <div className="bg-gold-500 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-4">
              <span>Free shipping on orders above ₹50,000</span>
            </div>
            <div className="flex items-center space-x-4">
              <a href="tel:+917947106192" className="flex items-center space-x-1 hover:text-gold-200">
                <Phone className="h-4 w-4" />
                <span>+91 7947106192</span>
              </a>
              <span>|</span>
              <span>Kurnool, Andhra Pradesh</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">AJ</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-playfair font-bold text-gray-900">
                AJ Abhi Jewels
              </h1>
              <p className="text-xs text-gray-500">Premium Jewelry Collection</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-gold-600 font-medium transition-colors">
              Home
            </Link>
            <div className="relative group">
              <button className="text-gray-700 hover:text-gold-600 font-medium transition-colors">
                Collections
              </button>
              <div className="absolute top-full left-0 w-64 bg-white shadow-luxury rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 mt-2">
                <div className="p-4">
                  {categories.map((category) => (
                    <Link
                      key={category.id}
                      href={`/collections/${category.slug}`}
                      className="block py-2 px-3 text-gray-700 hover:text-gold-600 hover:bg-gold-50 rounded-md transition-colors"
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <Link href="/about" className="text-gray-700 hover:text-gold-600 font-medium transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-gold-600 font-medium transition-colors">
              Contact
            </Link>
          </nav>

          {/* Smart Search */}
          <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
            <SmartSearch onSearch={(query) => router.push(`/search?q=${encodeURIComponent(query)}`)} />
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            {/* Search (Mobile) */}
            <Button variant="ghost" size="icon" className="md:hidden">
              <Search className="h-5 w-5" />
            </Button>

            {/* Wishlist */}
            <Link href="/wishlist">
              <Button
                variant="ghost"
                size="icon"
                className="relative"
                aria-label="wishlist"
                data-testid="wishlist-button"
              >
                <Heart className="h-5 w-5" />
                <ClientOnly>
                  {wishlistItemsCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-gold-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {wishlistItemsCount}
                    </span>
                  )}
                </ClientOnly>
              </Button>
            </Link>

            {/* Cart */}
            <Button
              variant="ghost"
              size="icon"
              className="relative"
              onClick={toggleCart}
              aria-label="cart"
              data-testid="cart-button"
            >
              <ShoppingBag className="h-5 w-5" />
              <ClientOnly>
                {cartItemsCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-gold-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartItemsCount}
                  </span>
                )}
              </ClientOnly>
            </Button>

            {/* User Account */}
            <Link href="/account">
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
            </Link>

            {/* Admin Panel */}
            <Link href="/admin">
              <Button
                variant="outline"
                size="sm"
                className="hidden md:flex"
                aria-label="admin"
                data-testid="admin-button"
              >
                Admin
              </Button>
            </Link>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden bg-white border-t shadow-lg transition-all duration-300 overflow-hidden ${
        isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
          <div className="container mx-auto px-4 py-6">
            {/* Mobile Search */}
            <div className="mb-6">
              <SmartSearch onSearch={(query) => {
                router.push(`/search?q=${encodeURIComponent(query)}`)
                setIsMenuOpen(false)
              }} />
            </div>
            
            <nav className="space-y-3">
              <Link
                href="/"
                className="block py-3 px-4 text-gray-700 hover:text-gold-600 hover:bg-gold-50 rounded-lg font-medium transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <div className="space-y-2">
                <p className="font-medium text-gray-900 px-4 py-2">Collections</p>
                {categories.map((category) => (
                  <Link
                    key={category.id}
                    href={`/collections/${category.slug}`}
                    className="block py-2 pl-8 pr-4 text-gray-600 hover:text-gold-600 hover:bg-gold-50 rounded-lg transition-all duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
              <Link
                href="/about"
                className="block py-3 px-4 text-gray-700 hover:text-gold-600 hover:bg-gold-50 rounded-lg font-medium transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="block py-3 px-4 text-gray-700 hover:text-gold-600 hover:bg-gold-50 rounded-lg font-medium transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>
    </header>
  )
}