// src/components/CaseStudyCard.tsx
"use client";
import { motion } from "framer-motion";

export const CaseStudyCard = ({ title, category, image }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative group cursor-pointer overflow-hidden rounded-sm border border-brand-zinc"
    >
      <img src={image} className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-110" />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent opacity-80" />
      <div className="absolute bottom-6 left-6">
        <span className="text-brand-orange text-xs font-mono uppercase tracking-widest">{category}</span>
        <h3 className="text-2xl font-bold text-white uppercase mt-1">{title}</h3>
      </div>
      <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
        <button className="bg-white/10 backdrop-blur-md p-3 rounded-full">
           {/* Icon here */}
        </button>
      </div>
    </motion.div>
  );
};