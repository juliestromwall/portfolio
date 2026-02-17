# Product — Julie Stromwall Portfolio

## Overview

Personal portfolio website for Julie Stromwall, Product Manager. Showcases professional experience, project work, and contact information. Password-protected.

## Tech Stack

- **Framework:** Next.js 16 (App Router, static export)
- **Styling:** Tailwind CSS v4 with custom theme colors
- **Font:** Inter (Google Fonts)
- **Hosting:** Hostinger shared hosting (static files) → juliestromwall.com
- **Repo:** https://github.com/juliestromwall/portfolio

## Pages

| Page | Route | Description |
|------|-------|-------------|
| Password Gate | `/` (unauthenticated) | Password entry screen with JS logo and dark mode toggle |
| Main Site | `/` (authenticated) | Single-page with hero, about, work, contact sections |

## Key Flows

1. **Authentication:** Enter password "JulieJae" → stored in sessionStorage → main site shown
2. **Dark Mode:** Click moon/sun icon → toggles `.dark` class on `<html>` → saved to localStorage
3. **View Project:** Click project card → modal opens with image carousel or video embeds
4. **Contact:** "Email Me" opens default mail client → "LinkedIn" opens profile in new tab

## Terminology

| Term | Meaning |
|------|---------|
| Static Export | `next build` outputs to `out/` folder, deployed as plain HTML/CSS/JS |
| Password Gate | Client-side auth check using sessionStorage (not server-side) |
| Dark Mode | CSS class-based theme switching via Tailwind `@custom-variant dark` |

## Theme Colors

| Token | Light | Dark |
|-------|-------|------|
| Background | cream (#FAF7F2) | dark-bg (#0c0c10) |
| Surface | cream-dark (#F0EBE3) | dark-surface (#141419) |
| Card | white | dark-card (#1c1c24) |
| Text | charcoal (#1A1A1A) | dark-text (#e8e6e1) |
| Accent 1 | teal (#2D9B8A) | teal (#2D9B8A) |
| Accent 2 | terracotta (#C4714E) | terracotta (#C4714E) |
