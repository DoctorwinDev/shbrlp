'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Instagram } from 'lucide-react'
import Image from 'next/image'

const menuItems = [
  { label: 'Início', href: '/' },
  { label: 'Blog', href: '/blog' },
  { label: 'Privacy', href: '#privacy' },
  { label: 'Telegram', href: '#telegram' },
  { label: 'OnlyFans', href: '#onlyfans' },
  { label: 'Galeria', href: '#galeria' },
  { label: 'Agendar', href: '#agendar' },
  { label: 'Depoimentos', href: '#depoimentos' },
];

const socialLinks = [
  { 
    name: 'Instagram', 
    href: 'https://www.instagram.com/zaramontannasecreto/',
    icon: Instagram,
    color: 'text-pink-400 hover:text-pink-300'
  },
  { 
    name: 'X (Twitter)', 
    href: 'https://x.com/shakira_cam',
    icon: () => (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
    color: 'text-gray-400 hover:text-white'
  }
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      {/* Skip Links para Acessibilidade */}
      <div className="sr-only focus-within:not-sr-only">
        <a 
          href="#main-content" 
          className="absolute top-0 left-0 z-[100] bg-white text-black px-4 py-2 rounded-br-lg font-bold focus:outline-none focus:ring-2 focus:ring-blue-500 transform -translate-y-full focus:translate-y-0 transition-transform"
        >
          Pular para conteúdo principal
        </a>
        <a 
          href="#menu-navigation" 
          className="absolute top-0 left-32 z-[100] bg-white text-black px-4 py-2 rounded-br-lg font-bold focus:outline-none focus:ring-2 focus:ring-blue-500 transform -translate-y-full focus:translate-y-0 transition-transform"
        >
          Pular para navegação
        </a>
      </div>

      <header 
        className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-neutral-900 shadow-lg"
        role="banner"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center h-14 sm:h-16 justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2" aria-label="Página Principal">
            <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-white">Shakira</span>
            <span className="text-xl sm:text-2xl font-extrabold tracking-tight bg-[#ffb300] text-black px-1 sm:px-2 rounded">BR</span>
          </Link>
          
          {/* Desktop Menu */}
          <nav 
            id="menu-navigation"
            className="hidden lg:flex items-center gap-2 mx-auto" 
            role="navigation" 
            aria-label="Menu principal"
          >
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="relative px-2 sm:px-3 py-2 text-xs sm:text-sm font-bold text-white hover:text-[#ffb300] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#ffb300] focus:ring-offset-2 focus:ring-offset-black rounded"
                aria-label={item.label}
              >
                {item.label}
                {/* Sublinhado amarelo na ativa */}
                {item.label === 'Início' && (
                  <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-[#ffb300] rounded" aria-hidden="true" />
                )}
              </Link>
            ))}
          </nav>
          
          {/* Ações Direita */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Social Media Links - Desktop */}
            <div className="hidden lg:flex items-center gap-2">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  className={`p-2 rounded-lg hover:bg-neutral-800 transition-colors ${social.color}`}
                  aria-label={`Seguir no ${social.name}`}
                >
                  <social.icon />
                </Link>
              ))}
            </div>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-white hover:text-[#ffb300] transition-colors focus:outline-none focus:ring-2 focus:ring-[#ffb300] focus:ring-offset-2 focus:ring-offset-black rounded"
              aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-black border-t border-neutral-900">
            <div className="px-4 py-4 space-y-4">
              {/* Menu Items */}
              <nav className="space-y-2">
                {menuItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-4 py-3 text-white hover:text-[#ffb300] hover:bg-neutral-800 transition-colors rounded-lg font-medium"
                    aria-label={item.label}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
              
              {/* Social Media Links - Mobile */}
              <div className="flex justify-center gap-4 pt-4 border-t border-neutral-800">
                {socialLinks.map((social) => (
                  <Link
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    className={`p-3 rounded-lg hover:bg-neutral-800 transition-colors ${social.color}`}
                    aria-label={`Seguir no ${social.name}`}
                  >
                    <social.icon />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  )
} 