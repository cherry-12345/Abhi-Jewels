import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { CartSidebar } from '@/components/cart/cart-sidebar'
import { ProductGrid } from '@/components/product/product-grid'
import { FilterSidebar } from '@/components/product/filter-sidebar'
import { allProducts, categories } from '@/lib/data'

export const metadata = {
  title: 'Jewelry Collections - AJ Abhi Jewels',
  description: 'Explore our complete collection of premium jewelry including rings, necklaces, earrings, and bridal sets.',
}

export default function CollectionsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-8">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-4xl font-playfair font-bold text-gray-900 mb-4">
              Our Collections
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl">
              Discover our exquisite range of handcrafted jewelry pieces, each designed to celebrate life's precious moments.
            </p>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-8">
            <aside className="lg:w-64 flex-shrink-0">
              <FilterSidebar categories={categories} />
            </aside>
            <div className="flex-1">
              <ProductGrid products={allProducts} />
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <CartSidebar />
    </div>
  )
}