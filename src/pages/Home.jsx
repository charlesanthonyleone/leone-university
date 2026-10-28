import React from "react";
import HeroSection from "../components/landing/HeroSection";
import StatsSection from "../components/landing/StatsSection";
import MissionSection from "../components/landing/MissionSection";
import ManifestoSection from "../components/landing/ManifestoSection";
import HomeEcosystemSection from "../components/landing/HomeEcosystemSection";
import CTASection from "../components/landing/CTASection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <StatsSection />
      <MissionSection />
      <ManifestoSection />
      <HomeEcosystemSection />
      <CTASection />
    </div>
  );
}