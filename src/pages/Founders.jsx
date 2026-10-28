import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { createPageUrl } from "../utils";
import { ArrowRight, Heart, Globe2, Flame, Star } from "lucide-react";

const values = [
  {
    label: "Non-profit, always",
    body: "Leone University will never convert to a for-profit entity. The charter forbids it. The mission requires it. Every dollar generated flows back into the work."
  },
  {
    label: "Open intellectual commons",
    body: "Every idea, curriculum, and framework published by Leone University is freely available to humanity. We don't own what we discover — we steward it."
  },
  {
    label: "Long-arc commitment",
    body: "We are building for 2076, 2126, 2226. That time horizon demands a different kind of founder — one who measures success in decades, not funding rounds."
  },
  {
    label: "Transparent failure",
    body: "When we're wrong, we say so publicly. When something fails, we publish what we learned. Our credibility is built on honesty, not polish."
  },
];

export default function Founders() {
  return (
    <div className="min-h-screen">

      {/* Hero */}
      <section className="relative pt-44 pb-28 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#07070d] via-[#0a0a15] to-[#07070d]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full"
            style={{ background: "radial-gradient(ellipse, rgba(200,164,90,0.05) 0%, transparent 70%)" }} />
        </div>

        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-3 mb-8">
              <div className="h-px w-8 bg-[var(--gold)]/30" />
              <span className="text-[10px] tracking-[0.4em] uppercase text-[var(--gold)]/60">The People Behind Leone</span>
              <div className="h-px w-8 bg-[var(--gold)]/30" />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15 }}
            className="font-display font-light text-6xl md:text-8xl text-white leading-[0.9] mb-8"
          >
            The Founders<br /><span className="italic text-[var(--gold)]">of Leone</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-white/35 text-lg leading-relaxed max-w-2xl mx-auto font-light mb-8"
          >
            Leone University was not founded by a committee. It was founded by people who believed 
            that building something permanent — something that genuinely serves humanity — 
            was worth more than anything they could accomplish alone.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-[var(--gold)]/15 bg-[var(--gold)]/[0.03]"
          >
            <Flame className="w-3 h-3 text-[var(--gold)]/40" strokeWidth={1.5} />
            <span className="text-[9px] tracking-[0.35em] uppercase text-[var(--gold)]/40">
              Founded in America's 250th Year · 2026
            </span>
          </motion.div>
        </div>
      </section>

      {/* The founding story */}
      <section className="py-20 px-6 border-t border-white/[0.04]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-16"
          >
            <div>
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="h-px w-8 bg-[var(--gold)]/30" />
                <span className="text-[10px] tracking-[0.4em] uppercase text-[var(--gold)]/60">The Origin</span>
              </div>
              <h2 className="font-display font-light text-3xl md:text-4xl text-white mb-5 leading-tight">
                Why this, why now,<br /><span className="italic text-[var(--gold)]">why us.</span>
              </h2>
              <div className="pl-5 border-l border-[var(--gold)]/15 mt-8">
                <p className="font-display text-lg italic text-white/30 leading-relaxed">
                  "We didn't found this because we had answers. We founded it because we had the right questions — and nowhere adequate to bring them."
                </p>
              </div>
            </div>
            <div className="space-y-5 text-white/35 text-sm leading-[1.95] font-light">
              <p>Leone University came from a simple observation: the most important problems of the next century — civilizational resilience, conscious technology, ecological stewardship, governance that anticipates rather than reacts — are not being studied by the institutions that have the resources to study them. They are being studied, in pieces, by isolated individuals who cannot find each other.</p>
              <p>The founders of Leone University decided to build the institution that should already exist. Not because they had all the answers — but because they understood that the right architecture around good questions produces answers faster than any single mind can alone.</p>
              <p>This institution was formally established in 2026 — America's 250th anniversary. Not as a coincidence, but as a declaration: this is what liberty looks like when it's been given enough time to understand what it was for.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Founding commitments */}
      <section className="py-20 px-6 border-t border-white/[0.04]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-14"
          >
            <h2 className="font-display font-light text-4xl md:text-5xl text-white mb-3">
              What the founders<br /><span className="italic text-[var(--gold)]">committed to.</span>
            </h2>
            <p className="text-white/30 font-light text-sm max-w-xl mx-auto">
              These commitments are not aspirational. They are structural — encoded into the charter and the founding articles.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="p-8 rounded-2xl border border-white/[0.05] bg-white/[0.012] hover:border-[var(--gold)]/15 transition-all duration-500"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--gold)]/60 mt-2 flex-shrink-0" />
                  <h3 className="text-white/75 font-medium text-sm">{v.label}</h3>
                </div>
                <p className="text-white/28 text-sm leading-relaxed font-light pl-4">{v.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Succession note */}
      <section className="py-20 px-6 border-t border-white/[0.04]">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative p-12 rounded-3xl border border-[var(--gold)]/10 bg-[var(--gold)]/[0.02]"
          >
            <div className="absolute top-6 left-8 font-display text-5xl text-[var(--gold)]/08 leading-none">"</div>
            <p className="font-display text-xl md:text-2xl italic text-white/50 leading-relaxed">
              The deepest act of founding is to build something that makes the founders dispensable. 
              We are not building a monument to ourselves. We are building a vehicle for 
              something that outlasts every one of us.
            </p>
            <div className="mt-6 text-[10px] tracking-[0.3em] uppercase text-[var(--gold)]/25">
              Leone University · Charter Article VIII
            </div>
            <div className="absolute bottom-4 right-8 font-display text-5xl text-[var(--gold)]/08 leading-none">"</div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 border-t border-white/[0.04]">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display font-light text-4xl md:text-5xl text-white mb-6">
              The institution is<br /><span className="italic text-[var(--gold)]">still being built.</span>
            </h2>
            <p className="text-white/30 text-base font-light mb-10 max-w-xl mx-auto">
              Leone University's founding moment is 2026. If you believe in what this is — 
              the work has already begun.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to={createPageUrl("Charter")}
                className="group inline-flex items-center gap-3 px-8 py-4 gold-gradient-bg text-[#07070d] font-semibold text-[11px] tracking-[0.2em] uppercase rounded-full hover:shadow-[0_0_60px_rgba(200,164,90,0.2)] transition-all duration-500"
              >
                Read the Charter
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to={createPageUrl("Admissions")}
                className="group inline-flex items-center gap-3 px-8 py-4 border border-white/10 text-white/40 text-[11px] tracking-[0.2em] uppercase rounded-full hover:border-[var(--gold)]/25 hover:text-white/70 transition-all duration-500"
              >
                Apply
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}