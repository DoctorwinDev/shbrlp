import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Video, ShieldCheck } from 'lucide-react';
import React from 'react';

const VideochamadaSection: React.FC = () => (
  <section id="agendar" className="h-screen flex flex-col md:flex-row items-center justify-center gap-8 px-4 bg-gradient-to-br from-green-900/30 via-emerald-900/20 to-black snap-start animate-fade-in-up">
    <div className="flex-1 flex flex-col gap-6 max-w-xl bg-white/5 backdrop-blur-sm rounded-xl p-8 shadow-xl">
      <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-500 px-3 py-1 rounded-full text-xs font-bold uppercase text-white w-fit">
        <Calendar className="w-3 h-3" /> EXCLUSIVO • Videochamada
      </div>
      <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-200 to-emerald-200 bg-clip-text text-transparent">
        Videochamada<br />Personalizada
      </h2>
      <p className="text-lg md:text-xl text-white/90 mb-4">
        Agende sua videochamada privada e exclusiva. Experiência única, personalizada e totalmente discreta para membros VIP.
      </p>
      <div className="flex flex-wrap gap-3 mb-4">
        <div className="flex items-center gap-2 bg-black/40 rounded-full px-3 py-1 text-sm">
          <Video className="w-4 h-4 text-green-400" /> HD Quality
        </div>
        <div className="flex items-center gap-2 bg-black/40 rounded-full px-3 py-1 text-sm">
          <ShieldCheck className="w-4 h-4 text-blue-400" /> 100% Privado
        </div>
      </div>
      <Link href="https://wa.me/5511999999999?text=Olá! Gostaria de agendar uma videochamada exclusiva" target="_blank" className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-500 px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:scale-105 transition-transform w-fit" aria-label="Agendar Agora" tabIndex={0}>
        <Calendar className="w-5 h-5" /> Agendar Agora
      </Link>
    </div>
    <div className="flex-1 flex items-center justify-center">
      <div className="relative w-72 h-80 rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-green-500 to-emerald-600 p-1">
        <Image
          src="/WhatsApp Image 2025-05-10 at 11.00.53(1).jpeg"
          alt="Preview Videochamada"
          fill
          className="object-cover rounded-xl"
        />
        <div className="absolute top-3 right-3 bg-gradient-to-r from-green-400 to-emerald-500 px-3 py-1 rounded-full text-xs font-bold uppercase">VIP</div>
        <div className="absolute bottom-4 left-4 right-4">
          <div className="bg-black/60 backdrop-blur-sm rounded-lg p-3">
            <p className="text-white text-sm font-medium">Videochamada Exclusiva</p>
            <p className="text-white/80 text-xs">Experiência personalizada</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default VideochamadaSection; 