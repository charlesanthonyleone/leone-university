import React, { useState } from "react";
import { motion } from "framer-motion";
import { Shield, Eye, Users, Anchor, Feather, Sun, ArrowRight, ChevronDown } from "lucide-react";

const principles = [
  {
    number: "I",
    icon: Shield,
    title: "The Covenant of Non-Destruction",
    summary: "We do not tear down. We build beside, above, and beyond.",
    body: "Leone University's first law is that no idea born here may be weaponized to destroy existing structures through force, coercion, or chaos. We believe every aging system contains wisdom earned through suffering. We honor that wisdom even as we architect what replaces it. Our method is demonstration: build something better, make it undeniably visible, and let humanity choose freely."
  },
  {
    number: "II",
    icon: Eye,
    title: "The Obligation of Clarity",
    summary: "We think in public. We hide nothing of our reasoning.",
    body: "All our work — ideas, methodologies, failures, and revisions — is published openly. Leone University holds that opacity is the enemy of trust, and trust is the currency of civilizational change. We are not a secret society of thinkers. We are an open laboratory of builders. If your idea cannot survive scrutiny, it cannot survive reality."
  },
  {
    number: "III",
    icon: Anchor,
    title: "Reverence for Law — All Law",
    summary: "Civic, divine, and natural law are not obstacles. They are load-bearing walls.",
    body: "We operate in absolute compliance with the laws of every nation in which we work. We respect the divine doctrines of humanity's great traditions — not as dogma, but as accumulated moral architecture. We respect natural law as the non-negotiable physics of biology, ecology, and consequence. Innovation that violates these laws is not progress — it is recklessness disguised as genius."
  },
  {
    number: "IV",
    icon: Feather,
    title: "The Standard of Precision",
    summary: "Vague ideas are comfortable. Precise ideas are useful.",
    body: "We do not traffic in vague inspiration. Every concept developed at Leone University must be developed to a level of precision that allows another person, in another place, with adequate resources, to build it without further instruction. We are not a philosophical salon — we are an R&D institution for civilization. Elegance is not optional; it is how we ensure our work endures."
  },
  {
    number: "V",
    icon: Users,
    title: "The Universality Principle",
    summary: "No idea may be designed to benefit one people at the expense of another.",
    body: "Freedom is not a national franchise. Every framework, technology, system, or institution we design must be intrinsically scalable to benefit all of humanity — or it does not leave this institution. Leone University does not build for markets. We build for species. This is not idealism; it is the only engineering specification that produces durable civilizational progress."
  },
  {
    number: "VI",
    icon: Sun,
    title: "The Long Arc",
    summary: "We build for the century, not the quarter.",
    body: "Our time horizon is multi-generational. We measure success not in funding cycles or viral moments, but in whether our work matters in 2076, 2126, 2226. This demands humility — we accept that our best ideas may require lifetimes to fully actualize — and it demands urgency, because the foundations of that future must be laid today, with precision, care, and an almost unreasonable commitment to excellence."
  }
];

function PrincipleCard({ principle, index }) {
  const [open, setOpen] = useState(false);
  const Icon = principle.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className="group relative border border-white/[0.06] rounded-2xl overflow-hidden transition-all duration-500 hover:border-[var(--gold)]/20"
    >
      <div className="absolute inset-0 bg-white/[0.015] group-hover:bg-[var(--gold)]/[0.02] transition-colors duration-500" />
      <button
        className="relative w-full text-left p-8 md:p-10 flex items-start gap-6"
        onClick={() => setOpen(!open)}
      >
        <div className="flex-shrink-0 flex items-start gap-4">
          <span className="font-display text-5xl font-light text-[var(--gold)]/20 leading-none w-12 text-right">{principle.number}</span>
          <div className="w-10 h-10 rounded-xl bg-[var(--gold)]/10 flex items-center justify-center mt-1">
            <Icon className="w-4.5 h-4.5 text-[var(--gold)]" strokeWidth={1.5} style={{width:'18px',height:'18px'}} />
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-display text-xl md:text-2xl font-light text-white mb-2 leading-snug">{principle.title}</h3>
          <p className="text-sm text-[var(--gold)]/60 font-light italic">{principle.summary}</p>
        </div>
        <ChevronDown className={`w-4 h-4 text-white/20 flex-shrink-0 mt-2 transition-transform duration-500 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.4 }}
          className="relative px-8 md:px-10 pb-8 md:pb-10 pl-[calc(2rem+3rem+2.5rem)] md:pl-[calc(2.5rem+3rem+2.5rem)]"
        >
          <div className="h-px w-full bg-white/[0.04] mb-6" />
          <p className="text-white/45 leading-relaxed text-base font-light">{principle.body}</p>
        </motion.div>
      )}
    </motion.div>
  );
}

export default function Ethos() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative pt-44 pb-28 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1454789548928-9efd52dc4031?w=1920&q=80')] bg-cover bg-center opacity-[0.03]" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#07070d] via-transparent to-[#07070d]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(200,164,90,0.05) 0%, transparent 70%)" }} />
        </div>
        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-3 mb-8">
              <div className="h-px w-8 bg-[var(--gold)]/30" />
              <span className="text-[10px] tracking-[0.4em] uppercase text-[var(--gold)]/60">The Code We Live By</span>
              <div className="h-px w-8 bg-[var(--gold)]/30" />
            </div>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15 }}
            className="font-display font-light text-6xl md:text-8xl text-white leading-[0.9] mb-8"
          >
            The Leone<br /><span className="italic text-[var(--gold)]">Covenant</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-white/35 text-lg leading-relaxed max-w-2xl mx-auto font-light"
          >
            This is not a list of rules. It is an architecture of intention — 
            the load-bearing principles upon which every idea, course, and action 
            at Leone University must be built.
          </motion.p>
        </div>
      </section>

      {/* Epigraph */}
      <section className="px-6 pb-16">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative p-12 rounded-3xl border border-[var(--gold)]/10 bg-[var(--gold)]/[0.02] text-center"
          >
            <div className="absolute top-6 left-8 font-display text-6xl text-[var(--gold)]/10 leading-none">"</div>
            <p className="font-display text-xl md:text-2xl italic text-white/60 leading-relaxed">
              We are not rebels. We are architects. Rebels tear down walls. 
              Architects study them — understand their weight, their history, their purpose — 
              and then design something that makes walls unnecessary.
            </p>
            <div className="absolute bottom-4 right-8 font-display text-6xl text-[var(--gold)]/10 leading-none">"</div>
            <div className="mt-6 text-[10px] tracking-[0.3em] uppercase text-[var(--gold)]/30">Leone University · Foundational Charter</div>
          </motion.div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto space-y-4">
          {principles.map((principle, i) => (
            <PrincipleCard key={principle.number} principle={principle} index={i} />
          ))}
        </div>
      </section>

      {/* Civilizational urgency interlude */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative rounded-3xl overflow-hidden border border-white/[0.04] p-12 md:p-16"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#0d0d1f] via-[#07070d] to-[#0d0d1f]" />
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-[0.04]"
              style={{ background: "radial-gradient(circle, #c8a45a, transparent 70%)" }} />
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="font-display text-3xl md:text-4xl italic text-white/80 leading-tight mb-4">
                  "Every age gets the civilization it was willing to build."
                </p>
                <p className="text-[10px] tracking-[0.3em] uppercase text-[var(--gold)]/30">Leone University · The Urgency</p>
              </div>
              <div className="space-y-4 text-white/30 text-sm font-light leading-relaxed">
                <p>The 21st century has no shortage of information. It has a catastrophic shortage of wisdom applied at scale — of people who understand systems deeply enough to change them without destroying them.</p>
                <p>Leone University does not exist because the world is broken. It exists because the world is at an inflection point — and inflection points are won by those who prepared before anyone else recognized the turn was coming.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Gentleman's Global Standard */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-[var(--gold)]/30" />
              <span className="text-[10px] tracking-[0.4em] uppercase text-[var(--gold)]/60">How We Show Up</span>
              <div className="h-px w-8 bg-[var(--gold)]/30" />
            </div>
            <h2 className="font-display font-light text-4xl md:text-5xl text-white mb-4">
              The Global <span className="italic text-[var(--gold)]">Standard of Conduct</span>
            </h2>
            <p className="text-white/35 max-w-xl mx-auto font-light">
              What we call the Gentleman's Global Code — applied not to propriety but to civilizational responsibility.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { label: "Speak with precision.", sub: "Vagueness is a courtesy we cannot afford at this scale." },
              { label: "Disagree with evidence.", sub: "Opinion is a starting point. Evidence is the destination." },
              { label: "Honor your predecessors.", sub: "Every breakthrough is built on the bones of prior attempts." },
              { label: "Credit generously.", sub: "Scarcity thinking in ideas produces intellectual poverty." },
              { label: "Act before you are ready.", sub: "Perfection is the luxury of those who have forgotten urgency." },
              { label: "Leave every system better.", sub: "Participation is not neutral. Presence is always intervention." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="p-6 rounded-xl border border-white/[0.05] bg-white/[0.015] hover:border-[var(--gold)]/15 transition-all duration-500"
              >
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--gold)]/60 mt-2 flex-shrink-0" />
                  <div>
                    <p className="text-white/80 text-sm font-medium mb-1">{item.label}</p>
                    <p className="text-white/30 text-xs leading-relaxed font-light">{item.sub}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}