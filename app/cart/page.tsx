import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { CartSidebar } from '@/components/cart/cart-sidebar'
import { CartContent } from '@/components/cart/cart-content'

export const metadata = {
  title: 'Shopping Cart - AJ Abhi Jewels',
  description: 'Review your selected jewelry items and proceed to secure checkout.',
}

export default function CartPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-8">
        <div className="container mx-auto px-4">
          <CartContent />
        </div>
      </main>
      <Footer />
      <CartSidebar />
    </div>
  )
}