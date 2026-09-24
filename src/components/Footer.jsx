import React from "react";
import { ArrowUp, Mail, Phone, MapPin } from "lucide-react";
import logoTSA from "../assets/LogoTSAA.jpeg";

const LinkedinIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const YoutubeIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

export default function Footer({ navigateTo }) {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    if (window.__lenis) {
      window.__lenis.scrollTo(0, { immediate: false });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleNav = (path) => {
    if (navigateTo && path) {
      navigateTo(path);
    }
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About TSA", path: "/about" },
    { name: "Business Group", path: "/business-group" },
    { name: "Events & Plenaries", path: "/events" },
    { name: "Fellowship & Internship", path: "/internship" },
    { name: "News & Dispatches", path: "/news" },
    { name: "Contact Secretariat", path: "/contact" }
  ];

  const serviceLinks = [
    "Event Strategy",
    "Event Management",
    "Exhibition & Expo",
    "Conference & Forum",
    "Corporate Events",
    "Government & Institutional Programs",
    "Business Networking",
    "Creative & Event Production"
  ];

  return (
    <footer className="bg-[#050F22] text-white border-t border-white/10 pt-16 sm:pt-24 pb-12">
      <div className="max-w-[1520px] mx-auto px-4 sm:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-white/10">
          
          {/* Brand Col (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded p-0.5 bg-white border border-white/20 flex items-center justify-center shrink-0">
                <img src={logoTSA} alt="TSA Emblem" className="w-full h-full object-cover" />
              </div>
              <div>
                <span className="font-heading font-bold text-base tracking-tight text-white block leading-none">
                  TRICATHA SEMPITERNAL ASIA
                </span>
                <span className="font-sans text-[10px] text-slate-400 tracking-wider uppercase mt-1 block">
                  THE CITY TOWER · JAKARTA
                </span>
              </div>
            </div>

            <p className="font-sans text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm">
              PT Tricatha Sempiternal Asia is a premier event organizer and business event company in Jakarta. We deliver corporate events, exhibitions, conferences, government-related events, business networking, and strategic programs across Southeast Asia.
            </p>

            {/* Business Group Entities Strip */}
            <div className="pt-3 border-t border-white/10 space-y-2">
              <span className="text-[10px] font-mono text-[#C8102E] tracking-wider uppercase font-semibold block">
                TSA Business Group Entities:
              </span>
              <div className="flex flex-wrap gap-1.5 font-mono text-xs">
                {[
                  { name: "ENCHANTE", anchor: "unit-enchante" },
                  { name: "DNA STUDIO", anchor: "unit-dna" },
                  { name: "GWI", anchor: "unit-gwi" },
                  { name: "GOADV", anchor: "unit-govadv" }
                ].map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleNav("/business-group")}
                    className="px-2.5 py-1 rounded bg-[#071731] hover:bg-[#C8102E] text-white border border-white/15 text-[11px] transition-colors cursor-pointer"
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:border-[#C8102E] hover:bg-[#C8102E] transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:border-[#C8102E] hover:bg-[#C8102E] transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:border-[#C8102E] hover:bg-[#C8102E] transition-colors"
                aria-label="YouTube"
              >
                <YoutubeIcon />
              </a>
            </div>
          </div>

          {/* Quick Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-sans font-semibold text-xs text-[#C8102E] tracking-wider uppercase">
              Navigation
            </h3>
            <ul className="space-y-2.5 font-sans text-xs text-slate-300">
              {navLinks.map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => handleNav(item.path)}
                    className="hover:text-white transition-colors cursor-pointer text-left focus:outline-none"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Services (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-sans font-semibold text-xs text-[#C8102E] tracking-wider uppercase">
              Capabilities &amp; Services
            </h3>
            <ul className="space-y-2 font-sans text-xs text-slate-300">
              {serviceLinks.map((svc) => (
                <li key={svc}>
                  <button
                    onClick={() => handleNav("/events")}
                    className="hover:text-white transition-colors cursor-pointer text-left focus:outline-none"
                  >
                    {svc}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-sans font-semibold text-xs text-[#C8102E] tracking-wider uppercase">
              Executive Secretariat
            </h3>

            <div className="space-y-3 font-sans text-xs text-slate-300 leading-relaxed">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C8102E] shrink-0 mt-0.5" />
                <div>
                  The City Tower, 12th Floor Unit 1N<br />
                  Jl. MH. Thamrin No. 81<br />
                  Jakarta Pusat 10310, Indonesia
                </div>
              </div>

              <div className="flex items-center gap-2.5 pt-1">
                <Mail className="w-4 h-4 text-[#C8102E] shrink-0" />
                <a href="mailto:info@tsa-group.com" className="hover:text-white transition-colors">
                  info@tsa-group.com
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C8102E] shrink-0" />
                <a href="tel:+622123584500" className="hover:text-white transition-colors">
                  +62 21 2358 4500
                </a>
              </div>

              <div className="pt-2 text-[11px] text-slate-400 border-t border-white/10">
                Operating Hours: Mon – Fri 08:30 – 17:30 WIB
              </div>
            </div>
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-slate-400">
          <div>
            © {currentYear} PT Tricatha Sempiternal Asia. All rights reserved.
          </div>

          <button
            onClick={handleScrollToTop}
            className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors cursor-pointer group"
          >
            <span>Back to Top</span>
            <div className="w-6 h-6 rounded bg-white/10 flex items-center justify-center group-hover:bg-[#C8102E] transition-colors">
              <ArrowUp className="w-3.5 h-3.5 text-white" />
            </div>
          </button>
        </div>

      </div>
    </footer>
  );
}
