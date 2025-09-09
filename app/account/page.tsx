import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { CartSidebar } from '@/components/cart/cart-sidebar'
import { AccountDashboard } from '@/components/account/account-dashboard'

export const metadata = {
  title: 'My Account - AJ Abhi Jewels',
  description: 'Manage your account, orders, and preferences.',
}

export default function AccountPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-8">
        <div className="container mx-auto px-4">
          <AccountDashboard />
        </div>
      </main>
      <Footer />
      <CartSidebar />
    </div>
  )
}