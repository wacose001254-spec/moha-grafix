"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Car, Paintbrush, Shield, ChevronRight, Upload, CheckCircle2 } from "lucide-react";

const STEPS = ["Service", "Details", "Media", "Submit"];

export default function BuildRequest() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    service: "",
    model: "",
    budget: "",
    description: "",
  });

  const nextStep = () => setStep((s) => Math.min(s + 1, STEPS.length - 1));
  const prevStep = () => setStep((s) => Math.max(s - 1, 0));

  return (
    <div className="max-w-2xl mx-auto bg-zinc-950 border border-zinc-900 p-8 md:p-12 shadow-2xl relative overflow-hidden">
      {/* Step Indicator */}
      <div className="flex justify-between mb-12">
        {STEPS.map((s, i) => (
          <div key={s} className="flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full ${i <= step ? "bg-brand-orange" : "bg-zinc-800"}`} />
            <span className={`text-[10px] uppercase tracking-widest ${i === step ? "text-white" : "text-zinc-600"}`}>{s}</span>
          </div>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {step === 0 && (
          <motion.div 
            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-black uppercase italic">What are we <span className="text-brand-orange">building?</span></h2>
            <div className="grid grid-cols-1 gap-4">
              {[
                { id: "spray", label: "Full Custom Spray", icon: <Paintbrush size={20}/> },
                { id: "fab", label: "Body Fabrication", icon: <Car size={20}/> },
                { id: "restore", label: "Accident Restoration", icon: <Shield size={20}/> },
              ].map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => { setFormData({...formData, service: opt.id}); nextStep(); }}
                  className="flex items-center justify-between p-6 border border-zinc-800 hover:border-brand-orange hover:bg-zinc-900 transition-all group"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-zinc-500 group-hover:text-brand-orange">{opt.icon}</span>
                    <span className="font-bold uppercase tracking-tight">{opt.label}</span>
                  </div>
                  <ChevronRight size={16} className="text-zinc-700" />
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {step === 1 && (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
            <h2 className="text-3xl font-black uppercase italic text-white">The <span className="text-brand-orange">Subject</span></h2>
            <input 
              className="w-full bg-transparent border-b border-zinc-800 p-4 focus:border-brand-orange outline-none transition-colors"
              placeholder="VEHICLE MAKE & MODEL (e.g. TOYOTA LANDCRUISER)"
              onChange={(e) => setFormData({...formData, model: e.target.value})}
            />
            <textarea 
              className="w-full bg-transparent border-b border-zinc-800 p-4 focus:border-brand-orange outline-none transition-colors h-32"
              placeholder="DESCRIBE THE VISION..."
              onChange={(e) => setFormData({...formData, description: e.target.value})}
            />
            <button onClick={nextStep} className="w-full bg-white text-black py-4 font-black uppercase tracking-widest hover:bg-brand-orange hover:text-white transition-all">Continue</button>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6 text-center">
            <h2 className="text-3xl font-black uppercase italic text-white text-left">Upload <span className="text-brand-orange">Current State</span></h2>
            <div className="border-2 border-dashed border-zinc-800 p-12 hover:border-brand-orange transition-colors cursor-pointer group">
              <Upload className="mx-auto mb-4 text-zinc-600 group-hover:text-brand-orange" size={48} />
              <p className="text-zinc-500 text-sm uppercase font-bold tracking-tighter">Drag photos of your vehicle here</p>
            </div>
            <div className="flex gap-4">
              <button onClick={prevStep} className="flex-1 border border-zinc-800 py-4 text-zinc-500 hover:text-white transition">Back</button>
              <button onClick={nextStep} className="flex-1 bg-brand-orange py-4 font-black uppercase tracking-widest">Final Step</button>
            </div>
          </motion.div>
        )}

        {step === 3 && (
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center py-10">
                <CheckCircle2 className="mx-auto text-brand-orange mb-6" size={64} />
                <h2 className="text-4xl font-black uppercase tracking-tighter text-white mb-2">Request Ready</h2>
                <p className="text-zinc-500 mb-8 uppercase text-xs tracking-[0.2em]">The Lab will review your request and contact you via WhatsApp.</p>
                <button className="bg-white text-black px-10 py-4 font-black uppercase tracking-widest hover:scale-105 transition-transform">Transmit to Moha Grafix</button>
            </motion.div>
        )}
      </AnimatePresence>
return (
  <div className="max-w-2xl mx-auto bg-zinc-950 border border-zinc-900 p-8 md:p-12 shadow-2xl relative overflow-hidden">
    
    {/* ... Existing Step Indicator and AnimatePresence ... */}

    {/* PLACE THE TICKER HERE: BELOW THE FORM CONTENT */}
    <div className="mt-12 overflow-hidden whitespace-nowrap opacity-30 text-[10px] uppercase font-mono tracking-[0.2em] border-t border-zinc-900 pt-6">
      <motion.div 
        animate={{ x: [0, -1200] }} 
        transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        className="flex gap-8 w-fit"
      >
        <span>INQUIRY: Land Cruiser 300 Series Custom Spray •</span>
        <span>INQUIRY: Matatu Fabrication (Nganya) •</span>
        <span>INQUIRY: Restoration Project #1472 •</span>
        {/* Duplicate the text to ensure a seamless infinite loop */}
        <span>INQUIRY: Land Cruiser 300 Series Custom Spray •</span>
        <span>INQUIRY: Matatu Fabrication (Nganya) •</span>
        <span>INQUIRY: Restoration Project #1472 •</span>
      </motion.div>
    </div>
  </div>
 </div>
  );
}