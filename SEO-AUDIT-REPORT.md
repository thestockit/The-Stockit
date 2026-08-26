# Deep SEO Audit Report — The Stockit

**Site:** https://thestockit.com
**Audit Date:** August 25, 2026
**Scope:** Full codebase technical SEO audit (Next.js App Router)
**Total Pages Audited:** 100+ (50+ route files, 49 blog posts, 20 tools, 9 cities, 5 hubs, ~25 service pages)

---

## Executive Summary

The Stockit has a solid SEO foundation — canonical tags, structured data, sitemap generation, and metadata utilities are well-built. However, **several critical issues are likely suppressing indexing** in Google Search Console. The biggest problems are: broken Open Graph image URLs (relative instead of absolute), missing `dateModified` signals, thin content on tool and service pages, heading hierarchy violations, and mobile menu links not server-rendered (invisible to crawlers).

| Severity | Count | Impact |
|----------|-------|--------|
| **Critical** | 8 | Directly preventing indexing or causing ranking loss |
| **High** | 9 | Significant SEO value leakage |
| **Medium** | 8 | Moderate ranking/CTR impact |
| **Low** | 5 | Minor improvements |

---

## CRITICAL Issues (Fix Immediately)

### 1. Open Graph Image URLs Are Relative — Crawlers Cannot Resolve Them

**Files:** `Data/Seo/seo-utils.js:33-39`, every page that calls `createMetadata()`

The `buildOpenGraph()` function passes the raw `image` parameter into the `images` array without prepending `SITE.baseUrl`. This means all OG images ship as relative paths:

```js
// Current (BROKEN)
images: [{ url: '/og/og-default.jpg', ... }]

// Required (CORRECT)
images: [{ url: 'https://thestockit.com/og/og-default.jpg', ... }]
```

**Impact:** Facebook, Twitter, LinkedIn, and Google Discover cannot fetch OG images. Social sharing previews are blank. Google's crawler may also fail to process the image for rich results.

**Fix:** Prepend `SITE.baseUrl` to the image URL in `buildOpenGraph()`:

```js
// Data/Seo/seo-utils.js — buildOpenGraph function
images: [
  {
    url: image?.startsWith('http') ? image : `${SITE.baseUrl}${image || BUSINESS.ogImage}`,
    width: 1200,
    height: 630,
    alt: title,
  },
],
```

---

### 2. Mobile Menu Links Are SSR-Disabled — Invisible to Crawlers

**File:** `components/Header.js:30-32`

```js
const MobileMenu = dynamic(() => import('./MobileMenu'), {
  ssr: false,  // ← PROBLEM
});
```

With `ssr: false`, the entire mobile navigation tree is only rendered client-side. While Googlebot executes JS, **Bing, Applebot, and other crawlers do not**. More importantly, the primary desktop `navLinks` array (Home, Hosting, Domains, Courses, Blog, Projects) is only **6 links** — there is no link to **Services**, any **tool page**, any **blog category**, or any **service sub-page** from the header.

**Impact:** Services, tools, and many internal pages are not discoverable through the main navigation. Crawl budget is wasted as Google has to discover these pages only through the sitemap and footer.

**Fix:**
1. Remove `ssr: false` from MobileMenu import (or make MobileMenu a server component).
2. Expand the desktop `navLinks` array to include Services and Tools.

---

### 3. Mobile Menu Component Missing from SSR — Crawlable Links

**File:** `components/Header.js` — The `navLinks` array only contains 6 items.

The header nav has no link to `/services`, `/free-tools`, or any tool page. These critical pages are only linked in the footer. The sitemap includes them, but internal linking from high-authority pages (header) is the strongest crawlability signal.

**Fix:** Add to `navLinks`:
```js
const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Hosting', href: '/hosting' },
  { label: 'Blog', href: '/blog' },
  { label: 'Tools', href: '/free-tools' },
  { label: 'Contact', href: '/contact' },
];
```

---

### 4. No `dateModified` Anywhere in the System

**Files:** `lib/mdx.ts`, `components/seo/BlogSchema.tsx`, `Data/Seo/seo-utils.js`

- The `BlogFrontmatter` interface has no `dateModified` field.
- `BlogSchema.tsx` sets `dateModified: datePublished` (line 30) — always identical to publish date.
- Blog metadata (`generateMetadata` in `app/blog/[slug]/page.tsx`) does not emit `modifiedTime`.
- The sitemap uses `data.date` (publish date) as `lastModified`.

**Impact:** Google uses `dateModified` to determine content freshness. Without it, updated articles look stale, and Google may deprioritize them or stop re-crawling them. This is a **major factor in why pages may not be re-indexed** after updates.

**Fix:**
1. Add `dateModified` field to MDX frontmatter.
2. Update `BlogFrontmatter` interface in `lib/mdx.ts`.
3. Pass `dateModified` to `generateMetadata()` and `BlogSchema.tsx`.
4. Use `dateModified` in the sitemap's `lastModified` field.

---

### 5. Sitemap `lastModified` Uses Static Date for All Pages

**File:** `app/sitemap.js:12`

```js
const siteLastModified = '2026-08-08';
```

Every static page, tool, service, hub, and location page has the same `lastModified` value. Blog posts use their publish date. **No page reflects its actual last modification date.**

**Impact:** Google's Crawl Budget is wasted re-crawling unchanged pages while potentially ignoring recently updated ones. This is especially problematic if you update content frequently — Google won't know.

**Fix:** Update `siteLastModified` every time you deploy, or better, compute it from `fs.statSync()` on each file.

---

### 6. `not-found.js` Page Is Indexable — Wastes Crawl Budget

**File:** `app/not-found.js`

The 404 page has no metadata, no `<title>` override, and no `noindex` directive. If any crawler follows a broken link, it could index the 404 page itself.

**Impact:** Low-quality 404 pages in the index dilute overall site quality signals.

**Fix:** Add a `generateMetadata` export to `not-found.js`:
```js
export const metadata = {
  title: 'Page Not Found | The Stockit',
  description: 'The page you are looking for does not exist.',
  robots: { index: false, follow: true },
};
```

---

### 7. `robots.js` Has No Disallow Rules — Every Path Is Crawlable

**File:** `app/robots.js`

```js
rules: [{ userAgent: '*', allow: '/' }],
```

No paths are disallowed. This means Googlebot can crawl:
- `/api/*` routes (if any)
- `/_next/data/*` internal chunks
- `/loading` states
- Any future admin or staging paths

**Impact:** Crawl budget waste on non-content paths.

**Fix:**
```js
rules: [
  {
    userAgent: '*',
    allow: '/',
    disallow: ['/_next/', '/api/', '/loading'],
  },
],
```

---

### 8. Hosting & Domain Pages Have No `<h1>` Tag

**Files:** `app/hosting/page.jsx`, `app/domain/page.jsx`

Both pages use `<h2>` as their visible heading but have **no `<h1>` element**. Google relies heavily on `<h1>` to understand page topic.

- Hosting page: `<h2>Explore Our Web Hosting Solutions</h2>` (line 180)
- Domain page: `<h2>Our Domain Partners</h2>` (line 28)

**Impact:** Missing H1 = weaker topical relevance signals = lower ranking for target keywords.

**Fix:** Change `<h2>` to `<h1>` on both pages, or add a proper `<h1>` before the `<h2>`.

---

## HIGH Issues (Fix This Week)

### 9. Blog Meta Descriptions Are Poorly Written

| Blog Post | Problem |
|-----------|---------|
| `zeydoo-review-2025` | Description ends with `9/10...` — truncated score, wastes SERP space |
| `what-is-email-marketing` | Description ends with `A complete...` — cut mid-sentence by author |
| `bluehost-review` | Description is generic and similar to other hosting reviews |

**Impact:** Poor meta descriptions lead to lower CTR from SERPs. Google may rewrite them, but not always well.

**Fix:** Write unique, compelling, action-oriented descriptions for every blog post. Keep under 155 characters.

---

### 10. Author Name Inconsistency Across Blog Posts

| Post | Author Value |
|------|-------------|
| `bluehost-review` | `"The Stockit Editorial Team"` |
| `zeydoo-review-2025` | `"The stockit team"` (lowercase) |
| `what-is-email-marketing` | `"The Stockit"` (abbreviated) |
| `freelancer-vs-agency` | `"The Stockit Editorial Team"` |

**Impact:** Google's author entity recognition treats these as different authors. E-E-A-T signals are fragmented.

**Fix:** Standardize all blog author fields to `"The Stockit Editorial Team"` (or the actual person's name for E-E-A-T).

---

### 11. Blog Cover Image Typo

**File:** `content/blog/what-is-email-marketing.mdx`

```yaml
coverImage: '/Email-markiting.webp'
```

Should be `/Email-marketing.webp` (typo: "markiting" → "marketing").

**Impact:** Image returns 404 or mismatched alt text. The blog post image will be broken.

---

### 12. `FAQPage` Schema Not Emitted Despite Having FAQ Content

**Files:** `components/seo/BlogSchema.tsx`, `Data/Seo/seo-utils.js`

The `faqPageSchema()` utility exists in `seo-utils.js` but is **never called** by `BlogSchema.tsx`. Most blog posts contain structured FAQ sections (h3 questions + paragraph answers). Similarly, service pages use `ServiceFaqs` component but the FAQ schema generation path may not be wired up.

**Impact:** Missing FAQ rich snippets = less SERP real estate = lower CTR. This is free visibility being left on the table.

**Fix:** Parse FAQ sections from blog content and emit `FAQPage` schema in `BlogSchema.tsx`.

---

### 13. `blogPostingSchema()` in `seo-utils.js` Is Dead Code

**File:** `Data/Seo/seo-utils.js:210-235`

The `blogPostingSchema()` function is exported but **never imported anywhere**. `BlogSchema.tsx` builds its own inline `Article` schema instead.

**Impact:** Maintenance confusion. The dead code could drift from the actual schema being used.

**Fix:** Either delete `blogPostingSchema()` or refactor `BlogSchema.tsx` to use it.

---

### 14. `ToolsSchema` Emits Array Instead of Object

**File:** `components/ToolsSchema.js:33`

```js
dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
```

`schema` is an **array** of objects, each with their own `@context`. Google's Rich Results Test expects a single `@graph` wrapper or individual objects, not a raw array.

**Impact:** Google may not parse the structured data correctly, leading to lost rich results for tools.

**Fix:** Wrap in `@graph`:
```js
const jsonLd = { '@context': 'https://schema.org', '@graph': schema };
dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
```

---

### 15. Tool Pages Have Thin Content

**File:** `app/tools/ip-detailer/page.jsx`, `app/tools/ip-detailer/ip-lookup/page.jsx`

After removing Ezoic ad slots, the tool pages have the actual tool component + some article content. However, the tool itself is a JS-rendered interactive widget. **The actual content Google sees depends on SSR** — if the IP checker results are client-rendered only, Google sees thin content.

**Impact:** Tool pages may be classified as "thin content" and deindexed.

**Fix:** Ensure tool components render meaningful fallback content server-side, or add more static descriptive content above the fold.

---

### 16. Canonical URLs Missing Trailing Slash Consistency

**File:** `Data/Seo/seo-utils.js:78-80`

The `alternates.canonical` is set to the `url` parameter, which never includes a trailing slash (e.g., `https://thestockit.com/services`). However, Next.js may serve the page at both `/services` and `/services/` depending on configuration. Without `trailingSlash` config in `next.config.mjs`, the default behavior is to strip trailing slashes, but this should be explicit.

**Fix:** Add to `next.config.mjs`:
```js
const nextConfig = {
  trailingSlash: false,  // Explicitly set
  images: { unoptimized: true },
};
```

---

### 17. `next.config.mjs` Has `images: { unoptimized: true }` — No Image Optimization

**File:** `next.config.mjs:3-5`

```js
images: { unoptimized: true },
```

All images are served at full original size with no WebP conversion, resizing, or lazy loading beyond `loading="lazy"` attributes.

**Impact:** Slow page loads, poor Core Web Vitals (LCP, FID), higher bounce rates. Google uses page speed as a ranking factor.

**Fix:** Remove `unoptimized: true` and configure proper image domains if using external images.

---

### 18. Footer Links and Header Links Are Mismatched

| In Header Only | In Footer Only |
|----------------|----------------|
| Hosting (`/hosting`) | Web Development (`/services/web-development`) |
| Domains (`/domain`) | App Development (`/services/app-development`) |
| Courses (`/courses`) | AI Services (`/services/ai-services`) |
| | E-commerce (`/services/e-commerce`) |
| | Digital Marketing (`/services/digital-marketing`) |
| | About, Portfolio, Free Tools, Terms, Privacy, Disclaimer |

**Impact:** Pages only linked from the footer receive weaker crawl signals. Services sub-pages, About, Portfolio, and Tools are not in the header nav.

---

## MEDIUM Issues (Fix This Month)

### 19. `/services` Index Page Title Missing Brand Name

**File:** `app/services/page.js:35`

```js
title: 'Web Design, Development & Digital Marketing Services in Pakistan'
```

Missing `| The Stockit` suffix that all other pages have.

**Fix:** Add the brand suffix:
```js
title: 'Web Design, Development & Digital Marketing Services in Pakistan | The Stockit'
```

---

### 20. Hub Pages Missing Urdu Keywords

**File:** `Data/Hubs/_metadata.js`

The `buildHubMetadata()` function does not append Urdu keywords, while `buildServiceMetadata()` does. Hub pages (`/services/web-development`, etc.) lack the Urdu keyword suffix that service pages (`/web-design`, etc.) get.

**Fix:** Add Urdu keywords to `buildHubMetadata()`:
```js
const urduKeywordsSuffix = 'ویب ڈیزائن، ویب ڈویلپمنٹ، ڈیجیٹل مارکیٹنگ، ایس ای او پاکستان';
```

---

### 21. No `hreflang` Tags Despite Targeting Pakistan

**File:** `Data/Seo/seo-utils.js`

The site targets Pakistani audiences (PKR pricing, Urdu support, Pakistani cities) but has no `hreflang` tags. The `webSiteSchema` uses `inLanguage: 'en-PK'` but there is no `<html lang>` attribute confirmation and no hreflang.

**Impact:** Google may not serve the site to Pakistani users as a local result.

**Fix:** Add to the root layout:
```jsx
<html lang="en-PK">
```
And add hreflang if Urdu content is planned.

---

### 22. Meta Descriptions on Hub Pages Exceed 160 Characters

| Page | Description Length |
|------|-------------------|
| `/services/web-development` | ~179 chars |
| `/services/app-development` | ~179 chars |
| `/services/ai-services` | ~181 chars |
| `/services/e-commerce` | **~189 chars** |
| `/services/digital-marketing` | ~179 chars |
| `/services` | ~187 chars |

The `truncateMetaDescription()` function cuts at 160 chars, but these descriptions will be awkwardly truncated mid-sentence.

**Fix:** Rewrite descriptions to be under 155 characters.

---

### 23. About Page Uses `<h5>` for Important Content

**File:** `app/about/page.jsx:38`

```jsx
<h5 className="text-lg uppercase text-primary ...">
  In 2017, the seeds of The Stockit were sown...
</h5>
```

Using `<h5>` for a paragraph of descriptive text is semantically incorrect. It skips `<h2>`, `<h3>`, `<h4>` in the heading hierarchy.

**Fix:** Replace with `<p>` styled with the same classes, or use a proper `<h2>` if it should be a heading.

---

### 24. `ogImageUrl()` Helper Function Is Defined But Never Used

**File:** `Data/Seo/seo-utils.js:23-24`

```js
export const ogImageUrl = (path) => `${SITE.baseUrl}${path}`;
```

This helper correctly prepends the base URL, but no one calls it. All pages pass raw relative paths to `createMetadata()`.

**Fix:** Use `ogImageUrl()` in `createMetadata()` or remove it and fix the image URL construction directly.

---

### 25. No `<link rel="preconnect">` for Critical Third-Party Domains

**File:** `app/layout.js`

After removing Ezoic scripts, there are no third-party script tags, but if any analytics or font services are added later, there are no `preconnect` hints.

**Impact:** Minor — currently no third-party scripts to connect to.

---

### 26. Blog Posts Have Inconsistent `bannerLink` and `bannerDiscount`

| Post | `bannerLink` | `bannerDiscount` |
|------|-------------|-----------------|
| `bluehost-review` | `#` | `0` |
| `freelancer-vs-agency` | `#` | `0` |
| `zeydoo-review-2025` | not set | `70` |

**Impact:** Posts with `#` as banner link and `0` discount display empty/broken affiliate CTAs. Users clicking them get nowhere.

**Fix:** Either set proper affiliate links or conditionally hide the banner when no valid link exists.

---

## LOW Issues (Improve Over Time)

### 27. No `rel="prev"` / `rel="next"` on Paginated Blog

The blog listing page (`/blog`) shows all posts on a single page. If pagination is added in the future, `rel="prev"` and `rel="next"` should be implemented.

---

### 28. No `speakable` Schema Markup

For voice search optimization, adding `speakable` schema to blog posts and key pages would help Google Assistant read content.

---

### 29. `loading.js` Uses Non-Standard Component Naming

**File:** `app/loading.js:6`

```js
const loading = () => ...
```

Lowercase component name violates React conventions. While Next.js handles it, it could cause issues with strict linting.

---

### 30. No `webmanifest.json` / PWA Support

No web app manifest found. While not strictly SEO, it affects mobile experience and could impact "Add to Home Screen" signals.

---

### 31. `blogPostingSchema()` Dead Code Cleanup

Already noted in #13. The function should be removed or integrated.

---

## Page-by-Page SEO Health Matrix

| Page | Title | Meta Desc | Canonical | H1 | Schema | OG Image | Status |
|------|-------|-----------|-----------|----|----|----------|--------|
| `/` (Home) | ✅ | ✅ | ✅ | ✅ (Hero) | ✅ Org+Local | ❌ Relative | **Fix OG** |
| `/about` | ✅ | ✅ | ✅ | ✅ | ❌ None | ❌ Relative | **Add Schema, Fix OG** |
| `/services` | ❌ No brand | ⚠️ Too long | ✅ | ✅ (Hero) | ❌ None | ❌ Relative | **Fix Title, Schema, OG** |
| `/hosting` | ✅ | ✅ | ✅ | ❌ No H1 | ❌ None | ❌ Relative | **Add H1, Schema, Fix OG** |
| `/domain` | ✅ | ✅ | ✅ | ❌ No H1 | ❌ None | ❌ Relative | **Add H1, Schema, Fix OG** |
| `/contact` | ✅ | ✅ | ✅ | ✅ (ContactUs) | ❌ None | ❌ Relative | **Add Schema, Fix OG** |
| `/blog` | ✅ | ✅ | ✅ | ✅ | ❌ None | ❌ Relative | **Add Schema, Fix OG** |
| `/blog/[slug]` | ✅ | ⚠️ Some bad | ✅ | ✅ | ✅ Article | ❌ Relative | **Fix OG, Add FAQ Schema** |
| `/free-tools` | ✅ | ✅ | ✅ | ✅ | ✅ WebApp | ❌ Relative | **Fix OG** |
| `/tools/ip-detailer` | ✅ | ✅ | ✅ | ✅ | ✅ WebApp | ❌ Relative | **Fix OG, Add content** |
| `/services/[hub]` | ✅ | ⚠️ Too long | ✅ | ✅ | ❌ None | ❌ Relative | **Add Schema, Fix OG** |
| `/locations/[city]` | ✅ | ✅ | ✅ | ✅ | ✅ LocalBiz | ❌ Relative | **Fix OG** |
| `/privacy` | ✅ | ✅ | ✅ | ✅ | ❌ None | ❌ Relative | **Fix OG** |
| `/terms` | ✅ | ✅ | ✅ | ✅ | ❌ None | ❌ Relative | **Fix OG** |
| `/portfolio` | ✅ | ✅ | ✅ | ✅ | ❌ None | ❌ Relative | **Fix OG** |
| `/courses` | ✅ | ✅ | ✅ | ✅ | ❌ None | ❌ Relative | **Fix OG** |

---

## Priority Fix Order

### Phase 1 — This Week (Indexing Blockers)

1. **Fix OG image URLs** in `buildOpenGraph()` — prepend `SITE.baseUrl`
2. **Remove `ssr: false`** from MobileMenu import in `Header.js`
3. **Add `<h1>` tags** to `/hosting` and `/domain` pages
4. **Fix 404 page** — add `noindex` metadata
5. **Add `disallow` rules** to `robots.js`
6. **Fix `ToolsSchema`** — wrap in `@graph`
7. **Add `dateModified`** to MDX frontmatter and wire it through
8. **Update sitemap `lastModified`** to reflect actual file modification dates

### Phase 2 — This Month (Ranking Improvements)

9. Add Schema markup to `/about`, `/hosting`, `/domain`, `/services`, `/contact`, all hub pages
10. Add FAQ schema to blog posts that have FAQ sections
11. Expand header nav to include Services and Tools
12. Fix meta description lengths on hub pages
13. Standardize author names across all blog posts
14. Fix the cover image typo in `what-is-email-marketing.mdx`
15. Rewrite bad meta descriptions (zeydoo, email-marketing)
16. Add Urdu keywords to hub metadata

### Phase 3 — Ongoing (Optimization)

17. Enable Next.js image optimization
18. Add `hreflang` tags if multilingual content is planned
19. Remove dead code (`blogPostingSchema`, `ogImageUrl` unused)
20. Add proper affiliate links or hide broken banner CTAs
21. Improve tool page content for thin content issues
22. Add `speakable` schema for voice search

---

## Files to Modify (Quick Reference)

| File | Changes Needed |
|------|---------------|
| `Data/Seo/seo-utils.js` | Fix OG image URLs in `buildOpenGraph()`, delete dead `blogPostingSchema()`, use `ogImageUrl()` |
| `components/Header.js` | Remove `ssr: false` from MobileMenu, expand `navLinks` |
| `app/hosting/page.jsx` | Add `<h1>` tag, add Schema markup |
| `app/domain/page.jsx` | Add `<h1>` tag, add Schema markup |
| `app/not-found.js` | Add `robots: { index: false }` metadata |
| `app/robots.js` | Add `disallow` rules |
| `components/ToolsSchema.js` | Wrap schema array in `@graph` |
| `lib/mdx.ts` | Add `dateModified` to `BlogFrontmatter` interface |
| `app/blog/[slug]/page.tsx` | Emit `modifiedTime` in metadata |
| `components/seo/BlogSchema.tsx` | Use real `dateModified`, add FAQ schema |
| `app/sitemap.js` | Use file modification dates, add `dateModified` support |
| `app/about/page.jsx` | Add Schema, fix `<h5>` semantics |
| `app/services/page.js` | Add brand to title, add Schema |
| `next.config.mjs` | Remove `unoptimized: true`, add `trailingSlash: false` |
| `app/layout.js` | Set `<html lang="en-PK">` |
| `Data/Hubs/_metadata.js` | Add Urdu keywords |
| `content/blog/*.mdx` | Fix individual meta descriptions, author names, cover image typos |

---

*Report generated by Deep SEO Audit — August 25, 2026*
