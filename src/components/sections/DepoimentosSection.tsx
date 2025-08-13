import { Depoimentos } from '../RealisticTestimonials';
import React from 'react';

const DepoimentosSection: React.FC = () => (
  <section id="depoimentos" className="min-h-screen flex flex-col items-center justify-center gap-6 lg:gap-8 px-4 py-8 lg:py-0 bg-gradient-to-br from-emerald-900/30 via-teal-900/20 to-black snap-start animate-fade-in-up">
    <Depoimentos />
  </section>
);

export default DepoimentosSection; 