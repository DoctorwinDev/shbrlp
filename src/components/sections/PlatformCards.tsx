import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Star, Users, Heart } from 'lucide-react';
import { PlatformIcons } from '../PremiumIcons';

const PlatformCards: React.FC = () => {
  return (
    <section id="platforms" className="w-full py-16 px-4 bg-gradient-to-br from-black via-purple-950/60 to-black snap-start">
      <div className="max-w-7xl mx-auto">
        {/* Título da Seção */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-pink-200 to-purple-200 bg-clip-text text-transparent mb-4">
            Escolha Sua Plataforma
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Cada plataforma oferece uma experiência única. Escolha a que mais combina com você!
          </p>
        </div>

        {/* Cards das Plataformas */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Card Privacy */}
          <div className="relative group">
            <div className="bg-gradient-to-br from-pink-600 to-red-600 p-1 rounded-2xl">
              <div className="bg-black rounded-2xl p-6 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center justify-center">
                    <PlatformIcons.Privacy className="w-10 h-10 text-white" />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="bg-black/70 text-pink-200 px-2 py-0.5 rounded text-xs font-bold">+18</span>
                    <div className="bg-gradient-to-r from-pink-600 to-red-500 px-3 py-1 rounded-full text-xs font-bold uppercase text-white">
                      <Star className="w-3 h-3 text-yellow-300 inline mr-1" /> HOT
                    </div>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3">
                  Privacy Premium
                </h3>
                
                <p className="text-white/80 mb-4">
                  Conteúdo +18 exclusivo com atualizações diárias. Plataforma 100% brasileira, pagamento facilitado e total privacidade.
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  <div className="flex items-center gap-1 bg-black/40 rounded-full px-3 py-1 text-sm text-white">
                    <Users className="w-4 h-4 text-green-400" /> +800 membros
                  </div>
                  <div className="flex items-center gap-1 bg-black/40 rounded-full px-3 py-1 text-sm text-white">
                    <Heart className="w-4 h-4 text-red-400" /> Novidades diárias
                  </div>
                </div>
                
                <Link 
                  href="https://privacy.com.br/profile/zaramontanaa" 
                  target="_blank" 
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-600 to-red-500 px-6 py-3 rounded-xl font-bold text-white shadow-lg hover:scale-105 transition-transform w-full justify-center"
                  aria-label="Acessar Privacy"
                >
                  <PlatformIcons.Privacy className="w-8 h-8" /> Acessar Privacy
                </Link>
              </div>
            </div>
          </div>

          {/* Card Telegram */}
          <div className="relative group">
            <div className="bg-gradient-to-br from-blue-600 to-cyan-500 p-1 rounded-2xl">
              <div className="bg-black rounded-2xl p-6 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center justify-center">
                    <PlatformIcons.Telegram className="w-10 h-10 text-white" />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="bg-black/70 text-blue-200 px-2 py-0.5 rounded text-xs font-bold">+18</span>
                    <div className="bg-gradient-to-r from-blue-600 to-cyan-500 px-3 py-1 rounded-full text-xs font-bold uppercase text-white">
                      <Star className="w-3 h-3 text-yellow-300 inline mr-1" /> VIP
                    </div>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3">
                  Telegram VIP
                </h3>
                
                <p className="text-white/80 mb-4">
                  Chat privado exclusivo, fotos e vídeos personalizados. Comunidade fechada com acesso direto à modelo.
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  <div className="flex items-center gap-1 bg-black/40 rounded-full px-3 py-1 text-sm text-white">
                    <PlatformIcons.Telegram className="w-4 h-4 text-blue-400" /> Chat privado
                  </div>
                  <div className="flex items-center gap-1 bg-black/40 rounded-full px-3 py-1 text-sm text-white">
                    <PlatformIcons.Instagram className="w-4 h-4 text-purple-400" /> Fotos exclusivas
                  </div>
                </div>
                
                <Link 
                  href="https://t.me/shakirabr" 
                  target="_blank" 
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3 rounded-xl font-bold text-white shadow-lg hover:scale-105 transition-transform w-full justify-center"
                  aria-label="Acessar Telegram"
                >
                  <PlatformIcons.Telegram className="w-8 h-8" /> Acessar Telegram
                </Link>
              </div>
            </div>
          </div>

          {/* Card OnlyFans */}
          <div className="relative group">
            <div className="bg-gradient-to-br from-purple-600 to-pink-500 p-1 rounded-2xl">
              <div className="bg-black rounded-2xl p-6 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center justify-center">
                    <PlatformIcons.OnlyFans className="w-10 h-10 text-white" />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="bg-black/70 text-purple-200 px-2 py-0.5 rounded text-xs font-bold">+18</span>
                    <div className="bg-gradient-to-r from-purple-600 to-pink-500 px-3 py-1 rounded-full text-xs font-bold uppercase text-white">
                      <Star className="w-3 h-3 text-yellow-300 inline mr-1" /> PREMIUM
                    </div>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3">
                  OnlyFans Premium
                </h3>
                
                <p className="text-white/80 mb-4">
                  Conteúdo exclusivo de alta qualidade. Vídeos, fotos e interações especiais em uma das maiores plataformas do mundo.
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  <div className="flex items-center gap-1 bg-black/40 rounded-full px-3 py-1 text-sm text-white">
                    <PlatformIcons.OnlyFans className="w-4 h-4 text-purple-400" /> Vídeos exclusivos
                  </div>
                  <div className="flex items-center gap-1 bg-black/40 rounded-full px-3 py-1 text-sm text-white">
                    <Star className="w-4 h-4 text-yellow-400" /> Conteúdo premium
                  </div>
                </div>
                
                <Link 
                  href="https://onlyfans.com/shakirabr" 
                  target="_blank" 
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-500 px-6 py-3 rounded-xl font-bold text-white shadow-lg hover:scale-105 transition-transform w-full justify-center"
                  aria-label="Acessar OnlyFans"
                >
                  <PlatformIcons.OnlyFans className="w-8 h-8" /> Acessar OnlyFans
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PlatformCards; 