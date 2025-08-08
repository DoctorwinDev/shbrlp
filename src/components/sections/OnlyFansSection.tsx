import Image from 'next/image';
import Link from 'next/link';
import { Play, Star, Users, Heart, Crown } from 'lucide-react';
import React from 'react';
import { useExitWarning } from '@/hooks/useExitWarning';

const OnlyFansSection: React.FC = () => {
  const { handleExternalLink } = useExitWarning();

  return (
  <section id="onlyfans" className="min-h-screen flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-8 px-4 sm:px-6 lg:px-8 py-8 lg:py-0 bg-gradient-to-br from-blue-900 via-black to-purple-900 snap-start animate-fade-in-up">
    <div className="flex-1 flex flex-col gap-4 sm:gap-6 max-w-xl bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl order-2 lg:order-1">
      <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-2">
        <Image src="/onlyfans-logo.svg" alt="Logo OnlyFans" width={48} height={48} className="w-10 h-10 sm:w-12 sm:h-12 object-contain" />
        <span className="inline-flex items-center gap-1 bg-black/70 text-blue-200 px-2 sm:px-3 py-1 rounded-lg text-xs sm:text-sm font-bold" aria-label="Conteúdo premium">PREMIUM</span>
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-500 px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-bold uppercase text-white">
          <Crown className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-300" /> 
          <span>OnlyFans Oficial</span>
        </div>
      </div>
      
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent leading-tight">
        OnlyFans Premium<br className="hidden sm:block" />Conteúdo Ilimitado
      </h2>
      
      <p className="text-sm sm:text-base lg:text-lg text-white/90 mb-4 leading-relaxed">
        No meu <b className="text-blue-300">OnlyFans oficial</b>, você tem acesso total a vídeos exclusivos, lives privadas e conteúdo personalizado. A experiência mais completa e interativa.
      </p>
      
      <div className="flex flex-wrap gap-3 sm:gap-4 mb-6">
        <div className="flex items-center gap-2 sm:gap-3 bg-black/40 rounded-full px-3 sm:px-4 py-2 text-xs sm:text-sm">
          <Users className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400" /> 
          <span className="font-medium">+1.200 assinantes</span>
        </div>
        <div className="flex items-center gap-2 sm:gap-3 bg-black/40 rounded-full px-3 sm:px-4 py-2 text-xs sm:text-sm">
          <Play className="w-3 h-3 sm:w-4 sm:h-4 text-purple-400" /> 
          <span className="font-medium">Vídeos HD</span>
        </div>
        <div className="flex items-center gap-2 sm:gap-3 bg-black/40 rounded-full px-3 sm:px-4 py-2 text-xs sm:text-sm">
          <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-red-400" /> 
          <span className="font-medium">Lives exclusivas</span>
        </div>
      </div>
      
      <button 
        onClick={() => handleExternalLink('https://onlyfans.com/zaramontana', 'OnlyFans')}
        className="inline-flex items-center justify-center gap-2 sm:gap-3 bg-gradient-to-r from-blue-600 to-purple-500 px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-sm sm:text-base lg:text-lg shadow-xl hover:scale-105 transition-all duration-300 w-full sm:w-auto" 
        aria-label="Acessar OnlyFans" 
        tabIndex={0}
      >
        <Play className="w-4 h-4 sm:w-5 sm:h-5" /> 
        <span>Acessar OnlyFans</span>
      </button>
    </div>
    
    <div className="flex-1 flex items-center justify-center order-1 lg:order-2">
      <div className="relative w-64 h-72 sm:w-72 sm:h-80 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-500 to-purple-600 p-1">
        <Image
          src="/WhatsApp Image 2025-06-22 at 16.58.02.jpeg"
          alt="Preview OnlyFans Premium"
          fill
          className="object-cover rounded-xl sm:rounded-2xl blur-sm"
        />
        <div className="absolute inset-0 bg-black/30 rounded-xl sm:rounded-2xl" />
        <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-gradient-to-r from-blue-400 to-purple-500 px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-bold uppercase">
          PREMIUM
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-black/60 rounded-full p-4 sm:p-6">
            <Play className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default OnlyFansSection; 