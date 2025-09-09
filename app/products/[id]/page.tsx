import { notFound } from 'next/navigation'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { CartSidebar } from '@/components/cart/cart-sidebar'
import { ProductDetail } from '@/components/product/product-detail'
import { RelatedProducts } from '@/components/product/related-products'
import { allProducts } from '@/lib/data'

interface ProductPageProps {
  params: {
    id: string
  }
}

export async function generateMetadata({ params }: ProductPageProps) {
  const product = allProducts.find(p => p.id === params.id)
  
  if (!product) {
    return {
      title: 'Product Not Found - AJ Abhi Jewels'
    }
  }

  return {
    title: `${product.name} - AJ Abhi Jewels`,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: [product.images[0]],
    },
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = allProducts.find(p => p.id === params.id)
  
  if (!product) {
    notFound()
  }

  const relatedProducts = allProducts
    .filter(p => p.id !== product.id && p.category === product.category)
    .slice(0, 4)

  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-8">
        <div className="container mx-auto px-4">
          <ProductDetail product={product} />
          {relatedProducts.length > 0 && (
            <RelatedProducts products={relatedProducts} />
          )}
        </div>
      </main>
      <Footer />
      <CartSidebar />
    </div>
  )
}