import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Brain, Globe, Heart, Scale, BookOpen, Users, ChevronDown, Star, Lightbulb, Shield, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../utils";
import LeoneProfileShowcase from "../components/admissions/LeoneProfileShowcase";

const testDimensions = [
  {
    icon: Users,
    color: "#c8a45a",
    number: "01",
    title: "Identity & Social Architecture",
    subtitle: "Who are you among others?",
    description: "The first dimension maps your natural social orientation — not your performance under pressure, but your instinct when no one is watching. How do you organize? Where do you find energy? What role do you fall into naturally when a group forms? What drains you that others barely notice?\n\nSome questions here will feel immediate — you'll know your answer within seconds. Others will sit with you for days. That is by design. A question like 'When conflict emerges in your closest relationships, what is your first impulse?' isn't asking what you do — it's asking what pulls at you before your mind intercedes. We are mapping your gravity, not your decisions.\n\nWe sort candidates across four social topologies: solitary builders (deep focus, low bandwidth, high output), network weavers (energy from connection, systems from relationships), institutional reformers (work within structures to bend them), and frontier explorers (leave the structure entirely and build new ones). None is superior. All are essential. The question is which one is you — and which one you are becoming.",
    influences: ["Myers-Briggs Type Indicator (MBTI)", "Big Five Personality (OCEAN)", "Holland Code (RIASEC)", "Sociometry (Moreno)"],
    questions: "~200 questions",
    sample: "When a group you're part of is moving in the wrong direction, you most naturally:\n\n(A) Quietly demonstrate a better way through your own work — let results speak\n(B) Build consensus first, change course only once people are aligned\n(C) Name the problem directly and propose a concrete alternative\n(D) Find others who share your concern and coordinate before acting\n(E) Wait, observe, gather more information before deciding\n(F) Disengage and build something better independently"
  },
  {
    icon: Heart,
    color: "#b45a7a",
    number: "02",
    title: "Moral Architecture & Service Orientation",
    subtitle: "What do you stand for — and why?",
    description: "This dimension does not test whether you are 'good.' It maps your moral operating system — the internal logic that runs beneath your decisions before your reasoning mind catches up.\n\nEvery person has a moral architecture. Most people have never examined theirs. They absorbed it from their family, their culture, their earliest pains and earliest witnesses of injustice or kindness. This section is an invitation to look at that architecture directly — some of it will surprise you. Some of it will disturb you. That is the point.\n\nWe are mapping five things: your harm and care instincts (how sensitive are you to suffering, and whose?), your fairness and reciprocity framework (what do you consider a fair exchange?), your relationship to authority (is it a tool, a threat, or a comfort?), your loyalty architecture (where does your primary obligation sit — family, community, humanity, principle?), and your purity and transgression sense (what feels wrong that you can't fully justify rationally?).\n\nWe are not looking for saints. We are not looking for altruists. We are looking for self-aware people with coherent frameworks they can articulate — people who know what they believe and can trace why. The world changes when people with clear moral systems take powerful positions. We intend to produce those people.",
    influences: ["Kohlberg's Stages of Moral Development", "Moral Foundations Theory (Haidt)", "Care Ethics vs. Justice Ethics (Gilligan)", "Social Contract Theory", "Virtue Ethics (Aristotle)"],
    questions: "~180 questions",
    sample: "A policy would save 10,000 lives annually but requires permanently restricting a freedom that 1 million people currently exercise without causing harm. You:\n\n(A) Support it — outcomes justify constraints when the math is this clear\n(B) Oppose it — liberty is foundational, not negotiable regardless of outcome\n(C) Seek a modified version that achieves the goal without the permanent restriction\n(D) Support it temporarily, with a mandatory sunset clause and public review\n(E) Oppose it — this category of logic has historically expanded dangerously\n(F) Support it only with genuine democratic consent from those whose freedom is restricted"
  },
  {
    icon: Scale,
    color: "#5a8ab4",
    number: "03",
    title: "Pragmatism & Emotional Intelligence",
    subtitle: "When do you act — and what do you bring?",
    description: "This is the dimension about the space between knowing and doing. Between feeling and responding. Between understanding a situation and being able to function within it.\n\nEmotional intelligence is not softness. It is precision. The highest-functioning people in high-stakes environments are not the ones who feel less — they are the ones who feel fully and can still act clearly. This dimension maps that capacity: how do you allocate limited resources under pressure? How do you behave when you are right and no one believes you? What do you do when the person who needs your help is also the person causing harm?\n\nSome questions here have no comfortable answer. That is deliberate. We are not mapping what you would do in a clean scenario — we are mapping your instinct in the ambiguity, the scarcity, the emotional complexity that defines real high-stakes decisions. A question like 'A close colleague is struggling personally, and their work is suffering in ways that are affecting the people who depend on that work — what do you do?' does not have a right answer. It has a revealing one.\n\nWe also measure your awareness of your own emotional state. Can you identify when you are acting from fear versus conviction? From exhaustion versus clarity? The best decision-makers in history were not the ones who never felt these things — they were the ones who could name them in real time.",
    influences: ["EQ-i 2.0 Framework (Bar-On)", "Decision Theory & Behavioral Economics", "Situational Leadership Theory (Hersey & Blanchard)", "Affect Regulation Research (Gross)", "Polyvagal Theory (Porges)"],
    questions: "~150 questions",
    sample: "You are distributing limited medical supplies after a regional disaster. A family you know personally needs help urgently. So does a larger group you have no prior connection to. You:\n\n(A) Distribute proportionally to medical need — personal connection is irrelevant\n(B) Prioritize the family — trust enables coordination and future effectiveness\n(C) Defer to whoever has the most complete information on the ground\n(D) Stabilize the family with minimum necessary, direct remainder to the broader group\n(E) Establish a triage system before distributing anything, even if it costs time\n(F) Route everything to the community system and trust it reaches those who need it most"
  },
  {
    icon: Globe,
    color: "#5ab49a",
    number: "04",
    title: "Global Awareness & Historical Literacy",
    subtitle: "Do you understand the world you're inheriting?",
    description: "This is the dimension that separates people who have studied the world from people who have read it — and the difference is vast.\n\nAcademic learning is transactional: information transferred from a book or teacher into a student, assessed by recall. What we are measuring here is something fundamentally different. Pattern recognition across civilizations. Causal reasoning across centuries. The ability to see why the Roman Empire's collapse echoes in modern debt dynamics. Why the conditions that produced the Renaissance also produced its violent aftermath. Why reserve currencies are always political before they are economic.\n\nSome of these questions will be impossible if you've only been in school. Some will be trivial if you've spent two years reading about the world. That asymmetry is intentional. We are not trying to reward formal education — we are trying to find the people who, given freedom and a library, went deep. The people who couldn't stop asking why.\n\nWe also include questions specifically designed to surface the difference between received opinion and original analysis. Many people can tell you what happened. Far fewer can tell you why it happened the way it did, what the alternatives were, and what the long-term consequences reveal about structural forces versus individual decisions.",
    influences: ["Bloom's Taxonomy — Analysis & Synthesis tiers", "World Systems Theory (Wallerstein)", "Comparative Historical Analysis", "Philosophy of History (Hegel, Toynbee, Ibn Khaldun)", "Geopolitical Analysis Frameworks"],
    questions: "~200 questions",
    sample: "Three historically distinct empires reached extraordinary peaks of innovation and then entered prolonged structural decline. The most consistent contributing factor across all three was:\n\n(A) Overextension of military campaigns and supply line collapse\n(B) Concentration of wealth leading to political capture by a narrow elite\n(C) Loss of meritocracy in elite selection — credentials replacing competence\n(D) Technological stagnation relative to emerging competitors\n(E) Cultural insularity and increasing resistance to outside influence\n(F) Currency debasement and the erosion of financial trust"
  },
  {
    icon: Brain,
    color: "#8a5ab4",
    number: "05",
    title: "Cognitive Competency",
    subtitle: "Can you think — not just what you think?",
    description: "This dimension covers the fundamentals — algebra, grammar, formal logic, basic scientific reasoning. Not to exclude those without formal schooling, but to understand the baseline architecture of how someone processes and structures information.\n\nHere is what we have learned: a student who never finished high school but reasons with genuine precision and creativity is more interesting to us than a straight-A graduate who can execute perfectly and originate nothing. The first person is rare. The second person is abundant. We are interested in rarity.\n\nThis section is intentionally completable through self-education. The questions don't require calculus or advanced theory — they require clarity of thought, comfort with abstraction, and the ability to hold multiple variables in mind simultaneously. A question like 'If all X are Y, and some Y are Z, what can we conclude about X and Z?' is not a math question. It is a reasoning question. Can you hold the structure cleanly and trace what follows from it without substituting intuition for logic?\n\nWe also include creative and divergent reasoning questions. Not every mind thinks linearly — and some of the most powerful thinkers in history operated entirely in analogical or systems-level reasoning rather than sequential logic. We are not selecting for one type of cognition. We are mapping the architecture of yours so we can design learning environments that work with it rather than against it.",
    influences: ["Fluid Intelligence (Cattell-Horn-Carroll Theory)", "Raven's Progressive Matrices", "Verbal & Quantitative Reasoning (GRE-style)", "Divergent Thinking Research (Guilford)", "Metacognition Research (Flavell)"],
    questions: "~270 questions",
    sample: "If Pattern A always produces Outcome B, and Outcome B sometimes prevents Condition C, which of the following can be stated with certainty?\n\n(A) Pattern A always prevents Condition C\n(B) Condition C sometimes follows the absence of Pattern A\n(C) Pattern A sometimes prevents Condition C\n(D) The absence of Pattern A guarantees the presence of Condition C\n(E) Outcome B is the only mechanism capable of preventing Condition C\n(F) None of the above can be stated with logical certainty from the given premises"
  },
  {
    icon: BookOpen,
    color: "#7a9a5a",
    number: "06",
    title: "Aspirational Self & Growth Orientation",
    subtitle: "Who do you want to become?",
    description: "This is the dimension that no other assessment asks for. And it may be the most important one we have.\n\nEvery other section maps who you are today — your instincts, your reasoning, your knowledge, your values as they currently exist. This section asks something different: who are you trying to become? Not your idealized fantasy self. Not who you think you should be. But at your most composed, your most grounded, your most fully realized — who is that person, and how do they function?\n\nThis matters because we understand something most institutions don't: people grow. The 18-year-old completing this assessment in a quiet afternoon two years after leaving school is not the same person they will be at 22, at 30, at 45. And the gap between who they are now and who they are orienting toward is one of the most revealing signals we can capture.\n\nA person who scores in the lower quartile on moral framework clarity today but aspires toward high coherence and can articulate that gap with precision — that person is more interesting to us than someone who scores in the top quartile but shows no aspirational tension at all. Growth requires a direction. This section maps yours.\n\nThis is also the section where the test itself becomes an education. Many people completing these questions will encounter things about themselves they have never named before. That is the point. Leone University doesn't only want to know who you are — it wants to know who you intend to be. And it intends to help you close that distance.",
    influences: ["Self-Determination Theory (Deci & Ryan)", "Possible Selves Theory (Markus & Nurius)", "Carol Dweck — Growth Mindset Research", "Narrative Identity Theory (McAdams)", "Positive Psychology (Seligman — PERMA)"],
    questions: "~0 additional — woven throughout all 5 dimensions",
    sample: "For each question in the assessment, you place two markers on a spectrum:\n\n— The first marker represents your honest current self: how you actually tend to respond, think, or feel in the situation described — not who you want to be, but who you are right now.\n\n— The second marker represents your aspirational composed self: how you would respond at your clearest, most grounded, most fully realized — the version of you that you are working toward.\n\nThe distance between these two markers is data. A small gap may mean integration — you are already close to who you want to be. Or it may mean you haven't examined the question deeply enough yet. A large gap may mean real growth is happening — or it may reveal a fantasy self disconnected from honest self-knowledge. The pattern across 1,000 questions tells us which."
  }
];



function DimensionCard({ dim, index }) {
  const [open, setOpen] = useState(false);
  const Icon = dim.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: Math.min(index * 0.1, 0.4) }}
      className="rounded-2xl border border-white/[0.06] overflow-hidden transition-all duration-500 hover:border-white/10"
    >
      <div className="absolute left-0 top-0 bottom-0 w-[3px]" style={{ background: `${dim.color}40` }} />
      <button
        onClick={() => setOpen(!open)}
        className="relative w-full text-left p-7 flex items-start gap-5 bg-white/[0.015]"
      >
        <div className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
          style={{ background: `${dim.color}15`, border: `1px solid ${dim.color}25` }}>
          <span className="font-display text-lg font-light" style={{ color: dim.color }}>{dim.number}</span>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 mb-1.5">
            <Icon className="w-4 h-4" style={{ color: `${dim.color}80` }} strokeWidth={1.5} />
            <span className="text-[9px] tracking-[0.3em] uppercase font-medium" style={{ color: `${dim.color}60` }}>{dim.questions}</span>
          </div>
          <h3 className="font-display text-xl md:text-2xl font-light text-white/90 mb-1">{dim.title}</h3>
          <p className="text-sm font-light italic" style={{ color: `${dim.color}70` }}>{dim.subtitle}</p>
        </div>
        <ChevronDown className={`w-4 h-4 text-white/15 flex-shrink-0 mt-2 transition-transform duration-500 ${open ? "rotate-180 text-white/30" : ""}`} />
      </button>

      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{ duration: 0.45 }}
          className="bg-white/[0.01] border-t border-white/[0.04]"
        >
          <div className="p-7 space-y-6">
            {dim.description.split('\n\n').map((para, pi) => (
              <p key={pi} className="text-white/45 leading-relaxed text-sm font-light">{para}</p>
            ))}

            <div>
              <p className="text-[9px] tracking-[0.3em] uppercase text-white/20 mb-3">Informed By</p>
              <div className="flex flex-wrap gap-2">
                {dim.influences.map(inf => (
                  <span key={inf} className="text-[10px] px-3 py-1 rounded-full border border-white/[0.06] text-white/30 font-light">{inf}</span>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-white/[0.05] bg-white/[0.02] p-5">
              <p className="text-[9px] tracking-[0.3em] uppercase mb-3" style={{ color: `${dim.color}50` }}>Sample Question Format</p>
              {dim.sample.split('\n\n').map((block, bi) => (
                <p key={bi} className="text-white/35 text-sm leading-relaxed font-light italic mb-3 last:mb-0">{block}</p>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}

export default function Admissions() {
  const [activeProfile, setActiveProfile] = useState(0);

  return (
    <div className="min-h-screen">

      {/* Hero */}
      <section className="relative pt-44 pb-28 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#07070d] via-[#0a0a18] to-[#07070d]" />
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[700px] rounded-full"
            style={{ background: "radial-gradient(ellipse, rgba(200,164,90,0.05) 0%, transparent 65%)" }} />
          <div className="absolute top-1/4 right-1/3 w-[400px] h-[400px] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(139,90,180,0.04) 0%, transparent 70%)" }} />
          <div className="absolute inset-0 opacity-[0.015]"
            style={{ backgroundImage: "radial-gradient(rgba(200,164,90,1) 1px, transparent 1px)", backgroundSize: "50px 50px" }} />
        </div>

        <div className="relative max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-3 mb-8">
              <div className="h-px w-8 bg-[var(--gold)]/30" />
              <span className="text-[10px] tracking-[0.4em] uppercase text-[var(--gold)]/60">The Gateway · Opening 2030+</span>
              <div className="h-px w-8 bg-[var(--gold)]/30" />
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.15 }}>
            <h1 className="font-display font-light text-6xl md:text-8xl text-white leading-[0.9] mb-8">
              Not Who<br />
              <span className="italic text-[var(--gold)]">Studied the Most.</span><br />
              <span className="text-white/60 text-5xl md:text-7xl">Who Thinks the Deepest.</span>
            </h1>
          </motion.div>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.5 }}
            className="text-white/40 text-base md:text-lg leading-relaxed max-w-3xl mb-12 font-light"
          >
            Leone University's single admission requirement is a 1,000-question adaptive assessment — 
            no prerequisites, no GPA requirements, no institutional gatekeeping. 
            Each question carries two responses: who you are right now, and who you are working toward becoming. 
            The test has no right or wrong answers. It maps who you are — and who you intend to be.
            And the most pioneering minds have always come from the most unexpected places.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.7 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl"
          >
            {[
              { v: "1,000", l: "Questions" },
              { v: "6", l: "Dimensions" },
              { v: "2", l: "Responses Each" },
              { v: "2 yrs", l: "Recommended Window" },
            ].map((s, i) => (
              <div key={i} className="text-center p-4 rounded-xl border border-white/[0.05] bg-white/[0.01]">
                <div className="font-display text-2xl md:text-3xl text-[var(--gold)] font-light">{s.v}</div>
                <div className="text-[9px] tracking-[0.2em] uppercase text-white/25 mt-1">{s.l}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-28 px-6 border-t border-white/[0.04]">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="h-px w-8 bg-[var(--gold)]/30" />
                <span className="text-[10px] tracking-[0.4em] uppercase text-[var(--gold)]/60">The Philosophy</span>
              </div>
              <h2 className="font-display font-light text-4xl md:text-5xl text-white mb-8 leading-tight">
                Chaotic backgrounds produce<br /><span className="italic text-[var(--gold)]">pioneering minds.</span>
              </h2>
              <div className="space-y-5 text-white/40 text-sm leading-relaxed font-light">
                <p>
                  The academic world has built an admissions system designed to select the most obedient, 
                  most well-resourced, and most institutionally conditioned applicants. 
                  This produces excellent executors and mediocre originators.
                </p>
                <p>
                  The most transformative minds in human history — the ones who rewrote physics, 
                  remade economies, invented new art forms — disproportionately came from disrupted 
                  childhoods, non-linear paths, and unconventional learning. We designed our admissions 
                  system to find them, not filter them out.
                </p>
                <p>
                  This is why our test has no correct answers. It doesn't measure what you know. 
                  It measures who you are — your instincts under pressure, your moral reasoning architecture, 
                  your capacity for original synthesis. These are the inputs that predict whether someone 
                  will change the world.
                </p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}>
              <div className="space-y-4">
                {[
                  { icon: Star, title: "No GPA Requirement", desc: "Academic transcripts tell us what you were assigned, not what you pursued. We don't care what grade you received — we care what questions you were brave enough to ask.", color: "#c8a45a" },
                  { icon: Lightbulb, title: "Self-Education is Valid", desc: "Someone who taught themselves three languages, built a business from nothing, or raised siblings while studying alone has demonstrated more than most graduates. We see that.", color: "#8a5ab4" },
                  { icon: Shield, title: "Chaos is Context, Not Disqualification", desc: "If your background was difficult, unstable, or unconventional — we want to understand it. We don't expect perfect conditions. We expect resilient minds.", color: "#5ab49a" },
                  { icon: Brain, title: "Two-Year Hiatus by Design", desc: "We actively encourage a two-year gap between secondary education and application. The test is designed to be completed in genuine free time — curiosity-driven, pressure-free. We want your clearest thinking, not your most anxious.", color: "#b45a7a" },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="flex gap-4 p-5 rounded-xl border border-white/[0.05] bg-white/[0.01]">
                      <div className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: `${item.color}15`, border: `1px solid ${item.color}20` }}>
                        <Icon className="w-4 h-4" style={{ color: item.color }} strokeWidth={1.5} />
                      </div>
                      <div>
                        <p className="text-white/70 text-sm font-medium mb-1">{item.title}</p>
                        <p className="text-white/30 text-xs leading-relaxed font-light">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The 6 Dimensions */}
      <section className="py-28 px-6 border-t border-white/[0.04]">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-[var(--gold)]/30" />
              <span className="text-[10px] tracking-[0.4em] uppercase text-[var(--gold)]/60">The Assessment</span>
            </div>
            <h2 className="font-display font-light text-4xl md:text-5xl text-white mb-4">
              Six <span className="italic text-[var(--gold)]">Dimensions of Self.</span>
            </h2>
            <p className="text-white/30 text-sm max-w-2xl font-light leading-relaxed">
              1,000 questions across 6 dimensions. Each answered twice — once for your current self, once for your aspirational composed self — using a dual-marker spectrum rather than forced choice. No time limit. No wrong answer. Informed by Myers-Briggs, Big Five, Moral Foundations Theory, Possible Selves Theory, and original Leone University methodology. The test evolves continuously as cohort data reveals new patterns.
              <br /><br />
              <span className="text-white/20">Two years is a long time. These are heavy questions. Some you'll answer in seconds. Some will take days to sit with. That's the design.</span>
            </p>
          </motion.div>

          <div className="space-y-3">
            {testDimensions.map((dim, i) => (
              <DimensionCard key={dim.number} dim={dim} index={i} />
            ))}
          </div>
        </div>
      </section>

      <LeoneProfileShowcase />

      {/* How it works + supplementary */}
      <section className="py-28 px-6 border-t border-white/[0.04]">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="h-px w-8 bg-[var(--gold)]/30" />
                <span className="text-[10px] tracking-[0.4em] uppercase text-[var(--gold)]/60">The Process</span>
              </div>
              <h2 className="font-display font-light text-3xl md:text-4xl text-white mb-8">
                How it <span className="italic text-[var(--gold)]">works.</span>
              </h2>
              <div className="space-y-6">
                {[
                  { step: "01", title: "Take Two Years", desc: "We actively recommend completing the assessment over your two-year hiatus between secondary school and higher education — in genuine free time, without pressure or urgency." },
                  { step: "02", title: "1,000 Questions · Two Answers Each", desc: "For every question, you place two markers on a spectrum. The first: your honest current self — how you actually tend to respond. The second: your aspirational composed self — how you'd respond at your clearest, most grounded. No timer. No right answers. Answer honestly, not strategically." },
                  { step: "03", title: "Receive Your Dual Profile", desc: "Upon completion, you receive your full Leone Profile — your current topology across all six dimensions alongside your aspirational arc. The gap between them is as informative as the scores themselves." },
                  { step: "04", title: "Submit Supporting Materials", desc: "Optionally, submit essays, portfolios, projects, or work. These supplement — never replace — the test. A brilliant portfolio from a low scorer won't override the data. But context enriches the picture." },
                  { step: "05", title: "Placement, Not Rejection", desc: "The goal is not to reject you. It is to understand you well enough to place you in the environment where you will flourish most — or to be honest that a different path may serve you better." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full border border-[var(--gold)]/20 flex items-center justify-center">
                      <span className="font-display text-[var(--gold)]/60 text-xs">{item.step}</span>
                    </div>
                    <div>
                      <p className="text-white/60 text-sm font-medium mb-1">{item.title}</p>
                      <p className="text-white/25 text-xs leading-relaxed font-light">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}>
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="h-px w-8 bg-[var(--gold)]/30" />
                <span className="text-[10px] tracking-[0.4em] uppercase text-[var(--gold)]/60">Living Assessment</span>
              </div>
              <h2 className="font-display font-light text-3xl md:text-4xl text-white mb-8">
                The test <span className="italic text-[var(--gold)]">evolves.</span>
              </h2>
              <div className="space-y-5 text-white/35 text-sm leading-relaxed font-light">
                <p>
                  The Leone Assessment is not static. It is a living instrument, calibrated continuously 
                  against cohort outcomes. As we accumulate data on which profiles produce which kinds 
                  of impact — in which fields, under which conditions — the test itself becomes more precise.
                </p>
                <p>
                  Questions that reveal weak predictive power are retired. New questions informed by 
                  real-world outcomes replace them. The weighting of each dimension evolves as we learn 
                  what actually predicts transformative contribution versus credentialed mediocrity.
                </p>
                <p>
                  This is the admissions system that learns. Just like the university it gates.
                </p>
              </div>

              <div className="mt-10 p-6 rounded-2xl border border-[var(--gold)]/10 bg-[var(--gold)]/[0.025]">
                <div className="font-display text-4xl text-[var(--gold)]/20 mb-3">"</div>
                <p className="font-display text-base italic text-white/40 leading-relaxed">
                  The data grows. The people grow. The test grows. The institution grows. 
                  And from that — carefully, over decades — the world grows.
                </p>
                <p className="text-[9px] tracking-[0.3em] uppercase text-[var(--gold)]/25 mt-4">
                  Leone University · Admissions Philosophy
                </p>
              </div>

              <div className="mt-6 p-5 rounded-xl border border-white/[0.05] bg-white/[0.01]">
                <div className="flex items-center gap-2 mb-3">
                  <TrendingUp className="w-3.5 h-3.5 text-[var(--gold)]/40" strokeWidth={1.5} />
                  <span className="text-[9px] tracking-[0.3em] uppercase text-white/20">On Faculty & Tenure</span>
                </div>
                <p className="text-white/25 text-xs leading-relaxed font-light">
                  As fields we pioneer mature, we face an open question: do we always teach forward, 
                  or do we build tenured faculty who carry depth into the long arc? We don't have the 
                  answer yet. But we'd love to provide that stability for teachers who dedicate their 
                  lives to a field — and we're designing for that possibility from the start.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Future Note */}
      <section className="py-32 px-6 border-t border-white/[0.04]">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-3 mb-8">
              <div className="h-px w-8 bg-[var(--gold)]/30" />
              <span className="text-[10px] tracking-[0.4em] uppercase text-[var(--gold)]/60">A Note on Timing</span>
              <div className="h-px w-8 bg-[var(--gold)]/30" />
            </div>
            <h2 className="font-display font-light text-4xl md:text-5xl text-white mb-6">
              We are building<br /><span className="italic text-[var(--gold)]">for the right moment.</span>
            </h2>
            <p className="text-white/35 text-base leading-relaxed font-light mb-5">
              Admissions will open no earlier than 2030 — and only when we are ready to deliver 
              on what we promise. The assessment, the placement system, the curriculum, and the 
              infrastructure must all be worthy of the candidates we intend to receive.
            </p>
            <p className="text-white/20 text-sm leading-relaxed font-light mb-10">
              We are aiming earlier. We are building faster. But we will not open our doors until 
              what stands behind them is genuinely worth walking through.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to={createPageUrl("Future")}
                className="group inline-flex items-center gap-3 px-8 py-4 gold-gradient-bg text-[#07070d] font-semibold text-[11px] tracking-[0.2em] uppercase rounded-full hover:shadow-[0_0_60px_rgba(200,164,90,0.2)] transition-all duration-500"
              >
                Explore the Degrees
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to={createPageUrl("Ethos")}
                className="group inline-flex items-center gap-3 px-8 py-4 border border-white/10 text-white/50 text-[11px] tracking-[0.2em] uppercase rounded-full hover:border-[var(--gold)]/25 hover:text-white/80 transition-all duration-500"
              >
                Read Our Ethos
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}