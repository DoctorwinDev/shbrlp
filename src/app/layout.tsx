import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { SITE_CONFIG, SEO_CONFIG } from '@/lib/constants'
// import AnalyticsProvider from '@/components/AnalyticsProvider'

const plusJakarta = Plus_Jakarta_Sans({ 
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  display: 'swap',
  weight: ['200', '300', '400', '500', '600', '700', '800']
})

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700']
})

export const metadata: Metadata = {
  title: SEO_CONFIG.defaultTitle,
  description: SEO_CONFIG.description,
  keywords: SITE_CONFIG.keywords.join(', '),
  authors: [{ name: SITE_CONFIG.author }],
  creator: SITE_CONFIG.author,
  publisher: SITE_CONFIG.author,
  robots: 'index, follow',
  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION,
  },
  openGraph: {
    title: SEO_CONFIG.openGraph.title,
    description: SEO_CONFIG.openGraph.description,
    url: SEO_CONFIG.openGraph.url,
    siteName: SEO_CONFIG.openGraph.siteName,
    locale: SEO_CONFIG.openGraph.locale,
    type: 'website',
    images: [...SEO_CONFIG.openGraph.images],
  },
  twitter: {
    card: 'summary_large_image',
    title: SEO_CONFIG.openGraph.title,
    description: SEO_CONFIG.openGraph.description,
    images: [...SEO_CONFIG.openGraph.images],
    creator: SEO_CONFIG.twitter.handle,
    site: SEO_CONFIG.twitter.site,
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
    shortcut: '/favicon.ico',
  },
  manifest: '/site.webmanifest',
  alternates: {
    canonical: SITE_CONFIG.url,
    languages: {
      'pt-BR': SITE_CONFIG.url,
    },
  },
  other: {
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'apple-mobile-web-app-title': SITE_CONFIG.name,
    'mobile-web-app-capable': 'yes',
    'theme-color': '#000000',
    'msapplication-TileColor': '#000000',
    'msapplication-config': '/browserconfig.xml',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${plusJakarta.variable}`}>
      <head>
        {/* Preconnect para melhor performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://connect.facebook.net" />
        
        {/* DNS Prefetch para plataformas externas */}
        <link rel="dns-prefetch" href="//onlyfans.com" />
        <link rel="dns-prefetch" href="//privacy.com.br" />
        <link rel="dns-prefetch" href="//t.me" />
        
        {/* Structured Data - JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebSite",
                  "@id": `${SITE_CONFIG.url}#website`,
                  "url": SITE_CONFIG.url,
                  "name": SITE_CONFIG.name,
                  "description": SITE_CONFIG.description,
                  "publisher": {
                    "@id": `${SITE_CONFIG.url}#organization`
                  },
                  "potentialAction": [
                    {
                      "@type": "SearchAction",
                      "target": {
                        "@type": "EntryPoint",
                        "urlTemplate": `${SITE_CONFIG.url}/blog?q={search_term_string}`
                      },
                      "query-input": "required name=search_term_string"
                    }
                  ]
                },
                {
                  "@type": "Organization",
                  "@id": `${SITE_CONFIG.url}#organization`,
                  "name": SITE_CONFIG.name,
                  "url": SITE_CONFIG.url,
                  "description": SITE_CONFIG.description,
                  "contactPoint": {
                    "@type": "ContactPoint",
                    "email": SITE_CONFIG.email,
                    "contactType": "customer service"
                  },
                  "sameAs": [
                    "https://onlyfans.com/zaramontana",
                    "https://privacy.com.br/profile/zaramontanaa",
                    "https://t.me/zaramontanavip",
                    "https://www.instagram.com/ZARAMONTANNASECRETO/",
                    "https://x.com/shakira_cam"
                  ]
                },
                {
                  "@type": "Person",
                  "@id": `${SITE_CONFIG.url}#person`,
                  "name": "ShakiraBr",
                  "alternateName": "Shakira BR",
                  "description": "Modelo brasileira premium especializada em conteúdo exclusivo e fotografia artística",
                  "url": SITE_CONFIG.url,
                  "sameAs": [
                    "https://onlyfans.com/zaramontana",
                    "https://privacy.com.br/profile/zaramontanaa",
                    "https://t.me/zaramontanavip",
                    "https://www.instagram.com/ZARAMONTANNASECRETO/",
                    "https://x.com/shakira_cam"
                  ],
                  "knowsAbout": [
                    "Modelagem",
                    "Fotografia",
                    "Conteúdo Digital",
                    "Marketing Digital"
                  ]
                }
              ]
            })
          }}
        />
      </head>
      <body className={`${plusJakarta.className} antialiased bg-black text-white min-h-screen`}>
        {/* Analytics Provider - Carrega scripts de tracking */}
        {/* <AnalyticsProvider /> */}
        
        {/* Header fixo */}
        <Header />
        
        {/* Conteúdo principal */}
        <main role="main">
          {children}
        </main>
        
        {/* Footer */}
        <Footer />
        
        {/* Scripts inline para performance */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Critical CSS carregado
              document.documentElement.classList.add('js-loaded');
              
              // Lazy loading para imagens
              if ('loading' in HTMLImageElement.prototype) {
                const images = document.querySelectorAll('img[loading="lazy"]');
                images.forEach(img => {
                  img.src = img.dataset.src;
                });
              }
            `
          }}
        />
      </body>
    </html>
  )
} 