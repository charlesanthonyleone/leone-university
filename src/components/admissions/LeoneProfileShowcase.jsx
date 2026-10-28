import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RadarChart, Radar, PolarGrid, PolarAngleAxis, ResponsiveContainer } from "recharts";
import {
  Users, Heart, Scale, Globe, Brain, BookOpen,
  TrendingUp, ArrowRight, ChevronRight, Zap, Target,
  Award, Eye, Layers, GitBranch, Compass, Star
} from "lucide-react";

const profiles = [
  {
    archetype: "The Frontier Builder",
    code: "LU-2031-FSB-004",
    classification: "Frontier Synthesizer · Builder Topology",
    color: "#c8a45a",
    colorDim: "#c8a45a22",
    tagline: "Solitary in depth. Explosive in impact. Indifferent to consensus.",
    summary: "You build systems that didn't exist before. You work alone at the frontier and drag others into futures they couldn't see. Your moral engine is utilitarian at civilizational scale — you'll sacrifice comfort for leverage. You don't care about being understood in the moment. You care about being right in a decade.",
    currentSelf: "High autonomy drive. Difficulty sustaining institutional loyalty. Moral reasoning skews consequentialist. Occasionally impatient with consensus processes. Cognitive style: pattern-first, execution second. Deep focus capacity. Low social energy, high social impact.",
    aspirationalSelf: "A builder who has learned to hold space for others without losing speed. Moral architecture that integrates care without abandoning scale. A person who moves fast and still notices who gets left behind — and does something about it.",
    growthGap: "Significant — oriented toward integration of relational intelligence with structural ambition.",
    radar: [
      { dim: "Identity", current: 82, aspirational: 88 },
      { dim: "Moral", current: 61, aspirational: 85 },
      { dim: "EQ", current: 54, aspirational: 79 },
      { dim: "Global", current: 91, aspirational: 95 },
      { dim: "Cognitive", current: 94, aspirational: 97 },
      { dim: "Growth", current: 78, aspirational: 96 },
    ],
    dimensions: [
      { label: "Social Topology", value: "Solitary Builder", score: 82, note: "Deep focus. Low bandwidth. High output." },
      { label: "Moral Framework", value: "Systemic Consequentialist", score: 61, note: "Outcomes at scale. Individual case tension." },
      { label: "Emotional Precision", value: "Analytical Processor", score: 54, note: "High self-awareness. Low spontaneous expression." },
      { label: "Historical Pattern Recognition", value: "Exceptional", score: 91, note: "Top 8th percentile of all applicants." },
      { label: "Cognitive Architecture", value: "Systems-First Reasoner", score: 94, note: "Fluid intelligence in top decile." },
      { label: "Growth Vector", value: "High Aspirational Tension", score: 78, note: "Gap: relational EQ & moral integration." },
    ],
    traits: ["High Autonomy", "Pattern Synthesizer", "Consequentialist", "Frontier Orientation", "Cognitive Precision", "Low Conformity"],
    degrees: [
      { name: "Emergence & Complex Systems Genesis", fit: 97, reason: "Your cognitive architecture is built for emergence. You see second-order effects most people miss entirely." },
      { name: "Temporal Engineering", fit: 91, reason: "You think in decades naturally. This field needs people who build for time horizons institutions can't hold." },
      { name: "Memetic Dynamics & Narrative Systems", fit: 84, reason: "Your global pattern recognition maps perfectly onto how information spreads and reshapes civilizations." },
    ],
    cohortStats: { percentile: 94, rarity: "3.2% of applicants", closestHistorical: "Tesla, Von Neumann, Buckminster Fuller archetype" },
    insight: "The gap between your current and aspirational moral score is the most interesting signal in your profile. It isn't a weakness — it's awareness. You already know what you haven't built yet. That self-knowledge is rarer than the cognitive score above it."
  },
  {
    archetype: "The Civilizational Steward",
    code: "LU-2031-CRS-017",
    classification: "Care-Integrated Systems Thinker · Network Topology",
    color: "#5ab49a",
    colorDim: "#5ab49a22",
    tagline: "You hold what others drop. You carry what others can't see they're carrying.",
    summary: "You think in generations. Your sense of obligation extends across time — to people who aren't born yet, to systems being built or broken right now that will outlast everyone in this room. Your emotional precision is exceptional. You don't just feel things accurately — you use that accuracy to navigate human systems with unusual grace.",
    currentSelf: "Network-oriented. High interpersonal attunement. Moral framework weighted toward care and intergenerational obligation. Moderate risk tolerance. Tendency toward over-responsibility — absorbing the emotional load of rooms. Deep historical awareness. Strong qualitative synthesis.",
    aspirationalSelf: "A steward with firmer boundaries and a sharper strategic edge. The ability to hold the long-term without being paralyzed by it. Someone who can say hard things with warmth intact.",
    growthGap: "Moderate — primarily around boundary architecture and strategic decisiveness.",
    radar: [
      { dim: "Identity", current: 76, aspirational: 84 },
      { dim: "Moral", current: 92, aspirational: 96 },
      { dim: "EQ", current: 89, aspirational: 93 },
      { dim: "Global", current: 85, aspirational: 91 },
      { dim: "Cognitive", current: 72, aspirational: 80 },
      { dim: "Growth", current: 68, aspirational: 88 },
    ],
    dimensions: [
      { label: "Social Topology", value: "Network Weaver", score: 76, note: "Energy from connection. Systems from relationships." },
      { label: "Moral Framework", value: "Care-Integrated Justice", score: 92, note: "Intergenerational obligation. Highest moral coherence tier." },
      { label: "Emotional Precision", value: "Somatic Integrator", score: 89, note: "High attunement. Risk: over-absorption." },
      { label: "Historical Pattern Recognition", value: "Deep Contextualizer", score: 85, note: "Qualitative synthesis dominant." },
      { label: "Cognitive Architecture", value: "Narrative-Systems Reasoner", score: 72, note: "Strong in complex qualitative domains." },
      { label: "Growth Vector", value: "Moderate Aspirational Tension", score: 68, note: "Gap: strategic decisiveness & boundary architecture." },
    ],
    traits: ["Network Weaver", "Care-Ethics Dominant", "Intergenerational Thinking", "Emotional Precision", "Systems Empathy", "Historical Depth"],
    degrees: [
      { name: "Adaptive Governance & Predictive Ethics", fit: 96, reason: "Your moral architecture is exactly what governance systems in transition need. You think about who gets left behind by default." },
      { name: "Planetary Systems Maintenance", fit: 88, reason: "You operate at civilizational timescale. This field is about maintaining the infrastructure of the world — not building new things, building what endures." },
      { name: "Consciousness Systems", fit: 82, reason: "Your emotional precision and care architecture point toward understanding the systems that produce human experience itself." },
    ],
    cohortStats: { percentile: 89, rarity: "5.1% of applicants", closestHistorical: "Eleanor Roosevelt, Nelson Mandela, Elinor Ostrom archetype" },
    insight: "Your moral coherence score is among the highest we've recorded. The area to watch is the gap between your EQ score and your strategic decisiveness. You feel the room better than almost anyone — but feeling the room isn't the same as changing it. That's the frontier you're heading toward."
  },
  {
    archetype: "The Sovereign Technician",
    code: "LU-2031-SVT-029",
    classification: "Applied Pragmatist · Independent Topology",
    color: "#5a8ab4",
    colorDim: "#5a8ab422",
    tagline: "You trust what works. You build what lasts. You answer to earned respect and nothing else.",
    summary: "You are the rarest kind of thinker: someone who can hold an abstract system in their head and build a physical instantiation of it without losing fidelity in translation. Your pragmatism isn't cynicism — it's precision. You don't moralize. You solve. Your moral architecture is grounded in personal accountability and earned trust, which makes you nearly immune to institutional capture.",
    currentSelf: "Highly independent. Pragmatic dominant. Moral framework: personal accountability, earned trust, reciprocity. Applied intelligence significantly dominant over theoretical. Strong quantitative competency. Low tolerance for bureaucratic friction. Exceptional at diagnosing systems. Occasionally isolated by preference.",
    aspirationalSelf: "A technician who has developed a longer horizon. Who can see not just what's broken but what the breaking means. Who has built the relational vocabulary to bring others into the precision they carry.",
    growthGap: "Moderate — oriented toward temporal scale-thinking and collaborative translation.",
    radar: [
      { dim: "Identity", current: 88, aspirational: 90 },
      { dim: "Moral", current: 74, aspirational: 82 },
      { dim: "EQ", current: 63, aspirational: 76 },
      { dim: "Global", current: 79, aspirational: 88 },
      { dim: "Cognitive", current: 96, aspirational: 98 },
      { dim: "Growth", current: 60, aspirational: 82 },
    ],
    dimensions: [
      { label: "Social Topology", value: "Sovereign Independent", score: 88, note: "Self-organizing. Answers to earned respect." },
      { label: "Moral Framework", value: "Accountability & Reciprocity", score: 74, note: "Personal ethics dominant. Immune to capture." },
      { label: "Emotional Precision", value: "Functional Processor", score: 63, note: "High internal clarity. Interpersonal translation gap." },
      { label: "Historical Pattern Recognition", value: "Applied Analogist", score: 79, note: "Strong technical history. Systems-failure literacy." },
      { label: "Cognitive Architecture", value: "Precision Systems Reasoner", score: 96, note: "Quantitative fluid intelligence in top 4%." },
      { label: "Growth Vector", value: "Focused Aspirational Tension", score: 60, note: "Gap: temporal horizon & collaborative translation." },
    ],
    traits: ["Radical Independence", "Applied Pragmatism", "Quantitative Dominant", "Accountability Ethics", "Systems Diagnostics", "Anti-Capture"],
    degrees: [
      { name: "Civilizational Resilience Engineering", fit: 95, reason: "You build what holds. This field needs people who can design systems that survive centuries — not just quarters." },
      { name: "Integrated Bio-Mechanical Design", fit: 89, reason: "Your precision cognition and applied intelligence translate directly into the hardest design problems at the intersection of biology and engineering." },
      { name: "Digital Archaeology & Civilizational Memory", fit: 78, reason: "Your systems-failure literacy and applied precision make you unusually suited to understanding what broke and why." },
    ],
    cohortStats: { percentile: 91, rarity: "4.4% of applicants", closestHistorical: "Nikola Tesla, Richard Feynman, Grace Hopper archetype" },
    insight: "Your cognitive score is the second-highest in this cohort sample. The most interesting part of your profile isn't the peak — it's the growth gap on temporal horizon. You build things that last decades. But you tend to think in years. The aspirational version of you already knows this. That awareness is where the next level begins."
  },
  {
    archetype: "The Narrative Architect",
    code: "LU-2031-NAR-041",
    classification: "Mobilization Catalyst · Collective Topology",
    color: "#b45a7a",
    colorDim: "#b45a7a22",
    tagline: "You make people believe in things that don't exist yet — and then they do.",
    summary: "You understand that the world runs on stories before it runs on systems. Every policy, every movement, every institution that ever changed the course of history was first a narrative that enough people believed. You don't just communicate — you architect belief. Your moral framework integrates care with systemic application: you want everyone in the room, and you want the room to matter.",
    currentSelf: "Collective mobilizer topology. High EQ and emotional precision. Moral framework: care with systemic range. Exceptional cultural pattern recognition. Persuasion-oriented cognition. Natural translator between worlds — between technical and accessible, between now and possible.",
    aspirationalSelf: "A narrative architect who has learned to protect their own signal from the noise of constant translation. Who can disappear into depth when needed. Who has developed enough solitude to hear what they actually think — not just what the room needs.",
    growthGap: "Moderate — oriented toward solitude capacity, signal protection, and independent depth.",
    radar: [
      { dim: "Identity", current: 85, aspirational: 87 },
      { dim: "Moral", current: 88, aspirational: 94 },
      { dim: "EQ", current: 93, aspirational: 95 },
      { dim: "Global", current: 87, aspirational: 93 },
      { dim: "Cognitive", current: 74, aspirational: 84 },
      { dim: "Growth", current: 71, aspirational: 90 },
    ],
    dimensions: [
      { label: "Social Topology", value: "Collective Mobilizer", score: 85, note: "Systems built through relationships." },
      { label: "Moral Framework", value: "Care-Systemic Integration", score: 88, note: "Everyone in the room. The room must matter." },
      { label: "Emotional Precision", value: "Somatic Synthesizer", score: 93, note: "Reads rooms. Translates between worlds." },
      { label: "Historical Pattern Recognition", value: "Cultural Pattern Reader", score: 87, note: "Exceptional narrative-arc recognition." },
      { label: "Cognitive Architecture", value: "Analogical-Narrative Reasoner", score: 74, note: "Synthesis dominant. Translation fluency." },
      { label: "Growth Vector", value: "Deep Aspirational Tension", score: 71, note: "Gap: solitude capacity & independent depth." },
    ],
    traits: ["Collective Mobilizer", "Belief Architect", "Cultural Translator", "Care-Systemic Ethics", "Narrative Pattern Recognition", "Emotional Precision"],
    degrees: [
      { name: "Memetic Dynamics & Narrative Systems", fit: 97, reason: "This is your native domain. You already think in memetics — you just didn't have the vocabulary. Now you will." },
      { name: "Symbiotic Economic Systems", fit: 86, reason: "Economic systems are narratives with enforcement mechanisms. Your ability to see and shape belief makes you exceptional at redesigning economic participation." },
      { name: "Adaptive Governance & Predictive Ethics", fit: 83, reason: "Governance lives or dies on legitimacy. Legitimacy is narrative. You understand this intuitively — this degree gives you the structural scaffolding." },
    ],
    cohortStats: { percentile: 87, rarity: "6.3% of applicants", closestHistorical: "Frederick Douglass, Hannah Arendt, James Baldwin archetype" },
    insight: "Your EQ score is the highest in this cohort sample — which makes your growth gap more significant, not less. The version of you that disappears into solitude for a year and comes back with something only you could have said — that's the frontier. The room will always pull. Learning when not to answer is the rarest skill in your topology."
  }
];

function DimensionBar({ label, value, score, note, color }) {
  return (
    <div className="space-y-1.5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-[9px] tracking-[0.25em] uppercase text-white/25 mb-0.5">{label}</div>
          <div className="text-xs text-white/60 font-medium">{value}</div>
        </div>
        <div className="text-right flex-shrink-0">
          <div className="font-display text-xl font-light" style={{ color }}>{score}</div>
          <div className="text-[8px] text-white/20">/ 100</div>
        </div>
      </div>
      <div className="h-[2px] bg-white/[0.05] rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${score}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${color}60, ${color})` }}
        />
      </div>
      <div className="text-[9px] text-white/20 font-light italic">{note}</div>
    </div>
  );
}

function DualBar({ dim, color }) {
  return (
    <div className="space-y-1">
      <div className="flex items-center justify-between">
        <span className="text-[9px] tracking-[0.15em] uppercase text-white/25">{dim.dim}</span>
        <div className="flex items-center gap-3 text-[9px]">
          <span style={{ color: `${color}90` }}>{dim.current}</span>
          <span className="text-white/15">→</span>
          <span className="text-white/50">{dim.aspirational}</span>
        </div>
      </div>
      <div className="relative h-[3px] bg-white/[0.04] rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${dim.current}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute h-full rounded-full"
          style={{ background: `${color}50` }}
        />
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${dim.aspirational}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.3, ease: "easeOut", delay: 0.2 }}
          className="absolute h-[1px] top-1 rounded-full"
          style={{ background: `${color}30` }}
        />
      </div>
    </div>
  );
}

export default function LeoneProfileShowcase() {
  const [active, setActive] = useState(0);
  const prof = profiles[active];

  return (
    <section className="py-32 px-6 border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 max-w-3xl"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-[var(--gold)]/30" />
            <span className="text-[10px] tracking-[0.4em] uppercase text-[var(--gold)]/60">What You Receive</span>
          </div>
          <h2 className="font-display font-light text-5xl md:text-6xl text-white mb-6 leading-[0.95]">
            The <span className="italic text-[var(--gold)]">Leone Profile.</span>
          </h2>
          <p className="text-white/35 text-base leading-relaxed font-light mb-4">
            This is not a score. It is not a ranking. It is a document that will be more useful to you than most degrees — 
            a complete map of who you are, who you're becoming, and exactly where in the world your mind has the most leverage.
          </p>
          <p className="text-white/20 text-sm leading-relaxed font-light">
            Hand it to a future collaborator. Hand it to a mentor. Hand it to a hiring committee. 
            What they'll hold is more precise than a CV, more honest than an interview, 
            and more revealing than anything a transcript could contain.
          </p>
        </motion.div>

        {/* Profile Selector Tabs */}
        <div className="flex flex-wrap gap-3 mb-12">
          {profiles.map((p, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`px-5 py-2.5 rounded-full text-[10px] tracking-[0.2em] uppercase transition-all duration-400 border ${
                active === i
                  ? "border-transparent text-[#07070d] font-semibold"
                  : "border-white/[0.07] text-white/35 hover:text-white/60 hover:border-white/15"
              }`}
              style={active === i ? { background: p.color } : {}}
            >
              {p.archetype}
            </button>
          ))}
        </div>

        {/* Main Profile Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.5 }}
          >
            {/* Top band */}
            <div
              className="rounded-3xl p-8 md:p-12 mb-4 relative overflow-hidden"
              style={{ background: `linear-gradient(135deg, ${prof.color}12 0%, ${prof.colorDim} 50%, transparent 80%)`, border: `1px solid ${prof.color}20` }}
            >
              <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-10"
                style={{ background: `radial-gradient(circle, ${prof.color} 0%, transparent 65%)`, transform: "translate(30%, -30%)" }} />

              <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                {/* Left: Identity */}
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-[9px] tracking-[0.35em] uppercase px-3 py-1.5 rounded-full font-mono"
                      style={{ color: prof.color, background: `${prof.color}15`, border: `1px solid ${prof.color}30` }}>
                      {prof.code}
                    </span>
                    <span className="text-[9px] tracking-[0.2em] uppercase text-white/20">{prof.classification}</span>
                  </div>

                  <h3 className="font-display text-4xl md:text-5xl font-light text-white mb-3 leading-tight">
                    {prof.archetype}
                  </h3>
                  <p className="text-sm italic mb-6 font-light" style={{ color: `${prof.color}90` }}>
                    "{prof.tagline}"
                  </p>
                  <p className="text-white/45 text-sm leading-relaxed font-light mb-8">
                    {prof.summary}
                  </p>

                  {/* Traits */}
                  <div className="flex flex-wrap gap-2">
                    {prof.traits.map(t => (
                      <span key={t} className="text-[9px] tracking-[0.15em] uppercase px-2.5 py-1 rounded-full text-white/35 border border-white/[0.07]">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right: Cohort Stats + Radar */}
                <div className="space-y-6">
                  {/* Stats row */}
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { label: "Percentile", value: `${prof.cohortStats.percentile}th` },
                      { label: "Rarity", value: prof.cohortStats.rarity },
                      { label: "Growth Gap", value: prof.growthGap.split(" — ")[0] },
                    ].map((s, i) => (
                      <div key={i} className="p-4 rounded-xl text-center"
                        style={{ background: `${prof.color}08`, border: `1px solid ${prof.color}15` }}>
                        <div className="font-display text-lg font-light mb-1" style={{ color: prof.color }}>{s.value}</div>
                        <div className="text-[8px] tracking-[0.2em] uppercase text-white/25">{s.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Dual-bar dimension chart */}
                  <div className="p-5 rounded-2xl border border-white/[0.05] bg-white/[0.01] space-y-3">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[9px] tracking-[0.3em] uppercase text-white/20">Dimension Map</span>
                      <div className="flex items-center gap-4 text-[8px] tracking-[0.15em] uppercase">
                        <span className="flex items-center gap-1.5">
                          <span className="w-3 h-[2px] rounded-full inline-block" style={{ background: `${prof.color}80` }} />
                          <span style={{ color: `${prof.color}70` }}>Current</span>
                        </span>
                        <span className="flex items-center gap-1.5">
                          <span className="w-3 h-[1px] rounded-full inline-block bg-white/20" />
                          <span className="text-white/30">Aspirational</span>
                        </span>
                      </div>
                    </div>
                    {prof.radar.map(r => (
                      <DualBar key={r.dim} dim={r} color={prof.color} />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Three-column detail row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">

              {/* Who you are now */}
              <div className="p-7 rounded-2xl border border-white/[0.05] bg-white/[0.01]">
                <div className="flex items-center gap-2 mb-5">
                  <Eye className="w-3.5 h-3.5" style={{ color: `${prof.color}70` }} strokeWidth={1.5} />
                  <span className="text-[9px] tracking-[0.3em] uppercase" style={{ color: `${prof.color}50` }}>Who You Are Now</span>
                </div>
                <p className="text-white/40 text-xs leading-relaxed font-light">{prof.currentSelf}</p>
              </div>

              {/* Who you're becoming */}
              <div className="p-7 rounded-2xl border border-white/[0.05] bg-white/[0.01]">
                <div className="flex items-center gap-2 mb-5">
                  <Compass className="w-3.5 h-3.5" style={{ color: `${prof.color}70` }} strokeWidth={1.5} />
                  <span className="text-[9px] tracking-[0.3em] uppercase" style={{ color: `${prof.color}50` }}>Who You're Becoming</span>
                </div>
                <p className="text-white/40 text-xs leading-relaxed font-light">{prof.aspirationalSelf}</p>
              </div>

              {/* Leone Insight */}
              <div className="p-7 rounded-2xl relative overflow-hidden"
                style={{ background: `${prof.color}06`, border: `1px solid ${prof.color}18` }}>
                <div className="flex items-center gap-2 mb-5">
                  <Zap className="w-3.5 h-3.5" style={{ color: prof.color }} strokeWidth={1.5} />
                  <span className="text-[9px] tracking-[0.3em] uppercase" style={{ color: `${prof.color}70` }}>Leone Insight</span>
                </div>
                <div className="font-display text-2xl mb-3" style={{ color: `${prof.color}20` }}>"</div>
                <p className="font-display text-sm italic leading-relaxed" style={{ color: `${prof.color}80` }}>
                  {prof.insight}
                </p>
              </div>
            </div>

            {/* Dimension Detail + Degree Recommendations */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">

              {/* Six Dimensions Deep Dive */}
              <div className="p-7 rounded-2xl border border-white/[0.05] bg-white/[0.01] space-y-5">
                <div className="flex items-center gap-2 mb-6">
                  <Layers className="w-3.5 h-3.5 text-white/20" strokeWidth={1.5} />
                  <span className="text-[9px] tracking-[0.3em] uppercase text-white/20">Six-Dimension Analysis</span>
                </div>
                {prof.dimensions.map((d, i) => (
                  <DimensionBar key={i} {...d} color={prof.color} />
                ))}
              </div>

              {/* Degree Recommendations */}
              <div className="p-7 rounded-2xl border border-white/[0.05] bg-white/[0.01]">
                <div className="flex items-center gap-2 mb-6">
                  <Target className="w-3.5 h-3.5 text-white/20" strokeWidth={1.5} />
                  <span className="text-[9px] tracking-[0.3em] uppercase text-white/20">Degree Match Analysis</span>
                </div>
                <div className="space-y-5">
                  {prof.degrees.map((deg, i) => (
                    <div key={i} className="group">
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <div className="text-sm text-white/70 font-medium leading-snug flex-1">{deg.name}</div>
                        <div className="flex-shrink-0 text-right">
                          <div className="font-display text-2xl font-light" style={{ color: prof.color }}>{deg.fit}%</div>
                          <div className="text-[8px] text-white/20 uppercase tracking-wider">match</div>
                        </div>
                      </div>
                      <div className="h-[2px] bg-white/[0.04] rounded-full mb-2 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${deg.fit}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, delay: i * 0.15 }}
                          className="h-full rounded-full"
                          style={{ background: `linear-gradient(90deg, ${prof.color}40, ${prof.color})` }}
                        />
                      </div>
                      <p className="text-[10px] text-white/25 leading-relaxed font-light italic">{deg.reason}</p>
                    </div>
                  ))}
                </div>

                {/* Historical Archetype */}
                <div className="mt-8 pt-6 border-t border-white/[0.05]">
                  <div className="flex items-center gap-2 mb-2">
                    <GitBranch className="w-3 h-3 text-white/15" strokeWidth={1.5} />
                    <span className="text-[8px] tracking-[0.25em] uppercase text-white/15">Closest Historical Archetype</span>
                  </div>
                  <p className="text-[10px] text-white/30 font-light italic">{prof.cohortStats.closestHistorical}</p>
                </div>
              </div>
            </div>

            {/* Bottom note */}
            <div className="p-6 rounded-2xl border border-white/[0.04] bg-white/[0.005] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="flex items-start gap-4">
                <Award className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: `${prof.color}50` }} strokeWidth={1.5} />
                <div>
                  <p className="text-white/50 text-xs font-medium mb-1">This profile is a living document.</p>
                  <p className="text-white/20 text-xs leading-relaxed font-light max-w-xl">
                    It evolves. As cohort data accumulates — as we see which profiles produce which outcomes, in which conditions — 
                    your profile gains precision. You may retake elements of the assessment every four years. 
                    The gap between your current and aspirational self will narrow. Or it will deepen in new directions.
                    Either is growth.
                  </p>
                </div>
              </div>
              <div className="flex-shrink-0 text-right">
                <div className="text-[8px] tracking-[0.3em] uppercase text-white/15 mb-1">Profile Confidence</div>
                <div className="font-display text-3xl font-light" style={{ color: prof.color }}>1,000</div>
                <div className="text-[8px] text-white/15 tracking-wider">data points</div>
              </div>
            </div>

          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}