import { NextResponse } from 'next/server'
import { getAllPosts } from '@/data/blog-posts'

export async function GET() {
  const baseUrl = 'https://www.shakirabr.com'
  const currentDate = new Date()
  
  // Garantir formato W3C Datetime conforme especificação
  const formatW3CDateTime = (date: Date): string => {
    return date.toISOString()
  }

  // Páginas estáticas principais
  const staticPages = [
    { 
      url: baseUrl, 
      lastModified: formatW3CDateTime(currentDate), 
      changeFrequency: 'daily', 
      priority: 1.0 
    },
    { 
      url: `${baseUrl}/blog`, 
      lastModified: formatW3CDateTime(currentDate), 
      changeFrequency: 'daily', 
      priority: 0.9 
    },
    { 
      url: `${baseUrl}/politica-de-privacidade`, 
      lastModified: formatW3CDateTime(currentDate), 
      changeFrequency: 'monthly', 
      priority: 0.4 
    },
    { 
      url: `${baseUrl}/termos-de-uso`, 
      lastModified: formatW3CDateTime(currentDate), 
      changeFrequency: 'monthly', 
      priority: 0.4 
    },
    { 
      url: `${baseUrl}/cookies`, 
      lastModified: formatW3CDateTime(currentDate), 
      changeFrequency: 'monthly', 
      priority: 0.4 
    },
  ]

  // Posts do blog com prioridades otimizadas
  const blogPosts = getAllPosts()
  const blogPages = blogPosts.map((post) => {
    const postDate = new Date(post.updatedAt)
    const daysSinceUpdate = Math.floor((currentDate.getTime() - postDate.getTime()) / (1000 * 60 * 60 * 24))
    const isRecent = daysSinceUpdate <= 7
    
    let priority = 0.8
    if (post.featured) {
      priority = isRecent ? 1.0 : 0.9
    } else if (isRecent) {
      priority = 0.85
    }
    
    return {
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: formatW3CDateTime(currentDate),
      changeFrequency: isRecent ? 'daily' : 'weekly',
      priority,
    }
  })

  // Categorias do blog
  const categories = Array.from(new Set(blogPosts.map(post => post.category)))
  const categoryPages = categories.map((category) => ({
    url: `${baseUrl}/blog/categoria/${category.toLowerCase().replace(/\s+/g, '-')}`,
    lastModified: formatW3CDateTime(currentDate),
    changeFrequency: 'weekly',
    priority: 0.6,
  }))

  // Tags do blog
  const allTags = blogPosts.flatMap(post => post.tags)
  const uniqueTags = Array.from(new Set(allTags))
  const tagPages = uniqueTags.map((tag) => ({
    url: `${baseUrl}/blog/tag/${tag.toLowerCase().replace(/\s+/g, '-')}`,
    lastModified: formatW3CDateTime(currentDate),
    changeFrequency: 'weekly',
    priority: 0.5,
  }))

  const allPages = [...staticPages, ...blogPages, ...categoryPages, ...tagPages]

  // Gerar XML conforme especificação oficial com validação XSD
  const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd"
        xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages.map(page => `  <url>
    <loc>${page.url}</loc>
    <lastmod>${page.lastModified}</lastmod>
    <changefreq>${page.changeFrequency}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>
`

  return new NextResponse(xmlContent, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
      'X-Robots-Tag': 'noindex',
    },
  })
}
