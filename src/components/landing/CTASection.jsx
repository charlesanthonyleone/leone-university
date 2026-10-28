import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../../utils";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] rounded-full"
          style={{ background: "radial-gradient(ellipse, rgba(200,164,90,0.06) 0%, transparent 65%)" }} />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="max-w-4xl mx-auto text-center relative"
      >
        <div className="inline-flex items-center gap-3 mb-8">
          <div className="h-px w-8 bg-[var(--gold)]/30" />
          <span className="text-[10px] tracking-[0.4em] uppercase text-[var(--gold)]/60">The World is Waiting</span>
          <div className="h-px w-8 bg-[var(--gold)]/30" />
        </div>

        <h2 className="font-display font-light text-5xl md:text-7xl text-white mb-6 leading-[0.95]">
          Building for<br />
          <span className="italic text-[var(--gold)]">the world ahead.</span>
        </h2>

        <p className="text-white/35 text-base md:text-lg leading-relaxed mb-12 max-w-2xl mx-auto font-light">
          Leone University is being built for those who think in decades, not semesters. 
          Explore the ideas, the curriculum, and the ethos behind what's coming.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to={createPageUrl("IntelOasis")}
            className="group inline-flex items-center gap-3 px-10 py-5 gold-gradient-bg text-[#07070d] font-semibold text-[11px] tracking-[0.2em] uppercase rounded-full hover:shadow-[0_0_80px_rgba(200,164,90,0.25)] transition-all duration-500 shine"
          >
            <span>Explore IntelOasis</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to={createPageUrl("Future")}
            className="group inline-flex items-center gap-3 px-8 py-4 border border-white/10 text-white/50 text-[11px] tracking-[0.2em] uppercase rounded-full hover:border-[var(--gold)]/25 hover:text-white/80 transition-all duration-500"
          >
            <span>The Future Degrees</span>
            <ExternalLink className="w-3 h-3 opacity-50 group-hover:opacity-80" />
          </Link>
        </div>
      </motion.div>
    </section>
  );
}