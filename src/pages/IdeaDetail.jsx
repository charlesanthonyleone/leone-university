import React from "react";
import { base44 } from "@/api/base44Client";
import { useQuery } from "@tanstack/react-query";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "../utils";
import { motion } from "framer-motion";
import { ArrowLeft, User, Calendar, Tag, Rocket, Target, CheckCircle2 } from "lucide-react";
import { format } from "date-fns";
import ReactMarkdown from "react-markdown";

const categoryLabels = {
  education: "Education",
  technology: "Technology",
  policy: "Policy",
  community: "Community",
  sustainability: "Sustainability",
  health: "Health",
  economics: "Economics",
  governance: "Governance"
};

const statusConfig = {
  open: { label: "Open for Implementation", color: "bg-emerald-500/20 text-emerald-400 border-emerald-500/20", icon: Rocket },
  in_progress: { label: "In Progress", color: "bg-amber-500/20 text-amber-400 border-amber-500/20", icon: Target },
  implemented: { label: "Implemented", color: "bg-blue-500/20 text-blue-400 border-blue-500/20", icon: CheckCircle2 }
};

export default function IdeaDetail() {
  const urlParams = new URLSearchParams(useLocation().search);
  const ideaId = urlParams.get("id");

  const { data: ideas = [], isLoading } = useQuery({
    queryKey: ["idea", ideaId],
    queryFn: () => base44.entities.Idea.filter({ id: ideaId }),
    enabled: !!ideaId,
  });

  const idea = ideas[0];

  if (isLoading) {
    return (
      <div className="pt-28 pb-20 px-6 min-h-screen">
        <div className="max-w-4xl mx-auto">
          <div className="animate-pulse space-y-6">
            <div className="h-4 bg-white/5 rounded w-32" />
            <div className="h-10 bg-white/5 rounded w-3/4" />
            <div className="h-4 bg-white/5 rounded w-full" />
            <div className="h-4 bg-white/5 rounded w-5/6" />
          </div>
        </div>
      </div>
    );
  }

  if (!idea) {
    return (
      <div className="pt-28 pb-20 px-6 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-5xl mb-4">🔍</div>
          <p className="text-white/40 text-lg mb-4">Idea not found</p>
          <Link
            to={createPageUrl("Ideas")}
            className="text-[var(--gold)] text-sm hover:underline inline-flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Ideas
          </Link>
        </div>
      </div>
    );
  }

  const status = statusConfig[idea.status] || statusConfig.open;
  const StatusIcon = status.icon;

  return (
    <div className="pt-28 pb-20 px-6 min-h-screen">
      <div className="max-w-4xl mx-auto">
        {/* Back Link */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            to={createPageUrl("Ideas")}
            className="inline-flex items-center gap-2 text-white/30 text-sm hover:text-[var(--gold)] transition-colors mb-10"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Ideas
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className={`inline-flex items-center gap-1.5 text-[10px] tracking-wider uppercase px-3 py-1.5 rounded-full border ${status.color}`}>
              <StatusIcon className="w-3 h-3" />
              {status.label}
            </span>
            <span className="inline-flex items-center gap-1.5 text-[10px] tracking-wider uppercase px-3 py-1.5 rounded-full border border-white/10 text-white/40">
              <Tag className="w-3 h-3" />
              {categoryLabels[idea.category] || idea.category}
            </span>
          </div>

          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            {idea.title}
          </h1>

          <p className="text-lg text-white/50 leading-relaxed mb-8 max-w-3xl">
            {idea.summary}
          </p>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-6 text-xs text-white/25 pb-8 mb-10 border-b border-white/5">
            {idea.author_name && (
              <span className="flex items-center gap-2">
                <User className="w-3.5 h-3.5" /> {idea.author_name}
              </span>
            )}
            {idea.created_date && (
              <span className="flex items-center gap-2">
                <Calendar className="w-3.5 h-3.5" /> {format(new Date(idea.created_date), "MMMM d, yyyy")}
              </span>
            )}
          </div>
        </motion.div>

        {/* Cover image */}
        {idea.cover_image_url && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl overflow-hidden border border-white/5 mb-12"
          >
            <img src={idea.cover_image_url} alt={idea.title} className="w-full h-auto object-cover max-h-[500px]" />
          </motion.div>
        )}

        {/* Full Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12"
        >
          <h2 className="text-xs tracking-[0.2em] uppercase text-[var(--gold)] mb-6">Full Description</h2>
          <div className="prose prose-invert prose-sm max-w-none text-white/60 leading-relaxed [&_p]:mb-4 [&_h1]:text-white [&_h2]:text-white [&_h3]:text-white [&_strong]:text-white/80 [&_a]:text-[var(--gold)]">
            <ReactMarkdown>{idea.full_description}</ReactMarkdown>
          </div>
        </motion.div>

        {/* Implementation Steps */}
        {idea.implementation_steps && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-12 p-8 rounded-2xl border border-[var(--gold)]/10 bg-[var(--gold)]/[0.03]"
          >
            <h2 className="text-xs tracking-[0.2em] uppercase text-[var(--gold)] mb-6 flex items-center gap-2">
              <Rocket className="w-4 h-4" /> Implementation Steps
            </h2>
            <div className="prose prose-invert prose-sm max-w-none text-white/55 leading-relaxed [&_p]:mb-4 [&_li]:mb-2 [&_strong]:text-white/80">
              <ReactMarkdown>{idea.implementation_steps}</ReactMarkdown>
            </div>
          </motion.div>
        )}

        {/* Impact Statement */}
        {idea.impact_statement && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="p-8 rounded-2xl border border-white/5 bg-white/[0.02]"
          >
            <h2 className="text-xs tracking-[0.2em] uppercase text-[var(--gold)] mb-6 flex items-center gap-2">
              <Target className="w-4 h-4" /> Expected Impact
            </h2>
            <div className="prose prose-invert prose-sm max-w-none text-white/55 leading-relaxed [&_p]:mb-4 [&_strong]:text-white/80">
              <ReactMarkdown>{idea.impact_statement}</ReactMarkdown>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}