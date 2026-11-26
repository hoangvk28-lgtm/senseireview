// Appends a round TSV (slug<TAB>category<TAB>mainKeyword) to scripts/clone/source-index.json as "todo" rows.
// Skips a slug already in the index or already published in data/guides.ts.
// Usage: node scripts/clone/add-round.mjs scripts/clone/list-r8.tsv
import { readFileSync, writeFileSync } from "fs";
const tsv = process.argv[2];
if (!tsv) { console.error("Usage: node scripts/clone/add-round.mjs <list.tsv>"); process.exit(1); }
const IDX = "scripts/clone/source-index.json";
const rows = JSON.parse(readFileSync(IDX, "utf-8"));
const have = new Set(rows.map((r) => r.slug));
const published = readFileSync("data/guides.ts", "utf-8");
let added = 0;
const skipped = [];
for (const line of readFileSync(tsv, "utf-8").split(/\r?\n/)) {
  if (!line.trim()) continue;
  const [slug, category, mainKeyword] = line.split("\t").map((s) => (s || "").trim());
  if (!slug || !category || !mainKeyword) { skipped.push(`${slug || line} (bad row)`); continue; }
  if (have.has(slug)) { skipped.push(`${slug} (already in index)`); continue; }
  if (published.includes(`"${slug}"`)) { skipped.push(`${slug} (already published)`); continue; }
  rows.push({ slug, category, mainKeyword, title: "", asins: [], status: "todo" });
  have.add(slug);
  added++;
}
writeFileSync(IDX, JSON.stringify(rows, null, 1));
console.log(`added ${added} todo rows, index now ${rows.length}`);
if (skipped.length) console.log("skipped:\n  " + skipped.join("\n  "));
