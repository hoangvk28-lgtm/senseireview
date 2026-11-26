// Registers guide data files into the legacy static array (data/guides.ts)
// so they appear in the sitemap and /guide index.
// Usage: node scripts/register-new-guides.mjs <slug1> <slug2> ...
import { readFileSync, writeFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
const slugs = process.argv.slice(2);

if (slugs.length === 0) {
  console.error("Usage: node scripts/register-new-guides.mjs <slug1> <slug2> ...");
  process.exit(1);
}

// data/guides/<slug>.ts carries real TypeScript (exported interfaces, annotated
// consts), so Node cannot import it: the .ts extension is refused outright, and
// a copy renamed .mjs fails to parse. Only a handful of fields are needed here
// and build-guide.mjs writes them all as JSON string literals, so read them out
// of the source text instead of executing the module.
function loadGuide(slug) {
  const src = readFileSync(resolve(ROOT, `data/guides/${slug}.ts`), "utf-8");
  const str = (name) => {
    const m = src.match(new RegExp(`^export const ${name}(?::[^=]+)? = ("(?:[^"\\\\]|\\\\.)*");`, "m"));
    return m ? JSON.parse(m[1]) : undefined;
  };
  const block = src.match(/^export const relatedGuides(?::[^=]+)? = \[([\s\S]*?)^\];/m);
  const relatedGuides = block
    ? [...block[1].matchAll(/href:\s*("(?:[^"\\]|\\.)*")/g)].map((m) => ({ href: JSON.parse(m[1]) }))
    : [];
  const mod = { relatedGuides };
  for (const k of ["guideSlug", "guideTitle", "categorySlug", "metaDescription", "mainKeyword", "heroImage", "lastUpdated", "readTime"]) {
    mod[k] = str(k);
  }
  for (const k of ["guideSlug", "guideTitle", "metaDescription", "heroImage"]) {
    if (!mod[k]) throw new Error(`${slug}: could not read "${k}" from data/guides/${slug}.ts`);
  }
  return mod;
}

async function main() {
  const entries = [];
  // Registering a slug twice would put a duplicate entry in the sitemap and index.
  const already = readFileSync(resolve(ROOT, "data/guides.ts"), "utf-8");
  for (const slug of slugs) {
    if (already.includes(`slug: "${slug}"`)) {
      console.log(`- ${slug}: already in data/guides.ts, skipped`);
      continue;
    }
    const mod = loadGuide(slug);
    const kw = mod.mainKeyword || slug.replace(/^best-/, "").replace(/-/g, " ");
    const subKeywords = [kw, `${kw} guide`, `best ${kw}`];
    const entry = `  {
    title: ${JSON.stringify(mod.guideTitle)},
    slug: ${JSON.stringify(mod.guideSlug)},
    categorySlug: ${JSON.stringify(mod.categorySlug || "")},
    subcategorySlug: "",
    description: ${JSON.stringify(mod.metaDescription)},
    mainKeyword: ${JSON.stringify(kw)},
    subKeywords: ${JSON.stringify(subKeywords)},
    heroImage: ${JSON.stringify(mod.heroImage)},
    lastUpdated: ${JSON.stringify(mod.lastUpdated)},
    author: "Brianna Cole",
    readTime: ${JSON.stringify(mod.readTime)},
    recommendedProductIds: [],
    sections: [],
    faq: [],
    relatedGuideSlugs: ${JSON.stringify((mod.relatedGuides || []).map((r) => r.href.replace("/guide/", "")))},
    buyingCriteria: [],
  },`;
    entries.push(entry);
  }

  const guidesPath = resolve(ROOT, "data/guides.ts");
  const content = readFileSync(guidesPath, "utf-8");
  const marker = "\n];";
  const lastIdx = content.lastIndexOf(marker);
  if (lastIdx === -1) throw new Error("Could not find closing marker in guides.ts");
  const newContent = content.slice(0, lastIdx) + "\n" + entries.join("\n") + content.slice(lastIdx);
  writeFileSync(guidesPath, newContent, "utf-8");
  console.log(`Registered ${entries.length} guides into data/guides.ts`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
