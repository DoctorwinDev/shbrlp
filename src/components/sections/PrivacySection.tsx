import Image from 'next/image';
import Link from 'next/link';
import { Lock, Star, Users, Heart } from 'lucide-react';
import React from 'react';
import { useExitWarning } from '@/hooks/useExitWarning';

const PrivacySection: React.FC = () => {
  const { handleExternalLink } = useExitWarning();

  return (
  <section id="privacy" className="min-h-screen flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-8 px-4 sm:px-6 lg:px-8 py-8 lg:py-0 bg-gradient-to-br from-[#E50914] via-black to-black snap-start animate-fade-in-up">
    <div className="flex-1 flex flex-col gap-4 sm:gap-6 max-w-xl bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl order-2 lg:order-1">
      <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-2">
        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
          <Lock className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
        </div>
        <span className="inline-flex items-center gap-1 bg-black/70 text-pink-200 px-2 sm:px-3 py-1 rounded-lg text-xs sm:text-sm font-bold" aria-label="Conteúdo adulto">+18</span>
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-600 to-red-500 px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-bold uppercase text-white">
          <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-300" /> 
          <span>Privacy Premium</span>
        </div>
      </div>
      
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-200 to-white bg-clip-text text-transparent leading-tight">
        Conteúdo +18 Exclusivo<br className="hidden sm:block" />e Atualizações Diárias
      </h2>
      
      <p className="text-sm sm:text-base lg:text-lg text-white/90 mb-4 leading-relaxed">
        No <b className="text-pink-300">Privacy</b>, você tem acesso seguro e discreto a fotos e vídeos +18, com atualizações diárias. Plataforma 100% brasileira, pagamento facilitado e total privacidade.
      </p>
      
      <div className="flex flex-wrap gap-3 sm:gap-4 mb-6">
        <div className="flex items-center gap-2 sm:gap-3 bg-black/40 rounded-full px-3 sm:px-4 py-2 text-xs sm:text-sm">
          <Users className="w-3 h-3 sm:w-4 sm:h-4 text-green-400" /> 
          <span className="font-medium">+800 membros</span>
        </div>
        <div className="flex items-center gap-2 sm:gap-3 bg-black/40 rounded-full px-3 sm:px-4 py-2 text-xs sm:text-sm">
          <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-red-400" /> 
          <span className="font-medium">Novidades diárias</span>
        </div>
      </div>
      
      <button 
        onClick={() => handleExternalLink('https://privacy.com.br/profile/zaramontanaa', 'Privacy')}
        className="inline-flex items-center justify-center gap-2 sm:gap-3 bg-gradient-to-r from-pink-600 to-red-500 px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-sm sm:text-base lg:text-lg shadow-xl hover:scale-105 transition-all duration-300 w-full sm:w-auto" 
        aria-label="Acessar Privacy" 
        tabIndex={0}
      >
        <Lock className="w-4 h-4 sm:w-5 sm:h-5" /> 
        <span>Acessar Privacy</span>
      </button>
    </div>
    
    <div className="flex-1 flex items-center justify-center order-1 lg:order-2">
      <div className="relative w-64 h-72 sm:w-72 sm:h-80 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-pink-500 to-red-600 p-1">
        <Image
          src="/WhatsApp Image 2025-06-22 at 16.55.59.jpeg"
          alt="Preview Privacy Premium"
          fill
          className="object-cover rounded-xl sm:rounded-2xl blur-sm"
        />
        <div className="absolute inset-0 bg-black/30 rounded-xl sm:rounded-2xl" />
        <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-gradient-to-r from-yellow-400 to-red-500 px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-bold uppercase">
          HOT
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-black/60 rounded-full p-4 sm:p-6">
            <Lock className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default PrivacySection; 