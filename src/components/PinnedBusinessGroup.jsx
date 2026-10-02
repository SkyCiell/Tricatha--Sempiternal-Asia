import React, { useRef, useEffect, useState } from "react";
import { ArrowUpRight, ArrowRight, ShieldCheck, Megaphone, Video, Scale } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import protocolPavilion from "../assets/illustrations/protocol-pavilion.jpg";
import scenographyTruss from "../assets/illustrations/scenography-truss.jpg";
import broadcastUplink from "../assets/illustrations/broadcast-uplink.jpg";
import plenaryDraft from "../assets/illustrations/plenary-draft.jpg";

gsap.registerPlugin(ScrollTrigger);

export default function PinnedBusinessGroup({ navigateTo }) {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const [activePanel, setActivePanel] = useState(0);

  const panels = [
    {
      id: "enchante",
      num: "01",
      name: "Enchanté",
      subtitle: "Sovereign Protocol & Banqueting",
      category: "STATE & DIPLOMATIC BANQUETING",
      authority: "Head-of-State Diplomatic Accord Forums",
      spec: "VVIP Protocol Logistics & Sovereign Seating",
      desc: "Bespoke high-society protocol catering, state precedence banquet service, and bilateral dinner orchestrations for head-of-state diplomatic gatherings, multilateral ministerial forums, and royal delegacy summits across Southeast Asia.",
      image: protocolPavilion,
      location: "Jakarta · Bali · Regional Consulates",
      icon: ShieldCheck,
      path: "/enchante"
    },
    {
      id: "gwi",
      num: "02",
      name: "Gema Waskita Interaktifa",
      subtitle: "Mass Civic Assemblies & Spectacles",
      category: "STADIUM-SCALE CIVIC ACTIVATION",
      authority: "Ministry of Culture & Civic Heritage",
      spec: "45,000+ Synchronous Stadium Attendees",
      desc: "Monumental public engagement celebrations uniting civic patrons, cultural ministries, and over 45,000 attendees through interactive projection mapping, kinetic stadium architecture, and synchronized multi-stage choreography.",
      image: scenographyTruss,
      location: "Gelora Bung Karno Arena · Jakarta",
      icon: Megaphone,
      path: "/business-group"
    },
    {
      id: "dna-studio",
      num: "03",
      name: "DNA Studio",
      subtitle: "4K Master Control & Telepresence",
      category: "BROADCAST TRANSMISSION COMMAND",
      authority: "State Broadcast & Enterprise Conclaves",
      spec: "Native 4K HDR · Zero-Latency Uplink",
      desc: "Dedicated 4K master control soundstages, multi-camera live telecast switching, low-latency satellite links, and virtual telepresence conduits transmitting sovereign summits to synchronous global delegations.",
      image: broadcastUplink,
      location: "The City Tower 12F · Broadcast Command",
      icon: Video,
      path: "/business-group"
    },
    {
      id: "goadv",
      num: "04",
      name: "GOADV",
      subtitle: "Inter-Ministerial Conclaves & Advocacy",
      category: "REGULATORY & PUBLIC AFFAIRS",
      authority: "14+ National Ministries & SOE Boards",
      spec: "State Digital Sovereignty Frameworks",
      desc: "High-level state conventions, public affairs strategic roadmaps, regulatory alignment symposiums, and SOE executive leadership summits connecting sovereign regulators with industry pioneers.",
      image: plenaryDraft,
      location: "Jakarta Convention Center (JCC) Senayan",
      icon: Scale,
      path: "/business-group"
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // DESKTOP: Full Horizontal Slide Track across 400vw
      mm.add("(min-width: 1024px)", () => {
        const totalPanels = panels.length;

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            pin: true,
            pinSpacing: true,
            anticipatePin: 1,
            start: "top top",
            end: `+=${window.innerWidth * 2.8}`,
            scrub: 0.8,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              const progress = self.progress;
              const panelIndex = Math.min(
                Math.floor(progress * totalPanels),
                totalPanels - 1
              );
              setActivePanel(panelIndex);
            }
          }
        });

        // 1. Horizontal track movement: Moves LEFT from 0 to -300vw
        tl.to(trackRef.current, {
          xPercent: -((totalPanels - 1) / totalPanels) * 100,
          ease: "none",
          duration: 10
        }, 0);

        // 2. Multi-directional counter-parallax on media within each panel
        const panelImages = containerRef.current?.querySelectorAll(".panel-media-inner");
        panelImages?.forEach((img) => {
          tl.fromTo(
            img,
            { xPercent: 12, scale: 1.06 },
            { xPercent: -12, scale: 1.0, ease: "none", duration: 10 },
            0
          );
        });

        // 3. Staggered typography parallax
        const panelTexts = containerRef.current?.querySelectorAll(".panel-text-block");
        panelTexts?.forEach((txt) => {
          tl.fromTo(
            txt,
            { xPercent: -6 },
            { xPercent: 6, ease: "none", duration: 10 },
            0
          );
        });
      });

      // MOBILE & TABLET (< 1024px)
      mm.add("(max-width: 1023px)", () => {
        const totalPanels = panels.length;
        gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            pin: true,
            pinSpacing: true,
            anticipatePin: 1,
            start: "top top",
            end: `+=${window.innerHeight * 2.4}`,
            scrub: 0.8,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              const progress = self.progress;
              const panelIndex = Math.min(
                Math.floor(progress * totalPanels),
                totalPanels - 1
              );
              setActivePanel(panelIndex);
            }
          }
        }).to(trackRef.current, {
          xPercent: -((totalPanels - 1) / totalPanels) * 100,
          ease: "none",
          duration: 10
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, [panels.length]);

  const handleInspect = (path) => {
    if (navigateTo) {
      navigateTo(path || "/business-group");
    }
  };

  return (
    <section
      ref={containerRef}
      id="business-group"
      className="relative w-screen h-screen bg-[#071731] text-[#F1F5F9] overflow-hidden select-none border-b border-white/10"
    >
      {/* Fixed Top Tracker Bar (Pinned with the section) */}
      <div className="absolute top-0 left-0 right-0 z-30 pt-20 px-4 sm:px-10 pb-4 border-b border-white/10 bg-[#071731]/90 backdrop-blur-md">
        <div className="max-w-[1520px] mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs">
          <div className="flex items-center gap-3">
            <span className="text-[#C8102E] font-semibold tracking-wider">
              02 / THE BUSINESS GROUP
            </span>
            <span className="text-white/30">•</span>
            <span className="text-white">
              HORIZONTAL SCROLL · 4 SPECIALIZED PRACTICES
            </span>
          </div>

          {/* Stepper Active Tabs */}
          <div className="flex items-center gap-4 sm:gap-6 text-[11px]">
            {panels.map((p, idx) => (
              <span
                key={p.id}
                className={`transition-all duration-300 font-medium ${
                  activePanel === idx
                    ? "text-white font-bold scale-105"
                    : "text-slate-500 opacity-60"
                }`}
              >
                {p.num} {p.name.split(" ")[0].toUpperCase()}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Horizontal Strip: 4 Fullscreen Panels (w-[400vw] h-full) */}
      <div
        ref={trackRef}
        className="flex flex-nowrap w-[400vw] h-full will-change-transform"
      >
        {panels.map((panel, idx) => {
          const Icon = panel.icon;

          return (
            <div
              key={panel.id}
              className="w-screen h-screen flex-shrink-0 flex items-center justify-center px-4 sm:px-12 lg:px-20 pt-28 pb-12 relative"
            >
              <div className="w-full max-w-[1520px] grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
                
                {/* Left Column: Authoritative Editorial Typography & Scope */}
                <div className="panel-text-block lg:col-span-6 space-y-5 will-change-transform">
                  <div className="flex items-center gap-3 font-mono text-xs text-[#C8102E] uppercase tracking-wider font-semibold">
                    <Icon className="w-4 h-4" />
                    <span>PRACTICE {panel.num} · {panel.category}</span>
                  </div>

                  <h2 className="font-heading text-4xl sm:text-6xl lg:text-[64px] font-bold text-white tracking-tight leading-[1.02]">
                    {panel.name} <br />
                    <span className="font-editorial italic font-normal text-slate-300">
                      {panel.subtitle}.
                    </span>
                  </h2>

                  <p className="font-sans text-sm sm:text-base lg:text-[17px] text-slate-300 leading-relaxed font-normal max-w-xl">
                    {panel.desc}
                  </p>

                  <div className="pt-2 grid grid-cols-2 gap-4 font-mono text-xs border-t border-white/10 max-w-md">
                    <div>
                      <div className="text-slate-400 text-[11px]">MANDATE</div>
                      <div className="text-white font-medium">{panel.authority}</div>
                    </div>
                    <div>
                      <div className="text-slate-400 text-[11px]">STANDARDS</div>
                      <div className="text-white font-medium">{panel.spec}</div>
                    </div>
                  </div>

                  <div className="pt-3 flex flex-wrap items-center gap-4 font-mono text-xs">
                    <button
                      onClick={() => handleInspect(panel.path)}
                      className="btn-editorial-red text-xs py-3 px-6 cursor-pointer inline-flex items-center gap-2"
                    >
                      <span>Inspect {panel.name.split(" ")[0]} Practice</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>

                    {idx === panels.length - 1 && (
                      <button
                        onClick={() => handleInspect("/business-group")}
                        className="text-slate-300 hover:text-white transition-colors cursor-pointer py-2.5 px-4 border border-white/15 rounded-sm inline-flex items-center gap-2"
                      >
                        <span>Explore Complete 4-Practice Dossier</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                </div>

                {/* Right Column: Commanding Fullscreen Aspect Visual Canvas */}
                <div className="lg:col-span-6 relative aspect-[16/10] max-h-[560px] w-full rounded overflow-hidden border border-white/15 bg-[#050F22] shadow-[0_24px_64px_rgba(0,0,0,0.7)]">
                  <div className="w-full h-full relative overflow-hidden">
                    <img
                      src={panel.image}
                      alt={panel.name}
                      className="panel-media-inner w-full h-full object-cover object-center will-change-transform"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#071731] via-transparent to-transparent opacity-65 pointer-events-none" />

                    <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between font-mono text-xs text-slate-300 pointer-events-none">
                      <span className="text-white font-semibold">{panel.location}</span>
                      <span className="text-slate-400">PRACTICE {panel.num} OF 04</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Watermark Category Accent in background */}
              <div className="absolute right-8 bottom-6 font-mono text-[10px] text-white/10 uppercase tracking-[0.3em] pointer-events-none hidden sm:block">
                PT TRICATHA SEMPITERNAL ASIA · INTEGRATED VALUE CHAIN
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Pinned Coordinates Strip */}
      <div className="absolute bottom-0 left-0 right-0 z-30 px-4 sm:px-10 py-3 border-t border-white/10 bg-[#071731]/90 backdrop-blur-md">
        <div className="max-w-[1520px] mx-auto flex items-center justify-between font-mono text-xs text-slate-400">
          <div>PARENT HOLDING: PT TRICATHA SEMPITERNAL ASIA</div>
          <div className="hidden sm:block">SCROLL CONTROLS HORIZONTAL PROGRESSION (LEFT ← → RIGHT)</div>
          <div>SUDIRMAN PARK · CENTRAL JAKARTA</div>
        </div>
      </div>
    </section>
  );
}
