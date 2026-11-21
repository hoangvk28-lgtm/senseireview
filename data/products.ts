// ─── Types ───────────────────────────────────────────────────────────────────

export interface ProductScore {
  overall: number;       // 1-10  weighted aggregate
  smallSpaceFit: number; // fit for purpose and real-world use (legacy key name)
  buildQuality: number;  // materials, finish, sturdiness
  easeOfUse: number;     // setup time, daily usability
  valueForMoney: number; // price vs. performance vs. competition
  buyerFeedback: number; // derived from verified Amazon review patterns
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  categorySlug: string;
  subcategorySlug: string;
  image: string;
  amazonUrl: string;
  priceRange: string;   // display string, e.g. "$25-$30"
  badge?: string;       // single primary editorial badge
  shortDescription: string;
  bestFor: string[];
  notIdealFor: string[];
  specs: Record<string, string>;
  pros: string[];
  cons: string[];
  scores: ProductScore;
  reviewSummary: string;
  alternatives: string[];      // sibling product IDs
  relatedGuideSlugs: string[]; // guides that feature this product
  // Product Library fields (Phase 2)
  asin?: string;           // Amazon ASIN (auto-builds amazonUrl if set)
  priceLabel?: "Budget" | "Mid-range" | "Premium" | "Check Amazon";
  useCase?: string;        // one-line use-case summary for editors
  sourceNotes?: string;    // internal verification notes, not rendered publicly
}

// ─── Data ─────────────────────────────────────────────────────────────────────
// Empty for a fresh site. Most guides on this pipeline (data/guides/<slug>.ts +
// scripts/generate-guide-page.mjs) carry their own products[] inline and don't
// need entries here — this file is the legacy static fallback array, kept only
// for guides built via the older Supabase-backed component pipeline.

export const products: Product[] = [
  {
    id: "compact-hepa-air-purifier",
    name: "Compact HEPA Air Purifier for Bedrooms and Small Rooms",
    slug: "compact-hepa-air-purifier",
    categorySlug: "home-kitchen",
    subcategorySlug: "",
    image: "https://m.media-amazon.com/images/I/3137UpsSXkL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/s?k=compact+hepa+air+purifier+small+room&tag=senseireview-20",
    priceRange: "Mid-range",
    priceLabel: "Mid-range",
    badge: "Top Pick",
    shortDescription:
      "A compact tabletop air purifier with a true HEPA filter and quiet low settings, sized for bedrooms, offices and other small rooms.",
    bestFor: [
      "Bedrooms and home offices",
      "Light sleepers who want a quiet low setting",
      "Households that want simple filter changes",
    ],
    notIdealFor: ["Large open-plan spaces", "Buyers who want smart-home controls"],
    specs: {
      "Filter type": "True HEPA with carbon layer",
      "Best room size": "Small rooms, per maker guidance",
      Controls: "Three-speed dial",
      "Filter change": "Tool-free",
      Form: "Compact tabletop",
    },
    pros: [
      "True HEPA filtration rather than a HEPA-type label",
      "Low setting stays unobtrusive at night",
      "Filter swaps without tools",
    ],
    cons: ["Limited to small rooms", "No app or air quality display"],
    scores: {
      overall: 8.6,
      smallSpaceFit: 9.2,
      buildQuality: 8.5,
      easeOfUse: 8.4,
      valueForMoney: 8.3,
      buyerFeedback: 8.5,
    },
    reviewSummary:
      "A sensible default for a small room: a true HEPA filter, simple controls and a quiet low setting, based on published specifications and patterns in owner feedback. The trade-off is coverage, so it suits bedrooms and offices better than large living areas.",
    alternatives: [],
    relatedGuideSlugs: ["best-air-purifiers-for-living-rooms"],
    useCase: "Everyday air cleaning in a bedroom or small home office.",
  },
];
