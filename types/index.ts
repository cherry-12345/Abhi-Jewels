export interface Product {
  id: string
  name: string
  description: string
  price: number
  originalPrice?: number
  images: string[]
  category: string
  subcategory?: string
  material: string
  weight?: string
  dimensions?: string
  certification?: string
  inStock: boolean
  stockQuantity: number
  rating: number
  reviewCount: number
  tags: string[]
  featured: boolean
  createdAt: string
  updatedAt: string
}

export interface Category {
  id: string
  name: string
  slug: string
  description: string
  image: string
  parentId?: string
  children?: Category[]
  productCount: number
}

export interface CartItem {
  id: string
  productId: string
  product: Product
  quantity: number
  selectedSize?: string
  selectedMaterial?: string
  addedAt: string
}

export interface User {
  id: string
  email: string
  firstName: string
  lastName: string
  phone?: string
  avatar?: string
  addresses: Address[]
  orders: Order[]
  wishlist: string[]
  createdAt: string
  updatedAt: string
}

export interface Address {
  id: string
  type: 'billing' | 'shipping'
  firstName: string
  lastName: string
  company?: string
  address1: string
  address2?: string
  city: string
  state: string
  postalCode: string
  country: string
  phone?: string
  isDefault: boolean
}

export interface Order {
  id: string
  userId: string
  orderNumber: string
  status: 'pending' | 'confirmed' | 'processing' | 'shipped' | 'delivered' | 'cancelled'
  items: OrderItem[]
  subtotal: number
  tax: number
  shipping: number
  discount: number
  total: number
  currency: string
  paymentMethod: string
  paymentStatus: 'pending' | 'paid' | 'failed' | 'refunded'
  shippingAddress: Address
  billingAddress: Address
  trackingNumber?: string
  notes?: string
  createdAt: string
  updatedAt: string
}

export interface OrderItem {
  id: string
  productId: string
  product: Product
  quantity: number
  price: number
  selectedSize?: string
  selectedMaterial?: string
}

export interface Review {
  id: string
  productId: string
  userId: string
  user: {
    firstName: string
    lastName: string
    avatar?: string
  }
  rating: number
  title: string
  comment: string
  images?: string[]
  verified: boolean
  helpful: number
  createdAt: string
}

export interface WishlistItem {
  id: string
  productId: string
  product: Product
  addedAt: string
}

export interface FilterOptions {
  categories: string[]
  priceRange: [number, number]
  materials: string[]
  inStock: boolean
  rating: number
  sortBy: 'name' | 'price-low' | 'price-high' | 'rating' | 'newest'
}

export interface SearchResult {
  products: Product[]
  total: number
  page: number
  limit: number
  filters: FilterOptions
}

export interface ContactForm {
  name: string
  email: string
  phone?: string
  subject: string
  message: string
  type: 'general' | 'support' | 'custom-order' | 'complaint'
}

export interface Newsletter {
  email: string
  preferences: {
    newProducts: boolean
    sales: boolean
    events: boolean
  }
}