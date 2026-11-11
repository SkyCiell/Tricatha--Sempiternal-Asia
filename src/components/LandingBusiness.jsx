import React from "react";
import { ArrowUpRight } from "lucide-react";
import backgroundTSA from "../assets/Background_TSA.jpg";

const techPhoto = "/brands/technology/tsa-it.jpg";
const micePhoto = "/brands/gwi/gwi.jpg";
const govPhoto = "/brands/gov-adv/govadv.jpg";
const broadcastPhoto = "/brands/dna-studio/dna-studio.jpg";
const culinaryPhoto = "/events/illuminate-asia-exclusive-evening/photo-2.jpg";

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
      "Tailored banquets, canapé bars, and VIP service"
    ],
    photo: culinaryPhoto,
    photoCaption: "Enchantée Kitchen Artisanal Culinary Catering & Executive Dining",
    layout: "media-left"
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
      className="bg-[#FAF9F6] text-[#071731] border-b border-[#E2E8F0] py-12 sm:py-24 relative"
      aria-label="TSA Core Business Areas"
    >
      <div className="max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Responsive Text Scaling */}
        <div className="pb-8 sm:pb-14 border-b border-[#E2E8F0]">
          <div className="max-w-3xl space-y-3 sm:space-y-4">
            <h2 className="font-heading text-2xl sm:text-4xl lg:text-[54px] font-bold text-[#071731] tracking-tight leading-[1.12]">
              Our Business.
            </h2>
            <p className="font-sans text-sm sm:text-base lg:text-lg text-[#334155] leading-relaxed font-normal">
              While our brands identify who operates inside the TSA network, our business areas define what the ecosystem delivers across industries. Each division translates specialized domain authority into measurable outcomes.
            </p>
          </div>
        </div>

        {/* Holding Anchor Feature: PT Tricatha Sempiternal Asia */}
        <div className="py-10 sm:py-16 border-b border-[#E2E8F0]">
          <div className="bg-white rounded-lg sm:rounded-xl border border-[#E2E8F0] p-5 sm:p-10 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

            {/* Left Column: TSA Holding Editorial Profile */}
            <div className="lg:col-span-6 space-y-4 sm:space-y-5">
              <div className="space-y-1 sm:space-y-1.5">
                <span className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-[#C8102E] font-semibold block">
                  Parent Holding · Executive Command
                </span>
                <h3 className="font-heading text-xl sm:text-3xl lg:text-4xl font-bold text-[#071731] tracking-tight leading-tight">
                  PT Tricatha Sempiternal Asia
                </h3>
              </div>

              <p className="font-editorial italic text-sm sm:text-lg text-[#475569]">
                "Single-source strategic command, fiduciary governance, and inter-ministerial liaison across all specialized practices."
              </p>

              <p className="font-sans text-xs sm:text-base text-[#334155] leading-relaxed font-normal">
                Headquartered in Jakarta, PT Tricatha Sempiternal Asia acts as the parent holding organization guiding each specialized operating division. TSA guarantees institutional protocol, sovereign security covenants, and turnkey delivery standards across government and commercial corridors.
              </p>

              {/* Key Holding Indicators */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3 pt-3 font-mono text-xs border-t border-[#E2E8F0]">
                <div>
                  <div className="text-[10px] text-[#64748B] uppercase tracking-wider">Structure</div>
                  <div className="font-semibold text-[#071731] text-xs sm:text-sm mt-0.5">Holding Ecosystem</div>
                </div>
                <div>
                  <div className="text-[10px] text-[#64748B] uppercase tracking-wider">Practice Entities</div>
                  <div className="font-semibold text-[#071731] text-xs sm:text-sm mt-0.5">5 Business Units</div>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <div className="text-[10px] text-[#64748B] uppercase tracking-wider">Headquarters</div>
                  <div className="font-semibold text-[#071731] text-xs sm:text-sm mt-0.5 truncate">Sudirman Park, Jakarta</div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => handleBrandClick("/business-group")}
                  className="group inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#071731] hover:text-[#C8102E] transition-colors py-1 cursor-pointer focus:outline-none"
                >
                  <span>Explore Holding Structure</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#C8102E] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>
            </div>

            {/* Right Column: Authentic TSA Event Photography */}
            <div className="lg:col-span-6">
              <div className="relative rounded-lg overflow-hidden border border-[#E2E8F0] bg-[#071731] aspect-[16/10] sm:aspect-[16/11] shadow-sm group">
                <img
                  src={backgroundTSA}
                  alt="PT Tricatha Sempiternal Asia Strategic Summit Coordination and Assembly Production"
                  className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071731]/70 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-2.5 left-2.5 right-2.5 text-[11px] sm:text-xs font-mono text-slate-200 bg-[#071731]/85 px-3 py-1.5 rounded border border-white/10 flex items-center justify-between">
                  <span>PT Tricatha Sempiternal Asia</span>
                  <span className="text-slate-300">Executive Secretariat</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Asymmetric Editorial Chapters Flowing with Natural Vertical Scroll */}
        <div className="divide-y divide-[#E2E8F0]">
          {BUSINESS_CHAPTERS.map((chapter) => {
            const isMediaRight = chapter.layout === "media-right";

            return (
              <div
                key={chapter.id}
                className="py-10 sm:py-20 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 lg:gap-16 items-center"
              >
                {/* Content Column */}
                <div
                  className={`lg:col-span-6 space-y-4 sm:space-y-6 ${isMediaRight ? "lg:order-1" : "lg:order-2"
                    }`}
                >
                  <div className="space-y-1 sm:space-y-1.5">
                    <span className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-[#C8102E] font-semibold block">
                      {chapter.brandName}
                    </span>

                    <h3 className="font-heading text-xl sm:text-3xl lg:text-4xl font-bold text-[#071731] tracking-tight leading-tight">
                      {chapter.discipline}
                    </h3>
                  </div>

                  <p className="font-editorial italic text-sm sm:text-lg text-[#475569]">
                    "{chapter.headline}"
                  </p>

                  <p className="font-sans text-xs sm:text-base text-[#334155] leading-relaxed font-normal">
                    {chapter.description}
                  </p>

                  {/* Core Deliverables List */}
                  <div className="space-y-2 pt-1 sm:pt-2">
                    <ul className="space-y-2 border-t border-[#E2E8F0] pt-3.5 sm:pt-4 font-sans text-xs sm:text-sm text-[#1E293B]">
                      {chapter.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-baseline gap-2">
                          <span className="text-[#C8102E] font-bold text-base leading-none">·</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => handleBrandClick(chapter.brandRoute)}
                      className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#071731] hover:text-[#C8102E] transition-colors py-1 cursor-pointer focus:outline-none"
                    >
                      <span>{chapter.brandName} Specifications</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#C8102E] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </button>
                  </div>
                </div>

                {/* Major Photography Column */}
                <div
                  className={`lg:col-span-6 ${isMediaRight ? "lg:order-2" : "lg:order-1"
                    }`}
                >
                  <div className="relative rounded-lg overflow-hidden border border-[#E2E8F0] bg-[#071731] aspect-[16/10] sm:aspect-[16/11] shadow-sm group">
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
