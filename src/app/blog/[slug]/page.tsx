import type { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, Clock, ArrowLeft, Tag, User, Share2 } from 'lucide-react'
import { notFound } from 'next/navigation'

// Mock data - em produção viria de um CMS ou API
const blogPosts = [
  {
    slug: 'como-ser-modelo-webcam-iniciante',
    title: 'Como Ser Modelo Webcam: Guia Completo Para Iniciantes',
    excerpt: 'Descubra tudo sobre como começar na carreira de modelo webcam. Dicas essenciais, plataformas, equipamentos e como ganhar dinheiro online.',
    content: `
# Como Ser Modelo Webcam: Guia Completo Para Iniciantes

Decidir se tornar **modelo webcam** pode ser o primeiro passo para uma carreira lucrativa e independente. Como modelo brasileira há mais de 3 anos, vou compartilhar tudo que aprendi nessa jornada.

## Por Que Ser Modelo Webcam?

- **Flexibilidade total**: Você define seus horários
- **Renda alta**: Possibilidade de ganhar R$ 5.000 a R$ 50.000+ por mês
- **Trabalho em casa**: Sem deslocamentos ou chefes
- **Independência financeira**: Controle total sobre seus ganhos

## 1. Equipamentos Essenciais

### 1.1 Câmera HD
- **Webcam Logitech C920**: Padrão da indústria (R$ 400-600)
- **Webcam 4K**: Para qualidade superior (R$ 800-1200)
- **Smartphone**: Pode ser usado no início

### 1.2 Iluminação
- **Ring Light**: Fundamental para boa imagem (R$ 150-300)
- **Softbox**: Para luz mais suave (R$ 200-400)
- **LED Panels**: Iluminação profissional (R$ 300-600)

### 1.3 Áudio
- **Microfone USB**: Audio-Technica ou Blue Yeti (R$ 300-800)
- **Headset gamer**: Alternativa mais barata (R$ 100-300)

### 1.4 Computador
- **Processador**: Intel i5/AMD Ryzen 5 mínimo
- **RAM**: 8GB mínimo, 16GB recomendado
- **Internet**: 10Mbps upload mínimo

## 2. Melhores Plataformas Para Modelos Brasileiras

### 2.1 ChaturbateToken
- **Comissão**: 50-60% para modelo
- **Pagamento**: Semanal, USD
- **Público**: Internacional
- **Vantagem**: Grande audiência

### 2.2 Cam4
- **Comissão**: 50-65%
- **Pagamento**: Quinzenal
- **Público**: Latino/Internacional
- **Vantagem**: Interface amigável

### 2.3 StripChat
- **Comissão**: 50-70%
- **Pagamento**: Semanal/Quinzenal
- **Público**: Global
- **Vantagem**: Bons recursos para privados

### 2.4 MyFreeCams
- **Comissão**: 50-60%
- **Pagamento**: Quinzenal
- **Público**: Americano/Europeu
- **Vantagem**: Modelo de tokens estabelecido

## 3. Como Começar (Passo a Passo)

### Passo 1: Documentação
- **RG e CPF**: Documentos brasileiros
- **Conta bancária**: Para receber pagamentos
- **Idade**: 18+ anos obrigatório

### Passo 2: Registro nas Plataformas
- Cadastre-se em 2-3 plataformas inicialmente
- Complete todo o processo de verificação
- Configure seu perfil com fotos atraentes

### Passo 3: Setup do Ambiente
- **Quarto limpo e organizado**
- **Boa iluminação**
- **Ângulo da câmera**: Ligeiramente acima
- **Background atrativo**

### Passo 4: Horários Estratégicos
- **Manhã**: 9h-12h (Europa acordando)
- **Tarde**: 14h-18h (América acordando)
- **Noite**: 20h-2h (Horário nobre)

## 4. Dicas Para Ganhar Mais

### 4.1 Interação
- **Seja conversível**: Converse com todos
- **Aprenda inglês básico**: Expande sua audiência
- **Crie conexão**: Lembre-se de usuários regulares

### 4.2 Shows Privados
- **Defina preços**: Não aceite valores baixos
- **Seja criativa**: Ofereça experiências únicas
- **Estableça limites**: Deixe claro o que faz/não faz

### 4.3 Vendas Extras
- **Fotos/Vídeos**: Conteúdo personalizado
- **WhatsApp**: Para clientes VIP
- **OnlyFans**: Renda complementar
- **Privacy**: Plataforma brasileira

## 5. Segurança e Privacidade

### 5.1 Proteção Pessoal
- **Nunca revele**: Nome real, endereço, telefone
- **Use nome artístico**: Crie uma persona
- **Geoblocking**: Bloqueie sua cidade/estado

### 5.2 Proteção Digital
- **VPN**: Para mascarar localização
- **Senhas fortes**: Use gerenciador de senhas
- **2FA**: Autenticação em duas etapas

## 6. Aspectos Legais e Impostos

### 6.1 MEI (Microempreendedor Individual)
- **CNAE**: 96.09-2-02 (Outras atividades de serviços pessoais)
- **Limite**: R$ 81.000/ano
- **Benefícios**: INSS, baixo custo

### 6.2 Declaração de Imposto de Renda
- **Rendimentos**: Declare todos os ganhos
- **Consulte contador**: Para orientação específica

## 7. Cuidados com Saúde Mental

### 7.1 Estabeleça Limites
- **Horários definidos**: Não trabalhe 24/7
- **Dias de folga**: Descanse regularmente
- **Vida pessoal**: Mantenha separada do trabalho

### 7.2 Lidar com Haters
- **Ignore comentários negativos**
- **Use moderadores**: Para banir usuários problemáticos
- **Foque nos positivos**: Clientes que te valorizam

## Conclusão

Ser **modelo webcam** pode ser uma carreira muito lucrativa para quem está disposta a se dedicar. Lembre-se:

- **Seja consistente**: Apareça regularmente
- **Seja profissional**: Trate como um negócio
- **Seja autêntica**: Personalidade importa mais que aparência
- **Seja paciente**: Resultados vêm com tempo

Com dedicação e as estratégias certas, você pode construir uma renda sólida e independente trabalhando de casa.

---

*Quer mais dicas sobre como ser modelo webcam? Me segue nas redes sociais e acompanha meu conteúdo exclusivo!* 💕
    `,
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
    content: `
# Encontro Proibido: Conto Erótico

**Aviso: Conteúdo +18 anos. História fictícia para entretenimento adulto.**

Era uma quinta-feira típica quando recebi aquela mensagem no meu OnlyFans. Diferente das outras, esta vinha acompanhada de uma proposta que fez meu coração acelerar.

*"Oi Shakira, sou seu fã há meses. Estou de passagem por São Paulo próxima semana e gostaria de te conhecer pessoalmente. Pago qualquer valor."*

## O Primeiro Contato

Normalmente eu não aceito encontros presenciais, mas algo naquela mensagem me intrigou. O cara era educado, respeitoso, e pelos nossos chats anteriores, percebi que realmente me admirava além do conteúdo sexual.

Depois de alguns dias conversando, resolvi aceitar. Marcamos em um hotel cinco estrelas no centro da cidade, zona neutra e segura.

## A Preparação

Passei horas me arrumando. Escolhi uma lingerie vermelha de renda que deixava pouco para imaginação, por baixo de um vestido preto justo que realçava todas as minhas curvas. O salto alto fazia minhas pernas parecerem infinitas.

No espelho, me olhei uma última vez. Estava me sentindo poderosa, sensual, no controle da situação.

## O Encontro

Quando bati na porta do quarto 1205, meu coração estava disparado. Ele abriu a porta e ficamos nos olhando por alguns segundos em silêncio.

"Você é ainda mais bonita pessoalmente", foram suas primeiras palavras, acompanhadas de um sorriso genuíno.

Rafael era alto, moreno, com aquele perfume masculino que faz qualquer mulher se derreter. Seus olhos castanhos me olhavam com uma mistura de desejo e admiração.

## A Tensão Crescente

Conversamos por alguns minutos tomando champagne. Ele me contou sobre seu trabalho, suas viagens, mas eu percebia como seus olhos deslizavam pelo meu corpo, como sua respiração estava mais acelerada.

"Posso fazer um elogio?" ele perguntou, se aproximando.

"Claro", respondi, sentindo minha pele se arrepiar com sua proximidade.

"Você é a mulher mais sensual que já conheci. Não só fisicamente, mas a forma como fala, como se move... é hipnotizante."

## O Primeiro Toque

Suas mãos encontraram meu rosto delicadamente, e quando nossos lábios se tocaram, senti uma corrente elétrica percorrer todo meu corpo. O beijo começou suave, explorativo, mas rapidamente se tornou mais intenso.

Suas mãos desceram para minha cintura, me puxando para mais perto. Eu podia sentir seu desejo contra meu corpo, o que me deixou ainda mais excitada.

## A Entrega

Lentamente, ele foi desfazendo o nó do meu vestido, seus dedos roçando minha pele nua. Cada toque era como fogo, me fazendo suspirar baixinho.

"Você tem certeza?" ele sussurrou no meu ouvido, sua respiração quente me fazendo estremecer.

"Absoluta", respondi, já perdida no momento.

## O Clímax da Paixão

O que se seguiu foi uma dança sensual de corpos e desejos. Suas mãos exploraram cada curva do meu corpo com uma reverência que me fez sentir como uma deusa.

Nos entregamos completamente um ao outro, sem pressa, saboreando cada momento, cada gemido, cada suspiro. Foi intenso, apaixonado, algo que havia muito tempo eu não experimentava.

## O Depois

Ficamos deitados em silêncio, seus braços ao meu redor, nossa respiração ainda acelerada. O quarto estava impregnado com o cheiro do nosso amor.

"Isso foi..." ele começou.

"Incrível", completei, sorrindo.

Conversamos até o amanhecer, sobre tudo e nada. Era estranho como alguém que eu havia conhecido virtualmente podia me proporcionar uma conexão tão real e intensa.

## A Despedida

Quando chegou a hora dele ir embora, nos despedimos com um beijo longo e cheio de promessas não ditas.

"Obrigado por esta noite", ele disse, suas mãos ainda em meu rosto.

"Obrigada você por me fazer sentir tão especial", respondi.

## Reflexões

Depois que ele partiu, fiquei pensando como alguns encontros podem mudar nossa perspectiva sobre intimidade e conexão. Não foi apenas sexo, foi uma experiência completa que envolveu mente, corpo e alma.

Essa noite me lembrou que, por trás da tela e das fantasias, somos pessoas reais com desejos e necessidades de conexão genuína.

---

**Fim do Conto**

*Este foi um dos encontros mais marcantes da minha vida. Às vezes, as melhores experiências surgem quando menos esperamos.*

*Gostaram da história? Deixem nos comentários que experiências vocês gostariam de ler! 💋*

---

*Conteúdo exclusivo para maiores de 18 anos. Se você chegou até aqui, que tal conhecer meu conteúdo premium no OnlyFans e Privacy?*
    `,
    author: 'ShakiraBr',
    publishedAt: '2024-01-14',
    readTime: '8 min',
    category: 'Contos Eróticos',
    tags: ['conto erótico', 'história sensual', 'modelo brasileira', 'sexo', 'fantasia erótica'],
    featured: false,
    image: '/blog/post-2.jpg'
  },
  // Adicionar outros posts aqui...
]

interface Props {
  params: {
    slug: string
  }
}

async function getPost(slug: string) {
  const post = blogPosts.find(p => p.slug === slug)
  return post || null
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPost(params.slug)
  
  if (!post) {
    return {
      title: 'Post não encontrado',
    }
  }

  return {
    title: `${post.title} | Blog ShakiraBr`,
    description: post.excerpt,
    keywords: post.tags.join(', '),
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.publishedAt,
      authors: [post.author],
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
    },
  }
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function BlogPostPage({ params }: Props) {
  const post = await getPost(params.slug)

  if (!post) {
    notFound()
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('pt-BR', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })
  }

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-12 px-6">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-900/20 via-purple-900/20 to-blue-900/20"></div>
        <div className="relative max-w-4xl mx-auto">
          
          {/* Breadcrumb */}
          <nav className="mb-8">
            <Link 
              href="/blog"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar ao Blog
            </Link>
          </nav>

          {/* Post Header */}
          <header className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 text-sm text-gray-400 mb-6">
              <span className="bg-pink-500/20 text-pink-300 px-3 py-1 rounded-full">
                {post.category}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {formatDate(post.publishedAt)}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                {post.title}
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              {post.excerpt}
            </p>
          </header>
        </div>
      </section>

      {/* Post Content */}
      <article className="max-w-4xl mx-auto px-6 pb-20">
        
        {/* Author Info */}
        <div className="flex items-center justify-between mb-12 p-6 bg-gray-900/50 rounded-xl border border-gray-800">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
              <User className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-white font-semibold">{post.author}</h3>
              <p className="text-gray-400 text-sm">Modelo & Content Creator</p>
            </div>
          </div>
          
          <button className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors">
            <Share2 className="w-4 h-4" />
            Compartilhar
          </button>
        </div>

        {/* Featured Image */}
        <div className="aspect-video mb-12 rounded-2xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
          <div className="w-full h-full flex items-center justify-center text-gray-500">
            Imagem do post: {post.title}
          </div>
        </div>

        {/* Post Content */}
        <div className="prose prose-invert prose-lg max-w-none">
          <div 
            className="text-gray-300 leading-relaxed space-y-6"
            dangerouslySetInnerHTML={{ 
              __html: post.content.replace(/\n/g, '<br/>').replace(/#{1,6} /g, '<h2 class="text-2xl font-bold text-white mt-8 mb-4">').replace(/<h2[^>]*>/g, '<h2 class="text-2xl font-bold text-white mt-8 mb-4">') 
            }}
          />
        </div>

        {/* Tags */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <h4 className="text-white font-semibold mb-4">Tags:</h4>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Link
                key={tag}
                href={`/blog/tag/${tag}`}
                className="flex items-center gap-1 px-3 py-1 bg-gray-800 hover:bg-gray-700 rounded-full text-sm transition-colors"
              >
                <Tag className="w-3 h-3" />
                {tag}
              </Link>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link 
              href="/blog"
              className="flex items-center gap-3 p-6 bg-gray-900/50 rounded-xl hover:bg-gray-900/70 transition-colors border border-gray-800"
            >
              <ArrowLeft className="w-5 h-5 text-pink-400" />
              <div>
                <p className="text-gray-400 text-sm">Anterior</p>
                <p className="text-white font-medium">Todos os Posts</p>
              </div>
            </Link>
            
            <Link 
              href="/blog"
              className="flex items-center justify-end gap-3 p-6 bg-gray-900/50 rounded-xl hover:bg-gray-900/70 transition-colors border border-gray-800"
            >
              <div className="text-right">
                <p className="text-gray-400 text-sm">Próximo</p>
                <p className="text-white font-medium">Ver Mais Posts</p>
              </div>
              <ArrowLeft className="w-5 h-5 text-pink-400 rotate-180" />
            </Link>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 p-8 bg-gradient-to-br from-pink-900/20 to-purple-900/20 rounded-2xl border border-pink-800/30 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Gostou do conteúdo?</h3>
          <p className="text-gray-300 mb-6">
            Se inscreva na newsletter para receber mais dicas exclusivas toda semana.
          </p>
          <Link 
            href="/blog#newsletter"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg font-medium hover:from-pink-600 hover:to-purple-600 transition-all duration-300"
          >
            Inscrever-se
            <ArrowLeft className="w-4 h-4 rotate-180" />
          </Link>
        </div>
      </article>
    </main>
  )
} 