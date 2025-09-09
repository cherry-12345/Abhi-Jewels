import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { CartSidebar } from '@/components/cart/cart-sidebar'
import { EarringsContent } from '@/components/collections/earrings-content'

export const metadata = {
  title: 'Earrings Collection - AJ Abhi Jewels',
  description: 'Beautiful earrings collection including studs, hoops, and chandelier earrings.',
}

export default function EarringsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-8">
        <EarringsContent />
      </main>
      <Footer />
      <CartSidebar />
    </div>
  )
}