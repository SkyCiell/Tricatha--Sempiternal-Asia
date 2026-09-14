import React from "react";
import { companyInfo, institutionalReviews } from "../data/tsaData";
import aboutPhoto from "../assets/DSC08824.JPG";
import { Star, ShieldCheck, Building2, Globe2 } from "lucide-react";

export default function CompanyIntro() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-[#FFFFFF] text-[#0A1F44] border-b border-slate-100 overflow-hidden">
      <div className="max-w-[1560px] 2xl:max-w-[1680px] mx-auto px-4 sm:px-8">
        
        {/* 1. Main Asymmetric Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column (5 cols): Curated Photo with Editorial Frame */}
          <div className="lg:col-span-5 relative">
            <div className="editorial-image-frame relative aspect-[4/5] rounded-lg overflow-hidden border border-slate-200 shadow-sm bg-slate-900">
              <img
                src={aboutPhoto}
                alt="Tricatha Sempiternal Asia Plenary Operations"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F44]/80 via-transparent to-transparent opacity-70 pointer-events-none" />
              
              {/* Sovereign Clearance Badge */}
              <div className="absolute bottom-5 left-5 right-5 bg-[#0A1F44]/90 backdrop-blur-md border border-white/10 p-4 rounded-md text-white font-mono text-xs">
                <div className="flex items-center gap-2 text-[#C8102E] font-medium mb-1">
                  <ShieldCheck className="w-4 h-4" />
                  <span>HEADQUARTERS CLEARANCE</span>
                </div>
                <p className="text-[11px] text-slate-300 font-sans leading-snug">
                  The City Tower, 12th Floor, Thamrin Corridor, Central Jakarta.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column (7 cols): Narrative & Tenets */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            <div className="space-y-3">
              <h2 className="font-heading text-2xl sm:text-4xl lg:text-[40px] font-medium leading-[1.15] tracking-tight text-[#0A1F44]">
                "{companyInfo.introHeadline}"
              </h2>
              <p className="text-base text-slate-600 font-normal leading-relaxed pt-1">
                {companyInfo.introDescription}
              </p>
              <p className="text-sm text-slate-500 leading-relaxed font-sans">
                From closed-door bilateral briefings to sovereign regulatory roadmaps and broadcast studio production, TSA provides the strategic discretion and operational fidelity required by high-stakes mandates.
              </p>
            </div>

            {/* Capability Pillars on Light-Neutral #F5F6F8 */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-100">
              <div className="p-4 bg-[#F5F6F8] border border-slate-200/70 rounded-md space-y-1">
                <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
                  <Building2 className="w-4 h-4 text-[#C8102E]" />
                  <span>HEADQUARTERS</span>
                </div>
                <div className="text-xs font-medium text-[#0A1F44]">The City Tower, Jakarta</div>
                <div className="text-[11px] text-slate-400 font-mono">Thamrin Corridor</div>
              </div>

              <div className="p-4 bg-[#F5F6F8] border border-slate-200/70 rounded-md space-y-1">
                <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
                  <Globe2 className="w-4 h-4 text-[#C8102E]" />
                  <span>REGIONAL REACH</span>
                </div>
                <div className="text-xs font-medium text-[#0A1F44]">Southeast Asia &amp; ASEAN</div>
                <div className="text-[11px] text-slate-400 font-mono">Cross-border missions</div>
              </div>

              <div className="p-4 bg-[#F5F6F8] border border-slate-200/70 rounded-md space-y-1">
                <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
                  <ShieldCheck className="w-4 h-4 text-[#C8102E]" />
                  <span>PROTOCOL RIGOR</span>
                </div>
                <div className="text-xs font-medium text-[#0A1F44]">Ministerial Standard</div>
                <div className="text-[11px] text-slate-400 font-mono">Strict NDA covenants</div>
              </div>
            </div>
          </div>

        </div>

        {/* 2. Stats Counter Bar on #F5F6F8 */}
        <div className="mt-16 sm:mt-20 bg-[#F5F6F8] rounded-lg p-8 sm:p-10 border border-slate-200/70">
          <div className="text-xs font-mono text-[#C8102E] font-medium uppercase tracking-widest pb-4 border-b border-slate-200/80 flex items-center justify-between">
            <span>VERIFIED INSTITUTIONAL SCALE</span>
            <span className="text-slate-400 hidden sm:inline">CENTRAL JAKARTA LEDGER</span>
          </div>

          <div className="pt-6 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 divide-y md:divide-y-0 md:divide-x divide-slate-200/80">
            {companyInfo.statsSummary.map((stat, idx) => (
              <div key={stat.id} className={`${idx !== 0 ? "pt-6 md:pt-0 md:pl-10" : ""} space-y-2`}>
                <div className="font-heading text-4xl sm:text-5xl font-medium tracking-tight text-[#0A1F44] flex items-baseline">
                  <span>{stat.number}</span>
                  <span className="text-[#C8102E] font-mono text-3xl sm:text-4xl ml-1">{stat.suffix}</span>
                </div>
                <div className="font-mono text-xs uppercase tracking-wider text-[#0A1F44] font-medium">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-500 leading-relaxed">
                  Verified operational record across state ministries and international consortiums.
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Institutional Endorsements */}
        <div className="mt-16 sm:mt-20 pt-10 border-t border-slate-100">
          <div className="flex items-center justify-between mb-8 text-xs font-mono text-slate-400">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#C8102E] rounded-full" />
              <span className="text-[#0A1F44] font-medium uppercase tracking-widest">
                Institutional Endorsements
              </span>
            </div>
            <span className="hidden sm:inline">DIPLOMATIC &amp; ENTERPRISE REVIEWS</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {institutionalReviews.slice(0, 3).map((review) => (
              <div
                key={review.id}
                className="p-6 bg-[#FFFFFF] border border-slate-200/80 rounded-lg space-y-3 shadow-xs hover:border-[#C8102E]/50 transition-colors"
              >
                <div className="flex items-center gap-1 text-[#C8102E]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#C8102E]" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed italic">
                  "{review.text}"
                </p>
                <div className="pt-2 border-t border-slate-100 font-mono text-xs">
                  <div className="font-medium text-[#0A1F44]">{review.name}</div>
                  <div className="text-[10px] text-slate-400">{review.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
