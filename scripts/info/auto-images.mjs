#!/usr/bin/env node
// Zero-AI-token image step for info articles.
//
// For every image named in scripts/info/work/<slug>.html (hero + <figure><img>),
// search free-licence photo sources, download the best match as webp into
// public/images/articles/<filename>, and print credits.tsv rows for
// build-article.mjs. Also writes ONE contact sheet per run so a human (or the
// coordinator, with a single image read) can spot off-topic picks.
//
// Sources, in order:
//   0. Pixabay     (needs PIXABAY_API_KEY in .env.local; Pixabay licence, free commercial use)
//   1. Pexels      (needs PEXELS_API_KEY in .env.local; Pexels licence, free commercial use)
//   2. Openverse   (no key; CC0 / PDM / CC BY / CC BY-SA from Flickr, Wikimedia and more)
//   3. Wikimedia Commons search (no key; same licence filter)
//   4. Imgur       (needs IMGUR_CLIENT_ID; no licence, user clears use with owners)
//
// Usage:
//   node scripts/info/auto-images.mjs [slug ...] > scripts/info/work/credits.tsv
//   (no slugs = every .html in scripts/info/work)
// Options: --force re-downloads files that already exist.

import { readFileSync, writeFileSync, existsSync, readdirSync, appendFileSync } from "node:fs";
import { join } from "node:path";
import sharp from "sharp";

const WORK = "scripts/info/work";
const OUT = "public/images/articles";
const UA = "SenseiReviewImageBot/1.0 (editorial research)";
const args = process.argv.slice(2);
const force = args.includes("--force");
const FAST = args.includes("--fast"); // Pixabay + Pexels only: no 429 waits
const slugs = args.filter((a) => !a.startsWith("--"));

// .env.local (PEXELS_API_KEY)
const env = {};
if (existsSync(".env.local")) {
  for (const l of readFileSync(".env.local", "utf8").split(/\r?\n/)) {
    const m = l.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
    if (m) env[m[1]] = m[2].replace(/^["']|["']$/g, "");
  }
}
const PEXELS = process.env.PEXELS_API_KEY || env.PEXELS_API_KEY;

const STOP = new Set("what how why when which does do vs versus explained guide compared comparison types choose choosing best size sizes a an the of on in at to for with and or by from into over under beside next its it is are be being this that these those showing shows shown close up closeup view side front top photo image picture held holding sitting standing set placed resting real typical modern small large two three one some several".split(" "));
const keywords = (s, n = 4) =>
  s.toLowerCase().replace(/[^a-z0-9\s-]/g, " ").split(/\s+/).filter((w) => w.length > 2 && !STOP.has(w)).slice(0, n).join(" ");

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const get = async (url, headers = {}) => {
  let last;
  for (let i = 0; i < 3; i++) {
    try {
      const r = await fetch(url, { headers: { "User-Agent": UA, ...headers }, signal: AbortSignal.timeout(20000) });
      if (r.ok) return r;
      last = new Error(`${r.status} ${url.slice(0, 80)}`);
      if (r.status !== 429 && r.status < 500) break;
    } catch (e) { last = e; }
    await sleep(2500 * (i + 1));
  }
  throw last;
};

const PIXABAY = process.env.PIXABAY_API_KEY || env.PIXABAY_API_KEY;
async function pixabay(q) {
  if (!PIXABAY) return [];
  const r = await get(`https://pixabay.com/api/?key=${PIXABAY}&image_type=photo&orientation=horizontal&safesearch=true&per_page=20&q=${encodeURIComponent(q)}`);
  const d = await r.json();
  return (d.hits || []).map((p) => ({
    url: p.largeImageURL, w: p.imageWidth, h: p.imageHeight,
    author: p.user, license: "Pixabay Content License", page: p.pageURL, via: "Pixabay", text: p.tags || "",
  }));
}

// Imgur (user decision 2026-11-21): images carry no reuse licence; the user
// handles permission with owners. Credited at the end of the article as
// "Imgur / <account>". Needs IMGUR_CLIENT_ID in .env.local. Last resort source.
const IMGUR = process.env.IMGUR_CLIENT_ID || env.IMGUR_CLIENT_ID;
async function imgur(q) {
  if (!IMGUR) return [];
  const r = await get(`https://api.imgur.com/3/gallery/search/top?q=${encodeURIComponent(q)}`, { Authorization: `Client-ID ${IMGUR}` });
  const d = await r.json();
  return (d.data || []).flatMap((g) => {
    const imgs = g.is_album ? (g.images || []).slice(0, 3) : [g];
    return imgs
      .filter((i) => i && !i.animated && !i.nsfw && !g.nsfw && /^image\/(jpeg|png|webp)$/.test(i.type || ""))
      .map((i) => ({
        url: i.link, w: i.width || 0, h: i.height || 0,
        author: g.account_url || "Imgur user", license: "Imgur (used with owner permission pending)",
        page: `https://imgur.com/${g.is_album ? "a/" : ""}${g.id}`, via: "Imgur",
        text: `${g.title || ""} ${i.description || ""} ${(g.tags || []).map((t) => t.name).join(" ")}`,
      }));
  });
}

async function pexels(q) {
  if (!PEXELS) return [];
  const r = await get(`https://api.pexels.com/v1/search?per_page=15&orientation=landscape&query=${encodeURIComponent(q)}`, { Authorization: PEXELS });
  const d = await r.json();
  return (d.photos || []).map((p) => ({
    url: p.src.large2x || p.src.large, w: p.width, h: p.height,
    author: p.photographer, license: "Pexels License", page: p.url, via: "Pexels", text: (p.alt || "") + " " + p.url,
  }));
}

async function openverse(q) {
  const r = await get(`https://api.openverse.org/v1/images/?q=${encodeURIComponent(q)}&license=by,by-sa,cc0,pdm&source=wikimedia,stocksnap,rawpixel,nasa,smithsonian_american_art_museum,europeana&page_size=20&mature=false`);
  const d = await r.json();
  return (d.results || []).map((p) => ({
    url: p.url, w: p.width || 0, h: p.height || 0,
    author: p.creator || "Unknown", page: p.foreign_landing_url || p.url, via: "Openverse", text: (p.title || "") + " " + (p.tags || []).map((t) => t.name).join(" "),
    license: p.license === "cc0" ? "CC0" : p.license === "pdm" ? "Public domain" : `CC ${p.license.toUpperCase()} ${p.license_version || ""}`.trim(),
  }));
}

async function commons(q) {
  const u = "https://commons.wikimedia.org/w/api.php?" + new URLSearchParams({
    action: "query", format: "json", generator: "search", gsrsearch: `filetype:bitmap ${q}`,
    gsrnamespace: "6", gsrlimit: "15", prop: "imageinfo", iiprop: "url|extmetadata|size", iiurlwidth: "1400",
  });
  const d = await (await get(u)).json();
  const ok = /^(cc0|public domain|pd|cc by(-sa)? ?[0-9.]*)/i;
  return Object.values(d.query?.pages || {}).flatMap((p) => {
    const ii = p.imageinfo?.[0]; if (!ii) return [];
    const md = ii.extmetadata || {};
    const lic = (md.LicenseShortName?.value || "").trim();
    if (!ok.test(lic)) return [];
    const author = (md.Artist?.value || "Unknown").replace(/<[^>]+>/g, "").trim().slice(0, 80);
    return [{ url: ii.thumburl || ii.url, w: ii.width, h: ii.height, author, license: lic, page: ii.descriptionurl, via: "Wikimedia Commons", text: p.title }];
  });
}

const BAD = /(drawing|diagram|illustration|logo|icon|map|chart|poster|patent|engraving|painting|cartoon|svg|museum|19[0-6]\d|18\d\d)/i;
const used = new Set();
function pick(list) {
  return list.find((c) => c.url && !used.has(c.url) && c.w >= 800 && c.w >= c.h * 0.9 && !BAD.test(c.url + " " + c.page));
}

// Search each query on each source; try up to 4 candidates per result list and
// return the first one that actually downloads (Flickr/Commons may 403/429).
// Relevance gate: every subject word (singularised) must appear in the photo's tags/title.
const stem = (w) => w.toLowerCase().replace(/(ies)$/, "y").replace(/(es|s)$/, "");
const relevant = (c, subject) => {
  const t = (c.text || "").toLowerCase().split(/[^a-z0-9]+/).map(stem);
  return subject.split(" ").filter(Boolean).every((w) => t.includes(stem(w)));
};
async function findImage(queries, dest, subject) {
  for (const q of queries) {
    if (!q) continue;
    for (const src of (FAST ? [pixabay, pexels] : [pixabay, pexels, openverse, commons, imgur])) {
      let list;
      try { list = await src(q); } catch (e) { process.stderr.write(`  ${src.name} "${q}": ${e.message}\n`); continue; }
      const cands = list.filter((c) => c.url && !used.has(c.url) && !used.has(c.page) && c.w >= 800 && c.w >= c.h * 0.9 && !BAD.test(c.url + " " + c.page) && relevant(c, subject)).slice(0, 4);
      for (const c of cands) {
        try {
          const r = await fetch(c.url, { headers: { "User-Agent": UA }, signal: AbortSignal.timeout(30000) });
          if (!r.ok) throw new Error(String(r.status));
          const buf = Buffer.from(await r.arrayBuffer());
          await sharp(buf).rotate().resize({ width: 1200, withoutEnlargement: true }).webp({ quality: 80 }).toFile(dest);
          used.add(c.url); used.add(c.page);
          return { ...c, query: q };
        } catch (e) { process.stderr.write(`  dl ${c.via} ${e.message}\n`); await sleep(String(e.message) === "429" ? 8000 : 1000); }
      }
    }
  }
  return null;
}

function imagesIn(html) {
  const meta = Object.fromEntries([...html.matchAll(/^\s*([a-zA-Z]+)\s*:\s*(.*)$/gm)].map((m) => [m[1], m[2].trim()]));
  const list = [];
  if (meta.hero) { const [file, alt = ""] = meta.hero.split("|").map((s) => s.trim()); list.push({ file, alt }); }
  for (const m of html.matchAll(/<img[^>]*src="\/images\/articles\/([^"]+)"[^>]*alt="([^"]*)"/g)) list.push({ file: m[1], alt: m[2] });
  return { meta, list };
}

const files = (slugs.length ? slugs.map((s) => `${s}.html`) : readdirSync(WORK).filter((f) => f.endsWith(".html")));
// Per-slug photo subject (scripts/info/subjects.json): every word must be in the photo's tags.
const SUBJECTS = existsSync("scripts/info/subjects.json") ? JSON.parse(readFileSync("scripts/info/subjects.json", "utf8")) : {};
const rows = [], sheet = [];
let ok = 0, miss = 0;
for (const f of files) {
  const html = readFileSync(join(WORK, f), "utf8");
  const { meta, list } = imagesIn(html);
  const topic = keywords(meta.keyword || f.replace(/\.html$/, "").replace(/-/g, " "), 3);
  for (const { file, alt } of list) {
    const dest = join(OUT, file);
    if (existsSync(dest) && !force) { process.stderr.write(`skip ${file} (exists)\n`); continue; }
    // subject = slug/keyword words that the alt text also names (e.g. "air purifier"),
    // falling back to the last two topic words; the photo's tags must contain it.
    const altWords = keywords(alt, 12).split(" ");
    const slugWords = keywords(f.replace(/.html$/, "").replace(/-/g, " ") + " " + (meta.keyword || ""), 8).split(" ");
    const slugKey = f.replace(/.html$/, "");
    let subject = SUBJECTS[slugKey] || [...new Set(slugWords.filter((w) => altWords.map(stem).includes(stem(w))))].slice(0, 2).join(" ");
    if (!subject) subject = slugWords.slice(-2).join(" ");
    const extra = altWords.filter((w) => !subject.includes(w)).slice(0, 1).join(" ");
    const subj1 = subject.split(" ").slice(-1)[0];
    const c = await findImage([extra ? `${subject} ${extra}` : "", subject], dest, subject)
      || (SUBJECTS[slugKey] ? null : await findImage([subj1], dest, subj1));
    await sleep(300);
    if (!c) { miss++; process.stderr.write(`MISS ${f} ${file} (alt: ${alt.slice(0, 60)})\n`); continue; }
    rows.push([file, "", c.page, c.author, c.license, c.via].join("\t"));
    appendFileSync(join(WORK, "credits-live.tsv"), rows[rows.length - 1] + "\n"); // survives an interrupted run
    sheet.push({ dest, label: `${file}  [${c.via}] q="${c.query}"` });
    ok++;
    process.stderr.write(`ok   ${file}  <- ${c.via} "${c.query}"\n`);
  }
}
process.stdout.write(rows.join("\n") + (rows.length ? "\n" : ""));
process.stderr.write(`\n${ok} downloaded, ${miss} missing\n`);

// one contact sheet, 6 per row, labelled with the file name
if (sheet.length) {
  const W = 240, H = 160, L = 18, cols = 6, rowsN = Math.ceil(sheet.length / cols);
  const tiles = await Promise.all(sheet.map(async (s, i) => {
    const img = await sharp(s.dest).resize(W, H, { fit: "cover" }).toBuffer();
    const label = Buffer.from(`<svg width="${W}" height="${L}"><rect width="100%" height="100%" fill="#000"/><text x="3" y="13" font-size="11" fill="#ff0" font-family="Arial">${String(i + 1)} ${s.dest.split(/[\\/]/).pop().slice(0, 34)}</text></svg>`);
    const x = (i % cols) * W, y = Math.floor(i / cols) * (H + L);
    return [{ input: label, left: x, top: y }, { input: img, left: x, top: y + L }];
  }));
  await sharp({ create: { width: cols * W, height: rowsN * (H + L), channels: 3, background: "#fff" } })
    .composite(tiles.flat()).jpeg({ quality: 70 }).toFile(join(WORK, "auto-sheet.jpg"));
  writeFileSync(join(WORK, "auto-sheet.txt"), sheet.map((s, i) => `${i + 1}\t${s.label}`).join("\n") + "\n");
  process.stderr.write(`contact sheet: ${WORK}/auto-sheet.jpg\n`);
}
