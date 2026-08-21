# Deploy

The site auto-deploys to **Cloudflare Pages** on every push to `main`. No zip uploads.

- **Repo:** https://github.com/juliestromwall/portfolio
- **Build:** `npm run build` → static export in `out/`
- **Live:** https://juliestromwall.com

## How it works

Push to `main` → Cloudflare pulls the repo, runs the build, publishes `out/`. Pushes to any
other branch get their own preview URL, so you can look at a change before it goes live.

## One-time setup

### 1. Create the Pages project

Cloudflare dashboard → **Workers & Pages** → **Create** → **Pages** → **Connect to Git** →
authorize GitHub → pick `juliestromwall/portfolio`.

Build settings:

| Field | Value |
|---|---|
| Framework preset | Next.js (Static HTML Export) |
| Build command | `npm run build` |
| Build output directory | `out` |
| Root directory | `/` |
| Production branch | `main` |

Node version comes from `.nvmrc` (22) — no env var needed.

**Save and Deploy.** First build takes ~2 min and lands on `<project>.pages.dev`. Confirm the
site loads there before touching DNS.

### 2. Move DNS to Cloudflare

The domain stays registered where it is; only DNS moves.

1. Cloudflare dashboard → **Add a site** → `juliestromwall.com` → Free plan.
2. Cloudflare scans the existing DNS records. **Check the imported list against Hostinger's
   DNS panel before continuing** — especially `MX` and any `TXT` (SPF/DKIM) records. If mail
   for `hello@juliestromwall.com` is hosted at Hostinger and the MX records don't come across,
   email stops arriving. Add anything missing by hand.
3. Cloudflare gives you two nameservers. Set them at the registrar, replacing Hostinger's.
4. Propagation is usually under an hour. Cloudflare emails when the zone is active.

### 3. Attach the domain

Pages project → **Custom domains** → **Set up a domain** → `juliestromwall.com`. Repeat for
`www.juliestromwall.com` if you want it. Cloudflare creates the DNS records and issues the
SSL cert automatically.

### 4. Decommission Hostinger

Once the Cloudflare domain serves the site, the files in Hostinger's `public_html` are dead
weight. Keep the hosting plan only if it's running email.

## Deploying a change

```
git add -A && git commit -m "..." && git push
```

That's it. Watch the build in Workers & Pages → the project → **Deployments**. Rolling back is
a one-click **Rollback** on any previous deployment.

## Notes

- The password gate is client-side — the password ships in the JS bundle and is visible to
  anyone who reads it. It keeps the site out of casual view and off search engines; it is not
  real access control.
- `public/robots.txt` handles search engine exclusion.
