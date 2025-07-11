import Image from 'next/image'
import Link from 'next/link'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Blog da ShakiraBr com dicas de moda, beleza e lifestyle. Acompanhe as novidades e bastidores.',
}

// Mock data - em produção viria de um CMS ou API
const blogPosts = [
  {
    slug: 'rotina-de-beleza-diaria',
    title: 'Minha Rotina de Beleza Diária: Segredos Para Uma Pele Radiante',
    excerpt: 'Descubra os produtos e técnicas que uso para manter minha pele sempre impecável.',
    content: '',
    date: '2024-01-15',
    author: 'ShakiraBr',
    tags: ['beleza', 'skincare', 'rotina'],
    featuredImage: '/blog/beleza-rotina.jpg',
    readTime: 5,
  },
  {
    slug: 'tendencias-moda-verao',
    title: 'Tendências de Moda Verão 2024: O Que Está Em Alta',
    excerpt: 'Explore as principais tendências da moda praia e como incorporá-las ao seu guarda-roupa.',
    content: '',
    date: '2024-01-10',
    author: 'ShakiraBr',
    tags: ['moda', 'verão', 'tendências'],
    featuredImage: '/blog/moda-verao.jpg',
    readTime: 7,
  },
  {
    slug: 'bastidores-ensaio-fotografico',
    title: 'Bastidores do Último Ensaio Fotográfico',
    excerpt: 'Venha comigo para os bastidores do meu último ensaio e veja como tudo acontece.',
    content: '',
    date: '2024-01-05',
    author: 'ShakiraBr',
    tags: ['bastidores', 'fotografia', 'trabalho'],
    featuredImage: '/blog/bastidores.jpg',
    readTime: 4,
  },
  {
    slug: 'dicas-autoestima-confianca',
    title: 'Dicas Para Aumentar a Autoestima e Confiança',
    excerpt: 'Compartilho estratégias que me ajudaram a desenvolver confiança e amor próprio.',
    content: '',
    date: '2024-01-01',
    author: 'ShakiraBr',
    tags: ['autoestima', 'motivação', 'lifestyle'],
    featuredImage: '/blog/autoestima.jpg',
    readTime: 6,
  },
]

export default function Blog() {
  return (
    <>
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-primary-50 to-secondary-50">
          <div className="container-width section-padding">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
                Blog da ShakiraBr
              </h1>
              <p className="text-xl text-gray-600">
                Dicas de beleza, moda, lifestyle e muito mais. 
                Acompanhe minhas experiências e descobertas.
              </p>
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-20">
          <div className="container-width section-padding">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <article
                  key={post.slug}
                  className={`bg-white rounded-2xl overflow-hidden card-shadow hover:shadow-xl transition-shadow duration-300 animate-slide-up`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="aspect-video relative overflow-hidden">
                    <Image
                      src={post.featuredImage}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkbHB0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                    />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(post.date).toLocaleDateString('pt-BR')}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime} min</span>
                      </div>
                    </div>
                    
                    <h2 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                      {post.title}
                    </h2>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {post.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-primary-100 text-primary-700 text-xs font-medium rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <Link
                        href={`/blog/${post.slug}`}
                        className="flex items-center text-primary-600 hover:text-primary-700 font-medium transition-colors duration-200"
                      >
                        Ler mais
                        <ArrowRight className="ml-1 w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-20 bg-gray-50">
          <div className="container-width section-padding">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
                Não Perca Nenhuma Novidade
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Assine nossa newsletter e receba em primeira mão todas as 
                novidades, dicas e conteúdos exclusivos.
              </p>
              
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Seu melhor email"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  required
                />
                <button
                  type="submit"
                  className="btn-primary whitespace-nowrap"
                >
                  Assinar Newsletter
                </button>
              </form>
              
              <p className="text-sm text-gray-500 mt-4">
                Não enviamos spam. Você pode cancelar a qualquer momento.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
} 