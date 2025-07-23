import Image from 'next/image';
import Link from 'next/link';
import { MessageCircle, Star, Users, Zap } from 'lucide-react';
import React from 'react';

const TelegramSection: React.FC = () => (
  <section id="telegram" className="min-h-screen flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-8 px-4 sm:px-6 lg:px-8 py-8 lg:py-0 bg-gradient-to-br from-blue-600 via-black to-blue-900 snap-start animate-fade-in-up">
    <div className="flex-1 flex items-center justify-center order-2 lg:order-1">
      <div className="relative w-64 h-72 sm:w-72 sm:h-80 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-500 to-cyan-600 p-1">
        <Image
          src="/WhatsApp Image 2025-06-22 at 16.55.39.jpeg"
          alt="Preview Telegram VIP"
          fill
          className="object-cover rounded-xl sm:rounded-2xl blur-sm"
        />
        <div className="absolute inset-0 bg-black/30 rounded-xl sm:rounded-2xl" />
        <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-gradient-to-r from-cyan-400 to-blue-500 px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-bold uppercase">
          VIP
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-black/60 rounded-full p-4 sm:p-6">
            <MessageCircle className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
          </div>
        </div>
      </div>
    </div>
    
    <div className="flex-1 flex flex-col gap-4 sm:gap-6 max-w-xl bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl order-1 lg:order-2">
      <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-2">
        <Image src="/telegram-logo.svg" alt="Logo Telegram" width={48} height={48} className="w-10 h-10 sm:w-12 sm:h-12 object-contain" />
        <span className="inline-flex items-center gap-1 bg-black/70 text-cyan-200 px-2 sm:px-3 py-1 rounded-lg text-xs sm:text-sm font-bold" aria-label="Canal VIP">VIP</span>
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-bold uppercase text-white">
          <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-300" /> 
          <span>Telegram Premium</span>
        </div>
      </div>
      
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-200 to-white bg-clip-text text-transparent leading-tight">
        Canal VIP Telegram<br className="hidden sm:block" />Conteúdo Exclusivo
      </h2>
      
      <p className="text-sm sm:text-base lg:text-lg text-white/90 mb-4 leading-relaxed">
        Entre no meu canal <b className="text-cyan-300">Telegram VIP</b> e receba conteúdo exclusivo, fotos inéditas e vídeos que só os membros VIP têm acesso. Atualizações diárias e interação direta.
      </p>
      
      <div className="flex flex-wrap gap-3 sm:gap-4 mb-6">
        <div className="flex items-center gap-2 sm:gap-3 bg-black/40 rounded-full px-3 sm:px-4 py-2 text-xs sm:text-sm">
          <Users className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-400" /> 
          <span className="font-medium">+500 membros VIP</span>
        </div>
        <div className="flex items-center gap-2 sm:gap-3 bg-black/40 rounded-full px-3 sm:px-4 py-2 text-xs sm:text-sm">
          <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400" /> 
          <span className="font-medium">Posts diários</span>
        </div>
      </div>
      
      <Link 
        href="https://t.me/zaramontanavip" 
        target="_blank" 
        className="inline-flex items-center justify-center gap-2 sm:gap-3 bg-gradient-to-r from-cyan-500 to-blue-500 px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-sm sm:text-base lg:text-lg shadow-xl hover:scale-105 transition-all duration-300 w-full sm:w-auto" 
        aria-label="Entrar no Telegram VIP" 
        tabIndex={0}
      >
        <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" /> 
        <span>Entrar no Telegram</span>
      </Link>
    </div>
  </section>
);

export default TelegramSection; 