'use client'

import { useCallback } from 'react'

export const useExitWarning = () => {
  const handleExternalLink = useCallback((url: string, platform: string) => {
    if (typeof window === 'undefined') return false

    const hasWarned = localStorage.getItem('exit_warned')
    
    if (!hasWarned) {
      const confirmed = confirm(`Você será redirecionado para ${platform} (+18). Continuar?`)
      
      if (confirmed) {
        localStorage.setItem('exit_warned', 'true')
        window.open(url, '_blank', 'noopener,noreferrer')
        return true
      }
      return false
    }
    
    window.open(url, '_blank', 'noopener,noreferrer')
    return true
  }, [])

  return { handleExternalLink }
}