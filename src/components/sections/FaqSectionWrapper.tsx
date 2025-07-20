import FaqSection from '../FaqSection';
import React from 'react';

const FaqSectionWrapper: React.FC = () => (
  <section className="h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900 animate-fade-in-up">
    <FaqSection />
  </section>
);

export default FaqSectionWrapper; 