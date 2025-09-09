import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { CartSidebar } from '@/components/cart/cart-sidebar'
import { HeroSection } from '@/components/home/hero-section'
import { FeaturedProducts } from '@/components/home/featured-products'
import { CategoryShowcase } from '@/components/home/category-showcase'
import { WhyChooseUs } from '@/components/home/why-choose-us'
import { Testimonials } from '@/components/home/testimonials'
import { InstagramFeed } from '@/components/home/instagram-feed'
import { LiveChat } from '@/components/modern/live-chat'
import { NewsletterPopup } from '@/components/modern/newsletter-popup'
import { ProductQuickView } from '@/components/modern/product-quick-view'
import { SmoothScroll } from '@/components/modern/smooth-scroll'
import { BackToTop } from '@/components/modern/back-to-top'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <CategoryShowcase />
        <FeaturedProducts />
        <WhyChooseUs />
        <Testimonials />
        <InstagramFeed />
      </main>
      <Footer />
      <CartSidebar />
      <LiveChat />
      <NewsletterPopup />
      <ProductQuickView />
      <SmoothScroll />
      <BackToTop />
    </div>
  )
}