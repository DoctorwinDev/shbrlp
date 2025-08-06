import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

// Dados estruturados para SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "15 Dicas de Ensaio Sensual: Como Fazer Fotos Incríveis em Casa [Guia 2025]",
  "description": "Descubra como fazer um ensaio sensual profissional em casa usando apenas o celular. Guia completo com 15 dicas práticas, poses que valorizam qualquer corpo e técnicas de iluminação.",
  "author": {
    "@type": "Organization",
    "name": "ShakiraBr"
  },
  "publisher": {
    "@type": "Organization",
    "name": "ShakiraBr",
    "logo": {
      "@type": "ImageObject",
      "url": "https://shakirabr.com/logo.png"
    }
  },
  "datePublished": "2025-01-15",
  "dateModified": "2025-01-15",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://shakirabr.com/blog/ensaio-sensual-dicas-fotos-casa-guia-2025"
  },
  "image": {
    "@type": "ImageObject",
    "url": "https://shakirabr.com/galeria/preview1.jpg",
    "width": 1200,
    "height": 630
  },
  "wordCount": 2500,
  "articleSection": "Lifestyle",
  "keywords": "ensaio sensual, fotos em casa, autoestima feminina, fotografia com celular, poses femininas, boudoir caseiro",
  "about": [
    {
      "@type": "Thing",
      "name": "Fotografia Sensual"
    },
    {
      "@type": "Thing", 
      "name": "Autoestima Feminina"
    },
    {
      "@type": "Thing",
      "name": "Fotografia com Celular"
    }
  ]
}

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Como fazer um ensaio sensual em casa?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Para fazer um ensaio sensual em casa você precisa de boa iluminação natural, poses que valorizem seu corpo, roupas adequadas e um celular com boa câmera. O segredo está na preparação do ambiente e na autoconfiança."
      }
    },
    {
      "@type": "Question",
      "name": "Qual a melhor iluminação para ensaio sensual?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A luz natural é ideal, especialmente próximo a janelas grandes entre 16h e 18h (golden hour). Use cortinas brancas para suavizar a luz e evite luz amarelada do teto que cria sombras indesejadas."
      }
    },
    {
      "@type": "Question",
      "name": "Que roupas usar em ensaio sensual caseiro?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Lingerie clássica em preto, nude ou branco, camisetas oversized, robes, bodies e acessórios delicados. O importante é escolher peças que te deixem confiante e confortável."
      }
    }
  ]
}

export const metadata: Metadata = {
  title: "15 Dicas de Ensaio Sensual: Como Fazer Fotos Incríveis em Casa [Guia 2025] | ShakiraBr",
  description: "Descubra como fazer um ensaio sensual profissional em casa usando apenas o celular. Guia completo com 15 dicas práticas, poses que valorizam qualquer corpo, técnicas de iluminação e apps de edição.",
  keywords: "ensaio sensual, fotos em casa, autoestima feminina, fotografia com celular, poses femininas, boudoir caseiro, empoderamento feminino, beleza natural, autoconfiança, fotografia íntima",
  authors: [{ name: "ShakiraBr" }],
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  alternates: {
    canonical: "https://shakirabr.com/blog/ensaio-sensual-dicas-fotos-casa-guia-2025"
  },
  openGraph: {
    type: "article",
    url: "https://shakirabr.com/blog/ensaio-sensual-dicas-fotos-casa-guia-2025",
    title: "15 Dicas de Ensaio Sensual: Como Fazer Fotos Incríveis em Casa [Guia 2025]",
    description: "Descubra como fazer um ensaio sensual profissional em casa usando apenas o celular. Guia completo com 15 dicas práticas e técnicas de iluminação.",
    images: [
      {
        url: "https://shakirabr.com/galeria/preview1.jpg",
        width: 1200,
        height: 630,
        alt: "Mulher fazendo ensaio sensual em casa com iluminação natural"
      }
    ],
    siteName: "ShakiraBr",
    locale: "pt_BR",
    publishedTime: "2025-01-15T10:00:00.000Z",
    modifiedTime: "2025-01-15T10:00:00.000Z",
    authors: ["ShakiraBr"],
    section: "Lifestyle",
    tags: ["ensaio sensual", "fotografia", "autoestima"]
  },
  twitter: {
    card: "summary_large_image",
    title: "15 Dicas de Ensaio Sensual: Como Fazer Fotos Incríveis em Casa",
    description: "Guia completo para fazer ensaio sensual em casa: 15 dicas práticas, poses para todos os corpos, técnicas de iluminação e edição.",
    images: ["https://shakirabr.com/galeria/preview1.jpg"],
    creator: "@shakira_cam",
    site: "@shakira_cam"
  }
}

export default function EnsaioSensualGuia() {
  return (
    <div className="min-h-screen bg-white">
      {/* Dados Estruturados */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
      />

      {/* Breadcrumb */}
      <nav className="container mx-auto px-4 py-4" aria-label="Breadcrumb">
        <ol className="flex items-center space-x-2 text-sm text-gray-600">
          <li><Link href="/" className="hover:text-pink-600">Home</Link></li>
          <li className="before:content-['/'] before:mx-2">
            <Link href="/blog" className="hover:text-pink-600">Blog</Link>
          </li>
          <li className="before:content-['/'] before:mx-2 text-gray-800 font-medium">
            Ensaio Sensual: Guia Completo
          </li>
        </ol>
      </nav>

      {/* Hero Section */}
      <header className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            15 Dicas de Ensaio Sensual: Como Fazer Fotos Incríveis em Casa 
            <span className="block text-pink-600 text-2xl md:text-3xl mt-2">[Guia 2025]</span>
          </h1>
          
          <div className="flex items-center justify-center space-x-6 text-gray-600 mb-8">
            <span className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
              Última atualização: Janeiro 2025
            </span>
            <span className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              Tempo de leitura: 12 minutos
            </span>
          </div>

          <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden shadow-2xl mb-8">
            <Image
              src="/galeria/preview1.jpg"
              alt="Mulher confiante fazendo ensaio sensual em casa com iluminação natural"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
            />
          </div>

          <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Você já sonhou em fazer um <strong>ensaio sensual</strong> profissional, mas não sabe por onde começar? 
            Talvez a ideia de contratar um fotógrafo te deixe nervosa, ou o orçamento esteja apertado.
          </p>
          
          <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
            A boa notícia é que você pode criar fotos incríveis no conforto da sua casa, 
            usando apenas o celular e algumas técnicas simples que vou compartilhar neste guia completo.
          </p>
        </div>
      </header>

      {/* Table of Contents */}
      <nav className="container mx-auto px-4 mb-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-pink-500">
            <h2 className="text-xl font-bold text-gray-900 mb-4">📋 Índice do Conteúdo</h2>
            <div className="grid md:grid-cols-2 gap-2">
              <a href="#o-que-e" className="text-pink-600 hover:text-pink-800 block py-1">• O Que é um Ensaio Sensual?</a>
              <a href="#por-que-fazer" className="text-pink-600 hover:text-pink-800 block py-1">• Por Que Fazer um Ensaio?</a>
              <a href="#preparacao" className="text-pink-600 hover:text-pink-800 block py-1">• Como se Preparar</a>
              <a href="#iluminacao" className="text-pink-600 hover:text-pink-800 block py-1">• Iluminação Perfeita</a>
              <a href="#poses" className="text-pink-600 hover:text-pink-800 block py-1">• 15 Poses Que Valorizam</a>
              <a href="#roupas" className="text-pink-600 hover:text-pink-800 block py-1">• Roupas e Lingeries</a>
              <a href="#tecnicas" className="text-pink-600 hover:text-pink-800 block py-1">• Técnicas com Celular</a>
              <a href="#checklist" className="text-pink-600 hover:text-pink-800 block py-1">• Checklist Final</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <article className="prose prose-lg max-w-none">
            
            {/* Section 1 */}
            <section id="o-que-e" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-pink-200 pb-3">
                O Que é um Ensaio Sensual?
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Um <strong>ensaio sensual</strong> é uma sessão de fotos que tem como objetivo capturar a beleza, 
                sensualidade e personalidade de uma pessoa de forma artística e elegante. Diferente do que muitos pensam, 
                sensual não significa vulgar – é sobre <em>empoderamento</em>, <em>autoestima</em> e <em>arte</em>.
              </p>
            </section>

            {/* Section 2 */}
            <section id="por-que-fazer" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-pink-200 pb-3">
                Por Que Fazer um Ensaio Sensual?
              </h2>
              
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Benefícios Comprovados:</h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-pink-50 p-6 rounded-lg">
                  <h4 className="font-bold text-pink-800 mb-2">✨ Autoestima elevada</h4>
                  <p className="text-gray-700">89% das mulheres relatam maior confiança após o ensaio</p>
                </div>
                <div className="bg-pink-50 p-6 rounded-lg">
                  <h4 className="font-bold text-pink-800 mb-2">💖 Reconexão com o próprio corpo</h4>
                  <p className="text-gray-700">Redescobrir sua beleza única</p>
                </div>
                <div className="bg-pink-50 p-6 rounded-lg">
                  <h4 className="font-bold text-pink-800 mb-2">🎁 Presente especial</h4>
                  <p className="text-gray-700">Para você mesma ou para alguém especial</p>
                </div>
                <div className="bg-pink-50 p-6 rounded-lg">
                  <h4 className="font-bold text-pink-800 mb-2">📸 Memórias duradouras</h4>
                  <p className="text-gray-700">Registrar um momento único da sua vida</p>
                </div>
              </div>
            </section>

            {/* Section 3 - Preparação */}
            <section id="preparacao" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-pink-200 pb-3">
                Como se Preparar Para o Ensaio Sensual
              </h2>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">1. Planejamento Mental</h3>
              <p className="text-gray-700 mb-4">
                Antes de qualquer coisa, defina o <strong>estilo</strong> que você quer alcançar:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>Romântico e delicado</li>
                <li>Ousado e marcante</li>
                <li>Clássico e elegante</li>
                <li>Moderno e despojado</li>
              </ul>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">2. Cuidados com o Corpo</h3>
              
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h4 className="font-bold text-gray-800 mb-3">Uma semana antes:</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Hidrate bem a pele</li>
                  <li>Faça esfoliação suave</li>
                  <li>Cuide das unhas</li>
                  <li>Evite procedimentos que possam causar vermelhidão</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h4 className="font-bold text-gray-800 mb-3">No dia do ensaio:</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Tome um banho relaxante</li>
                  <li>Use um hidratante que você já conhece</li>
                  <li>Evite roupas que marquem a pele antes das fotos</li>
                </ul>
              </div>
            </section>

            {/* Section 4 - Iluminação */}
            <section id="iluminacao" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-pink-200 pb-3">
                Iluminação - O Segredo das Fotos Perfeitas
              </h2>
              
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-6">
                <p className="text-gray-800 font-semibold">
                  💡 A <strong>iluminação</strong> é 70% do sucesso do seu ensaio sensual. 
                  Aqui estão as melhores opções:
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                  <h3 className="text-xl font-bold text-green-800 mb-4">🌞 Luz Natural (Recomendada)</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Próximo a janelas grandes</li>
                    <li>• Melhor horário: 16h às 18h (golden hour)</li>
                    <li>• Use cortinas brancas para suavizar a luz</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                  <h3 className="text-xl font-bold text-blue-800 mb-4">💡 Luz Artificial</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Evite luz amarelada do teto</li>
                    <li>• Use abajures ou ring lights</li>
                    <li>• Posicione a luz na diagonal</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 5 - Poses */}
            <section id="poses" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-pink-200 pb-3">
                15 Poses Que Valorizam Qualquer Corpo
              </h2>

              <div className="space-y-8">
                {/* Poses em Pé */}
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">Poses em Pé</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-pink-50 p-4 rounded-lg">
                      <h4 className="font-bold text-pink-800 mb-2">1. A Clássica Curvinha</h4>
                      <ul className="text-gray-700 text-sm space-y-1">
                        <li>• Peso numa perna só</li>
                        <li>• Mão na cintura</li>
                        <li>• Ombros relaxados</li>
                      </ul>
                    </div>
                    
                    <div className="bg-pink-50 p-4 rounded-lg">
                      <h4 className="font-bold text-pink-800 mb-2">2. Contra a Parede</h4>
                      <ul className="text-gray-700 text-sm space-y-1">
                        <li>• Encoste as costas na parede</li>
                        <li>• Um pé apoiado na parede</li>
                        <li>• Braços relaxados</li>
                      </ul>
                    </div>
                    
                    <div className="bg-pink-50 p-4 rounded-lg">
                      <h4 className="font-bold text-pink-800 mb-2">3. Silhueta na Janela</h4>
                      <ul className="text-gray-700 text-sm space-y-1">
                        <li>• De perfil ou 3/4</li>
                        <li>• Luz natural criando contorno</li>
                        <li>• Pose contemplativa</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Poses Sentada */}
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">Poses Sentada</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h4 className="font-bold text-purple-800 mb-2">4. Na Beirada da Cama</h4>
                      <ul className="text-gray-700 text-sm space-y-1">
                        <li>• Pernas cruzadas ou abertas</li>
                        <li>• Postura ereta</li>
                        <li>• Olhar direto na câmera</li>
                      </ul>
                    </div>
                    
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h4 className="font-bold text-purple-800 mb-2">5. Cadeira de Frente</h4>
                      <ul className="text-gray-700 text-sm space-y-1">
                        <li>• Sentada de frente para a cadeira</li>
                        <li>• Braços apoiados no encosto</li>
                        <li>• Pose confiante</li>
                      </ul>
                    </div>
                    
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h4 className="font-bold text-purple-800 mb-2">6. No Chão</h4>
                      <ul className="text-gray-700 text-sm space-y-1">
                        <li>• Pernas dobradas para o lado</li>
                        <li>• Apoie-se numa mão</li>
                        <li>• Cabeça ligeiramente inclinada</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Poses Deitada */}
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">Poses Deitada</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-bold text-blue-800 mb-2">7. De Lado na Cama</h4>
                      <ul className="text-gray-700 text-sm space-y-1">
                        <li>• Corpo formando uma curva suave</li>
                        <li>• Cabeça apoiada na mão</li>
                        <li>• Expressão relaxada</li>
                      </ul>
                    </div>
                    
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-bold text-blue-800 mb-2">8. Barriga para Baixo</h4>
                      <ul className="text-gray-700 text-sm space-y-1">
                        <li>• Pés para cima, cruzados</li>
                        <li>• Apoie o queixo nas mãos</li>
                        <li>• Olhar sedutor</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* FAQ Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-pink-200 pb-3">
                Perguntas Frequentes
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-gray-800 mb-2">Como fazer um ensaio sensual em casa?</h3>
                  <p className="text-gray-700">
                    Para fazer um ensaio sensual em casa você precisa de boa iluminação natural, 
                    poses que valorizem seu corpo, roupas adequadas e um celular com boa câmera. 
                    O segredo está na preparação do ambiente e na autoconfiança.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-gray-800 mb-2">Qual a melhor iluminação para ensaio sensual?</h3>
                  <p className="text-gray-700">
                    A luz natural é ideal, especialmente próximo a janelas grandes entre 16h e 18h (golden hour). 
                    Use cortinas brancas para suavizar a luz e evite luz amarelada do teto que cria sombras indesejadas.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-gray-800 mb-2">Que roupas usar em ensaio sensual caseiro?</h3>
                  <p className="text-gray-700">
                    Lingerie clássica em preto, nude ou branco, camisetas oversized, robes, bodies e acessórios delicados. 
                    O importante é escolher peças que te deixem confiante e confortável.
                  </p>
                </div>
              </div>
            </section>

            {/* Conclusão */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-pink-200 pb-3">
                Conclusão: Sua Jornada de Autoconfiança Começa Agora
              </h2>
              
              <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-8 rounded-lg mb-8">
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Um <strong>ensaio sensual</strong> vai muito além de simples fotos. É um momento de reconexão com sua beleza, 
                  um exercício de autoamor e uma celebração de quem você é.
                </p>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  Lembre-se: não existe corpo perfeito, existe o <em>SEU</em> corpo sendo celebrado da maneira mais linda possível. 
                  Cada curva, cada marca, cada detalhe fazem parte da sua história única.
                </p>
              </div>

              <div className="text-center bg-pink-100 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-pink-800 mb-4">
                  ✨ Você está pronta para se apaixonar pelas suas próprias fotos? ✨
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Se este guia te ajudou, compartilhe com outras mulheres que também merecem se sentir lindas e confiantes. 
                  E não esquece: o ensaio perfeito é aquele onde <strong>VOCÊ</strong> se sente incrível.
                </p>
                <p className="text-lg font-semibold text-pink-600 mt-4">
                  💖 Sua beleza merece ser celebrada. Comece hoje mesmo!
                </p>
              </div>
            </section>

          </article>
        </div>
      </main>

      {/* Related Articles */}
      <section className="container mx-auto px-4 py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Artigos Relacionados</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="font-bold text-gray-800 mb-2">Como Aumentar a Autoestima Feminina</h3>
              <p className="text-gray-600 text-sm">Dicas práticas para se sentir mais confiante no dia a dia...</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="font-bold text-gray-800 mb-2">Fotografia com Celular: Guia Completo</h3>
              <p className="text-gray-600 text-sm">Aprenda todas as técnicas para fotos profissionais...</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="font-bold text-gray-800 mb-2">Poses para Fotos: Manual Completo</h3>
              <p className="text-gray-600 text-sm">50 poses que valorizam qualquer tipo de corpo...</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-pink-600 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Receba Mais Dicas de Beleza e Autoestima</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Cadastre-se na nossa newsletter e receba semanalmente conteúdos exclusivos sobre fotografia, 
            autoestima e empoderamento feminino.
          </p>
          <div className="max-w-md mx-auto flex gap-2">
            <input 
              type="email" 
              placeholder="Seu melhor email" 
              className="flex-1 px-4 py-2 rounded text-gray-900"
            />
            <button className="bg-white text-pink-600 px-6 py-2 rounded font-bold hover:bg-gray-100">
              Cadastrar
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}