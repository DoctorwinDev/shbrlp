# ShakiraBr Website

Um site moderno e profissional para a modelo ShakiraBr, construído com Next.js 14, TypeScript e Tailwind CSS.

## 🚀 Características

- ✨ Design moderno e responsivo
- 🎯 Landing page focada em conversão
- 📝 Blog integrado para SEO
- 🔒 Páginas legais (Termos de Uso, Política de Privacidade)
- 📊 Integração com Google Analytics e Facebook Pixel
- 🎨 Animações suaves e interface atrativa
- 📱 Totalmente responsivo
- ⚡ Otimizado para performance

## 🛠️ Tecnologias

- **Next.js 14** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Framework CSS utilitário
- **Lucide React** - Ícones modernos
- **Gray Matter** - Parser para markdown (blog)
- **Remark** - Processador de markdown

## 📦 Instalação

1. Clone o repositório:
```bash
git clone <repository-url>
cd shakirabr-website
```

2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente:
```bash
cp .env.example .env.local
```

4. Edite o arquivo `.env.local` com suas configurações:
```env
NEXT_PUBLIC_GA_ID=your-google-analytics-id
NEXT_PUBLIC_FB_PIXEL_ID=your-facebook-pixel-id
SITE_URL=https://shakirabr.com
```

5. Execute em modo de desenvolvimento:
```bash
npm run dev
```

6. Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## 🚀 Deploy na Vercel

1. Conecte seu repositório no GitHub à Vercel
2. Configure as variáveis de ambiente no painel da Vercel
3. Deploy automático a cada push na branch main

### Variáveis de Ambiente para Produção

```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_FB_PIXEL_ID=123456789
SITE_URL=https://shakirabr.com
```

## 📁 Estrutura do Projeto

```
src/
├── app/                    # App Router (Next.js 14)
│   ├── globals.css         # Estilos globais
│   ├── layout.tsx          # Layout raiz
│   ├── page.tsx            # Página inicial
│   ├── blog/               # Blog
│   ├── termos-de-uso/      # Página de termos
│   └── politica-de-privacidade/ # Política de privacidade
├── components/             # Componentes reutilizáveis
│   ├── Header.tsx          # Cabeçalho
│   └── Footer.tsx          # Rodapé
├── types/                  # Tipos TypeScript
│   └── index.ts            # Tipos globais
└── lib/                    # Utilitários (futuro)
```

## 📈 SEO e Analytics

O site está configurado com:

- **Google Analytics 4** - Para rastreamento de usuários
- **Facebook Pixel** - Para campanhas de marketing
- **Meta tags otimizadas** - Para redes sociais
- **Structured data** - Para melhor indexação
- **Sitemap automático** - Gerado pelo Next.js

## 🎨 Customização

### Cores

As cores podem ser personalizadas no `tailwind.config.js`:

```javascript
colors: {
  primary: {
    // Rosa/Pink theme
    500: '#ec4899',
    600: '#db2777',
    // ...
  },
  secondary: {
    // Laranja theme
    500: '#f97316',
    600: '#ea580c',
    // ...
  }
}
```

### Conteúdo

- **Imagens**: Adicione imagens na pasta `public/`
- **Blog**: Adicione posts em `src/app/blog/`
- **Redes sociais**: Configure links no `Footer.tsx`

## 📝 Páginas Legais

O site inclui páginas essenciais para compliance:

- `/termos-de-uso` - Termos e condições
- `/politica-de-privacidade` - Política de privacidade
- `/politica-de-cookies` - Política de cookies (futuro)

Essas páginas são necessárias para aprovação dos pixels do Facebook e Google.

## 🔧 Scripts Disponíveis

```bash
npm run dev        # Desenvolvimento
npm run build      # Build para produção
npm run start      # Inicia servidor de produção
npm run lint       # Executa ESLint
npm run type-check # Verificação de tipos TypeScript
```

## 📱 Responsividade

O site é totalmente responsivo com breakpoints:

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎯 Performance

- **Core Web Vitals** otimizados
- **Images** com lazy loading
- **Fonts** com `next/font` otimizado
- **CSS** purged e minificado
- **JavaScript** split em chunks

## 🚦 Compliance

- **LGPD** compliant (Brasil)
- **GDPR** ready (Europa)
- **Verificação de idade** implementada
- **Disclaimers** para conteúdo adulto

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto é propriedade da ShakiraBr. Todos os direitos reservados.

## 📞 Suporte

Para suporte, entre em contato: contato@shakirabr.com

---

Desenvolvido com ❤️ para ShakiraBr 