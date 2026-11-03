import React from "react";
import { ArrowUpRight } from "lucide-react";

const techPhoto = "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1800&auto=format&fit=crop";
const culinaryPhoto = "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=1800&auto=format&fit=crop";
const broadcastPhoto = "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=1200&auto=format&fit=crop";
const gwiPhoto = "/events/appmbgi-national-summit-2026/photo-3.jpg";
const govAdvPhoto = "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1600&auto=format&fit=crop";

const BRANDS = [
  {
    id: "tsa-tech",
    num: "01",
    tag: "TECH",
    name: "TSA IT & TECHNOLOGY",
    discipline: "IT & Technology",
    tagline: "Purpose-Built Technology for Mission-Critical Operations",
    description:
      "Since 2018, delivering secure digital systems, command center telemetry, and mission-critical technology platforms for Indonesian Law Enforcement Agencies.",
    route: "/business-group#tsa-tech",
    photo: techPhoto,
    photoAlt: "TSA IT & Technology Mission-Critical Systems",
    accentColor: "#0284C7",
    gridSpan: "col-span-1 md:col-span-12 lg:col-span-7",
    heightClass: "min-h-[300px] sm:min-h-[360px] lg:h-[380px]"
  },
  {
    id: "gwi",
    num: "02",
    tag: "MICE",
    name: "GWI",
    discipline: "Event Management & Experiential",
    tagline: "Bringing the Right Audience to the Right Experience",
    description:
      "Gema Waskita Interaktifa delivers national & international plenary summits, MICE trade expos, and strategic audience mobilization backed by 20,000+ contacts.",
    route: "/business-group#gwi",
    photo: gwiPhoto,
    photoAlt: "GWI Strategic Event Management and Conferences",
    accentColor: "#C8102E",
    gridSpan: "col-span-1 md:col-span-12 lg:col-span-5",
    heightClass: "min-h-[300px] sm:min-h-[360px] lg:h-[380px]"
  },
  {
    id: "govadv",
    num: "03",
    tag: "ADVISORY",
    name: "GOVADV",
    discipline: "Government Advisory",
    tagline: "Navigating Institutions, Advancing Objectives",
    description:
      "Guiding domestic and international corporations through Indonesia's institutional landscape with strategic context, discretion, and trust.",
    route: "/business-group#govadv",
    photo: govAdvPhoto,
    photoAlt: "GovAdv Institutional Government Advisory",
    accentColor: "#0D9488",
    gridSpan: "col-span-1 md:col-span-6 lg:col-span-4",
    heightClass: "min-h-[280px] sm:min-h-[320px] lg:h-[340px]"
  },
  {
    id: "enchante",
    num: "04",
    tag: "CULINARY",
    name: "ENCHANTÉE KITCHEN",
    discipline: "Food & Beverage",
    tagline: "Thoughtfully Prepared, Distinctively Presented",
    description:
      "Crafting refined culinary products and bespoke catering tailored for corporate plenaries, diplomatic banquets, and high-profile social occasions.",
    route: "/business-group#enchante",
    photo: culinaryPhoto,
    photoAlt: "Enchantée Kitchen Artisanal Culinary Catering",
    accentColor: "#D97706",
    gridSpan: "col-span-1 md:col-span-6 lg:col-span-4",
    heightClass: "min-h-[280px] sm:min-h-[320px] lg:h-[340px]"
  },
  {
    id: "dna-studio",
    num: "05",
    tag: "BROADCAST",
    name: "DNA STUDIO",
    discipline: "Broadcast Media & 4K Cinema",
    tagline: "Creative Broadcast & 4K Production Suite",
    description:
      "Sudirman Park multi-camera broadcast soundstage producing leader dialogues, audited hybrid AGM telecasts, and syndicated commercial media.",
    route: "/business-group#dna-studio",
    photo: broadcastPhoto,
    photoAlt: "DNA Studio 4K Broadcast Scenography",
    accentColor: "#6366F1",
    gridSpan: "col-span-1 md:col-span-12 lg:col-span-4",
    heightClass: "min-h-[280px] sm:min-h-[320px] lg:h-[340px]"
  }
];

export default function LandingBrands({ navigateTo }) {
  const handleBrandClick = (route) => {
    if (navigateTo && route) {
      navigateTo(route);
    } else if (route) {
      window.location.href = route;
    }
  };

  const handleViewAllBrands = () => {
    if (navigateTo) {
      navigateTo("/business-group");
    } else {
      window.location.href = "/business-group";
    }
  };

  return (
    <section
      id="brands"
      data-nav-theme="light"
      className="bg-[#FAF9F6] text-[#071731] border-b border-[#E2E8F0] py-16 sm:py-24 relative"
      aria-label="TSA Operating Brands"
    >
      <div className="max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-10 sm:pb-12 border-b border-[#E2E8F0]">
          <div className="space-y-3 max-w-3xl">
            <h2 className="font-heading text-3xl sm:text-5xl font-bold text-[#071731] tracking-tight leading-[1.1]">
              Our Brands.
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#64748B] leading-relaxed font-normal">
              Five specialized operating brands representing the multidisciplinary depth of PT Tricatha Sempiternal Asia.
            </p>
          </div>

          <div className="shrink-0">
            <button
              type="button"
              onClick={handleViewAllBrands}
              className="btn-editorial-red text-xs py-3 px-6 cursor-pointer inline-flex items-center gap-2 shadow-xs"
            >
              <span>Explore All Brands</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* 
          Asymmetric Bento Grid:
          - Top Row: 7 cols (Tech) + 5 cols (GWI) = 12 cols (Flush at baseline)
          - Bottom Row: 4 cols (GovAdv) + 4 cols (Enchantée) + 4 cols (DNA Studio) = 12 cols (Flush at baseline)
          - Full-bleed rich photography with smooth zoom on hover
          - Clean bottom scrim with sharp typography, taglines, and direct navigation
        */}
        <div className="pt-10 grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6">
          {BRANDS.map((brand) => (
            <div
              key={brand.id}
              onClick={() => handleBrandClick(brand.route)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  handleBrandClick(brand.route);
                }
              }}
              className={`group relative flex flex-col justify-end rounded-xl overflow-hidden cursor-pointer select-none border border-black/10 dark:border-white/10 hover:border-[#C8102E] shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 bg-slate-950 ${brand.gridSpan} ${brand.heightClass}`}
            >
              {/* Full-bleed Photo with Smooth Zoom on Hover */}
              <img
                src={brand.photo}
                alt={brand.photoAlt}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-106 pointer-events-none"
              />

              {/* Permanent Ambient Vignette for Razor-sharp Text Contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/10 pointer-events-none" />

              {/* Top Bar: Number Tag & Action Button */}
              <div className="absolute top-4 left-4 right-4 z-10 flex items-center justify-between pointer-events-none">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-white/95 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-sm border border-white/20 shadow-xs">
                  {brand.num} // {brand.tag}
                </span>

                <div className="w-8 h-8 rounded-full bg-black/50 backdrop-blur-md text-white/90 border border-white/20 flex items-center justify-center group-hover:bg-[#C8102E] group-hover:border-[#C8102E] group-hover:text-white transition-all duration-300 shadow-sm">
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>

              {/* Bottom Editorial Content Overlay */}
              <div className="relative z-10 p-5 sm:p-6 text-left pointer-events-none space-y-2">
                {/* Discipline Tag */}
                <div className="flex items-center gap-2">
                  <span
                    className="text-[11px] font-mono font-bold uppercase tracking-wider"
                    style={{ color: brand.accentColor }}
                  >
                    {brand.discipline}
                  </span>
                </div>

                {/* Brand Title */}
                <h3 className="font-heading font-bold text-white text-lg sm:text-xl lg:text-2xl leading-snug tracking-tight">
                  {brand.name}
                </h3>

                {/* Tagline */}
                <p className="text-xs sm:text-sm font-editorial italic text-slate-300 line-clamp-1">
                  "{brand.tagline}"
                </p>

                {/* Description */}
                <p className="text-xs text-slate-300/90 font-sans line-clamp-2 leading-relaxed pt-0.5">
                  {brand.description}
                </p>

                {/* Explore Action Link */}
                <div className="pt-2 flex items-center gap-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-white group-hover:text-[#FF6B81] transition-colors duration-200">
                  <span>Explore Practice Details</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#FF6B81]" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
