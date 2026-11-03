import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { HugeiconsIcon } from '@hugeicons/react';
import { ArrowLeft01Icon, ArrowRight01Icon, ArrowUpRight01Icon, Cancel01Icon } from '@hugeicons/core-free-icons';

export default function Masonry({
  items = [],
  onItemClick,
  onItemNavigate,
  className = ''
}) {
  const [openId, setOpenId] = useState(null);

  const openIndex = openId !== null ? items.findIndex(item => String(item.id || item.slug) === openId) : -1;
  const openItem = openIndex >= 0 ? items[openIndex] : null;

  const closeBox = () => setOpenId(null);

  const stepBox = (delta) => {
    if (!openItem || items.length <= 1) return;
    const next = (openIndex + delta + items.length) % items.length;
    setOpenId(String(items[next].id || items[next].slug));
  };

  useEffect(() => {
    if (!openItem) return;
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpenId(null);
      } else if (e.key === 'ArrowRight') {
        setOpenId((prev) => {
          const idx = items.findIndex((item) => String(item.id || item.slug) === prev);
          if (idx === -1) return prev;
          const next = (idx + 1 + items.length) % items.length;
          return String(items[next].id || items[next].slug);
        });
      } else if (e.key === 'ArrowLeft') {
        setOpenId((prev) => {
          const idx = items.findIndex((item) => String(item.id || item.slug) === prev);
          if (idx === -1) return prev;
          const next = (idx - 1 + items.length) % items.length;
          return String(items[next].id || items[next].slug);
        });
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [openItem, items]);

  const handleCardClick = (e, item, index) => {
    if (onItemClick) {
      onItemClick(item, index, e);
      if (e.defaultPrevented) return;
    }
    setOpenId(String(item.id || item.slug));
  };

  const handleDirectNavigate = (e, item) => {
    e.stopPropagation();
    if (onItemNavigate) {
      onItemNavigate(item);
    } else if (onItemClick) {
      onItemClick(item);
    } else if (item.url) {
      window.location.href = item.url;
    }
  };

  // Determine grid container classes based on item count for flush alignment
  let gridLayoutClass = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:auto-rows-[280px]';
  if (items.length === 2) {
    gridLayoutClass = 'grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:auto-rows-[320px] max-w-5xl mx-auto';
  } else if (items.length === 1) {
    gridLayoutClass = 'grid grid-cols-1 gap-5 sm:gap-6 lg:auto-rows-[380px] max-w-3xl mx-auto';
  }

  return (
    <div className={`w-full ${className}`}>
      {/* 
        Asymmetric Bento Grid:
        - "Abstrak nya semua": Varied card shapes (2x1 wide, 1x2 tall, 1x1 standard)
        - "Bagian atas dan bawah sama": Top and bottom edges are 100% flush, straight, and neat
        - No separate section below the photo: 100% full-bleed photography
        - "Hover dari gelap ke terang": Photo starts cinematic and dark, illuminates bright on hover
        - Title & category appear smoothly on hover ("pas hover ke card nya aja")
      */}
      <div className={gridLayoutClass}>
        {items.map((item, index) => {
          const id = String(item.id || item.slug || index);
          const venueName = (item.location || item.venue || '').split(',')[0];
          const spanType = item.bentoSpan || 'standard';

          // Asymmetric Bento sizing per item
          let cardClasses = 'col-span-1 row-span-1 min-h-[260px] lg:min-h-0';
          if (spanType === 'wide') {
            cardClasses = 'col-span-1 md:col-span-2 lg:col-span-2 lg:row-span-1 min-h-[260px] lg:min-h-0';
          } else if (spanType === 'tall') {
            cardClasses = 'col-span-1 lg:col-span-1 lg:row-span-2 min-h-[300px] lg:min-h-0';
          } else if (spanType === 'panoramic') {
            cardClasses = 'col-span-1 md:col-span-2 lg:col-span-3 lg:row-span-1 min-h-[260px] lg:min-h-0';
          }

          return (
            <div
              key={id}
              className={`group relative flex flex-col w-full bg-slate-950 rounded-xl overflow-hidden cursor-pointer select-none border border-black/10 dark:border-white/10 hover:border-[#C8102E] shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 ${cardClasses}`}
              onClick={(e) => handleCardClick(e, item, index)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleCardClick(e, item, index);
                }
              }}
              aria-label={`${item.title} — ${item.category || 'Event'} (${item.year || ''})`}
            >
              {/* 
                1. Full-bleed Photo with "Hover dari Gelap ke Terang":
                - Default: Moody, cinematic, darker (brightness-70 + atmospheric dark scrim)
                - Hover: Smoothly illuminates to 100% bright clarity, dark tint melts away, gentle scale zoom
              */}
              <img
                src={item.img}
                alt={item.title}
                loading="eager"
                decoding="async"
                onError={(e) => {
                  if (item.fallbackImg && e.currentTarget.src !== item.fallbackImg) {
                    e.currentTarget.src = item.fallbackImg;
                  }
                }}
                className="absolute inset-0 w-full h-full object-cover object-center transition-all duration-700 ease-out filter brightness-[0.70] contrast-[1.05] group-hover:brightness-100 group-hover:contrast-100 group-hover:scale-108 pointer-events-none"
              />

              {/* Atmospheric Dark Tint (dissolves smoothly on hover: from dark to bright) */}
              <div className="absolute inset-0 bg-[#071731]/40 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />

              {/* Minimal category pill on top-left (discreet indicator) */}
              <div className="absolute top-3.5 left-3.5 z-10 pointer-events-none transition-opacity duration-300">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-white/90 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-sm border border-white/15 group-hover:bg-[#C8102E] group-hover:border-[#C8102E] transition-colors duration-300">
                  {item.category || 'MICE'}
                </span>
              </div>

              {/* 
                2. Hover Caption Overlay ("kasih nama nya pas hover ke card nya aja"):
                - Hidden in default state (opacity-0, translate-y-3)
                - Slides up and fades in on hover over the card
                - Displays Event Title and Category badge ("Team Building BP TAPERA 2025" & "Team Building")
                - No separate white/grey section below the photo!
              */}
              <div className="absolute inset-0 z-20 flex flex-col justify-end p-5 sm:p-6 bg-gradient-to-t from-black/95 via-black/60 to-transparent opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400 ease-out pointer-events-none">
                <div className="space-y-1.5 text-left pointer-events-auto">
                  {/* Category & Year */}
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#FF6B81] bg-black/40 px-2 py-0.5 rounded-xs border border-white/10">
                      {item.category || 'Event'}
                    </span>
                    {item.year && (
                      <span className="text-xs font-mono text-white/80 font-medium">
                        • {item.year}
                      </span>
                    )}
                  </div>

                  {/* Event Title */}
                  <h3 className="font-heading font-bold text-white text-base sm:text-lg lg:text-xl leading-snug tracking-tight">
                    {item.title}
                  </h3>

                  {/* Venue / Location */}
                  {venueName && (
                    <p className="text-xs text-slate-300 font-sans line-clamp-1">
                      {venueName}
                    </p>
                  )}

                  {/* Action Link */}
                  <div
                    className="pt-2 inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-white hover:text-[#FF6B81] uppercase tracking-wider cursor-pointer"
                    onClick={(e) => handleDirectNavigate(e, item)}
                  >
                    <span>Explore Event Details</span>
                    <HugeiconsIcon icon={ArrowUpRight01Icon} size={14} strokeWidth={2.5} className="text-[#FF6B81]" />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* 
        3. Full-screen Interactive Lightbox:
        - Displays complete uncropped high-resolution photo
        - Previous / Next navigation controls
        - Direct button to navigate to the full event record
      */}
      {openItem &&
        createPortal(
          <div
            className="fixed inset-0 z-[1000] flex items-center justify-center p-4 sm:p-8"
            role="dialog"
            aria-modal="true"
            aria-label={openItem.title || 'Event Photo Preview'}
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-[#050F22]/95 backdrop-blur-md transition-opacity duration-300"
              onClick={closeBox}
            />

            {/* Lightbox Content Container */}
            <div className="relative z-10 max-w-5xl w-full max-h-[92vh] flex flex-col items-center justify-center">
              {/* Photo Frame */}
              <div className="relative w-full max-h-[75vh] flex items-center justify-center overflow-hidden rounded-lg shadow-2xl bg-black/40 border border-white/10">
                <img
                  src={openItem.img}
                  alt={openItem.title}
                  className="max-h-[75vh] w-auto max-w-full object-contain select-none"
                  onError={(e) => {
                    if (openItem.fallbackImg && e.currentTarget.src !== openItem.fallbackImg) {
                      e.currentTarget.src = openItem.fallbackImg;
                    }
                  }}
                />
              </div>

              {/* Caption & Navigation Controls */}
              <div className="mt-4 w-full flex flex-col sm:flex-row items-center justify-between gap-3 px-2 text-white">
                <div className="text-center sm:text-left">
                  <h4 className="font-heading text-sm sm:text-base font-bold text-white tracking-tight">
                    {openItem.title}
                  </h4>
                  <p className="text-xs text-slate-300 font-sans mt-0.5 flex items-center justify-center sm:justify-start gap-2">
                    <span className="font-mono text-[#FF6B81] uppercase font-semibold">
                      {openItem.category || 'MICE'}
                    </span>
                    {openItem.year && <span>• {openItem.year}</span>}
                    {(openItem.location || openItem.venue) && (
                      <span className="text-slate-400">| {(openItem.location || openItem.venue).split(',')[0]}</span>
                    )}
                  </p>
                </div>

                {/* Direct Action Link */}
                <button
                  type="button"
                  onClick={(e) => handleDirectNavigate(e, openItem)}
                  className="btn-editorial-red text-xs py-2 px-4.5 cursor-pointer inline-flex items-center gap-1.5 shadow-md shrink-0"
                >
                  <span>Explore Event Details</span>
                  <HugeiconsIcon icon={ArrowUpRight01Icon} size={14} strokeWidth={2.5} />
                </button>
              </div>

              {/* Close Button (Top Right) */}
              <button
                type="button"
                onClick={closeBox}
                className="absolute -top-12 right-0 sm:top-2 sm:right-2 grid h-10 w-10 cursor-pointer place-items-center rounded-full border border-white/20 bg-black/60 text-white shadow-lg transition-colors hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-white z-20"
                aria-label="Close Preview"
              >
                <HugeiconsIcon icon={Cancel01Icon} size={20} strokeWidth={2} />
              </button>

              {/* Previous Button */}
              {items.length > 1 && (
                <button
                  type="button"
                  onClick={() => stepBox(-1)}
                  className="fixed left-3 sm:left-6 top-1/2 -translate-y-1/2 grid h-11 w-11 cursor-pointer place-items-center rounded-full border border-white/20 bg-black/60 text-white shadow-xl transition-all hover:bg-white/20 hover:scale-105 z-20"
                  aria-label="Previous Image"
                >
                  <HugeiconsIcon icon={ArrowLeft01Icon} size={22} strokeWidth={2} />
                </button>
              )}

              {/* Next Button */}
              {items.length > 1 && (
                <button
                  type="button"
                  onClick={() => stepBox(1)}
                  className="fixed right-3 sm:right-6 top-1/2 -translate-y-1/2 grid h-11 w-11 cursor-pointer place-items-center rounded-full border border-white/20 bg-black/60 text-white shadow-xl transition-all hover:bg-white/20 hover:scale-105 z-20"
                  aria-label="Next Image"
                >
                  <HugeiconsIcon icon={ArrowRight01Icon} size={22} strokeWidth={2} />
                </button>
              )}
            </div>
          </div>,
          document.body
        )}
    </div>
  );
}
