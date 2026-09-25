import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import plenaryPhoto from "../assets/DSC08824.JPG";

export default function EditorialCTA({ onStartConversation, onExploreWork }) {
  const handleScrollToProjects = () => {
    if (onExploreWork) {
      onExploreWork();
    } else {
      const el = document.querySelector("#projects");
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
    <section id="contact" className="py-20 sm:py-28 bg-[#071731] text-white relative overflow-hidden border-b border-white/10">
      {/* Background Event Photography with Deep Navy Foundation */}
      <div className="absolute inset-0 z-0">
        <img
          src={plenaryPhoto}
          alt="High-Stakes Plenary Summit Staging by TSA"
          className="w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071731] via-[#071731]/95 to-[#071731]" />
      </div>

      <div className="max-w-[1520px] mx-auto px-4 sm:px-8 relative z-10">
        <div className="max-w-4xl space-y-8">
          
          <div className="space-y-4">
            <h2 className="font-heading text-3xl sm:text-5xl lg:text-[56px] font-bold tracking-tight text-white leading-[1.08]">
              Initiate an Executive Mandate or Event Consultation
            </h2>

            <p className="font-sans text-base sm:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed">
              Whether orchestrating a monumental commercial trade exposition, sovereign diplomatic plenary, or high-stakes corporate assembly, our directors coordinate directly with your leadership team.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <button
              onClick={onStartConversation}
              className="btn-editorial-red text-xs sm:text-sm py-3 px-6 cursor-pointer"
            >
              <span>Initiate Direct Consultation</span>
            </button>

            <button
              onClick={handleScrollToProjects}
              className="btn-editorial-outline text-xs sm:text-sm py-3 px-6 cursor-pointer"
            >
              <span>Review Verified Case Records</span>
            </button>
          </div>

          {/* Direct Secretariat Contacts */}
          <div className="pt-10 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs text-slate-300 font-sans">
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded bg-[#0A1F44] border border-white/10 flex items-center justify-center shrink-0">
                <Mail className="w-4 h-4 text-[#C8102E]" />
              </div>
              <div>
                <div className="text-slate-400 text-[10px] uppercase tracking-wider font-mono">Executive Secretariat</div>
                <a href="mailto:info@tsa-group.com" className="font-medium text-white hover:text-[#C8102E] transition-colors mt-0.5 block">
                  info@tsa-group.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded bg-[#0A1F44] border border-white/10 flex items-center justify-center shrink-0">
                <Phone className="w-4 h-4 text-[#C8102E]" />
              </div>
              <div>
                <div className="text-slate-400 text-[10px] uppercase tracking-wider font-mono">Telephone Inquiries</div>
                <a href="tel:+622123584500" className="font-medium text-white hover:text-[#C8102E] transition-colors mt-0.5 block">
                  +62 21 2358 4500
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded bg-[#0A1F44] border border-white/10 flex items-center justify-center shrink-0">
                <MapPin className="w-4 h-4 text-[#C8102E]" />
              </div>
              <div>
                <div className="text-slate-400 text-[10px] uppercase tracking-wider font-mono">Headquarters</div>
                <span className="font-medium text-white mt-0.5 block">
                  The City Tower, Jakarta Pusat
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
