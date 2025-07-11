'use client'

import HeroPremium from '../components/HeroPremium';
import PrivacySection from '../components/sections/PrivacySection';
import TelegramSection from '../components/sections/TelegramSection';
import OnlyFansSection from '../components/sections/OnlyFansSection';
import VideochamadaSection from '../components/sections/VideochamadaSection';
import DepoimentosSection from '../components/sections/DepoimentosSection';
import GaleriaSection from '../components/sections/GaleriaSection';
import FaqSectionWrapper from '../components/sections/FaqSectionWrapper';
import CtaFinalSection from '../components/sections/CtaFinalSection';

export default function PremiumHomePage() {
  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden snap-y snap-mandatory overflow-y-auto pt-24">
      <HeroPremium
        title="Conteúdo Premium em Múltiplas Plataformas"
        subtitle="Acesso exclusivo à modelo mais desejada do Brasil. Escolha a plataforma que mais combina com você e desbloqueie seu universo VIP!"
        cta="Escolher Plataforma"
      />
      <PrivacySection />
      <TelegramSection />
      <OnlyFansSection />
      <VideochamadaSection />
      <DepoimentosSection />
      <GaleriaSection />
      <FaqSectionWrapper />
      <CtaFinalSection />
    </main>
  );
} 