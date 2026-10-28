import React from "react";
import { motion } from "framer-motion";
import { Cpu, Sparkles, ArrowRight } from "lucide-react";

const pillars = [
  {
    number: "I",
    title: "AI does not replace intuition.",
    body: "It amplifies it. Every breakthrough in human history has begun with a feeling — a pattern sensed before it could be named, a conviction held before it could be proven. AI cannot generate that. But it can help you articulate it, formalize it, and extend it further than you ever could alone.",
    color: "#c8a45a",
  },
  {
    number: "II",
    title: "We do not detect AI. We transcend the question.",
    body: "Leone does not attempt to identify whether you used AI to write your essays, formulate your ideas, or research your answers. That framing misunderstands what intelligence is. We assess your raw intuitive architecture — the part of you that no tool can fake, because it is the part that chooses what to ask in the first place.",
    color: "#8a5ab4",
  },
  {
    number: "III",
    title: "Your intuitions feed the frontier.",
    body: "When you articulate what you sense but cannot yet explain, something rare happens: AI encounters a genuinely novel signal. Not a recombination of what already exists — but the seed of what doesn't yet. Leone students are not consumers of AI output. They are originators of AI input. The ideas you bring will shape what comes next.",
    color: "#5ab49a",
  },
];

export default function AIPhilosophySection() {
  return (
    <section className="py-28 px-6 border-t border-white/[0.04]">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-16 items-start">

          {/* Left: Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:sticky lg:top-32"
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-[var(--gold)]/30" />
              <span className="text-[10px] tracking-[0.4em] uppercase text-[var(--gold)]/60">Our Stance on AI</span>
            </div>

            <h2 className="font-display font-light text-4xl md:text-5xl text-white mb-6 leading-tight">
              AI won't replace<br />
              <span className="italic text-[var(--gold)]">what makes you</span><br />
              <span className="text-white/50">irreplaceable.</span>
            </h2>

            <p className="text-white/35 text-sm leading-relaxed font-light mb-8">
              Leone University's position is not defensive — it is philosophical. 
              The most powerful thing a human being brings to a moment of creation 
              is not their knowledge. It is their intuition. The gut feeling. 
              The unexplainable certainty. The connection drawn between two things 
              no one thought to place beside each other.
            </p>
            <p className="text-white/20 text-sm leading-relaxed font-light">
              That is not something AI can generate. It can only help you 
              articulate it once you have it. That is the only role we will 
              ever grant it here.
            </p>

            {/* Decorative quote */}
            <div className="mt-10 relative pl-5 border-l border-[var(--gold)]/20">
              <p className="font-display text-base italic text-white/30 leading-relaxed">
                "AI learns from what humanity has already discovered. 
                Your intuition points to what humanity hasn't yet."
              </p>
              <p className="text-[9px] tracking-[0.3em] uppercase text-[var(--gold)]/20 mt-3">
                Leone University · AI Philosophy
              </p>
            </div>
          </motion.div>

          {/* Right: Pillars */}
          <div className="space-y-5">
            {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.number}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.12 }}
                className="relative rounded-2xl border border-white/[0.06] bg-white/[0.015] p-7 overflow-hidden group hover:border-white/10 transition-all duration-500"
              >
                <div
                  className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-[0.06] blur-2xl pointer-events-none"
                  style={{ background: pillar.color }}
                />
                <div className="flex items-start gap-5">
                  <div
                    className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center font-display text-sm font-light"
                    style={{ background: `${pillar.color}15`, border: `1px solid ${pillar.color}25`, color: pillar.color }}
                  >
                    {pillar.number}
                  </div>
                  <div>
                    <h3 className="text-white/80 text-base font-medium mb-3 leading-snug">{pillar.title}</h3>
                    <p className="text-white/30 text-sm leading-relaxed font-light">{pillar.body}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Bottom insight card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="rounded-2xl border border-[var(--gold)]/10 bg-[var(--gold)]/[0.025] p-7"
            >
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-3.5 h-3.5 text-[var(--gold)]/50" strokeWidth={1.5} />
                <span className="text-[9px] tracking-[0.35em] uppercase text-[var(--gold)]/40">The Vision</span>
              </div>
              <p className="text-white/40 text-sm leading-relaxed font-light">
                When Leone students articulate their most original intuitions — about 
                civilization, about consciousness, about what should exist that doesn't — 
                those ideas become signals that AI can pursue on their behalf. 
                Not replacing the student's agency. <span className="text-white/60 font-medium">Extending it into the frontier</span>. 
                This is the loop we are building: human intuition generating AI direction, 
                AI output feeding human discovery, and the cycle accelerating what 
                humanity can reach.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}