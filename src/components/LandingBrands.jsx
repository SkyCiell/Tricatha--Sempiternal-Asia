import React from "react";
import { ArrowUpRight } from "lucide-react";
import ModalCards from "./ui/modal-cards";
import backgroundTSA from "../assets/Background_TSA.jpg";

const techPhoto = backgroundTSA;
const culinaryPhoto = "/events/illuminate-asia-exclusive-evening/cover.jpg";
const broadcastPhoto = "/events/empowering-women-in-politics/cover.jpg";
const gwiPhoto = "/events/appmbgi-national-summit-2026/photo-3.jpg";
const govAdvPhoto = "/events/book-launching-restorative-justice/cover.jpg";

const BRANDS = [
  {
    id: "tsa-tech",
    name: "TSA IT & Technology",
    discipline: "Mission-Critical Systems",
    tagline: "Purpose-Built Technology for Mission-Critical Operations",
    summary: "Secure digital infrastructure and tactical command systems for Indonesian Law Enforcement Agencies.",
    fullDescription:
      "Since 2018, TSA’s IT & Technology division has delivered specialized digital software, situational command coordination, and secure information platforms for Indonesian Law Enforcement Agencies. The division provides dependable technology infrastructure designed to operate under strict protocol, security covenants, and operational rigor.",
    deliverables: [
      "Law enforcement digital platforms and operational coordination",
      "Secure public-sector information architecture and system integration",
      "Operational coordination and situational decision support",
      "Resilient mission-critical technology infrastructure"
    ],
    metrics: [
      { label: "Track Record", value: "Since 2018" },
      { label: "Domain Focus", value: "Law Enforcement" },
      { label: "Security Covenants", value: "Classified-Grade" }
    ],
    route: "/business-group#tsa-tech",
    photo: techPhoto,
    photoAlt: "TSA IT & Technology Mission-Critical Systems Architecture",
    gridSpan: "col-span-1 md:col-span-12 lg:col-span-7",
    heightClass: "h-[280px] sm:h-[360px] lg:h-[420px]",
    imgPosition: "object-center"
  },
  {
    id: "gwi",
    name: "GWI",
    discipline: "MICE & Commercial Expositions",
    tagline: "Bringing the Right Audience to the Right Experience",
    summary: "National summits, multilateral trade expos, and curated audience mobilization across Southeast Asia.",
    fullDescription:
      "Delivered through Gema Waskita Interaktifa, TSA manages large-scale international conferences, multi-hall commercial trade expositions, and strategic engagements. Backed by a verified multi-sector audience database of more than 20,000 contacts, GWI curates the right delegates, ministers, and buyers into the room.",
    deliverables: [
      "Multi-hall spatial floor architecture and turnkey booth logistics",
      "National and international plenary agendas with keynote curation",
      "B2B buyer-seller matchmaking salons and hosted buyer management",
      "Curated audience mobilization across sovereign and commercial sectors"
    ],
    metrics: [
      { label: "Audience Network", value: "20,000+ Contacts" },
      { label: "Execution Standard", value: "National & Global" },
      { label: "Flagship Format", value: "B2B Trade Expos" }
    ],
    route: "/business-group#gwi",
    photo: gwiPhoto,
    photoAlt: "GWI Strategic Event Management and Multilateral Summits",
    gridSpan: "col-span-1 md:col-span-12 lg:col-span-5",
    heightClass: "h-[280px] sm:h-[360px] lg:h-[420px]",
    imgPosition: "object-[center_35%]"
  },
  {
    id: "govadv",
    name: "GovAdv",
    discipline: "Government Advisory",
    tagline: "Navigating Institutions, Advancing Strategic Objectives",
    summary: "Institutional consultation, regulatory analysis, and public-private strategic dialogue.",
    fullDescription:
      "GovAdv supports domestic and international organizations in understanding and engaging Indonesia's institutional landscape. Drawing upon deep experience with national ministries, state secretariats, and diplomatic envoys, GovAdv facilitates dialogue with discretion, context, and institutional trust.",
    deliverables: [
      "Strategic institutional consultation and stakeholder mapping",
      "Public-sector regulatory analysis and inter-ministerial liaison",
      "Carefully facilitated introductions and public-private alliances",
      "Discreet multi-stakeholder dialogue and bilateral accord staging"
    ],
    metrics: [
      { label: "Sector Scope", value: "Public & Diplomatic" },
      { label: "Operating Standard", value: "Institutional Trust" },
      { label: "Engagement", value: "Bilateral Dialogue" }
    ],
    route: "/business-group#govadv",
    photo: govAdvPhoto,
    photoAlt: "GovAdv Sovereign Government Advisory and Institutional Liaison",
    gridSpan: "col-span-1 md:col-span-6 lg:col-span-4",
    heightClass: "h-[250px] sm:h-[310px] lg:h-[360px]",
    imgPosition: "object-center"
  },
  {
    id: "enchante",
    name: "Enchantée Kitchen",
    discipline: "Executive Hospitality",
    tagline: "Thoughtfully Prepared, Distinctively Presented",
    summary: "Artisanal culinary curation and tailored banquets for diplomatic assemblies and state occasions.",
    fullDescription:
      "Enchantée Kitchen creates refined culinary offerings, tailored banquets, and hospitality management for corporate assemblies, diplomatic galas, and private institutional gatherings. Every menu is developed with attention to flavour, presentation, and the dignified character of the occasion.",
    deliverables: [
      "Corporate dining and executive conference catering",
      "Curated culinary products and bespoke tasting menus",
      "Diplomatic reception hospitality staffing and decorum",
      "Tailored banquets, canapé bars, and VIP service"
    ],
    metrics: [
      { label: "Occasions Served", value: "Corporate & Social" },
      { label: "Culinary Standard", value: "Artisanal Focus" },
      { label: "Menu Scope", value: "Bespoke Dining" }
    ],
    route: "/business-group#enchante",
    photo: culinaryPhoto,
    photoAlt: "Enchantée Kitchen Artisanal Culinary Catering and Hospitality",
    gridSpan: "col-span-1 md:col-span-6 lg:col-span-4",
    heightClass: "h-[250px] sm:h-[310px] lg:h-[360px]",
    imgPosition: "object-[center_60%]"
  },
  {
    id: "dna-studio",
    name: "DNA Studio",
    discipline: "Broadcast & 4K Cinema",
    tagline: "Creative Broadcast & 4K Cinema Production Suite",
    summary: "Multi-camera broadcast soundstage producing leader dialogues, hybrid AGMs, and syndicated telecasts.",
    fullDescription:
      "Headquartered at Sudirman Park in Central Jakarta, DNA Studio is TSA's dedicated media engineering soundstage. We engineer 4K multi-camera telecasts, virtual AGM electronic voting systems, live satellite uplinks, and syndicated thought leadership forums viewed across the ASEAN corridor.",
    deliverables: [
      "4K multi-camera live broadcast switching and telepresence feeds",
      "Audited hybrid AGM electronic proxy voting architecture",
      "Leader dialogue broadcast curation and digital distribution",
      "Kinetic soundstage lighting, acoustic scenography, and LED arrays"
    ],
    metrics: [
      { label: "Syndicated Views", value: "2.4M+ Viewers" },
      { label: "Production Suite", value: "4K Cinema Rig" },
      { label: "Location", value: "Sudirman Park, Jakarta" }
    ],
    route: "/business-group#dna-studio",
    photo: broadcastPhoto,
    photoAlt: "DNA Studio 4K Broadcast Scenography and Soundstage",
    gridSpan: "col-span-1 md:col-span-12 lg:col-span-4",
    heightClass: "h-[250px] sm:h-[310px] lg:h-[360px]",
    imgPosition: "object-center"
  }
];

export default function LandingBrands({ navigateTo }) {
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
      className="bg-[#FAF9F6] text-[#071731] border-b border-[#E2E8F0] py-12 sm:py-24 relative"
      aria-label="TSA Operating Practices"
    >
      <div className="max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Responsive Alignment */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 sm:gap-6 pb-8 sm:pb-12 border-b border-[#E2E8F0]">
          <div className="space-y-2.5 sm:space-y-3 max-w-3xl">
            <h2 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-bold text-[#071731] tracking-tight leading-[1.15]">
              Operating Brands.
            </h2>
            <p className="font-sans text-xs sm:text-base text-[#64748B] leading-relaxed font-normal">
              Specialized entities orchestrated under PT Tricatha Sempiternal Asia, each maintaining dedicated domain authority. Tap any card to open its operational dossier.
            </p>
          </div>

          <div className="shrink-0 w-full sm:w-auto">
            <button
              type="button"
              onClick={handleViewAllBrands}
              className="w-full sm:w-auto btn-editorial-red text-xs py-3 px-6 cursor-pointer inline-flex items-center justify-center gap-2 min-h-[44px] touch-manipulation"
            >
              <span>Explore Group Portfolio</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Modal Cards Component */}
        <ModalCards
          items={BRANDS}
          onNavigate={navigateTo}
          cardGridClassName="pt-8 sm:pt-10 grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6 lg:gap-8"
        />
      </div>
    </section>
  );
}
