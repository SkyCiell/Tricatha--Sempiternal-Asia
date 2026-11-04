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
  let gridLayoutClass = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:auto-rows-[300px]';
  if (items.length === 2) {
    gridLayoutClass = 'grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:auto-rows-[340px] max-w-5xl mx-auto';
  } else if (items.length === 1) {
    gridLayoutClass = 'grid grid-cols-1 gap-6 sm:gap-8 lg:auto-rows-[400px] max-w-3xl mx-auto';
  }

  return (
    <div className={`w-full ${className}`}>
      {/* 
        Art-Directed Editorial Event Grid:
        - Asymmetric Bento geometry: top & bottom edges 100% flush
        - Pure photography without decorative badge clutter or floating glass boxes
        - Seamless typography integrated directly onto the composition
        - Direct navigation to full record on click
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
              className={`group relative flex flex-col justify-end w-full bg-[#071731] rounded-lg overflow-hidden cursor-pointer select-none border border-[#071731]/10 hover:border-[#071731]/40 shadow-xs hover:shadow-xl transition-all duration-500 ${cardClasses}`}
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
              {/* Full-bleed Photo with Smooth Natural Scale */}
              <img
                src={item.img}
                alt={item.title}
                loading={index < 2 ? "eager" : "lazy"}
                decoding="async"
                onError={(e) => {
                  if (item.fallbackImg && e.currentTarget.src !== item.fallbackImg) {
                    e.currentTarget.src = item.fallbackImg;
                  }
                }}
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-104 pointer-events-none"
              />

              {/* Directional Bottom Gradient for Typography Contrast */}
              <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />

              {/* Integrated Editorial Typography: Category, Title, Venue */}
              <div className="relative z-10 p-5 sm:p-6 text-left pointer-events-none space-y-1">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-300 font-medium">
                  <span>{item.category || 'MICE'}</span>
                  {item.year && <span>· {item.year}</span>}
                </div>

                <h3 className="font-heading font-bold text-white text-lg sm:text-xl lg:text-2xl leading-snug tracking-tight">
                  {item.title}
                </h3>

                {venueName && (
                  <p className="text-xs text-slate-300 font-sans line-clamp-1 pt-0.5">
                    {venueName}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
