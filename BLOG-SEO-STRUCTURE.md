# Estrutura do Blog Otimizada para SEO - Shakira BR

## 📁 Estrutura de Pastas do Blog

```
src/app/blog/
├── page.tsx                           # Página principal do blog
├── [slug]/
│   └── page.tsx                       # Página dinâmica de posts individuais
├── categoria/
│   └── [category]/
│       └── page.tsx                   # Página de categorias
├── tag/
│   └── [tag]/
│       └── page.tsx                   # Página de tags
└── ensaio-sensual-dicas-fotos-casa-guia-2025/
    └── page.tsx                       # Post específico (exemplo)
```

## 🎯 URLs Otimizadas para SEO

### Posts Individuais
- **URL:** `/blog/ensaio-sensual-dicas-fotos-casa-guia-2025`
- **Estrutura:** `/blog/[slug]`
- **SEO:** URLs amigáveis com palavras-chave

### Categorias
- **URL:** `/blog/categoria/lifestyle`
- **Estrutura:** `/blog/categoria/[category]`
- **SEO:** Organização hierárquica

### Tags
- **URL:** `/blog/tag/ensaio-sensual`
- **Estrutura:** `/blog/tag/[tag]`
- **SEO:** Agrupamento por tópicos

## 📊 Sitemap Otimizado

### Prioridades
- **Home:** 1.0 (máxima prioridade)
- **Blog:** 0.9 (alta prioridade)
- **Posts:** 0.8 (alta prioridade)
- **Categorias:** 0.6 (média prioridade)
- **Tags:** 0.5 (média prioridade)
- **Legal:** 0.3 (baixa prioridade)

### Frequência de Atualização
- **Home/Blog:** daily (diário)
- **Posts/Categorias/Tags:** weekly (semanal)
- **Legal:** monthly (mensal)

## 🔍 Meta Tags Otimizadas

### Página Principal do Blog
```typescript
title: 'Blog | Shakira BR'
description: 'Explore os últimos posts do blog da Shakira BR. Conteúdo exclusivo sobre lifestyle, beleza e muito mais.'
keywords: 'blog, shakira br, lifestyle, beleza, autoestima, dicas'
```

### Posts Individuais
```typescript
title: '15 Dicas de Ensaio Sensual: Como Fazer Fotos Incríveis em Casa [Guia 2025]'
description: 'Descubra como fazer um ensaio sensual profissional em casa usando apenas o celular. Guia completo com 15 dicas práticas, poses que valorizam qualquer corpo, técnicas de iluminação e apps de edição.'
keywords: 'ensaio sensual, fotos em casa, autoestima feminina, fotografia com celular, poses femininas, boudoir caseiro, empoderamento feminino, beleza natural, autoconfiança, fotografia íntima'
```

### Categorias
```typescript
title: 'Lifestyle | Blog Shakira BR'
description: 'Explore todos os posts sobre lifestyle no blog da Shakira BR. Conteúdo exclusivo e dicas valiosas.'
```

### Tags
```typescript
title: '#Ensaio Sensual | Blog Shakira BR'
description: 'Explore todos os posts com a tag ensaio sensual no blog da Shakira BR. Conteúdo exclusivo e dicas valiosas.'
```

## 📝 Dados Estruturados (Schema.org)

### Artigo (Article)
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Título do Post",
  "description": "Descrição do post",
  "author": {
    "@type": "Person",
    "name": "Shakira BR"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Shakira BR"
  },
  "datePublished": "2025-01-15",
  "dateModified": "2025-01-15",
  "image": "URL da imagem",
  "articleSection": "Categoria",
  "keywords": "palavras-chave"
}
```

### Breadcrumbs
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://shakirabr.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Blog",
      "item": "https://shakirabr.com/blog"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Título do Post",
      "item": "https://shakirabr.com/blog/slug"
    }
  ]
}
```

## 🖼️ Otimização de Imagens

### Configurações Next.js Image
```typescript
<Image
  src={post.image}
  alt={post.title}
  fill
  className="object-cover"
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  priority={post.featured}
/>
```

### Formatos Suportados
- **WebP:** Formato moderno com melhor compressão
- **JPEG:** Para fotografias
- **PNG:** Para imagens com transparência

## 📱 Open Graph e Twitter Cards

### Open Graph
```typescript
openGraph: {
  title: 'Título do Post',
  description: 'Descrição do post',
  url: 'https://shakirabr.com/blog/slug',
  siteName: 'Shakira BR',
  type: 'article',
  images: [
    {
      url: 'https://shakirabr.com/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Descrição da imagem'
    }
  ]
}
```

### Twitter Cards
```typescript
twitter: {
  card: 'summary_large_image',
  title: 'Título do Post',
  description: 'Descrição do post',
  images: ['https://shakirabr.com/twitter-image.jpg']
}
```

## 🔗 Estrutura de Links Internos

### Navegação
- **Home** → **Blog** → **Post**
- **Home** → **Blog** → **Categoria** → **Post**
- **Home** → **Blog** → **Tag** → **Post**

### Links Relacionados
- Posts da mesma categoria
- Posts com tags similares
- Posts em destaque

## 📈 Analytics e Monitoramento

### Google Analytics
- Rastreamento de páginas
- Eventos de engajamento
- Conversões

### Search Console
- Monitoramento de performance
- Indexação de páginas
- Relatórios de SEO

## 🚀 Performance e Core Web Vitals

### Otimizações Implementadas
- **Lazy Loading:** Imagens carregadas sob demanda
- **Static Generation:** Páginas pré-renderizadas
- **Image Optimization:** Compressão automática
- **Code Splitting:** JavaScript dividido por rotas

### Métricas Alvo
- **LCP (Largest Contentful Paint):** < 2.5s
- **FID (First Input Delay):** < 100ms
- **CLS (Cumulative Layout Shift):** < 0.1

## 📋 Checklist para Novos Posts

### Antes de Publicar
- [ ] URL amigável com palavras-chave
- [ ] Meta title otimizado (50-60 caracteres)
- [ ] Meta description atrativa (150-160 caracteres)
- [ ] Imagem de destaque otimizada (1200x630px)
- [ ] Dados estruturados implementados
- [ ] Open Graph configurado
- [ ] Twitter Cards configurado
- [ ] Breadcrumbs implementados
- [ ] Links internos adicionados
- [ ] Tags e categorias definidas

### Após Publicar
- [ ] Sitemap atualizado
- [ ] Search Console notificado
- [ ] Redes sociais compartilhado
- [ ] Analytics configurado
- [ ] Performance testada

## 🎯 Estratégia de Conteúdo

### Categorias Principais
1. **Lifestyle:** Dicas de vida e bem-estar
2. **Beleza:** Cuidados e autoestima
3. **Autoestima:** Empoderamento feminino
4. **Fotografia:** Dicas de ensaios
5. **Moda:** Estilo e tendências

### Palavras-chave Principais
- ensaio sensual
- fotos em casa
- autoestima feminina
- fotografia com celular
- poses femininas
- boudoir caseiro
- empoderamento feminino
- beleza natural
- autoconfiança
- fotografia íntima

## 📊 Monitoramento de SEO

### Ferramentas Utilizadas
- **Google Search Console:** Monitoramento de performance
- **Google Analytics:** Análise de tráfego
- **PageSpeed Insights:** Performance de páginas
- **Lighthouse:** Auditoria completa
- **Screaming Frog:** Análise técnica

### Métricas Importantes
- **Posições no Google:** Para palavras-chave principais
- **Tráfego orgânico:** Visitas vindas de busca
- **Taxa de cliques:** CTR das páginas
- **Tempo na página:** Engajamento dos usuários
- **Taxa de rejeição:** Qualidade do conteúdo

Esta estrutura garante que o blog da Shakira BR esteja totalmente otimizado para SEO, com URLs amigáveis, meta tags completas, dados estruturados e performance otimizada.
