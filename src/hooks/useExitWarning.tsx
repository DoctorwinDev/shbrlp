'use client'

import { useCallback, useState } from 'react'

interface WarningModalProps {
  isOpen: boolean
  platform: string
  onConfirm: () => void
  onCancel: () => void
}

const WarningModal: React.FC<WarningModalProps> = ({ isOpen, platform, onConfirm, onCancel }) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onCancel}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 transform transition-all duration-300 scale-100">
        {/* Header */}
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Aviso Importante
          </h3>
          <p className="text-gray-600">
            Você será redirecionado para um conteúdo adulto
          </p>
        </div>

        {/* Content */}
        <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl p-6 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">18+</span>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">Conteúdo Adulto</h4>
              <p className="text-sm text-gray-600">Plataforma: {platform}</p>
            </div>
          </div>
          <p className="text-sm text-gray-700 leading-relaxed">
            Este link leva a um conteúdo exclusivo para maiores de 18 anos. 
            Certifique-se de que você tem idade suficiente para acessar este material.
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={onCancel}
            className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-xl font-medium hover:bg-gray-50 transition-colors"
          >
            Cancelar
          </button>
          <button
            onClick={onConfirm}
            className="flex-1 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-xl font-medium hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Continuar
          </button>
        </div>

        {/* Footer */}
        <div className="mt-4 text-center">
          <p className="text-xs text-gray-500">
            Ao continuar, você confirma que tem 18 anos ou mais
          </p>
        </div>
      </div>
    </div>
  )
}

export const useExitWarning = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [pendingUrl, setPendingUrl] = useState('')
  const [pendingPlatform, setPendingPlatform] = useState('')

  const handleExternalLink = useCallback((url: string, platform: string) => {
    if (typeof window === 'undefined') return false

    const hasWarned = localStorage.getItem('exit_warned')
    
    if (!hasWarned) {
      setPendingUrl(url)
      setPendingPlatform(platform)
      setIsModalOpen(true)
      return false
    }
    
    window.open(url, '_blank', 'noopener,noreferrer')
    return true
  }, [])

  const handleConfirm = useCallback(() => {
    localStorage.setItem('exit_warned', 'true')
    window.open(pendingUrl, '_blank', 'noopener,noreferrer')
    setIsModalOpen(false)
    setPendingUrl('')
    setPendingPlatform('')
  }, [pendingUrl])

  const handleCancel = useCallback(() => {
    setIsModalOpen(false)
    setPendingUrl('')
    setPendingPlatform('')
  }, [])

  return { 
    handleExternalLink,
    WarningModal: () => (
      <WarningModal
        isOpen={isModalOpen}
        platform={pendingPlatform}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
      />
    )
  }
}