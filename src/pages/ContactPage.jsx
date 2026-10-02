import React from "react";
import Contact from "../components/Contact";

export default function ContactPage() {
  return (
    <div className="bg-[#071731] min-h-screen text-[#F1F5F9] font-sans pt-20 sm:pt-28 pb-20 selection:bg-[#C8102E] selection:text-white">
      {/* Main Asymmetric Contact, Map, Coordinates & Streamlined Intake */}
      <Contact isDedicatedPage={true} />

      {/* Emergency Summit Dispatch Strip */}
      <section className="max-w-[1520px] mx-auto px-4 sm:px-8 mt-12">
        <div className="p-6 sm:p-8 bg-[#050F22] border border-white/10 rounded font-mono text-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#C8102E] animate-pulse" />
            <span className="text-slate-400 uppercase tracking-wider">
              Urgent Ministerial &amp; Plenary Summit Dispatch Line:
            </span>
            <span className="text-white font-semibold tracking-wider font-mono">+62 21 2358 4500 (EXT. 101)</span>
          </div>

          <div className="text-slate-400 text-[11px] font-mono">
            OPERATIONAL CLEARANCE: 24/7 FOR ACTIVE PLENARY DEPLOYMENTS
          </div>
        </div>
      </section>
    </div>
  );
}
