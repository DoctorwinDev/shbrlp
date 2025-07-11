'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface ScrollSnapWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export const ScrollSnapWrapper: React.FC<ScrollSnapWrapperProps> = ({ children, className = "" }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const container = containerRef.current;
    if (!container) return;

    // Configurar scroll snap com GSAP
    const sections = container.querySelectorAll('.snap-section');
    
    sections.forEach((section, index) => {
      gsap.fromTo(section, 
        { 
          opacity: 0,
          y: 50 
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className={`snap-y snap-mandatory overflow-y-auto h-screen ${className}`}
      style={{ scrollBehavior: 'smooth' }}
    >
      {children}
    </div>
  );
}; 