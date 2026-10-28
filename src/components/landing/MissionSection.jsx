import React from "react";
import { motion } from "framer-motion";
import { Flame, Scale, Zap, Globe2 } from "lucide-react";

const pillars = [
  {
    icon: Flame,
    title: "Ignite",
    subtitle: "Human Potential",
    description: "We believe the next Renaissance is not waiting — it is being built right now by those willing to think without borders and act with care."
  },
  {
    icon: Scale,
    title: "Honor",
    subtitle: "All Doctrines",
    description: "Divine law, natural law, civic law — we do not rebel against structure. We evolve it. Our method is persuasion, demonstration, and excellence."
  },
  {
    icon: Zap,
    title: "Accelerate",
    subtitle: "Civilization",
    description: "We move as fast as humanity can responsibly absorb. Not chaos — momentum. Not revolution — evolution with intention and architectural grace."
  },
  {
    icon: Globe2,
    title: "Unify",
    subtitle: "Seekers of Freedom",
    description: "America gave the world a beacon. We give America the scholars, builders, and dreamers who know that freedom is a practice, not a possession."
  }
];

export default function MissionSection() {
  return (
    <section id="mission" className="py-32 px-6 relative">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--gold)]/[0.015] to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="text-center mb-24"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-[var(--gold)]/30" />
            <span className="text-[10px] tracking-[0.4em] uppercase text-[var(--gold)]/60">Our Mission</span>
            <div className="h-px w-8 bg-[var(--gold)]/30" />
          </div>
          <h2 className="font-display font-light text-5xl md:text-6xl text-white mb-6 leading-tight">
            The Mandate of<br /><span className="italic text-[var(--gold)]">Leone University</span>
          </h2>
          <p className="text-white/35 max-w-2xl mx-auto leading-relaxed text-base font-light">
            We do not merely think — we build. We do not merely critique — we replace. 
            And we do not move without reverence for what came before us.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              className="group relative p-10 rounded-2xl border border-white/[0.05] bg-white/[0.015] hover:border-[var(--gold)]/20 hover:bg-[var(--gold)]/[0.025] transition-all duration-700 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                style={{ background: "radial-gradient(circle at top right, rgba(200,164,90,0.06), transparent 70%)" }} />
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-xl bg-[var(--gold)]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--gold)]/20 transition-colors duration-500">
                  <pillar.icon className="w-5 h-5 text-[var(--gold)]" strokeWidth={1.5} />
                </div>
                <div>
                  <div className="flex items-baseline gap-3 mb-2">
                    <h3 className="font-display text-2xl font-light text-white">{pillar.title}</h3>
                    <span className="text-xs tracking-[0.15em] uppercase text-[var(--gold)]/50">{pillar.subtitle}</span>
                  </div>
                  <p className="text-sm text-white/35 leading-relaxed font-light">{pillar.description}</p>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--gold)]/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}