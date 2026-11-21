import type {
  HomepageSettings,
  GlobalSettings,
  AffiliateSettings,
  FooterSettings,
} from "@/lib/site-types";

// ── Defaults: the live site copy. Static site, so these are the only values. ──

export const DEFAULT_HOMEPAGE_SETTINGS: HomepageSettings = {
  hero: {
    eyebrow: "INDEPENDENT PRODUCT RESEARCH & REVIEWS",
    headline: "Know better. Choose better.",
    headlineAccent: "",
    subtitle:
      "A smarter way to research, compare and choose products that fit your needs. We read the specs, the manuals and the owner feedback so you do not have to.",
    primaryCtaText: "Browse Buying Guides",
    primaryCtaHref: "/categories",
    secondaryCtaText: "How We Rate",
    secondaryCtaHref: "/how-we-review",
    searchPlaceholder: "Search air purifiers, headphones, drills…",
    badgeText: "Independent editorial picks, not sponsored or paid placement.",
    heroImageUrl: "",
    heroImageAlt: "",
    featuredProductSlugs: [],
  },
  trustBar: {
    items: [
      { number: "Performance", unit: "30%", label: "Does it do the job it claims", description: "Stated performance read against the specifications that actually decide it." },
      { number: "Build", unit: "20%", label: "Materials and durability", description: "Construction, warranty terms and the failure patterns owners report." },
      { number: "Usability", unit: "30%", label: "Ease of use and features", description: "Setup, everyday handling and which features earn their place." },
      { number: "Value", unit: "20%", label: "Feedback and value", description: "Owner feedback patterns and what the product costs to own over time." },
    ],
  },
  featuredGuideSlug: "",
  sections: {
    guides: {
      title: "Latest buying guides",
      description: "Researched comparisons of specs, build, usability and value.",
      limit: 6,
    },
    deals: {
      title: "Budget-Friendly Picks",
      description: "Well-priced products worth a look, curated by value score.",
    },
    categories: {
      title: "Start with a category",
      description: "Home and kitchen, tech, health and fitness, outdoor and garden, tools and DIY.",
    },
  },
  newsletter: {
    enabled: true,
    eyebrow: "Stay Updated",
    title: "Get new buying guides in your inbox.",
    description:
      "New guides, refreshed picks and practical buying advice. No spam, no sponsored content, no fluff.",
    inputPlaceholder: "you@example.com",
    buttonText: "Notify me",
    disclaimer: "No account required. Unsubscribe anytime. We'll never share your email.",
  },
};

export const DEFAULT_GLOBAL_SETTINGS: GlobalSettings = {
  siteName: "SenseiReview",
  siteTagline: "Know Better. Choose Better.",
  header: {
    logoText: "SenseiReview",
    showDealsButton: true,
    dealsButtonText: "Today's Deals",
  },
};

export const DEFAULT_AFFILIATE_SETTINGS: AffiliateSettings = {
  disclosureShort:
    "SenseiReview is reader-supported. When you buy through links on our site, we may earn an affiliate commission at no additional cost to you.",
  disclosureFull:
    "SenseiReview participates in affiliate programs, including the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com. When you click a product link and make a purchase, we may earn a small commission at no additional cost to you. Our recommendations are based on published specifications, manufacturer documentation, and patterns in verified buyer feedback, our editorial opinions are independent and are never influenced by affiliate relationships.",
  disclosureBannerText:
    "We may earn a commission when you buy through Amazon links. Our recommendations are based on published specs, manufacturer documentation, and clear comparison criteria.",
  amazonTag: "senseireview-20",
};

export const DEFAULT_FOOTER_SETTINGS: FooterSettings = {
  description:
    "Independent product research and reviews. Know better, choose better. No sponsored rankings.",
  copyrightText: "SenseiReview. All rights reserved.",
  showAffiliateDisclosure: true,
};

// ── Public helpers ────────────────────────────────────────────────────────────

export async function getPublicHomepageSettings(): Promise<HomepageSettings> {
  return DEFAULT_HOMEPAGE_SETTINGS;
}

export async function getPublicGlobalSettings(): Promise<GlobalSettings> {
  return DEFAULT_GLOBAL_SETTINGS;
}

export async function getPublicAffiliateSettings(): Promise<AffiliateSettings> {
  return DEFAULT_AFFILIATE_SETTINGS;
}

export async function getPublicFooterSettings(): Promise<FooterSettings> {
  return DEFAULT_FOOTER_SETTINGS;
}
