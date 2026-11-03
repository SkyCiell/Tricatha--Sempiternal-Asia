import React from 'react';

export default function Masonry({
  items = [],
  onItemClick,
  onItemNavigate,
  className = ''
}) {
  const handleCardClick = (e, item) => {
    if (onItemNavigate) {
      onItemNavigate(item);
    } else if (onItemClick) {
      onItemClick(item);
    } else if (item.slug) {
      const targetUrl = `/events/${item.slug}`;
      if (typeof window !== 'undefined') {
        window.history.pushState(null, '', targetUrl);
        window.dispatchEvent(new PopStateEvent('popstate'));
      }
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
        - No black hover tint: Clean, natural photography with smooth zoom in / zoom out
        - Click directly navigates to event detail page and gallery
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
              className={`group relative flex flex-col w-full bg-slate-900 rounded-xl overflow-hidden cursor-pointer select-none border border-black/10 dark:border-white/10 hover:border-[#C8102E] shadow-sm hover:shadow-xl transition-all duration-300 ${cardClasses}`}
              onClick={(e) => handleCardClick(e, item)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleCardClick(e, item);
                }
              }}
              aria-label={`${item.title} — ${item.category || 'Event'} (${item.year || ''})`}
            >
              {/* 
                Clean Full-bleed Photo with Smooth Zoom In / Zoom Out on Hover:
                - No black hover veil or darkened filter (100% natural brightness and color)
                - Smooth scale-up on hover (zoom in) and returns on unhover (zoom out)
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
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108 pointer-events-none"
              />

              {/* Minimal category pill on top-left */}
              <div className="absolute top-3.5 left-3.5 z-10 pointer-events-none">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-white bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-sm border border-white/20 shadow-xs">
                  {item.category || 'MICE'}
                </span>
              </div>

              {/* 
                Hover Caption Overlay:
                - No black screen over the photo
                - Clean frosted card floating at the bottom on hover
                - Displays Event Title and Category badge ("Team Building BP TAPERA 2025" & "Team Building")
              */}
              <div className="absolute inset-x-0 bottom-0 z-20 p-3.5 sm:p-4 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 pointer-events-none">
                <div className="inline-flex flex-col gap-1 bg-black/80 backdrop-blur-md p-3.5 rounded-lg border border-white/15 max-w-full shadow-2xl">
                  {/* Category & Year */}
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#FF6B81]">
                      {item.category || 'Event'}
                    </span>
                    {item.year && (
                      <span className="text-[11px] font-mono text-white/75 font-medium">
                        • {item.year}
                      </span>
                    )}
                  </div>

                  {/* Event Title */}
                  <h3 className="font-heading font-bold text-white text-sm sm:text-base leading-snug line-clamp-2">
                    {item.title}
                  </h3>

                  {/* Venue / Location */}
                  {venueName && (
                    <p className="text-[11px] text-slate-300 font-sans line-clamp-1">
                      {venueName}
                    </p>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
