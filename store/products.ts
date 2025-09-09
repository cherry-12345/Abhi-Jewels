'use client'

import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { Product } from '@/types'
import { allProducts } from '@/lib/data'

interface ProductStore {
  products: Product[]
  addProduct: (product: Omit<Product, 'id'>) => void
  updateProduct: (id: string, updates: Partial<Product>) => void
  deleteProduct: (id: string) => void
  getProduct: (id: string) => Product | undefined
  getProductsByCategory: (category: string) => Product[]
}

export const useProductStore = create<ProductStore>()(
  persist(
    (set, get) => ({
      products: allProducts,
      
      addProduct: (productData) => {
        const newProduct: Product = {
          ...productData,
          id: `product-${Date.now()}`,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        }
        set((state) => ({
          products: [...state.products, newProduct]
        }))
      },
      
      updateProduct: (id, updates) => {
        set((state) => ({
          products: state.products.map((product) =>
            product.id === id
              ? { ...product, ...updates, updatedAt: new Date().toISOString() }
              : product
          )
        }))
      },
      
      deleteProduct: (id) => {
        set((state) => ({
          products: state.products.filter((product) => product.id !== id)
        }))
      },
      
      getProduct: (id) => {
        return get().products.find((product) => product.id === id)
      },
      
      getProductsByCategory: (category) => {
        return get().products.filter((product) => product.category === category)
      }
    }),
    {
      name: 'product-store',
    }
  )
)