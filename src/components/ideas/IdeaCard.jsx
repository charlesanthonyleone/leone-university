import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../../utils";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const categoryIcons = {
  education: "📚",
  technology: "⚡",
  policy: "⚖️",
  community: "🤝",
  sustainability: "🌱",
  health: "💊",
  economics: "📊",
  governance: "🏛️"
};

const categoryColors = {
  education: "from-blue-500/20 to-blue-600/5",
  technology: "from-violet-500/20 to-violet-600/5",
  policy: "from-amber-500/20 to-amber-600/5",
  community: "from-rose-500/20 to-rose-600/5",
  sustainability: "from-emerald-500/20 to-emerald-600/5",
  health: "from-red-500/20 to-red-600/5",
  economics: "from-cyan-500/20 to-cyan-600/5",
  governance: "from-orange-500/20 to-orange-600/5"
};

export default function IdeaCard({ idea, index }) {
  const statusBadge = {
    open: { label: "Open", color: "bg-emerald-500/20 text-emerald-400 border-emerald-500/20" },
    in_progress: { label: "In Progress", color: "bg-amber-500/20 text-amber-400 border-amber-500/20" },
    implemented: { label: "Implemented", color: "bg-blue-500/20 text-blue-400 border-blue-500/20" }
  };

  const badge = statusBadge[idea.status] || statusBadge.open;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <Link
        to={createPageUrl("IdeaDetail") + `?id=${idea.id}`}
        className="group block relative rounded-2xl border border-white/5 bg-white/[0.02] overflow-hidden hover:border-[var(--gold)]/20 transition-all duration-500"
      >
        {/* Top gradient bar */}
        <div className={`h-1 bg-gradient-to-r ${categoryColors[idea.category] || "from-white/10 to-white/5"}`} />

        <div className="p-7">
          <div className="flex items-start justify-between mb-5">
            <div className="flex items-center gap-3">
              <span className="text-xl">{categoryIcons[idea.category] || "💡"}</span>
              <span className="text-[10px] tracking-[0.2em] uppercase text-white/30">
                {idea.category?.replace(/_/g, " ")}
              </span>
            </div>
            <span className={`text-[10px] tracking-wider uppercase px-2.5 py-1 rounded-full border ${badge.color}`}>
              {badge.label}
            </span>
          </div>

          <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-[var(--gold-light)] transition-colors duration-300 line-clamp-2">
            {idea.title}
          </h3>

          <p className="text-sm text-white/35 leading-relaxed line-clamp-3 mb-6">
            {idea.summary}
          </p>

          <div className="flex items-center justify-between">
            {idea.author_name && (
              <span className="text-xs text-white/25">by {idea.author_name}</span>
            )}
            <div className="flex items-center gap-1 text-[var(--gold)] text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 ml-auto">
              Read More <ArrowUpRight className="w-3 h-3" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}