import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Microscope, Globe2, Brain, Cpu, Shield, Radio, Search, Coins, Scale, Leaf, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../utils";

const degrees = [
  {
    id: 1,
    code: "TE-401",
    degree: "B.S.",
    icon: Search,
    color: "#c8a45a",
    title: "Temporal Engineering & Applied Technoarchaeology",
    tagline: "History is the greatest R&D laboratory never funded.",
    domain: "Engineering · History of Technology",
    description: "A discipline dedicated to excavating lost, dormant, and under-evolved technologies from antiquity through early industrial eras and rebuilding them atop modern materials science, computation, and energy systems.",
    detail: "Students study ancient mechanisms, abandoned patents, forgotten war-era prototypes, and suppressed engineering pathways to identify ideas that stalled prematurely — treating history as an untapped R&D laboratory. Graduates prototype updated evolutions of those systems for contemporary civilization, ensuring no viable technological lineage remains buried by time. Imagine if Da Vinci's flying machines met modern aerodynamics. We do that, systematically, across all of history.",
    tracks: ["Ancient Mechanisms & Lost Machines", "Abandoned Patent Archaeology", "Materials Science Bridging", "Prototype Engineering Lab"],
    horizon: "2030+"
  },
  {
    id: 2,
    code: "PS-402",
    degree: "B.S.",
    icon: Leaf,
    color: "#5a8a6a",
    title: "Planetary Systems Maintenance & Ecological Architecture",
    tagline: "Earth is an engineered machine. We train its maintenance crew.",
    domain: "Ecology · Systems Biology · Regenerative Design",
    description: "A rigorous ecological systems degree focused not just on conservation but on active planetary stewardship — teaching students to understand forests, oceans, fungal networks, soil microbiomes, and atmospheric chemistry as components of a living planetary schematic.",
    detail: "Graduates learn to diagnose ecosystem breakdown, design regenerative interventions, and maintain large-scale biospheric stability as if Earth itself were an engineered but living machine requiring continuous calibration. This is not environmentalism. This is planetary engineering with reverence. We don't hug trees — we understand their communications protocols and design interventions that speak their language.",
    tracks: ["Biosphere Systems Analysis", "Regenerative Land Architecture", "Ocean & Atmospheric Mechanics", "Ecological Intervention Design"],
    horizon: "2030+"
  },
  {
    id: 3,
    code: "EC-403",
    degree: "B.S.",
    icon: Radio,
    color: "#8a5ab4",
    title: "Emergence & Complex Systems Genesis",
    tagline: "Learn to design realities that self-organize into greatness.",
    domain: "Complex Systems · Computational Biology · Social Physics",
    description: "A field devoted to studying how simple rules give rise to layered systems — cells to organs, individuals to economies, code to intelligence — analyzing emergence across biology, computation, social organization, and cosmology.",
    detail: "Students model cascading system formation, learn to predict phase shifts, and design architectures that intentionally generate higher-order coherence rather than collapse. Graduates master the science of how new realities self-organize from foundational conditions. Understanding emergence means understanding how to plant the seeds of systems you want to exist — without force, without coercion, through intelligent initial design.",
    tracks: ["Emergence Theory & Modeling", "Social Systems Genesis", "Computational Complexity Labs", "Phase Transition Engineering"],
    horizon: "2030+"
  },
  {
    id: 4,
    code: "CS-404",
    degree: "B.S.",
    icon: Brain,
    color: "#5a7ab4",
    title: "Consciousness Systems & Cognitive Architecture",
    tagline: "Awareness is the most powerful technology ever discovered.",
    domain: "Neuroscience · AI · Philosophy of Mind · Information Theory",
    description: "An interdisciplinary exploration of awareness as an emergent structural phenomenon, integrating neuroscience, AI modeling, philosophy of mind, information theory, and symbolic cognition to study how perception organizes reality.",
    detail: "Students examine individual and collective consciousness as design variables within civilization, building frameworks to measure, influence, and ethically expand cognitive capacity at both human and machine scales. We study consciousness not as mystery but as mechanism — with the same rigor we would apply to any other complex system. How do you design educational systems that expand consciousness? How do you build AI that doesn't hollow it out?",
    tracks: ["Neuroscience of Awareness", "AI Consciousness Modeling", "Collective Cognition Systems", "Ethical Cognitive Design"],
    horizon: "2030+"
  },
  {
    id: 5,
    code: "CR-405",
    degree: "B.Eng.",
    icon: Shield,
    color: "#b45a5a",
    title: "Civilizational Resilience Engineering",
    tagline: "The future's greatest buildings are its backup systems.",
    domain: "Infrastructure · Governance Design · Systems Engineering",
    description: "A forward-looking engineering discipline focused on safeguarding infrastructure, data, supply chains, governance structures, and knowledge continuity against collapse scenarios ranging from cyberwarfare to solar flares.",
    detail: "Students design decentralized backups, adaptive legal frameworks, and fail-safe energy systems to ensure civilization retains continuity through disruption — treating resilience not as reaction but as structural design philosophy. Resilience is not prepping. It is the sophisticated engineering discipline of building systems that cannot fail catastrophically — systems that degrade gracefully, recover rapidly, and improve through disruption rather than despite it.",
    tracks: ["Critical Infrastructure Design", "Distributed Knowledge Systems", "Adaptive Legal Frameworks", "Energy Fail-Safe Architecture"],
    horizon: "2030+"
  },
  {
    id: 6,
    code: "MD-406",
    degree: "B.S.",
    icon: Radio,
    color: "#b48a5a",
    title: "Memetic Dynamics & Narrative Systems Design",
    tagline: "Ideas are organisms. Learn their biology.",
    domain: "Cognitive Science · Semiotics · Data Analytics · Platform Mechanics",
    description: "The scientific study of idea propagation, symbolic compression, and narrative influence across digital and physical populations.",
    detail: "Students analyze how memes, myths, and media architectures shape behavior and policy, then design ethical high-coherence narratives that strengthen social stability rather than fracture it — merging psychology, semiotics, data analytics, and platform mechanics into one cohesive field. The most powerful technology of the 21st century isn't AI. It's the narrative layer that sits above all other technology. This degree trains architects of that layer.",
    tracks: ["Memetic Propagation Theory", "Narrative Architecture Design", "Platform Mechanics & Ethics", "Symbolic Systems Analysis"],
    horizon: "2030+"
  },
  {
    id: 7,
    code: "DA-407",
    degree: "B.S.",
    icon: Search,
    color: "#5a8ab4",
    title: "Digital Archaeology & Information Forensics",
    tagline: "The internet has strata. We teach people to read them.",
    domain: "Information Science · Digital Humanities · Archival Engineering",
    description: "A modern excavation science focused on recovering, authenticating, and reconstructing digital artifacts — early internet archives, lost codebases, deleted forums, metadata trails, blockchain histories.",
    detail: "Students learn data recovery, provenance tracing, cultural signal extraction, and long-term archival engineering to preserve humanity's informational lineage. The digital layer of civilization is the most important archive ever created — and the most fragile. Bit rot, platform death, and corporate deletion are erasing history in real time. This degree produces the archaeologists and conservators of our digital heritage.",
    tracks: ["Data Recovery & Reconstruction", "Digital Provenance Tracing", "Cultural Signal Extraction", "Long-Term Archival Systems"],
    horizon: "2030+"
  },
  {
    id: 8,
    code: "SE-408",
    degree: "B.S.",
    icon: Coins,
    color: "#5ab48a",
    title: "Symbiotic Economic Systems Design",
    tagline: "Economies that exhaust their host die. We build living ones.",
    domain: "Economics · Systems Design · Cooperative Theory",
    description: "A degree centered on constructing regenerative economic models where enterprises operate as living ecosystems rather than extractive machines.",
    detail: "Students study cooperative capital structures, circular resource loops, autopoietic enterprise design, and distributed ownership models to engineer economies that increase systemic health instead of entropy. The extractive economic model is historically anomalous — and historically doomed. This degree trains designers of the economic architecture that replaces it: not by force, but by demonstrating superior outcomes at every scale.",
    tracks: ["Regenerative Capital Theory", "Circular Economy Engineering", "Cooperative Structure Design", "Distributed Ownership Models"],
    horizon: "2030+"
  },
  {
    id: 9,
    code: "AG-409",
    degree: "B.A.",
    icon: Scale,
    color: "#8ab45a",
    title: "Adaptive Governance & Predictive Ethics",
    tagline: "Laws written for yesterday cannot govern tomorrow.",
    domain: "Political Science · Ethics · Technology Policy",
    description: "An anticipatory policy discipline examining how legal and institutional systems evolve in response to technological, cultural, and environmental shifts.",
    detail: "Students analyze historical governance failures, model ethical lag in innovation cycles, and develop predictive frameworks that allow laws and institutions to update in advance of crisis rather than in reaction to collapse. Every major catastrophe of modernity was preceded by a governance gap — a failure of institutions to anticipate change and adapt. This degree produces the institutional designers who close those gaps before crises open them.",
    tracks: ["Governance Failure Analysis", "Ethical Lag Modeling", "Predictive Policy Design", "Institutional Adaptation Frameworks"],
    horizon: "2030+"
  },
  {
    id: 10,
    code: "BM-410",
    degree: "B.Eng.",
    icon: Leaf,
    color: "#b45a8a",
    title: "Integrated Bio-Mechanical Design & Living Infrastructure",
    tagline: "Cities that breathe. Buildings that heal. Infrastructure that grows.",
    domain: "Bioengineering · Architecture · Materials Science · Robotics",
    description: "A frontier engineering program merging biology, materials science, robotics, and architecture to create infrastructure that behaves like living tissue.",
    detail: "Students train to design self-repairing materials, adaptive buildings, symbiotic energy grids, and biome-integrated urban systems — cities and technologies that function in dynamic harmony with biological principles instead of opposing them. The industrial age built infrastructure that fights nature. The next age will build infrastructure that is indistinguishable from nature — not aesthetically, but functionally: self-healing, self-organizing, and self-improving.",
    tracks: ["Biomimetic Materials Science", "Adaptive Architectural Systems", "Living Infrastructure Design", "Urban-Biome Integration"],
    horizon: "2030+"
  }
];

function DegreeCard({ degree, index }) {
  const [open, setOpen] = useState(false);
  const Icon = degree.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: Math.min(index * 0.08, 0.5) }}
      className="group relative rounded-2xl border border-white/[0.06] overflow-hidden transition-all duration-500 hover:border-white/10"
    >
      <div className="absolute inset-0 bg-white/[0.015]" />
      <div className="absolute left-0 top-0 bottom-0 w-[3px]" style={{ background: `linear-gradient(to bottom, ${degree.color}50, ${degree.color}20)` }} />

      <button
        className="relative w-full text-left p-6 md:p-8 flex items-start gap-5"
        onClick={() => setOpen(!open)}
      >
        <div className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center mt-0.5"
          style={{ background: `${degree.color}15`, border: `1px solid ${degree.color}25` }}>
          <Icon className="w-5 h-5" style={{ color: degree.color, width: '18px', height: '18px' }} strokeWidth={1.5} />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-3 mb-2">
            <span className="text-[9px] tracking-[0.3em] uppercase px-2 py-0.5 rounded-full border"
              style={{ color: degree.color, borderColor: `${degree.color}30`, background: `${degree.color}08` }}>
              {degree.degree} · {degree.code}
            </span>
            <span className="text-[9px] tracking-[0.2em] uppercase text-white/20">{degree.domain}</span>
            <span className="text-[9px] tracking-[0.2em] uppercase text-white/15 ml-auto">Est. {degree.horizon}</span>
          </div>
          <h3 className="font-display text-xl md:text-2xl font-light text-white/90 mb-1.5 leading-snug">{degree.title}</h3>
          <p className="text-sm font-light italic" style={{ color: `${degree.color}80` }}>{degree.tagline}</p>
        </div>
        <ChevronDown className={`w-4 h-4 text-white/15 flex-shrink-0 mt-2 transition-transform duration-500 ${open ? "rotate-180 text-white/30" : ""}`} />
      </button>

      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{ duration: 0.45 }}
          className="relative px-6 md:px-8 pb-8"
        >
          <div className="h-px bg-white/[0.04] mb-6 ml-16" />
          <div className="ml-16 space-y-5">
            <p className="text-white/55 leading-relaxed text-sm font-light">{degree.description}</p>
            <p className="text-white/35 leading-relaxed text-sm font-light">{degree.detail}</p>
            <div>
              <p className="text-[10px] tracking-[0.25em] uppercase mb-3" style={{ color: `${degree.color}60` }}>Core Tracks</p>
              <div className="grid grid-cols-2 gap-2">
                {degree.tracks.map(track => (
                  <div key={track} className="flex items-center gap-2 text-xs text-white/35 font-light">
                    <div className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: degree.color, opacity: 0.5 }} />
                    {track}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}

export default function Future() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative pt-44 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80')] bg-cover bg-center opacity-[0.04]" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#07070d] via-transparent to-[#07070d]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full"
            style={{ background: "radial-gradient(ellipse, rgba(200,164,90,0.05) 0%, transparent 70%)" }} />
        </div>
        <div className="relative max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-3 mb-8">
              <div className="h-px w-8 bg-[var(--gold)]/30" />
              <span className="text-[10px] tracking-[0.4em] uppercase text-[var(--gold)]/60">The Frontier Curriculum</span>
              <div className="h-px w-8 bg-[var(--gold)]/30" />
            </div>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15 }}
            className="font-display font-light text-6xl md:text-8xl text-white leading-[0.9] mb-8"
          >
            Fields That<br /><span className="italic text-[var(--gold)]">Don't Exist Yet.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-white/40 text-lg leading-relaxed max-w-3xl font-light mb-10"
          >
            Leone University does not intend to replicate existing fields. We intend to create
            the disciplines that the next century will consider foundational — the same way physics, 
            chemistry, and medicine were once radical new ideas. These are our first ten.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="grid grid-cols-3 gap-4 max-w-sm"
          >
            {[
              { label: "10", sub: "New Degrees" },
              { label: "3", sub: "Degree Types" },
              { label: "2030+", sub: "Est. Launch" }
            ].map(s => (
              <div key={s.label} className="text-center p-4 rounded-xl border border-white/[0.05] bg-white/[0.01]">
                <div className="font-display text-2xl text-[var(--gold)] font-light">{s.label}</div>
                <div className="text-[9px] tracking-[0.2em] uppercase text-white/25 mt-1">{s.sub}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Manifesto quote */}
      <section className="px-6 pb-16">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative p-10 rounded-3xl border border-[var(--gold)]/10 bg-[var(--gold)]/[0.02]"
          >
            <div className="absolute top-4 left-6 font-display text-5xl text-[var(--gold)]/10">"</div>
            <p className="font-display text-lg md:text-xl italic text-white/50 leading-relaxed max-w-3xl mx-auto text-center">
              The most dangerous thing a civilization can do is let its brightest minds study only what already exists. 
              Leone University exists to create the fields that will explain the world we are building — 
              before that world exists, so its architects have a language for what they are doing.
            </p>
            <div className="text-center mt-5 text-[9px] tracking-[0.3em] uppercase text-[var(--gold)]/25">
              Leone University · Curriculum Manifesto
            </div>
          </motion.div>
        </div>
      </section>

      {/* Degrees */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-between mb-10"
          >
            <div>
              <div className="inline-flex items-center gap-3 mb-3">
                <div className="h-px w-8 bg-[var(--gold)]/30" />
                <span className="text-[10px] tracking-[0.4em] uppercase text-[var(--gold)]/60">Inaugural Programs</span>
              </div>
              <h2 className="font-display font-light text-3xl md:text-4xl text-white">
                The First <span className="italic text-[var(--gold)]">Ten Disciplines</span>
              </h2>
            </div>
          </motion.div>

          <div className="space-y-3">
            {degrees.map((degree, i) => (
              <DegreeCard key={degree.id} degree={degree} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* AI Philosophy */}
      <section className="py-28 px-6 border-t border-white/[0.04]">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-16 items-start">
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
              <p className="text-white/35 text-sm leading-relaxed font-light mb-6">
                Leone University's position is not defensive — it is philosophical. The most powerful thing a human brings to a moment of creation is not their knowledge. It is their intuition. The gut feeling. The unexplainable certainty. The connection drawn between two things no one thought to place beside each other.
              </p>
              <p className="text-white/20 text-sm leading-relaxed font-light mb-10">
                That is not something AI can generate. It can only help you articulate it once you have it. That is the only role we will ever grant it here.
              </p>
              <div className="pl-5 border-l border-[var(--gold)]/20">
                <p className="font-display text-base italic text-white/30 leading-relaxed">
                  "AI learns from what humanity has already discovered. Your intuition points to what humanity hasn't yet."
                </p>
                <p className="text-[9px] tracking-[0.3em] uppercase text-[var(--gold)]/20 mt-3">Leone University · AI Philosophy</p>
              </div>
            </motion.div>

            <div className="space-y-5">
              {[
                {
                  n: "I",
                  title: "AI does not replace intuition. It amplifies it.",
                  body: "Every breakthrough in human history began with a feeling — a pattern sensed before it could be named, a conviction held before it could be proven. AI cannot generate that. But it can help you articulate it, formalize it, and extend it further than you ever could alone.",
                  color: "#c8a45a"
                },
                {
                  n: "II",
                  title: "We do not detect AI. We transcend the question.",
                  body: "Leone does not attempt to identify whether you used AI to write your essays or formulate your ideas. That framing misunderstands what intelligence is. We assess your raw intuitive architecture — the part that no tool can fake, because it is the part that chooses what to ask in the first place.",
                  color: "#8a5ab4"
                },
                {
                  n: "III",
                  title: "Your intuitions feed the frontier.",
                  body: "When you articulate what you sense but cannot yet explain, AI encounters a genuinely novel signal — not a recombination of what exists, but the seed of what doesn't yet. Leone students are not consumers of AI output. They are originators of AI input. The ideas you bring will shape what comes next.",
                  color: "#5ab49a"
                }
              ].map((pillar, i) => (
                <motion.div
                  key={pillar.n}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: i * 0.12 }}
                  className="relative rounded-2xl border border-white/[0.06] bg-white/[0.015] p-7 overflow-hidden hover:border-white/10 transition-all duration-500"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-[0.06] blur-2xl pointer-events-none" style={{ background: pillar.color }} />
                  <div className="flex items-start gap-5">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center font-display text-sm font-light"
                      style={{ background: `${pillar.color}15`, border: `1px solid ${pillar.color}25`, color: pillar.color }}>
                      {pillar.n}
                    </div>
                    <div>
                      <h3 className="text-white/80 text-base font-medium mb-3 leading-snug">{pillar.title}</h3>
                      <p className="text-white/30 text-sm leading-relaxed font-light">{pillar.body}</p>
                    </div>
                  </div>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="rounded-2xl border border-[var(--gold)]/10 bg-[var(--gold)]/[0.025] p-7"
              >
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="w-3.5 h-3.5 text-[var(--gold)]/50" strokeWidth={1.5} />
                  <span className="text-[9px] tracking-[0.35em] uppercase text-[var(--gold)]/40">The Loop</span>
                </div>
                <p className="text-white/40 text-sm leading-relaxed font-light">
                  Leone students articulate their most original intuitions — about civilization, consciousness, about what should exist that doesn't. Those ideas become signals AI pursues on their behalf. Not replacing the student's agency. <span className="text-white/60 font-medium">Extending it into the frontier.</span> Human intuition generates AI direction. AI output feeds human discovery. The cycle accelerates what humanity can reach.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Accreditation note */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-[var(--gold)]/30" />
              <span className="text-[10px] tracking-[0.4em] uppercase text-[var(--gold)]/60">A Note on Accreditation</span>
              <div className="h-px w-8 bg-[var(--gold)]/30" />
            </div>
            <h2 className="font-display font-light text-4xl md:text-5xl text-white mb-6">
              Currently <span className="italic text-[var(--gold)]">unaccredited</span>,<br />intentionally pioneering.
            </h2>
            <p className="text-white/35 text-base leading-relaxed font-light mb-4">
              Leone University is not yet accredited — and we are transparent about that. 
              Accreditation is a process we pursue with full intention and patience, because we believe 
              our work must be excellent before it is official.
            </p>
            <p className="text-white/25 text-sm leading-relaxed font-light mb-8">
              In the interim, our programs will launch as certificate and fellowship programs, 
              with degree-granting authority as our first strategic milestone. We will earn our 
              standing the only way it should be earned: through the demonstrable quality of 
              what our graduates produce.
            </p>
            <Link
              to={createPageUrl("Ethos")}
              className="group inline-flex items-center gap-3 px-8 py-4 border border-[var(--gold)]/15 text-[var(--gold)]/60 text-[11px] tracking-[0.2em] uppercase rounded-full hover:border-[var(--gold)]/35 hover:text-[var(--gold)] transition-all duration-500"
            >
              Read Our Ethos
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}