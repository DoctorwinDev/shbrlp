'use client'

import HeroPremium from '../components/HeroPremium';
import PrivacySection from '../components/sections/PrivacySection';
import SecuritySection from '../components/sections/SecuritySection';
import TelegramSection from '../components/sections/TelegramSection';
import OnlyFansSection from '../components/sections/OnlyFansSection';
import VideochamadaSection from '../components/sections/VideochamadaSection';
import DepoimentosSection from '../components/sections/DepoimentosSection';
import GaleriaSection from '../components/sections/GaleriaSection';
import FaqSectionWrapper from '../components/sections/FaqSectionWrapper';
import CtaFinalSection from '../components/sections/CtaFinalSection';

export default function PremiumHomePage() {
  return (
    <main 
      id="main-content" 
      className="min-h-screen bg-black text-white overflow-x-hidden snap-y snap-mandatory overflow-y-auto pt-24"
      role="main"
    >
      <HeroPremium />
      <SecuritySection />
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