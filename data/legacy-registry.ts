// Restored root-level article URLs (old paths that still carry backlinks).
// Empty on a fresh site. When the first entry is added, restore the route from
// senseireview's app/(site)/[legacySlug] (an empty generateStaticParams
// fails a static export build). Literal imports only, never a template literal.
export const legacyLoaders: Record<string, () => Promise<Record<string, unknown>>> = {};

export const legacySlugs = Object.keys(legacyLoaders);
