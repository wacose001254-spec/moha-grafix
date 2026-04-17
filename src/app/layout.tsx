import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "Moha Grafix | The BodyWorks/PaintShop Center",
  description: "High-end custom fabrication & precision paint.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <Navbar />
        {children}
        <footer className="py-12 border-t border-zinc-900 bg-[#050505] text-center">
  <div className="max-w-7xl mx-auto px-6">
    <span className="text-[#FF5F00] font-mono text-[10px] uppercase tracking-[0.5em] font-bold">
      // Art on Wheels
    </span>
    <p className="text-zinc-500 text-[10px] uppercase tracking-widest mt-4">
      © 2026 Moha Grafix. All Rights Reserved.
    </p>
    
    <div className="flex justify-center gap-8 mt-8">
      <a href="https://www.instagram.com/officialmohagrafix" target="_blank" className="text-white hover:text-[#FF5F00] text-[10px] font-bold uppercase tracking-widest transition-colors">
        Instagram
      </a>
      <a href="https://www.youtube.com/channel/UCRBMtAFMdgAKOiPH2w7O72w" target="_blank" className="text-white hover:text-[#FF5F00] text-[10px] font-bold uppercase tracking-widest transition-colors">
        YouTube
      </a>
      <a href="https://www.tiktok.com/@mohagrafix" target="_blank" className="text-white hover:text-[#FF5F00] text-[10px] font-bold uppercase tracking-widest transition-colors">
        TikTok
      </a>
    </div>
  </div>
</footer>
      </body>
    </html>
  );
}