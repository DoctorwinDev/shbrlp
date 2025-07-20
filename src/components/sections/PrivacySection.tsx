import Image from 'next/image';
import Link from 'next/link';
import { Lock, Star, Users, Heart } from 'lucide-react';
import React from 'react';

const PrivacySection: React.FC = () => (
  <section id="privacy" className="h-screen flex flex-col md:flex-row items-center justify-center gap-8 px-4 bg-gradient-to-br from-[#E50914] via-black to-black snap-start animate-fade-in-up">
    <div className="flex-1 flex flex-col gap-6 max-w-xl bg-white/5 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
      <div className="flex items-center gap-4 mb-2">
        <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
          <Lock className="w-6 h-6 text-white" />
        </div>
        <span className="inline-flex items-center gap-1 bg-black/70 text-pink-200 px-3 py-1 rounded-lg text-sm font-bold" aria-label="Conteúdo adulto">+18</span>
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-600 to-red-500 px-4 py-2 rounded-full text-sm font-bold uppercase text-white">
          <Star className="w-4 h-4 text-yellow-300" /> 
          <span>Privacy Premium</span>
        </div>
      </div>
      
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-200 to-white bg-clip-text text-transparent leading-tight">
        Conteúdo +18 Exclusivo<br />e Atualizações Diárias
      </h2>
      
      <p className="text-lg text-white/90 mb-4 leading-relaxed">
        No <b className="text-pink-300">Privacy</b>, você tem acesso seguro e discreto a fotos e vídeos +18, com atualizações diárias. Plataforma 100% brasileira, pagamento facilitado e total privacidade.
      </p>
      
      <div className="flex flex-wrap gap-4 mb-6">
        <div className="flex items-center gap-3 bg-black/40 rounded-full px-4 py-2 text-sm">
          <Users className="w-4 h-4 text-green-400" /> 
          <span className="font-medium">+800 membros</span>
        </div>
        <div className="flex items-center gap-3 bg-black/40 rounded-full px-4 py-2 text-sm">
          <Heart className="w-4 h-4 text-red-400" /> 
          <span className="font-medium">Novidades diárias</span>
        </div>
      </div>
      
      <Link 
        href="https://privacy.com.br/profile/zaramontanaa" 
        target="_blank" 
        className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-pink-600 to-red-500 px-8 py-4 rounded-2xl font-bold text-lg shadow-xl hover:scale-105 transition-all duration-300 w-fit" 
        aria-label="Acessar Privacy" 
        tabIndex={0}
      >
        <Lock className="w-5 h-5" /> 
        <span>Acessar Privacy</span>
      </Link>
    </div>
    
    <div className="flex-1 flex items-center justify-center">
      <div className="relative w-72 h-80 rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-pink-500 to-red-600 p-1">
        <Image
          src="/WhatsApp Image 2025-06-22 at 16.55.59.jpeg"
          alt="Preview Privacy Premium"
          fill
          className="object-cover rounded-2xl blur-sm"
        />
        <div className="absolute inset-0 bg-black/30 rounded-2xl" />
        <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-red-500 px-4 py-2 rounded-full text-sm font-bold uppercase">
          HOT
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-black/60 rounded-full p-6">
            <Lock className="w-10 h-10 text-white" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default PrivacySection; 