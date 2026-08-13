import React from "react";
import { servicesList } from "../data/tsaData";
import FlowingMenu from "./FlowingMenu";

export default function Services({ scrollToSection, onPreselectService }) {
  const handleCapabilityInquire = (title) => {
    if (onPreselectService) onPreselectService(title);
    scrollToSection("contact");
  };

  return (
    <section id="services" className="py-24 sm:py-28 lg:py-32 bg-[#071A2B] text-[#F4F6F2] relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col">
        
        {/* Editorial Heading Container */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <h2 className="font-heading text-4xl sm:text-6xl md:text-7xl font-extrabold text-[#F4F6F2] tracking-tighter uppercase leading-[0.92]">
              INTEGRATED <br />
              <span className="text-[#155EEF]">CAPABILITIES.</span>
            </h2>
          </div>

          <div className="max-w-xs text-slate-300 text-sm sm:text-base font-mono leading-relaxed border-l-2 border-[#155EEF] pl-4">
            “Different disciplines. One connected approach.”
          </div>
        </div>

        {/* Typography-Focused FlowingMenu List */}
        <div className="w-full overflow-hidden border border-white/10 rounded-3xl bg-[#071A2B]">
          <FlowingMenu
            items={servicesList}
            onItemClick={handleCapabilityInquire}
          />
        </div>

      </div>
    </section>
  );
}
