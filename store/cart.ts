'use client'

import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { CartItem, Product } from '@/types'
import toast from 'react-hot-toast'

interface CartStore {
  items: CartItem[]
  isOpen: boolean
  addItem: (product: Product, quantity?: number, options?: { size?: string; material?: string }) => void
  removeItem: (itemId: string) => void
  updateQuantity: (itemId: string, quantity: number) => void
  clearCart: () => void
  getTotalItems: () => number
  getTotalPrice: () => number
  openCart: () => void
  closeCart: () => void
  toggleCart: () => void
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,

      addItem: (product, quantity = 1, options = {}) => {
        const existingItemIndex = get().items.findIndex(
          item => 
            item.productId === product.id &&
            item.selectedSize === options.size &&
            item.selectedMaterial === options.material
        )

        if (existingItemIndex > -1) {
          // Update existing item
          set(state => ({
            items: state.items.map((item, index) =>
              index === existingItemIndex
                ? { ...item, quantity: item.quantity + quantity }
                : item
            )
          }))
          toast.success(`Updated ${product.name} quantity in cart`)
        } else {
          // Add new item
          const newItem: CartItem = {
            id: `${product.id}-${Date.now()}`,
            productId: product.id,
            product,
            quantity,
            selectedSize: options.size,
            selectedMaterial: options.material,
            addedAt: new Date().toISOString(),
          }

          set(state => ({
            items: [...state.items, newItem]
          }))
          toast.success(`Added ${product.name} to cart`)
        }
      },

      removeItem: (itemId) => {
        const item = get().items.find(item => item.id === itemId)
        set(state => ({
          items: state.items.filter(item => item.id !== itemId)
        }))
        if (item) {
          toast.success(`Removed ${item.product.name} from cart`)
        }
      },

      updateQuantity: (itemId, quantity) => {
        if (quantity <= 0) {
          get().removeItem(itemId)
          return
        }

        set(state => ({
          items: state.items.map(item =>
            item.id === itemId ? { ...item, quantity } : item
          )
        }))
      },

      clearCart: () => {
        set({ items: [] })
        toast.success('Cart cleared')
      },

      getTotalItems: () => {
        return get().items.reduce((total, item) => total + item.quantity, 0)
      },

      getTotalPrice: () => {
        return get().items.reduce((total, item) => total + (item.product.price * item.quantity), 0)
      },

      openCart: () => set({ isOpen: true }),
      closeCart: () => set({ isOpen: false }),
      toggleCart: () => set(state => ({ isOpen: !state.isOpen })),
    }),
    {
      name: 'aj-cart-storage',
      partialize: (state) => ({ items: state.items }),
    }
  )
)