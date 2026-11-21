export interface Category {
  slug: string;
  name: string;
  description: string;
  shortDescription: string;
  icon: string;
  color: string;
  subcategories: string[];
}

export const categories: Category[] = [
  {
    slug: "home-kitchen",
    name: "Home & Kitchen",
    description:
      "Appliances, cookware, cleaning gear and home comfort products, compared on stated performance, build, running costs and the trade-offs listings tend to leave out.",
    shortDescription: "Appliances, cookware, cleaning and home comfort.",
    icon: "Home",
    color: "#222A32",
    subcategories: [],
  },
  {
    slug: "tech-electronics",
    name: "Tech & Electronics",
    description:
      "Audio, smart home, computer accessories and everyday gadgets, explained through the specifications that matter and the ones that are mostly marketing.",
    shortDescription: "Audio, smart home, accessories and gadgets.",
    icon: "Tech",
    color: "#B94A3A",
    subcategories: [],
  },
  {
    slug: "health-fitness",
    name: "Health & Fitness",
    description:
      "Home exercise equipment, recovery tools and wellness gear, judged on construction, adjustability and how well each one suits real routines and real spaces.",
    shortDescription: "Home gym, recovery and wellness gear.",
    icon: "Fitness",
    color: "#4F5861",
    subcategories: [],
  },
  {
    slug: "outdoor-garden",
    name: "Outdoor & Garden",
    description:
      "Garden tools, outdoor furniture, grills and patio gear, compared on materials, weather resistance and how much upkeep each one asks of its owner.",
    shortDescription: "Garden tools, patio, grilling and outdoor gear.",
    icon: "Outdoor",
    color: "#87918A",
    subcategories: [],
  },
  {
    slug: "tools-diy",
    name: "Tools & DIY",
    description:
      "Power tools, hand tools and workshop accessories, weighed on published specifications, battery platforms, ergonomics and the jobs each one is genuinely built for.",
    shortDescription: "Power tools, hand tools and workshop gear.",
    icon: "Tools",
    color: "#2E3741",
    subcategories: [],
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
