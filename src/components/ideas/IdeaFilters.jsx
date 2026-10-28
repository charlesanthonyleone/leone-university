import React from "react";
import { motion } from "framer-motion";

const categories = [
  { value: "all", label: "All Ideas" },
  { value: "education", label: "Education" },
  { value: "technology", label: "Technology" },
  { value: "policy", label: "Policy" },
  { value: "community", label: "Community" },
  { value: "sustainability", label: "Sustainability" },
  { value: "health", label: "Health" },
  { value: "economics", label: "Economics" },
  { value: "governance", label: "Governance" }
];

export default function IdeaFilters({ activeCategory, setActiveCategory }) {
  return (
    <div className="flex flex-wrap gap-2 mb-10">
      {categories.map((cat) => (
        <button
          key={cat.value}
          onClick={() => setActiveCategory(cat.value)}
          className={`relative px-4 py-2 rounded-full text-xs tracking-wider uppercase transition-all duration-300 ${
            activeCategory === cat.value
              ? "text-[var(--navy)] font-semibold"
              : "text-white/40 border border-white/5 hover:border-white/15 hover:text-white/70"
          }`}
        >
          {activeCategory === cat.value && (
            <motion.div
              layoutId="activeFilter"
              className="absolute inset-0 bg-[var(--gold)] rounded-full"
              transition={{ type: "spring", duration: 0.5 }}
            />
          )}
          <span className="relative z-10">{cat.label}</span>
        </button>
      ))}
    </div>
  );
}