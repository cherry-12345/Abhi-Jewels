// SEO optimization utilities
export interface SEOData {
  title: string
  description: string
  keywords?: string
  image?: string
  url?: string
  type?: 'website' | 'article' | 'product'
}

export const generateMetadata = (seoData: SEOData) => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://ajabhijewels.com'
  
  return {
    title: seoData.title,
    description: seoData.description,
    keywords: seoData.keywords,
    openGraph: {
      title: seoData.title,
      description: seoData.description,
      url: seoData.url ? `${baseUrl}${seoData.url}` : baseUrl,
      siteName: 'AJ Abhi Jewels',
      images: [
        {
          url: seoData.image || '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: seoData.title,
        },
      ],
      locale: 'en_US',
      type: seoData.type || 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: seoData.title,
      description: seoData.description,
      images: [seoData.image || '/og-image.jpg'],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
}

export const generateStructuredData = (type: 'Organization' | 'Product' | 'LocalBusiness', data: any) => {
  const baseStructure = {
    '@context': 'https://schema.org',
    '@type': type,
  }

  switch (type) {
    case 'Organization':
      return {
        ...baseStructure,
        name: 'AJ Abhi Jewels',
        url: 'https://ajabhijewels.com',
        logo: 'https://ajabhijewels.com/logo.png',
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+91-7947106192',
          contactType: 'customer service',
        },
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Shop No 05, Skanda Business Park, Rajvihar',
          addressLocality: 'Kurnool',
          addressRegion: 'Andhra Pradesh',
          postalCode: '518001',
          addressCountry: 'IN',
        },
      }
    
    case 'Product':
      return {
        ...baseStructure,
        name: data.name,
        description: data.description,
        image: data.images,
        offers: {
          '@type': 'Offer',
          price: data.price,
          priceCurrency: 'INR',
          availability: data.inStock ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock',
        },
        brand: {
          '@type': 'Brand',
          name: 'AJ Abhi Jewels',
        },
      }
    
    default:
      return baseStructure
  }
}