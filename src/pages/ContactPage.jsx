import React from "react";
import Contact from "../components/Contact";

export default function ContactPage() {
  return (
    <div className="pt-20 bg-[#071731] min-h-screen text-[#F1F5F9] font-sans selection:bg-[#C8102E] selection:text-white">
      {/* 1. Page Header - Deep Navy Editorial Banner */}
      <section className="relative py-20 sm:py-28 bg-[#0A1F44] text-white border-b border-white/10 overflow-hidden">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#C8102E] uppercase tracking-wider font-semibold">
              <span className="w-1.5 h-1.5 bg-[#C8102E] rounded-full" />
              <span>EXECUTIVE SECRETARIAT · CONFIDENTIAL INTAKE</span>
            </div>

            <h1 className="font-heading text-3xl sm:text-5xl lg:text-[56px] font-semibold tracking-tight text-white leading-[1.08]">
              Initiate Mandate <br />
              <span className="text-slate-300 font-normal">&amp; Executive Inquiry.</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl pt-1">
              Connect with the Executive Secretariat at The City Tower in Jakarta. All transmissions are received under strict institutional confidentiality covenants.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Main Contact Form & Location Section */}
      <Contact />

      {/* 3. Emergency Summit Hotline Bar */}
      <section className="py-8 bg-[#050F22] border-t border-white/10 font-mono text-xs">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[#C8102E]" />
            <span className="text-slate-400">
              URGENT MINISTERIAL &amp; BILATERAL SUMMIT DISPATCH:
            </span>
            <span className="text-white font-semibold tracking-wider">+62 21 2358 4500 (EXT. 101)</span>
          </div>

          <div className="text-slate-400 text-[11px]">
            OPERATIONAL CLEARANCE: 24/7 FOR ACTIVE PLENARY DEPLOYMENTS
          </div>
        </div>
      </section>
    </div>
  );
}
