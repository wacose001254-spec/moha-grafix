import React from 'react';

interface HeroProps {
  title: string;
  subtitle: string;
  description: string;
}

export const Hero = ({ title, subtitle, description }: HeroProps) => {
  return (
    <section className="relative h-[70vh] flex items-center justify-center bg-black overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-900/20 via-black to-black"></div>
      <div className="relative z-10 text-center px-4">
        <h1 className="text-7xl md:text-9xl font-black italic tracking-tighter text-white mb-4">
          {title}
        </h1>
        <h2 className="text-xl md:text-2xl font-bold text-orange-600 uppercase tracking-[0.3em] mb-6">
          {subtitle}
        </h2>
        <p className="max-w-xl mx-auto text-zinc-400 text-lg uppercase tracking-widest leading-relaxed">
          {description}
        </p>
      </div>
    </section>
  );
};