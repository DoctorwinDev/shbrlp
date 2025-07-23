'use client'

import { useState } from 'react'
import { Share2 } from 'lucide-react'

interface ShareButtonProps {
  post: {
    title: string
    excerpt: string
  }
}

export default function ShareButton({ post }: ShareButtonProps) {
  const [copied, setCopied] = useState(false)

  const handleShare = async () => {
    const url = window.location.href
    const text = `${post.title} - ${post.excerpt}`
    
    try {
      if (navigator.share) {
        await navigator.share({ title: post.title, text, url })
      } else {
        await navigator.clipboard.writeText(url)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      }
    } catch (error) {
      console.error('Erro ao compartilhar:', error)
    }
  }

  return (
    <button
      onClick={handleShare}
      className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition-colors"
    >
      <Share2 className="w-4 h-4" />
      {copied ? 'Copiado!' : 'Compartilhar'}
    </button>
  )
} 