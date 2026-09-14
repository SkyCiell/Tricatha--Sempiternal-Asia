import React from "react";
import CompanyIntro from "../components/CompanyIntro";
import Leadership from "../components/Leadership";
import { ArrowUpRight } from "lucide-react";

export default function AboutPage({ navigateTo }) {
  const handleInquiry = () => {
    if (navigateTo) navigateTo("/contact");
  };

  return (
    <div className="pt-20 bg-[#FFFFFF] min-h-screen text-[#0A1F44] font-sans selection:bg-[#C8102E] selection:text-white">
      {/* 1. Page Header - Deep Navy #0A1F44 Editorial Banner */}
      <section className="relative py-20 sm:py-28 bg-[#0A1F44] text-white border-b border-white/10 overflow-hidden">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-8 relative z-10">

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-[#C8102E] tracking-wider uppercase font-semibold">
                <span className="w-1.5 h-1.5 bg-[#C8102E] rounded-full" />
                <span>INSTITUTIONAL CHARTER</span>
              </div>
              
              <h1 className="font-heading text-3xl sm:text-5xl lg:text-[56px] font-semibold tracking-tight text-white leading-[1.08]">
                About <br />
                <span className="text-slate-300 font-normal">Tricatha Sempiternal Asia.</span>
              </h1>
              <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl pt-1">
                Operating from The City Tower in Jakarta, TSA is an integrated corporate practice uniting sovereign advisory, public affairs, executive communications, and experiential event production across Southeast Asia.
              </p>
            </div>

            <button
              onClick={handleInquiry}
              className="btn-editorial-red shrink-0 self-start lg:self-auto"
            >
              <span>Inquire Practice Profile</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 2. Company Introduction - Editorial Narrative & Scale */}
      <CompanyIntro />

      {/* 3. Executive Leadership Team - Deep Navy #0A1F44 */}
      <Leadership />

      {/* 4. Closing Consultation Strip */}
      <section className="py-20 bg-[#F5F6F8] border-t border-slate-200/80">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-8 text-center space-y-4">
          <span className="font-mono text-xs text-[#C8102E] font-semibold uppercase tracking-wider block">
            THE CITY TOWER · CENTRAL JAKARTA
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl font-medium text-[#0A1F44] tracking-tight">
            Consult with Our Executive Practice Directors
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto font-normal leading-relaxed">
            Our directors coordinate directly with ministerial secretariats, diplomatic envoys, and enterprise leadership.
          </p>
          <div className="pt-2">
            <button
              onClick={handleInquiry}
              className="btn-editorial-navy inline-flex items-center gap-2"
            >
              <span>Schedule Direct Consultation</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
