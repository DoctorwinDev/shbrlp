import createMiddleware from 'next-intl/middleware'
import { locales, defaultLocale } from './src/i18n/config'

export default createMiddleware({
  // Lista de locales suportados
  locales,
  
  // Locale padrão
  defaultLocale,
  
  // Configurações de detecção de locale
  localeDetection: true,
  
  // Configurações de roteamento
  localePrefix: 'as-needed',
})

export const config = {
  // Matcher para aplicar o middleware
  matcher: [
    // Aplicar a todas as rotas exceto:
    // - Arquivos estáticos (/_next, /images, /favicon.ico, etc.)
    // - API routes (/api)
    '/((?!api|_next|_vercel|.*\\..*).*)',
  ],
}
