import React from "react";
import { ArrowUpRight } from "lucide-react";

export default function CTASection({ scrollToSection }) {
  return (
    <section className="py-24 sm:py-32 lg:py-36 bg-[#071A33] text-white border-b border-white/10 relative overflow-hidden">
      
      {/* Background Subtle Watermark */}
      <div className="absolute right-0 bottom-0 select-none pointer-events-none opacity-5 font-display text-[18vw] font-black text-white leading-none">
        STRATEGY
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 relative z-10">
        <div className="max-w-4xl space-y-8">
          

          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-black uppercase tracking-tight text-white leading-[0.98]">
            LET’S BUILD <br />
            THE RIGHT <span className="text-[#C62828]">ENGAGEMENT</span> <br />
            FRAMEWORK.
          </h2>

          <p className="font-normal text-base sm:text-lg text-[#CBD5E1] leading-relaxed max-w-2xl">
            Initiate a confidential discussion with TSA's partners at The City Tower in Jakarta to deliberate sovereign affairs, diplomatic summit rollouts, or strategic market expansion across Southeast Asia.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              onClick={() => scrollToSection("contact")}
              className="px-8 py-4 bg-[#C62828] hover:bg-[#a82020] text-white text-xs font-mono font-bold uppercase tracking-[0.16em] rounded-full transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer shadow-lg hover:scale-105"
            >
              <span>INITIATE MANDATE CONSULTATION</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <a
              href="mailto:info@tsa-group.com"
              className="px-8 py-4 border-2 border-white/30 hover:border-white hover:bg-white hover:text-[#071A33] text-white text-xs font-mono font-bold uppercase tracking-[0.16em] rounded-full transition-all duration-300 flex items-center justify-center gap-2"
            >
              <span>DIRECT EXECUTIVE DESK</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
