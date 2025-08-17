import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Clock, ArrowLeft, Tag, User } from 'lucide-react'
import { notFound } from 'next/navigation'
import { getPostBySlug, getAllPosts } from '@/data/blog-posts'
import ShareButton from '@/components/ShareButton'
import MarkdownRenderer from '@/components/MarkdownRenderer'

interface BlogPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  
  if (!post) {
    return {
      title: 'Post não encontrado',
    }
  }

  const baseUrl = 'https://www.shakirabr.com'
  const postUrl = `${baseUrl}/blog/${post.slug}`
  const imageUrl = post.image ? `${baseUrl}${post.image}` : `${baseUrl}/hero-latest-image.jpeg`

  return {
    title: post.title,
    description: post.metaDescription,
    keywords: post.keywords.join(', '),
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      url: postUrl,
      siteName: 'Shakira BR',
      type: 'article',
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [post.author],
      tags: post.tags,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        }
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.metaDescription,
      images: [imageUrl],
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
    other: {
      'google-site-verification': process.env.GOOGLE_SITE_VERIFICATION || '',
    },
    alternates: {
      canonical: postUrl,
    },
  }
}

export default async function BlogPost({ params }: BlogPageProps) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const baseUrl = 'https://www.shakirabr.com'
  const postUrl = `${baseUrl}/blog/${post.slug}`
  const imageUrl = post.image ? `${baseUrl}${post.image}` : `${baseUrl}/hero-latest-image.jpeg`

  // Dados estruturados para SEO - BlogPosting é melhor que Article para indexação
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.metaDescription,
    "keywords": post.keywords.join(', '),
    "author": {
      "@type": "Person",
      "name": post.author,
      "url": "https://www.shakirabr.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Shakira BR",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.shakirabr.com/logo.png"
      }
    },
    "datePublished": post.publishedAt,
    "dateModified": post.updatedAt,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.shakirabr.com/blog/${post.slug}`
    },
    "image": {
      "@type": "ImageObject",
      "url": imageUrl,
      "width": 1200,
      "height": 630,
      "caption": post.title
    },
    "articleSection": post.category,
    "keywords": post.keywords.join(', '),
    "about": post.tags.map(tag => ({
      "@type": "Thing",
      "name": tag
    }))
  }

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.shakirabr.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://www.shakirabr.com/blog"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": post.title,
        "item": `https://www.shakirabr.com/blog/${post.slug}`
      }
    ]
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Dados Estruturados */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />

      {/* Header */}
      <header className="border-b border-white/10 bg-black/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 text-pink-400 hover:text-pink-300 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar para o Blog
          </Link>
        </div>
      </header>

      {/* Article */}
      <article className="max-w-4xl mx-auto px-4 py-8">
        {/* Header do Post */}
        <header className="mb-8 border-b border-white/10 pb-8">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="inline-flex items-center gap-1 bg-pink-600 text-white px-3 py-1 rounded-full text-sm font-medium">
              <Tag className="w-3 h-3" />
              {post.category}
            </span>
            {post.featured && (
              <span className="inline-flex items-center gap-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-3 py-1 rounded-full text-sm font-bold">
                ⭐ Destaque
              </span>
            )}
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-pink-200 to-purple-200 bg-clip-text text-transparent leading-tight">
            {post.title}
          </h1>

          <p className="text-lg text-white/80 mb-6 leading-relaxed">
            {post.excerpt}
          </p>

          {/* Meta informações */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-white/60">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{new Date(post.publishedAt).toLocaleDateString('pt-BR')}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{post.readTime} min de leitura</span>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-4">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="bg-white/10 text-white/80 px-3 py-1 rounded-full text-sm"
              >
                #{tag}
              </span>
            ))}
          </div>
        </header>

        {/* Imagem do post */}
        <div className="mb-8">
          <div className="relative aspect-video rounded-xl overflow-hidden border border-white/10 bg-gradient-to-br from-pink-900/20 to-purple-900/20">
            <Image
              src={post.image || '/galeria/preview1.jpg'}
              alt={post.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
        </div>

        {/* Conteúdo */}
        <MarkdownRenderer content={post.content} />

        {/* Call to Action */}
        <div className="mt-12 p-6 bg-gradient-to-r from-pink-600/20 to-purple-600/20 rounded-2xl border border-pink-500/30">
          <h3 className="text-xl font-bold text-white mb-3">
            💕 Gostou do conteúdo?
          </h3>
          <p className="text-white/80 mb-4">
            Se este post te ajudou, que tal me seguir nas redes sociais para mais dicas exclusivas?
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="https://www.instagram.com/zaramontannasecreto/"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-600 to-purple-500 text-white px-4 py-2 rounded-lg font-medium hover:from-pink-700 hover:to-purple-600 transition-all"
            >
              📸 Instagram
            </Link>
            <Link
              href="https://x.com/shakirabr_cam"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-600 to-blue-500 text-white px-4 py-2 rounded-lg font-medium hover:from-cyan-700 hover:to-blue-600 transition-all"
            >
              🐦 Twitter
            </Link>
            <Link
              href="https://t.me/zaramontanavip"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-500 text-white px-4 py-2 rounded-lg font-medium hover:from-blue-700 hover:to-indigo-600 transition-all"
            >
              💬 Telegram
            </Link>
          </div>
        </div>

        {/* Compartilhar */}
        <div className="mt-8 pt-6 border-t border-white/10">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-white">Compartilhar:</h3>
            <div className="flex gap-3">
              <ShareButton post={post} />
            </div>
          </div>
        </div>
      </article>

      {/* Posts Relacionados */}
      <section className="max-w-4xl mx-auto px-4 py-8 border-t border-white/10">
        <h2 className="text-2xl font-bold text-white mb-6">Posts Relacionados</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {getAllPosts()
            .filter(p => p.slug !== post.slug && p.category === post.category)
            .slice(0, 2)
            .map((relatedPost) => (
              <Link
                key={relatedPost.slug}
                href={`/blog/${relatedPost.slug}`}
                className="group block p-6 bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 hover:border-pink-500/30 transition-all"
              >
                <h3 className="text-lg font-semibold text-white group-hover:text-pink-300 transition-colors mb-2">
                  {relatedPost.title}
                </h3>
                <p className="text-white/70 text-sm mb-3">
                  {relatedPost.excerpt}
                </p>
                <div className="flex items-center gap-2 text-xs text-white/50">
                  <Clock className="w-3 h-3" />
                  <span>{relatedPost.readTime} min</span>
                </div>
              </Link>
            ))}
        </div>
      </section>
    </div>
  )
} 