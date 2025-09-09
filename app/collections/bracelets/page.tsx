import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { CartSidebar } from '@/components/cart/cart-sidebar'
import { BraceletsContent } from '@/components/collections/bracelets-content'

export const metadata = {
  title: 'Bracelets Collection - AJ Abhi Jewels',
  description: 'Elegant bracelets and bangles crafted with precious metals and stones.',
}

export default function BraceletsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-8">
        <BraceletsContent />
      </main>
      <Footer />
      <CartSidebar />
    </div>
  )
}