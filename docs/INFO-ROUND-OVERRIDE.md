# Info round: overrides to INFO-GUIDE-BRIEF.md

Read `docs/INFO-GUIDE-BRIEF.md` once (sections 1 to 5 apply in full), then this file.
Where they differ, this file wins.

## Scope and length
- Topics: `docs/info-topics.tsv` (slug, category, writer A/B, angle). Write only your
  letter's rows, in file order. Column 4 is the angle and must-cover list.
- **Body 2,500 to 2,700 words** (user rule 2026-11-21; checker fails below 2,450,
  warns above 2,750). 7 to 10 h2 sections, FAQ with 5 h3 questions, bottom-line.
  Same depth bar: numbers with units, tradeoffs, mechanisms, two non-obvious
  failures per article. Cut repetition, not substance.
- No delivery file: write each article straight to `scripts/info/work/<slug>.html`
  (meta block + body, exact format of brief section 3), in ONE Write call.
- `metaTitle` at most 47 characters, `metaDescription` 120 to 160. Count them.

## Internal links
- Allowed: the brief section 5 list, plus `/guide/<slug>` for **any slug in
  docs/info-topics.tsv** (the whole round publishes together). **4 to 6 body links
  per article**, natural anchors, prefer close siblings in the same category
  (drill vs impact driver <-> brushless motors <-> battery Ah), plus at least one
  link to the category page `/categories/<category>`.
- `related:` 2 to 4 entries. `shop:` only for `/guide/best-air-purifiers-for-living-rooms`
  (the only best guide so far), and only on articles where it genuinely fits.

## Research (keep it cheap)
- Use what you know as established buying knowledge. Use WebSearch only when a
  specific figure is needed and you are not sure of it (at most ~1 search per article,
  zero is fine). Never invent a figure, standard or regulation; describe
  qualitatively instead, or say plainly that no source documents it.

## Images (real photos, Wikimedia Commons)
After the article passes the checker:
1. `python -I scripts/info/contact.py scripts/info/work/sheet.jpg "term 1" "term 2" "term 3"`
   prints numbered candidates (licence already filtered) and saves one contact sheet.
   Use short concrete object names as terms ("cordless drill", "garden hose").
2. Read the sheet image once and pick a hero + at least 2 figure photos that really
   show the subject (the product or the part being explained). Drop anything
   off-topic, museum or historical, watermarked, or a render/illustration/diagram.
   One sheet per article; if the first sheet is weak, at most one more search.
3. Rename the `hero:` filename and figure `src` names in the html to match what you
   picked if needed (kebab-case `.webp`, unique across the whole round: prefix with
   a short slug word). Adjust alt/figcaption to describe the actual photo. Drop a
   figure (keep at least 2) rather than use a wrong photo.
4. Append one line per image to `scripts/info/work/manifest-<A|B>.tsv`:
   `filename.webp<TAB>commonsPageUrl<TAB>author<TAB>licence`
   Do NOT download images; the coordinator runs fetch-images.

## Per article loop
cd to the repo root before any command. Write html -> `node scripts/info/check-article.mjs scripts/info/work/<slug>.html`
-> fix with Edit until PASS -> images -> next article. Do not build, register, commit
or touch anything outside `scripts/info/work/`.
