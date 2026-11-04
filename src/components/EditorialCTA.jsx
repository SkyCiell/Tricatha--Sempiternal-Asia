import React from "react";
import { ArrowUpRight } from "lucide-react";
const plenaryPhoto = "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1600&auto=format&fit=crop";

export default function EditorialCTA({ onStartConversation, onExploreWork }) {
  const handleScrollToProjects = () => {
    if (onExploreWork) {
      onExploreWork();
    } else {
      const el = document.querySelector("#event") || document.querySelector("#projects");
      if (el) {
        if (window.__lenis) {
          window.__lenis.scrollTo(el, { offset: -80 });
        } else {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  return (
    <section id="contact" className="py-14 sm:py-28 bg-[#071731] text-white relative overflow-hidden border-b border-white/10">
      {/* Background Event Photography with Deep Navy Scrim */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src={plenaryPhoto}
          alt="High-Stakes Plenary Summit Staging by TSA"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071731] via-[#071731]/95 to-[#071731]" />
      </div>

      <div className="max-w-[1520px] mx-auto px-4 sm:px-8 relative z-10">
        <div className="max-w-4xl space-y-6 sm:space-y-8">
          <div className="space-y-3 sm:space-y-4">
            <span className="text-[11px] sm:text-xs font-mono tracking-wider text-[#C8102E] font-semibold uppercase block">
              Direct Secretariat
            </span>

            <h2 className="font-heading text-2xl sm:text-4xl lg:text-[52px] font-bold tracking-tight text-white leading-[1.12]">
              Initiate an Executive Mandate &amp; <br />
              <span className="font-editorial italic font-normal text-slate-200">
                Sovereign Event Assembly.
              </span>
            </h2>

            <p className="font-sans text-xs sm:text-base lg:text-lg text-slate-300/90 max-w-2xl font-normal leading-relaxed">
              Whether orchestrating a monumental commercial trade exposition, sovereign diplomatic plenary, or high-stakes corporate assembly, our directors coordinate directly with your leadership team with zero margin for error.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-1 sm:pt-2">
            <button
              type="button"
              onClick={onStartConversation}
              className="w-full sm:w-auto btn-editorial-red text-xs sm:text-sm py-3.5 px-7 cursor-pointer flex items-center justify-center gap-2 min-h-[48px] touch-manipulation active:scale-[0.99]"
            >
              <span>Initiate Direct Consultation</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={handleScrollToProjects}
              className="w-full sm:w-auto btn-editorial-outline text-xs sm:text-sm py-3.5 px-7 cursor-pointer flex items-center justify-center gap-2 min-h-[48px] touch-manipulation active:scale-[0.99]"
            >
              <span>Review Verified Case Records</span>
            </button>
          </div>

          {/* Direct Secretariat Contacts */}
          <div className="pt-8 sm:pt-10 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6 text-xs text-slate-300 font-sans">
            <div>
              <div className="text-slate-400 text-[10px] uppercase tracking-wider font-mono">Executive Secretariat</div>
              <a href="mailto:de@sempiternalasia.com" className="font-medium text-white hover:text-[#C8102E] transition-colors mt-1 block py-1">
                de@sempiternalasia.com
              </a>
            </div>

            <div>
              <div className="text-slate-400 text-[10px] uppercase tracking-wider font-mono">Telephone Inquiries</div>
              <a href="tel:+628121000784" className="font-medium text-white hover:text-[#C8102E] transition-colors mt-1 block py-1">
                +62-812-1000-784
              </a>
            </div>

            <div>
              <div className="text-slate-400 text-[10px] uppercase tracking-wider font-mono">Headquarters Location</div>
              <p className="font-medium text-white mt-1 py-1">
                Sudirman Park, Central Jakarta, Indonesia
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
