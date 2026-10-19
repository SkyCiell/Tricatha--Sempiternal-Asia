import React from "react";
import { ArrowUpRight } from "lucide-react";

const techPhoto = "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000&auto=format&fit=crop";
const micePhoto = "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2000&auto=format&fit=crop";
const govPhoto = "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2000&auto=format&fit=crop";
const broadcastPhoto = "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=2000&auto=format&fit=crop";
const culinaryPhoto = "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2000&auto=format&fit=crop";

const BUSINESS_CHAPTERS = [
  {
    id: "biz-tech",
    discipline: "Mission-Critical Technology & Systems",
    brandName: "TSA IT & TECHNOLOGY",
    brandRoute: "/business-group#tsa-tech",
    domain: "Public Sector & Institutional Platforms",
    headline: "Digital systems engineered for law enforcement and public security operations.",
    description:
      "Since 2018, TSA IT & Technology has delivered specialized software, situational command coordination, and secure information platforms for Indonesian Law Enforcement Agencies. The division provides dependable technology infrastructure designed to operate under strict protocol, security covenants, and operational rigor.",
    deliverables: [
      "Law enforcement digital platforms and operational platforms",
      "Secure public-sector information architecture and system integration",
      "Operational coordination and situational decision support",
      "Resilient mission-critical technology infrastructure"
    ],
    photo: techPhoto,
    photoCaption: "TSA IT & Technology Mission-Critical Systems Architecture",
    layout: "media-right"
  },
  {
    id: "biz-mice",
    discipline: "Turnkey Event Management & Commercial MICE",
    brandName: "GWI (GEMA WASKITA INTERAKTIFA)",
    brandRoute: "/business-group#gwi",
    domain: "International Conventions & Trade Expos",
    headline: "Monumental trade exhibitions, knowledge plenaries, and curated audience mobilization.",
    description:
      "Delivered through Gema Waskita Interaktifa, TSA manages large-scale international conferences, multi-hall commercial trade expositions, and strategic engagements. Backed by a verified multi-sector audience database of more than 20,000 contacts, GWI curates the right delegates, ministers, and buyers into the room.",
    deliverables: [
      "Multi-hall spatial floor architecture and turnkey booth logistics",
      "National and international plenary agendas with keynote curation",
      "B2B buyer-seller matchmaking salons and hosted buyer management",
      "Curated audience mobilization across sovereign and commercial sectors"
    ],
    photo: micePhoto,
    photoCaption: "Multi-Hall Trade Exhibition Architecture and Delegate Flow",
    layout: "media-left"
  },
  {
    id: "biz-gov",
    discipline: "Government Advisory & Sovereign Stakeholder Engagement",
    brandName: "GOVADV",
    brandRoute: "/business-group#govadv",
    domain: "Strategic Consultation & Institutional Liaison",
    headline: "Navigating institutional landscapes and advancing strategic public-private objectives.",
    description:
      "GovAdv supports domestic and international organizations in understanding and engaging Indonesia's institutional landscape. Drawing upon deep experience with national ministries, state secretariats, and diplomatic envoys, GovAdv facilitates dialogue with discretion, context, and institutional trust.",
    deliverables: [
      "Strategic institutional consultation and stakeholder mapping",
      "Public-sector regulatory analysis and inter-ministerial liaison",
      "Carefully facilitated introductions and public-private alliances",
      "Discreet multi-stakeholder dialogue and bilateral accord staging"
    ],
    photo: govPhoto,
    photoCaption: "Sovereign Plenary Protocol and Inter-Ministerial Conclaves",
    layout: "media-right"
  },
  {
    id: "biz-broadcast",
    discipline: "Creative Broadcast & 4K Cinema Scenography",
    brandName: "DNA STUDIO",
    brandRoute: "/business-group#dna-studio",
    domain: "Broadcast Media & Virtual Telepresence",
    headline: "Cinema-grade live broadcast telecasts, leader dialogues, and audited hybrid AGMs.",
    description:
      "Headquartered at Sudirman Park in Central Jakarta, DNA Studio is TSA's dedicated media engineering soundstage. We engineer 4K multi-camera telecasts, virtual AGM electronic voting systems, live satellite uplinks, and syndicated thought leadership forums viewed across the ASEAN corridor.",
    deliverables: [
      "4K multi-camera live broadcast switching and telepresence feeds",
      "Audited hybrid AGM electronic proxy voting architecture",
      "Leader dialogue broadcast curation and digital distribution",
      "Kinetic soundstage lighting, acoustic scenography, and LED arrays"
    ],
    photo: broadcastPhoto,
    photoCaption: "DNA Studio 4K Broadcast Suite and Telecast Soundstage",
    layout: "media-left"
  },
  {
    id: "biz-culinary",
    discipline: "Executive Hospitality & Artisanal Culinary Solutions",
    brandName: "ENCHANTÉE KITCHEN",
    brandRoute: "/business-group#enchante",
    domain: "Hospitality & Bespoke Dining",
    headline: "Thoughtfully prepared culinary products and bespoke catering for high-profile assemblies.",
    description:
      "Enchantée Kitchen creates refined culinary offerings, tailored banquets, and hospitality management for corporate assemblies, diplomatic galas, and private institutional gatherings. Every menu is developed with attention to flavour, presentation, and the dignified character of the occasion.",
    deliverables: [
      "Corporate dining and executive conference catering",
      "Curated culinary products and bespoke tasting menus",
      "Diplomatic reception hospitality staffing and decorum",
      "Distinctive tablescape architecture and spatial service design"
    ],
    photo: culinaryPhoto,
    photoCaption: "Artisanal Hospitality and Executive Dining Solutions",
    layout: "media-right"
  }
];

export default function LandingBusiness({ navigateTo }) {
  const handleBrandClick = (route) => {
    if (navigateTo && route) {
      navigateTo(route);
    }
  };

  return (
    <section
      id="business"
      data-nav-theme="light"
      className="bg-[#FAF9F6] text-[#071731] border-b border-[#E2E8F0] py-16 sm:py-28 relative"
      aria-label="TSA Core Business Areas"
    >
      <div className="max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="pb-14 sm:pb-20 border-b border-[#E2E8F0]">
          <div className="max-w-3xl space-y-4">
            <h2 className="font-heading text-3xl sm:text-5xl lg:text-[54px] font-bold text-[#071731] tracking-tight leading-[1.08]">
              Our Business.
            </h2>
            <p className="font-sans text-base sm:text-lg text-[#334155] leading-relaxed font-normal">
              While our brands identify who operates inside the TSA network, our business areas define what the ecosystem delivers across industries. Each division translates specialized domain authority into measurable outcomes.
            </p>
          </div>
        </div>

        {/* Asymmetric Editorial Chapters Flowing with Natural Vertical Scroll */}
        <div className="divide-y divide-[#E2E8F0]">
          {BUSINESS_CHAPTERS.map((chapter) => {
            const isMediaRight = chapter.layout === "media-right";

            return (
              <div
                key={chapter.id}
                className="py-14 sm:py-20 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center"
              >
                {/* Content Column */}
                <div
                  className={`lg:col-span-6 space-y-6 ${
                    isMediaRight ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="space-y-2">
                    <div className="text-xs font-mono uppercase tracking-wider text-[#C8102E] font-semibold">
                      {chapter.brandName}
                    </div>

                    <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-[#071731] tracking-tight leading-tight">
                      {chapter.discipline}
                    </h3>
                  </div>

                  <p className="font-editorial italic text-base sm:text-lg text-[#475569]">
                    "{chapter.headline}"
                  </p>

                  <p className="font-sans text-sm sm:text-base text-[#334155] leading-relaxed font-normal">
                    {chapter.description}
                  </p>

                  {/* Core Deliverables List */}
                  <div className="space-y-2.5 pt-2">
                    <ul className="space-y-2 border-t border-[#E2E8F0] pt-4 font-sans text-xs sm:text-sm text-[#1E293B]">
                      {chapter.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-baseline gap-2.5">
                          <span className="text-[#C8102E] font-bold">—</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => handleBrandClick(chapter.brandRoute)}
                      className="btn-editorial-red text-xs py-3 px-6 cursor-pointer inline-flex items-center gap-2"
                    >
                      <span>Explore {chapter.brandName}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Major Photography Column */}
                <div
                  className={`lg:col-span-6 ${
                    isMediaRight ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="relative rounded-lg overflow-hidden border border-[#E2E8F0] bg-[#071731] aspect-[4/3] sm:aspect-[16/11] shadow-md group">
                    <img
                      src={chapter.photo}
                      alt={chapter.photoCaption}
                      className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#071731]/60 via-transparent to-transparent pointer-events-none" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
