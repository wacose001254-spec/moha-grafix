"use client";
import { motion } from "framer-motion";
import { Instagram } from "lucide-react";

// In production, you'd fetch this from your Behold.ai endpoint
const dummyPhotos = [
  { id: 1, url: "/sample-build-1.jpg", type: "Spray" },
  { id: 2, url: "/sample-build-2.jpg", type: "Bodywork" },
  { id: 3, url: "/sample-build-3.jpg", type: "Interior" },
  { id: 4, url: "/sample-build-4.jpg", type: "Custom" },
];

export default function LiveLab() {
  return (
    <section className="py-24 overflow-hidden bg-brand-black border-y border-zinc-900">
      <div className="px-6 mb-12 flex justify-between items-end">
        <div>
          <h2 className="text-brand-orange font-mono text-xs tracking-widest uppercase mb-2">Real-Time Updates</h2>
          <h3 className="text-5xl font-black uppercase tracking-tighter text-white">The Live Lab</h3>
        </div>
        <a href="https://instagram.com/officialmohagrafix" target="_blank" className="flex items-center gap-2 text-zinc-500 hover:text-white transition-colors uppercase text-xs font-bold tracking-widest">
          <Instagram size={16} /> @officialmohagrafix
        </a>
      </div>

      {/* Infinite Marquee Container */}
      <div className="flex w-fit">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex gap-4 pr-4"
        >
          {[...dummyPhotos, ...dummyPhotos].map((photo, i) => (
            <div key={i} className="relative w-[300px] aspect-square flex-shrink-0 group overflow-hidden border border-zinc-800">
              <img 
                src={photo.url} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
                alt="Moha Build"
              />
              <div className="absolute inset-0 bg-brand-orange/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white font-black uppercase text-xs tracking-tighter">View Project</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}