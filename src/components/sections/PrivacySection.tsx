import Image from 'next/image';
import Link from 'next/link';
import { Lock, Star, Users, Heart } from 'lucide-react';
import React from 'react';

const PrivacySection: React.FC = () => (
  <section id="privacy" className="h-screen flex flex-col md:flex-row items-center justify-center gap-8 px-4 bg-gradient-to-br from-[#E50914] via-black to-black snap-start animate-fade-in-up">
    <div className="flex-1 flex flex-col gap-6 max-w-xl bg-white/5 backdrop-blur-sm rounded-xl p-8 shadow-xl">
      <div className="flex items-center gap-3 mb-2">
        <Image src="/privacy-logo.jpg" alt="Logo Privacy" width={40} height={40} className="w-10 h-10 object-contain bg-white rounded-full" />
        <span className="inline-flex items-center gap-1 bg-black/70 text-pink-200 px-2 py-0.5 rounded text-xs font-bold" aria-label="Conteúdo adulto">+18</span>
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-600 to-red-500 px-3 py-1 rounded-full text-xs font-bold uppercase text-white w-fit">
          <Star className="w-3 h-3 text-yellow-300" /> HOT • Privacy Premium
        </div>
      </div>
      <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-200 to-white bg-clip-text text-transparent">
        Conteúdo +18 Exclusivo<br />e Atualizações Diárias
      </h2>
      <p className="text-lg md:text-xl text-white/90 mb-4">
        No <b>Privacy</b>, você tem acesso seguro e discreto a fotos e vídeos +18, com atualizações diárias. Plataforma 100% brasileira, pagamento facilitado e total privacidade.
      </p>
      <div className="flex flex-wrap gap-3 mb-4">
        <div className="flex items-center gap-2 bg-black/40 rounded-full px-3 py-1 text-sm">
          <Users className="w-4 h-4 text-green-400" /> +800 membros
        </div>
        <div className="flex items-center gap-2 bg-black/40 rounded-full px-3 py-1 text-sm">
          <Heart className="w-4 h-4 text-red-400" /> Novidades diárias
        </div>
      </div>
      <Link href="https://privacy.com.br/profile/zaramontanaa" target="_blank" className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-600 to-red-500 px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:scale-105 transition-transform w-fit" aria-label="Acessar Privacy" tabIndex={0}>
        <Lock className="w-5 h-5" /> Acessar Privacy
      </Link>
    </div>
    <div className="flex-1 flex items-center justify-center">
      <div className="relative w-72 h-80 rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-pink-500 to-red-600 p-1">
        <Image
          src="/WhatsApp Image 2025-06-22 at 16.55.59.jpeg"
          alt="Preview Privacy Premium"
          fill
          className="object-cover rounded-xl blur-sm"
        />
        <div className="absolute inset-0 bg-black/30 rounded-xl" />
        <div className="absolute top-3 right-3 bg-gradient-to-r from-yellow-400 to-red-500 px-3 py-1 rounded-full text-xs font-bold uppercase">HOT</div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-black/60 rounded-full p-4">
            <Lock className="w-10 h-10 text-white" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default PrivacySection; 