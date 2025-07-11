import Image from 'next/image';
import Link from 'next/link';
import { Star, Users, Video, Crown } from 'lucide-react';
import React from 'react';

const OnlyFansSection: React.FC = () => (
  <section id="onlyfans" className="h-screen flex flex-col md:flex-row items-center justify-center gap-8 px-4 bg-gradient-to-br from-blue-900/30 via-indigo-900/20 to-black snap-start animate-fade-in-up">
    <div className="flex-1 flex flex-col gap-6 max-w-xl bg-white/5 backdrop-blur-sm rounded-xl p-8 shadow-xl">
      <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-500 px-3 py-1 rounded-full text-xs font-bold uppercase text-white w-fit">
        <Star className="w-3 h-3 text-yellow-300" /> PREMIUM • OnlyFans
        <span className="inline-flex items-center gap-1 bg-black/70 text-blue-200 px-2 py-0.5 rounded text-xs font-bold ml-2" aria-label="Conteúdo adulto">+18</span>
      </div>
      <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-200 to-indigo-200 bg-clip-text text-transparent">
        Exclusive OnlyFans<br />Premium Content
      </h2>
      <p className="text-lg md:text-xl text-white/90 mb-4">
        On <b>OnlyFans</b>, you get personalized videos, private chat, and exclusive experiences. International platform, secure payment, and instant access to premium content.
      </p>
      <p className="text-xs text-blue-200 mb-2">Plataforma internacional, pagamento em dólar</p>
      <div className="flex flex-wrap gap-3 mb-4">
        <div className="flex items-center gap-2 bg-black/40 rounded-full px-3 py-1 text-sm">
          <Users className="w-4 h-4 text-green-400" /> 1,200+ fans
        </div>
        <div className="flex items-center gap-2 bg-black/40 rounded-full px-3 py-1 text-sm">
          <Video className="w-4 h-4 text-blue-400" /> Exclusive videos
        </div>
      </div>
      <Link href="https://onlyfans.com/zaramontana" target="_blank" className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-500 px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:scale-105 transition-transform w-fit" aria-label="Access OnlyFans" tabIndex={0}>
        <Crown className="w-5 h-5" /> Access OnlyFans
      </Link>
    </div>
    <div className="flex-1 flex items-center justify-center">
      <div className="relative w-72 h-80 rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-blue-500 to-indigo-600 p-1">
        <Image
          src="/WhatsApp Image 2025-06-22 at 16.58.02.jpeg"
          alt="OnlyFans Preview"
          fill
          className="object-cover rounded-xl blur-sm"
        />
        <div className="absolute inset-0 bg-black/30 rounded-xl" />
        <div className="absolute top-3 right-3 bg-gradient-to-r from-blue-400 to-indigo-500 px-3 py-1 rounded-full text-xs font-bold uppercase">PREMIUM</div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-black/60 rounded-full p-4">
            <Crown className="w-10 h-10 text-white" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default OnlyFansSection; 