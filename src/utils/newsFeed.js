import { editorialInsights } from "../data/tsaData";

const CACHE_KEY = "tsa_daily_news_cache_v1";
const CACHE_TTL_MS = 30 * 60 * 1000; // 30 minutes cache to prevent rate-limiting

// Curated internal fallback news if network/offline
export const DEFAULT_NEWS_ITEMS = [
  {
    id: "bulletin-ai-expo-2026",
    type: "Flagship Bulletin",
    category: "Events & Exhibitions",
    title: "TSA Commences Multi-Hall Scenography Engineering for AI Global EXPO 2026 at ICE BSD",
    date: "11 Nov 2026",
    readTime: "4 min read",
    excerpt: "Operational deployment begins across Halls 1, 2, and 3 at Indonesia Convention Exhibition (ICE) BSD City, accommodating 50,000+ delegates and international technology pavilions with zero margin for error.",
    image: "/events/adobe-ai-art-revolution/cover.jpg",
    author: "TSA Event Operations Directorate",
    url: "/events/sea-energy-transition-clean-tech-mice-expo-2025",
    isLive: false
  },
  {
    id: "bulletin-asean-summit",
    type: "Protocol Dispatch",
    category: "Government & Protocol",
    title: "Diplomatic Protocol Clearances Completed for Multilateral Plenary Assembly at JCC Senayan",
    date: "10 Nov 2026",
    readTime: "3 min read",
    excerpt: "The TSA Executive Secretariat has formalized bilateral precedence schedules, encrypted telepresence conduits, and sovereign security perimeters uniting 18 ministerial delegations.",
    image: "/events/indonesia-europe-investment-summit-2023/cover.jpg",
    author: "Executive Secretariat",
    url: "/events/asean-sovereign-strategic-diplomacy-plenary-2025",
    isLive: false
  },
  ...editorialInsights.map((insight) => ({
    id: insight.id,
    type: "Research Monograph",
    category: insight.category,
    title: insight.title,
    date: insight.date,
    readTime: insight.readTime,
    excerpt: insight.excerpt,
    image: insight.image,
    author: insight.author || "TSA Research Group",
    url: "/events",
    isLive: false
  }))
];

// Fallback high-res editorial covers in case an RSS item lacks an image
const FALLBACK_COVERS = [
  "/events/appmbgi-national-summit-2026/cover.jpg",
  "/events/team-building-bp-tapera-2025/cover.jpg",
  "/events/book-launching-restorative-justice/cover.jpg",
  "/events/illuminate-asia-exclusive-evening/cover.jpg",
  "/events/indonesia-europe-investment-summit-2023/cover.jpg",
  "/events/adobe-ai-art-revolution/cover.jpg"
];

function sanitizeHtml(htmlString) {
  if (!htmlString) return "";
  return htmlString
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/\s+/g, " ")
    .trim();
}

function detectCategory(title, text) {
  const combined = `${title} ${text}`.toLowerCase();
  if (
    combined.includes("pameran") ||
    combined.includes("expo") ||
    combined.includes("festival") ||
    combined.includes("mice") ||
    combined.includes("konferensi") ||
    combined.includes("summit") ||
    combined.includes("event")
  ) {
    return "Events & Exhibitions";
  }
  if (
    combined.includes("kementerian") ||
    combined.includes("menteri") ||
    combined.includes("presiden") ||
    combined.includes("pemerintah") ||
    combined.includes("kadin") ||
    combined.includes("diplomasi") ||
    combined.includes("kebijakan") ||
    combined.includes("protokol")
  ) {
    return "Government & Protocol";
  }
  return "Corporate Governance";
}

function formatPubDate(rawDate) {
  try {
    const d = new Date(rawDate);
    if (isNaN(d.getTime())) return rawDate || "Recent Dispatch";
    const now = new Date();
    const diffHours = Math.floor((now.getTime() - d.getTime()) / (1000 * 60 * 60));
    if (diffHours < 1) return "Just now";
    if (diffHours < 24) return `${diffHours} hr ago`;
    return d.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric"
    });
  } catch {
    return rawDate || "Recent";
  }
}

/**
 * Fetches daily automated Indonesian business, economy, and event news
 * from LKBN Antara via CORS-safe RSS JSON proxy with localStorage caching.
 */
export async function fetchLiveIndonesianNews() {
  // 1. Try reading from cache first
  try {
    const cached = localStorage.getItem(CACHE_KEY);
    if (cached) {
      const { timestamp, items } = JSON.parse(cached);
      if (Date.now() - timestamp < CACHE_TTL_MS && Array.isArray(items) && items.length > 0) {
        return items;
      }
    }
  } catch {
    // LocalStorage unavailable, proceed with fetch
  }

  // 2. Fetch fresh RSS feed from Antara News (Ekonomi & Bisnis Nasional)
  const feedUrl = "https://www.antaranews.com/rss/ekonomi-bisnis.xml";
  const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(feedUrl)}`;

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 6500);

    const response = await fetch(apiUrl, { signal: controller.signal });
    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const data = await response.json();
    if (data.status !== "ok" || !Array.isArray(data.items) || data.items.length === 0) {
      throw new Error("Invalid RSS response format");
    }

    const liveItems = data.items.slice(0, 8).map((item, index) => {
      // Extract image: enclosure or regex from description
      let image = item.enclosure?.link || item.thumbnail || "";
      if (!image && item.description) {
        const imgMatch = item.description.match(/<img[^>]+src=["']([^"']+)["']/i);
        if (imgMatch) image = imgMatch[1];
      }
      if (!image) {
        image = FALLBACK_COVERS[index % FALLBACK_COVERS.length];
      }

      const cleanExcerpt = sanitizeHtml(item.description || item.content || item.title);
      const category = detectCategory(item.title, cleanExcerpt);
      const wordCount = cleanExcerpt.split(/\s+/).length;
      const readMinutes = Math.max(2, Math.min(6, Math.round(wordCount / 40)));

      return {
        id: `live-antara-${index}-${item.guid || index}`,
        type: "Live National Dispatch",
        category,
        title: item.title,
        date: formatPubDate(item.pubDate),
        rawPubDate: item.pubDate,
        readTime: `${readMinutes} min read`,
        excerpt: cleanExcerpt.length > 240 ? `${cleanExcerpt.slice(0, 240)}...` : cleanExcerpt,
        image,
        author: "LKBN ANTARA · National Wire",
        url: item.link,
        isLive: true
      };
    });

    // Merge live daily news with TSA's landmark corporate bulletins
    const combinedNews = [
      ...liveItems.slice(0, 4),
      DEFAULT_NEWS_ITEMS[0], // Flagship TSA bulletin
      ...liveItems.slice(4),
      DEFAULT_NEWS_ITEMS[1],
      ...DEFAULT_NEWS_ITEMS.slice(2)
    ];

    // Save to cache
    try {
      localStorage.setItem(
        CACHE_KEY,
        JSON.stringify({ timestamp: Date.now(), items: combinedNews })
      );
    } catch {
      // LocalStorage error non-critical
    }

    return combinedNews;
  } catch (error) {
    console.warn("Live news fetch fallback active:", error.message);
    return DEFAULT_NEWS_ITEMS;
  }
}

