import React from "react";
import { ArrowUpRight } from "lucide-react";

const techPhoto = "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1800&auto=format&fit=crop";
const culinaryPhoto = "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=1800&auto=format&fit=crop";
const broadcastPhoto = "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=1200&auto=format&fit=crop";
const gwiPhoto = "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1600&auto=format&fit=crop";
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
      "Delivering secure digital systems, command center telemetry, and mission-critical technology platforms for Indonesian Law Enforcement Agencies.",
    route: "/business-group#tsa-tech",
    photo: techPhoto,
    photoAlt: "TSA IT & Technology Mission-Critical Systems",
    accentColor: "#0284C7",
    accentBorder: "hover:border-[#0284C7]",
    accentText: "text-[#0284C7]",
    accentBg: "bg-sky-50"
  },
  {
    id: "enchante",
    num: "02",
    tag: "CULINARY",
    name: "ENCHANTÉE KITCHEN",
    discipline: "Food & Beverage",
    tagline: "Thoughtfully Prepared, Distinctively Presented",
    description:
      "Crafting refined culinary products and bespoke catering experiences tailored for corporate plenaries, state galas, and social occasions.",
    route: "/business-group#enchante",
    photo: culinaryPhoto,
    photoAlt: "Enchantée Kitchen Artisanal Culinary Catering",
    accentColor: "#D97706",
    accentBorder: "hover:border-[#D97706]",
    accentText: "text-[#D97706]",
    accentBg: "bg-amber-50"
  },
  {
    id: "dna-studio",
    num: "03",
    tag: "BROADCAST",
    name: "DNA STUDIO",
    discipline: "Broadcast & 4K Cinema",
    tagline: "Creative Broadcast & 4K Production Suite",
    description:
      "Sudirman Park multi-camera soundstage delivering executive leader dialogues, live hybrid AGM telecasts, and syndicated commercial broadcasts.",
    route: "/business-group#dna-studio",
    photo: broadcastPhoto,
    photoAlt: "DNA Studio 4K Broadcast Scenography",
    accentColor: "#6366F1",
    accentBorder: "hover:border-[#6366F1]",
    accentText: "text-[#6366F1]",
    accentBg: "bg-indigo-50"
  },
  {
    id: "gwi",
    num: "04",
    tag: "MICE",
    name: "GWI",
    discipline: "Event & Experiential",
    tagline: "Bringing the Right Audience to the Experience",
    description:
      "Gema Waskita Interaktifa manages national and international conferences, commercial trade expos, and high-level stakeholder convenings.",
    route: "/business-group#gwi",
    photo: gwiPhoto,
    photoAlt: "GWI Strategic Event Management and Conferences",
    accentColor: "#C8102E",
    accentBorder: "hover:border-[#C8102E]",
    accentText: "text-[#C8102E]",
    accentBg: "bg-rose-50"
  },
  {
    id: "govadv",
    num: "05",
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
    accentBorder: "hover:border-[#0D9488]",
    accentText: "text-[#0D9488]",
    accentBg: "bg-teal-50"
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

        {/* Minimalist Showcase Cards: 5 Vertically Aligned Cards Across Full Width */}
        <div className="pt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 sm:gap-6 items-stretch">
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
              className={`group relative flex flex-col h-full bg-white rounded-xl border border-[#E2E8F0] ${brand.accentBorder} shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden cursor-pointer select-none`}
            >
              {/* Brand Accent Top Stripe */}
              <div
                className="h-1 w-full shrink-0"
                style={{ backgroundColor: brand.accentColor }}
              />

              {/* Card Photo Frame with Smooth Zoom on Hover */}
              <div className="relative aspect-[16/11] w-full overflow-hidden bg-slate-900 shrink-0">
                <img
                  src={brand.photo}
                  alt={brand.photoAlt}
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-500 ease-out"
                />

                {/* Number & Tag Badge */}
                <div className="absolute top-3 left-3 z-10 pointer-events-none">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-white bg-black/65 backdrop-blur-md px-2 py-0.5 rounded-xs border border-white/15">
                    {brand.num} // {brand.tag}
                  </span>
                </div>

                {/* Floating Corner Arrow Button */}
                <div className="absolute top-3 right-3 z-10 pointer-events-none">
                  <div className="w-7 h-7 rounded-full bg-white/90 text-[#071731] flex items-center justify-center shadow-md backdrop-blur-xs group-hover:bg-[#071731] group-hover:text-white transition-colors duration-200">
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </div>

              {/* Card Structured Information */}
              <div className="p-5 flex flex-col flex-grow justify-between bg-white text-left">
                <div>
                  {/* Discipline in Unique Accent Color */}
                  <div
                    className="text-[11px] font-mono font-semibold uppercase tracking-wider mb-1.5"
                    style={{ color: brand.accentColor }}
                  >
                    {brand.discipline}
                  </div>

                  {/* Brand Title */}
                  <h3 className="font-heading font-bold text-base text-[#071731] group-hover:text-[#C8102E] transition-colors duration-200 leading-snug tracking-tight">
                    {brand.name}
                  </h3>

                  {/* Tagline */}
                  <p className="text-xs font-editorial italic text-[#475569] mt-1 line-clamp-1">
                    "{brand.tagline}"
                  </p>

                  {/* Description */}
                  <p className="text-xs text-[#64748B] font-sans mt-2.5 leading-relaxed line-clamp-3">
                    {brand.description}
                  </p>
                </div>

                {/* Footer Action */}
                <div className="mt-5 pt-3.5 border-t border-[#F1F5F9] flex items-center justify-between text-xs font-mono font-semibold uppercase tracking-wider text-[#071731] group-hover:text-[#C8102E] transition-colors duration-200">
                  <span>Explore Practice</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#C8102E]" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
