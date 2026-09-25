import React, { useState } from "react";
import { ArrowUpRight, MapPin, Award } from "lucide-react";
import { featuredEvents } from "../data/tsaData";

export default function FeaturedEvents({ scrollToSection }) {
  const [activeEventIndex, setActiveEventIndex] = useState(0);
  const currentEvent = featuredEvents[activeEventIndex];

  return (
    <section id="events" className="py-20 sm:py-28 bg-[#071A33] text-white border-b border-white/10 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between pb-10 border-b border-white/10 gap-6">
          <div>
            <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white leading-[0.95]">
              FLAGSHIP <br />
              <span className="text-[#C62828]">SUMMITS &amp; ASSEMBLIES.</span>
            </h2>
          </div>

          <p className="max-w-md font-mono text-xs text-[#CBD5E1] leading-relaxed">
            Hover over any summit below to explore its plenary architecture, sovereign delegation protocols, and verified institutional impact.
          </p>
        </div>

        {/* Interactive Gallery System: Large Featured Image + Event Selector */}
        <div className="pt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column (7 cols): Large Interactive Featured Image Viewer */}
          <div className="lg:col-span-7 relative">
            <div className="relative border border-white/15 bg-[#0B1F3A] rounded-2xl overflow-hidden shadow-2xl">
              
              {/* Image Frame with Smooth Transition */}
              <div className="relative aspect-[16/10] sm:aspect-[16/10] w-full overflow-hidden">
                <img
                  key={currentEvent.id}
                  src={currentEvent.image}
                  alt={currentEvent.name}
                  className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-700 animate-fadeIn"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071A33] via-transparent to-transparent opacity-80" />

                {/* Floating Badges */}
                <div className="absolute top-4 left-4 bg-[#071A33]/90 text-white border border-white/20 px-3 py-1.5 rounded-md font-mono text-xs uppercase tracking-wider backdrop-blur-sm">
                  <span className="text-[#C62828] font-bold">SOVEREIGN PLENARY</span> · {currentEvent.location}
                </div>

                <div className="absolute top-4 right-4 bg-[#C62828] text-white px-3 py-1.5 rounded-md font-mono text-xs uppercase tracking-wider font-bold">
                  {currentEvent.year}
                </div>
              </div>

              {/* Anchored Information Bar */}
              <div className="p-6 sm:p-8 bg-[#0B1F3A] text-white border-t border-white/10 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-[#94A3B8]">
                  <div className="flex items-center gap-2 text-[#C62828] font-bold">
                    <Award className="w-4 h-4" />
                    <span>MEASURED IMPACT: {currentEvent.impact}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{currentEvent.location}</span>
                  </div>
                </div>

                <h3 className="font-display text-2xl sm:text-3xl font-black uppercase tracking-tight text-white">
                  {currentEvent.name}
                </h3>

                <p className="text-sm text-[#CBD5E1] leading-relaxed">
                  {currentEvent.shortDesc}
                </p>

                <div className="p-4 bg-[#071A33] border border-white/10 rounded-xl text-xs font-mono text-[#CBD5E1]">
                  <span className="text-white font-bold uppercase">PROTOCOL EXECUTION:</span> {currentEvent.role}
                </div>

                <div className="pt-2 flex justify-end">
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="px-6 py-3 bg-[#C62828] hover:bg-white hover:text-[#071A33] text-white font-mono font-bold text-xs uppercase tracking-widest rounded-full transition-all flex items-center gap-2 cursor-pointer"
                  >
                    <span>INQUIRE PROTOCOL MANDATE</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column (5 cols): Interactive Event Rows (Hover changes image) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="font-mono text-xs text-[#94A3B8] uppercase tracking-widest pb-2 border-b border-white/10">
              SELECT SUMMIT RECORD TO INSPECT:
            </div>

            {featuredEvents.map((event, idx) => {
              const isActive = activeEventIndex === idx;
              return (
                <div
                  key={event.id}
                  onClick={() => setActiveEventIndex(idx)}
                  className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-[#0B1F3A] text-white border-[#C62828] shadow-2xl translate-x-2"
                      : "bg-[#0B1F3A]/40 text-white border-white/10 hover:border-white/30 hover:bg-[#0B1F3A]/80"
                  }`}
                >
                  <div className="flex items-center justify-between font-mono text-xs mb-3">
                    <span className={`font-bold ${isActive ? "text-[#C62828]" : "text-[#94A3B8]"}`}>
                      SUMMIT DOSSIER
                    </span>
                    <span className={isActive ? "text-[#CBD5E1]" : "text-[#94A3B8]"}>
                      {event.year} · {event.location}
                    </span>
                  </div>

                  <h4 className="font-display text-lg sm:text-xl font-bold uppercase tracking-tight mb-2 text-white">
                    {event.name}
                  </h4>

                  <p className="text-xs leading-relaxed line-clamp-2 text-[#CBD5E1]">
                    {event.shortDesc}
                  </p>

                  <div className="pt-4 mt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                    <span className={isActive ? "text-[#C62828] font-bold" : "text-white font-semibold"}>
                      {event.impact}
                    </span>
                    <div className="flex items-center gap-1 font-bold text-[#CBD5E1]">
                      <span className="text-[10px] uppercase">PREVIEW</span>
                      <ArrowUpRight className="w-3 h-3 text-[#C62828]" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
