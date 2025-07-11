import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'ShakiraBr - Modelo Exclusiva',
  description: 'Conteúdo exclusivo da modelo ShakiraBr. Acesse fotos, vídeos e conteúdo premium.',
  keywords: 'modelo,ShakiraBr,fotos,conteúdo exclusivo,premium',
  authors: [{ name: 'ShakiraBr' }],
  creator: 'ShakiraBr',
  publisher: 'ShakiraBr',
  robots: 'index, follow',
  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },
  verification: {
    google: 'google-site-verification-code',
    yandex: 'yandex-verification-code',
  },
  openGraph: {
    title: 'ShakiraBr - Modelo Exclusiva',
    description: 'Conteúdo exclusivo da modelo ShakiraBr. Acesse fotos, vídeos e conteúdo premium.',
    url: 'https://shakirabr.com/',
    siteName: 'ShakiraBr',
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ShakiraBr - Modelo Exclusiva',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ShakiraBr - Modelo Exclusiva',
    description: 'Conteúdo exclusivo da modelo ShakiraBr. Acesse fotos, vídeos e conteúdo premium.',
    images: ['/og-image.jpg'],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        {/* Favicons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`bg-white text-gray-900`}>
        <Header />
        {children}
        <Footer />

        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=undefined"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'undefined', {
                page_title: document.title,
                page_location: window.location.href,
              });
            `,
          }}
        />

        {/* Facebook Pixel */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', 'undefined');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img height="1" width="1" style={{display:'none'}} 
               src="https://www.facebook.com/tr?id=undefined&ev=PageView&noscript=1" />
        </noscript>
      </body>
    </html>
  )
} 