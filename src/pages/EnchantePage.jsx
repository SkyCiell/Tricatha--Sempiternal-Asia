import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowLeft, ArrowRight } from "lucide-react";

const culinaryPhoto = "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=1800&auto=format&fit=crop";
const banquetPhoto = "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1600&auto=format&fit=crop";

export default function EnchantePage({ navigateTo }) {
  const handleInquiry = () => {
    if (navigateTo) {
      navigateTo("/contact");
    } else {
      window.history.pushState(null, "", "/contact");
      window.dispatchEvent(new PopStateEvent("popstate"));
    }
  };

  const handleBackToGroup = () => {
    if (navigateTo) {
      navigateTo("/business-group");
    } else {
      window.history.pushState(null, "", "/business-group");
      window.dispatchEvent(new PopStateEvent("popstate"));
    }
  };

  const disciplines = [
    {
      category: "CORPORATE & EXECUTIVE",
      title: "Corporate Catering & Summit Dining",
      description:
        "Thoughtfully curated executive dining, conference luncheons, VIP boardroom repasts, and large-scale corporate catering designed for seamless scheduling, impeccable timing, and refined presentation.",
      specs: "Executive Plenaries · Boardroom Hospitality · Summit Dining"
    },
    {
      category: "SOCIAL & PRIVATE",
      title: "Social Occasions & Private Celebrations",
      description:
        "Bespoke catering and hospitality for intimate dinner parties, milestone anniversaries, wedding receptions, and social galas. Every menu is personalized to reflect the host's style and the celebration's spirit.",
      specs: "Private Estates · Intimate Gatherings · Curated Galas"
    },
    {
      category: "ARTISANAL CRAFT",
      title: "Culinary Products & Artisanal Creations",
      description:
        "Handcrafted pastry collections, signature savoury delicacies, custom dessert tablescapes, and packaged artisanal culinary products developed with fresh, premium ingredients and exquisite craftsmanship.",
      specs: "Artisanal Bakeries · Bespoke Menus · Seasonal Specialties"
    },
    {
      category: "DISTINCTIVE PRESENTATION",
      title: "Tablescape Design & Hospitality Service",
      description:
        "Distinctive presentation with customized tableware, live finishing stations, thematic food installations, and a highly trained front-of-house hospitality team delivering attentive, gracious service.",
      specs: "Turnkey Styling · Professional Service Staff · Live Stations"
    }
  ];

  const venues = [
    "Corporate Headquarters & Executive Boardrooms",
    "Five-Star Hotel Ballrooms & Convention Centres",
    "Private Residences & Estate Grounds",
    "Curated Social Event Venues & Art Galleries",
    "Outdoor Pavilions & Cultural Sanctuaries"
  ];

  return (
    <div className="bg-[#FAF9F6] min-h-screen text-[#071731] font-sans pt-20 sm:pt-28 pb-20 selection:bg-[#C8102E] selection:text-white">

      {/* 1. ARCHITECTURAL EDITORIAL HEADER */}
      <section className="max-w-[1520px] mx-auto px-4 sm:px-8 pt-6 sm:pt-10 pb-8">

        {/* Navigation Breadcrumb */}
        <div className="pb-6 border-b border-[#071731]/10 mb-8">
          <button
            onClick={handleBackToGroup}
            className="group inline-flex items-center gap-2 text-xs font-mono font-medium uppercase tracking-wider text-slate-500 hover:text-[#071731] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1 text-[#C8102E]" />
            <span>Back to Business Group</span>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-end pb-8 border-b border-[#071731]/10">

          {/* Left Title & Statement (8 cols) */}
          <div className="lg:col-span-8 space-y-4">
            <h1 className="font-heading text-4xl sm:text-6xl lg:text-[70px] font-semibold text-[#071731] tracking-tight leading-[1.04]">
              Enchantée Kitchen <br />
              <span className="font-editorial italic font-normal text-slate-600">
                Thoughtfully Prepared, Distinctively Presented.
              </span>
            </h1>

            <p className="text-slate-600 text-base sm:text-xl font-normal leading-relaxed max-w-2xl pt-2">
              TSA’s dedicated food and beverage division, creating thoughtfully prepared culinary products and catering experiences for corporate, social, and private occasions.
            </p>
          </div>

          {/* Right Action (4 cols) */}
          <div className="lg:col-span-4 flex items-start lg:items-end justify-start lg:justify-end">
            <button
              onClick={handleInquiry}
              className="btn-editorial-red"
            >
              <span>Inquire for Catering &amp; Events</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* 2. PANORAMIC VISUAL ANCHOR */}
      {/* 2. 100vw x 100vh FULLSCREEN CULINARY & HOSPITALITY HERO SCENE */}
      <section className="relative w-screen left-1/2 -translate-x-1/2 h-screen min-h-[680px] bg-[#071731] text-white overflow-hidden flex flex-col justify-between select-none">
        {/* Fullscreen Photo Layer */}
        <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
          <motion.img
            src={culinaryPhoto}
            alt="Enchantée Kitchen Culinary & Catering Presentation"
            initial={{ scale: 1.05, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="w-full h-full object-cover object-center"
          />
          {/* Directional Scrim for Supreme Readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#071731] via-[#071731]/75 via-45% to-[#071731]/30 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#071731]/95 via-[#071731]/60 via-55% to-transparent pointer-events-none" />
        </div>

        {/* Spacer */}
        <div className="relative z-10 w-full pt-10" />

        {/* Center / Direct Typography Over Media */}
        <div className="relative z-10 w-full px-6 sm:px-12 lg:px-16 my-auto py-6">
          <div className="max-w-4xl space-y-4 sm:space-y-6">
            <h2 className="font-heading text-3xl sm:text-5xl lg:text-[56px] font-bold text-white tracking-tight leading-[1.08] drop-shadow-[0_2px_14px_rgba(0,0,0,0.85)]">
              Thoughtfully Prepared, <br />
              <span className="font-editorial italic font-normal text-slate-300">
                Distinctively Presented.
              </span>
            </h2>

            <p className="font-sans text-base sm:text-lg lg:text-xl text-slate-200 font-normal leading-relaxed max-w-3xl drop-shadow-[0_1px_8px_rgba(0,0,0,0.8)]">
              Enchantée Kitchen is TSA’s food and beverage division, creating culinary products and bespoke catering experiences for corporate, social, and private occasions. With attention to flavour, presentation, and reliable service.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={handleInquiry}
                className="btn-editorial-red text-xs sm:text-sm py-3 px-6 cursor-pointer inline-flex items-center gap-2 shadow-lg"
              >
                <span>Consult Our Culinary Team</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Spec Footer Over Media */}
        <div className="relative z-10 w-full px-6 sm:px-12 lg:px-16 pb-8 sm:pb-10">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-4 border-t border-white/15 font-mono text-xs">
            <div>
              <span className="text-slate-400 block text-[10px] uppercase">Service Spectrum</span>
              <span className="text-white font-medium">Corporate Luncheons &amp; Galas</span>
            </div>
            <div>
              <span className="text-slate-400 block text-[10px] uppercase">Cuisine Philosophy</span>
              <span className="text-white font-medium">Indonesian Heritage &amp; International</span>
            </div>
            <div>
              <span className="text-slate-400 block text-[10px] uppercase">Hygiene &amp; Safety</span>
              <span className="text-white font-medium">HACCP Aligned Production</span>
            </div>
            <div>
              <span className="text-slate-400 block text-[10px] uppercase">Operational Base</span>
              <span className="text-white font-medium">Greater Jakarta Corridor</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MANIFESTO & ABOUT US */}
      <section className="max-w-[1520px] mx-auto px-4 sm:px-8 py-20 sm:py-28 border-b border-[#071731]/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-baseline">

          {/* Left Anchor (4 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4"
          >
            <h2 className="font-heading text-2xl sm:text-4xl text-[#071731] font-semibold tracking-tight leading-tight">
              Warmth, Refinement, <br />
              and Considered Craft.
            </h2>
          </motion.div>

          {/* Right Narrative (8 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-8 space-y-8"
          >
            <div>
              <p className="font-editorial text-2xl sm:text-3xl lg:text-4xl text-[#071731] font-normal italic leading-snug tracking-tight">
                "Thoughtfully Prepared, Distinctively Presented"
              </p>
            </div>

            <div className="pt-6 border-t border-[#071731]/10 grid grid-cols-1 sm:grid-cols-2 gap-8 text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
              <p>
                Enchantée Kitchen is TSA’s food and beverage division, creating thoughtfully prepared culinary products and catering experiences for corporate, social, and private occasions. Every offering is developed with attention to flavour, quality, presentation, and the character of the occasion it is intended to complement.
              </p>
              <p>
                From intimate gatherings to larger-scale events, Enchantée Kitchen provides food and hospitality solutions tailored to each client’s requirements. With a balance of warmth, refinement, and reliable service, it aims to make every dining experience feel considered, welcoming, and memorable.
              </p>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 4. THE FOUR DISCIPLINES */}
      <section className="max-w-[1520px] mx-auto px-4 sm:px-8 py-20 sm:py-28 border-b border-[#071731]/10">

        {/* Section Intro */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-[#071731]/10">
          <div>
            <h2 className="font-heading text-2xl sm:text-4xl font-semibold text-[#071731] tracking-tight">
              Tailored Food &amp; Beverage Services
            </h2>
          </div>
          <p className="text-sm text-slate-600 font-normal max-w-md leading-relaxed">
            From executive boardroom luncheons to grand celebration banquets, four comprehensive pillars designed to elevate every dining occasion.
          </p>
        </div>

        {/* Ledger Rows */}
        <div className="divide-y divide-[#071731]/10 pt-4 border-b border-[#071731]/10">
          {disciplines.map((d, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="py-8 sm:py-12 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-baseline group hover:bg-[#071731]/[0.015] transition-colors px-2 sm:px-4 rounded"
            >
              {/* Col 1: Category (3 cols) */}
              <div className="lg:col-span-3">
                <span className="font-mono text-xs tracking-wider uppercase text-[#C8102E] font-semibold">
                  {d.category}
                </span>
              </div>

              {/* Col 2: Title (4 cols) */}
              <div className="lg:col-span-4">
                <h3 className="font-heading text-xl sm:text-2xl font-semibold text-[#071731] tracking-tight group-hover:text-[#C8102E] transition-colors">
                  {d.title}
                </h3>
              </div>

              {/* Col 3: Description & Specs (5 cols) */}
              <div className="lg:col-span-5 space-y-3">
                <p className="font-sans text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                  {d.description}
                </p>
                <div className="font-mono text-xs text-slate-500">
                  <span>{d.specs}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </section>

      {/* 5A. SERVICE COMMITMENT (Airy Editorial Off-White Foundation) */}
      <section className="max-w-[1520px] mx-auto px-4 sm:px-8 py-16 sm:py-20 border-b border-[#071731]/10">
        <div className="max-w-2xl mb-12">
          <h2 className="font-heading text-2xl sm:text-4xl font-semibold text-[#071731] tracking-tight">
            Warmth, Refinement, &amp; Reliable Service.
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12">
          <div className="space-y-2">
            <div className="font-heading text-4xl sm:text-5xl font-bold text-[#071731] tracking-tight">
              100<span className="text-[#C8102E]">%</span>
            </div>
            <div className="font-heading text-sm sm:text-base text-[#071731] font-medium">
              Tailored Hospitality
            </div>
            <p className="font-sans text-xs text-slate-600">
              Every menu, service style, and table setting is designed around each client’s unique occasion.
            </p>
          </div>

          <div className="space-y-2">
            <div className="font-heading text-4xl sm:text-5xl font-bold text-[#071731] tracking-tight">
              Fresh
            </div>
            <div className="font-heading text-sm sm:text-base text-[#071731] font-medium">
              Artisanal Ingredients
            </div>
            <p className="font-sans text-xs text-slate-600">
              Seasonal produce, premium meats, and handcrafted bakery creations made without compromise.
            </p>
          </div>

          <div className="space-y-2">
            <div className="font-heading text-4xl sm:text-5xl font-bold text-[#071731] tracking-tight">
              5★
            </div>
            <div className="font-heading text-sm sm:text-base text-[#071731] font-medium">
              Presentation Quality
            </div>
            <p className="font-sans text-xs text-slate-600">
              Distinctively presented with attention to detail, colour harmony, and tablescape aesthetic.
            </p>
          </div>

          <div className="space-y-2">
            <div className="font-heading text-4xl sm:text-5xl font-bold text-[#071731] tracking-tight">
              Full
            </div>
            <div className="font-heading text-sm sm:text-base text-[#071731] font-medium">
              Turnkey Coordination
            </div>
            <p className="font-sans text-xs text-slate-600">
              From setup and table styling to live cooking stations and professional front-of-house service.
            </p>
          </div>
        </div>
      </section>

      {/* 5B. 100vw x 100vh FULLSCREEN BANQUET CATERING SCENE */}
      <section className="relative w-screen left-1/2 -translate-x-1/2 h-screen min-h-[680px] bg-[#071731] text-white overflow-hidden flex flex-col justify-between select-none">
        {/* Fullscreen Photo Layer */}
        <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
          <motion.img
            src={banquetPhoto}
            alt="Enchantée Kitchen Dining Experience"
            initial={{ scale: 1.05, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="w-full h-full object-cover object-center"
          />
          {/* Directional Scrim for Supreme Readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#071731] via-[#071731]/75 via-45% to-[#071731]/30 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#071731]/95 via-[#071731]/60 via-55% to-transparent pointer-events-none" />
        </div>

        {/* Spacer */}
        <div className="relative z-10 w-full pt-10" />

        {/* Center / Direct Typography Over Media */}
        <div className="relative z-10 w-full px-6 sm:px-12 lg:px-16 my-auto py-6">
          <div className="max-w-4xl space-y-4 sm:space-y-6">
            <h2 className="font-heading text-3xl sm:text-5xl lg:text-[54px] font-bold text-white tracking-tight leading-[1.08] drop-shadow-[0_2px_14px_rgba(0,0,0,0.85)]">
              Occasions &amp; Venues <br />
              <span className="font-editorial italic font-normal text-slate-300">
                Served Across Indonesia.
              </span>
            </h2>

            <p className="font-sans text-base sm:text-lg text-slate-200 font-normal leading-relaxed max-w-3xl drop-shadow-[0_1px_8px_rgba(0,0,0,0.8)]">
              From intimate gatherings to larger-scale events, Enchantée Kitchen provides food and hospitality solutions tailored to each client’s requirements. With a balance of warmth, refinement, and reliable service.
            </p>

            {/* Venues Served Directly Over Media */}
            <div className="pt-2 flex flex-wrap gap-2.5 sm:gap-3 max-w-3xl">
              {venues.map((venue, idx) => (
                <div
                  key={idx}
                  className="px-3.5 py-2 rounded bg-white/10 backdrop-blur-md border border-white/15 text-xs sm:text-sm font-mono text-slate-200"
                >
                  <span>{venue}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Spec Footer Over Media */}
        <div className="relative z-10 w-full px-6 sm:px-12 lg:px-16 pb-8 sm:pb-10">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-4 border-t border-white/15 font-mono text-xs">
            <div>
              <span className="text-slate-400 block text-[10px] uppercase">Capacity</span>
              <span className="text-white font-medium">Bespoke 20 to 2,000+ Guests</span>
            </div>
            <div>
              <span className="text-slate-400 block text-[10px] uppercase">Service Models</span>
              <span className="text-white font-medium">Plated, Buffet &amp; Canapés</span>
            </div>
            <div>
              <span className="text-slate-400 block text-[10px] uppercase">Beverage Program</span>
              <span className="text-white font-medium">Curated Mocktails &amp; Artisanal Tea</span>
            </div>
            <div>
              <span className="text-slate-400 block text-[10px] uppercase">Hospitality Team</span>
              <span className="text-white font-medium">Professional Butler Brigade</span>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CLOSING MANDATE INQUIRY PANEL (Selective Navy Contrast Moment) */}
      <section className="py-20 sm:py-28">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-8">
          <div className="bg-[#071731] text-white border border-[#071731] p-8 sm:p-14 rounded-xl shadow-2xl flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl">
              <h2 className="font-heading text-2xl sm:text-4xl font-semibold text-white tracking-tight">
                Plan Your Next Dining Experience.
              </h2>
              <p className="font-sans text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
                Whether you are organising an executive summit luncheon, an intimate celebratory gathering, or a large-scale corporate event, contact Enchantée Kitchen to curate a culinary experience tailored to your exact requirements.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 shrink-0">
              <button
                onClick={handleInquiry}
                className="btn-editorial-red flex items-center justify-center gap-2"
              >
                <span>Request Catering Proposal</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <button
                onClick={handleBackToGroup}
                className="btn-editorial-outline text-xs flex items-center justify-center gap-2"
              >
                <span>View Full Business Group</span>
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
