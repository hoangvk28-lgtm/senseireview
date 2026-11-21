import Link from "next/link";
import { categories } from "@/data/categories";

const iconMap: Record<string, React.ReactNode> = {
  "home-kitchen": (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m3 12 9-9 9 9M5 10v10h14V10M9 20v-6h6v6" />
    </svg>
  ),
  "tech-electronics": (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <rect x="3" y="5" width="18" height="12" rx="2" strokeLinecap="round" strokeLinejoin="round" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 21h8M12 17v4" />
    </svg>
  ),
  "health-fitness": (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s-7-4.5-9-9a5 5 0 0 1 9-3 5 5 0 0 1 9 3c-2 4.5-9 9-9 9Z" />
    </svg>
  ),
  "outdoor-garden": (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 19c0-9 5-14 15-14 0 10-5 15-14 15M5 19l8-8" />
    </svg>
  ),
  "tools-diy": (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M14.7 6.3a4 4 0 0 0-5 5L3 18l3 3 6.7-6.7a4 4 0 0 0 5-5l-2.5 2.5-2.5-.5-.5-2.5 2.5-2.5Z" />
    </svg>
  ),
};


export function CompareTools() {
  return (
    <section className="py-14 border-t border-border">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-brand">Compare</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-ink mt-2 tracking-tight">
            Side-by-Side Comparisons
          </h2>
          <p className="text-ink-secondary mt-2 leading-relaxed max-w-2xl">
            Every comparison uses the same Sensei Score criteria: fit for purpose, build quality, ease of use and value, so results stay comparable across categories.
          </p>
        </div>
        <Link prefetch={false}
          href="/compare"
          className="text-sm font-semibold text-brand hover:text-brand-dark transition-colors shrink-0 flex items-center gap-1"
        >
          Full comparison page
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="m9 18 6-6-6-6" />
          </svg>
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {categories.map((cat) => (
          <div
            key={cat.slug}
            className="relative flex flex-col gap-4 p-5 rounded-card border bg-bg border-border opacity-70"
          >
            {/* Icon */}
            <div className="w-11 h-11 rounded-lg flex items-center justify-center bg-border text-ink-muted">
              {iconMap[cat.slug]}
            </div>

            {/* Tag */}
            <span className="self-start text-xs font-semibold px-2.5 py-0.5 rounded-badge bg-bg text-ink-muted border border-border">
              Coming soon
            </span>

            <div className="flex-1">
              <h3 className="font-bold text-ink text-sm mb-2">Compare {cat.name}</h3>
              <p className="text-xs text-ink-secondary leading-relaxed">{cat.shortDescription}</p>
            </div>

            <span className="mt-auto text-sm text-ink-muted font-medium">Comparisons in research</span>
          </div>
        ))}
      </div>
    </section>
  );
}
