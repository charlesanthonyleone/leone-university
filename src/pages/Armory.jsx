import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { createPageUrl } from "../utils";
import { Hammer, Rocket, Megaphone, TrendingUp, ArrowRight, ExternalLink, Wrench, Lightbulb, Globe2, Users, Zap, CheckCircle, ChevronDown, Flame, Target, BarChart3, Package } from "lucide-react";

const phases = [
  {
    number: "01",
    phase: "Forge",
    title: "Build the Thing",
    tagline: "From idea to working product in weeks, not years.",
    color: "#c8a45a",
    icon: Hammer,
    description: "The Armory connects you to AI-powered building tools — partnered platforms where you can take any idea (yours or one from IntelOasis) and construct a real, functional product. No-code. Low-code. Full code. Whatever your level, the tools meet you there.",
    steps: [
      { label: "Select your idea", body: "Browse the IntelOasis library or bring your own. Every idea has a blueprint — a structured starting point so you're never staring at a blank page." },
      { label: "Choose your builder", body: "The Armory is partnered with best-in-class building platforms. We match your idea type and your skill level to the right tool." },
      { label: "Build with AI", body: "AI accelerates every step — product structure, database design, user flows, copy, branding. You provide the intention. The tools build the scaffold." },
      { label: "Ship version one", body: "The goal of Phase 01 is not perfection. It is existence. A working v1 that you can put in front of real people." },
    ]
  },
  {
    number: "02",
    phase: "Signal",
    title: "Find Your People",
    tagline: "A product no one knows about is a tree falling in an empty forest.",
    color: "#8a5ab4",
    icon: Megaphone,
    description: "Phase 02 is about signal — getting your product in front of the right people, building a narrative around it, and learning what actually resonates. Marketing is not manipulation. It is the art of making something's true value visible to the people who need it.",
    steps: [
      { label: "Craft the story", body: "Every product that spreads has a story that makes people feel something. We help you find that story — precise, honest, and compelling." },
      { label: "Identify your audience", body: "Not everyone. The right ones. The Armory helps you map who actually needs what you built, and where they already are." },
      { label: "Launch with structure", body: "Pre-launch, launch week, post-launch. A sequenced approach that builds momentum rather than burning it in one announcement." },
      { label: "Measure what matters", body: "Not vanity metrics. Real signals: who came back, who shared it, who paid, who cared. Data as a compass, not a trophy." },
    ]
  },
  {
    number: "03",
    phase: "Expand",
    title: "Scale with Intention",
    tagline: "Growth without architecture is just a bigger mess.",
    color: "#5ab49a",
    icon: TrendingUp,
    description: "Phase 03 is the hardest phase — and the most important. It's where most ventures collapse under their own weight. The Armory provides the frameworks, mentors, and operational architecture to grow without losing the thing that made it worth building.",
    steps: [
      { label: "Systemize operations", body: "Document, delegate, automate. Build a version of your product that runs without you being in every decision — because at scale, you cannot be." },
      { label: "Expand the team", body: "Who do you need next? Not who's available — who's right. The Armory connects builders to a network of aligned talent across disciplines." },
      { label: "Model the economics", body: "Sustainable growth requires economic architecture. Revenue models, unit economics, cap table thinking — translated into human language, not finance jargon." },
      { label: "Reinvest in mission", body: "Leone University's standard: every expanded enterprise should be more aligned with its original purpose at scale than it was at its founding. Growth should deepen, not dilute." },
    ]
  }
];

const tools = [
  { name: "Base44", category: "Build", description: "Full-stack AI app builder. Ship production-ready software in hours.", status: "Partner", color: "#c8a45a" },
  { name: "Lovable", category: "Build", description: "AI-first product studio. Design and deploy with natural language.", status: "Exploring", color: "#c8a45a" },
  { name: "Webflow", category: "Design", description: "Visual development for professional web products and marketing.", status: "Integrated", color: "#5a8ab4" },
  { name: "Figma", category: "Design", description: "Collaborative interface design for any scale of product.", status: "Integrated", color: "#5a8ab4" },
  { name: "Stripe", category: "Revenue", description: "Global payments infrastructure. From first dollar to nine figures.", status: "Integrated", color: "#5ab49a" },
  { name: "Notion", category: "Operations", description: "Workspace for documents, databases, wikis, and team coordination.", status: "Integrated", color: "#8a8ab4" },
];

const stats = [
  { value: "3", label: "Phases", sub: "Forge · Signal · Expand" },
  { value: "∞", label: "Ideas Available", sub: "From IntelOasis" },
  { value: "2026", label: "Opening", sub: "With Leone's founding" },
];

function PhaseCard({ phase, index }) {
  const [open, setOpen] = useState(index === 0);
  const Icon = phase.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className="relative rounded-3xl border overflow-hidden transition-all duration-500"
      style={{ borderColor: open ? `${phase.color}25` : 'rgba(255,255,255,0.05)' }}
    >
      <div className="absolute inset-0 bg-white/[0.012]" />
      {open && (
        <div className="absolute top-0 left-0 bottom-0 w-[3px] rounded-l-3xl"
          style={{ background: `linear-gradient(to bottom, ${phase.color}, ${phase.color}30)` }} />
      )}

      <button
        className="relative w-full text-left p-8 md:p-10 flex items-start gap-6"
        onClick={() => setOpen(!open)}
      >
        <div className="flex-shrink-0">
          <div className="w-14 h-14 rounded-2xl flex items-center justify-center"
            style={{ background: `${phase.color}12`, border: `1px solid ${phase.color}25` }}>
            <Icon className="w-6 h-6" style={{ color: phase.color }} strokeWidth={1.5} />
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-3 mb-2">
            <span className="font-display text-5xl font-light leading-none" style={{ color: `${phase.color}15` }}>{phase.number}</span>
            <span className="text-[9px] tracking-[0.4em] uppercase px-2 py-1 rounded-full border"
              style={{ color: phase.color, borderColor: `${phase.color}30`, background: `${phase.color}08` }}>
              Phase {phase.number} · {phase.phase}
            </span>
          </div>
          <h3 className="font-display text-2xl md:text-3xl font-light text-white mb-1.5 leading-snug">{phase.title}</h3>
          <p className="text-sm font-light italic" style={{ color: `${phase.color}60` }}>{phase.tagline}</p>
        </div>
        <ChevronDown className={`w-4 h-4 text-white/20 flex-shrink-0 mt-2 transition-transform duration-500 ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{ duration: 0.45 }}
          className="relative px-8 md:px-10 pb-10"
        >
          <div className="h-px bg-white/[0.04] mb-8 ml-20" />
          <div className="ml-20 space-y-8">
            <p className="text-white/45 leading-relaxed text-base font-light max-w-2xl">{phase.description}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {phase.steps.map((step, i) => (
                <div key={i} className="flex items-start gap-4 p-5 rounded-2xl border border-white/[0.04] bg-white/[0.01]">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-[10px] font-semibold"
                    style={{ background: `${phase.color}15`, color: phase.color }}>
                    {i + 1}
                  </div>
                  <div>
                    <p className="text-white/70 text-sm font-medium mb-1.5">{step.label}</p>
                    <p className="text-white/28 text-xs leading-relaxed font-light">{step.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}

export default function Armory() {
  return (
    <div className="min-h-screen">

      {/* Hero */}
      <section className="relative pt-44 pb-28 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#07070d] via-[#0f0a07] to-[#07070d]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[700px] rounded-full"
            style={{ background: "radial-gradient(ellipse, rgba(200,164,90,0.07) 0%, transparent 65%)" }} />
          <div className="absolute bottom-0 left-1/4 w-[600px] h-[400px] rounded-full"
            style={{ background: "radial-gradient(ellipse, rgba(200,100,50,0.03) 0%, transparent 70%)" }} />
          <div className="absolute inset-0 opacity-[0.012]"
            style={{ backgroundImage: "linear-gradient(rgba(200,164,90,1) 1px, transparent 1px), linear-gradient(90deg, rgba(200,164,90,1) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        </div>

        <div className="relative max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-3 mb-8">
              <div className="h-px w-8 bg-[var(--gold)]/30" />
              <span className="text-[10px] tracking-[0.4em] uppercase text-[var(--gold)]/60">A Leone University Workshop · Opening 2026</span>
              <div className="h-px w-8 bg-[var(--gold)]/30" />
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.15 }}>
            <h1 className="font-display font-light text-7xl md:text-[9rem] text-white leading-[0.85] mb-8">
              The<br /><span className="italic text-[var(--gold)]">Armory</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-white/40 text-lg md:text-xl leading-relaxed max-w-3xl font-light mb-5"
          >
            The Armory is Leone University's builder workshop — the place where ideas stop being ideas 
            and start being real. Take an idea from IntelOasis, or bring your own. 
            Then build it, launch it, and grow it into something the world can use.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.55 }}
            className="text-white/20 text-base leading-relaxed max-w-2xl font-light mb-12 italic font-display"
          >
            "Ideas held too long in the mind become prisons. The Armory is where they get out."
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 flex-wrap"
          >
            <Link
              to={createPageUrl("IntelOasis")}
              className="group inline-flex items-center gap-3 px-8 py-4 gold-gradient-bg text-[#07070d] font-semibold text-[11px] tracking-[0.2em] uppercase rounded-full hover:shadow-[0_0_60px_rgba(200,164,90,0.25)] transition-all duration-500 shine"
            >
              <Lightbulb className="w-3.5 h-3.5" />
              <span>Browse Ideas</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <div className="inline-flex items-center gap-3 px-6 py-3.5 border border-[var(--gold)]/15 text-[var(--gold)]/40 text-[11px] tracking-[0.2em] uppercase rounded-full font-light cursor-default select-none">
              <div className="w-1.5 h-1.5 rounded-full bg-amber-400/40 animate-pulse" />
              Opening with Leone's 2026 founding
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="grid grid-cols-3 gap-4 max-w-sm mt-16"
          >
            {stats.map(s => (
              <div key={s.label} className="text-center p-4 rounded-xl border border-white/[0.05] bg-white/[0.01]">
                <div className="font-display text-2xl text-[var(--gold)] font-light">{s.value}</div>
                <div className="text-[9px] tracking-[0.2em] uppercase text-white/25 mt-1">{s.label}</div>
                <div className="text-[8px] text-white/15 mt-0.5">{s.sub}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* What the Armory Is */}
      <section className="py-20 px-6 border-t border-white/[0.04]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="h-px w-8 bg-[var(--gold)]/30" />
                <span className="text-[10px] tracking-[0.4em] uppercase text-[var(--gold)]/60">The Workshop</span>
              </div>
              <h2 className="font-display font-light text-4xl md:text-5xl text-white mb-6 leading-tight">
                Not an accelerator.<br />
                <span className="italic text-[var(--gold)]">A forge.</span>
              </h2>
              <div className="space-y-5 text-white/35 text-sm leading-[1.9] font-light">
                <p>Accelerators take existing companies and speed them up. The Armory does something different — it takes raw ideas and turns them into companies in the first place. It is a workshop for people who have never built anything before, and for those who have built many things and want to build their most important one.</p>
                <p>The Armory is partnered with the best AI-powered building platforms on the market. You do not need to be an engineer. You do not need a co-founder. You do not need capital to begin. You need an idea, the will to act on it, and the discipline to follow the process.</p>
                <p>Every product built through the Armory is tracked. When it achieves impact, that impact propagates back to IntelOasis — demonstrating that an idea moved from blueprint to reality. This is how we measure ourselves.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-3xl border border-white/[0.06] bg-white/[0.012] p-10 overflow-hidden">
                <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at top right, rgba(200,164,90,0.04) 0%, transparent 60%)" }} />
                <div className="relative space-y-4">
                  {[
                    { icon: Lightbulb, label: "Start with an idea", sub: "Yours, or one from IntelOasis", color: "#c8a45a" },
                    { icon: Hammer, label: "Forge it into a product", sub: "AI tools + builder partners", color: "#c8a45a" },
                    { icon: Megaphone, label: "Signal to the world", sub: "Marketing architecture & launch", color: "#8a5ab4" },
                    { icon: TrendingUp, label: "Expand with intention", sub: "Scale without losing the mission", color: "#5ab49a" },
                    { icon: Globe2, label: "Impact tracked globally", sub: "Via IntelOasis impact layer", color: "#5a8ab4" },
                  ].map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <div key={i} className="flex items-center gap-4">
                        {i < 4 && (
                          <div className="absolute left-[39px] mt-14 w-px h-10 bg-gradient-to-b from-white/10 to-transparent" style={{ top: `${i * 72 + 56}px` }} />
                        )}
                        <div className="relative z-10 w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                          style={{ background: `${item.color}12`, border: `1px solid ${item.color}25` }}>
                          <Icon className="w-4 h-4" style={{ color: item.color }} strokeWidth={1.5} />
                        </div>
                        <div>
                          <p className="text-white/70 text-sm font-medium">{item.label}</p>
                          <p className="text-white/25 text-xs font-light">{item.sub}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Three Phases */}
      <section className="py-20 px-6 border-t border-white/[0.04]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-14"
          >
            <div className="inline-flex items-center gap-3 mb-5">
              <div className="h-px w-8 bg-[var(--gold)]/30" />
              <span className="text-[10px] tracking-[0.4em] uppercase text-[var(--gold)]/60">The Process</span>
              <div className="h-px w-8 bg-[var(--gold)]/30" />
            </div>
            <h2 className="font-display font-light text-4xl md:text-6xl text-white mb-4">
              Three phases.<br /><span className="italic text-[var(--gold)]">One complete arc.</span>
            </h2>
            <p className="text-white/30 font-light max-w-xl mx-auto">
              The Armory does not hand you a fish. It teaches the full craft — from the first line of code to the first paying customer to the systems that make it last.
            </p>
          </motion.div>

          <div className="space-y-4">
            {phases.map((phase, i) => (
              <PhaseCard key={phase.number} phase={phase} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Builder Partners */}
      <section className="py-20 px-6 border-t border-white/[0.04]">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-14"
          >
            <div className="inline-flex items-center gap-3 mb-5">
              <div className="h-px w-8 bg-[var(--gold)]/30" />
              <span className="text-[10px] tracking-[0.4em] uppercase text-[var(--gold)]/60">Builder Toolkit</span>
              <div className="h-px w-8 bg-[var(--gold)]/30" />
            </div>
            <h2 className="font-display font-light text-4xl md:text-5xl text-white mb-4">
              The tools we trust<br /><span className="italic text-[var(--gold)]">to build with.</span>
            </h2>
            <p className="text-white/30 text-sm font-light max-w-xl mx-auto">
              The Armory does not build its own tools. We partner with the best — and integrate them into a cohesive builder experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {tools.map((tool, i) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="group p-6 rounded-2xl border border-white/[0.05] bg-white/[0.012] hover:border-[var(--gold)]/15 hover:bg-[var(--gold)]/[0.015] transition-all duration-500"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-white/80 font-semibold text-lg">{tool.name}</h3>
                    <span className="text-[9px] tracking-[0.3em] uppercase text-[var(--gold)]/40">{tool.category}</span>
                  </div>
                  <span className="text-[8px] tracking-[0.25em] uppercase px-2 py-1 rounded-full border"
                    style={{ color: tool.status === "Partner" ? "#c8a45a" : tool.status === "Exploring" ? "#8a5ab4" : "rgba(255,255,255,0.3)", borderColor: tool.status === "Partner" ? "#c8a45a30" : "rgba(255,255,255,0.06)" }}>
                    {tool.status}
                  </span>
                </div>
                <p className="text-white/30 text-sm leading-relaxed font-light">{tool.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center text-white/18 text-xs mt-8 font-light tracking-wide"
          >
            Partner list expands before 2026 launch. We select on quality of outcome, not commercial arrangement.
          </motion.p>
        </div>
      </section>

      {/* The Philosophy */}
      <section className="py-20 px-6 border-t border-white/[0.04]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative p-12 md:p-16 rounded-3xl border border-white/[0.04] overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#0d0d1f] via-[#07070d] to-[#0d0d1f]" />
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-[0.03]"
              style={{ background: "radial-gradient(circle, #c8a45a, transparent 70%)" }} />
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <div className="inline-flex items-center gap-3 mb-6">
                  <div className="h-px w-8 bg-[var(--gold)]/30" />
                  <span className="text-[10px] tracking-[0.4em] uppercase text-[var(--gold)]/50">Why This Exists</span>
                </div>
                <p className="font-display text-3xl md:text-4xl italic text-white/70 leading-tight mb-4">
                  "The world is not short on ideas. It is short on people willing to embarrass themselves building the first version."
                </p>
                <p className="text-[10px] tracking-[0.3em] uppercase text-[var(--gold)]/25">The Armory · Founding Philosophy</p>
              </div>
              <div className="space-y-5 text-white/30 text-sm font-light leading-relaxed">
                <p>The gap between insight and impact is not intelligence. It is infrastructure. People with extraordinary minds fail not because their ideas are wrong — but because they have never been given the tools, the framework, or the permission to build.</p>
                <p>The Armory is infrastructure for that gap. It is the technical workshop, the marketing architecture, the operational framework, and the partner network that turns Leone University's most capable thinkers into the world's most purposeful builders.</p>
                <p>Every civilization needs its builders. This is how we make more of them.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="py-20 px-6 border-t border-white/[0.04]">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-14"
          >
            <h2 className="font-display font-light text-4xl md:text-5xl text-white mb-4">
              Who belongs<br /><span className="italic text-[var(--gold)]">in the Armory.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                icon: Lightbulb,
                title: "The First-Time Builder",
                body: "You have an idea you've held for years. You don't know how to build, code, or market. You need someone to hand you the tools and walk you through every step. The Armory was designed for you first.",
                color: "#c8a45a"
              },
              {
                icon: Wrench,
                title: "The Technical Builder",
                body: "You can build anything. But you've noticed that what you build doesn't find the people who need it. The Armory gives you the narrative architecture and marketing systems your technical instincts alone cannot provide.",
                color: "#8a5ab4"
              },
              {
                icon: Rocket,
                title: "The Seasoned Founder",
                body: "You've built before. Now you want to build something that matters — something aligned with a larger purpose, not just a larger valuation. Leone University's ideas library and mission framework give that context.",
                color: "#5ab49a"
              },
            ].map((card, i) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="p-8 rounded-2xl border border-white/[0.05] bg-white/[0.012] hover:border-white/10 transition-all duration-500 group"
                >
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6"
                    style={{ background: `${card.color}12`, border: `1px solid ${card.color}25` }}>
                    <Icon className="w-5 h-5" style={{ color: card.color }} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-white/75 font-medium text-base mb-3">{card.title}</h3>
                  <p className="text-white/30 text-sm leading-relaxed font-light">{card.body}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 px-6 border-t border-white/[0.04]">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-3 mb-8">
              <div className="h-px w-8 bg-[var(--gold)]/30" />
              <span className="text-[10px] tracking-[0.4em] uppercase text-[var(--gold)]/60">Opening 2026</span>
              <div className="h-px w-8 bg-[var(--gold)]/30" />
            </div>
            <h2 className="font-display font-light text-5xl md:text-6xl text-white mb-6">
              Your idea is<br /><span className="italic text-[var(--gold)]">waiting to exist.</span>
            </h2>
            <p className="text-white/30 text-base font-light mb-12 max-w-xl mx-auto">
              The Armory opens alongside Leone University's founding year. 
              In the meantime — the ideas are already in IntelOasis. Ready for whoever arrives first.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to={createPageUrl("IntelOasis")}
                className="group inline-flex items-center gap-3 px-10 py-5 gold-gradient-bg text-[#07070d] font-semibold text-[11px] tracking-[0.2em] uppercase rounded-full hover:shadow-[0_0_80px_rgba(200,164,90,0.25)] transition-all duration-500 shine"
              >
                <Lightbulb className="w-4 h-4" />
                Browse Ideas First
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to={createPageUrl("Admissions")}
                className="group inline-flex items-center gap-3 px-8 py-4 border border-white/10 text-white/40 text-[11px] tracking-[0.2em] uppercase rounded-full hover:border-[var(--gold)]/25 hover:text-white/70 transition-all duration-500"
              >
                Apply to Leone
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}