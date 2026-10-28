import React, { useState } from "react";
import { base44 } from "@/api/base44Client";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import IdeaCard from "../components/ideas/IdeaCard";
import IdeaFilters from "../components/ideas/IdeaFilters";

export default function Ideas() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const { data: ideas = [], isLoading } = useQuery({
    queryKey: ["ideas"],
    queryFn: () => base44.entities.Idea.list("-created_date"),
  });

  const filteredIdeas = ideas.filter((idea) => {
    const categoryMatch = activeCategory === "all" || idea.category === activeCategory;
    const searchMatch =
      !searchQuery ||
      idea.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      idea.summary?.toLowerCase().includes(searchQuery.toLowerCase());
    return categoryMatch && searchMatch;
  });

  return (
    <div className="pt-28 pb-20 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="text-xs tracking-[0.3em] uppercase text-[var(--gold)] mb-4 block">
            The Repository
          </span>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-4">
            Take & <span className="italic text-[var(--gold-light)]">Implement Me</span>
          </h1>
          <p className="text-white/40 text-lg max-w-2xl leading-relaxed">
            Complete, actionable ideas published by Leone University. Each one is a blueprint—free for anyone to take, adapt, and bring to life.
          </p>
        </motion.div>

        {/* Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative mb-8 max-w-md"
        >
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
          <input
            type="text"
            placeholder="Search ideas..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-3 rounded-xl bg-white/[0.03] border border-white/5 text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-[var(--gold)]/30 transition-colors"
          />
        </motion.div>

        {/* Filters */}
        <IdeaFilters activeCategory={activeCategory} setActiveCategory={setActiveCategory} />

        {/* Grid */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array(6).fill(0).map((_, i) => (
              <div key={i} className="rounded-2xl border border-white/5 bg-white/[0.02] p-7 animate-pulse">
                <div className="h-3 bg-white/5 rounded w-20 mb-6" />
                <div className="h-5 bg-white/5 rounded w-3/4 mb-3" />
                <div className="h-3 bg-white/5 rounded w-full mb-2" />
                <div className="h-3 bg-white/5 rounded w-2/3" />
              </div>
            ))}
          </div>
        ) : filteredIdeas.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-5xl mb-4">💭</div>
            <p className="text-white/30 text-lg">No ideas found</p>
            <p className="text-white/15 text-sm mt-2">Try adjusting your filters or search query</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredIdeas.map((idea, i) => (
              <IdeaCard key={idea.id} idea={idea} index={i} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}