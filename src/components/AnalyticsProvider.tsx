'use client'

import { useEffect } from 'react'
import { initAllAnalytics } from '@/lib/analytics'

export default function AnalyticsProvider() {
  useEffect(() => {
    // Inicializar analytics apenas no cliente
    initAllAnalytics()
  }, [])

  return null // Este componente não renderiza nada
} 