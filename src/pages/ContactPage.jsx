import React from "react";
import Contact from "../components/Contact";

export default function ContactPage() {
  return (
    <div className="pt-20 bg-[#FFFFFF] min-h-screen text-[#0A1F44] font-sans selection:bg-[#C8102E] selection:text-white">
      {/* 1. Page Header - Deep Navy #0A1F44 */}
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

          <div className="max-w-3xl space-y-4">
            <h1 className="font-heading text-3xl sm:text-5xl lg:text-[54px] font-medium tracking-tight text-white leading-[1.14]">
              Initiate Mandate <br />
              <span className="text-white/85 font-normal">&amp; Executive Inquiry.</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl">
              Connect with the Executive Secretariat at The City Tower in Jakarta. All transmissions are received under strict institutional confidentiality covenants.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Main Contact Form & Location Section */}
      <Contact />

      {/* 3. Emergency Summit Hotline Bar - Light Neutral #F5F6F8 */}
      <section className="py-10 bg-[#F5F6F8] border-t border-slate-200/80 font-mono text-xs">
        <div className="max-w-[1560px] 2xl:max-w-[1680px] mx-auto px-4 sm:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[#C8102E] animate-pulse" />
            <span className="text-slate-600">
              URGENT MINISTERIAL &amp; BILATERAL SUMMIT TELEMETRY DESK:
            </span>
            <span className="text-[#0A1F44] font-semibold tracking-wider">+62 21 2358 4500 (EXT. 101)</span>
          </div>

          <div className="text-slate-400">
            OPERATIONAL CLEARANCE: 24/7 FOR ACTIVE PLENARY DEPLOYMENTS
          </div>
        </div>
      </section>
    </div>
  );
}
