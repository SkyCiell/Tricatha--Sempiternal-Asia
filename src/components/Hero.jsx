import React from "react";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import heroVideo from "../assets/0805.mp4";
import heroPoster from "../assets/DSC08824.JPG";

export default function Hero({ scrollToSection }) {
  const tickerItems = [
    "SOVEREIGN ADVISORY",
    "18 DIPLOMATIC MISSIONS",
    "12 BILATERAL ACCORDS",
    "GOVTECH COMMAND",
    "DNA STUDIO BROADCAST",
    "HEAD-OF-STATE PROTOCOL",
    "THE CITY TOWER JAKARTA"
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-between bg-[#071A33] text-white overflow-hidden pt-24 sm:pt-28"
    >
      {/* 1. Background Video & Image Layer with Ambient Dark Navy Overlays */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster={heroPoster}
          className="w-full h-full object-cover opacity-25 scale-105"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        {/* Navy depth overlays */}
        <div className="absolute inset-0 bg-[#071A33]/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071A33] via-transparent to-[#071A33]/90" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#071A33]/50 to-[#071A33]" />
      </div>

      {/* 2. Massive Monumental Hero Content Area */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-8 py-16 sm:py-24 my-auto w-full">
        <div className="max-w-5xl space-y-8">

          {/* Monumental Clamp Headline (MAIN EO Visual Rhythm) */}
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-[5.75rem] font-black uppercase tracking-tight leading-[1.04] text-white">
            <span className="block">
              MAKE EVERY <span className="text-[#C62828]">MANDATE</span>
            </span>
            <span className="block">
              A <span className="text-[#C62828]">SOVEREIGN</span> IMPACT.
            </span>
          </h1>

          {/* Authoritative Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-[#CBD5E1] max-w-2xl font-normal leading-relaxed">
            PT Tricatha Sempiternal Asia (TSA) bridges sovereign policy, diplomatic protocol, and high-stakes corporate engagement across Indonesia and Southeast Asia. Headquartered at The City Tower in Jakarta.
          </p>

          {/* Dual Pill Action CTAs (Matching Reference Website Interaction) */}
          <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5">
            <button
              onClick={() => scrollToSection("services")}
              className="px-8 py-4 bg-[#C62828] hover:bg-[#a82020] text-white text-xs font-mono font-bold uppercase tracking-[0.16em] rounded-full transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer shadow-lg hover:scale-105 group"
            >
              <span>EXPLORE PRACTICE DOSSIER</span>
              <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-[#071A33] transition-colors">
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </button>

            <button
              onClick={() => scrollToSection("contact")}
              className="px-8 py-4 border-2 border-white/30 hover:border-white hover:bg-white hover:text-[#071A33] text-white text-xs font-mono font-bold uppercase tracking-[0.16em] rounded-full transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>INITIATE ENGAGEMENT</span>
            </button>
          </div>

        </div>
      </div>

      {/* 4. Bottom Footer Elements: Live Marquee Ticker */}
      <div className="relative z-10 w-full">

        {/* Live Strategic Marquee Ticker */}
        <div className="border-t border-white/10 bg-[#0B1F3A]/70 backdrop-blur-sm py-3 overflow-hidden flex items-center text-xs font-mono text-[#CBD5E1] whitespace-nowrap select-none">
          <div className="px-4 sm:px-8 font-bold text-[#C62828] uppercase tracking-widest shrink-0 flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[#C62828]" />
            <span>CORE FOCUS</span>
          </div>
          <div className="flex items-center gap-12 text-white font-bold text-xs uppercase tracking-widest animate-marquee">
            {tickerItems.concat(tickerItems).map((item, idx) => (
              <div key={idx} className="flex items-center gap-4">
                <span>{item}</span>
                <span className="w-1.5 h-1.5 bg-[#C62828]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
