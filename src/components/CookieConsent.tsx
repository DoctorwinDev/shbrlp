'use client'

import { useState, useEffect } from 'react'
import { X, Settings, CheckCircle } from 'lucide-react'

// Declaração do tipo para window.updateConsent
declare global {
  interface Window {
    updateConsent?: (consent: any) => void
  }
}

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [consent, setConsent] = useState({
    essential: true,
    analytics: true,
    marketing: true,
    personalization: true
  })

  useEffect(() => {
    // Verificar se já existe consentimento salvo
    const savedConsent = localStorage.getItem('cookie-consent')
    if (!savedConsent) {
      setShowBanner(true)
    } else {
      const parsedConsent = JSON.parse(savedConsent)
      setConsent(parsedConsent)
      updateGoogleConsent(parsedConsent)
    }
  }, [])

  const updateGoogleConsent = (userConsent: any) => {
    if (typeof window !== 'undefined' && window.updateConsent) {
      window.updateConsent({
        ad_storage: userConsent.marketing ? 'granted' : 'denied',
        analytics_storage: userConsent.analytics ? 'granted' : 'denied',
        functionality_storage: userConsent.essential ? 'granted' : 'denied',
        personalization_storage: userConsent.personalization ? 'granted' : 'denied'
      })
    }
  }

  const handleAcceptAll = () => {
    const newConsent = {
      essential: true,
      analytics: true,
      marketing: true,
      personalization: true
    }
    setConsent(newConsent)
    localStorage.setItem('cookie-consent', JSON.stringify(newConsent))
    updateGoogleConsent(newConsent)
    setShowBanner(false)
  }

  const handleRejectAll = () => {
    const newConsent = {
      essential: true,
      analytics: false,
      marketing: false,
      personalization: false
    }
    setConsent(newConsent)
    localStorage.setItem('cookie-consent', JSON.stringify(newConsent))
    updateGoogleConsent(newConsent)
    setShowBanner(false)
  }

  const handleSaveSettings = () => {
    localStorage.setItem('cookie-consent', JSON.stringify(consent))
    updateGoogleConsent(consent)
    setShowSettings(false)
    setShowBanner(false)
  }

  const handleToggle = (type: keyof typeof consent) => {
    if (type === 'essential') return // Essential sempre true
    setConsent(prev => ({
      ...prev,
      [type]: !prev[type]
    }))
  }

  if (!showBanner && !showSettings) return null

  return (
    <>
      {/* Banner Principal */}
      {showBanner && (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-black border-t border-gray-800 p-4">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex-1">
              <h3 className="text-white font-semibold mb-2">
                🍪 Gerenciamento de Cookies
              </h3>
              <p className="text-gray-300 text-sm">
                Utilizamos cookies para melhorar sua experiência, analisar tráfego e personalizar conteúdo. 
                Todos os cookies estão ativados por padrão. Você pode desativar qualquer categoria a qualquer momento.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-2">
              <button
                onClick={() => setShowSettings(true)}
                className="px-4 py-2 text-sm text-gray-300 hover:text-white border border-gray-600 rounded-lg hover:bg-gray-800 transition-colors"
              >
                <Settings className="w-4 h-4 inline mr-2" />
                Configurações
              </button>
              <button
                onClick={handleRejectAll}
                className="px-4 py-2 text-sm text-gray-300 hover:text-white border border-gray-600 rounded-lg hover:bg-gray-800 transition-colors"
              >
                Desativar Todos
              </button>
              <button
                onClick={handleAcceptAll}
                className="px-4 py-2 text-sm bg-[#ffb300] text-black font-semibold rounded-lg hover:bg-yellow-400 transition-colors"
              >
                Manter Todos
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal de Configurações */}
      {showSettings && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-black border border-gray-800 rounded-lg max-w-md w-full p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-white font-semibold text-lg">
                🍪 Configurações de Cookies
              </h3>
              <button
                onClick={() => setShowSettings(false)}
                className="text-gray-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4">
              {/* Cookies Essenciais */}
              <div className="flex items-center justify-between p-3 bg-gray-900 rounded-lg">
                <div>
                  <h4 className="text-white font-medium">Cookies Essenciais</h4>
                  <p className="text-gray-400 text-sm">Necessários para o funcionamento do site</p>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                  <span className="text-green-400 text-sm">Sempre ativo</span>
                </div>
              </div>

              {/* Cookies de Analytics */}
              <div className="flex items-center justify-between p-3 bg-gray-900 rounded-lg">
                <div>
                  <h4 className="text-white font-medium">Analytics</h4>
                  <p className="text-gray-400 text-sm">Nos ajudam a entender como você usa o site</p>
                </div>
                <button
                  onClick={() => handleToggle('analytics')}
                  className={`w-12 h-6 rounded-full transition-colors ${
                    consent.analytics ? 'bg-[#ffb300]' : 'bg-gray-600'
                  }`}
                >
                  <div className={`w-4 h-4 bg-white rounded-full transition-transform ${
                    consent.analytics ? 'translate-x-6' : 'translate-x-1'
                  }`} />
                </button>
              </div>

              {/* Cookies de Marketing */}
              <div className="flex items-center justify-between p-3 bg-gray-900 rounded-lg">
                <div>
                  <h4 className="text-white font-medium">Marketing</h4>
                  <p className="text-gray-400 text-sm">Personalizar anúncios e conteúdo</p>
                </div>
                <button
                  onClick={() => handleToggle('marketing')}
                  className={`w-12 h-6 rounded-full transition-colors ${
                    consent.marketing ? 'bg-[#ffb300]' : 'bg-gray-600'
                  }`}
                >
                  <div className={`w-4 h-4 bg-white rounded-full transition-transform ${
                    consent.marketing ? 'translate-x-6' : 'translate-x-1'
                  }`} />
                </button>
              </div>

              {/* Cookies de Personalização */}
              <div className="flex items-center justify-between p-3 bg-gray-900 rounded-lg">
                <div>
                  <h4 className="text-white font-medium">Personalização</h4>
                  <p className="text-gray-400 text-sm">Lembrar suas preferências</p>
                </div>
                <button
                  onClick={() => handleToggle('personalization')}
                  className={`w-12 h-6 rounded-full transition-colors ${
                    consent.personalization ? 'bg-[#ffb300]' : 'bg-gray-600'
                  }`}
                >
                  <div className={`w-4 h-4 bg-white rounded-full transition-transform ${
                    consent.personalization ? 'translate-x-6' : 'translate-x-1'
                  }`} />
                </button>
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <button
                onClick={() => setShowSettings(false)}
                className="flex-1 px-4 py-2 text-sm text-gray-300 hover:text-white border border-gray-600 rounded-lg hover:bg-gray-800 transition-colors"
              >
                Cancelar
              </button>
              <button
                onClick={handleSaveSettings}
                className="flex-1 px-4 py-2 text-sm bg-[#ffb300] text-black font-semibold rounded-lg hover:bg-yellow-400 transition-colors"
              >
                Salvar Preferências
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
