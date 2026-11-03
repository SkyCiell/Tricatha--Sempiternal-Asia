import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const techPhoto = "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1800&auto=format&fit=crop";
const culinaryPhoto = "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=1800&auto=format&fit=crop";
const broadcastPhoto = "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=1200&auto=format&fit=crop";
const gwiPhoto = "/events/appmbgi-national-summit-2026/photo-3.jpg";
const govAdvPhoto = "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1600&auto=format&fit=crop";

const BRANDS = [
  {
    id: "tsa-tech",
    name: "TSA IT & TECHNOLOGY",
    discipline: "IT & Technology",
    tagline: "Purpose-Built Technology for Mission-Critical Operations",
    description:
      "Since 2018, delivering digital systems, secure information management, and mission-critical technology platforms for Indonesian Law Enforcement Agencies.",
    route: "/business-group#tsa-tech",
    photo: techPhoto,
    photoAlt: "TSA IT & Technology Mission-Critical Systems"
  },
  {
    id: "gwi",
    name: "GWI",
    discipline: "Event Management & Experiential",
    tagline: "Bringing the Right Audience to the Right Experience",
    description:
      "Gema Waskita Interaktifa delivers national and international conferences, MICE trade expos, and strategic engagements backed by a network of 20,000+ contacts.",
    route: "/business-group#gwi",
    photo: gwiPhoto,
    photoAlt: "GWI Strategic Event Management and Conferences"
  },
  {
    id: "govadv",
    name: "GOVADV",
    discipline: "Government Advisory",
    tagline: "Navigating Institutions, Advancing Strategic Objectives",
    description:
      "Supporting domestic and international organizations in understanding and navigating Indonesia's institutional landscape with discretion, context, and trust.",
    route: "/business-group#govadv",
    photo: govAdvPhoto,
    photoAlt: "GovAdv Institutional Government Advisory"
  },
  {
    id: "enchante",
    name: "ENCHANTÉE KITCHEN",
    discipline: "Food & Beverage",
    tagline: "Thoughtfully Prepared, Distinctively Presented",
    description:
      "Crafting culinary products and refined catering experiences tailored for corporate plenaries, social occasions, and diplomatic gatherings with artisanal focus.",
    route: "/business-group#enchante",
    photo: culinaryPhoto,
    photoAlt: "Enchantée Kitchen Artisanal Culinary Catering"
  },
  {
    id: "dna-studio",
    name: "DNA STUDIO",
    discipline: "Broadcast Media & 4K Cinema",
    tagline: "Creative Broadcast & 4K Cinema Production Suite",
    description:
      "Dedicated multi-camera broadcast soundstage at Sudirman Park, producing leader dialogues, audited hybrid AGM telecasts, and syndicated media.",
    route: "/business-group#dna-studio",
    photo: broadcastPhoto,
    photoAlt: "DNA Studio 4K Broadcast Scenography"
  }
];

export default function LandingBrands({ navigateTo }) {
  const [activeBrandId, setActiveBrandId] = useState(BRANDS[0].id);

  const activeBrand = BRANDS.find((b) => b.id === activeBrandId) || BRANDS[0];

  const handleBrandClick = (route) => {
    if (navigateTo && route) {
      navigateTo(route);
    }
  };

  return (
    <section
      id="brands"
      data-nav-theme="light"
      className="bg-[#FAF9F6] text-[#071731] border-b border-[#E2E8F0] py-6 sm:py-8 lg:py-6 xl:py-8 relative lg:min-h-[calc(100vh-80px)] lg:max-h-[960px] flex flex-col justify-center"
      aria-label="TSA Operating Brands"
    >
      <div className="max-w-[1520px] w-full mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center flex-1">
        {/* Section Header */}
        <div className="pb-6 sm:pb-8 border-b border-[#E2E8F0] shrink-0">
          <div className="space-y-3 sm:space-y-4 max-w-3xl">
            <h2 className="font-heading text-3xl sm:text-5xl lg:text-[54px] font-bold text-[#071731] tracking-tight leading-[1.08]">
              Our Brands.
            </h2>
            <p className="font-sans text-base sm:text-lg text-[#64748B] leading-relaxed font-normal">
              Five specialized operating brands representing the multidisciplinary depth of PT Tricatha Sempiternal Asia.
            </p>
          </div>
        </div>

        {/* Visual Brand Showcase: Interactive Showcase on Large Screens */}
        <div className="hidden lg:grid grid-cols-12 gap-6 lg:gap-8 xl:gap-10 pt-5 sm:pt-6 items-stretch flex-1 min-h-0">
          {/* Left Column: Brand Index List (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between h-[500px] xl:h-[540px] space-y-1.5 xl:space-y-2">
            {BRANDS.map((brand) => {
              const isActive = brand.id === activeBrandId;
              return (
                <div
                  key={brand.id}
                  onMouseEnter={() => setActiveBrandId(brand.id)}
                  onClick={() => handleBrandClick(brand.route)}
                  className={`px-4 py-3 xl:px-5 xl:py-3.5 transition-colors duration-150 cursor-pointer border-b flex-1 flex flex-col justify-center ${
                    isActive
                      ? "border-[#071731] bg-white shadow-xs"
                      : "border-[#E2E8F0] hover:bg-white/60 hover:border-slate-300"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="pr-3 min-w-0">
                      <div className="text-[11px] font-mono uppercase text-[#C8102E] font-semibold tracking-wider truncate">
                        {brand.discipline}
                      </div>
                      <h3 className="font-heading font-bold text-base xl:text-lg text-[#071731] tracking-tight mt-0.5 truncate">
                        {brand.name}
                      </h3>
                      <p className="text-xs text-[#64748B] font-sans mt-0.5 truncate">
                        {brand.tagline}
                      </p>
                    </div>

                    <div className="shrink-0">
                      <div
                        className={`w-7 h-7 xl:w-8 xl:h-8 rounded flex items-center justify-center transition-colors ${
                          isActive
                            ? "bg-[#071731] text-white"
                            : "bg-[#FAF9F6] text-[#64748B]"
                        }`}
                      >
                        <ArrowUpRight className="w-3.5 h-3.5 xl:w-4 xl:h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Active Brand Visual Canvas (7 cols) */}
          <div className="lg:col-span-7 h-[500px] xl:h-[540px] flex flex-col">
            <div className="bg-white border border-[#E2E8F0] rounded-lg overflow-hidden shadow-sm h-full flex flex-col">
              {/* Brand Visual Media - Persistent Container with Crossfade */}
              <div className="relative w-full h-[295px] xl:h-[325px] shrink-0 bg-[#071731] overflow-hidden">
                {BRANDS.map((brand) => (
                  <img
                    key={brand.id}
                    src={brand.photo}
                    alt={brand.photoAlt}
                    loading="eager"
                    className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-300 ease-in-out ${
                      brand.id === activeBrandId ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                    }`}
                  />
                ))}
                <div className="absolute inset-0 z-20 bg-gradient-to-t from-[#071731]/50 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Brand Details Bar - Locked Height to Eliminate Jitter */}
              <div className="h-[205px] xl:h-[215px] shrink-0 p-4 sm:p-4.5 xl:p-5 bg-white border-t border-[#E2E8F0] flex flex-col justify-between">
                <motion.div
                  key={activeBrand.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-1"
                >
                  <div className="text-[11px] font-mono text-[#C8102E] uppercase tracking-wider font-semibold">
                    {activeBrand.discipline}
                  </div>
                  <h3 className="font-heading text-lg xl:text-xl font-bold text-[#071731] tracking-tight truncate">
                    {activeBrand.name}
                  </h3>
                  <div className="text-xs xl:text-sm font-editorial italic text-[#475569] truncate">
                    "{activeBrand.tagline}"
                  </div>
                  <p className="text-xs xl:text-sm text-[#334155] font-sans leading-relaxed line-clamp-2 pt-0.5">
                    {activeBrand.description}
                  </p>
                </motion.div>

                <div className="pt-2 pb-1 flex items-center justify-end">
                  <button
                    type="button"
                    onClick={() => handleBrandClick(activeBrand.route)}
                    className="btn-editorial-red text-xs py-2 px-4.5 xl:py-2.5 xl:px-5 cursor-pointer inline-flex items-center gap-2"
                  >
                    <span>Explore {activeBrand.name}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile & Tablet Stacked Editorial Cards */}
        <div className="lg:hidden space-y-6 pt-8">
          {BRANDS.map((brand) => (
            <div
              key={brand.id}
              className="bg-white border border-[#E2E8F0] rounded-lg overflow-hidden shadow-xs"
            >
              <div className="relative aspect-[16/9] w-full bg-[#071731] overflow-hidden">
                <img
                  src={brand.photo}
                  alt={brand.photoAlt}
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071731]/60 via-transparent to-transparent pointer-events-none" />
              </div>

              <div className="p-5 space-y-3">
                <div>
                  <div className="text-[11px] font-mono uppercase text-[#C8102E] font-semibold tracking-wider">
                    {brand.discipline}
                  </div>
                  <h3 className="font-heading font-bold text-lg text-[#071731] tracking-tight mt-0.5">
                    {brand.name}
                  </h3>
                  <p className="text-xs font-editorial italic text-[#64748B]">
                    "{brand.tagline}"
                  </p>
                </div>

                <p className="text-xs text-[#334155] leading-relaxed">
                  {brand.description}
                </p>

                <button
                  type="button"
                  onClick={() => handleBrandClick(brand.route)}
                  className="w-full btn-editorial-navy text-xs py-3 px-4 cursor-pointer flex items-center justify-center gap-2 mt-2"
                >
                  <span>Explore {brand.name}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
