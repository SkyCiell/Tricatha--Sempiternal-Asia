import React from "react";
import { companyInfo } from "../data/tsaData";
import { ArrowUp } from "lucide-react";
import tsaEmblem from "../assets/tsa-emblem-transparent.png";

export default function Footer({ scrollToSection }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#071A2B] border-t border-white/10 pt-16 pb-12 text-slate-400 font-mono text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-12 border-b border-white/10">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#42D3A5] to-[#087F5B] p-2.5 overflow-hidden shadow-md flex items-center justify-center shrink-0 border border-white/20">
              <img src={tsaEmblem} alt="Tricatha Sempiternal Asia Emblem" className="w-full h-full object-contain object-center" />
            </div>
            <div>
              <div className="font-heading text-lg font-bold text-white uppercase tracking-widest mb-0.5">
                TRICATHA SEMPITERNAL ASIA
              </div>
              <div className="text-[11px] text-[#42D3A5] uppercase tracking-wider">
                FUTURE SOCIETY × STRATEGIC INNOVATION
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-6 text-xs text-slate-300 uppercase">
            <button onClick={() => scrollToSection("about")} className="hover:text-[#42D3A5]">ABOUT</button>
            <button onClick={() => scrollToSection("services")} className="hover:text-[#42D3A5]">SERVICES</button>
            <button onClick={() => scrollToSection("approach")} className="hover:text-[#42D3A5]">APPROACH</button>
            <button onClick={() => scrollToSection("work")} className="hover:text-[#42D3A5]">WORK</button>
            <button onClick={() => scrollToSection("contact")} className="hover:text-[#42D3A5]">CONTACT</button>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px]">
          <div>
            © {currentYear} TRICATHA SEMPITERNAL ASIA. ALL RIGHTS RESERVED.
          </div>

          <button
            onClick={() => scrollToSection("hero")}
            className="flex items-center gap-2 text-[#2F80FF] hover:text-[#42D3A5] uppercase tracking-widest"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
