import React from "react";
import Capabilities from "../components/Capabilities";
import StrategicEngagement from "../components/StrategicEngagement";
import SelectedProjects from "../components/SelectedProjects";
import { ArrowUpRight } from "lucide-react";

export default function EventManagementPage({ navigateTo }) {
  const handleInquiry = () => {
    if (navigateTo) navigateTo("/contact");
  };

  return (
    <div className="pt-20 bg-[#FFFFFF] min-h-screen text-[#0A1F44] font-sans selection:bg-[#C8102E] selection:text-white">
      {/* 1. Page Hero Banner - Deep Navy #0A1F44 */}
      <section className="relative py-20 sm:py-28 bg-[#0A1F44] text-white border-b border-white/10 overflow-hidden">
        {/* Subtle dot matrix */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(white 1px, transparent 1px)",
            backgroundSize: "28px 28px"
          }}
        />

        <div className="max-w-[1560px] 2xl:max-w-[1680px] mx-auto px-4 sm:px-8 relative z-10">
          <div className="flex items-center gap-2.5 text-xs font-mono text-[#C8102E] font-medium uppercase tracking-widest mb-4">
            <span className="w-2 h-0.5 bg-[#C8102E]" />
            <span>Executive Event Management &amp; Protocol</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-3xl space-y-4">
              <h1 className="font-heading text-3xl sm:text-5xl lg:text-[54px] font-medium tracking-tight text-white leading-[1.14]">
                Event Management <br />
                <span className="text-white/85 font-normal">&amp; Plenary Governance.</span>
              </h1>
              <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl">
                Turnkey architectural management for head-of-state diplomatic assemblies, high-capacity institutional conventions, and experiential corporate summits across Southeast Asia.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <button
                onClick={handleInquiry}
                className="btn-editorial px-7 py-3.5 bg-[#C8102E] hover:bg-[#A50D25] text-white text-xs font-semibold uppercase tracking-wider rounded-md transition-editorial flex items-center justify-center gap-2 cursor-pointer shadow-sm hover:shadow-md"
              >
                <span>Initiate Event Mandate</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 pt-8 border-t border-white/10 font-mono text-xs">
            <div className="p-4 bg-white/5 border border-white/10 rounded-md">
              <div className="text-slate-400 uppercase">PROTOCOL CLEARANCE</div>
              <div className="text-base font-medium text-white mt-1">Head-of-State Grade</div>
            </div>
            <div className="p-4 bg-white/5 border border-white/10 rounded-md">
              <div className="text-slate-400 uppercase">VENUE CAPACITY</div>
              <div className="text-base font-medium text-[#C8102E] mt-1">50,000+ Delegates</div>
            </div>
            <div className="p-4 bg-white/5 border border-white/10 rounded-md">
              <div className="text-slate-400 uppercase">TELEMETRY &amp; AV</div>
              <div className="text-base font-medium text-white mt-1">4K Broadcast &amp; RFID</div>
            </div>
            <div className="p-4 bg-white/5 border border-white/10 rounded-md">
              <div className="text-slate-400 uppercase">REGIONAL REACH</div>
              <div className="text-base font-medium text-[#C8102E] mt-1">ASEAN Corridor</div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Core Capabilities & Services */}
      <Capabilities
        scrollToSection={() => handleInquiry()}
        onPreselectService={() => {}}
      />

      {/* 3. Strategic Process */}
      <StrategicEngagement scrollToSection={() => handleInquiry()} />

      {/* 4. Portfolio Case Studies */}
      <SelectedProjects />

      {/* 5. Bottom Call to Action - Light Neutral #F5F6F8 */}
      <section className="py-20 bg-[#F5F6F8] border-t border-slate-200/80">
        <div className="max-w-[1560px] 2xl:max-w-[1680px] mx-auto px-4 sm:px-8 text-center space-y-4">
          <span className="font-mono text-xs text-[#C8102E] font-medium uppercase tracking-widest block">
            HEADQUARTERED AT THE CITY TOWER, JAKARTA
          </span>
          <h2 className="font-heading text-2xl sm:text-4xl font-medium text-[#0A1F44] tracking-tight">
            Ready to Architect an Unmatched Plenary Experience?
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto font-normal leading-relaxed">
            Our sovereign event directors and spatial scenographers ensure flawless execution, bilateral decorum, and zero technical latency.
          </p>
          <div className="pt-2">
            <button
              onClick={handleInquiry}
              className="btn-editorial px-8 py-3.5 bg-[#0A1F44] hover:bg-[#C8102E] text-white text-xs font-semibold uppercase tracking-wider rounded-md transition-editorial inline-flex items-center gap-2 cursor-pointer shadow-sm hover:shadow-md"
            >
              <span>Submit Event Specifications</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
