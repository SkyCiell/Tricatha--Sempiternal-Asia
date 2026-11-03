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
    name: "TSA IT & Technology",
    discipline: "Mission-Critical Systems",
    summary: "Secure digital infrastructure and tactical command systems for Indonesian Law Enforcement Agencies.",
    route: "/business-group#tsa-tech",
    photo: techPhoto,
    photoAlt: "TSA IT & Technology Mission-Critical Systems Architecture",
    gridSpan: "col-span-1 md:col-span-12 lg:col-span-7",
    heightClass: "h-[340px] sm:h-[400px] lg:h-[420px]",
    imgPosition: "object-center"
  },
  {
    id: "gwi",
    name: "GWI",
    discipline: "MICE & Commercial Expositions",
    summary: "National summits, multilateral trade expos, and curated audience mobilization across Southeast Asia.",
    route: "/business-group#gwi",
    photo: gwiPhoto,
    photoAlt: "GWI Strategic Event Management and Multilateral Summits",
    gridSpan: "col-span-1 md:col-span-12 lg:col-span-5",
    heightClass: "h-[340px] sm:h-[400px] lg:h-[420px]",
    imgPosition: "object-[center_35%]"
  },
  {
    id: "govadv",
    name: "GovAdv",
    discipline: "Government Advisory",
    summary: "Institutional consultation, regulatory analysis, and public-private strategic dialogue.",
    route: "/business-group#govadv",
    photo: govAdvPhoto,
    photoAlt: "GovAdv Sovereign Government Advisory and Institutional Liaison",
    gridSpan: "col-span-1 md:col-span-6 lg:col-span-4",
    heightClass: "h-[300px] sm:h-[340px] lg:h-[360px]",
    imgPosition: "object-center"
  },
  {
    id: "enchante",
    name: "Enchantée Kitchen",
    discipline: "Executive Hospitality",
    summary: "Artisanal culinary curation and tailored banquets for diplomatic assemblies and state occasions.",
    route: "/business-group#enchante",
    photo: culinaryPhoto,
    photoAlt: "Enchantée Kitchen Artisanal Culinary Catering and Hospitality",
    gridSpan: "col-span-1 md:col-span-6 lg:col-span-4",
    heightClass: "h-[300px] sm:h-[340px] lg:h-[360px]",
    imgPosition: "object-[center_60%]"
  },
  {
    id: "dna-studio",
    name: "DNA Studio",
    discipline: "Broadcast & 4K Cinema",
    summary: "Multi-camera broadcast soundstage producing leader dialogues, hybrid AGMs, and syndicated telecasts.",
    route: "/business-group#dna-studio",
    photo: broadcastPhoto,
    photoAlt: "DNA Studio 4K Broadcast Scenography and Soundstage",
    gridSpan: "col-span-1 md:col-span-12 lg:col-span-4",
    heightClass: "h-[300px] sm:h-[340px] lg:h-[360px]",
    imgPosition: "object-center"
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
      aria-label="TSA Operating Practices"
    >
      <div className="max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-10 sm:pb-12 border-b border-[#E2E8F0]">
          <div className="space-y-3 max-w-3xl">
            <h2 className="font-heading text-3xl sm:text-5xl font-bold text-[#071731] tracking-tight leading-[1.1]">
              Operating Brands.
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#64748B] leading-relaxed font-normal">
              Specialized entities orchestrated under PT Tricatha Sempiternal Asia, each maintaining dedicated domain authority.
            </p>
          </div>

          <div className="shrink-0">
            <button
              type="button"
              onClick={handleViewAllBrands}
              className="btn-editorial-red text-xs py-3 px-6 cursor-pointer inline-flex items-center gap-2"
            >
              <span>Explore Group Portfolio</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* 
          Art-Directed Editorial Showcase:
          - No decorative pill badges, no floating badge clutter
          - Clean, purposeful photography with integrated typography
          - Asymmetrical 12-column layout (7+5 top, 4+4+4 bottom)
          - Natural contrast scrim for comfortable legibility
        */}
        <div className="pt-10 grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8">
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
              className={`group relative flex flex-col justify-end rounded-lg overflow-hidden cursor-pointer select-none border border-[#071731]/10 hover:border-[#071731]/40 shadow-xs hover:shadow-xl transition-all duration-500 bg-[#071731] ${brand.gridSpan} ${brand.heightClass}`}
            >
              {/* Full-bleed Photo with Natural Crop & Subtle Scale */}
              <img
                src={brand.photo}
                alt={brand.photoAlt}
                loading="lazy"
                className={`absolute inset-0 w-full h-full object-cover ${brand.imgPosition} transition-transform duration-700 ease-out group-hover:scale-104 pointer-events-none`}
              />

              {/* Directional Bottom Scrim (Legibility without Darkening the Full Photo) */}
              <div className="absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-black/90 via-black/45 to-transparent pointer-events-none" />

              {/* Editorial Typography (Direct, Integrated, No Clutter) */}
              <div className="relative z-10 p-6 sm:p-8 text-left pointer-events-none space-y-1.5">
                <div className="flex items-center justify-between text-xs font-mono uppercase tracking-wider text-slate-300/80 font-medium">
                  <span>{brand.discipline}</span>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white flex items-center gap-1 font-sans text-xs">
                    <span>Explore</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#C8102E]" />
                  </span>
                </div>

                <h3 className="font-heading font-bold text-white text-2xl sm:text-3xl tracking-tight leading-tight">
                  {brand.name}
                </h3>

                <p className="text-xs sm:text-sm font-sans text-slate-300 font-normal leading-relaxed max-w-xl line-clamp-2 pt-0.5">
                  {brand.summary}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
