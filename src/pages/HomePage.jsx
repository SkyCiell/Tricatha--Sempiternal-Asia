import React from "react";
import EditorialHero from "../components/EditorialHero";
import PinnedBusinessGroup from "../components/PinnedBusinessGroup";
import PinnedEvents from "../components/PinnedEvents";
import PinnedActivities from "../components/PinnedActivities";
import PinnedContact from "../components/PinnedContact";

export default function HomePage({ navigateTo, onOpenWorkModal: _onOpenWorkModal }) {
  return (
    <div className="bg-[#071731] text-[#F1F5F9] font-sans selection:bg-[#C8102E] selection:text-white">

      {/* 01 — FULLSCREEN VIDEO INTRO & PROGRESSIVE IDENTITY REVEAL */}
      <EditorialHero
        onExploreWork={() => {
          if (navigateTo) {
            navigateTo("/event");
          } else {
            const el = document.getElementById("event");
            if (el) {
              if (window.__lenis) {
                window.__lenis.scrollTo(el);
              } else {
                el.scrollIntoView({ behavior: "smooth" });
              }
            }
          }
        }}
        onLetsTalk={() => {
          if (navigateTo) {
            navigateTo("/contact");
          } else {
            const el = document.getElementById("contact");
            if (el) {
              if (window.__lenis) {
                window.__lenis.scrollTo(el);
              } else {
                el.scrollIntoView({ behavior: "smooth" });
              }
            }
          }
        }}
      />

      {/* 02 — FULLSCREEN BUSINESS STORY (HORIZONTAL TRACK ACROSS 4 SPECIALIZED PRACTICES) */}
      <PinnedBusinessGroup navigateTo={navigateTo} />

      {/* 03 — FULLSCREEN EVENT STORY (HORIZONTAL IMAGE TRANSITIONS & DELAYED PARALLAX) */}
      <PinnedEvents navigateTo={navigateTo} />

      {/* 04 — FULLSCREEN ACTIVITIES / NEWS (MIXED DIRECTIONAL TRANSITION) */}
      <PinnedActivities navigateTo={navigateTo} />

      {/* 05 — FULLSCREEN CONTACT (SLOW PARALLAX REVEAL & EXECUTIVE SECRETARIAT) */}
      <PinnedContact navigateTo={navigateTo} />

    </div>
  );
}
