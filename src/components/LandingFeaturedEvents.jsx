import React, { useMemo } from "react";
import { ArrowUpRight } from "lucide-react";
import Masonry from "./Masonry";
import { EVENTS_DATA } from "../data/eventsData";

export default function LandingFeaturedEvents({ navigateTo }) {
  const featuredEvents = useMemo(() => {
    const appmbgi = EVENTS_DATA.find((e) => e.slug === "appmbgi-national-summit-2026") || EVENTS_DATA[0];
    const taperaTb = EVENTS_DATA.find((e) => e.slug === "team-building-bp-tapera-2025") || EVENTS_DATA[1];
    const restorativeJustice = EVENTS_DATA.find((e) => e.slug === "book-launching-restorative-justice") || EVENTS_DATA[2];
    const illuminate = EVENTS_DATA.find((e) => e.slug === "illuminate-asia-exclusive-evening") || EVENTS_DATA[3];
    const investment = EVENTS_DATA.find((e) => e.slug === "indonesia-europe-investment-summit-2023") || EVENTS_DATA[4];
    const adobe = EVENTS_DATA.find((e) => e.slug === "adobe-ai-art-revolution") || EVENTS_DATA[5];

    return [
      { ...appmbgi, colSpan: 1 },
      { ...taperaTb, colSpan: 1 },
      { ...restorativeJustice, colSpan: 1 },
      { ...illuminate, colSpan: 1 },
      { ...investment, colSpan: 1 },
      { ...adobe, colSpan: 1 }
    ];
  }, []);

  const handleEventClick = (item) => {
    const targetUrl = item.slug ? `/events/${item.slug}` : `/events/${item.id}`;
    if (navigateTo) {
      navigateTo(targetUrl);
    }
  };

  const handleViewAllEvents = () => {
    if (navigateTo) {
      navigateTo("/events");
    }
  };

  return (
    <section
      id="event"
      data-nav-theme="light"
      className="bg-[#FAF9F6] text-[#071731] border-b border-[#E2E8F0] py-16 sm:py-24 relative"
      aria-label="TSA Featured Events"
    >
      <div className="max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-10 sm:pb-14 border-b border-[#E2E8F0]">
          <div className="space-y-3 max-w-3xl">
            <h2 className="font-heading text-3xl sm:text-5xl font-bold text-[#071731] tracking-tight leading-[1.1]">
              Featured Events.
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#64748B] leading-relaxed font-normal">
              Selected landmark productions demonstrating TSA's plenary architecture, MICE scale, and sovereign protocol standards.
            </p>
          </div>

          <div className="shrink-0">
            <button
              type="button"
              onClick={handleViewAllEvents}
              className="btn-editorial-red text-xs py-3 px-6 cursor-pointer inline-flex items-center gap-2 shadow-xs"
            >
              <span>Explore All Events</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Grid Showcase dengan proporsi seragam dan interaktivitas React Bits */}
        <div className="pt-10">
          <Masonry
            items={featuredEvents}
            columns={3}
            onItemClick={handleEventClick}
          />
        </div>
      </div>
    </section>
  );
}
