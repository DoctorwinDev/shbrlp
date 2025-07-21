import Image from 'next/image';
import Link from 'next/link';
import { MessageCircle, Star, Users, Zap } from 'lucide-react';
import React from 'react';

const TelegramSection: React.FC = () => (
  <section id="telegram" className="h-screen flex flex-col md:flex-row items-center justify-center gap-8 px-4 bg-gradient-to-br from-blue-600 via-black to-blue-900 snap-start animate-fade-in-up">
    <div className="flex-1 flex items-center justify-center order-2 md:order-1">
      <div className="relative w-72 h-80 rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-500 to-cyan-600 p-1">
        <Image
          src="/WhatsApp Image 2025-06-22 at 16.55.39.jpeg"
          alt="Preview Telegram VIP"
          fill
          className="object-cover rounded-2xl blur-sm"
        />
        <div className="absolute inset-0 bg-black/30 rounded-2xl" />
        <div className="absolute top-4 right-4 bg-gradient-to-r from-cyan-400 to-blue-500 px-4 py-2 rounded-full text-sm font-bold uppercase">
          VIP
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-black/60 rounded-full p-6">
            <MessageCircle className="w-10 h-10 text-white" />
          </div>
        </div>
      </div>
    </div>
    
    <div className="flex-1 flex flex-col gap-6 max-w-xl bg-white/5 backdrop-blur-sm rounded-2xl p-8 shadow-xl order-1 md:order-2">
      <div className="flex items-center gap-4 mb-2">
        <Image src="/telegram-logo.svg" alt="Logo Telegram" width={48} height={48} className="w-12 h-12 object-contain" />
        <span className="inline-flex items-center gap-1 bg-black/70 text-cyan-200 px-3 py-1 rounded-lg text-sm font-bold" aria-label="Canal VIP">VIP</span>
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-2 rounded-full text-sm font-bold uppercase text-white">
          <Star className="w-4 h-4 text-yellow-300" /> 
          <span>Telegram Premium</span>
        </div>
      </div>
      
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-200 to-white bg-clip-text text-transparent leading-tight">
        Canal VIP Telegram<br />Conteúdo Exclusivo
      </h2>
      
      <p className="text-lg text-white/90 mb-4 leading-relaxed">
        Entre no meu canal <b className="text-cyan-300">Telegram VIP</b> e receba conteúdo exclusivo, fotos inéditas e vídeos que só os membros VIP têm acesso. Atualizações diárias e interação direta.
      </p>
      
      <div className="flex flex-wrap gap-4 mb-6">
        <div className="flex items-center gap-3 bg-black/40 rounded-full px-4 py-2 text-sm">
          <Users className="w-4 h-4 text-cyan-400" /> 
          <span className="font-medium">+500 membros VIP</span>
        </div>
        <div className="flex items-center gap-3 bg-black/40 rounded-full px-4 py-2 text-sm">
          <Zap className="w-4 h-4 text-yellow-400" /> 
          <span className="font-medium">Posts diários</span>
        </div>
      </div>
      
      <Link 
        href="https://t.me/zaramontanavip" 
        target="_blank" 
        className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-4 rounded-2xl font-bold text-lg shadow-xl hover:scale-105 transition-all duration-300 w-fit" 
        aria-label="Entrar no Telegram VIP" 
        tabIndex={0}
      >
        <MessageCircle className="w-5 h-5" /> 
        <span>Entrar no Telegram</span>
      </Link>
    </div>
  </section>
);

export default TelegramSection; 