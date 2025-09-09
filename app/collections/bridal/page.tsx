import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { CartSidebar } from '@/components/cart/cart-sidebar'
import { BridalContent } from '@/components/collections/bridal-content'

export const metadata = {
  title: 'Bridal Collection - AJ Abhi Jewels',
  description: 'Complete bridal jewelry sets for your special day. Traditional and contemporary designs.',
}

export default function BridalPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-8">
        <BridalContent />
      </main>
      <Footer />
      <CartSidebar />
    </div>
  )
}