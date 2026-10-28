import React from "react";
import { motion } from "framer-motion";
import { Cpu, Layers, Zap, Users, BookOpen, BarChart3, ExternalLink, Sparkles, Network, Globe2, Brain, Leaf, CheckCircle } from "lucide-react";

const features = [
  {
    icon: Cpu,
    title: "AI-Augmented Intelligence",
    description: "Harnesses AI to amplify human thinking — accelerating research, surfacing connections, and helping users build with greater depth and speed than ever possible alone."
  },
  {
    icon: Layers,
    title: "Ideas as Living Documents",
    description: "Every idea is a structured, versioned, collaborative artifact — a blueprint with context, dependencies, and implementation pathways. Not a post. Not a thread. Infrastructure."
  },
  {
    icon: Users,
    title: "Community of Builders",
    description: "Connects solvers, researchers, thinkers, and implementers across disciplines. The platform surfaces opportunities for meaningful collaboration based on your actual strengths."
  },
  {
    icon: BarChart3,
    title: "Impact Tracking",
    description: "When ideas are implemented, the impact propagates back through the system. We track, measure, and learn from what actually changes the world — and what doesn't."
  },
  {
    icon: BookOpen,
    title: "Structured Knowledge Graphs",
    description: "Ideas are mapped to domains, predecessors, and future implications — forming a growing knowledge graph of humanity's most actionable intellectual work."
  },
  {
    icon: Zap,
    title: "Rapid Prototyping Toolkit",
    description: "Frameworks, templates, and toolkits to move builders from concept to working demonstration in record time. Idea to prototype. Blueprint to reality."
  },
  {
    icon: Network,
    title: "The Ideas Lab",
    description: "A living repository of actionable blueprints published by Leone University — free for anyone to take, adapt, and build. No gatekeeping. No permission required."
  },
  {
    icon: Globe2,
    title: "Cross-Domain Synthesis",
    description: "IntelOasis deliberately breaks disciplinary silos — connecting economic ideas to ecological ones, governance frameworks to technological breakthroughs."
  },
  {
    icon: Brain,
    title: "Collective Intelligence Layer",
    description: "As more minds engage, the platform develops a collective intelligence that no single contributor could generate alone — emergent insight from structured collaboration."
  }
];

const nodes = ["Ideas", "Builders", "Impact", "Data", "Courses", "Research", "Policy", "Tools"];

export default function IntelOasis() {
  return (
    <div className="min-h-screen">

      {/* Hero */}
      <section className="relative pt-44 pb-28 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#07070d] via-[#0a0a18] to-[#07070d]" />
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[700px] rounded-full"
            style={{ background: "radial-gradient(ellipse, rgba(200,164,90,0.06) 0%, transparent 65%)" }} />
          <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(80,80,200,0.04) 0%, transparent 70%)" }} />
          <div className="absolute inset-0 opacity-[0.015]"
            style={{ backgroundImage: "radial-gradient(rgba(200,164,90,1) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        </div>

        <div className="relative max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="mb-10">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-[var(--gold)]/30" />
              <span className="text-[10px] tracking-[0.4em] uppercase text-[var(--gold)]/60">A Leone University Platform — Independent App</span>
              <div className="h-px w-8 bg-[var(--gold)]/30" />
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.15 }}>
            <div className="flex flex-wrap items-end gap-3 md:gap-5 mb-6">
              <h1 className="font-display font-light text-7xl md:text-9xl text-white leading-[0.85]">Intel</h1>
              <h1 className="font-display font-light text-7xl md:text-9xl italic text-[var(--gold)] leading-[0.85]">Oasis</h1>
            </div>
            <p className="font-display text-xl md:text-2xl italic text-white/30 mb-8 max-w-2xl font-light">
              Where Leone University's ideas meet the people who can build them.
            </p>
          </motion.div>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.5 }}
            className="text-white/40 text-base md:text-lg leading-relaxed max-w-3xl mb-12 font-light"
          >
            IntelOasis is a fully independent platform — its own application, its own ecosystem — 
            built and operated in close relationship with Leone University. It is the operating system 
            for humanity's most ambitious ideas. Where traditional knowledge platforms archive, 
            IntelOasis activates. Thinkers become builders. Blueprints become reality.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="https://charlesanthonyleone.github.io/intel-oasis/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-8 py-4 gold-gradient-bg text-[#07070d] font-semibold text-[11px] tracking-[0.2em] uppercase rounded-full hover:shadow-[0_0_60px_rgba(200,164,90,0.25)] transition-all duration-500 shine"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Enter IntelOasis</span>
              <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <div className="inline-flex items-center gap-3 px-8 py-4 border border-white/[0.06] text-white/25 text-[11px] tracking-[0.2em] uppercase rounded-full font-light cursor-default select-none">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400/50 animate-pulse" />
              Separate Platform · Linked Ecosystem
            </div>
          </motion.div>
        </div>
      </section>

      {/* Relationship explained */}
      <section className="py-20 px-6 border-t border-white/[0.04]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            <div>
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="h-px w-8 bg-[var(--gold)]/30" />
                <span className="text-[10px] tracking-[0.4em] uppercase text-[var(--gold)]/60">The Relationship</span>
              </div>
              <h2 className="font-display font-light text-4xl md:text-5xl text-white mb-6 leading-tight">
                Two organizations.<br />
                <span className="italic text-[var(--gold)]">One shared purpose.</span>
              </h2>
              <div className="space-y-5 text-white/40 text-sm leading-relaxed font-light">
                <p>
                  Leone University is the institution — the educator, the researcher, the long-arc 
                  civilizational project. IntelOasis is the platform — the activation layer, 
                  the ideas engine, the place where Leone's intellectual output meets the broader 
                  world of builders.
                </p>
                <p>
                  IntelOasis operates as a fully independent application. It has its own identity, 
                  its own user ecosystem, its own governance. But it was built in philosophical 
                  alignment with Leone University's mission: that ideas should be free, 
                  actionable, and connected to the people capable of executing them.
                </p>
                <p>
                  Leone University publishes ideas to IntelOasis. IntelOasis tracks their 
                  implementation. The two systems share data, methodology, and purpose — 
                  without being the same entity.
                </p>
              </div>
            </div>

            {/* Visual relationship diagram */}
            <div className="relative">
              <div className="relative rounded-3xl border border-white/[0.06] bg-white/[0.015] p-10 overflow-hidden">
                <div className="absolute inset-0" style={{ background: "radial-gradient(circle at center, rgba(200,164,90,0.04) 0%, transparent 70%)" }} />
                <div className="relative flex flex-col items-center gap-5">
                  {/* Leone box */}
                  <div className="w-full max-w-xs p-5 rounded-2xl border border-[var(--gold)]/20 bg-[var(--gold)]/[0.05] text-center">
                    <div className="font-display text-lg text-[var(--gold)] mb-1">Leone University</div>
                    <div className="text-[9px] tracking-[0.3em] uppercase text-[var(--gold)]/40">Non-Profit Institution</div>
                    <div className="mt-3 flex flex-wrap gap-2 justify-center">
                      {["Curriculum", "Research", "Admissions", "Ethos"].map(t => (
                        <span key={t} className="text-[8px] tracking-wider uppercase px-2 py-0.5 rounded-full bg-white/[0.04] text-white/25 border border-white/[0.04]">{t}</span>
                      ))}
                    </div>
                  </div>

                  {/* Connection line */}
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-px h-6 bg-gradient-to-b from-[var(--gold)]/30 to-[var(--gold)]/10" />
                    <div className="flex items-center gap-3 px-4 py-1.5 rounded-full border border-white/[0.06] bg-white/[0.02]">
                      <div className="w-1.5 h-1.5 rounded-full bg-[var(--gold)]/40" />
                      <span className="text-[8px] tracking-[0.25em] uppercase text-white/20">Linked Ecosystem</span>
                      <div className="w-1.5 h-1.5 rounded-full bg-[var(--gold)]/40" />
                    </div>
                    <div className="w-px h-6 bg-gradient-to-b from-[var(--gold)]/10 to-blue-400/20" />
                  </div>

                  {/* IntelOasis box */}
                  <div className="w-full max-w-xs p-5 rounded-2xl border border-blue-400/15 bg-blue-400/[0.04] text-center">
                    <div className="font-display text-lg text-blue-300/70 mb-1">IntelOasis</div>
                    <div className="text-[9px] tracking-[0.3em] uppercase text-blue-300/30">Independent Platform</div>
                    <div className="mt-3 flex flex-wrap gap-2 justify-center">
                      {["Ideas Lab", "Builders", "Impact", "AI Tools"].map(t => (
                        <span key={t} className="text-[8px] tracking-wider uppercase px-2 py-0.5 rounded-full bg-white/[0.04] text-white/25 border border-white/[0.04]">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="py-20 px-6 border-t border-white/[0.04]">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
            className="text-center mb-14"
          >
            <div className="inline-flex items-center gap-3 mb-5">
              <div className="h-px w-8 bg-[var(--gold)]/30" />
              <span className="text-[10px] tracking-[0.4em] uppercase text-[var(--gold)]/60">Platform Capabilities</span>
              <div className="h-px w-8 bg-[var(--gold)]/30" />
            </div>
            <h2 className="font-display font-light text-4xl md:text-5xl text-white">
              Built for <span className="italic text-[var(--gold)]">civilization-scale work.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((feat, i) => {
              const Icon = feat.icon;
              return (
                <motion.div
                  key={feat.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  className="group p-7 rounded-2xl border border-white/[0.05] bg-white/[0.015] hover:border-[var(--gold)]/20 hover:bg-[var(--gold)]/[0.02] transition-all duration-500"
                >
                  <div className="w-10 h-10 rounded-xl bg-[var(--gold)]/10 flex items-center justify-center mb-5 group-hover:bg-[var(--gold)]/20 transition-colors duration-500">
                    <Icon className="w-4 h-4 text-[var(--gold)]" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-white/75 font-medium mb-2 text-sm">{feat.title}</h3>
                  <p className="text-white/28 text-sm leading-relaxed font-light">{feat.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* LowDro Club */}
      <section className="py-20 px-6 border-t border-white/[0.04]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-10"
          >
            <div className="inline-flex items-center gap-3 mb-5">
              <div className="h-px w-8 bg-[var(--gold)]/30" />
              <span className="text-[10px] tracking-[0.4em] uppercase text-[var(--gold)]/60">Completed Clubs</span>
            </div>
            <h2 className="font-display font-light text-4xl md:text-5xl text-white mb-3">
              Ideas that <span className="italic text-[var(--gold)]">became real.</span>
            </h2>
            <p className="text-white/30 text-sm font-light max-w-xl">
              IntelOasis clubs are focused communities built around a single vision. Here's the first one standing.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative rounded-3xl overflow-hidden border border-[#3a7a4a]/30 bg-[#0d1f12]"
          >
            <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at top right, rgba(50,120,70,0.08) 0%, transparent 60%)" }} />
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10 blur-3xl" style={{ background: "#4a9a5a" }} />

            <div className="relative p-8 md:p-12 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 items-center">
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-400/10 border border-emerald-400/20">
                    <CheckCircle className="w-3 h-3 text-emerald-400/80" strokeWidth={2} />
                    <span className="text-[9px] tracking-[0.3em] uppercase text-emerald-400/70">Live</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.06]">
                    <Leaf className="w-3 h-3 text-white/25" strokeWidth={1.5} />
                    <span className="text-[9px] tracking-[0.3em] uppercase text-white/25">Club #001</span>
                  </div>
                </div>

                <div className="flex items-baseline gap-3 mb-3">
                  <h3 className="font-display text-4xl md:text-5xl font-light text-white">LowDro</h3>
                  <span className="font-display text-lg italic text-emerald-400/60">.com</span>
                </div>

                <p className="text-white/50 text-base mb-4 font-light max-w-xl">
                  The first club dedicated to clean cannabis consumption — built on the premise that intentionality and cannabis aren't opposites. They should have always been together.
                </p>

                <div className="space-y-2 mb-8">
                  {[
                    "Curated, low-dose culture for people who want to stay functional and clear",
                    "A community that takes the plant seriously — without the fog",
                    "Content, practices, and standards for cannabis that actually respects your mind",
                  ].map((point, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-1 h-1 rounded-full bg-emerald-400/50 mt-2 flex-shrink-0" />
                      <p className="text-white/30 text-sm font-light">{point}</p>
                    </div>
                  ))}
                </div>

                <a
                  href="https://lowdro.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-full text-[11px] tracking-[0.2em] uppercase font-semibold transition-all duration-500 hover:shadow-[0_0_40px_rgba(74,154,90,0.2)]"
                  style={{ background: "linear-gradient(135deg, #3a7a4a, #5aaa6a)", color: "#07070d" }}
                >
                  Visit LowDro.com
                  <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>

              <div className="hidden lg:flex flex-col items-center justify-center gap-3 pr-4">
                <div className="w-24 h-24 rounded-2xl border border-emerald-400/20 bg-emerald-400/[0.06] flex items-center justify-center">
                  <Leaf className="w-10 h-10 text-emerald-400/50" strokeWidth={1} />
                </div>
                <div className="text-[8px] tracking-[0.3em] uppercase text-emerald-400/25 text-center">Clean<br />Cannabis</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 border-t border-white/[0.04]">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <h2 className="font-display font-light text-5xl md:text-6xl text-white mb-6">
              Ready to enter<br /><span className="italic text-[var(--gold)]">the Oasis?</span>
            </h2>
            <p className="text-white/35 text-base mb-10 font-light max-w-xl mx-auto">
              IntelOasis lives at its own address. Step in. The work is waiting.
            </p>
            <a
              href="https://charlesanthonyleone.github.io/intel-oasis/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-10 py-5 gold-gradient-bg text-[#07070d] font-semibold text-[11px] tracking-[0.2em] uppercase rounded-full hover:shadow-[0_0_80px_rgba(200,164,90,0.25)] transition-all duration-500 shine"
            >
              <Sparkles className="w-4 h-4" />
              <span>Launch IntelOasis</span>
              <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}