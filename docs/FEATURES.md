# Features

## Components & Sections

| Component | Location | Description |
|-----------|----------|-------------|
| Password Gate | `app/page.tsx` | Client-side password protection (sessionStorage). Password: "JulieJae" |
| Dark Mode Toggle | `app/page.tsx` (DarkModeToggle) | Moon/sun toggle, localStorage persistence, smooth CSS transitions |
| JS Logo | `app/page.tsx` (JsLogo) | Displays `js-logo.png` in header, footer, password page |
| Navigation | `app/page.tsx` | Sticky top nav with logo, section links, dark mode toggle |
| Hero Section | `app/page.tsx` | 3 role badges, heading, description, CTA buttons, photo |
| Skills Marquee | `app/page.tsx` | Scrolling banner of skills below hero |
| About Section | `app/page.tsx` | Two-column bio + 4 capability cards (Discovery, Data & Compliance, Build & Ship, Grow & Iterate) |
| Work Section | `app/page.tsx` | 4 project cards with staggered image/video layouts |
| Project Modal | `app/page.tsx` | Full-screen modal with image carousel and video embeds |
| Quote Divider | `app/page.tsx` | Dark banner with approach quote between sections |
| Contact Section | `app/page.tsx` | Email Me (mailto) + LinkedIn buttons |
| Footer | `app/page.tsx` | Logo, copyright, back-to-top link |

## Projects Displayed

| Project | Images | Videos | Card Layout |
|---------|--------|--------|-------------|
| Medical Records & Review Platform | 4 screenshots | — | Wide staggered fan |
| RepCommish — Sales & Commission Tracking | 3 screenshots (slide-1, slide-2, slide-3) | — | Centered vertical, crooked |
| Journey Management System | 4 screenshots | — | Cascading diagonal |
| Provider Network Platform | — | 2 YouTube videos | Stacked crooked thumbnails |

## Brand Collateral

| Piece | Location | Description |
|---|---|---|
| Business Card | `business-card/card.html` | Double-sided 3.5×2" card. Front: name, "Custom Websites & Software for Small Business", phone/email/site. Back: `js.` monogram on charcoal. Renders to print-ready PDF (with bleed + trim versions) via Playwright. |
| Invoice Template | `invoices/TEMPLATE.html` | Branded invoice matching the same palette and type. Not committed (contains client billing data). |

## Changelog

- **2026-08-21:** Business card designed (`business-card/`) — matches site palette, Inter, and js monogram; print-ready PDFs with bleed
- **2026-02-16:** Updated RepCommish project: new screenshots, founder-focused title & description
- **2026-02-10:** Dark mode, password protection, JS logo, project card layouts, hero/about/work redesigns, deployment zip
