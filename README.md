# Uproot — Static Archive

Static HTML snapshot of the website for Jace Clayton's book *Uproot: Travels in 21st-Century Music and Digital Culture* (Farrar, Straus and Giroux, 2016).

**Site owner:** [Jace Clayton](https://jaceclayton.com) (DJ Rupture)
**Maintained by:** Max Fenton

---

## What this repo is

This repository contains a fully self-contained static HTML version of the Uproot book site. It is auto-generated from the Kirby CMS source and deployed to GitHub Pages.

**Do not edit files in this repo by hand.** All content lives in the Kirby source repo. Regenerate with `bin/archive` (see below) whenever the source changes.

---

## Source

The site is built with [Kirby CMS](https://getkirby.com) (Kirby 4.9, PHP 8.4). The source repository is:

**[github.com/maxfenton/uprootbook-kirby](https://github.com/maxfenton/uprootbook-kirby)**

That repo contains all content, templates, and the `bin/archive` script that generates this static snapshot.

---

## How the static archive is built

From inside the `uprootbook-kirby` repo, with DDEV running:

```bash
bin/archive
```

This script:
1. Spins a wget recursive mirror of the local DDEV site (`https://uprootbook-kirby.ddev.site`)
2. Converts all internal links to relative paths
3. Restructures pages from `page.html` to `page/index.html` for clean URLs (matching Kirby's URL structure)
4. Copies fonts directly (more reliable than wget's page-requisites for font files)
5. Replaces the PHP redirect pages (`/order`, `/preorder`) with static meta-refresh stubs pointing to Amazon
6. Writes the result to `dist/` in the source repo

The output (`dist/`) is this repository.

---

## Deployment

This repo is deployed to GitHub Pages from the `gh-pages` branch, serving at:

**`https://maxfenton.github.io/uprootbook-static/`**

The intended production URL is **`uproot.jaceclayton.com`** (CNAME pending — Jace needs to add a DNS record pointing to GitHub Pages).

---

## Updating the static site

After making content or template changes in the Kirby source repo:

```bash
# In uprootbook-kirby/ with DDEV running:
bin/archive

# Then in this repo (dist/):
git add -A
git commit -m "Regenerate static archive"
git push
```

GitHub Pages rebuilds automatically on push, usually within 30–60 seconds.

---

## About the book

*Uproot* is a guided tour of 21st-century music and digital culture by Jace Clayton aka DJ Rupture. Published by Farrar, Straus and Giroux (2016). The book includes a ten-chapter online listening guide with embedded audio and video — the main feature of this site.
