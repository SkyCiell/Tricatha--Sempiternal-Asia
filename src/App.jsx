import React, { useEffect, useState, useRef } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import TypographicBreaker from "./components/TypographicBreaker";
import Services from "./components/Services";
import SelectedWork from "./components/SelectedWork";
import Approach from "./components/Approach";
import ImpactNumbers from "./components/ImpactNumbers";
import CTASection from "./components/CTASection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [activeSection, setActiveSection] = useState("hero");
  const [preselectedService, setPreselectedService] = useState("");
  const lenisRef = useRef(null);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      setActiveSection(id);
      if (window.location.hash !== `#${id}`) {
        window.history.pushState(null, "", `#${id}`);
      }
      if (lenisRef.current) {
        lenisRef.current.scrollTo(el, {
          offset: -60,
          duration: 1.2,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
        });
      } else {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1.1,
      touchMultiplier: 1.5,
      autoRaf: true
    });

    lenisRef.current = lenis;

    const sections = ["hero", "about", "services", "work", "approach", "contact"];
    
    const handleScroll = () => {
      const scrollPos = window.scrollY + 250;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Synchronize initial route or direct URL access (hash / path)
    const handleUrlRoute = () => {
      const hash = window.location.hash.replace("#", "");
      const path = window.location.pathname.replace("/", "");
      const targetId = hash || path;

      if (targetId && sections.includes(targetId)) {
        setTimeout(() => {
          scrollToSection(targetId);
        }, 150);
      }
    };

    handleUrlRoute();

    const handlePopState = () => {
      const hash = window.location.hash.replace("#", "");
      const path = window.location.pathname.replace("/", "");
      const targetId = hash || path || "hero";
      if (sections.includes(targetId)) {
        scrollToSection(targetId);
      }
    };

    window.addEventListener("popstate", handlePopState);
    window.addEventListener("hashchange", handlePopState);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("popstate", handlePopState);
      window.removeEventListener("hashchange", handlePopState);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#071A2B] text-[#F4F6F2] selection:bg-[#155EEF] selection:text-white relative">
      {/* Top Blue-Green Accent Line */}
      <div className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#155EEF] via-[#42D3A5] to-[#155EEF] z-50 pointer-events-none" />

      {/* Navigation */}
      <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />

      {/* Experimental Future Society Storytelling Trajectory */}
      <main>
        {/* 1. Hero with ScrollExpand */}
        <Hero scrollToSection={scrollToSection} />

        {/* 2. Editorial About Intro (Off-White contrast) */}
        <About />

        {/* Section Breaker: PEOPLE. */}
        <TypographicBreaker word="PEOPLE." theme="blue" />

        {/* 3. Services (Interactive Typographic List) */}
        <Services
          scrollToSection={scrollToSection}
          onPreselectService={(title) => setPreselectedService(title)}
        />

        {/* Section Breaker: TECHNOLOGY. */}
        <TypographicBreaker word="TECHNOLOGY." theme="navy" />

        {/* 4. Selected Work featuring GSAP AccordionGallery */}
        <SelectedWork />

        {/* Section Breaker: CULTURE. */}
        <TypographicBreaker word="CULTURE." theme="green" />


        {/* 6. Approach Methodology (Sticky Scroll) */}
        <Approach />

        {/* Section Breaker: IMPACT. */}
        <TypographicBreaker word="IMPACT." theme="navy" />

        {/* 7. Statistics Oversized Typography */}
        <ImpactNumbers />

        {/* 8. CTA Closing Banner */}
        <CTASection scrollToSection={scrollToSection} />

        {/* 9. Contact */}
        <Contact preselectedService={preselectedService} />
      </main>

      {/* Footer */}
      <Footer scrollToSection={scrollToSection} />
    </div>
  );
}
