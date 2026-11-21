import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { categories } from "@/data/categories";
import { getPublicGuides } from "@/lib/public-guides";
import { RATING_CRITERIA } from "@/lib/brand";
import { buildMetadata } from "@/lib/seo";


export const metadata: Metadata = buildMetadata({
  title: "Independent Product Research & Reviews",
  description:
    "Independent buying guides across home, tech, fitness, outdoor and DIY products. We compare specifications and owner feedback so you can choose what fits.",
  path: "/",
});

export default async function HomePage() {
  const guides = await getPublicGuides();
  const latest = [...guides].sort((a, b) => (b.lastUpdated ?? "").localeCompare(a.lastUpdated ?? "")).slice(0, 6);
  const countFor = (slug: string) => guides.filter((g) => g.categorySlug === slug).length;

  return (
    <>
      {/* Hero: ivory page, oversized serif, vermilion sun with real product photos */}
      <section className="relative bg-bg overflow-hidden border-b border-border">
        <Container className="relative pt-14 pb-10 md:pt-20 md:pb-14 grid lg:grid-cols-[1.15fr_1fr] gap-12 lg:gap-6 items-center">
          <div className="relative z-10">
            <p className="flex items-center gap-3 slr-label uppercase text-ink-muted mb-6">
              <span className="inline-block w-10 h-px bg-cta" aria-hidden="true" />
              Independent product research &amp; reviews
            </p>
            <h1 className="text-[clamp(3rem,6vw+1rem,6.25rem)] leading-[0.95] tracking-[-0.035em] mb-7">
              Know better.
              <br />
              <em className="text-cta not-italic md:italic">Choose better.</em>
            </h1>
            <p className="text-lg text-ink-secondary max-w-lg mb-9">
              A smarter way to research, compare, and choose products that fit your needs. We read the specifications and owner feedback so you do not have to.
            </p>
            <div className="flex flex-wrap items-center gap-5">
              <Link prefetch={false} href="/guide/all" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-btn bg-ink hover:bg-cta text-white font-semibold transition-colors">
                Browse buying guides <span aria-hidden="true">→</span>
              </Link>
              <Link prefetch={false} href="/how-we-review" className="text-sm font-semibold text-ink underline underline-offset-4 decoration-cta hover:text-cta">
                How the Sensei Score works
              </Link>
            </div>
          </div>

          <div className="relative h-[22rem] sm:h-[28rem] lg:h-[32rem]" aria-hidden="true">
            <div className="absolute right-[8%] top-1/2 -translate-y-1/2 w-[17rem] h-[17rem] sm:w-[22rem] sm:h-[22rem] lg:w-[26rem] lg:h-[26rem] rounded-full bg-cta" />
            <div className="absolute left-[4%] top-[6%] w-[42%] aspect-[4/5] overflow-hidden rounded-card bg-surface shadow-card-hover ring-8 ring-bg">
              <Image src="/images/articles/cat-tech-electronics.webp" alt="" fill priority sizes="(max-width: 1024px) 45vw, 22vw" className="object-cover" />
            </div>
            <div className="absolute right-[2%] bottom-[4%] w-[46%] aspect-[4/3] overflow-hidden rounded-card bg-surface shadow-card-hover ring-8 ring-bg">
              <Image src="/images/articles/cat-home-kitchen.webp" alt="" fill sizes="(max-width: 1024px) 45vw, 22vw" className="object-cover" />
            </div>
            <span className="hidden sm:block absolute right-0 top-2 slr-label uppercase tracking-[0.3em] text-ink-muted [writing-mode:vertical-rl]">Research · Compare · Choose</span>
          </div>
        </Container>

        {/* Sensei Score band */}
        <div className="border-t border-border">
          <Container className="py-5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-4">
            {RATING_CRITERIA.map((c) => (
              <div key={c.label} className="flex items-baseline gap-2">
                <span className="font-display text-2xl text-cta leading-none">{c.weight}</span>
                <span className="text-xs leading-tight text-ink-secondary">{c.label}</span>
              </div>
            ))}
          </Container>
        </div>
      </section>

      <Container>
        {/* Categories: photo-led tiles, minimal text */}
        <section className="py-16">
          <div className="flex items-end justify-between gap-4 mb-8">
            <div>
              <p className="slr-label uppercase text-cta mb-2">Categories</p>
              <h2>Start with a category</h2>
            </div>
            <Link prefetch={false} href="/categories" className="text-sm font-semibold text-cta hover:text-cta-dark">All categories →</Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 md:gap-4">
            {categories.map((c, i) => (
              <Link
                prefetch={false}
                key={c.slug}
                href={`/categories/${c.slug}`}
                className={`group relative overflow-hidden rounded-card bg-ink aspect-[3/4] ${i === 0 ? "col-span-2 lg:col-span-1 aspect-[16/10] lg:aspect-[3/4]" : ""}`}
              >
                <Image
                  src={`/images/articles/cat-${c.slug}.webp`}
                  alt={c.name}
                  fill
                  sizes="(max-width: 1024px) 50vw, 20vw"
                  className="object-cover opacity-90 grayscale-[35%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4 md:p-5">
                  <span className="slr-label text-white/60">{String(i + 1).padStart(2, "0")}{countFor(c.slug) > 0 ? ` · ${countFor(c.slug)} guides` : ""}</span>
                  <h3 className="text-white text-lg md:text-xl mt-1 flex items-center justify-between gap-2">
                    {c.name}
                    <span className="inline-flex w-7 h-7 shrink-0 rounded-full bg-cta text-white text-sm items-center justify-center transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Latest guides */}
        {latest.length > 0 && (
          <section className="pb-16">
            <div className="flex items-end justify-between mb-8 gap-4">
              <div>
                <p className="slr-label uppercase text-cta mb-2">Fresh off the bench</p>
                <h2>Latest buying guides</h2>
              </div>
              <Link prefetch={false} href="/guide/all" className="text-sm font-semibold text-cta hover:text-cta-dark">View all →</Link>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {latest.map((g) => (
                <Link prefetch={false} key={g.slug} href={`/guide/${g.slug}`} className="group rounded-card bg-surface border border-border overflow-hidden hover:shadow-card-hover transition-all">
                  <div className="relative h-48 bg-white border-b border-border">
                    {g.heroImage && (
                      <Image src={g.heroImage} alt={g.title} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-contain p-6 group-hover:scale-105 transition-transform" />
                    )}
                  </div>
                  <div className="p-5">
                    <p className="slr-label uppercase text-ink-muted mb-2">{categories.find((c) => c.slug === g.categorySlug)?.name} · {g.readTime}</p>
                    <h3 className="text-lg leading-snug group-hover:text-cta transition-colors">{g.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </Container>

      {/* Methodology band */}
      <section className="bg-surface border-y border-border">
        <Container className="py-16 grid md:grid-cols-3 gap-8">
          {[
            ["01", "We start from the specifications", "Capacity, power, materials, dimensions and warranty terms. We explain which numbers decide the buy and which are marketing copy."],
            ["02", "We compare like with like", "Every pick is compared against the others in the same roundup, so you see the real tradeoffs between models, not isolated praise."],
            ["03", "We think about year five", "Build quality, upkeep, replacement parts and whether a product still does its job once the novelty has worn off."],
          ].map(([n, t, d]) => (
            <div key={n}>
              <span className="slr-label text-cta">{n}</span>
              <h3 className="mt-2 mb-2">{t}</h3>
              <p className="text-ink-secondary">{d}</p>
            </div>
          ))}
        </Container>
      </section>

    </>
  );
}
