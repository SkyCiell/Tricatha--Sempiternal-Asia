import React from "react";
import EditorialHero from "../components/EditorialHero";
import WhatWeDoIntro from "../components/WhatWeDoIntro";
import WhyTSASection from "../components/WhyTSASection";
import BusinessGroupSection from "../components/BusinessGroupSection";
import ImpactNumbers from "../components/ImpactNumbers";
import FeaturedProjectsSection from "../components/FeaturedProjectsSection";
import EditorialCTA from "../components/EditorialCTA";

export default function HomePage({ navigateTo, onOpenWorkModal }) {
  return (
    <div className="bg-[#071731] text-[#F1F5F9] font-sans selection:bg-[#C8102E] selection:text-white">
      
      {/* 1. Strong Company Introduction & Business/Event Positioning */}
      <EditorialHero
        onExploreWork={() => (navigateTo ? navigateTo("/events") : null)}
        onLetsTalk={() => (navigateTo ? navigateTo("/contact") : null)}
      />

      {/* 2. What TSA Does: Core Operational Disciplines */}
      <WhatWeDoIntro navigateTo={navigateTo} />

      {/* 3. Key Positioning & Institutional Rigor */}
      <WhyTSASection navigateTo={navigateTo} />

      {/* 4. TSA Business Group: ENCHANTE, DNA STUDIO, GWI, GOADV */}
      <BusinessGroupSection navigateTo={navigateTo} />

      {/* 5. Operational Scale & Verified Venue Provenance */}
      <ImpactNumbers />

      {/* 5. Selected Events & Highlighted Case Records */}
      <FeaturedProjectsSection
        navigateTo={navigateTo}
        onOpenWorkModal={onOpenWorkModal}
      />

      {/* 6. Concise Corporate Call to Action Directing to Key Pages */}
      <EditorialCTA
        onStartConversation={() => (navigateTo ? navigateTo("/contact") : null)}
        onExploreWork={() => (navigateTo ? navigateTo("/events") : null)}
      />

    </div>
  );
}
