import Link from "next/link";

const quickLinks = [
  { label: "Home & Kitchen", href: "/categories/home-kitchen" },
  { label: "Tech & Electronics", href: "/categories/tech-electronics" },
  { label: "Health & Fitness", href: "/categories/health-fitness" },
  { label: "Outdoor & Garden", href: "/categories/outdoor-garden" },
  { label: "Tools & DIY", href: "/categories/tools-diy" },
  { label: "All Buying Guides", href: "/guide/all" },
];

// 404 in the SenseiReview identity: ivory page, oversized serif, vermilion sun.
export default function NotFound() {
  return (
    <div className="min-h-[100dvh] flex flex-col bg-bg">
      <div className="relative flex-1 flex flex-col items-center justify-center px-4 py-20 text-center overflow-hidden">
        <div className="absolute -right-24 -top-24 w-80 h-80 rounded-full bg-cta/90" aria-hidden="true" />

        <div className="relative z-10 max-w-lg mx-auto">
          <p className="flex items-center justify-center gap-3 slr-label uppercase text-ink-muted mb-6">
            <span className="inline-block w-8 h-px bg-cta" aria-hidden="true" />
            Error 404
            <span className="inline-block w-8 h-px bg-cta" aria-hidden="true" />
          </p>

          <h1 className="text-5xl sm:text-7xl tracking-tight mb-5 leading-none">
            Page not <em className="text-cta">found.</em>
          </h1>

          <p className="text-ink-secondary text-base sm:text-lg leading-relaxed mb-10 max-w-sm mx-auto">
            This page does not exist or has moved. Let us get you back to choosing the right product.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <Link prefetch={false} href="/" className="px-6 py-3 rounded-btn bg-ink hover:bg-cta text-white font-semibold transition-colors text-sm">
              Back to home
            </Link>
            <Link prefetch={false} href="/guide/all" className="px-6 py-3 rounded-btn border border-border-dark bg-surface hover:border-cta hover:text-cta text-ink font-semibold transition-colors text-sm">
              Browse all guides
            </Link>
          </div>

          <p className="slr-label uppercase text-ink-muted mb-4">Popular pages</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {quickLinks.map((link) => (
              <Link
                prefetch={false}
                key={link.href}
                href={link.href}
                className="px-3 py-2.5 rounded-btn bg-surface border border-border hover:border-cta hover:text-cta text-ink text-xs font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
