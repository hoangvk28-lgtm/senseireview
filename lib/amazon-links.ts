const TAG = "senseireview-20";

export const amazonSearchLinks: Record<string, string> = {
  "home-kitchen": `https://www.amazon.com/s?k=kitchen+appliances&tag=${TAG}`,
  "tech-electronics": `https://www.amazon.com/s?k=electronics+gadgets&tag=${TAG}`,
  "health-fitness": `https://www.amazon.com/s?k=home+fitness+equipment&tag=${TAG}`,
  "outdoor-garden": `https://www.amazon.com/s?k=garden+tools&tag=${TAG}`,
  "tools-diy": `https://www.amazon.com/s?k=power+tools&tag=${TAG}`,
};

export const heroChipLinks = [
  { label: "Home & Kitchen", href: amazonSearchLinks["home-kitchen"] },
  { label: "Tech & Electronics", href: amazonSearchLinks["tech-electronics"] },
  { label: "Health & Fitness", href: amazonSearchLinks["health-fitness"] },
  { label: "Tools & DIY", href: amazonSearchLinks["tools-diy"] },
];
