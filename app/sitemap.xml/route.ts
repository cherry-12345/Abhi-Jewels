import { allProducts, categories } from '@/lib/data'

// XML escape helper to prevent XML injection
function escapeXml(unsafe: string): string {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'
  
  const staticPages = [
    '',
    '/about',
    '/contact',
    '/collections',
    '/custom-jewelry',
  ]

  const categoryPages = categories.map(cat => `/collections/${cat.slug}`)
  const productPages = allProducts.map(product => `/products/${product.id}`)

  const allPages = [...staticPages, ...categoryPages, ...productPages]

  // Use build timestamp if available, otherwise use current date
  const buildTimestamp = process.env.BUILD_TIMESTAMP || new Date().toISOString()
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages.map(page => `  <url>
    <loc>${escapeXml(baseUrl + page)}</loc>
    <lastmod>${buildTimestamp}</lastmod>
    <changefreq>${page === '' ? 'daily' : 'weekly'}</changefreq>
    <priority>${page === '' ? '1.0' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}
