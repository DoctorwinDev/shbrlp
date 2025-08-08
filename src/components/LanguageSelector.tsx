'use client'

import { useLocale } from 'next-intl'
import { useRouter, usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { ChevronDown, Globe } from 'lucide-react'
import { localeConfig, type Locale } from '@/i18n/config'

export default function LanguageSelector() {
  const [isClient, setIsClient] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  
  // Hooks condicionais para evitar erros SSR
  let locale: Locale = 'pt'
  let router: any = null
  let pathname = ''
  
  try {
    locale = (useLocale() as Locale) || 'pt'
    router = useRouter()
    pathname = usePathname() || ''
  } catch (error) {
    // Fallback para SSR
    console.warn('Next.js hooks not available during SSR')
  }

  useEffect(() => {
    setIsClient(true)
  }, [])

  const handleLanguageChange = (newLocale: Locale) => {
    if (!isClient || !router) return
    
    setIsOpen(false)
    
    // Remover locale atual da pathname
    const pathWithoutLocale = pathname.replace(`/${locale}`, '') || '/'
    
    // Construir nova URL
    const newPath = newLocale === 'pt' ? pathWithoutLocale : `/${newLocale}${pathWithoutLocale}`
    
    router.push(newPath)
  }

  const currentLanguage = localeConfig[locale]

  // Renderizar apenas no cliente para evitar hidratação mismatch
  if (!isClient) {
    return (
      <div className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-300">
        <Globe className="w-4 h-4" />
        <span>🇧🇷</span>
        <span className="hidden sm:inline">Português</span>
        <ChevronDown className="w-3 h-3" />
      </div>
    )
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors rounded-lg hover:bg-neutral-800"
        aria-label="Selecionar idioma"
      >
        <Globe className="w-4 h-4" />
        <span>{currentLanguage.flag}</span>
        <span className="hidden sm:inline">{currentLanguage.name}</span>
        <ChevronDown className={`w-3 h-3 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-black border border-gray-700 rounded-lg shadow-lg z-50">
          <div className="py-1">
            {Object.entries(localeConfig).map(([code, config]) => (
              <button
                key={code}
                onClick={() => handleLanguageChange(code as Locale)}
                className={`w-full flex items-center gap-3 px-4 py-2 text-sm text-left hover:bg-neutral-800 transition-colors ${
                  code === locale ? 'text-white bg-neutral-800' : 'text-gray-300'
                }`}
              >
                <span className="text-lg">{config.flag}</span>
                <span>{config.name}</span>
                {code === locale && (
                  <span className="ml-auto text-xs text-green-400">✓</span>
                )}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Overlay para fechar quando clicar fora */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  )
}
