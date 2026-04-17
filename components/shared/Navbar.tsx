"use client";
import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-500 ${
      isScrolled ? "py-4 bg-black/60 backdrop-blur-xl border-b border-white/10" : "py-8 bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="text-2xl font-black tracking-tighter uppercase">
          Moha<span className="text-brand-orange font-light tracking-widest ml-1">Grafix</span>
        </Link>
        
        <div className="hidden md:flex space-x-10 text-[10px] uppercase tracking-[0.3em] font-bold">
          <Link href="/showroom" className="hover:text-brand-orange transition">Showroom</Link>
          <Link href="/services" className="hover:text-brand-orange transition">The Lab</Link>
          <Link href="/about" className="hover:text-brand-orange transition">Heritage</Link>
        </div>

        <Link href="/contact" className="bg-white text-black px-6 py-2 text-xs font-bold uppercase hover:bg-brand-orange hover:text-white transition-colors">
          Inquire
        </Link>
      </div>
    </nav>
  );
}