"use client";

import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import { motion } from "framer-motion";

export default function BeforeAfter() {
  return (
    <section className="bg-[#050505] py-24 px-6 border-t border-zinc-900 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#FF5F00] font-mono text-[10px] uppercase tracking-[0.4em] font-bold">
            // The Transformation
          </span>
          <h2 className="text-white text-4xl md:text-6xl font-black uppercase mt-4 tracking-tighter italic">
            Visual <span className="text-zinc-700">Upgrade</span>
          </h2>
          <p className="text-zinc-500 text-xs uppercase tracking-[0.2em] mt-4 font-bold">
            Slide to reveal the Moha standard.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="border-4 border-zinc-900 rounded-sm overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)]"
        >
          <ReactCompareSlider
  itemOne={<ReactCompareSliderImage src="/before.jpg" alt="Stock Boda" />}
  itemTwo={<ReactCompareSliderImage src="/after.jpg" alt="Moha Custom" />}
  style={{ width: '100%', height: '600px', objectFit: 'cover' }}
/>
        </motion.div>
        
        <div className="flex justify-between mt-6 px-2">
            <span className="text-zinc-600 font-mono text-[10px] uppercase font-bold">Before - Original Face</span>
            <span className="text-[#FF5F00] font-mono text-[10px] uppercase font-bold">After - Moha Custom</span>
        </div>
      </div>
    </section>
  );
}