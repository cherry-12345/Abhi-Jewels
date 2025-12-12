import { allProducts, categories } from '@/lib/data'

export async function GET() {
  const baseUrl = 'https://ajabhijewels.com'
  
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

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages.map(page => `  <url>
    <loc>${baseUrl}${page}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
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
