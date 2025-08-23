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
    // Artigos recentes (últimos 7 dias) ganham boost de prioridade
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
      lastModified: currentDate, // Sempre currentDate para forçar re-crawl
      changeFrequency: isRecent ? 'daily' as const : 'weekly' as const,
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