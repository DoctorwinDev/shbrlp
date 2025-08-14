import { Metadata } from 'next'

interface SEOProps {
  title?: string
  description?: string
  image?: string
  url?: string
  type?: 'website' | 'article'
  publishedTime?: string
  modifiedTime?: string
  tags?: string[]
  author?: string
}

const defaultSEO = {
  siteName: 'ShakiraBr',
  siteUrl: 'https://shakirabr.com',
  defaultDescription: 'Site oficial da modelo ShakiraBr. Conteúdo exclusivo, booking profissional e muito mais.',
  defaultImage: '/hero-latest-image.jpeg',
  twitterHandle: '@shakirabr_cam',
}

/**
 * Generate comprehensive SEO metadata for Next.js pages
 */
export function generateSEO({
  title,
  description = defaultSEO.defaultDescription,
  image = defaultSEO.defaultImage,
  url,
  type = 'website',
  publishedTime,
  modifiedTime,
  tags = [],
  author = 'ShakiraBr',
}: SEOProps = {}): Metadata {
  const fullTitle = title ? `${title} | ${defaultSEO.siteName}` : defaultSEO.siteName
  const fullUrl = url ? `${defaultSEO.siteUrl}${url}` : defaultSEO.siteUrl
  const fullImage = image.startsWith('http') ? image : `${defaultSEO.siteUrl}${image}`

  const metadata: Metadata = {
    title: fullTitle,
    description,
    keywords: tags.join(', '),
    authors: [{ name: author }],
    creator: author,
    publisher: defaultSEO.siteName,
    
    // Open Graph
    openGraph: {
      title: fullTitle,
      description,
      url: fullUrl,
      siteName: defaultSEO.siteName,
      locale: 'pt_BR',
      type,
      images: [
        {
          url: fullImage,
          width: 1200,
          height: 630,
          alt: title || defaultSEO.siteName,
        },
      ],
    },

    // Twitter Cards
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [fullImage],
      creator: defaultSEO.twitterHandle,
      site: defaultSEO.twitterHandle,
    },

    // Canonical URL
    alternates: {
      canonical: fullUrl,
    },

    // Robots
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

  // Add article-specific metadata
  if (type === 'article') {
    metadata.openGraph = {
      ...metadata.openGraph,
      type: 'article',
      publishedTime,
      modifiedTime,
      authors: [author],
      tags,
    }
  }

  return metadata
}

/**
 * Generate structured data for articles (JSON-LD)
 */
export function generateArticleStructuredData({
  title,
  description,
  image,
  url,
  publishedTime,
  modifiedTime,
  author = 'ShakiraBr',
  tags = [],
}: {
  title: string
  description: string
  image?: string
  url: string
  publishedTime: string
  modifiedTime?: string
  author?: string
  tags?: string[]
}) {
  const fullUrl = url.startsWith('http') ? url : `${defaultSEO.siteUrl}${url}`
  const fullImage = image?.startsWith('http') ? image : `${defaultSEO.siteUrl}${image}`

  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    image: fullImage ? {
      '@type': 'ImageObject',
      url: fullImage,
      width: 1200,
      height: 630,
    } : undefined,
    author: {
      '@type': 'Person',
      name: author,
      url: defaultSEO.siteUrl,
    },
    publisher: {
      '@type': 'Organization',
      name: defaultSEO.siteName,
      logo: {
        '@type': 'ImageObject',
        url: `${defaultSEO.siteUrl}/logo.png`,
      },
    },
    datePublished: publishedTime,
    dateModified: modifiedTime || publishedTime,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': fullUrl,
    },
    keywords: tags.join(', '),
    about: tags.map(tag => ({
      '@type': 'Thing',
      name: tag,
    })),
  }
}

/**
 * Generate breadcrumb structured data
 */
export function generateBreadcrumbStructuredData(breadcrumbs: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: crumb.url.startsWith('http') ? crumb.url : `${defaultSEO.siteUrl}${crumb.url}`,
    })),
  }
}

/**
 * Generate organization structured data
 */
export function generateOrganizationStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: defaultSEO.siteName,
    url: defaultSEO.siteUrl,
    logo: `${defaultSEO.siteUrl}/logo.png`,
    sameAs: [
      'https://instagram.com/zaramontannasecreto',
      'https://twitter.com/shakirabr_cam',
      'https://t.me/zaramontanavip',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      availableLanguage: 'Portuguese',
    },
  }
}