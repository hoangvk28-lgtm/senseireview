# SenseiReview: brief for 20 informational guides

Give this whole document to the writer. Everything in it is a hard requirement
unless it says "prefer" or "optional". All 20 articles are written in one run,
each delivered as its own `.html` file. See section 7 for the output format.

---

## 1. The site

**SenseiReview.com** ("Know Better. Choose Better.") publishes independent
product research and buying advice across five categories: Home & Kitchen,
Tech & Electronics, Health & Fitness, Outdoor & Garden, and Tools & DIY. It
earns affiliate commission on Amazon links. It is not a store and it does not
sell anything. Brand personality: knowledgeable, thoughtful, practical,
trustworthy.

**Reader:** a practical shopper about to spend real money on a product and
worried about getting it wrong. They are not engineers. They respond to
numbers with units, plain explanations of how a thing works, and honest
tradeoffs, not to marketing copy.

**Voice:** a careful, experienced editor explaining a decision to someone who
asked. Direct, concrete, unhurried. Never breathless, never a listicle voice,
never addressing the reader as "folks" or opening with a rhetorical question.

**What these 20 articles are:** informational guides that answer a question.
They are not product roundups. A separate set of "best X" articles handles
product recommendations, so these articles explain the underlying decision and
link to a roundup where one exists.

---

## 2. The non-negotiable rules

Breaking any of these means the article is sent back.

### Honesty

1. **Never claim hands-on testing.** The site does not test products. Banned:
   "we tested", "we tried", "in our lab", "we measured", "our testing", "hands-on".
   Use instead: "we evaluated", "we researched", "based on published
   specifications", "based on patterns in owner feedback", "our analysis".
2. **Never invent a number, a standard or a regulation.** If research does not
   support a figure, leave it out or describe the range qualitatively. A
   plausible-sounding invented statistic is the worst failure mode here.
3. **When the honest answer is "nobody knows", say so.** Several of these topics
   have no documented answer. Saying that plainly, and explaining what the
   competing explanations are and why neither is verified, beats a confident
   invented history. It is also the thing that differentiates the article.
4. **Do not expose the research process.** No "according to a study", no "experts
   say", no citations in the prose. State the knowledge as established buying
   knowledge, the way a reference book does.

### Commercial compliance

5. **No dollar figures anywhere.** Not "$300 sofa", not "around $1,200", not a
   price range. Prices change and a stale number destroys trust. Use relative
   terms instead: "the budget end of the category", "a premium price relative to
   a flat-pack frame".
6. **No star ratings and no review counts.** Not "4.6 stars", not "over 12,000
   reviews". Amazon's terms restrict republishing those, and it is an
   account-level risk. Qualitative framing is fine: "well reviewed", "a long
   track record", "a newer listing with a short history".
7. **No brand bashing and no unverifiable brand claims.** Naming a brand is fine
   when stating a verifiable fact about a product type. Claiming a brand's
   products fail is not.

### Formatting

8. **No em dashes and no en dashes. Anywhere.** Not in the body, not in the meta
   block, not in alt text. Use a comma, a colon, a period, or rewrite. This is
   checked automatically and is the single most common reason for a rejection.
9. **Plain ASCII punctuation.** No full-width brackets, no smart quote characters
   that break the build, no emoji.
10. **No price, no rating, no "sponsored" claims in headings.**

### Health and safety topics

11. Where a topic touches health (pain, injury, child development, furniture
    tip-over), the article manages comfort and decisions, it does not diagnose or
    treat. Include a short, specific section on when to consult a professional,
    with concrete warning signs. Do not hedge the entire article into
    uselessness; be specific about the practical advice and specific about the
    limits.

---

## 3. Length and structure

**Target 3,000 to 3,300 words of body prose.** Below 2,900 is rejected. The
count excludes the meta block and figure captions.

Deliver one `.html` file per article, in exactly this shape:

```html
<!--meta
slug: what-is-cadr-air-purifier
title: What Is CADR? How to Read an Air Purifier Rating
metaTitle: What CADR Means on an Air Purifier
metaDescription: CADR explained: what the three numbers measure, how they map to room size and air changes per hour, and why the coverage claim on the box is optimistic.
category: home-kitchen
keyword: what is cadr
readTime: 13 min
hero: cadr-air-purifier-room.webp | A tower air purifier running in the corner of a room
quickAnswer: CADR is the volume of filtered air a purifier delivers per minute. ...
related: Best air purifiers for large rooms|/guide/best-air-purifiers-for-living-rooms; How we rate the products we recommend|/how-we-review
shop: Best air purifiers for large rooms|/guide/best-air-purifiers-for-living-rooms|Six purifiers compared on CADR, filters and noise
-->

<p>Opening paragraph...</p>

<h2 id="section-slug">Section heading</h2>
...
```

### The meta block

| Field | Rule |
|---|---|
| `slug` | lowercase kebab-case, matches the assigned topic exactly |
| `title` | the on-page H1. Descriptive, no year needed on info guides |
| `metaTitle` | **47 characters maximum.** The site appends " \| SenseiReview" (13 chars) and the total must stay under 60. Count the characters, do not estimate |
| `metaDescription` | **120 to 160 characters.** Count them. This also renders as the page subtitle, so it must read as a sentence, not as keywords |
| `category` | one of: `home-kitchen`, `tech-electronics`, `lighting`, `outdoor-garden`, `tools-diy` |
| `keyword` | the main search phrase the article targets |
| `readTime` | e.g. `14 min`, roughly words ÷ 225 |
| `hero` | `filename.webp \| alt text`. **Invent the filename**, describe the photo you want. The images are sourced separately; just name the file and say what it must show |
| `quickAnswer` | 60 to 110 words. A complete, standalone answer to the title question, written so it could be lifted as a featured snippet. No "read on to find out" |
| `related` | 2 to 4 entries, `Title\|/path`, separated by `;` |
| `shop` | optional, `Title\|/path\|one-line blurb`, only when a matching roundup exists |

### The body

- **7 to 12 `<h2>` sections**, every one with a unique `id` attribute in
  kebab-case. The id drives the table of contents, so a missing one breaks the page.
- **One section must be `<h2 id="faq">`** with **5 or more** `<h3>` questions,
  each answered in 2 to 4 real sentences. Cover different angles, not five
  rewordings of the title. At minimum: a sizing or measurement question, a
  cost-of-ownership question, a common misconception, and a "what if my
  situation is different" question.
- **End with `<h2 id="bottom-line">`**, 2 to 3 paragraphs that commit to an
  answer. Do not restate the article; tell the reader what to do.
- Allowed tags: `<p> <h2> <h3> <ul> <ol> <li> <strong> <a> <figure> <img>
  <figcaption> <table> <thead> <tbody> <tr> <th> <td>`. Nothing else, no
  inline styles, no classes, no `<div>`.
- **Use at least one `<table>`** where the content is genuinely a lookup: a
  size-to-recommendation map, a material comparison, a clearance chart. A table
  that is just prose in cells is worse than a paragraph.
- Paragraphs of 40 to 120 words. Avoid one-sentence paragraphs used for drama.

### Images

Specify **the hero plus 2 to 4 in-body figures**. Do not source them; name them
and describe them.

```html
<figure>
  <img src="/images/articles/cadr-hepa-filter.webp" alt="A pleated HEPA filter removed from an air purifier" />
  <figcaption>The pleated HEPA media that sets how much air a purifier can clean.</figcaption>
</figure>
```

- `src` is always `/images/articles/<kebab-name>.webp`.
- `alt` describes the photo for a screen reader, 15 characters minimum.
- `figcaption` says what the photo shows and why it matters, 20 characters minimum.
- **Never put a photographer or source credit in a caption.** Credits are
  handled once, at the end of the page, automatically.
- Every photo must be something a real camera could have taken of the real
  subject. Do not request illustrations, renders, diagrams or infographics.

---

## 4. The quality bar

A section passes if it could not be copied into another article in the same
category without changing a word. Specifically:

- **Numbers with units, in the prose.** "a CADR of 300 cfm", "18V and 5Ah",
  "35 dB on the lowest setting", "a 12 inch grill grate". An article about sizing
  that never states a size has failed.
- **Name the tradeoff, then resolve it.** Every recommendation has a cost. State
  it, then say who should accept it. "A brushless drill costs more but runs cooler
  and longer per charge, so for anyone driving more than a handful of screws a
  month, the premium pays for itself."
- **Explain mechanism, not just rules.** Not "clean the filter", but "a clogged
  pre-filter raises the pressure drop across the fan, so airflow and CADR fall
  long before the purifier looks dirty".
- **Anticipate the reader's real situation.** A rented flat, a small
  budget, a shared household, a product used daily rather than occasionally. These are where
  competitor articles stop and where this site earns the ranking.
- **Surface the non-obvious failure.** Each article should contain at least two
  things the reader would not have thought to check. Those are the reason the
  page gets linked to.

**Self-check before delivering:** pick three sentences at random from the middle
of the article. If any of them would be equally true in an article about a
different product in the same category, rewrite that section.

---

## 5. Internal linking

- **At least 3 distinct internal links** in the body, placed where they genuinely
  help, with natural anchor text. Never "click here", never a bare URL.
- **Only link to paths on this list.** A link to a page that does not exist is an
  automatic rejection:
  - `/guide/best-air-purifiers-for-living-rooms` (the only best guide so far)
  - `/categories/home-kitchen`, `/categories/tech-electronics`,
    `/categories/health-fitness`, `/categories/outdoor-garden`,
    `/categories/tools-diy`
  - `/how-we-review`, `/about-us`, `/guide`, `/guide/all`
  - **Plus any slug in `docs/info-topics.tsv`**, as `/guide/<slug>`. Linking
    between these topics is encouraged; they are being published together.
- **Never a trailing slash.** `/how-we-review` not `/how-we-review/`.
- External links: only when citing a standard or a regulator, and sparingly.
  Never link to a competitor's buying guide or to a retailer other than Amazon.

---

## 6. The topics

The topic list lives in `docs/info-topics.tsv`: one row per article, tab
separated: slug, category, writer letter, angle and must-cover notes. The slug
is fixed. The angle says what the article must do that competing pages do not.

---

## 7. Delivery

**Write all 20 articles in this one run.** Do not stop after a sample, do not ask
which to start with, and do not wait for approval between articles. Work through
the topic list in file order.

One `.html` file per article, named `<slug>.html`, using the slug exactly as it
appears in the topic table. Output them one after another, each in its own code
block, with the filename on the line immediately above the block:

```
=== FILE: what-is-cadr-air-purifier.html ===
<!--meta
...
-->
<p>...</p>
```

Then continue straight into the next file. Nothing between files except the next
`=== FILE: ... ===` line: no commentary, no summaries, no "here is the next one",
no progress notes.

**If the response runs out of room**, stop at the end of the last complete file
and say only `CONTINUE FROM #<n>`. On the next turn, resume at that article and
keep going. Never deliver a partial article, and never shorten later articles to
fit them in.

**Every article gets the same effort.** Articles 15 to 20 must be as specific,
as long and as well researched as articles 1 to 5. Shortening the back half of
the batch is the most common failure when writing twenty at once, and it is the
first thing that gets checked.

**Reuse nothing between articles.** Twenty articles for one site will be read
side by side, so a repeated sentence skeleton is obvious and reads as spam to a
search engine. Vary the opening framing across the set: some articles open on a
mistake, some on a measurement, some on a question a reader actually asks, some
on what a listing leaves out. Never open two articles the same way, and never
reuse a paragraph structure you have already used in this batch.

Before sending each file, confirm:

Before sending each file, confirm:

- [ ] Body is 3,000 to 3,300 words
- [ ] Zero em dashes and zero en dashes in the entire file
- [ ] `metaTitle` is 47 characters or fewer, counted
- [ ] `metaDescription` is 120 to 160 characters, counted
- [ ] Every `<h2>` has a unique `id`
- [ ] There is an `<h2 id="faq">` with 5 or more `<h3>` questions
- [ ] There is an `<h2 id="bottom-line">`
- [ ] At least one real `<table>`
- [ ] Hero plus 2 to 4 `<figure>` blocks, each with alt and figcaption, no credits in captions
- [ ] At least 3 internal links, all from the allowed list, none with a trailing slash
- [ ] No dollar figures, no star ratings, no review counts
- [ ] No claim of hands-on testing
- [ ] Three random sentences from the middle each contain something specific to
      this topic that could not be said about a different product

The site runs `node scripts/info/check-article.mjs <file>` on delivery, which
verifies every mechanical item on that list automatically. Editorial depth is
reviewed by hand.
