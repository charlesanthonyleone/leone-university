import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../../utils";
import { motion } from "framer-motion";
import { ArrowRight, ArrowDownRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Deep ambient layers */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1920&q=80')] bg-cover bg-center opacity-[0.04]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#07070d] via-transparent to-[#07070d]" />
        {/* Radial orbs */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(200,164,90,0.06) 0%, transparent 70%)" }} />
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(139,26,46,0.04) 0%, transparent 70%)" }} />
        {/* Grid */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: "linear-gradient(rgba(200,164,90,1) 1px, transparent 1px), linear-gradient(90deg, rgba(200,164,90,1) 1px, transparent 1px)", backgroundSize: "80px 80px" }} />
        {/* Diagonal line ornaments */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-[0.03]">
          <div className="absolute top-[-50%] right-[-20%] w-[1px] h-[200%] bg-[var(--gold)] rotate-[25deg] origin-top" />
          <div className="absolute top-[-50%] right-[-30%] w-[1px] h-[200%] bg-[var(--gold)] rotate-[25deg] origin-top" />
          <div className="absolute top-[-50%] left-[-20%] w-[1px] h-[200%] bg-[var(--gold)] rotate-[-25deg] origin-top" />
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center pt-32 pb-24">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="inline-flex items-center gap-3 mb-12"
        >
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-[var(--gold)]/40" />
          <span className="text-[10px] tracking-[0.4em] uppercase text-[var(--gold)]/70">Est. 2026 · Leone University · Non-Profit</span>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-[var(--gold)]/40" />
        </motion.div>

        {/* Main headline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="font-display font-light leading-[0.9] mb-8">
            <span className="block text-[clamp(3.5rem,9vw,9rem)] text-white/90 tracking-tight">Where Freedom</span>
            <span className="block text-[clamp(3.5rem,9vw,9rem)] italic text-[var(--gold)] text-glow tracking-tight">Learns to Build.</span>
          </h1>
        </motion.div>

        {/* Motto */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-8"
        >
          <p className="font-display text-xl md:text-2xl italic text-white/30 tracking-wide">
            "They gave us liberty. We will teach it to earn its name."
          </p>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="h-px w-8 bg-[var(--gold)]/20" />
            <p className="font-display text-sm text-[var(--gold)]/40 tracking-[0.18em] uppercase">
              Founded in America's 250th Year · 2026
            </p>
            <div className="h-px w-8 bg-[var(--gold)]/20" />
          </div>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.65 }}
          className="text-base md:text-lg text-white/35 max-w-2xl mx-auto leading-relaxed font-light mb-14"
        >
          Leone University is a non-profit institution on the frontier of human knowledge —
          dedicated to propelling civilization forward with consciousness, cohesion, and reverence
          for every law that governs us: divine, natural, and civic.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.85 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            to={createPageUrl("Ethos")}
            className="group relative inline-flex items-center gap-3 px-8 py-4 gold-gradient-bg text-[#07070d] font-semibold text-[11px] tracking-[0.2em] uppercase rounded-full overflow-hidden transition-all duration-500 hover:shadow-[0_0_60px_rgba(200,164,90,0.25)] shine"
          >
            <span>Our Ethos</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to={createPageUrl("Future")}
            className="inline-flex items-center gap-3 px-8 py-4 border border-white/10 text-white/50 font-medium text-[11px] tracking-[0.2em] uppercase rounded-full hover:border-[var(--gold)]/25 hover:text-white/80 transition-all duration-500"
          >
            <span>Explore Degrees</span>
          </Link>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[9px] tracking-[0.3em] uppercase text-white/20">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity }}
            className="w-[1px] h-8 bg-gradient-to-b from-[var(--gold)]/30 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}