import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { buildMetadata } from "@/lib/seo";
import { RATING_CRITERIA } from "@/lib/brand";

export const metadata: Metadata = buildMetadata({
  title: "How We Review and Rate Products",
  description:
    "How SenseiReview evaluates products: the Sensei Score weighting, the specifications we verify, and how we handle affiliate links and corrections.",
  path: "/how-we-review",
});

const detail: Record<string, string> = {
  "Performance and Fit for Purpose": "How well a product does the job it is sold for, judged against its published specifications and what owners report in daily use, and whether its size and setup suit the buyer's situation.",
  "Build Quality and Durability": "Materials, construction, finish and the warranty a maker is willing to put behind the product, weighed against patterns in how similar products age.",
  "Ease of Use": "Setup effort, controls, cleaning and maintenance, and how much of the product's value depends on the owner learning workarounds.",
  "Features and Specifications": "Whether the features on the listing are useful in practice, and which specifications actually decide the buy compared with headline numbers.",
  "Owner Feedback Patterns": "Recurring themes in published owner feedback, such as repeated praise or repeated failure points. We read for patterns and never republish ratings or review counts.",
  "Value for Money": "What a product delivers relative to the other picks in the same comparison, across its expected service life, not just on delivery day.",
};

export default function HowWeReviewPage() {
  return (
    <>
      <section className="bg-brand text-ink-inverse relative overflow-hidden">
        <div className="absolute inset-0 slr-texture" aria-hidden="true" />
        <Container className="relative py-16 max-w-4xl">
          <p className="slr-label uppercase text-cta mb-3">Methodology</p>
          <h1 className="text-white mb-4">How we rate the products we recommend</h1>
          <p className="text-lg text-white/70 max-w-2xl">
            Every guide follows the same documented process. Here is what we look at, how much each factor counts, and what our Sensei Score does and does not mean.
          </p>
        </Container>
      </section>
      <Container className="py-14 max-w-4xl">
        <h2 className="mb-6">The Sensei Score</h2>
        <div className="space-y-4 mb-14">
          {RATING_CRITERIA.map((c) => (
            <div key={c.label} className="rounded-card border border-border bg-surface p-5">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg">{c.label}</h3>
                <span className="slr-label text-cta text-sm">{c.weight}%</span>
              </div>
              <div className="h-1.5 rounded-full bg-bg mb-3"><div className="h-1.5 rounded-full bg-cta" style={{ width: `${c.weight * 3.33}%` }} /></div>
              <p className="text-sm text-ink-secondary leading-relaxed">{detail[c.label]}</p>
            </div>
          ))}
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="rounded-card border border-border bg-surface p-5">
            <h3 className="text-lg mb-2">Our sources</h3>
            <p className="text-sm text-ink-secondary leading-relaxed">Manufacturer specification sheets and documentation, published certifications and safety listings, owner feedback patterns and side-by-side comparison of competing models.</p>
          </div>
          <div className="rounded-card border border-border bg-surface p-5">
            <h3 className="text-lg mb-2">What it is not</h3>
            <p className="text-sm text-ink-secondary leading-relaxed">The Sensei Score is an editorial assessment. We do not claim lab measurements or hands-on testing of every model, and we never publish fake star ratings or prices.</p>
          </div>
          <div className="rounded-card border border-border bg-surface p-5">
            <h3 className="text-lg mb-2">Affiliate independence</h3>
            <p className="text-sm text-ink-secondary leading-relaxed">We earn commissions through Amazon links. Rankings are never sold, and commission rates play no part in which product we recommend.</p>
          </div>
          <div className="rounded-card border border-border bg-surface p-5">
            <h3 className="text-lg mb-2">Corrections</h3>
            <p className="text-sm text-ink-secondary leading-relaxed">Specs change between model years. If you spot an error, tell us through the contact page and we will verify and update the guide.</p>
          </div>
        </div>
      </Container>
    </>
  );
}
