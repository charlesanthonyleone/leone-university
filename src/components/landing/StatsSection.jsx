import React from "react";
import { motion } from "framer-motion";

const stats = [
  { value: "10", label: "Frontier Disciplines", note: "Being launched" },
  { value: "1", label: "Parent Ecosystem", note: "IntelOasis" },
  { value: "∞", label: "Ideas Available", note: "Free to humanity" },
  { value: "2026", label: "Year Founded", note: "America's 250th" },
];

export default function StatsSection() {
  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="relative rounded-3xl border border-white/[0.05] bg-white/[0.015] overflow-hidden p-12">
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, rgba(200,164,90,0.04) 0%, transparent 70%)" }} />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="font-display text-5xl md:text-6xl font-light gold-gradient mb-2 leading-none">{stat.value}</div>
                <div className="text-[11px] tracking-[0.2em] uppercase text-white/50 mb-1">{stat.label}</div>
                <div className="text-[9px] tracking-[0.15em] uppercase text-[var(--gold)]/30">{stat.note}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}