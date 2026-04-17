import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#050505]/80 backdrop-blur-md border-b border-zinc-900 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-white font-black uppercase tracking-tighter text-xl">
          MOHA <span className="text-[#FF5F00]">GRAFIX</span>
        </Link>
        <div className="flex gap-8">
          <Link href="/" className="text-zinc-400 hover:text-white text-[10px] font-bold uppercase tracking-widest transition-colors">Lab</Link>
          <Link href="/book" className="text-[#FF5F00] hover:text-white text-[10px] font-bold uppercase tracking-widest transition-colors">Book Surgery</Link>
        </div>
      </div>
    </nav>
  );
}