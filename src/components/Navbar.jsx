import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import logoTSA from "../assets/LogoTSAA.jpeg";

const NAV_ITEMS = [
  {
    name: "Home",
    path: "/",
    id: "home"
  },
  {
    name: "Bisnis Group",
    path: "/business-group",
    id: "business-group",
    dropdown: [
      {
        name: "TSA IT & TECHNOLOGY",
        path: "/business-group#tsa-tech"
      },
      {
        name: "ENCHANTÉE KITCHEN",
        path: "/business-group#enchante"
      },
      {
        name: "DNA STUDIO",
        path: "/business-group#dna-studio"
      },
      {
        name: "GWI",
        path: "/business-group#gwi"
      },
      {
        name: "GOVADV",
        path: "/business-group#govadv"
      }
    ]
  },
  {
    name: "Event",
    path: "/events",
    id: "event"
  },
  {
    name: "Activities",
    path: "/activities",
    id: "activities",
    dropdown: [
      {
        name: "News",
        path: "/news"
      },
      {
        name: "Internship",
        path: "/internship"
      }
    ]
  },
  {
    name: "Kontak",
    path: "/contact",
    id: "contact"
  }
];

const getPathDefaultTheme = (path) => {
  const normalized = (path || "/").toLowerCase().replace(/\/+$/, "") || "/";
  if (normalized === "/" || normalized === "/home") {
    if (typeof window !== "undefined" && window.scrollY >= window.innerHeight - 76) {
      return "light";
    }
    return "dark";
  }
  return "light";
};

export default function Navbar({ currentPath = "/", navigateTo }) {
  const [scrolled, setScrolled] = useState(false);
  const [navVisible, setNavVisible] = useState(true);
  const [navTheme, setNavTheme] = useState(() => getPathDefaultTheme(currentPath));
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileExpandedGroup, setMobileExpandedGroup] = useState(null);

  const hoverTimeoutRef = useRef(null);
  const navContainerRef = useRef(null);
  const lastScrollYRef = useRef(0);

  // Close mobile menu and immediately resume smooth scrolling
  const closeMobileMenuAndResumeScroll = useCallback(() => {
    setMobileMenuOpen(false);
    document.body.style.overflow = "";
    if (window.__lenis) {
      window.__lenis.start();
    }
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => {
      const next = !prev;
      if (next) {
        document.body.style.overflow = "hidden";
        if (window.__lenis) {
          window.__lenis.stop();
        }
      } else {
        document.body.style.overflow = "";
        if (window.__lenis) {
          window.__lenis.start();
        }
      }
      return next;
    });
  };

  // Dynamic Theme Detection: checks the section or element directly beneath navbar vertical center
  const evaluateNavbarTheme = useCallback(() => {
    if (mobileMenuOpen) return;
    const scrollY = window.scrollY || window.pageYOffset || 0;
    setScrolled(scrollY > 20);

    const normalizedCurrent = currentPath.toLowerCase().replace(/\/+$/, "") || "/";
    const isHome = normalizedCurrent === "/" || normalizedCurrent === "/home";

    // 1. If at top of Home (inside fullscreen hero video/photo), always dark
    if (isHome && scrollY < window.innerHeight - 76) {
      setNavTheme("dark");
      return;
    }

    const navbarCheckY = 42;
    let detectedTheme = null;

    // 2. Query all elements with explicit data-nav-theme or data-theme
    try {
      const themedElements = document.querySelectorAll("[data-nav-theme], [data-theme]");
      let smallestArea = Infinity;
      for (const elem of themedElements) {
        const rect = elem.getBoundingClientRect();
        if (rect.top <= navbarCheckY && rect.bottom > navbarCheckY) {
          const area = rect.height * rect.width;
          if (area < smallestArea) {
            smallestArea = area;
            detectedTheme = elem.getAttribute("data-nav-theme") || elem.getAttribute("data-theme");
          }
        }
      }
    } catch {
      // ignore
    }

    // 3. Fallback using elementsFromPoint
    if (!detectedTheme) {
      try {
        const elements = document.elementsFromPoint(window.innerWidth / 2, navbarCheckY);
        for (const el of elements) {
          if (!el) continue;
          if (el.closest("header") || el.closest("#splash-screen") || el.closest("[data-modal]")) {
            continue;
          }
          const closestThemed = el.closest("[data-nav-theme], [data-theme]");
          if (closestThemed) {
            detectedTheme = closestThemed.getAttribute("data-nav-theme") || closestThemed.getAttribute("data-theme");
            break;
          }

          let cur = el;
          while (cur && cur !== document.body && cur !== document.documentElement) {
            const bg = window.getComputedStyle(cur).backgroundColor;
            if (bg && bg !== "transparent" && bg !== "rgba(0, 0, 0, 0)") {
              const rgb = bg.match(/\d+/g);
              if (rgb && rgb.length >= 3) {
                const [r, g, b] = rgb.map(Number);
                const lum = 0.299 * r + 0.587 * g + 0.114 * b;
                detectedTheme = lum > 140 ? "light" : "dark";
                break;
              }
            }
            cur = cur.parentElement;
          }
          if (detectedTheme) break;
        }
      } catch {
        // ignore
      }
    }

    // 4. Default fallback: light for content sections, dark only in top hero
    if (!detectedTheme) {
      detectedTheme = isHome && scrollY < window.innerHeight - 76 ? "dark" : "light";
    }

    setNavTheme(detectedTheme);
  }, [currentPath, mobileMenuOpen]);

  // Track scroll direction and route changes to evaluate theme & auto-hide navbar
  useEffect(() => {
    setNavVisible(true);
    lastScrollYRef.current = window.scrollY || 0;
    evaluateNavbarTheme();

    const handleScroll = () => {
      evaluateNavbarTheme();

      if (mobileMenuOpen) {
        setNavVisible(true);
        return;
      }

      const currentScrollY = window.scrollY || window.pageYOffset || 0;

      // Selalu tampil jika di bagian atas halaman (<= 80px)
      if (currentScrollY <= 80) {
        setNavVisible(true);
        lastScrollYRef.current = currentScrollY;
        return;
      }

      const diff = currentScrollY - lastScrollYRef.current;
      const threshold = 10; // Abaikan scroll mikro agar tidak flicker

      if (Math.abs(diff) > threshold) {
        if (diff > 0) {
          // Scroll ke bawah: sembunyikan navbar ke atas
          setNavVisible(false);
          setActiveDropdown(null);
        } else {
          // Scroll ke atas: munculkan kembali navbar
          setNavVisible(true);
        }
        lastScrollYRef.current = currentScrollY;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    const timeoutId = setTimeout(evaluateNavbarTheme, 60);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      clearTimeout(timeoutId);
    };
  }, [evaluateNavbarTheme, mobileMenuOpen]);

  // Automatically close mobile menu when screen is resized to desktop width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && mobileMenuOpen) {
        closeMobileMenuAndResumeScroll();
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [mobileMenuOpen, closeMobileMenuAndResumeScroll]);

  // Keyboard accessibility: close dropdown and mobile menu on Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setActiveDropdown(null);
        closeMobileMenuAndResumeScroll();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [closeMobileMenuAndResumeScroll]);

  // Click outside to close desktop dropdown
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navContainerRef.current && !navContainerRef.current.contains(e.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Check if a nav item matches the current page route
  const isItemActive = (item) => {
    const normalized = currentPath.toLowerCase().replace(/\/+$/, "") || "/";
    if (item.id === "home") {
      return normalized === "/" || normalized === "/home";
    }
    if (item.id === "business-group") {
      return (
        normalized === "/business-group" ||
        normalized === "/brands" ||
        normalized === "/technology" ||
        normalized === "/tsa-tech" ||
        normalized === "/it-technology" ||
        normalized === "/enchante" ||
        normalized === "/enchante-protocol" ||
        normalized === "/gwi" ||
        normalized === "/govadv" ||
        normalized === "/government-advisory"
      );
    }
    if (item.id === "event") {
      return (
        normalized === "/event" ||
        normalized === "/events" ||
        normalized.startsWith("/events/")
      );
    }
    if (item.id === "activities") {
      return (
        normalized === "/activities" ||
        normalized.startsWith("/activities/") ||
        normalized === "/news" ||
        normalized === "/articles" ||
        normalized === "/internship" ||
        normalized === "/careers"
      );
    }
    if (item.id === "contact") {
      return normalized === "/contact";
    }
    return normalized === item.path;
  };

  // Restrained hover handlers with brief grace period
  const handleMouseEnter = (itemId) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    setActiveDropdown(itemId);
  };

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 180);
  };

  // Main item click: if item has dropdown, clicking toggles the dropdown on/off. If no dropdown, navigates immediately.
  const handleMainItemClick = (item, e) => {
    if (item.dropdown) {
      if (e) {
        e.preventDefault();
        e.stopPropagation();
      }
      setActiveDropdown((prev) => (prev === item.id ? null : item.id));
    } else {
      setActiveDropdown(null);
      closeMobileMenuAndResumeScroll();
      if (navigateTo) {
        navigateTo(item.path);
      }
    }
  };

  // Sub-item click from dropdown with safe anchor scroll and retry mechanism
  const handleSubItemClick = (item, sub, e) => {
    if (e) {
      e.stopPropagation();
    }
    setActiveDropdown(null);
    closeMobileMenuAndResumeScroll();

    const [targetPath, hash] = sub.path.split("#");
    const targetHash = hash || sub.hash;

    const normalizedCurrent = currentPath.toLowerCase().replace(/\/+$/, "") || "/";
    const normalizedTarget = (targetPath || "/").toLowerCase().replace(/\/+$/, "") || "/";

    if (normalizedCurrent === normalizedTarget) {
      if (targetHash) {
        const scrollToTarget = (retries = 5) => {
          const el = document.getElementById(targetHash);
          if (el) {
            if (window.__lenis) {
              window.__lenis.scrollTo(el, { offset: -74, duration: 1.0 });
            } else {
              el.scrollIntoView({ behavior: "smooth" });
            }
            if (window.history.pushState) {
              window.history.pushState(null, "", normalizedTarget + "#" + targetHash);
            }
          } else if (retries > 0) {
            setTimeout(() => scrollToTarget(retries - 1), 60);
          }
        };
        scrollToTarget();
      } else {
        if (window.__lenis) {
          window.__lenis.scrollTo(0, { offset: 0, duration: 1.0 });
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }
    } else {
      if (navigateTo) {
        navigateTo(normalizedTarget);
        if (targetHash) {
          const attemptScroll = (retries = 10) => {
            const el = document.getElementById(targetHash);
            if (el) {
              if (window.__lenis) {
                window.__lenis.scrollTo(el, { offset: -74, duration: 1.0 });
              } else {
                el.scrollIntoView({ behavior: "smooth" });
              }
              if (window.history.pushState) {
                window.history.pushState(null, "", normalizedTarget + "#" + targetHash);
              }
            } else if (retries > 0) {
              setTimeout(() => attemptScroll(retries - 1), 80);
            }
          };
          setTimeout(() => attemptScroll(), 120);
        }
      }
    }
  };

  const handleLogoClick = () => {
    setActiveDropdown(null);
    closeMobileMenuAndResumeScroll();
    if (navigateTo) {
      navigateTo("/");
    }
  };

  const isLight = navTheme === "light";

  return (
    <header
      ref={navContainerRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out ${
        navVisible || mobileMenuOpen ? "translate-y-0" : "-translate-y-full pointer-events-none"
      } ${
        isLight
          ? scrolled || mobileMenuOpen
            ? "bg-white/98 backdrop-blur-md border-b border-[#071731]/10 shadow-[0_2px_12px_rgba(7,23,49,0.04)]"
            : "bg-[#FAF9F6]/95 backdrop-blur-xs border-b border-[#071731]/10"
          : scrolled || mobileMenuOpen
            ? "bg-[#071731]/98 backdrop-blur-md border-b border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.35)]"
            : "bg-transparent border-b border-white/10"
      }`}
    >
      {/* Top Navbar Bar (76px sm:80px) */}
      <div className="h-[76px] sm:h-[80px] flex items-center">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-8 w-full flex items-center justify-between relative">

          {/* Left: TSA Corporate Brand Emblem & Typography */}
          <button
            onClick={handleLogoClick}
            className="flex items-center gap-3 cursor-pointer group text-left focus:outline-none focus-visible:ring-1 focus-visible:ring-[#C8102E] rounded py-1 shrink-0"
            aria-label="PT Tricatha Sempiternal Asia Homepage"
          >
            {/* Logo Emblem Box */}
            <div
              className={`w-9 h-9 rounded-[3px] flex items-center justify-center shrink-0 transition-colors duration-200 p-0.5 ${
                isLight
                  ? "bg-[#071731] border border-[#071731]"
                  : "bg-white border border-white/20"
              }`}
            >
              <img src={logoTSA} alt="TSA Official Emblem" className="w-full h-full object-cover rounded-[2px]" />
            </div>

            <div className="flex flex-col">
              <span
                className={`font-heading font-bold text-sm tracking-tight leading-none transition-colors duration-200 ${
                  isLight ? "text-[#071731]" : "text-white"
                }`}
              >
                TRICHATA SEMPITERNAL ASIA
              </span>
              <span
                className={`font-mono text-[9px] tracking-widest uppercase font-medium mt-1 transition-colors duration-200 ${
                  isLight ? "text-slate-500" : "text-slate-400"
                }`}
              >
                CORPORATE EVENT ORGANIZER · JAKARTA
              </span>
            </div>
          </button>

          {/* Right: Desktop Corporate Navigation (Clean & Uncluttered, No Unnecessary CTA) */}
          <nav
            className="hidden lg:flex items-center gap-7 xl:gap-9 text-[13px] font-medium tracking-[0.01em]"
            aria-label="Primary Corporate Navigation"
          >
            {NAV_ITEMS.map((item) => {
              const isActive = isItemActive(item);
              const hasDropdown = Boolean(item.dropdown);
              const isDropdownOpen = activeDropdown === item.id;

              return (
                <div
                  key={item.id}
                  className="relative py-6 flex items-center group"
                  onMouseEnter={() => (hasDropdown ? handleMouseEnter(item.id) : handleMouseEnter(null))}
                  onMouseLeave={handleMouseLeave}
                >
                  {/* Main Nav Button */}
                  <button
                    type="button"
                    onClick={(e) => handleMainItemClick(item, e)}
                    aria-current={isActive ? "page" : undefined}
                    aria-expanded={hasDropdown ? isDropdownOpen : undefined}
                    aria-haspopup={hasDropdown ? "true" : undefined}
                    className={`inline-flex items-center gap-1.5 py-1 transition-colors duration-200 cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-[#C8102E] relative ${
                      isLight
                        ? isActive
                          ? "text-[#071731] font-semibold"
                          : "text-slate-700 hover:text-[#071731]"
                        : isActive
                          ? "text-white font-semibold"
                          : "text-slate-300 hover:text-white"
                    }`}
                  >
                    <span>{item.name}</span>

                    {hasDropdown && (
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          isDropdownOpen
                            ? "rotate-180 text-[#C8102E]"
                            : isLight
                              ? "text-slate-400 group-hover:text-[#071731]"
                              : "text-slate-400 group-hover:text-white"
                        }`}
                      />
                    )}

                    {/* Active Indicator: Crisp Controlled Red Line */}
                    {isActive && (
                      <motion.span
                        layoutId="navbar-active-line"
                        className="absolute -bottom-2 left-0 right-0 h-[2px] bg-[#C8102E]"
                        transition={{ type: "spring", stiffness: 400, damping: 35 }}
                      />
                    )}
                  </button>

                  {/* Corporate Dropdown Panel (Directly Under Nav Item) */}
                  {hasDropdown && (
                    <AnimatePresence>
                      {isDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 4 }}
                          transition={{ duration: 0.16, ease: [0.16, 1, 0.3, 1] }}
                          className={`absolute top-[calc(100%-8px)] left-0 min-w-[240px] rounded-[3px] border p-1.5 z-50 text-left transition-colors duration-150 pointer-events-auto ${
                            isLight
                              ? "bg-white border-[#071731]/10 text-[#071731] shadow-[0_12px_28px_rgba(7,23,49,0.09)]"
                              : "bg-[#071731] border-white/15 text-white shadow-[0_16px_36px_rgba(0,0,0,0.55)]"
                          }`}
                          role="menu"
                          aria-label={`${item.name} submenu`}
                        >
                          <div className="space-y-0.5">
                            {item.dropdown.map((sub, idx) => (
                              <button
                                key={idx}
                                type="button"
                                role="menuitem"
                                onClick={(e) => handleSubItemClick(item, sub, e)}
                                className={`w-full text-left px-3.5 py-2.5 rounded-[2px] transition-colors duration-150 cursor-pointer flex items-center justify-between text-[12.5px] font-medium tracking-[0.02em] ${
                                  isLight
                                    ? "text-[#071731] hover:text-[#C8102E] hover:bg-slate-50"
                                    : "text-slate-200 hover:text-white hover:bg-white/10"
                                }`}
                              >
                                <span>{sub.name}</span>
                              </button>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center lg:hidden">
            <button
              type="button"
              onClick={toggleMobileMenu}
              className={`p-2.5 min-w-[48px] min-h-[48px] flex items-center justify-center rounded transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#C8102E] cursor-pointer touch-manipulation ${
                isLight
                  ? "text-[#071731] hover:bg-slate-100 active:bg-slate-200"
                  : "text-slate-200 hover:text-white hover:bg-white/10 active:bg-white/15"
              }`}
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className={`w-6 h-6 ${isLight ? "text-[#071731]" : "text-white"}`} />
              ) : (
                <Menu className={`w-6 h-6 ${isLight ? "text-[#071731]" : "text-white"}`} />
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Navigation Drawer with Accordion Support */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop Dimmer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              onClick={closeMobileMenuAndResumeScroll}
              className="lg:hidden fixed inset-0 top-[76px] sm:top-[80px] bg-black/60 backdrop-blur-xs z-40"
              aria-hidden="true"
            />

            {/* Mobile Drawer Content */}
            <motion.div
              data-lenis-prevent
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className={`lg:hidden relative z-50 border-t max-h-[calc(100vh-76px)] max-h-[calc(100dvh-76px)] sm:max-h-[calc(100vh-80px)] sm:max-h-[calc(100dvh-80px)] overflow-y-auto overscroll-contain shadow-2xl transition-colors duration-200 ${
                isLight
                  ? "bg-white border-slate-200 text-[#071731]"
                  : "bg-[#071731] border-white/10 text-white"
              }`}
            >
              <div className="max-w-[1520px] mx-auto px-4 sm:px-8 py-5 space-y-2">
                <ul className="space-y-1 text-sm font-medium" role="menu">
                  {NAV_ITEMS.map((item) => {
                    const isActive = isItemActive(item);
                    const hasDropdown = Boolean(item.dropdown);
                    const isExpanded = mobileExpandedGroup === item.id;

                    return (
                      <li
                        key={item.id}
                        role="none"
                        className={`border-b pb-1 ${isLight ? "border-slate-100" : "border-white/5"}`}
                      >
                        {hasDropdown ? (
                          <button
                            type="button"
                            onClick={() => setMobileExpandedGroup(isExpanded ? null : item.id)}
                            aria-expanded={isExpanded}
                            className={`w-full text-left py-3 px-3 rounded-[3px] flex items-center justify-between transition-colors touch-manipulation cursor-pointer min-h-[48px] ${
                              isActive
                                ? isLight
                                  ? "bg-slate-100 text-[#071731] font-semibold border-l-2 border-[#C8102E]"
                                  : "bg-[#0B1E3F] text-white font-semibold border-l-2 border-[#C8102E]"
                                : isLight
                                  ? "text-slate-700 hover:text-[#071731] hover:bg-slate-50"
                                  : "text-slate-300 hover:text-white hover:bg-white/5"
                            }`}
                          >
                            <span className="font-heading text-[15px]">{item.name}</span>
                            <ChevronDown
                              className={`w-4 h-4 transition-transform duration-200 ${
                                isExpanded ? "rotate-180 text-[#C8102E]" : "text-slate-400"
                              }`}
                            />
                          </button>
                        ) : (
                          <button
                            type="button"
                            role="menuitem"
                            onClick={() => handleMainItemClick(item)}
                            aria-current={isActive ? "page" : undefined}
                            className={`w-full text-left py-3 px-3 rounded-[3px] flex items-center justify-between transition-colors touch-manipulation cursor-pointer min-h-[48px] ${
                              isActive
                                ? isLight
                                  ? "bg-slate-100 text-[#071731] font-semibold border-l-2 border-[#C8102E]"
                                  : "bg-[#0B1E3F] text-white font-semibold border-l-2 border-[#C8102E]"
                                : isLight
                                  ? "text-slate-700 hover:text-[#071731] hover:bg-slate-50"
                                  : "text-slate-300 hover:text-white hover:bg-white/5"
                            }`}
                          >
                            <span className="font-heading text-[15px]">{item.name}</span>
                            {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#C8102E]" />}
                          </button>
                        )}

                        {/* Accordion Submenu Items */}
                        {hasDropdown && isExpanded && (
                          <div
                            className={`pl-3 pr-2 py-1 space-y-0.5 mt-1 mb-2 rounded-[2px] border-l-2 ${
                              isLight
                                ? "bg-slate-50 border-slate-300"
                                : "bg-[#0B1E3F]/80 border-slate-700"
                            }`}
                          >
                            {item.dropdown.map((sub, idx) => (
                              <button
                                key={idx}
                                type="button"
                                onClick={(e) => handleSubItemClick(item, sub, e)}
                                className={`w-full text-left py-2.5 px-3 min-h-[44px] flex items-center justify-between rounded-[2px] transition-colors touch-manipulation cursor-pointer ${
                                  isLight
                                    ? "text-slate-700 hover:text-[#071731] hover:bg-white"
                                    : "text-slate-200 hover:text-white hover:bg-white/5"
                                }`}
                              >
                                <span className="font-medium text-xs sm:text-sm">{sub.name}</span>
                              </button>
                            ))}
                          </div>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
