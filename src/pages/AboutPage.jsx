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
      {/* 1. Page Header - Deep Navy #0A1F44 Anchor with Grid */}
      <section className="relative py-20 sm:py-28 bg-[#0A1F44] bg-grid-navy text-white border-b border-[#06152F] overflow-hidden">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-8 relative z-10">

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-3xl space-y-4">
              <h1 className="font-display text-4xl sm:text-5xl lg:text-[60px] font-bold tracking-tight text-white leading-[1.05]">
                About <br />
                <span className="text-slate-300 font-normal">Tricatha Sempiternal Asia.</span>
              </h1>
              <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl">
                Operating from The City Tower in Jakarta, TSA is an integrated corporate practice uniting sovereign advisory, public affairs, executive communications, and experiential event production.
              </p>
            </div>

            <button
              onClick={handleInquiry}
              className="btn-tech-red shrink-0 self-start lg:self-auto group focus:outline-none"
            >
              <div className="w-10 h-full bg-[#A50D25] flex items-center justify-center text-white border-r border-white/20">
                <ArrowUpRight className="w-4 h-4" />
              </div>
              <div className="px-5 h-full flex items-center font-mono text-xs font-semibold">
                Inquire Practice Profile
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* 2. Company Introduction - White #FFFFFF Section */}
      <CompanyIntro />

      {/* 3. Executive Leadership Team - Deep Navy #0A1F44 Section */}
      <Leadership />

    </div>
  );
}
