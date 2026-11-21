# SenseiReview rounds

## RESUME 2026-11-21 (session paused by the user)

### Done
- Project cloned from sweetlivingroom, rebranded (Japanese-inspired Modern Editorial:
  charcoal #222A32, ivory #F5F1E8, vermilion #B94A3A, sage #87918A), author Brianna Cole,
  homepage hero + photo category tiles, favicon, "| Rated by SenseiReview" on best titles.
- Info round (50 topics in docs/info-topics.tsv): all 50 written, all PASS check-article
  (scripts/info/work/<slug>.html). **32 published** (registered in data/guides.ts +
  data/dynamic-guides-registry.ts, build passed, no dashes/prices/404 images).
- **18 info articles NOT published: missing images.** 39 rows listed in
  `docs/rounds/missing-images.tsv` (slug, filename, what the photo shows, imgur link,
  imgur account). The user fills the Imgur columns.
- Best round (20 topics in scripts/clone/source-index.json, Stage A done, compact files
  exist). **10 specs finished, selfcheck + audit ok, NOT registered:**
  best-adjustable-dumbbells best-air-fryers best-cast-iron-skillets best-dehumidifiers
  best-humidifiers best-impact-drivers best-massage-guns best-robot-vacuums
  best-stud-finders best-yoga-mats
- **10 best guides not written yet:** best-noise-cancelling-headphones best-power-banks
  best-usb-c-chargers best-mesh-wifi-systems best-cordless-drills best-rowing-machines
  best-pressure-washers best-leaf-blowers best-pruning-shears best-garden-hoses

### Remaining steps
1. Missing images: for each filled row of missing-images.tsv download the Imgur image
   to public/images/articles/<filename> as webp (sharp, width 1200) and append a credits
   row `filename<TAB><TAB>imgurPage<TAB>account<TAB>Imgur (owner permission by user)<TAB>Imgur`
   to scripts/info/work/credits.tsv. Rows left empty: retry
   `node scripts/info/auto-images.mjs --fast <slug>` with a different subject in
   scripts/info/subjects.json, or drop that <figure> (hero must exist).
   Then `node scripts/info/build-article.mjs scripts/info/work/<slug>.html scripts/info/work/credits.tsv`.
2. Write the 10 remaining best guides (2 Sonnet writers max, docs/BEST-GUIDE-BRIEF-LEAN.md).
3. Register all 20 best guides (scripts/register-new-guides.mjs or
   register-dynamic-guide.mjs, see CLAUDE.md section 2).
4. Fix app/not-found.tsx: still uses the old blue colour scheme.
5. Gate (CLAUDE.md sections 4d and 5), local preview, report to the user. Never push
   without approval.

### List unfinished work
```bash
cd senseireview
for s in $(cut -f1 docs/info-topics.tsv); do grep -q "\"$s\"" data/dynamic-guides-registry.ts || echo "info unpublished: $s"; done
for s in $(node -e 'require("./scripts/clone/source-index.json").forEach(r=>console.log(r.slug))'); do [ -f scripts/clone/work/$s.spec.json ] || echo "best unwritten: $s"; grep -q "\"$s\"" data/dynamic-guides-registry.ts || echo "best unregistered: $s"; done
```
