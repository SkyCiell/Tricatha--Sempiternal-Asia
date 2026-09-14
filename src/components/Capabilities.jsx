import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { coreCapabilities } from "../data/tsaData";
import ServiceModal from "./ServiceModal";

export default function Capabilities({ scrollToSection, onPreselectService }) {
  const [selectedService, setSelectedService] = useState(null);

  const handleInquire = (serviceTitle) => {
    if (onPreselectService) onPreselectService(serviceTitle);
    scrollToSection("contact");
  };

  return (
    <section id="services" className="py-20 sm:py-28 bg-[#071A33] text-white border-b border-white/10">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
        
        {/* 1. Split 50/50 Top Banner (MAIN EO Signature Element) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12">
          
          {/* Left Card: Corporate Red with Dot Matrix & Stroke Text */}
          <div className="lg:col-span-5 bg-[#C62828] text-white p-8 sm:p-12 rounded-2xl relative overflow-hidden flex flex-col justify-between shadow-2xl">
            {/* Dot Pattern Overlay */}
            <div
              className="absolute inset-0 opacity-15 pointer-events-none"
              style={{
                backgroundImage: "radial-gradient(white 1px, transparent 1px)",
                backgroundSize: "16px 16px"
              }}
            />

            <div className="relative z-10 space-y-4">
              <div
                className="font-display text-5xl sm:text-7xl font-black uppercase tracking-tight leading-none select-none"
                style={{
                  WebkitTextStroke: "1.5px white",
                  WebkitTextFillColor: "transparent"
                }}
              >
                SERVICES
              </div>

              <h2 className="font-display text-2xl sm:text-3xl font-black uppercase tracking-tight text-white leading-tight">
                OUR CORE EXPERTISE &amp; SOVEREIGN DISCIPLINES
              </h2>
            </div>

            <div className="relative z-10 pt-8 mt-6 border-t border-white/20 font-mono text-xs text-white/90">
              SIX ACCREDITED ADVISORY &amp; EXECUTION PRACTICES
            </div>
          </div>

          {/* Right Card: Dark Navy with Strategic Overview & CTA */}
          <div className="lg:col-span-7 bg-[#0B1F3A] text-white p-8 sm:p-12 rounded-2xl relative overflow-hidden flex flex-col justify-between shadow-2xl border border-white/10">
            <div className="space-y-6">
              <div className="flex items-center gap-3 font-mono text-xs text-[#94A3B8]">
                <span className="w-1.5 h-1.5 bg-[#C62828]" />
                <span className="text-white font-bold uppercase tracking-[0.18em]">
                  INTEGRATED ARCHITECTURE &amp; TURNKEY DELIVERY
                </span>
              </div>

              <h3 className="font-display text-2xl sm:text-4xl font-extrabold uppercase tracking-tight text-white leading-tight">
                BRIDGING STRATEGY, POLICY INTELLIGENCE &amp; PLENARY EXECUTION.
              </h3>

              <p className="text-sm sm:text-base text-[#CBD5E1] leading-relaxed max-w-2xl font-normal">
                Every practice area within TSA is designed to withstand the scrutiny of sovereign ministries, diplomatic protocols, and major corporate boards. We combine analytical foresight with flawless on-ground delivery.
              </p>
            </div>

            <div className="pt-8 mt-6 border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
              <div className="font-mono text-xs text-[#94A3B8]">
                ACCORD-TESTED · HEAD-OF-STATE PROTOCOL STANDARD
              </div>
              <button
                onClick={() => scrollToSection("contact")}
                className="px-6 py-3 bg-[#C62828] hover:bg-white hover:text-[#071A33] text-white font-mono font-bold text-xs uppercase tracking-widest rounded-full transition-all flex items-center justify-center gap-2 cursor-pointer shrink-0"
              >
                <span>REQUEST PRACTICE DOSSIER</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* 2. Six-Card Dense Interactive Service Grid in Dark Navy */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreCapabilities.map((cap) => (
            <div
              key={cap.id}
              onClick={() => setSelectedService(cap)}
              className="group bg-[#0B1F3A] border border-white/10 rounded-2xl p-8 hover:border-[#C62828] transition-all duration-300 flex flex-col justify-between relative overflow-hidden shadow-lg hover:shadow-2xl cursor-pointer"
            >
              {/* Corner Bracket Accents */}
              <span className="absolute top-3 left-3 text-white/20 group-hover:text-[#C62828] font-mono text-xs select-none transition-colors">+</span>
              <span className="absolute top-3 right-3 text-white/20 group-hover:text-[#C62828] font-mono text-xs select-none transition-colors">+</span>

              <div className="space-y-6">
                {/* Accent Line & Category */}
                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center gap-3">
                    <div className="h-[2px] w-8 group-hover:w-16 bg-[#C62828] transition-all duration-500" />
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#94A3B8] font-bold">
                      {cap.category}
                    </span>
                  </div>
                </div>

                {/* Title & Short Description */}
                <div className="space-y-3">
                  <h3 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-tight text-white group-hover:text-[#CBD5E1] transition-colors">
                    {cap.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed line-clamp-3">
                    {cap.shortDesc}
                  </p>
                </div>

                {/* Key Deliverables Pills */}
                <div className="space-y-2 pt-2 border-t border-white/10">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-[#94A3B8] font-bold">
                    CORE PROTOCOLS
                  </div>
                  <div className="space-y-1.5">
                    {cap.deliverables.slice(0, 3).map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs font-mono text-[#CBD5E1]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C62828] shrink-0 mt-1.5" />
                        <span className="line-clamp-1">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Bar */}
              <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-white group-hover:text-[#C62828] transition-colors">
                  VIEW PROTOCOL SPEC
                </span>
                <div className="w-8 h-8 rounded-full bg-white/10 group-hover:bg-[#C62828] group-hover:text-white flex items-center justify-center transition-all">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              {/* Bottom Edge Accent Reveal */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#C62828] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </div>
          ))}
        </div>

      </div>

      {/* Service Modal */}
      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onSelectContact={handleInquire}
      />
    </section>
  );
}
