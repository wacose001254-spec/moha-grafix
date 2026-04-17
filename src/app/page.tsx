"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import dynamic from 'next/dynamic';
import LiveLab from "../components/LiveLab";

// This is the "Dynamic Import" that fixes the hydration error
const BeforeAfter = dynamic(() => import('../components/BeforeAfter'), { 
  ssr: false,
  loading: () => (
    <div className="h-[400px] bg-zinc-900 animate-pulse flex items-center justify-center text-zinc-700 font-mono text-[10px] uppercase tracking-widest">
      Loading Visual Surgery...
    </div>
  )
});

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-[#050505] flex flex-col items-center justify-center p-6 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <span className="text-[#FF5F00] font-mono uppercase tracking-[0.4em] text-[10px] font-bold">
            The Surgery Center // Nairobi, Kenya
          </span>
          
          <h1 className="text-7xl md:text-9xl font-black uppercase tracking-tighter leading-[0.8]">
  <span className="bg-gradient-to-b from-white via-zinc-400 to-zinc-600 bg-clip-text text-transparent">
    Moha
  </span> 
  <br /> 
  <span className="text-[#FF5F00] drop-shadow-[0_0_15px_rgba(255,95,0,0.3)]">
    Grafix
  </span>
</h1>
        <div className="flex gap-4 justify-center items-center mt-4">
  <span className="text-zinc-500 text-[9px] uppercase tracking-widest font-bold">
    100K+ Followers on Instagram
  </span>
  <div className="w-1 h-1 bg-[#FF5F00] rounded-full" />
  <span className="text-zinc-500 text-[9px] uppercase tracking-widest font-bold">
    104K+ on TikTok
  </span>
</div>  
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-zinc-500 max-w-sm mx-auto text-sm uppercase tracking-widest font-bold mt-6 leading-relaxed"
          >
            Art on Wheels. <br />
            Precision Fabrication & Custom Paint.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
            className="flex gap-4 justify-center mt-10"
          >
            <Link href="/book">
              <button className="px-8 py-3 bg-[#FF5F00] text-black font-black uppercase text-xs tracking-widest hover:bg-white transition-colors">
                Book Surgery
              </button>
            </Link>
            <button className="px-8 py-3 border border-zinc-800 text-white font-black uppercase text-xs tracking-widest hover:bg-zinc-900 transition-colors">
              Contact
            </button>
          </motion.div>
        </motion.div>
      </main>

      {/* Before/After Slider */}
      <BeforeAfter />

      {/* Video Grid */}
      <LiveLab />
    </>
  );
}