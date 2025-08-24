import { getAllPosts } from '@/data/blog-posts'

export async function GET() {
  const baseUrl = 'https://www.shakirabr.com'
  const currentDate = new Date().toISOString()
  
  // Buscar todos os posts do blog
  const blogPosts = getAllPosts()
  
  // Gerar URLs dos posts
  const blogPostsXml = blogPosts.map((post) => {
    const postDate = new Date(post.updatedAt).toISOString()
    const priority = post.featured ? '1.0' : '0.8'
    
    return `
    <url>
      <loc>${baseUrl}/blog/${post.slug}</loc>
      <lastmod>${postDate}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>${priority}</priority>
    </url>`
  }).join('')

  // Página do blog principal
  const blogMainPage = `
    <url>
      <loc>${baseUrl}/blog</loc>
      <lastmod>${currentDate}</lastmod>
      <changefreq>daily</changefreq>
      <priority>0.9</priority>
    </url>`

  // Categorias únicas
  const categories = Array.from(new Set(blogPosts.map(post => post.category)))
  const categoriesXml = categories.map((category) => {
    const categorySlug = category.toLowerCase().replace(/\s+/g, '-')
    return `
    <url>
      <loc>${baseUrl}/blog/categoria/${categorySlug}</loc>
      <lastmod>${currentDate}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>0.6</priority>
    </url>`
  }).join('')

  // Tags únicas
  const allTags = blogPosts.flatMap(post => post.tags)
  const uniqueTags = Array.from(new Set(allTags))
  const tagsXml = uniqueTags.map((tag) => {
    const tagSlug = tag.toLowerCase().replace(/\s+/g, '-')
    return `
    <url>
      <loc>${baseUrl}/blog/tag/${tagSlug}</loc>
      <lastmod>${currentDate}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>0.5</priority>
    </url>`
  }).join('')

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${blogMainPage}
  ${blogPostsXml}
  ${categoriesXml}
  ${tagsXml}
</urlset>`

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=7200',
    },
  })
}
