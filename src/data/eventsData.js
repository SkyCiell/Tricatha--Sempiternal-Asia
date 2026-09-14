import aseanDiplomacyImage from "../assets/20231130_131733_311.jpg";
import gwiImage from "../assets/9c3a2a75-3f45-48d6-b86b-43955e71d699 (1).jpg";
import govAdvImage from "../assets/DSC08824.JPG";

export const EVENT_CATEGORIES = [
  "All Events",
  "Corporate Event",
  "Government Corporate Event",
  "Team Building",
  "MICE",
  "Gathering",
  "Community Event",
  "Talk Show"
];

export const EVENTS_DATA = [
  {
    id: "evt-01",
    slug: "asean-sovereign-strategic-diplomacy-plenary-2025",
    title: "ASEAN Sovereign Strategic Diplomacy Plenary",
    client: "ASEAN Secretariat & Sovereign Delegations",
    category: "Government Corporate Event",
    venue: "Jakarta Convention Center (JCC), Senayan",
    year: "2025",
    date: "February 2025",
    location: "Jakarta Convention Center (JCC), Senayan",
    attendees: "1,200 Delegates",
    img: aseanDiplomacyImage,
    height: 780,
    scope: "VVIP Protocol Logistics, Sovereign Seating Etiquette, Encrypted Multi-Lingual Telemetry",
    description:
      "Orchestrated head-of-state diplomatic forum gathering 18 ministerial delegations from across the Southeast Asian corridor. Managed bilateral negotiation rooms, simultaneous translation infrastructure, and sovereign reception protocols with zero margin for error.",
    gallery: [
      aseanDiplomacyImage,
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop",
      govAdvImage,
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1200&auto=format&fit=crop"
    ]
  },
  {
    id: "evt-02",
    slug: "national-digital-governance-govtech-conclave-2024",
    title: "National Digital Governance & GovTech Conclave",
    client: "Ministry of Communication & Digital Affairs",
    category: "Government Corporate Event",
    venue: "The Ritz-Carlton Jakarta, Mega Kuningan",
    year: "2024",
    date: "November 2024",
    location: "The Ritz-Carlton Jakarta, Mega Kuningan",
    attendees: "850 Delegates",
    img: govAdvImage,
    height: 640,
    scope: "Inter-Ministerial Liaison, Stage Scenography, Real-Time Executive Telemetry",
    description:
      "High-level state convention convening directors general, ministry secretaries, and systems architects to deliberate digital sovereignty, sovereign cloud governance, and inter-agency data integration.",
    gallery: [
      govAdvImage,
      "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200&auto=format&fit=crop",
      aseanDiplomacyImage,
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1200&auto=format&fit=crop"
    ]
  },
  {
    id: "evt-03",
    slug: "soe-executive-leadership-assembly-2024",
    title: "State-Owned Enterprise Executive Leadership Assembly",
    client: "Ministry of State-Owned Enterprises Board",
    category: "Government Corporate Event",
    venue: "Hotel Mulia Senayan, Jakarta",
    year: "2024",
    date: "September 2024",
    location: "Hotel Mulia Senayan, Jakarta",
    attendees: "600 Executives",
    img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200&auto=format&fit=crop",
    height: 700,
    scope: "Plenary Staging, Stakeholder Alignment, Security Protocol",
    description:
      "Annual corporate governance symposium for holding leadership and board members of national state-owned enterprises, establishing ESG alignment and strategic investment benchmarks.",
    gallery: [
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200&auto=format&fit=crop",
      govAdvImage,
      "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=1200&auto=format&fit=crop"
    ]
  },
  {
    id: "evt-04",
    slug: "sea-energy-transition-clean-tech-mice-expo-2025",
    title: "Southeast Asia Energy Transition & Clean Tech MICE Expo",
    client: "Regional Energy & Infrastructure Consortium",
    category: "MICE",
    venue: "Indonesia Convention Exhibition (ICE BSD City)",
    year: "2025",
    date: "January 2025",
    location: "Indonesia Convention Exhibition (ICE BSD City)",
    attendees: "15,000+ Attendees",
    img: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop",
    height: 820,
    scope: "Exhibition Floor Architecture, Delegate Flow Control, 200+ Corporate Pavilions",
    description:
      "Turnkey MICE execution spanning three exhibition halls, ministerial keynote stages, and B2B matchmaking lounges uniting multinational energy consortiums and regional infrastructure investors.",
    gallery: [
      "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=1200&auto=format&fit=crop",
      aseanDiplomacyImage,
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200&auto=format&fit=crop"
    ]
  },
  {
    id: "evt-05",
    slug: "apac-maritime-logistics-cargo-congress-2024",
    title: "Asia-Pacific Maritime Logistics & Cargo Congress",
    client: "Asia-Pacific Maritime Authority Council",
    category: "MICE",
    venue: "Bali International Convention Centre (BICC), Nusa Dua",
    year: "2024",
    date: "October 2024",
    location: "Bali International Convention Centre (BICC), Nusa Dua",
    attendees: "3,500 Delegates",
    img: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=1200&auto=format&fit=crop",
    height: 660,
    scope: "International Delegate Management, Simultaneous Interpretation, Commercial Exhibition",
    description:
      "Regional maritime congress addressing cross-border shipping corridors, customs digitization, and port infrastructure investment across 14 Asia-Pacific economies.",
    gallery: [
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1200&auto=format&fit=crop",
      govAdvImage
    ]
  },
  {
    id: "evt-06",
    slug: "bank-artha-raya-agm-2025",
    title: "Bank Artha Raya Annual General Meeting of Shareholders",
    client: "PT Bank Artha Raya Tbk",
    category: "Corporate Event",
    venue: "Fairmont Hotel Ballroom, Jakarta",
    year: "2025",
    date: "March 2025",
    location: "Fairmont Hotel Ballroom, Jakarta",
    attendees: "1,400 Shareholders",
    img: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1200&auto=format&fit=crop",
    height: 720,
    scope: "Encrypted Voting Infrastructure, Strict Corporate Governance, Live Broadcast Telecast",
    description:
      "Hybrid in-person and digital AGM orchestration with real-time audited proxy voting systems, investor relations media staging, and executive board panel coordination.",
    gallery: [
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200&auto=format&fit=crop"
    ]
  },
  {
    id: "evt-07",
    slug: "pacific-rim-investor-capital-summit-2024",
    title: "Pacific Rim Institutional Investor & Capital Summit",
    client: "Pacific Rim Sovereign & Private Capital Alliance",
    category: "Corporate Event",
    venue: "The Westin Jakarta, Kuningan",
    year: "2024",
    date: "August 2024",
    location: "The Westin Jakarta, Kuningan",
    attendees: "750 Investors",
    img: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=1200&auto=format&fit=crop",
    height: 800,
    scope: "Closed-Door Investor Roundtables, Private Deal Suites, Plenary Audio-Visual",
    description:
      "Exclusive investment conclave linking sovereign wealth funds, private equity partners, and regional enterprises structuring high-stakes infrastructure capital allocations.",
    gallery: [
      "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=1200&auto=format&fit=crop",
      govAdvImage
    ]
  },
  {
    id: "evt-08",
    slug: "petro-nusa-strategic-energy-accord-signing-2024",
    title: "Petro Nusa Strategic Energy Partnership Accord Signing",
    client: "PT Petro Nusa Energi & International Partners",
    category: "Corporate Event",
    venue: "Park Hyatt Jakarta, Menteng",
    year: "2024",
    date: "June 2024",
    location: "Park Hyatt Jakarta, Menteng",
    attendees: "350 Invited Guests",
    img: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=1200&auto=format&fit=crop",
    height: 620,
    scope: "Bilateral Signing Ceremonial Protocol, Stage Production, National Media Press Plenary",
    description:
      "Formal ceremonial execution for a multi-million-dollar joint development accord between state energy authorities and international exploration conglomerates.",
    gallery: [
      "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=1200&auto=format&fit=crop",
      aseanDiplomacyImage,
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200&auto=format&fit=crop"
    ]
  },
  {
    id: "evt-09",
    slug: "gema-waskita-interaktifa-cultural-festival-2025",
    title: "Gema Waskita Interaktifa Public Cultural Heritage Festival",
    client: "Ministry of Culture & Civic Heritage",
    category: "Community Event",
    venue: "Gelora Bung Karno (GBK) Arena, Jakarta",
    year: "2025",
    date: "January 2025",
    location: "Gelora Bung Karno (GBK) Arena, Jakarta",
    attendees: "45,000+ Attendees",
    img: gwiImage,
    height: 840,
    scope: "Turnkey Spatial Scenography, Interactive Crowd Telemetry, Multi-Cam Broadcast",
    description:
      "Monumental public engagement celebration bringing together civic patrons, cultural ministries, and over 45,000 attendees experiencing national heritage through interactive digital projection mapping.",
    gallery: [
      gwiImage,
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop",
      aseanDiplomacyImage,
      "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?q=80&w=1200&auto=format&fit=crop"
    ]
  },
  {
    id: "evt-10",
    slug: "nusantara-green-innovation-civic-assembly-2024",
    title: "Nusantara Green Innovation & Civic Assembly",
    client: "Civic Environmental & Sustainability Alliance",
    category: "Community Event",
    venue: "Taman Ismail Marzuki Cultural Center, Cikini",
    year: "2024",
    date: "December 2024",
    location: "Taman Ismail Marzuki Cultural Center, Cikini",
    attendees: "8,000 Attendees",
    img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1200&auto=format&fit=crop",
    height: 680,
    scope: "Community Engagement Architecture, Eco-Pavilion Staging, Civic Dialogue Setup",
    description:
      "Multi-stakeholder festival convening university student councils, environmental NGOs, and urban planning institutions to showcase sustainable circular economy solutions.",
    gallery: [
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1200&auto=format&fit=crop",
      gwiImage,
      "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop",
      govAdvImage
    ]
  },
  {
    id: "evt-11",
    slug: "diplomatic-corps-ambassadorial-gala-dinner-2024",
    title: "Annual Diplomatic Corps & Ambassadorial Gala Dinner",
    client: "Sovereign Diplomatic Corps Directorate",
    category: "Gathering",
    venue: "Grand Hyatt Jakarta Grand Ballroom",
    year: "2024",
    date: "December 2024",
    location: "Grand Hyatt Jakarta Grand Ballroom",
    attendees: "450 Envoys & Dignitaries",
    img: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?q=80&w=1200&auto=format&fit=crop",
    height: 740,
    scope: "Diplomatic Seating Protocol, Haute Banquet Staging, Orchestral Acoustic Engineering",
    description:
      "High-level annual gathering hosting foreign ambassadors, diplomatic attachés, and state cabinet ministers in an atmosphere of refined bilateral decorum and discretion.",
    gallery: [
      "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=1200&auto=format&fit=crop",
      aseanDiplomacyImage,
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1200&auto=format&fit=crop"
    ]
  },
  {
    id: "evt-12",
    slug: "tsa-stakeholders-partners-appreciation-night-2024",
    title: "TSA Executive Stakeholders & Partners Appreciation Night",
    client: "TSA Directorate & Institutional Partners",
    category: "Gathering",
    venue: "The Langham Jakarta Ballroom, SCBD",
    year: "2024",
    date: "November 2024",
    location: "The Langham Jakarta Ballroom, SCBD",
    attendees: "380 C-Suite Guests",
    img: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=1200&auto=format&fit=crop",
    height: 620,
    scope: "Experiential Lighting, Executive Networking Architecture, Turnkey Banquet Logistics",
    description:
      "Exclusive corporate celebration uniting founders, ministerial advisors, and strategic consortium partners to commemorate milestone bilateral accords delivered across 2024.",
    gallery: [
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=1200&auto=format&fit=crop",
      govAdvImage
    ]
  },
  {
    id: "evt-13",
    slug: "tsa-senior-leadership-strategic-offsite-2025",
    title: "TSA Senior Leadership Strategic Offsite & Alignment Retreat",
    client: "TSA Executive Directorate",
    category: "Team Building",
    venue: "Royal Tulip Gunung Geulis Resort, Bogor",
    year: "2025",
    date: "February 2025",
    location: "Royal Tulip Gunung Geulis Resort, Bogor",
    attendees: "120 Executive Officers",
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop",
    height: 800,
    scope: "Experiential Group Dynamics, Strategic Roadmapping Workshops, Executive Facilitation",
    description:
      "Three-day intensive corporate immersion aligning business group directors, senior project leads, and advisors on multi-year regional expansion targets and institutional risk frameworks.",
    gallery: [
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop",
      govAdvImage
    ]
  },
  {
    id: "evt-tapera",
    slug: "team-building-bp-tapera-2025",
    title: "TEAM BUILDING BP TAPERA 2025",
    client: "BP TAPERA",
    category: "Team Building",
    venue: "Ciwiday, Bandung, Jawa Barat",
    year: "2025",
    date: "July 2025",
    location: "Ciwiday, Bandung, Jawa Barat",
    attendees: "180 Officers & Personnel",
    img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1200&auto=format&fit=crop",
    height: 660,
    scope: "Experiential Group Dynamics, Strategic Team Synergy Drills, Leadership Facilitation, Turnkey Hospitality",
    description:
      "A comprehensive corporate team-building expedition organized for BP Tapera executives and personnel in Ciwiday, Bandung. The program combined experiential leadership challenges, institutional risk navigation workshops, and collaborative synergy sessions designed to reinforce operational agility and team cohesion.",
    gallery: [
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop",
      govAdvImage,
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200&auto=format&fit=crop"
    ]
  },
  {
    id: "evt-15",
    slug: "dna-studio-leader-dialogue-geopolitical-horizons-2026",
    title: "DNA Studio Leader Dialogue: Geopolitical Horizons 2026",
    client: "DNA Studio Broadcast Network",
    category: "Talk Show",
    venue: "DNA Studio Broadcast Suite, The City Tower Jakarta",
    year: "2025",
    date: "January 2025",
    location: "DNA Studio Broadcast Suite, The City Tower Jakarta",
    attendees: "Studio Live Audience & 2.4M Stream Viewers",
    img: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=1200&auto=format&fit=crop",
    height: 760,
    scope: "4K Multi-Cam Broadcast Switching, Soundstage Lighting, Real-Time Digital Syndication",
    description:
      "Flagship broadcast talk show series featuring prominent former ambassadors, trade economists, and technology executives analyzing Southeast Asia’s policy trajectories.",
    gallery: [
      "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=1200&auto=format&fit=crop",
      aseanDiplomacyImage,
      govAdvImage
    ]
  },
  {
    id: "evt-16",
    slug: "future-governance-ai-sovereignty-forum-2024",
    title: "Future Governance & AI Sovereignty Thought Leadership Forum",
    client: "Institute for AI Policy & Enterprise Sovereignty",
    category: "Talk Show",
    venue: "Soehanna Hall, Energy Building SCBD",
    year: "2024",
    date: "September 2024",
    location: "Soehanna Hall, Energy Building SCBD",
    attendees: "450 In-Person Attendees & Live Broadcast",
    img: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=1200&auto=format&fit=crop",
    height: 640,
    scope: "Panel Staging, Broadcast Audio Mixing, Interactive Audience Q&A Telemetry",
    description:
      "Moderated executive panel exploring artificial intelligence governance, sovereign data residency guidelines, and regulatory compliance for enterprise institutions.",
    gallery: [
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=1200&auto=format&fit=crop",
      aseanDiplomacyImage
    ]
  }
];

export function getEventBySlug(slug) {
  if (!slug) return null;
  const normalized = slug.toLowerCase().trim().replace(/\/+$/, "");
  return EVENTS_DATA.find(
    (e) => e.slug.toLowerCase() === normalized || e.id.toLowerCase() === normalized
  ) || null;
}
