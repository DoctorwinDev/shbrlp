import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, User, ArrowRight, Clock, Tag } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Blog - ShakiraBr | Dicas, Lifestyle e Conteúdo Exclusivo',
  description: 'Acompanhe o blog da ShakiraBr com dicas de lifestyle, beleza, moda e conteúdo exclusivo. Artigos atualizados semanalmente.',
  keywords: 'blog, lifestyle, moda, beleza, dicas, ShakiraBr, modelo brasileira, conteúdo exclusivo',
  openGraph: {
    title: 'Blog - ShakiraBr | Dicas, Lifestyle e Conteúdo Exclusivo',
    description: 'Acompanhe o blog da ShakiraBr com dicas de lifestyle, beleza, moda e conteúdo exclusivo.',
    type: 'website',
    url: 'https://shakirabr.com/blog',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog - ShakiraBr | Dicas, Lifestyle e Conteúdo Exclusivo',
    description: 'Acompanhe o blog da ShakiraBr com dicas de lifestyle, beleza, moda e conteúdo exclusivo.',
  },
}

// Posts de exemplo para demonstração
const blogPosts = [
  {
    slug: 'como-ser-modelo-webcam-iniciante',
    title: 'Como Ser Modelo Webcam: Guia Completo Para Iniciantes',
    excerpt: 'Descubra tudo sobre como começar na carreira de modelo webcam. Dicas essenciais, plataformas, equipamentos e como ganhar dinheiro online.',
    content: 'Post completo sobre como ser modelo webcam...',
    author: 'ShakiraBr',
    publishedAt: '2024-01-15',
    readTime: '10 min',
    category: 'Carreira',
    tags: ['modelo webcam', 'como ser modelo', 'ganhar dinheiro online', 'webcam', 'modelo iniciante'],
    featured: true,
    image: '/blog/post-1.jpg'
  },
  {
    slug: 'conto-erotico-encontro-proibido',
    title: 'Encontro Proibido: Conto Erótico da Modelo Brasileira',
    excerpt: 'Uma história sensual sobre uma modelo brasileira e seu encontro secreto. Conto erótico completo com muita paixão e desejo.',
    content: 'Conto erótico completo...',
    author: 'ShakiraBr',
    publishedAt: '2024-01-14',
    readTime: '8 min',
    category: 'Contos Eróticos',
    tags: ['conto erótico', 'história sensual', 'modelo brasileira', 'sexo', 'fantasia erótica'],
    featured: false,
    image: '/blog/post-2.jpg'
  },
  {
    slug: 'melhores-poses-fotos-sensuais',
    title: 'Melhores Poses Para Fotos Sensuais: Guia da Modelo',
    excerpt: 'Aprenda as poses mais sedutoras para fotos sensuais. Técnicas profissionais que uso nas minhas sessões para OnlyFans e Privacy.',
    content: 'Post completo sobre poses sensuais...',
    author: 'ShakiraBr',
    publishedAt: '2024-01-12',
    readTime: '6 min',
    category: 'Fotografia Sensual',
    tags: ['poses sensuais', 'fotos sexy', 'fotografia erótica', 'OnlyFans', 'modelo sexy'],
    featured: false,
    image: '/blog/post-3.jpg'
  },
  {
    slug: 'onlyfans-brasil-como-ganhar-dinheiro',
    title: 'OnlyFans Brasil: Como Ganhar Dinheiro Sendo Modelo',
    excerpt: 'Estratégias comprovadas para ganhar dinheiro no OnlyFans Brasil. Dicas de uma modelo brasileira com renda de 5 dígitos mensais.',
    content: 'Post completo sobre OnlyFans Brasil...',
    author: 'ShakiraBr',
    publishedAt: '2024-01-10',
    readTime: '12 min',
    category: 'Carreira',
    tags: ['OnlyFans Brasil', 'ganhar dinheiro', 'modelo OnlyFans', 'renda extra', 'trabalho online'],
    featured: false,
    image: '/blog/post-4.jpg'
  },
  {
    slug: 'conto-erotico-modelo-webcam-cliente',
    title: 'A Modelo e o Cliente: Conto Erótico Webcam',
    excerpt: 'História quente sobre uma modelo webcam brasileira e seu cliente especial. Conto erótico com muito tesão e fantasias realizadas.',
    content: 'Conto erótico sobre modelo webcam...',
    author: 'ShakiraBr',
    publishedAt: '2024-01-08',
    readTime: '7 min',
    category: 'Contos Eróticos',
    tags: ['conto erótico webcam', 'modelo webcam', 'sexo virtual', 'fantasia sexual', 'tesão'],
    featured: false,
    image: '/blog/post-5.jpg'
  },
  {
    slug: 'privacy-brasil-plataforma-modelo',
    title: 'Privacy Brasil: A Melhor Plataforma Para Modelos',
    excerpt: 'Tudo sobre o Privacy Brasil, a plataforma brasileira que paga melhor. Compare com OnlyFans e descubra por que uso ambas.',
    content: 'Post completo sobre Privacy Brasil...',
    author: 'ShakiraBr',
    publishedAt: '2024-01-05',
    readTime: '9 min',
    category: 'Plataformas',
    tags: ['Privacy Brasil', 'plataforma modelo', 'conteúdo premium', 'modelo brasileira', 'assinatura'],
    featured: false,
    image: '/blog/post-6.jpg'
  },
  {
    slug: 'lingerie-sexy-ensaio-fotografico',
    title: 'Melhores Lingerias Para Ensaio Fotográfico Sexy',
    excerpt: 'Descubra as lingerias mais sensuais para seus ensaios. Dicas de uma modelo profissional sobre peças que mais seduzem.',
    content: 'Post sobre lingerias para ensaios...',
    author: 'ShakiraBr',
    publishedAt: '2024-01-03',
    readTime: '5 min',
    category: 'Moda Íntima',
    tags: ['lingerie sexy', 'ensaio sensual', 'moda íntima', 'roupa íntima', 'sedução'],
    featured: false,
    image: '/blog/post-7.jpg'
  },
  {
    slug: 'conto-erotico-massagem-sensual',
    title: 'Massagem Sensual: Conto Erótico da ShakiraBr',
    excerpt: 'Uma história ardente sobre uma massagem que virou muito mais. Conto erótico cheio de sensualidade e prazer.',
    content: 'Conto erótico sobre massagem sensual...',
    author: 'ShakiraBr',
    publishedAt: '2024-01-01',
    readTime: '6 min',
    category: 'Contos Eróticos',
    tags: ['massagem sensual', 'conto erótico', 'prazer', 'sensualidade', 'relaxamento'],
    featured: false,
    image: '/blog/post-8.jpg'
  }
]

const categories = [
  { name: 'Carreira', count: 2, color: 'bg-pink-500', description: 'Dicas para ser modelo webcam e ganhar dinheiro' },
  { name: 'Contos Eróticos', count: 3, color: 'bg-red-500', description: 'Histórias sensuais e fantasias eróticas' },
  { name: 'Fotografia Sensual', count: 1, color: 'bg-purple-500', description: 'Poses e técnicas para fotos sexy' },
  { name: 'Plataformas', count: 1, color: 'bg-blue-500', description: 'OnlyFans, Privacy e outras plataformas' },
  { name: 'Moda Íntima', count: 1, color: 'bg-orange-500', description: 'Lingerias e roupas sensuais' }
]

const formatDate = (dateString: string) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('pt-BR', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  })
}

export default function BlogPage() {
  const featuredPost = blogPosts.find(post => post.featured)
  const regularPosts = blogPosts.filter(post => !post.featured)

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-900/20 via-purple-900/20 to-blue-900/20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              Blog Íntimo
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Dicas para modelos webcam, contos eróticos exclusivos, poses sensuais e tudo sobre OnlyFans Brasil. 
            Conteúdo íntimo direto da minha experiência como modelo brasileira.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-3">
            
            {/* Featured Post */}
            {featuredPost && (
              <section className="mb-16">
                <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
                  <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                  Post em Destaque
                </h2>
                
                <article className="group relative bg-gray-900/50 rounded-2xl overflow-hidden hover:bg-gray-900/70 transition-all duration-300">
                  <div className="aspect-video relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-purple-500/20"></div>
                    <div className="absolute top-4 left-4 z-10">
                      <span className="bg-pink-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Destaque
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {formatDate(featuredPost.publishedAt)}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {featuredPost.readTime}
                      </span>
                      <span className="flex items-center gap-1">
                        <Tag className="w-4 h-4" />
                        {featuredPost.category}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-pink-400 transition-colors">
                      {featuredPost.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
                          <User className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-gray-300 font-medium">{featuredPost.author}</span>
                      </div>
                      
                      <Link 
                        href={`/blog/${featuredPost.slug}`}
                        className="flex items-center gap-2 text-pink-400 hover:text-pink-300 transition-colors font-medium"
                      >
                        Ler mais
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </article>
              </section>
            )}

            {/* Regular Posts Grid */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                Últimos Posts
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {regularPosts.map((post) => (
                  <article 
                    key={post.slug}
                    className="group bg-gray-900/30 rounded-xl overflow-hidden hover:bg-gray-900/50 transition-all duration-300 border border-gray-800 hover:border-gray-700"
                  >
                    <div className="aspect-[16/10] relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900"></div>
                      <div className="absolute top-3 left-3">
                        <span className="bg-gray-800/80 text-gray-300 px-2 py-1 rounded text-xs">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
                        <span>{formatDate(post.publishedAt)}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>
                      
                      <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-pink-400 transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex flex-wrap gap-1">
                          {post.tags.slice(0, 2).map((tag) => (
                            <span 
                              key={tag}
                              className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
                        
                        <Link 
                          href={`/blog/${post.slug}`}
                          className="text-pink-400 hover:text-pink-300 transition-colors text-sm font-medium"
                        >
                          Ler →
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-8">
              
              {/* Categories */}
              <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
                <h3 className="text-lg font-semibold text-white mb-4">Categorias</h3>
                <div className="space-y-3">
                  {categories.map((category) => (
                    <Link
                      key={category.name}
                      href={`/blog/categoria/${category.name.toLowerCase().replace(' ', '-')}`}
                      className="block p-3 rounded-lg hover:bg-gray-800/50 transition-colors group"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-3">
                          <div className={`w-3 h-3 rounded-full ${category.color}`}></div>
                          <span className="text-gray-300 group-hover:text-white transition-colors font-medium">
                            {category.name}
                          </span>
                        </div>
                        <span className="text-gray-500 text-sm">{category.count}</span>
                      </div>
                      <p className="text-gray-500 text-xs ml-6 group-hover:text-gray-400 transition-colors">
                        {category.description}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Newsletter */}
              <div className="bg-gradient-to-br from-pink-900/20 to-purple-900/20 rounded-xl p-6 border border-pink-800/30">
                <h3 className="text-lg font-semibold text-white mb-3">Newsletter Exclusiva</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Receba dicas semanais e conteúdo exclusivo diretamente no seu email.
                </p>
                <form className="space-y-3">
                  <input
                    type="email"
                    placeholder="Seu melhor email"
                    className="w-full px-4 py-2 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-pink-500 transition-colors"
                  />
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white py-2 rounded-lg font-medium hover:from-pink-600 hover:to-purple-600 transition-all duration-300"
                  >
                    Inscrever-se
                  </button>
                </form>
              </div>

              {/* Social Links */}
              <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
                <h3 className="text-lg font-semibold text-white mb-4">Me Acompanhe</h3>
                <div className="space-y-3">
                  <Link
                    href="https://onlyfans.com/zaramontana"
                    target="_blank"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800/50 transition-colors group"
                  >
                    <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                      <span className="text-white text-sm font-bold">OF</span>
                    </div>
                    <span className="text-gray-300 group-hover:text-white transition-colors">
                      OnlyFans
                    </span>
                  </Link>
                  
                  <Link
                    href="https://t.me/zaramontanaavip"
                    target="_blank"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800/50 transition-colors group"
                  >
                    <div className="w-8 h-8 bg-blue-400 rounded-lg flex items-center justify-center">
                      <span className="text-white text-sm font-bold">T</span>
                    </div>
                    <span className="text-gray-300 group-hover:text-white transition-colors">
                      Telegram
                    </span>
                  </Link>
                  
                  <Link
                    href="https://privacy.com.br/profile/zaramontanaa"
                    target="_blank"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800/50 transition-colors group"
                  >
                    <div className="w-8 h-8 bg-pink-500 rounded-lg flex items-center justify-center">
                      <span className="text-white text-sm font-bold">P</span>
                    </div>
                    <span className="text-gray-300 group-hover:text-white transition-colors">
                      Privacy
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  )
} 