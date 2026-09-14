import React from "react";
import logoTSA from "../assets/LogoTSAA.jpeg";

export default function Footer({ navigateTo }) {
  const currentYear = new Date().getFullYear();

  const handleNav = (path) => {
    if (navigateTo) {
      navigateTo(path);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Business Group", path: "/business-group" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Events", path: "/events" },
    { name: "Internship", path: "/internship" },
    { name: "Contact", path: "/contact" },
    { name: "FAQ", path: "/faq" }
  ];

  return (
    <footer className="relative z-20 pt-16 sm:pt-24 pb-12 sm:pb-16 px-4 sm:px-8 bg-transparent">
      <div className="max-w-[1520px] mx-auto">
        <div className="relative overflow-hidden rounded-lg bg-[#0A1F44] border border-white/10 text-white p-8 sm:p-12 lg:p-16 shadow-lg">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Left Col (6 cols): Brand & Overview */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded p-0.5 bg-white border border-white/20 flex items-center justify-center shrink-0">
                  <img src={logoTSA} alt="TSA Emblem" className="w-full h-full object-cover" />
                </div>
                <div>
                  <span className="font-heading font-bold text-base tracking-tight text-white block leading-none">
                    TRICATHA SEMPITERNAL ASIA
                  </span>
                  <span className="font-mono text-[10px] text-slate-400 tracking-wider uppercase mt-1 block">
                    THE CITY TOWER · JAKARTA
                  </span>
                </div>
              </div>

              <p className="font-sans text-sm sm:text-base text-slate-300 max-w-lg leading-relaxed font-normal">
                PT Tricatha Sempiternal Asia unifies strategic corporate advisory, public affairs, high-level event management, and broadcast media across Southeast Asia.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3 text-xs font-mono text-slate-300">
                <span className="px-2.5 py-1 border border-white/15 rounded bg-white/5 text-white">
                  PT TRICATHA SEMPITERNAL ASIA
                </span>
                <span className="text-slate-400">·</span>
                <span className="text-[#C8102E] font-medium">SOVEREIGN PROTOCOL STANDARD</span>
              </div>
            </div>

            {/* Middle Col (3 cols): Directory */}
            <div className="lg:col-span-3 space-y-4">
              <h3 className="font-sans font-semibold text-xs text-[#C8102E] tracking-wider uppercase">
                Directory
              </h3>
              <ul className="space-y-2.5 font-sans text-xs text-slate-300">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => handleNav(link.path)}
                      className="hover:text-white transition-colors cursor-pointer text-left focus:outline-none flex items-center gap-1.5"
                    >
                      <span>{link.name}</span>
                      <span className="text-[11px] text-[#C8102E] opacity-0 hover:opacity-100 transition-opacity">↗</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Col (3 cols): Headquarters & Contact */}
            <div className="lg:col-span-3 space-y-4">
              <h3 className="font-sans font-semibold text-xs text-[#C8102E] tracking-wider uppercase">
                Executive Secretariat
              </h3>
              <div className="space-y-2 font-sans text-xs text-slate-300 leading-relaxed">
                <div>
                  The City Tower, 12th Floor Unit 1N<br />
                  Jl. MH. Thamrin No. 81<br />
                  Jakarta Pusat 10310, Indonesia
                </div>
                <div className="pt-2 font-mono space-y-1">
                  <div>
                    <a
                      href="mailto:info@tsa-group.com"
                      className="hover:text-[#C8102E] transition-colors block text-white"
                    >
                      info@tsa-group.com
                    </a>
                  </div>
                  <div className="text-slate-400">
                    +62 21 2358 4500
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-white/10 text-xs text-slate-400">
                Hours: Monday – Friday 08:30 – 17:30 WIB
              </div>
            </div>

          </div>

          {/* Bottom Colophon */}
          <div className="mt-12 sm:mt-16 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-slate-400">
            <div>
              © {currentYear} PT Tricatha Sempiternal Asia. All rights reserved.
            </div>
            <div className="flex items-center gap-4 text-xs font-mono">
              <span>Jakarta, Indonesia</span>
              <span>·</span>
              <span className="text-slate-300">ASEAN Operational Corridor</span>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
