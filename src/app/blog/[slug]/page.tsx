import type { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, Clock, ArrowLeft, Tag, User } from 'lucide-react'
import { notFound } from 'next/navigation'
import { getPostBySlug, getAllPosts } from '@/data/blog-posts'
import ShareButton from '@/components/ShareButton'

interface BlogPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const post = getPostBySlug(params.slug)
  
  if (!post) {
    return {
      title: 'Post não encontrado',
    }
  }

  return {
    title: post.title,
    description: post.metaDescription,
    keywords: post.keywords.join(', '),
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      type: 'article',
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [post.author],
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.metaDescription,
    },
  }
}

export default function BlogPost({ params }: BlogPageProps) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-black text-white">
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

        {/* Conteúdo */}
        <div 
          className="prose prose-invert prose-pink max-w-none
            prose-headings:text-white 
            prose-h1:text-3xl prose-h1:font-bold prose-h1:mb-6 prose-h1:mt-8
            prose-h2:text-2xl prose-h2:font-bold prose-h2:mb-4 prose-h2:mt-6 prose-h2:text-pink-300
            prose-h3:text-xl prose-h3:font-semibold prose-h3:mb-3 prose-h3:mt-5 prose-h3:text-pink-400
            prose-p:text-white/90 prose-p:leading-relaxed prose-p:mb-4
            prose-strong:text-pink-300 prose-strong:font-semibold
            prose-ul:text-white/90 prose-ul:mb-4
            prose-li:mb-2 prose-li:leading-relaxed
            prose-a:text-pink-400 prose-a:no-underline hover:prose-a:text-pink-300
            prose-blockquote:border-l-pink-500 prose-blockquote:bg-white/5 prose-blockquote:rounded-r-lg prose-blockquote:p-4
            prose-code:text-pink-300 prose-code:bg-white/10 prose-code:px-2 prose-code:py-1 prose-code:rounded
            prose-table:border-white/20 prose-th:bg-white/10 prose-th:text-pink-300 prose-th:font-semibold
            prose-td:border-white/10 prose-td:p-3
          "
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

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
              href="https://instagram.com/ZARAMONTANNASECRETO"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-600 to-purple-500 text-white px-4 py-2 rounded-lg font-medium hover:from-pink-700 hover:to-purple-600 transition-all"
            >
              📸 Instagram
            </Link>
            <Link
              href="https://x.com/shakira_cam"
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