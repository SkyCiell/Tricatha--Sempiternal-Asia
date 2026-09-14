import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { gsap } from "gsap";
import "./Masonry.css";

const useMedia = (queries, values, defaultValue) => {
  const get = () => {
    if (typeof window === "undefined") return defaultValue;
    return values[queries.findIndex((q) => window.matchMedia(q).matches)] ?? defaultValue;
  };

  const [value, setValue] = useState(get);

  useEffect(() => {
    const handler = () => setValue(get);
    const mqlList = queries.map((q) => window.matchMedia(q));
    mqlList.forEach((mql) => mql.addEventListener("change", handler));
    return () => mqlList.forEach((mql) => mql.removeEventListener("change", handler));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [queries]);

  return value;
};

const useMeasure = () => {
  const ref = useRef(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    if (!ref.current) return;
    const ro = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      setSize({ width, height });
    });
    ro.observe(ref.current);
    return () => ro.disconnect();
  }, []);

  return [ref, size];
};

const preloadImages = async (urls) => {
  await Promise.all(
    urls.map(
      (src) =>
        new Promise((resolve) => {
          if (!src) return resolve();
          const img = new Image();
          img.src = src;
          if (img.complete) return resolve();
          img.onload = img.onerror = () => resolve();
          setTimeout(resolve, 600); // Safety fallback timeout
        })
    )
  );
};

export default function Masonry({
  items = [],
  ease = "power3.out",
  duration = 0.6,
  stagger = 0.04,
  animateFrom = "bottom",
  scaleOnHover = true,
  hoverScale = 0.98,
  blurToFocus = true,
  _colorShiftOnHover = false,
  onItemClick
}) {
  // Refined responsive columns: 5 on 2xl (>=1536px), 4 on xl (>=1200px), 3 on md/lg (>=840px), 2 on sm (>=520px), 1 on mobile
  const columns = useMedia(
    ["(min-width:1536px)", "(min-width:1200px)", "(min-width:840px)", "(min-width:520px)"],
    [5, 4, 3, 2],
    1
  );

  const [containerRef, { width }] = useMeasure();
  const [imagesReady, setImagesReady] = useState(false);

  const getInitialPosition = (item) => {
    const containerRect = containerRef.current?.getBoundingClientRect();
    if (!containerRect) return { x: item.x, y: item.y };

    let direction = animateFrom;

    if (animateFrom === "random") {
      const directions = ["top", "bottom", "left", "right"];
      direction = directions[Math.floor(Math.random() * directions.length)];
    }

    switch (direction) {
      case "top":
        return { x: item.x, y: -200 };
      case "bottom":
        return { x: item.x, y: window.innerHeight + 200 };
      case "left":
        return { x: -200, y: item.y };
      case "right":
        return { x: window.innerWidth + 200, y: item.y };
      case "center":
        return {
          x: (containerRect.width || 0) / 2 - item.w / 2,
          y: (containerRect.height || 0) / 2 - item.h / 2
        };
      default:
        return { x: item.x, y: item.y + 100 };
    }
  };

  useEffect(() => {
    setImagesReady(false);
    preloadImages(items.map((i) => i.img)).then(() => setImagesReady(true));
  }, [items]);

  const { grid, totalHeight } = useMemo(() => {
    if (!width || items.length === 0) return { grid: [], totalHeight: 0 };

    const colHeights = new Array(columns).fill(0);
    const columnWidth = width / columns;

    const computedGrid = items.map((child) => {
      const col = colHeights.indexOf(Math.min(...colHeights));
      const x = columnWidth * col;
      const height = (child.height || 600) / 2;
      const y = colHeights[col];

      colHeights[col] += height;

      return { ...child, x, y, w: columnWidth, h: height };
    });

    const maxH = Math.max(0, ...colHeights);
    return { grid: computedGrid, totalHeight: maxH };
  }, [columns, items, width]);

  const prevItemsRef = useRef([]);

  useLayoutEffect(() => {
    if (!imagesReady || grid.length === 0) return;

    const prevIds = new Set(prevItemsRef.current.map((i) => i.id));
    const isFirstMount = prevItemsRef.current.length === 0;

    grid.forEach((item, index) => {
      const selector = `[data-key="${item.id}"]`;
      const animationProps = {
        x: item.x,
        y: item.y,
        width: item.w,
        height: item.h
      };

      const isNewItem = isFirstMount || !prevIds.has(item.id);

      if (isNewItem) {
        const initialPos = getInitialPosition(item);
        const initialState = {
          opacity: 0,
          x: initialPos.x,
          y: initialPos.y,
          width: item.w,
          height: item.h,
          scale: 1,
          ...(blurToFocus && { filter: "blur(10px)" })
        };

        gsap.fromTo(selector, initialState, {
          opacity: 1,
          ...animationProps,
          ...(blurToFocus && { filter: "blur(0px)" }),
          duration: 0.7,
          ease: ease,
          delay: Math.min(index * stagger, 0.4)
        });
      } else {
        gsap.to(selector, {
          ...animationProps,
          opacity: 1,
          duration: duration,
          ease: ease,
          overwrite: "auto"
        });
      }
    });

    prevItemsRef.current = items;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [grid, imagesReady, stagger, animateFrom, blurToFocus, duration, ease]);

  const handleMouseEnter = (e, item) => {
    const element = e.currentTarget;
    const selector = `[data-key="${item.id}"]`;

    if (scaleOnHover) {
      gsap.to(selector, {
        scale: hoverScale,
        duration: 0.3,
        ease: "power2.out"
      });
    }

    const imgEl = element.querySelector(".item-img");
    if (imgEl) {
      gsap.to(imgEl, {
        scale: 1.04,
        duration: 0.4,
        ease: "power2.out"
      });
    }

    const overlay = element.querySelector(".tsa-overlay");
    if (overlay) {
      gsap.to(overlay, {
        opacity: 0.55,
        duration: 0.35,
        ease: "power2.out"
      });
    }

    const info = element.querySelector(".tsa-info");
    if (info) {
      gsap.to(info, {
        opacity: 1,
        y: 0,
        duration: 0.35,
        ease: "power2.out"
      });
    }
  };

  const handleMouseLeave = (e, item) => {
    const element = e.currentTarget;
    const selector = `[data-key="${item.id}"]`;

    if (scaleOnHover) {
      gsap.to(selector, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out"
      });
    }

    const imgEl = element.querySelector(".item-img");
    if (imgEl) {
      gsap.to(imgEl, {
        scale: 1,
        duration: 0.4,
        ease: "power2.out"
      });
    }

    const overlay = element.querySelector(".tsa-overlay");
    if (overlay) {
      gsap.to(overlay, {
        opacity: 0,
        duration: 0.3,
        ease: "power2.out"
      });
    }

    const info = element.querySelector(".tsa-info");
    if (info) {
      gsap.to(info, {
        opacity: 0,
        y: 6,
        duration: 0.25,
        ease: "power2.out"
      });
    }
  };

  const handleClick = (item) => {
    if (onItemClick) {
      onItemClick(item);
    } else if (item.url && item.url !== "#") {
      window.open(item.url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div
      ref={containerRef}
      className="masonry-list relative w-full"
      style={{ minHeight: totalHeight > 0 ? `${totalHeight}px` : "500px" }}
    >
      {grid.map((item) => (
        <div
          key={item.id}
          data-key={item.id}
          className="item-wrapper"
          onClick={() => handleClick(item)}
          onMouseEnter={(e) => handleMouseEnter(e, item)}
          onMouseLeave={(e) => handleMouseLeave(e, item)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              handleClick(item);
            }
          }}
          aria-label={`${item.title} - ${item.category} ${item.year}`}
        >
          <div
            className="item-img relative overflow-hidden"
            style={{
              backgroundImage: `url(${item.img})`,
              transformOrigin: "center center"
            }}
          >
            {/* Subtle soft dark navy overlay on hover */}
            <div
              className="tsa-overlay absolute inset-0 bg-gradient-to-t from-[#0A1F44]/95 via-[#0A1F44]/40 to-transparent opacity-0 pointer-events-none transition-none"
              style={{ opacity: 0 }}
            />

            {/* Hover Event Details: Editorial, Calm, Subtle */}
            <div
              className="tsa-info absolute inset-0 p-4 sm:p-5 flex flex-col justify-end opacity-0 pointer-events-none z-10"
              style={{ opacity: 0, transform: "translateY(6px)" }}
            >
              <h3 className="font-heading font-medium text-white text-sm sm:text-base leading-snug tracking-tight mb-1">
                {item.title}
              </h3>
              <div className="flex flex-wrap items-center gap-2 text-[11px]">
                <span className="text-white/80 font-sans font-medium">
                  {item.category}
                </span>
                <span className="text-white/40">•</span>
                <span className="text-white/70 font-mono text-[10px]">
                  {item.year}
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

