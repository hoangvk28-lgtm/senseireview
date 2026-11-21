export interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string; description?: string }[];
}

export const mainNav: NavItem[] = [
  { label: "Home & Kitchen", href: "/categories/home-kitchen" },
  { label: "Tech & Electronics", href: "/categories/tech-electronics" },
  { label: "Health & Fitness", href: "/categories/health-fitness" },
  { label: "Outdoor & Garden", href: "/categories/outdoor-garden" },
  { label: "Tools & DIY", href: "/categories/tools-diy" },
  { label: "How We Rate", href: "/how-we-review" },
];

export const footerNav = {
  categories: [
    { label: "Home & Kitchen", href: "/categories/home-kitchen" },
    { label: "Tech & Electronics", href: "/categories/tech-electronics" },
    { label: "Health & Fitness", href: "/categories/health-fitness" },
    { label: "Outdoor & Garden", href: "/categories/outdoor-garden" },
    { label: "Tools & DIY", href: "/categories/tools-diy" },
  ],
  company: [
    { label: "How We Rate", href: "/how-we-review" },
    { label: "About", href: "/about-us" },
    { label: "Compare Rooms", href: "/compare" },
    { label: "Contact", href: "/contact" },
  ],
  explainers: [] as { label: string; href: string }[],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Affiliate Disclosure", href: "/affiliate-disclosure" },
    { label: "Terms of Use", href: "/terms-of-use" },
  ],
};
