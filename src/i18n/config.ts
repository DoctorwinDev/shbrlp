import { notFound } from 'next/navigation'
import { getRequestConfig } from 'next-intl/server'

// Lista de idiomas suportados
export const locales = ['pt', 'en'] as const
export type Locale = (typeof locales)[number]

// Configuração padrão
export const defaultLocale: Locale = 'pt'

// Função para verificar se o locale é válido
export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale)
}

// Configuração do next-intl
export default getRequestConfig(async ({ locale }) => {
  // Verificar se o locale é válido
  if (!isValidLocale(locale)) {
    notFound()
  }

  return {
    messages: (await import(`./locales/${locale}.json`)).default
  }
})

// Configurações de roteamento
export const pathnames = {
  '/': '/',
  '/blog': '/blog',
  '/politica-de-privacidade': '/politica-de-privacidade',
  '/termos-de-uso': '/termos-de-uso',
  '/cookies': '/cookies',
} as const

// Configurações de locale
export const localeConfig = {
  pt: {
    name: 'Português',
    flag: '🇧🇷',
    default: true,
  },
  en: {
    name: 'English',
    flag: '🇺🇸',
    default: false,
  },
} as const

// Função para obter locale do navegador
export function getLocaleFromHeader(headers: Headers): Locale {
  const acceptLanguage = headers.get('accept-language')
  if (acceptLanguage) {
    const preferredLocale = acceptLanguage
      .split(',')
      .map(lang => lang.split(';')[0].trim())
      .find(lang => isValidLocale(lang))
    
    if (preferredLocale) {
      return preferredLocale as Locale
    }
  }
  
  return defaultLocale
}

// Função para obter URL com locale
export function getLocalizedUrl(pathname: string, locale: Locale): string {
  if (locale === defaultLocale) {
    return pathname
  }
  
  return `/${locale}${pathname}`
}

// Função para obter locale da URL
export function getLocaleFromUrl(pathname: string): Locale {
  const segments = pathname.split('/')
  const potentialLocale = segments[1]
  
  if (isValidLocale(potentialLocale)) {
    return potentialLocale as Locale
  }
  
  return defaultLocale
}
