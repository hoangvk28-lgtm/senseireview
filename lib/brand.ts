// ─── Central brand configuration ──────────────────────────────────────────────
export const BRAND_NAME = "SenseiReview";
export const BRAND_TAGLINE = "Know Better. Choose Better.";
export const BRAND_POSITIONING =
  "A smarter way to research, compare, and choose products that fit your needs.";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "https://www.senseireview.com";

export const SITE_DESCRIPTION =
  "Independent product research and reviews. SenseiReview compares specifications, documentation and owner feedback so you can choose products that fit your needs.";

export const CONTACT_EMAIL = "hello@senseireview.com";
export const SOCIAL_LINKS: { platform: string; url: string }[] = [];

// Confirmed by the user 2026-11-21.
export const AMAZON_ASSOCIATE_TAG = "senseireview-20";

// Microsoft Clarity project id, confirmed by the user 2026-11-27.
// NEXT_PUBLIC_CLARITY_ID overrides it at build time if ever needed.
export const CLARITY_PROJECT_ID = "zjz3d1omfi";

export const AUDIENCE_DESCRIPTION =
  "Practical shoppers who want to understand what a product actually does, and what it does not, before they spend.";

export const CONTENT_PILLARS = [
  { label: "Home & Kitchen", slug: "home-kitchen" },
  { label: "Tech & Electronics", slug: "tech-electronics" },
  { label: "Health & Fitness", slug: "health-fitness" },
  { label: "Outdoor & Garden", slug: "outdoor-garden" },
  { label: "Tools & DIY", slug: "tools-diy" },
] as const;

// ─── Sensei Score methodology ──────────────────────────────────────────────
export const RATING_CRITERIA = [
  { label: "Performance and Fit for Purpose", weight: 30 },
  { label: "Build Quality and Durability", weight: 20 },
  { label: "Ease of Use", weight: 15 },
  { label: "Features and Specifications", weight: 15 },
  { label: "Owner Feedback Patterns", weight: 10 },
  { label: "Value for Money", weight: 10 },
] as const;

export const DISCLOSURE_SHORT =
  "SenseiReview is reader-supported. When you buy through links on our site, we may earn an affiliate commission at no additional cost to you.";

export const DISCLOSURE_FULL =
  "SenseiReview participates in affiliate programs, including the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com. When you click a product link and make a purchase, we may earn a small commission at no additional cost to you. Our recommendations are based on published specifications, manufacturer documentation and patterns in verified buyer feedback. Our editorial opinions are independent and are never influenced by affiliate relationships.";
