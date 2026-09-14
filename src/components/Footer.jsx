import React from "react";

export default function Footer({ navigateTo }) {
  const currentYear = new Date().getFullYear();

  const handleNav = (path) => {
    if (navigateTo) {
      navigateTo(path);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative z-20 pt-20 sm:pt-28 pb-12 sm:pb-16 px-4 sm:px-8 bg-transparent">
      <div className="max-w-[1360px] mx-auto">
        {/* Deep Navy #0A1F44 Architectural Container with Fine Border */}
        <div className="relative overflow-hidden rounded-[3px] bg-[#0A1F44] bg-grid-navy border border-[#06152F] shadow-[3px_3px_0px_rgba(10,31,68,0.15)] text-white p-8 sm:p-12 lg:p-16">
          
          {/* Subtle Embossed Watermark in Background */}
          <div className="absolute inset-0 pointer-events-none select-none flex items-center justify-center opacity-10 overflow-hidden">
            <span className="font-display font-black text-[120px] sm:text-[200px] lg:text-[260px] tracking-tighter text-white whitespace-nowrap">
              TRICATHA
            </span>
          </div>

          {/* Guide Markers */}
          <div className="absolute top-3 left-3 text-[9px] font-mono text-white/40">
            TSA · PLENARY ARCHIVE
          </div>
          <div className="absolute top-3 right-3 text-[9px] font-mono text-white/40">
            REV. 2026-A · PROTOCOL COMPLIANT
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pt-4">
            
            {/* Left Tagline & Mission (6 cols) */}
            <div className="lg:col-span-6 space-y-6">
              <div className="-rotate-2 font-architect text-[#C8102E] text-[20px] sm:text-[24px]">
                ~ to those who shape the nation and the world ~
              </div>

              <h2 className="font-display text-[26px] sm:text-[34px] lg:text-[40px] font-bold text-white leading-[1.12] tracking-tight">
                Sovereign orchestration &amp; spatial engineering for high-stakes assemblies.
              </h2>

              <p className="font-sans text-sm sm:text-base text-slate-300 max-w-lg leading-relaxed">
                PT Tricatha Sempiternal Asia unifies multilateral diplomacy, presidential protocol, and high-impact stagecraft across the ASEAN corridor.
              </p>

              {/* Technical Registration Marker */}
              <div className="pt-2 flex flex-wrap items-center gap-3 text-[11px] font-mono text-white/70">
                <span className="px-2 py-0.5 border border-white/20 rounded-[2px] bg-black/25 text-white">
                  PT TRICATHA SEMPITERNAL ASIA
                </span>
                <span>JAKARTA HEADQUARTERS</span>
                <span>·</span>
                <span className="text-[#C8102E] font-bold">THE CITY TOWER</span>
              </div>
            </div>

            {/* Middle Quick Links (3 cols) */}
            <div className="lg:col-span-3 space-y-4">
              <h3 className="font-display font-bold text-[14px] text-[#C8102E] tracking-wider uppercase">
                Directory
              </h3>
              <ul className="space-y-2 font-mono text-[12px] text-slate-300">
                {[
                  { name: "Home", path: "/" },
                  { name: "About", path: "/about" },
                  { name: "Business Group", path: "/business-group" },
                  { name: "Services", path: "/services" },
                  { name: "Portfolio", path: "/portfolio" },
                  { name: "Events", path: "/events" },
                  { name: "Internship", path: "/internship" },
                  { name: "Contact", path: "/contact" },
                  { name: "FAQ", path: "/faq" }
                ].map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => handleNav(link.path)}
                      className="hover:text-[#C8102E] transition-colors cursor-pointer text-left focus:outline-none flex items-center gap-1"
                    >
                      <span>{link.name}</span>
                      <span className="text-[10px] text-[#C8102E] opacity-0 hover:opacity-100 transition-opacity">↗</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Contact & Channels (3 cols) */}
            <div className="lg:col-span-3 space-y-4">
              <h3 className="font-display font-bold text-[14px] text-[#C8102E] tracking-wider uppercase">
                Diplomatic Desk
              </h3>
              <ul className="space-y-2 font-mono text-[12px] text-slate-300">
                <li>
                  <a
                    href="mailto:partnership@tricatha.com"
                    className="hover:text-[#C8102E] transition-colors block"
                  >
                    partnership@tricatha.com
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:protocol@tricatha.com"
                    className="hover:text-[#C8102E] transition-colors block"
                  >
                    protocol@tricatha.com
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-[#C8102E] transition-colors block"
                  >
                    LinkedIn / Tricatha Asia
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-[#C8102E] transition-colors block"
                  >
                    Instagram / @tricatha.asia
                  </a>
                </li>
              </ul>

              <div className="pt-4 border-t border-white/15">
                <div className="font-architect text-sm text-slate-400">
                  Direct Dispatch Hotline:
                </div>
                <div className="font-mono text-xs text-white mt-1 font-semibold">
                  +62 21 2922 2888 (Jakarta)
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Colophon & Coordinates */}
          <div className="relative z-10 mt-12 sm:mt-16 pt-6 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-white/60">
            <div>
              © {currentYear} PT TRICATHA SEMPITERNAL ASIA. ALL RIGHTS RESERVED.
            </div>
            <div className="flex items-center gap-4">
              <span>LAT 06°12'S · LONG 106°49'E</span>
              <span>·</span>
              <span className="text-[#C8102E] font-bold">SOVEREIGN PROTOCOL STANDARD</span>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
