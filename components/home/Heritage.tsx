export default function Heritage() {
  return (
    <section className="py-32 px-6 grid grid-cols-1 md:grid-cols-2 gap-20 items-center max-w-7xl mx-auto">
      <div className="relative">
        <div className="absolute -top-10 -left-10 text-[200px] font-black text-white/5 select-none uppercase">1472</div>
        <h2 className="text-6xl font-black uppercase leading-[0.9] text-white">
          Where <span className="text-brand-orange">Culture</span> <br/> Meets Craft.
        </h2>
        <p className="mt-8 text-zinc-400 text-lg leading-relaxed">
          For over a decade, Moha Grafix has been the epicenter of automotive transformation in East Africa. From the legendary Matatus of Nairobi to bespoke private builds, we redefine what a vehicle can be.
        </p>
        <button className="mt-10 border-b-2 border-brand-orange pb-2 text-brand-orange uppercase font-bold tracking-widest hover:text-white hover:border-white transition-all">
          Explore the Heritage
        </button>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="pt-12"><img src="/heritage-1.jpg" className="w-full h-[300px] object-cover border border-zinc-800 grayscale hover:grayscale-0 transition duration-700" /></div>
        <div><img src="/heritage-2.jpg" className="w-full h-[400px] object-cover border border-zinc-800 grayscale hover:grayscale-0 transition duration-700" /></div>
      </div>
    </section>
  );
}