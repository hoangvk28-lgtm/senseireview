export interface Author {
  slug: string;
  name: string;
  role: string;
  bio: string;
  longBio: string[];
  avatarUrl?: string;
  coverUrl?: string;
  isPerson?: boolean; // true → Person schema; false/undefined → Organization
  expertise: string[];
  focus: { label: string; value: string }[];
  social: { platform: string; url: string; label: string }[];
  editorial: {
    process: string;
    independence: string;
  };
}

// NOTE: keep every statement here factual. Do not add years of experience,
// certifications, employers or awards unless the user supplies them and they
// are true. Fabricated credentials are an E-E-A-T and FTC risk.
export const authors: Author[] = [
  {
    slug: "brianna-cole",
    name: "Brianna Cole",
    role: "Lead Product Editor",
    avatarUrl: "/authors/brianna-cole.webp",
    isPerson: true,
    bio: "Brianna Cole leads SenseiReview's buying guides, turning published specifications, documentation and owner feedback patterns into clear verdicts across home, tech, fitness, outdoor and DIY products.",
    longBio: [
      "Brianna Cole is the lead editor behind SenseiReview's buying guides. The job is to read the parts of a product listing most buyers skip: the specification sheet, the fine print on materials and the figures a headline feature quietly leaves out.",
      "Every guide Brianna edits starts from the same question: will this product do what the buyer needs, day after day? That means separating marketing claims from measurable specifications, then explaining the difference in plain language.",
      "Brianna focuses on the ownership side of a purchase as much as the first week: how a product is cleaned or maintained, how it holds up with regular use, and what owner feedback patterns say about the second year. When a listing omits a figure that decides the buy, her guides say so instead of guessing.",
    ],
    expertise: [
      "Home and kitchen products",
      "Consumer tech and electronics",
      "Health and fitness equipment",
      "Outdoor and garden products",
      "Tools and DIY equipment",
      "Specification and documentation review",
    ],
    focus: [
      { label: "Role", value: "Lead Product Editor" },
      { label: "Covers", value: "Home, tech, fitness, outdoor and DIY products" },
      { label: "Method", value: "Specifications, documentation, owner feedback patterns" },
      { label: "Standard", value: "Evidence over marketing copy" },
    ],
    social: [],
    editorial: {
      process:
        "Each guide compares current products side by side on published specifications, materials and documentation, then maps each one to the buyers and situations it suits. Claims a listing cannot support are flagged in the copy rather than repeated.",
      independence:
        "Rankings are never sold. SenseiReview earns affiliate commissions through Amazon links, and commission rates play no part in which product is recommended or how it is ranked.",
    },
  },
];

export const DEFAULT_AUTHOR_SLUG = "brianna-cole";

export function getAuthorBySlug(slug: string): Author | undefined {
  return authors.find((a) => a.slug === slug);
}

export function getAuthorByName(name: string): Author | undefined {
  return authors.find((a) => a.name.toLowerCase() === name.toLowerCase());
}

export function getDefaultAuthor(): Author {
  return authors.find((a) => a.slug === DEFAULT_AUTHOR_SLUG)!;
}

export function authorToSlug(name: string): string {
  const match = getAuthorByName(name);
  if (match) return match.slug;
  return name.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
}
