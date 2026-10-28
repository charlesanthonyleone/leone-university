import React from "react";
import { motion } from "framer-motion";

const lines = [
  { text: "The school that told you to sit down", dim: true },
  { text: "was not wrong to have rules.", dim: true },
  { text: "It was wrong about", dim: true },
  { text: "what you were.", dim: false },
];

export default function ManifestoSection() {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0d0d1f] to-transparent" />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full opacity-40"
          style={{ background: "radial-gradient(ellipse, rgba(139,26,46,0.07) 0%, transparent 70%)" }}
        />
      </div>

      <div className="max-w-5xl mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* Left: the poetic statement */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="inline-flex items-center gap-3 mb-10">
              <div className="h-px w-8 bg-[var(--gold)]/30" />
              <span className="text-[10px] tracking-[0.4em] uppercase text-[var(--gold)]/50">A Different Premise</span>
            </div>

            <div className="space-y-1 mb-10">
              {[
                { text: "The school that told you to sit down", opacity: "text-white/20" },
                { text: "was not wrong to have rules.", opacity: "text-white/20" },
                { text: "It was wrong about", opacity: "text-white/40" },
                { text: "what you were.", opacity: "text-white font-display italic text-5xl md:text-6xl font-light text-glow" },
              ].map((line, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.15 }}
                  className={`font-display font-light leading-tight ${
                    i < 2 ? "text-2xl md:text-3xl text-white/20" :
                    i === 2 ? "text-2xl md:text-3xl text-white/40" :
                    "text-4xl md:text-6xl text-[var(--gold)] italic"
                  }`}
                >
                  {line.text}
                </motion.p>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.7 }}
              className="h-px w-16 bg-gradient-to-r from-[var(--gold)]/40 to-transparent"
            />
          </motion.div>

          {/* Right: the three truths */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="space-y-6"
          >
            {[
              {
                n: "01",
                title: "Intelligence is not obedience.",
                body: "The compliance that schools reward and the originality that civilization needs are not the same muscle. We train the second one."
              },
              {
                n: "02",
                title: "The world needs builders, not performers.",
                body: "A credential proves you endured a system. We want to know what you built when no one was grading you — or when no system existed at all."
              },
              {
                n: "03",
                title: "Your chaos is data, not damage.",
                body: "Disrupted paths, unconventional minds, self-taught expertise — these are not liabilities to explain away. They are the fingerprints of a frontier mind."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.12 }}
                className="flex gap-5 group"
              >
                <span className="font-display text-3xl font-light text-[var(--gold)]/15 flex-shrink-0 leading-none pt-1 group-hover:text-[var(--gold)]/25 transition-colors duration-500">
                  {item.n}
                </span>
                <div>
                  <p className="text-white/70 text-base font-medium mb-1.5">{item.title}</p>
                  <p className="text-white/25 text-sm leading-relaxed font-light">{item.body}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}