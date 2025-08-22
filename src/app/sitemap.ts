import { MetadataRoute } from 'next'
import { getAllPosts } from '@/data/blog-posts'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.shakirabr.com'
  const currentDate = new Date()

  // Páginas estáticas principais
  const staticPages = [
    { 
      url: baseUrl, 
      lastModified: currentDate, 
      changeFrequency: 'daily' as const, 
      priority: 1.0 
    },
    { 
      url: `${baseUrl}/blog`, 
      lastModified: currentDate, 
      changeFrequency: 'daily' as const, 
      priority: 0.9 
    },
    { 
      url: `${baseUrl}/politica-de-privacidade`, 
      lastModified: currentDate, 
      changeFrequency: 'monthly' as const, 
      priority: 0.4 
    },
    { 
      url: `${baseUrl}/termos-de-uso`, 
      lastModified: currentDate, 
      changeFrequency: 'monthly' as const, 
      priority: 0.4 
    },
    { 
      url: `${baseUrl}/cookies`, 
      lastModified: currentDate, 
      changeFrequency: 'monthly' as const, 
      priority: 0.4 
    },
  ]

  // Posts do blog com prioridades otimizadas
  const blogPosts = getAllPosts()
  const blogPages = blogPosts.map((post) => {
    // Artigos PILAR (featured) têm prioridade máxima
    const priority = post.featured ? 0.9 : 0.8
    
    return {
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.updatedAt),
      changeFrequency: 'weekly' as const,
      priority,
    }
  })

  // Categorias do blog (se houver)
  const categories = Array.from(new Set(blogPosts.map(post => post.category)))
  const categoryPages = categories.map((category) => ({
    url: `${baseUrl}/blog/categoria/${category.toLowerCase().replace(/\s+/g, '-')}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }))

  // Tags do blog (se houver)
  const allTags = blogPosts.flatMap(post => post.tags)
  const uniqueTags = Array.from(new Set(allTags))
  const tagPages = uniqueTags.map((tag) => ({
    url: `${baseUrl}/blog/tag/${tag.toLowerCase().replace(/\s+/g, '-')}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.5,
  }))

  return [...staticPages, ...blogPages, ...categoryPages, ...tagPages]
} 