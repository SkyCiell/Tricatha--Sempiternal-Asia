import React from "react";
import EditorialHero from "../components/EditorialHero";
import WhatWeDoIntro from "../components/WhatWeDoIntro";
import BusinessGroupSection from "../components/BusinessGroupSection";
import EventSection from "../components/EventSection";
import ActivitiesSection from "../components/ActivitiesSection";
import Contact from "../components/Contact";
import ImpactNumbers from "../components/ImpactNumbers";

export default function HomePage({ navigateTo, onOpenWorkModal }) {
  return (
    <div className="bg-[#071731] text-[#F1F5F9] font-sans selection:bg-[#C8102E] selection:text-white">

      {/* 1. HOME: Editorial Hero Section (Deep Navy Background, Large Composition, Authoritative Messaging) */}
      <EditorialHero
        onExploreWork={() => {
          const el = document.getElementById("event");
          if (el) {
            if (window.__lenis) {
              window.__lenis.scrollTo(el, { offset: -70 });
            } else {
              el.scrollIntoView({ behavior: "smooth" });
            }
          } else if (navigateTo) {
            navigateTo("/events");
          }
        }}
        onLetsTalk={() => {
          const el = document.getElementById("contact");
          if (el) {
            if (window.__lenis) {
              window.__lenis.scrollTo(el, { offset: -70 });
            } else {
              el.scrollIntoView({ behavior: "smooth" });
            }
          } else if (navigateTo) {
            navigateTo("/contact");
          }
        }}
      />

      {/* 2. Operational Disciplines & Institutional Credentials Transition Strip */}
      <WhatWeDoIntro navigateTo={navigateTo} />

      {/* 3. BUSINESS GROUP: Structured Layout with Multiple Content Blocks (Blue and White Color System) */}
      <BusinessGroupSection navigateTo={navigateTo} />

      {/* 4. Operational Scale & Measured Attendance Telemetry */}
      <ImpactNumbers />

      {/* 5. EVENT: Event-Focused Asymmetric Section with Upcoming & Featured Highlights (Deep Navy & Strong Red Accent) */}
      <EventSection
        navigateTo={navigateTo}
        onOpenWorkModal={onOpenWorkModal}
      />

      {/* 6. ACTIVITIES: Distinct Warm Off-White Editorial Magazine Layout for Programs, Collaborations & Initiatives */}
      <ActivitiesSection
        navigateTo={navigateTo}
        onOpenWorkModal={onOpenWorkModal}
      />

      {/* 7. CONTACT: Strong Closing Section (Deep Navy Color Treatment, Coordinates & Mandate Intake) */}
      <Contact />

    </div>
  );
}
