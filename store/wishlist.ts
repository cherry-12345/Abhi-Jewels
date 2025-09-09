'use client'

import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { Product, WishlistItem } from '@/types'
import toast from 'react-hot-toast'

interface WishlistStore {
  items: WishlistItem[]
  addItem: (product: Product) => void
  removeItem: (productId: string) => void
  isInWishlist: (productId: string) => boolean
  clearWishlist: () => void
  getTotalItems: () => number
}

export const useWishlistStore = create<WishlistStore>()(
  persist(
    (set, get) => ({
      items: [],

      addItem: (product) => {
        const exists = get().items.some(item => item.productId === product.id)
        
        if (exists) {
          toast.error(`${product.name} is already in your wishlist`)
          return
        }

        const newItem: WishlistItem = {
          id: `wishlist-${product.id}-${Date.now()}`,
          productId: product.id,
          product,
          addedAt: new Date().toISOString(),
        }

        set(state => ({
          items: [...state.items, newItem]
        }))
        
        toast.success(`Added ${product.name} to wishlist`)
      },

      removeItem: (productId) => {
        const item = get().items.find(item => item.productId === productId)
        
        set(state => ({
          items: state.items.filter(item => item.productId !== productId)
        }))
        
        if (item) {
          toast.success(`Removed ${item.product.name} from wishlist`)
        }
      },

      isInWishlist: (productId) => {
        return get().items.some(item => item.productId === productId)
      },

      clearWishlist: () => {
        set({ items: [] })
        toast.success('Wishlist cleared')
      },

      getTotalItems: () => {
        return get().items.length
      },
    }),
    {
      name: 'aj-wishlist-storage',
    }
  )
)