"use client";

import { motion } from "framer-motion";

export default function LiveLab() {
  const builds = [
    { 
      id: "RIkqZ8VRNbs", 
      title: "VW Polo Full Paint Restoration", 
      desc: "Full strip-down and custom matte finish." 
    },
    { 
      id: "RTXGAFcF-Mc", 
      title: "Subaru SG5 Customized", 
      desc: "Precision fabrication on a custom frame." 
    },
  ];

  return (
    <section className="bg-[#050505] py-20 px-6 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[#FF5F00] font-mono text-[10px] uppercase tracking-[0.4em] font-bold">
              // The Live Updates
            </span>
            <h2 className="text-white text-4xl font-black uppercase mt-2 italic tracking-tighter">Recent Builds</h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {builds.map((build, index) => (
            <motion.div 
              key={build.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }} // Lifts the card up slightly on hover
              className="group cursor-pointer"
            >
              {/* Animated Video Container */}
              <motion.div 
                whileHover={{ scale: 1.02 }} // Subtle zoom
                className="aspect-video bg-black border border-zinc-800 group-hover:border-[#FF5F00] group-hover:shadow-[0_0_30px_rgba(255,95,0,0.2)] transition-all overflow-hidden"
              >
                <iframe
                  className="w-full h-full opacity-60 group-hover:opacity-100 transition-opacity"
                  src={`https://www.youtube.com/embed/${build.id}?rel=0&showinfo=0`}
                  title={build.title}
                  allowFullScreen
                ></iframe>
              </motion.div>
              
              <div className="mt-6 border-l-2 border-zinc-800 group-hover:border-[#FF5F00] pl-4 transition-colors">
                <h3 className="text-white text-lg font-black uppercase tracking-tight">{build.title}</h3>
                <p className="text-zinc-500 text-xs uppercase tracking-[0.2em] mt-1 font-bold">{build.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}