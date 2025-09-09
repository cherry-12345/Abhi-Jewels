import type { Metadata } from 'next'
import { Inter, Playfair_Display, Cormorant_Garamond } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({ 
  subsets: ['latin'],
  variable: '--font-cormorant',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700']
})

export const metadata: Metadata = {
  title: 'AJ Abhi Jewels - Premium Jewelry Collection',
  description: 'Discover exquisite jewelry collections at AJ Abhi Jewels. Premium diamonds, gold, and precious stones crafted with perfection. Shop online with confidence.',
  keywords: 'jewelry, diamonds, gold, precious stones, engagement rings, wedding jewelry, luxury jewelry, Kurnool jewelry',
  authors: [{ name: 'AJ Abhi Jewels' }],
  creator: 'AJ Abhi Jewels',
  publisher: 'AJ Abhi Jewels',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://ajabhijewels.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'AJ Abhi Jewels - Premium Jewelry Collection',
    description: 'Discover exquisite jewelry collections at AJ Abhi Jewels. Premium diamonds, gold, and precious stones crafted with perfection.',
    url: 'https://ajabhijewels.com',
    siteName: 'AJ Abhi Jewels',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AJ Abhi Jewels - Premium Jewelry Collection',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AJ Abhi Jewels - Premium Jewelry Collection',
    description: 'Discover exquisite jewelry collections at AJ Abhi Jewels. Premium diamonds, gold, and precious stones crafted with perfection.',
    images: ['/og-image.jpg'],
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
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${cormorant.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#d4af37" />
        <meta name="msapplication-TileColor" content="#d4af37" />
      </head>
      <body className="min-h-screen bg-gradient-to-br from-diamond via-white to-platinum-50">
        <Providers>
          {children}
          <Toaster 
            position="top-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: '#fff',
                color: '#333',
                boxShadow: '0 10px 40px rgba(212, 175, 55, 0.1)',
              },
            }}
          />
        </Providers>
      </body>
    </html>
  )
}