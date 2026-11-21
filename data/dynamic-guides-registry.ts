// ─── Registry of guides served via app/(site)/guide/[slug]/page.tsx ──────────
// Every slug listed here has a rich data/guides/<slug>.ts file (the same
// shape used by the static per-slug pipeline) but does NOT get its own
// literal app/(site)/guide/<slug>/page.tsx route generated. Instead
// [slug]/page.tsx looks up the slug in dynamicGuideLoaders and renders it via
// <RichGuidePage>. This keeps new guides at full content depth (products[],
// buyingCriteria[], howWeEvaluated[], howToChoose[]) without adding a new
// compiled route per guide, which is what was driving up build time as the
// site grew past ~900 static routes.
//
// IMPORTANT: each entry MUST be a literal, statically-analyzable import()
// call (e.g. () => import("./guides/exact-slug")) — never a template-literal
// expression built from a variable. An expression-based dynamic import
// (import(`./guides/${slug}`)) forces the bundler to treat the entire
// data/guides/ directory (900+ files) as a glob of candidates, which was
// measured to exhaust the build's heap (~2GB) during `next build`'s
// TypeScript pass. Explicit per-slug entries avoid that entirely.
//
// Appended to by scripts/register-dynamic-guide.mjs — do not hand-edit,
// other than the comment above if the mechanism changes.
export const dynamicGuideLoaders: Record<string, () => Promise<Record<string, unknown>>> = {
  "usb-c-charging-standards-explained": () => import("./guides/usb-c-charging-standards-explained"),
  "treadmill-motor-horsepower-explained": () => import("./guides/treadmill-motor-horsepower-explained"),
  "stainless-vs-nonstick-vs-cast-iron-pans": () => import("./guides/stainless-vs-nonstick-vs-cast-iron-pans"),
  "ssd-vs-hdd": () => import("./guides/ssd-vs-hdd"),
  "robot-vacuum-suction-power-explained": () => import("./guides/robot-vacuum-suction-power-explained"),
  "raised-garden-bed-materials": () => import("./guides/raised-garden-bed-materials"),
  "power-bank-capacity-explained": () => import("./guides/power-bank-capacity-explained"),
  "patio-umbrella-size-guide": () => import("./guides/patio-umbrella-size-guide"),
  "outdoor-furniture-materials-compared": () => import("./guides/outdoor-furniture-materials-compared"),
  "oscillating-multi-tool-uses": () => import("./guides/oscillating-multi-tool-uses"),
  "monitor-refresh-rate-explained": () => import("./guides/monitor-refresh-rate-explained"),
  "mesh-wifi-vs-range-extender": () => import("./guides/mesh-wifi-vs-range-extender"),
  "lawn-mower-types-compared": () => import("./guides/lawn-mower-types-compared"),
  "laser-level-vs-bubble-level": () => import("./guides/laser-level-vs-bubble-level"),
  "humidifier-types-compared": () => import("./guides/humidifier-types-compared"),
  "how-to-sharpen-pruning-shears": () => import("./guides/how-to-sharpen-pruning-shears"),
  "how-to-descale-a-coffee-maker": () => import("./guides/how-to-descale-a-coffee-maker"),
  "how-to-clean-a-grill-grate": () => import("./guides/how-to-clean-a-grill-grate"),
  "how-to-choose-dumbbell-weight": () => import("./guides/how-to-choose-dumbbell-weight"),
  "how-to-choose-drill-bits": () => import("./guides/how-to-choose-drill-bits"),
  "how-to-choose-a-yoga-mat": () => import("./guides/how-to-choose-a-yoga-mat"),
  "how-noise-cancelling-headphones-work": () => import("./guides/how-noise-cancelling-headphones-work"),
  "gas-vs-charcoal-grill": () => import("./guides/gas-vs-charcoal-grill"),
  "garden-hose-diameter-and-length": () => import("./guides/garden-hose-diameter-and-length"),
  "foam-roller-density-explained": () => import("./guides/foam-roller-density-explained"),
  "drill-vs-impact-driver": () => import("./guides/drill-vs-impact-driver"),
  "circular-saw-blade-teeth-explained": () => import("./guides/circular-saw-blade-teeth-explained"),
  "brushed-vs-brushless-drill-motors": () => import("./guides/brushed-vs-brushless-drill-motors"),
  "bluetooth-headphone-codecs-explained": () => import("./guides/bluetooth-headphone-codecs-explained"),
  "battery-voltage-and-amp-hours-explained": () => import("./guides/battery-voltage-and-amp-hours-explained"),
  "air-fryer-vs-convection-oven": () => import("./guides/air-fryer-vs-convection-oven"),
  "adjustable-vs-fixed-dumbbells": () => import("./guides/adjustable-vs-fixed-dumbbells"),
  "best-air-purifiers-for-living-rooms": () => import("./guides/best-air-purifiers-for-living-rooms"),
};

export const dynamicGuideSlugs = Object.keys(dynamicGuideLoaders);
