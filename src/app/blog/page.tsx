import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Clock, User, ArrowRight, Sparkles } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Blog | ShakiraBr',
  description: 'Explore os últimos posts do blog da ShakiraBr. Conteúdo exclusivo sobre lifestyle, beleza e muito mais.',
  alternates: {
    canonical: 'https://shakirabr.com/blog',
  },
  openGraph: {
    title: 'Blog | ShakiraBr',
    description: 'Explore os últimos posts do blog da ShakiraBr',
    url: 'https://shakirabr.com/blog',
    siteName: 'ShakiraBr',
    type: 'website',
  },
}

const blogPosts = [
  {
    id: '1',
    title: '15 Dicas de Ensaio Sensual: Como Fazer Fotos Incríveis em Casa [Guia 2025]',
    slug: 'ensaio-sensual-dicas-fotos-casa-guia-2025',
    excerpt: 'Descubra como fazer um ensaio sensual profissional em casa usando apenas o celular. Guia completo com 15 dicas práticas, poses que valorizam qualquer corpo e técnicas de iluminação.',
    category: 'Lifestyle',
    tags: ['ensaio sensual', 'fotografia', 'autoestima'],
    featuredImage: '/galeria/preview1.jpg',
    publishDate: '2025-01-15',
    author: 'ShakiraBr',
    readTime: 12
  }
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-purple-500/10"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-pink-100 text-pink-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Blog Exclusivo
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              Blog da ShakiraBr
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explore conteúdo exclusivo sobre lifestyle, beleza e muito mais. 
              Dicas práticas e inspirações para elevar sua autoestima e confiança.
            </p>
          </div>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2">
              {post.featuredImage && (
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={post.featuredImage}
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
                    <time dateTime={post.publishDate}>
                      {new Date(post.publishDate).toLocaleDateString('pt-BR', {
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

        {/* Enhanced Call to Action */}
        <div className="mt-20">
          <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-3xl p-12 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                Em breve mais conteúdo!
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Mais posts incríveis chegando! 🎉
              </h2>
              <p className="text-lg text-pink-100 mb-8 max-w-2xl mx-auto">
                Estamos preparando muito mais conteúdo exclusivo para você. 
                Fique ligada nas nossas redes sociais para não perder nada!
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a 
                  href="https://instagram.com/zaramontannasecreto" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-pink-600 px-8 py-3 rounded-xl font-semibold hover:bg-pink-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <span>Instagram</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a 
                  href="https://t.me/zaramontanavip" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <span>Telegram</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}