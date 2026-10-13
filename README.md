# GitHub Pages Starter — Matthew

Free hosting, built-in browser editing, no branding. Built 2026-10-13 as the replacement home for the deleted Muse artifacts.

## Put it live (5 minutes, once)

1. Create a GitHub account if you don't have one (free).
2. Create a new **public** repo named `USERNAME.github.io` (replace USERNAME with your GitHub username) — that makes it your main site. Or use any repo name for a project site at `USERNAME.github.io/repo-name/`.
3. Upload everything in this folder (or let Muse push it once GitHub is connected in chat).
4. Repo → Settings → Pages → Source: **Deploy from a branch** → Branch: `main` / `(root)` → Save.
5. Wait 1–2 min. Your site is at `https://USERNAME.github.io/`

## Edit it (anytime, no software)

- Open the repo on github.com, press `.` — github.dev opens (VS Code in the browser).
- Edit, then Commit & Push (left sidebar, source-control icon). Pages republishes automatically.
- Menu/footer for the *whole site*: edit only `assets/nav.js`.

## Add / restore a page

- One folder per page: `pages/<slug>/index.html`
- For re-uploaded artifacts, give Muse the zip/files and Muse will:
  1. Unpack and inventory every page (slug, title, links)
  2. Strip dead `muse.ai/s/` links and re-link pages to each other with relative links
  3. Drop each page into its own folder, hook in the shared header/footer + stylesheet
  4. Fix broken images / paths where the files exist, flag where they don't
  5. Push, then verify each URL live before saying it's live

## Custom domain (optional)

Settings → Pages → Custom domain, add the DNS A/CNAME records GitHub lists. HTTPS is free/automatic.

## Limits (free)

1 GB per site, ~100 GB/month soft bandwidth, static HTML/CSS/JS only (no server/database). Commercial use restricted to non-ecommerce per GitHub Pages terms — check if that ever changes for a project.

## Structure

```
index.html                  Home
404.html                    Not-found page
.nojekyll                   Tells GitHub to serve files as-is
assets/style.css            One stylesheet for the site
assets/nav.js               ONE canonical header/footer — edit here only
pages/example-page/         Copy this folder for each new/restored page
```
