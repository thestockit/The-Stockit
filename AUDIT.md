# The Stockit — Deep Audit Report

**Audit date:** August 5, 2026
**Scope:** UI/UX, Code, SEO
**Method:** Static analysis of `app/`, `components/`, `posts/`, `public/`, `Data/`, `constant/`, and config files (~8,300 lines of source, 50 components, 15 static routes, 26 markdown posts).

---

## 1. Executive Summary

| Area | Health | Critical | High | Medium | Low |
|------|--------|----------|------|--------|-----|
| **UI/UX** | ⚠️ 2.5 / 5 | 3 | 8 | 6 | 4 |
| **Code** | ⚠️ 2 / 5 | 5 | 9 | 8 | 6 |
| **SEO** | 🔴 1.5 / 5 | 7 | 6 | 4 | 2 |
| **Performance/Assets** | 🔴 1.5 / 5 | 3 | 6 | 4 | 3 |

**Top 10 critical findings:**

1. **All three primary CTAs do nothing** — "Book Consultation" (`Hero.js`), "BOOK A CALL" (`CTA.js`), "Send Message" (`ContactUs.js`) have no handlers or links.
2. **Contact form is not a form** — no `<form>` element, no submit handler, no validation; email address is not even a clickable link.
3. **Zero per-page metadata** — every one of the 16 routes renders `<title>The Stockit</title>` with the same description; no `generateMetadata` anywhere outside `layout.js`.
4. **No canonical tags, no `og:image`, no `twitter:card`** anywhere in the codebase.
5. **`<h1>` misuse on 11 of 15 pages** — 7 pages have zero `<h1>`, 4 pages have up to 12.
6. **Sitemap omits all 26 blog posts**, references a non-existent `/all-blogs` route, and uses `new Date()` instead of real post dates.
7. **Hidden SEO-spam link** to `taxuni.com` in `InstagramEmbed.js`, styled invisible via CSS.
8. **Broken marketing funnel** — homepage blog cards link to a dead `.net` domain with spaces in URLs; `/all-blogs` and `#contact` anchors point nowhere.
9. **Dangling 73.5 MB video reference** + 4.2 MB orphaned `demo-images/` folder.
10. **Obfuscated third-party ad scripts** (`infantilecombination.com`) left in unused components.

---

## 2. UI/UX Audit

### 2.1 Critical

#### UIUX-01 — All primary CTAs are non-functional
| | |
|---|---|
| **Files** | `components/Hero.js:105`, `components/CTA.js:52`, `components/ContactUs.js:74` |
| **Severity** | 🔴 Critical |

- **"Book Consultation"** — `<button>` with no `onClick`, not wrapped in a `<Link>`. Clicking does nothing.
- **"BOOK A CALL"** — `<motion.button>` with hover/tap animation but no `onClick`, no `href`.
- **"Send Message"** — `<button>` with no `onClick`, no `type`, not inside a `<form>`.

The three highest-intent conversion points on the site are dead. This is the single most damaging UI/UX defect.

**Fix:** Convert each to a `Link` to `/contact` (or wire a real form submit handler). At minimum add `onClick` → `window.location = '/contact'`.

#### UIUX-02 — Contact form is not functional
| | |
|---|---|
| **File** | `components/ContactUs.js:37-80` |
| **Severity** | 🔴 Critical |

- No `<form>` element — the Name/Email/Message fields and button are direct children of `<div>`s, so no submit event can ever fire.
- No validation: no `required`, no `aria-required`, no error messages.
- The email address is a bare `<a>` with **no `href`** (`ContactUs.js:30`) — not clickable, invalid HTML.
- Phone number is plain text — no `tel:` link.

**Fix:** Wrap in `<form onSubmit=...>`, add `required` + validation messages, wire `mailto:`/API handler, add `href="mailto:info@thestockit.com"` and `href="tel:+447360506217"`.

#### UIUX-03 — Hidden SEO-spam link on homepage
| | |
|---|---|
| **File** | `components/InstagramEmbed.js:35-46` |
| **Severity** | 🔴 Critical (security + SEO + a11y) |

A `<style>` block makes all anchors inside `.igwrapper` invisible (`color: rgba(0,0,0,0)`, `position: absolute`, `z-index: 0`), and the component renders:

```jsx
<a href="https://www.taxuni.com/oregon-state-income-tax/">Oregon State Income Tax</a>
```

This is the classic hidden-link / paid-backlink pattern (violates Google Webmaster Guidelines and WCAG — invisible link text). It links to an unrelated Oregon-tax page. **Remove it immediately** and audit the git history for how it got there.

### 2.2 High

#### UIUX-04 — Mobile menu fails accessibility basics
| | |
|---|---|
| **Files** | `components/MobileMenu.js:13-19`, `components/Header.js:101-113` |
| **Severity** | 🟠 High |

- Hamburger button has no accessible name (three empty `<div>` bars) and `focus:outline-none` removes the focus indicator (`Header.js:102`).
- Close button is icon-only `&times;` with no `aria-label` (`MobileMenu.js:17`).
- Menu is a full-screen overlay with **no focus trap, no `role="dialog"`, no `aria-modal`, no Escape-key handler**. Focus stays on the page behind the overlay.
- Menu item "Lets Connect" (`MobileMenu.js:67-73`) is a `<button>` that calls `document.getElementById('contact')` — on any page without a contact section (e.g. `/portfolio`, `/services`) it does nothing. Should be a `Link` to `/contact`.

#### UIUX-05 — Carousels are keyboard/AT-hostile
| | |
|---|---|
| **Files** | `components/BlogSlider.js:51-64`, `components/Testimonials.js:37-75` |
| **Severity** | 🟠 High |

- **Nested interactive elements (invalid HTML):** dot `<button>`s are children of a `<Link>` (`BlogSlider.js:52-63`). The code even calls `e.preventDefault()` to work around it.
- Dot indicators are empty `<button>`s — no `aria-label`, no `aria-current`, no `aria-pressed`.
- `BlogSlider` auto-advances every 5s with **no pause on hover/focus** and no `aria-live`.
- `Testimonials` prev/next arrows are unlabeled icon buttons; dots unlabeled; no `role="region"`/`aria-roledescription="carousel"`.

#### UIUX-06 — No visible focus states on interactive elements
| | |
|---|---|
| **Files** | `components/ContactUs.js:52,62,71,74`, `components/Header.js:102`, `components/BlogCard.js:11` |
| **Severity** | 🟠 High |

The contact form uses `outline-none` combined with `focus:border-gradient-focus` and `focus:ring-gradient-focus` — **neither utility exists** in `tailwind.config.js` or `globals.css`. Result: keyboard users get zero visible focus indicator. WCAG 2.4.7 violation.

#### UIUX-07 — Low-contrast map + generic images
| | |
|---|---|
| **Files** | `components/ContactUs.js:21`, `components/BlogCard.js:19,32`, `components/Content.js:15`, `app/domain/page.jsx:42` |
| **Severity** | 🟠 High |

- Google Maps iframe has `filter: opacity(0.4)` — the map is ~60% transparent, hard to read.
- Generic alts: `alt="Blog Image"`, `alt="Avatar"`, `alt="Featured image"`, `alt="Domain Partner"` (repeated). Alt should describe content; logo/decorative images should use `alt=""`.

#### UIUX-08 — Hero layout & video issues
| | |
|---|---|
| **File** | `components/Hero.js:124-146` |
| **Severity** | 🟠 High |

- A `<div>` fallback is placed **inside the `<video>` element** (only `<source>`/`<track>` are allowed) — the "browser does not support video" message can never render.
- The glow-border div uses `absolute -top-1 -left-1 ...` (`Hero.js:42`) but its parent (`Hero.js:40`) has no `position: relative` — the glow is positioned relative to an ancestor.
- No `<track>` captions and no `poster` attribute on the hero video.

#### UIUX-09 — Broken in-page and internal links
| | |
|---|---|
| **Files** | `components/MarketingText.js:73` (`href="#contact"`), `components/Blogs.js:24` (`/all-blogs`), `components/Sidebarad.js:8` (`href="#"`), `components/Header.js:95` (`href="contact"`), `Data/BlogsData.js:50` |
| **Severity** | 🟠 High |

- Homepage's marketing section links to `#contact`, but the homepage does not render `<ContactUs/>` — anchor resolves nowhere.
- "See All" links to `/all-blogs`, a route that does not exist (`app/` has `/blog`).
- `Sidebarad` defaults to `href="#"` with `target="_blank"` — opens the current page in a new tab when a post lacks `bannerLink`.
- Header's "Lets Connect" is `href="contact"` (missing leading slash — relative link).
- 38 homepage blog cards link to `https://www.The Stockit.net/...` — **contains a literal space** → malformed URL; also a dead domain vs. `thestockit.com`.

### 2.3 Medium

| ID | Finding | Location |
|----|---------|----------|
| UIUX-10 | Clickable `<motion.div>` for Clutch profile — no `role`, `tabindex`, keyboard handler, or focus style | `MessageBanner.js:23` (unused) |
| UIUX-11 | Infinite `animate-pulse` on sidebar heading; no `prefers-reduced-motion` guard | `Sidebarad.js:19` |
| UIUX-12 | Decorative emojis (🚀🏆🔒…) and star SVGs not `aria-hidden` — announced as "rocket", "trophy", etc. | `FeaturesSection.js:9-44`, `TestimonialCard.js:25-39` |
| UIUX-13 | Facebook iframe has no `title`; deprecated `frameBorder`/`scrolling` attributes; no `loading="lazy"` | `Facebook.js:33-42` |
| UIUX-14 | Instagram permalink contains a space: `data-instgrm-permalink="https://www.instagram.com/The Stockit/"` | `InstagramEmbed.js:49` |
| UIUX-15 | Footer social URLs contain spaces (`web.facebook.com/The Stockit`, `youtube.com/@The Stockit`) | `Footer.js:158-194` |
| UIUX-16 | Hero content starts `opacity-0` and only becomes visible after JS hydration — flash of invisible content if JS fails/delays | `Hero.js:47-110` |
| UIUX-17 | "Lets Connect" grammar typo (should be "Let's") duplicated in 3 files | `Header.js:96`, `MobileMenu.js:71`, `MarketingText.js:73` |
| UIUX-18 | No "skip to content" link; heading hierarchy skipped on several pages (h1→h5 in About) | `app/about/page.jsx:24-59` |

**UI/UX scoring note:** The visual design (gradients, animations, glassmorphism) is modern and consistent, and `Hero.js` is the only component respecting `prefers-reduced-motion`. But the dead CTAs, non-functional contact form, and carousel/menu accessibility mean the core user journeys are broken for both mouse and keyboard/AT users.

---

## 3. Code Audit

### 3.1 Critical

#### CODE-01 — No per-page metadata or `generateMetadata` anywhere
| | |
|---|---|
| **Files** | All `app/**/page.*` files |
| **Severity** | 🔴 Critical (also SEO-01) |

`app/layout.js` is the only file exporting `metadata` (verified by grep). No page defines its own title/description. Every route renders the same generic "The Stockit". This is a structural gap, not an edge case.

#### CODE-02 — Four dead components ship in the bundle
| | |
|---|---|
| **Files** | `components/AdScript.js`, `components/AdScriptTwo.js`, `components/HeroVideo.js`, `components/MessageBanner.js` |
| **Severity** | 🔴 Critical |

None of these are imported anywhere in the repo (verified by grep). Worst case is the two ad-script components which inject **obfuscated third-party scripts from `//infantilecombination.com`**:

- `AdScript.js:9` and `AdScriptTwo.js:8` — obfuscated URLs, `console.log`/`console.error` in production, shared hardcoded `id="ad-container"` that would cross-contaminate if ever mounted, and cleanup that can throw.
- Both target `id="ad-container"` but `AdScriptTwo` appends the script to `document.body` — placeholder "Ad will be displayed here" never gets replaced.

**Recommendation:** Delete all four files. If ad scripts are required later, load them through a single server-component wrapper with a config constant and `onerror` handling.

#### CODE-03 — Invalid `next/image` usage
| | |
|---|---|
| **Files** | `components/MarketingGallery.js:31,40,50` (`width={0} height={0}`), `components/BlogCard.js:16-22` (`priority` on all 3 cards) |
| **Severity** | 🔴 Critical |

- `width={0}`/`height={0}` is not a valid `next/image` API signature (must be positive). With `images.unoptimized: true` this still triggers warnings and broken intrinsic sizing.
- `priority` is applied to all three homepage blog cards (plus blog covers at `app/blog/[slug]/page.js:91`) — it should only be on the LCP image; the rest should use `loading="lazy"`.

#### CODE-04 — Sensitive bank/IBAN details published on courses page
| | |
|---|---|
| **File** | `components/CourseText.js:14-22` |
| **Severity** | 🔴 Critical (security) |

The courses page renders full bank account numbers and IBAN for manual registration. Publishing live payment details in a statically exported client bundle is a fraud/phishing risk and should be replaced with a payment-link/checkout flow.

#### CODE-05 — Dangling 73.5 MB video + orphaned assets
| | |
|---|---|
| **Files** | `public/ad for stockit fianl 22222.mp4.json`, `demo-images/` (10 files, 4.18 MB) |
| **Severity** | 🔴 Critical |

- The `.mp4.json` (191 B) is a `next-video` artifact referencing `public\ad for The Stockit fianl 22222.mp4` (**73.5 MB**) — the actual file does not exist anywhere. `next/video` is imported nowhere.
- `demo-images/` (10 PNGs, 4.18 MB) is referenced by no file and is not under `public/` — pure dead weight in the repo.

### 3.2 High

| ID | Finding | Location |
|----|---------|----------|
| CODE-06 | Duplicate `plugins` key in Tailwind config — first is silently overwritten | `tailwind.config.js:24-25` |
| CODE-07 | `AOS.init()` runs on **every** component instance (multiple times per page); no `prefers-reduced-motion` handling; `duration:500` hardcoded | `AosAnimation.jsx:8-13` |
| CODE-08 | Two animation libraries bundled (AOS **and** framer-motion, imported in 12 files) for one site; homepage hero uses a third system (styled-jsx keyframes) | `package.json:12,14` |
| CODE-09 | `console.log`/`console.error` left in production code | `Hero.js:14`, `ServiceHero.js:13`, `AdScript.js:11,18` |
| CODE-10 | Invalid Tailwind classes (no-ops): `bg-v` (`Header.js:35`), `md:w-4.5`/`md:h-4.5` (`CTA.js:73`), `object-conatin` typo (`MarketingGallery.js:40`), `aspect-w-*`/`aspect-h-*` used but `@tailwindcss/aspect-ratio` not installed | multiple |
| CODE-11 | `.border-gradient` uses `border-image`, which is incompatible with `border-radius` — rounded corners silently don't render | `globals.css:6-11` + `Header.js:49`, `Toc.js:73,97` |
| CODE-12 | `next.config.mjs` uses `output:'export'` but `package.json:8` still has `"start": "next start"` (incompatible); `file-loader`/`next-videos` in deps but no webpack config to use them; `rehype-slug`/`rehype-autolink-headings` in deps but never imported (blog uses `markdown-to-jsx` overrides instead) | configs |
| CODE-13 | Blog detail only reads `.md` files (`app/blog/[slug]/page.js:29`) and returns a "Post not found" page **without `notFound()`** → HTTP 200 with wrong content; `.mdx` posts 404 | `app/blog/[slug]/page.js:36-49` |
| CODE-14 | `Sidebarad.js` marked `"use client"` with unused `useEffect`/`useState` imports; pure presentational component | `Sidebarad.js:1-2` |
| CODE-15 | `key={index}` array anti-pattern; duplicate list markup in `Toc.js` (mobile/desktop); copy-paste duplication of social "Stay Connected" section | `Blogs.js:16`, `BlogSlider.js:53`, `Toc.js:75-121`, `Facebook.js` vs `InstagramEmbed.js` |

### 3.3 Medium

| ID | Finding | Location |
|----|---------|----------|
| CODE-16 | External URLs passed to `next/link` instead of `<a>`; internal links given pointless `rel="noopener noreferrer"` | `MarketingGallery.js:19-48`, `Blogs.js:25` |
| CODE-17 | Unused `React` import (Next 14 automatic JSX runtime) | `Toc.js:4` |
| CODE-18 | Hardcoded brand colors `#6a5acd`/`#48d1cc`/`#4318FF` scattered across classes and CSS — not theme tokens | `Toc.js:84,109`, `globals.css:9`, `CTA.js:56` |
| CODE-19 | Deprecated HTML: `frameBorder`, `scrolling`, `marginHeight/marginWidth` | `ContactUs.js:15-19`, `Facebook.js:38-39` |
| CODE-20 | Comments vs code mismatch (divider logic `index < 4` vs "only first two rows" in a 3-col grid) and stale file-header comments | `FeaturesSection.js:1,90` |
| CODE-21 | `MarketingGallery` uses magic offsets (`mt-[30%]`) and duplicate inline SVG icons; `TestimonialCard` `hover:scale-105` janks drag/swipe in keen-slider | multiple |
| CODE-22 | Duplicate Inter font load: self-hosted `next/font/google` **plus** a runtime Google Fonts `@import` | `layout.js:1,5` vs `ClientReview.js:462` |
| CODE-23 | Duplicate keen-slider CSS: npm import **plus** jsDelivr CDN links; the CDN stylesheet uses `media="print"` with no onload swap (never loads) | `Testimonials.js:4` vs `layout.js:33-34` |
| CODE-24 | `Header.js` hamburger close animation is dead code (`animate={{height:0}}` never runs because `Header.js:116` unmounts the menu) | `MobileMenu.js:11` |
| CODE-25 | Frontmatter inconsistency: some posts use `excerpt`, some `description`; `description` is never read by the blog UI | `posts/*.md`, `app/blog/page.js:43` |

### 3.4 Low

- Placeholder default `logoSrc = "/favicon.ico"` as a "logo" (`CTABanner.js:9`).
- `cursor-default` on plain div (`MessageBanner.js:69`).
- Comments out of sync; commented-out nav items left in `Header.js:72-87` / `MobileMenu.js:27-48`.
- `package.json` name `"the-The Stockit"` contains a space (invalid npm name casing/space).
- `app/loading.js` uses `react-loader-spinner` `DNA` spinner — flashes frequently given `ssr:false` homepage sections.

---

## 4. SEO Audit

### 4.1 Critical

#### SEO-01 — Every page shares one title and description
| | |
|---|---|
| **Files** | `app/layout.js:7-17`; all `app/**/page.*` |
| **Severity** | 🔴 Critical |

No page exports `metadata` or `generateMetadata`. All 16 routes render `<title>The Stockit</title>` and the same homepage description. Blog posts are the biggest loss — each `posts/*.md` frontmatter already contains `title`, `description`, `author`, `date`, `coverImage` that could drive `generateMetadata` but is entirely unused.

#### SEO-02 — No canonical tags
| | |
|---|---|
| **Files** | entire codebase |
| **Severity** | 🔴 Critical |

Zero `rel="canonical"` links anywhere. Duplicate-content signals and parameter handling are uncontrolled.

#### SEO-03 — No social sharing tags
| | |
|---|---|
| **Files** | `app/layout.js:22-44` |
| **Severity** | 🔴 Critical |

Only `og:title`, `og:description`, `twitter:title`, `twitter:description` are emitted (hand-written). **Missing:** `og:image`, `twitter:image`, `og:url`, `og:type`, `og:site_name`, `twitter:card`. Links shared on LinkedIn/Facebook/X render without preview images.

#### SEO-04 — `<h1>` structure broken on 11 of 15 pages
| | |
|---|---|
| **Files** | see table |
| **Severity** | 🔴 Critical |

| Page | `<h1>` count | Notes |
|------|-------------|-------|
| Home | 2 | `Hero.js:47` + `MarketingText.js:8` |
| Portfolio | up to 12 | one `<h1>` per card (`PortfolioCard.js:26`) |
| Hosting | 11 | one per affiliate block (`Content.js:10`) |
| Courses | 7 | `CoursePolicy.js:15`, `CoursesCard.js:56,72` (×4), `CoursesDetails.js:9` |
| Services | 0 | none |
| Contact | 0 | `ContactUs.js` uses `<h2>` |
| Terms / Privacy / Disclaimer | 0 each | page titles are `<h2>` |
| Domain | 0 | only `<h2>` |
| Free Tools | 0 | only `<h2>` |

#### SEO-05 — Sitemap is broken and incomplete
| | |
|---|---|
| **File** | `app/sitemap.js` |
| **Severity** | 🔴 Critical |

- **All 26 blog post URLs are missing** — the sitemap never reads the `posts/` directory.
- Includes `/all-blogs` — a route that does not exist.
- Missing real routes: `/blog`, `/courses`, `/domain`, `/hosting`, `/free-tools`, `/ui-ux-design`, `/privacy`, `/terms`, `/disclaimer`.
- `lastModified: new Date()` regenerates on every build — meaningless dates; should come from post frontmatter.
- Commented-out block shows posts were meant to be added manually but never were.

#### SEO-06 — No `robots.txt`, no `not-found.js`
| | |
|---|---|
| **Files** | missing |
| **Severity** | 🔴 Critical |

No `public/robots.txt`, no `app/robots.js`, no `app/not-found.js`, no `app/error.js`. Crawl directives are limited to a single `<meta name="robots">` in the layout, and there is no 404 page. Missing posts return a 200 with a "Post not found" `<h1>` instead of a 404.

#### SEO-07 — No structured data on blog posts or FAQ
| | |
|---|---|
| **Files** | `app/blog/[slug]/page.js`, `app/ui-ux-design/page.js`, `app/courses/page.js` |
| **Severity** | 🔴 Critical |

- Blog posts: no `Article`/`BlogPosting`/`BreadcrumbList` schema even though the page renders a breadcrumb and has full frontmatter metadata.
- `ui-ux-design`: FAQ accordion (`ServiceFaqs.js`) has no `FAQPage` schema.
- Courses: no `Course` schema.
- The only JSON-LD on the whole site is the global `DigitalMarketingAgency` in `SchemaMarkup.js`.

### 4.2 High

| ID | Finding | Location |
|----|---------|----------|
| SEO-08 | Manual `<head>` block duplicates/conflicts with the metadata API output (App Router emits both) | `layout.js:22-44` |
| SEO-09 | Homepage blog section links to dead external `.net` domain with spaces in URLs — wasted link equity + broken UX | `Data/BlogsData.js:42-432`, `BlogCard.js:13` |
| SEO-10 | Broken images and placeholder URLs in posts (404s): `/images/*` (4×), `your-image-link.com` (5×), `via.placeholder.com` (5×) | `posts/best-web-hosting-under-3-2023.md:52-108`, `posts/monetizemore-review-2023.md:20`, `posts/earn-for-lifetime-*.md:48-99`, `posts/tier-2-affiliate-*.md:61-109` |
| SEO-11 | Broken internal post links (dead slugs, links to `.md` files) | `posts/web-hosting-explained-*.md:107`, `posts/mylead-affiliate-network.md:38` |
| SEO-12 | `SchemaMarkup` references `logo.png` which doesn't exist; address says Rawalpindi/PK while About/Footer say UK | `SchemaMarkup.js:8-18`, `app/about/page.jsx:46`, `Footer.js:138` |
| SEO-13 | Legal/free-tools pages reference wrong domain `https://The Stockit.net` (with a space in the URL) | `app/terms/page.jsx:21-22`, `app/free-tools/page.jsx:14,20`, `app/privacy/page.jsx:134` (`href="#"`) |

### 4.3 Medium

| ID | Finding | Location |
|----|---------|----------|
| SEO-14 | `keywords`/`author` metas are deprecated signals and add no value | `layout.js:10-11` |
| SEO-15 | Favicon icons use odd query strings (`/favicon.ico?v=4`, `/apple-touch-icon.png?=v4` — typo, empty key) | `layout.js:14-15` |
| SEO-16 | Sitemap base URL `https://thestockit.com` but site copy/references use `.net` — inconsistent domain identity | `sitemap.js:2` vs `BlogsData.js` |
| SEO-17 | No `og:locale`/`og:site_name`; `twitter:site` absent | `layout.js` |

### 4.4 Low

- Hero H1 "Empowering Your Digital Presence" is generic and brand-weak; no target keyword strategy visible in page copy.
- `BlogSlider` featured `<h2>`s appear on the blog index but not as an accessible list structure (`aria-roledescription`/list semantics absent).
- No XML sitemap image entries for the 27 post covers.
- `changeFrequency`/`priority` in the sitemap are largely ignored by Google but harmless.

---

## 5. Performance & Assets (bonus section)

| Severity | Finding |
|----------|---------|
| 🔴 | `images.unoptimized: true` means every `<Image>` ships the full original file (no resizing/WebP/srcset). Blog covers use `fill` + `priority` → full-size file on LCP. Largest public files: `insta img 01.PNG` (904 KB), `flashcloud.png` (554 KB), `seema.webp` (518 KB), `about-img-03.webp` (492 KB), `email-marketing...webp` (414 KB). |
| 🔴 | Remote 1080p Cloudinary MP4 auto-playing in the hero (`Hero.js:137`, `ServiceHero.js:49`) — heavy LCP/payload, no poster fallback. |
| 🟠 | 183 files / 13.26 MB in `public/` with **no subdirectories**; ~20 PNG/JPGs that should be WebP/AVIF; several filenames contain spaces (URL-encoding risk). |
| 🟠 | Multiple third-party embeds on home/blog: Facebook plugin, Instagram embed.js, Google Maps, YouTube, 6 Unsplash remote avatars (`ClientReview.js`). |
| 🟠 | Duplicate Inter font load (self-hosted + Google `@import`); duplicate keen-slider CSS (npm + CDN). |
| 🟠 | `AOS` CSS imported client-side + `framer-motion` + styled-jsx animations — three animation systems on one site. |
| 🟡 | Blog slider autoplay every 5s with no pause — potential CLS on slide change. |
| 🟡 | `sharp` installed but unused for optimization (no remote optimizer possible with static export). |

---

## 6. Prioritized Remediation Checklist

### P0 — Do immediately (blocks core conversion/SEO/crawlability)

- [ ] **P0-1** Delete hidden taxuni.com link from `InstagramEmbed.js:44-46`.
- [ ] **P0-2** Wire up all three CTAs: `Hero.js:105`, `CTA.js:52` → link to `/contact`; `ContactUs.js` → real form.
- [ ] **P0-3** Add per-page `metadata`/`generateMetadata` to all 15 routes (title, description, canonical, og/twitter image). Reuse `posts/*.md` frontmatter in `app/blog/[slug]/page.js`.
- [ ] **P0-4** Fix `<h1>` structure: one `<h1>` per page (add to Services/Contact/Terms/Privacy/Disclaimer/Domain/Free-Tools; collapse the 12/11/7/2 duplicate `<h1>`s on Portfolio/Hosting/Courses/Home).
- [ ] **P0-5** Rebuild `app/sitemap.js` to include all 26 posts with real frontmatter dates + all real routes; remove `/all-blogs`. Add `public/robots.txt` and `app/not-found.js`.
- [ ] **P0-6** Add `BlogPosting` + `BreadcrumbList` JSON-LD to blog detail pages; `FAQPage` to ui-ux-design.
- [ ] **P0-7** Delete unused `AdScript.js`, `AdScriptTwo.js`, `HeroVideo.js`, `MessageBanner.js`, `demo-images/`, and the dangling `*.mp4.json`.
- [ ] **P0-8** Remove bank/IBAN details from the public courses page (`CourseText.js`).
- [ ] **P0-9** Fix invalid next/image usage (`width={0}` in `MarketingGallery`, `priority` misuse in `BlogCard`).

### P1 — High value (a11y, code hygiene, trust)

- [ ] **P1-1** Add focus-visible styles everywhere `outline-none` is used; define the missing `gradient-focus` utilities or remove them.
- [ ] **P1-2** Fix mobile menu: focus trap, `aria-modal`, `aria-label` on hamburger/close, Escape handling; make "Lets Connect" a real link.
- [ ] **P1-3** Fix `BlogSlider` nested-button/`<Link>` structure; label all carousel dots/arrows; pause autoplay on hover/focus.
- [ ] **P1-4** Replace broken homepage blog links (`BlogsData.js`) with internal `/blog/...` routes or delete the section.
- [ ] **P1-5** Fix dead anchors (`#contact`, `/all-blogs`, `href="#"`, `href="contact"`).
- [ ] **P1-6** Fix domain consistency: `.com` everywhere; remove spaces from all URLs (Footer social, Instagram permalink, legal pages).
- [ ] **P1-7** Fix broken/placeholder images in posts (add real assets to `public/images/` or remove).
- [ ] **P1-8** Remove duplicate `plugins` key, dead Tailwind classes, unused deps (`next-video`, `next-videos`, `file-loader`, `rehype-slug`, `rehype-autolink-headings`); pick one animation library (drop AOS or framer-motion).
- [ ] **P1-9** Add `generateStaticParams`-driven 404 via `notFound()` in `app/blog/[slug]/page.js`; support `.mdx`.

### P2 — Polish

- [ ] **P2-1** Self-host/optimize hero video (poster, `<track>`, compressed file); lazy-load below-fold embeds.
- [ ] **P2-2** Compress the largest images in `public/`; remove spaces from filenames; organize into subfolders.
- [ ] **P2-3** Add `prefers-reduced-motion` guards to AOS, Sidebarad pulse, and BlogSlider autoplay.
- [ ] **P2-4** Map iframe contrast fix (raise opacity above 0.6 or remove filter).
- [ ] **P2-5** Add `aria-hidden` to decorative icons/emoji; proper alt text on marketing gallery and blog cards.
- [ ] **P2-6** Remove `console.log` statements; clean commented-out code.
- [ ] **P2-7** Standardize frontmatter (always `excerpt` or `description`, never both) and read it consistently in the blog UI.
- [ ] **P2-8** Fix `SchemaMarkup` logo path and reconcile PK vs UK addresses across schema/About/Footer.

---

*Report generated by automated static analysis. Line references verified at time of audit against commit `7aa38f3`.*
