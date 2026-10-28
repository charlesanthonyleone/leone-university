import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "./utils";
import { Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
  { label: "Home", page: "Home" },
  { label: "Our Ethos", page: "Ethos" },
  { label: "Admissions", page: "Admissions" },
  { label: "IntelOasis", page: "IntelOasis" },
  { label: "The Armory", page: "Armory" },
  { label: "The Future", page: "Future" },

];

export default function Layout({ children, currentPageName }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [currentPageName]);

  const isActive = (page) => {
    if (page === "IntelOasis") return currentPageName === "IntelOasis";
    return currentPageName === page;
  };

  return (
    <div className="min-h-screen bg-[#07070d] text-white font-sans">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,600&family=Inter:wght@300;400;500;600;700&display=swap');
        :root {
          --gold: #c8a45a;
          --gold-light: #e8cc8a;
          --gold-dim: #8a6e30;
          --navy: #07070d;
          --navy-mid: #0f0f1a;
          --navy-light: #16162a;
          --cream: #f5efe0;
          --crimson: #8b1a2e;
        }
        body { font-family: 'Inter', sans-serif; background: #07070d; }
        .font-display { font-family: 'Cormorant Garamond', serif; }
        .gold-gradient { background: linear-gradient(135deg, #c8a45a 0%, #e8cc8a 50%, #c8a45a 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        .gold-gradient-bg { background: linear-gradient(135deg, #c8a45a 0%, #e8cc8a 50%, #c8a45a 100%); }
        .glass { background: rgba(10,10,20,0.85); backdrop-filter: blur(24px); border: 1px solid rgba(200,164,90,0.12); }
        .glass-light { background: rgba(20,20,38,0.6); backdrop-filter: blur(12px); border: 1px solid rgba(200,164,90,0.08); }
        .glow-gold { box-shadow: 0 0 60px rgba(200,164,90,0.12); }
        .text-glow { text-shadow: 0 0 40px rgba(200,164,90,0.3); }
        .grain::after { content: ''; position: fixed; inset: 0; pointer-events: none; opacity: 0.025; background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E"); background-size: 128px; z-index: 9999; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #07070d; }
        ::-webkit-scrollbar-thumb { background: #c8a45a22; border-radius: 4px; }
        ::-webkit-scrollbar-thumb:hover { background: #c8a45a44; }
        .nav-link-active { color: var(--gold); }
        .nav-link-active::after { content: ''; display: block; height: 1px; background: var(--gold); margin-top: 2px; opacity: 0.6; }
        .animate-float { animation: float 6s ease-in-out infinite; }
        @keyframes float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-12px); } }
        .shine { background: linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.06) 50%, transparent 60%); background-size: 200% 100%; animation: shine 3s linear infinite; }
        @keyframes shine { from { background-position: 200% 0; } to { background-position: -200% 0; } }
      `}</style>

      <div className="grain" />

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled ? "glass py-3 shadow-[0_4px_40px_rgba(0,0,0,0.5)]" : "py-6 bg-transparent"
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link to={createPageUrl("Home")} className="flex items-center gap-3 group">
            <div className="relative w-10 h-10">
              <div className="absolute inset-0 rounded-full border border-[var(--gold)]/40 group-hover:border-[var(--gold)]/80 transition-all duration-500" />
              <div className="absolute inset-[3px] rounded-full border border-[var(--gold)]/20 group-hover:border-[var(--gold)]/40 transition-all duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-display text-[var(--gold)] text-xl font-bold">L</span>
              </div>
            </div>
            <div className="leading-none">
              <div className="text-[11px] font-semibold tracking-[0.35em] uppercase text-white/90 group-hover:text-white transition-colors">Leone</div>
              <div className="text-[9px] tracking-[0.4em] uppercase text-[var(--gold)]/70 group-hover:text-[var(--gold)] transition-colors mt-0.5">University</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map(link => (
              <Link
                key={link.page}
                to={createPageUrl(link.page)}
                className={`text-[11px] tracking-[0.18em] uppercase transition-all duration-300 ${
                  isActive(link.page)
                    ? "text-[var(--gold)] nav-link-active"
                    : "text-white/50 hover:text-white/90"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-white/70 hover:text-white transition-colors"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {mobileOpen && (
          <div className="lg:hidden glass mt-2 mx-4 rounded-2xl p-6 space-y-5">
            {navLinks.map(link => (
              <Link
                key={link.page}
                to={createPageUrl(link.page)}
                className={`block text-[11px] tracking-[0.2em] uppercase transition-colors ${
                  isActive(link.page) ? "text-[var(--gold)]" : "text-white/60 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </nav>

      <main>{children}</main>

      {/* Footer */}
      <footer className="relative border-t border-white/[0.04] py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[var(--gold)]/[0.02]" />
        <div className="max-w-7xl mx-auto relative">
          <div className="flex flex-col md:flex-row items-start justify-between gap-12 mb-16">
            <div className="max-w-xs">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full border border-[var(--gold)]/40 flex items-center justify-center">
                  <span className="font-display text-[var(--gold)] text-base font-bold">L</span>
                </div>
                <div>
                  <div className="text-[10px] tracking-[0.3em] uppercase text-white/80">Leone University</div>
                  <div className="text-[8px] tracking-[0.3em] uppercase text-[var(--gold)]/50">Non-Profit Organization</div>
                </div>
              </div>
              <p className="text-xs text-white/25 leading-relaxed font-light">
                "If liberty is given, then let its children prove worthy of it — not by breaking what stands, but by building what must rise."
              </p>
              <p className="text-[10px] text-[var(--gold)]/20 mt-3 tracking-wider">
                Est. 2026 · America's 250th Year
              </p>
            </div>

            <div className="grid grid-cols-2 gap-x-16 gap-y-4">
              {navLinks.map(link => (
                <Link
                  key={link.page}
                  to={createPageUrl(link.page)}
                  className="text-[10px] tracking-[0.2em] uppercase text-white/30 hover:text-[var(--gold)]/70 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-white/[0.04]">
            <p className="text-[10px] text-white/20 tracking-wider uppercase">
              © {new Date().getFullYear()} Leone University — Non-Profit · All ideas freely available to humanity
            </p>
            <div className="flex items-center gap-2">
              <div className="w-1 h-1 rounded-full bg-[var(--gold)]/40" />
              <span className="text-[10px] text-white/20 tracking-wider uppercase">Parent of IntelOasis</span>
              <div className="w-1 h-1 rounded-full bg-[var(--gold)]/40" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}