import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";

const techPhoto = "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1800&auto=format&fit=crop";
const culinaryPhoto = "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=1800&auto=format&fit=crop";
const broadcastPhoto = "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=1200&auto=format&fit=crop";
const gwiPhoto = "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1600&auto=format&fit=crop";
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
      className="bg-[#FAF9F6] text-[#071731] border-b border-[#E2E8F0] py-16 sm:py-24 relative"
      aria-label="TSA Operating Brands"
    >
      <div className="max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="pb-10 sm:pb-12 border-b border-[#E2E8F0]">
          <div className="space-y-3 max-w-3xl">
            <h2 className="font-heading text-3xl sm:text-5xl font-bold text-[#071731] tracking-tight leading-[1.1]">
              Our Brands.
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#64748B] leading-relaxed font-normal">
              Five specialized operating brands representing the multidisciplinary depth of PT Tricatha Sempiternal Asia.
            </p>
          </div>
        </div>

        {/* Visual Brand Showcase: Interactive Showcase on Large Screens */}
        <div className="hidden lg:grid grid-cols-12 gap-10 lg:gap-14 pt-10 items-start">
          {/* Left Column: Brand Index List (5 cols) */}
          <div className="lg:col-span-5 space-y-2">
            {BRANDS.map((brand) => {
              const isActive = brand.id === activeBrandId;
              return (
                <div
                  key={brand.id}
                  onMouseEnter={() => setActiveBrandId(brand.id)}
                  onClick={() => handleBrandClick(brand.route)}
                  className={`p-5 transition-all duration-200 cursor-pointer border-b ${
                    isActive
                      ? "border-[#071731] bg-white shadow-xs"
                      : "border-[#E2E8F0] hover:bg-white/60 hover:border-slate-300"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-[11px] font-mono uppercase text-[#C8102E] font-semibold tracking-wider">
                        {brand.discipline}
                      </div>
                      <h3 className="font-heading font-bold text-lg text-[#071731] tracking-tight mt-0.5">
                        {brand.name}
                      </h3>
                      <p className="text-xs text-[#64748B] font-sans mt-1 line-clamp-1">
                        {brand.tagline}
                      </p>
                    </div>

                    <div className="shrink-0 pl-3">
                      <div
                        className={`w-8 h-8 rounded flex items-center justify-center transition-colors ${
                          isActive
                            ? "bg-[#071731] text-white"
                            : "bg-[#FAF9F6] text-[#64748B]"
                        }`}
                      >
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Active Brand Visual Canvas (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-[#E2E8F0] rounded-lg overflow-hidden shadow-sm">
              {/* Brand Visual Media */}
              <div className="relative aspect-[16/10] w-full bg-[#071731] overflow-hidden">
                <img
                  key={activeBrand.id}
                  src={activeBrand.photo}
                  alt={activeBrand.photoAlt}
                  className="w-full h-full object-cover object-center transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071731]/70 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Brand Details Bar */}
              <div className="p-8 space-y-4">
                <div className="space-y-1">
                  <div className="text-xs font-mono text-[#C8102E] uppercase tracking-wider font-semibold">
                    {activeBrand.discipline}
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-[#071731] tracking-tight">
                    {activeBrand.name}
                  </h3>
                  <div className="text-sm font-editorial italic text-[#475569]">
                    "{activeBrand.tagline}"
                  </div>
                </div>

                <p className="text-sm text-[#334155] font-sans leading-relaxed">
                  {activeBrand.description}
                </p>

                <div className="pt-2 flex items-center justify-end border-t border-[#E2E8F0]">
                  <button
                    type="button"
                    onClick={() => handleBrandClick(activeBrand.route)}
                    className="btn-editorial-red text-xs py-2.5 px-5 cursor-pointer inline-flex items-center gap-2"
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
