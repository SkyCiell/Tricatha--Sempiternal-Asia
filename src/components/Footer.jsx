import React from "react";
import { ArrowUp, Mail, Phone, MapPin } from "lucide-react";
import logoTSA from "../assets/LogoTSAA.jpeg";

const LinkedinIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const YoutubeIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
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
    { name: "Business Group", path: "/business-group" },
    { name: "Event & Expos", path: "/events" },
    { name: "Activities & Initiatives", path: "/activities" },
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
    <footer data-nav-theme="dark" className="bg-[#050F22] text-white border-t border-white/10 pt-12 sm:pt-24 pb-10 sm:pb-12">
      <div className="max-w-[1520px] mx-auto px-4 sm:px-8">

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-16 pb-12 sm:pb-16 border-b border-white/10">

          {/* Brand Col (4 cols) */}
          <div className="lg:col-span-4 space-y-5 sm:space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded p-0.5 bg-white border border-white/20 flex items-center justify-center shrink-0">
                <img src={logoTSA} alt="TSA Emblem" className="w-full h-full object-cover" />
              </div>
              <div>
                <span className="font-heading font-bold text-base tracking-tight text-white block leading-none">
                  TRICATHA SEMPITERNAL ASIA
                </span>
              </div>
            </div>

            <p className="font-sans text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm">
              PT Tricatha Sempiternal Asia is an Indonesian multidisciplinary company delivering integrated solutions across technology, event management, government advocacy, food and beverage, and digital content production.
            </p>

            {/* Business Group Entities Strip */}
            <div className="pt-3 border-t border-white/10 space-y-2">
              <span className="text-[10px] font-mono text-slate-400 tracking-wider uppercase font-semibold block">
                Business Group:
              </span>
              <div className="flex flex-wrap gap-1.5 font-mono text-xs">
                {[
                  { name: "TSA IT & TECHNOLOGY", path: "/business-group#tsa-tech" },
                  { name: "GWI", path: "/business-group#gwi" },
                  { name: "GOVADV", path: "/business-group#govadv" },
                  { name: "ENCHANTÉE KITCHEN", path: "/business-group#enchante" },
                  { name: "DNA STUDIO", path: "/business-group#dna-studio" }
                ].map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleNav(item.path)}
                    className="px-2.5 py-1.5 rounded bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white border border-white/10 transition-colors cursor-pointer text-[10px] sm:text-[11px] touch-manipulation min-h-[32px]"
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-2 flex items-center gap-3">
              {[
                { icon: LinkedinIcon, label: "LinkedIn", href: "https://linkedin.com" },
                { icon: InstagramIcon, label: "Instagram", href: "https://instagram.com" },
                { icon: YoutubeIcon, label: "YouTube", href: "https://youtube.com" }
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`TSA on ${s.label}`}
                  className="w-11 h-11 rounded-full bg-white/5 hover:bg-[#C8102E] text-slate-300 hover:text-white flex items-center justify-center transition-all duration-300 border border-white/10 touch-manipulation active:scale-95"
                >
                  <s.icon />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Nav (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <span className="text-xs font-mono uppercase tracking-wider text-[#C8102E] font-semibold block">
              Navigation
            </span>
            <ul className="space-y-1 font-sans text-sm">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <button
                    type="button"
                    onClick={() => handleNav(link.path)}
                    className="text-slate-300 hover:text-white transition-colors cursor-pointer text-left py-1.5 touch-manipulation block w-full"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Scope (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <span className="text-xs font-mono uppercase tracking-wider text-[#C8102E] font-semibold block">
              Capabilities
            </span>
            <ul className="space-y-1 font-sans text-xs sm:text-sm text-slate-300">
              {serviceLinks.map((service) => (
                <li key={service} className="py-1">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Headquarters Location & Inquiries (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <span className="text-xs font-mono uppercase tracking-wider text-[#C8102E] font-semibold block">
              Headquarters
            </span>

            <div className="space-y-3 font-sans text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C8102E] shrink-0 mt-0.5" />
                <div className="leading-relaxed">
                  Sudirman Park Apartment<br />
                  Jl. KH. Mas Mansyur Kav. 35, Karet Tengsin, Tanah Abang<br />
                  Jakarta Pusat, DKI Jakarta, Indonesia
                </div>
              </div>

              <div className="flex items-center gap-2.5 pt-1">
                <Mail className="w-4 h-4 text-[#C8102E] shrink-0" />
                <a href="mailto:de@sempiternalasia.com" className="hover:text-white transition-colors py-1 block">
                  de@sempiternalasia.com
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C8102E] shrink-0" />
                <a href="tel:+628121000784" className="hover:text-white transition-colors py-1 block">
                  +62-812-1000-784
                </a>
              </div>

              <div className="pt-2 text-[11px] text-slate-400 border-t border-white/10">
                Operating Hours: Mon – Fri 08:30 – 17:30 WIB
              </div>
            </div>
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-5 text-xs font-sans text-slate-400 text-center sm:text-left">
          <div className="space-y-1">
            <div>
              © {currentYear} PT Tricatha Sempiternal Asia. All rights reserved.
            </div>
            <div className="text-[11px] text-slate-400">
              Sudirman Park Apartment · Jakarta Pusat, Indonesia
            </div>
          </div>

          {/* Social Channels */}
          <div className="flex items-center gap-3">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TSA LinkedIn"
              className="w-8 h-8 rounded bg-white/5 border border-white/10 hover:border-[#C8102E] hover:text-[#C8102E] flex items-center justify-center transition-colors text-slate-300"
            >
              <LinkedinIcon />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TSA Instagram"
              className="w-8 h-8 rounded bg-white/5 border border-white/10 hover:border-[#C8102E] hover:text-[#C8102E] flex items-center justify-center transition-colors text-slate-300"
            >
              <InstagramIcon />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TSA YouTube"
              className="w-8 h-8 rounded bg-white/5 border border-white/10 hover:border-[#C8102E] hover:text-[#C8102E] flex items-center justify-center transition-colors text-slate-300"
            >
              <YoutubeIcon />
            </a>
            <a
              href="https://wa.me/628121000784"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp Secretariat"
              className="h-8 px-2.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20 text-[11px] font-mono font-medium flex items-center gap-1.5 transition-colors"
            >
              <span>WA Secretariat</span>
            </a>
          </div>

          <button
            onClick={handleScrollToTop}
            className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors cursor-pointer group min-h-[44px] px-3 py-1.5 touch-manipulation active:scale-95"
          >
            <span>Back to Top</span>
            <div className="w-7 h-7 rounded bg-white/10 flex items-center justify-center group-hover:bg-[#C8102E] transition-colors">
              <ArrowUp className="w-3.5 h-3.5 text-white" />
            </div>
          </button>
        </div>

      </div>
    </footer>
  );
}
