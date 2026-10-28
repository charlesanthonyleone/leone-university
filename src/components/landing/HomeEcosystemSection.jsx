import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { createPageUrl } from "../../utils";
import { ArrowRight, ExternalLink, Lightbulb, BookOpen, Cpu } from "lucide-react";

const cards = [
  {
    icon: Cpu,
    label: "Platform · External App",
    title: "IntelOasis",
    description: "Leone University's sister platform — an independent intelligence ecosystem where ideas become blueprints and blueprints become reality. Linked. Aligned. Separate.",
    cta: "Learn About IntelOasis",
    page: "IntelOasis",
    accent: "#c8a45a"
  },
  {
    icon: BookOpen,
    label: "Curriculum · Est. 2026+",
    title: "The Future Degrees",
    description: "Ten disciplines that don't yet exist — designed to explain and build the world we are heading into. Our inaugural frontier curriculum.",
    cta: "See the Degrees",
    page: "Future",
    accent: "#7ab494"
  },
  {
    icon: Lightbulb,
    label: "Workshop · Opening 2026",
    title: "The Armory",
    description: "Where ideas become products. Take a blueprint from IntelOasis — or bring your own — and build it into reality. Forge. Signal. Expand.",
    cta: "Enter the Armory",
    page: "Armory",
    accent: "#b4845a"
  }
];

export default function HomeEcosystemSection() {
  return (
    <section className="py-28 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.008] to-transparent" />
      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-5">
            <div className="h-px w-8 bg-[var(--gold)]/30" />
            <span className="text-[10px] tracking-[0.4em] uppercase text-[var(--gold)]/60">The Ecosystem</span>
            <div className="h-px w-8 bg-[var(--gold)]/30" />
          </div>
          <h2 className="font-display font-light text-4xl md:text-5xl text-white leading-tight">
            Three pillars of<br /><span className="italic text-[var(--gold)]">civilizational work.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.12 }}
                className="group relative p-8 rounded-2xl border border-white/[0.05] bg-white/[0.015] hover:border-white/10 transition-all duration-700 flex flex-col overflow-hidden"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  style={{ background: `radial-gradient(circle at top left, ${card.accent}06, transparent 60%)` }} />
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-6 flex-shrink-0"
                  style={{ background: `${card.accent}12`, border: `1px solid ${card.accent}20` }}>
                  <Icon className="w-5 h-5" style={{ color: card.accent, width: '18px', height: '18px' }} strokeWidth={1.5} />
                </div>
                <div className="text-[9px] tracking-[0.3em] uppercase mb-2" style={{ color: `${card.accent}60` }}>{card.label}</div>
                <h3 className="font-display text-2xl font-light text-white mb-4">{card.title}</h3>
                <p className="text-white/35 text-sm leading-relaxed font-light flex-1 mb-8">{card.description}</p>
                <Link
                  to={createPageUrl(card.page)}
                  className="group/btn inline-flex items-center gap-2 text-[11px] tracking-[0.18em] uppercase transition-all duration-300"
                  style={{ color: `${card.accent}70` }}
                >
                  <span className="group-hover/btn:text-white transition-colors">{card.cta}</span>
                  <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}