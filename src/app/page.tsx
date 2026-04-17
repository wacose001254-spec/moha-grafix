import React from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { BeforeAfterSlider } from '../components/Beforeafter';
import { BuildRequest } from '../components/Livelab';
import { Shield, Zap, Paintbrush, Gauge } from 'lucide-react';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-orange-600">
      <Navbar />
      
      {/* Hero Section */}
      <Hero 
        title="MOHA GRAFIX"
        subtitle="The Standard in Custom Transformation"
        description="Engineering elite aesthetics for the streets. From stock baselines to full custom masterpieces, we redefine your ride."
      />

      {/* The Transformation Section */}
      <section className="py-20 bg-zinc-950">
        <div className="max-container px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4 italic uppercase">
              The Transformation
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto uppercase tracking-widest text-sm">
              Slide to see the shift from <span className="text-white font-bold">Stock</span> to <span className="text-orange-600 font-bold">Custom</span>
            </p>
          </div>

          <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl shadow-orange-900/20">
            <BeforeAfterSlider 
              beforeImage="/images/stock-bike.jpg" 
              afterImage="/images/custom-bike.jpg"
              beforeLabel="Stock Baseline"
              afterLabel="Full Custom"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 border-t border-zinc-900">
        <div className="max-container px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center">
            {[
              { icon: Paintbrush, title: "Custom Paint", desc: "Elite aesthetics" },
              { icon: Shield, title: "Armor Finish", desc: "Long-lasting protection" },
              { icon: Zap, title: "Rapid Turnaround", desc: "Back on the road fast" },
              { icon: Gauge, title: "Precision", desc: "Detail-obsessed builds" }
            ].map((feature, idx) => (
              <div key={idx} className="flex flex-col items-center group">
                <div className="p-4 bg-zinc-900 rounded-2xl mb-4 group-hover:bg-orange-600 transition-colors">
                  <feature.icon className="w-8 h-8 text-orange-500 group-hover:text-white" />
                </div>
                <h3 className="font-bold text-lg mb-1 italic uppercase">{feature.title}</h3>
                <p className="text-zinc-500 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Build Request Section */}
      <section className="py-20 bg-black" id="request-build">
        <div className="max-container px-4">
          <div className="bg-zinc-900/50 p-8 md:p-16 rounded-[3rem] border border-zinc-800">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-5xl font-black mb-6 italic leading-tight uppercase">
                  Ready for your <br />
                  <span className="text-orange-600">Custom Build?</span>
                </h2>
                <p className="text-zinc-400 text-lg mb-8">
                  Moha Grafix is currently accepting bookings for premium overhauls. 
                  Provide your details and we'll prep the booth for your machine.
                </p>
              </div>
              <BuildRequest />
            </div>
          </div>
        </div>
      </section>

      <footer className="py-10 text-center border-t border-zinc-900 text-zinc-600 text-sm uppercase tracking-widest">
        <p>© {new Date().getFullYear()} MOHA GRAFIX. ALL RIGHTS RESERVED.</p>
      </footer>
    </main>
  );
}