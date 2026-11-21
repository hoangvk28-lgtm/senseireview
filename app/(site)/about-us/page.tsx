import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { buildMetadata, SITE_URL } from "@/lib/seo";
import { categories } from "@/data/categories";

export const metadata: Metadata = buildMetadata({
  title: "About SenseiReview",
  description:
    "SenseiReview is an independent product research site. See who we are, how we evaluate products, and how we keep our picks honest.",
  path: "/about-us",
});

const principles = [
  ["Specifications before slogans", "Every guide starts from the figures that decide the buy: capacity, power, materials, dimensions, warranty terms. We explain what each number means and which ones listings quietly leave out."],
  ["Materials over marketing", "We explain what a product is made of and how it is built, so you can judge any model, not only the ones we list."],
  ["Ownership, not delivery day", "Most products are used for years. We weigh upkeep, durability, setup and warranty terms as heavily as how a product looks on the listing page."],
  ["No paid rankings", "Brands cannot buy a position on SenseiReview. Affiliate commissions fund the site and never change the order of our picks."],
];

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About SenseiReview",
  url: `${SITE_URL}/about-us`,
  publisher: { "@type": "Organization", name: "SenseiReview", url: SITE_URL },
};

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      <section className="bg-brand text-ink-inverse relative overflow-hidden">
        <div className="absolute inset-0 slr-texture" aria-hidden="true" />
        <Container className="relative py-16 max-w-4xl">
          <p className="slr-label uppercase text-cta mb-3">About us</p>
          <h1 className="text-white mb-4">Know better. Choose better.</h1>
          <p className="text-lg text-white/70 max-w-2xl">
            SenseiReview is an independent product research site for anyone who wants to know how a product will perform, fit their needs and hold up before paying for it.
          </p>
        </Container>
      </section>
      <Container className="py-14 max-w-4xl">
        <section className="mb-14 space-y-4 text-[17px] text-ink-secondary leading-relaxed">
          <p>
            Most product roundups stop at a feature list. We think that is where the useful part begins. A listing leads with its headline feature, but the detail that decides the buy is often further down: the real capacity, the materials, the upkeep. We write guides that make those differences obvious.
          </p>
          <p>
            SenseiReview is not a store. We do not sell, stock or ship anything. When you click a product link you go to a retailer, usually Amazon, and we may earn a small commission at no extra cost to you. That commission is how the site is funded, and it never decides which product we recommend.
          </p>
        </section>
        <section className="mb-14">
          <h2 className="mb-6">How we work</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {principles.map(([t, d], i) => (
              <div key={t} className="rounded-card border border-border bg-surface p-5">
                <span className="slr-label text-cta">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="text-lg mt-1 mb-2">{t}</h3>
                <p className="text-sm text-ink-secondary leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="mb-14 rounded-card border border-border bg-surface p-6">
          <h2 className="text-2xl mb-3">What we do not claim</h2>
          <p className="text-ink-secondary leading-relaxed">
            Our guides are edited by <Link prefetch={false} href="/author/brianna-cole" className="font-semibold text-cta">Brianna Cole</Link>, our Lead Product Editor. We evaluate products from manufacturer specifications, technical documentation, owner feedback patterns and comparison against competing models. We do not claim to have hands-on tested every product we write about, and our Sensei Score is an editorial assessment, not a lab measurement.
          </p>
        </section>
        <section>
          <h2 className="text-2xl mb-4">What we cover</h2>
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <Link prefetch={false} key={c.slug} href={`/categories/${c.slug}`} className="px-4 py-2 rounded-btn border border-border bg-surface hover:border-cta hover:text-cta text-sm font-semibold">
                {c.name}
              </Link>
            ))}
            <Link prefetch={false} href="/how-we-review" className="px-4 py-2 rounded-btn bg-cta text-white text-sm font-semibold hover:bg-cta-dark">How we rate pieces →</Link>
          </div>
        </section>
        <section className="mt-14 pt-6 border-t border-border">
          <h2 className="text-base font-semibold mb-2">Image credits</h2>
          <p className="text-xs text-ink-muted leading-relaxed">
            Homepage category photos via Wikimedia Commons: kitchen mixer by Shixart1985 (CC BY 2.0), headphones by david falkner (CC BY 2.0), dumbbells by Singlespeedfahrer (CC0), trowel by Neslihan Gunaydin (CC0), cordless drill by Abduldedysubhansyah (CC BY-SA 4.0).
          </p>
        </section>
      </Container>
    </>
  );
}
