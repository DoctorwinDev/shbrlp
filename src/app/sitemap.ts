import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://shakirabr.com'

  // Páginas estáticas
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/politica-de-privacidade`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/termos-de-uso`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.3,
    },
  ]

  // Posts do blog (estáticos por enquanto)
  const blogPages = [
    {
      url: `${baseUrl}/blog/ensaio-sensual-dicas-fotos-casa-guia-2025`,
      lastModified: new Date('2025-01-15'),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
  ]

  return [...staticPages, ...blogPages]
} 