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
    name: "TSA IT & TECHNOLOGY",
    category: "IT & Systems",
    punchline: "Mission-Critical Digital Infrastructure",
    route: "/business-group#tsa-tech",
    photo: techPhoto,
    photoAlt: "TSA IT & Technology Mission-Critical Systems",
    gridSpan: "col-span-1 md:col-span-12 lg:col-span-7",
    heightClass: "h-[320px] sm:h-[380px] lg:h-[400px]"
  },
  {
    id: "gwi",
    num: "02",
    name: "GWI",
    category: "MICE & Plenaries",
    punchline: "Sovereign Summits & Trade Expositions",
    route: "/business-group#gwi",
    photo: gwiPhoto,
    photoAlt: "GWI Strategic Event Management and Conferences",
    gridSpan: "col-span-1 md:col-span-12 lg:col-span-5",
    heightClass: "h-[320px] sm:h-[380px] lg:h-[400px]"
  },
  {
    id: "govadv",
    num: "03",
    name: "GOVADV",
    category: "Government Advisory",
    punchline: "Public-Private Strategic Navigation",
    route: "/business-group#govadv",
    photo: govAdvPhoto,
    photoAlt: "GovAdv Institutional Government Advisory",
    gridSpan: "col-span-1 md:col-span-6 lg:col-span-4",
    heightClass: "h-[280px] sm:h-[320px] lg:h-[340px]"
  },
  {
    id: "enchante",
    num: "04",
    name: "ENCHANTÉE KITCHEN",
    category: "Artisanal Hospitality",
    punchline: "Plenary & State Gala Dining",
    route: "/business-group#enchante",
    photo: culinaryPhoto,
    photoAlt: "Enchantée Kitchen Artisanal Culinary Catering",
    gridSpan: "col-span-1 md:col-span-6 lg:col-span-4",
    heightClass: "h-[280px] sm:h-[320px] lg:h-[340px]"
  },
  {
    id: "dna-studio",
    num: "05",
    name: "DNA STUDIO",
    category: "Broadcast & Cinema",
    punchline: "4K Soundstage & Hybrid Telecasts",
    route: "/business-group#dna-studio",
    photo: broadcastPhoto,
    photoAlt: "DNA Studio 4K Broadcast Scenography",
    gridSpan: "col-span-1 md:col-span-12 lg:col-span-4",
    heightClass: "h-[280px] sm:h-[320px] lg:h-[340px]"
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
              Five specialized operating practices orchestrated under PT Tricatha Sempiternal Asia.
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
          2026 Visual-First Bento:
          - Ultra-clean, uncluttered presentation
          - Zero text walls or dense paragraphs
          - Generous negative space and breathable full-bleed photography
          - Top row (7 + 5) & Bottom row (4 + 4 + 4) 100% flush
        */}
        <div className="pt-10 grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-7">
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
              className={`group relative flex flex-col justify-between rounded-2xl overflow-hidden cursor-pointer select-none border border-black/10 dark:border-white/10 hover:border-[#C8102E] shadow-xs hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 bg-slate-950 ${brand.gridSpan} ${brand.heightClass}`}
            >
              {/* Full-bleed Photo with Smooth Zoom on Hover */}
              <img
                src={brand.photo}
                alt={brand.photoAlt}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-106 pointer-events-none"
              />

              {/* Minimalist Bottom Scrim: covers only bottom ~35% for maximum photo clarity */}
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/85 via-black/35 to-transparent pointer-events-none" />

              {/* Top Bar: Minimal Pill Badge & Discreet Arrow */}
              <div className="relative z-10 p-5 sm:p-6 flex items-center justify-between pointer-events-none">
                <span className="text-[11px] font-mono font-medium uppercase tracking-wider text-white/90 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/15">
                  {brand.num} · {brand.category}
                </span>

                <div className="w-8 h-8 rounded-full bg-black/40 backdrop-blur-md text-white/90 border border-white/15 flex items-center justify-center group-hover:bg-[#C8102E] group-hover:border-[#C8102E] group-hover:text-white transition-all duration-300 shadow-sm">
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>

              {/* Bottom Punchy Editorial Branding (No Essay, Zero Clutter) */}
              <div className="relative z-10 p-5 sm:p-6 text-left pointer-events-none">
                <h3 className="font-heading font-bold text-white text-xl sm:text-2xl lg:text-[26px] tracking-tight leading-tight group-hover:text-[#FF6B81] transition-colors duration-200">
                  {brand.name}
                </h3>
                <p className="text-xs sm:text-sm font-sans text-slate-300/90 font-normal mt-1 line-clamp-1">
                  {brand.punchline}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
