import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

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
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Blog da ShakiraBr
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore conteúdo exclusivo sobre lifestyle, beleza e muito mais
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              {post.featuredImage && (
                <div className="relative aspect-video">
                  <Image
                    src={post.featuredImage}
                    alt={post.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              )}
              
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-pink-100 text-pink-800 px-2 py-1 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                  {post.readTime && (
                    <span className="text-gray-500 text-xs">
                      {post.readTime} min de leitura
                    </span>
                  )}
                </div>
                
                <h2 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="hover:text-pink-600 transition-colors"
                  >
                    {post.title}
                  </Link>
                </h2>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>Por {post.author}</span>
                  <time dateTime={post.publishDate}>
                    {new Date(post.publishDate).toLocaleDateString('pt-BR')}
                  </time>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-pink-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Mais conteúdo em breve! 🎉
            </h2>
            <p className="text-gray-600 mb-6">
              Estamos preparando mais posts incríveis para você. Fique ligada nas nossas redes sociais!
            </p>
            <div className="flex justify-center space-x-4">
              <a 
                href="https://instagram.com/zaramontannasecreto" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-pink-600 text-white px-6 py-2 rounded-lg hover:bg-pink-700 transition-colors"
              >
                Instagram
              </a>
              <a 
                href="https://t.me/zaramontanavip" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Telegram
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}