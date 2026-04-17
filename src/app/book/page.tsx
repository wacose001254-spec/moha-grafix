export default function BookingPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white py-32 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <span className="text-[#FF5F00] font-mono text-[10px] uppercase tracking-[0.4em] font-bold">
            // Appointment Intake
          </span>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mt-2">
            Schedule <br /> <span className="text-[#FF5F00]">Customization</span>
          </h1>
          <p className="text-zinc-500 mt-4 uppercase text-xs tracking-widest font-bold">
            Precision fabrication & custom paint slots are limited.
          </p>
        </div>

        {/* The Form */}
        <div className="space-y-8 bg-zinc-900/40 p-8 border border-zinc-800">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col space-y-2">
              <label className="text-[10px] uppercase font-bold text-zinc-400 tracking-widest">Client Name</label>
              <input type="text" className="bg-black border border-zinc-800 p-3 focus:border-[#FF5F00] outline-none transition-all" placeholder="Client Name" />
            </div>
            <div className="flex flex-col space-y-2">
              <label className="text-[10px] uppercase font-bold text-zinc-400 tracking-widest">Phone Number</label>
              <input type="tel" className="bg-black border border-zinc-800 p-3 focus:border-[#FF5F00] outline-none transition-all" placeholder="+254..." />
            </div>
          </div>

          <div className="flex flex-col space-y-2">
            <label className="text-[10px] uppercase font-bold text-zinc-400 tracking-widest">Project Type</label>
            <select className="bg-black border border-zinc-800 p-3 focus:border-[#FF5F00] outline-none transition-all uppercase text-xs font-bold">
              <option>Full Bike Strip-down & Repaint</option>
              <option>Precision Fabrication / Welding</option>
              <option>Custom Graphics & Branding</option>
              <option>The Full Surgery (Complete Build)</option>
            </select>
          </div>

          <div className="flex flex-col space-y-2">
            <label className="text-[10px] uppercase font-bold text-zinc-400 tracking-widest">Preferred Date</label>
            <input type="date" className="bg-black border border-zinc-800 p-3 focus:border-[#FF5F00] outline-none transition-all" />
          </div>

          {/* WhatsApp Direct Link Button */}
          <a 
            href="https://wa.me/254722899437?text=I%20want%20to%20book%20a%20Surgery%20Session%20for%20my%20bike" 
            target="_blank"
            className="block w-full text-center bg-[#FF5F00] text-black font-black py-4 uppercase tracking-[0.2em] text-sm hover:bg-white transition-colors"
          >
            Confirm Job Slot
          </a>
        </div>
      </div>
    </main>
  );
}