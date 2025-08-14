// Configuração centralizada para SEO
export const seoConfig = {
  // Configurações básicas do site
  site: {
    name: 'Shakira BR',
    url: 'https://shakirabr.com',
    description: 'Exclusive and premium adult content. Sensual photo gallery, blog with tips and much more.',
    keywords: 'shakira br, adult content, photo gallery, sensual blog, premium, exclusive, brazilian model, adult entertainment',
    author: 'Shakira BR',
    language: 'pt-BR',
    locale: 'pt_BR',
  },

  // Configurações para Open Graph
  openGraph: {
    type: 'website',
    siteName: 'Shakira BR',
    images: [
      {
        url: 'https://shakirabr.com/hero-latest-image.jpeg',
        width: 1200,
        height: 630,
        alt: 'Shakira BR - Exclusive Content',
      },
    ],
  },

  // Configurações para Twitter Card
  twitter: {
    handle: '@shakirabr_cam',
    site: '@shakirabr_cam',
    cardType: 'summary_large_image',
  },

  // Configurações para Google Analytics
  analytics: {
    googleAnalyticsId: process.env.NEXT_PUBLIC_GA_ID || '',
    googleTagManagerId: process.env.NEXT_PUBLIC_GTM_ID || '',
  },

  // Configurações para verificação
  verification: {
    google: process.env.GOOGLE_VERIFICATION || '',
    yandex: process.env.YANDEX_VERIFICATION || '',
    bing: process.env.BING_VERIFICATION || '',
  },

  // Configurações para redes sociais
  social: {
    instagram: 'https://www.instagram.com/zaramontannasecreto/',
    twitter: 'https://x.com/shakirabr_cam',
    telegram: 'https://t.me/zaramontanavip',
    onlyfans: 'https://onlyfans.com/zaramontana',
    privacy: 'https://privacy.com.br/profile/zaramontanaa',
  },

  // Configurações para blog
  blog: {
    title: 'Blog | Shakira BR',
    description: 'Explore os últimos posts do blog da Shakira BR. Conteúdo exclusivo sobre lifestyle, beleza e muito mais.',
    categories: ['Lifestyle', 'Beleza', 'Autoestima', 'Fotografia', 'Moda'],
    tags: [
      'ensaio sensual', 'fotos em casa', 'autoestima feminina', 'fotografia com celular',
      'poses femininas', 'boudoir caseiro', 'empoderamento feminino', 'beleza natural',
      'autoconfiança', 'fotografia íntima', 'lifestyle', 'moda', 'beleza'
    ],
  },

  // Configurações para páginas específicas
  pages: {
    home: {
      title: 'Shakira BR - Exclusive and Premium Content',
      description: 'Exclusive and premium adult content. Sensual photo gallery, blog with tips and much more. Access now!',
      keywords: 'shakira br, adult content, photo gallery, sensual blog, premium, exclusive, brazilian model, adult entertainment',
    },
    privacy: {
      title: 'Política de Privacidade | Shakira BR',
      description: 'Política de privacidade da Shakira BR. Saiba como protegemos seus dados pessoais.',
      keywords: 'política de privacidade, lgpd, dados pessoais, shakira br',
    },
    terms: {
      title: 'Termos de Uso | Shakira BR',
      description: 'Termos de uso da Shakira BR. Conheça as condições para uso do nosso site.',
      keywords: 'termos de uso, condições, shakira br',
    },
    cookies: {
      title: 'Política de Cookies | Shakira BR',
      description: 'Política de cookies da Shakira BR. Saiba como usamos cookies em nosso site.',
      keywords: 'cookies, política de cookies, shakira br',
    },
  },

  // Configurações para dados estruturados
  structuredData: {
    organization: {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Shakira BR",
      "url": "https://shakirabr.com",
      "logo": "https://shakirabr.com/logo.png",
      "sameAs": [
        "https://www.instagram.com/zaramontannasecreto/",
        "https://x.com/shakirabr_cam",
        "https://t.me/zaramontanavip"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "availableLanguage": ["Portuguese", "English", "Spanish"]
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Rua Felipe Schmidt, 123",
        "addressLocality": "Florianópolis",
        "addressRegion": "SC",
        "postalCode": "88010-001",
        "addressCountry": "BR"
      }
    },
    website: {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Shakira BR",
      "description": "Exclusive and premium adult content. Photo gallery, blog with tips and much more.",
      "url": "https://shakirabr.com",
      "inLanguage": ["pt-BR", "en-US", "es-ES"],
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://shakirabr.com/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Shakira BR",
        "logo": {
          "@type": "ImageObject",
          "url": "https://shakirabr.com/logo.png"
        }
      }
    }
  },

  // Configurações para sitemap
  sitemap: {
    priority: {
      home: 1.0,
      blog: 0.9,
      blogPost: 0.8,
      category: 0.6,
      tag: 0.5,
      legal: 0.3,
    },
    changeFrequency: {
      home: 'daily',
      blog: 'daily',
      blogPost: 'weekly',
      category: 'weekly',
      tag: 'weekly',
      legal: 'monthly',
    },
  },
}

// Função para gerar meta tags dinâmicas
export function generateMetaTags(page: keyof typeof seoConfig.pages, customData?: any) {
  const baseMeta = seoConfig.pages[page]
  
  return {
    title: customData?.title || baseMeta.title,
    description: customData?.description || baseMeta.description,
    keywords: customData?.keywords || baseMeta.keywords,
    openGraph: {
      title: customData?.title || baseMeta.title,
      description: customData?.description || baseMeta.description,
      url: customData?.url || seoConfig.site.url,
      siteName: seoConfig.site.name,
      type: 'website',
      images: seoConfig.openGraph.images,
    },
    twitter: {
      card: seoConfig.twitter.cardType,
      title: customData?.title || baseMeta.title,
      description: customData?.description || baseMeta.description,
      images: seoConfig.openGraph.images,
    },
    alternates: {
      canonical: customData?.url || seoConfig.site.url,
    },
  }
}

// Função para gerar dados estruturados de artigo
export function generateArticleStructuredData(post: any) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.metaDescription,
    "author": {
      "@type": "Person",
      "name": post.author,
      "url": seoConfig.site.url
    },
    "publisher": {
      "@type": "Organization",
      "name": seoConfig.site.name,
      "logo": {
        "@type": "ImageObject",
        "url": `${seoConfig.site.url}/logo.png`
      }
    },
    "datePublished": post.publishedAt,
    "dateModified": post.updatedAt,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${seoConfig.site.url}/blog/${post.slug}`
    },
    "image": post.image ? {
      "@type": "ImageObject",
      "url": post.image,
      "width": 1200,
      "height": 630
    } : undefined,
    "articleSection": post.category,
    "keywords": post.keywords.join(', '),
    "about": post.tags.map((tag: string) => ({
      "@type": "Thing",
      "name": tag
    }))
  }
}

// Função para gerar breadcrumbs estruturados
export function generateBreadcrumbStructuredData(items: Array<{name: string, url: string}>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  }
}
