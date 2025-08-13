import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Clock, User, ArrowRight, Tag } from 'lucide-react'
import { getPostsByTag, getAllPosts } from '@/data/blog-posts'

interface TagPageProps {
  params: Promise<{
    tag: string
  }>
}

export async function generateStaticParams() {
  const posts = getAllPosts()
  const allTags = posts.flatMap(post => post.tags)
  const uniqueTags = Array.from(new Set(allTags))
  
  return uniqueTags.map((tag) => ({
    tag: tag.toLowerCase().replace(/\s+/g, '-'),
  }))
}

export async function generateMetadata({ params }: TagPageProps): Promise<Metadata> {
  const { tag } = await params
  const tagName = tag.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
  const posts = getPostsByTag(tagName)
  
  const baseUrl = 'https://shakirabr.com'
  const tagUrl = `${baseUrl}/blog/tag/${tag}`

  return {
    title: `#${tagName} | Blog Shakira BR`,
    description: `Explore todos os posts com a tag ${tagName.toLowerCase()} no blog da Shakira BR. Conteúdo exclusivo e dicas valiosas.`,
    keywords: `${tagName.toLowerCase()}, blog, shakira br, conteúdo exclusivo, dicas`,
    openGraph: {
      title: `#${tagName} | Blog Shakira BR`,
      description: `Explore todos os posts com a tag ${tagName.toLowerCase()} no blog da Shakira BR.`,
      url: tagUrl,
      siteName: 'Shakira BR',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `#${tagName} | Blog Shakira BR`,
      description: `Explore todos os posts com a tag ${tagName.toLowerCase()} no blog da Shakira BR.`,
    },
    alternates: {
      canonical: tagUrl,
    },
  }
}

export default async function TagPage({ params }: TagPageProps) {
  const { tag } = await params
  const tagName = tag.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
  const posts = getPostsByTag(tagName)

  if (posts.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Tag não encontrada</h1>
          <Link href="/blog" className="text-pink-600 hover:text-pink-700">
            Voltar para o Blog
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-purple-500/10"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-pink-100 text-pink-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Tag className="w-4 h-4" />
              Tag
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              #{tagName}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explore todos os posts com a tag {tagName.toLowerCase()} no blog da Shakira BR.
            </p>
            <div className="mt-4 text-sm text-gray-500">
              {posts.length} post{posts.length !== 1 ? 's' : ''} encontrado{posts.length !== 1 ? 's' : ''}
            </div>
          </div>
        </div>
      </div>

      {/* Posts Grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {posts.map((post) => (
            <article key={post.slug} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2">
              {post.image && (
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-pink-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                      {post.category}
                    </span>
                  </div>
                </div>
              )}
              
              <div className="p-8">
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime} min</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <time dateTime={post.publishedAt}>
                      {new Date(post.publishedAt).toLocaleDateString('pt-BR', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric'
                      })}
                    </time>
                  </div>
                </div>
                
                <h2 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-pink-600 transition-colors line-clamp-3">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h2>
                
                <p className="text-gray-600 text-base leading-relaxed mb-6 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-pink-600 font-semibold hover:text-pink-700 transition-colors group/link"
                  >
                    Ler mais
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Voltar para o Blog */}
        <div className="mt-12 text-center">
          <Link 
            href="/blog"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-600 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-pink-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <ArrowRight className="w-4 h-4 rotate-180" />
            Voltar para o Blog
          </Link>
        </div>
      </div>
    </div>
  )
}
