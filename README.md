# jac

A redesign concept for [jac-machines.com](https://www.jac-machines.com/) — the Belgian manufacturer of bread slicers and
dough processing machines — built as a static site with Deno and served from GitHub Pages at
https://quentinadam.github.io/jac/.

Five pages: the home page, the two ranges (bread slicers, dough processing), the company, and contact.

## Layout

```
src/site/data.ts      the catalogue: families, 47 machines, milestones, offices
src/site/layout.ts    the page shell — head, masthead with mega menus, footer
src/site/components.ts  machine cards, section headings, family blocks
src/site/pages/       one module per page, each exporting a `Page`
src/main.ts           the browser script: menus, drawer, reveals, scroll spy, form
static/               styles.css, fonts/, assets/ — copied to dist/ as-is
build.ts              renders the pages, bundles src/main.ts, copies static/
serve.ts              serves dist/ for local preview
```

## Tasks

```sh
deno task build   # writes dist/
deno task serve   # builds, then serves dist/ on http://localhost:8000
```

`build.ts` calls [`Deno.bundle()`](https://docs.deno.com/api/deno/~/Deno.bundle), which is still unstable, so
`deno.json` enables it with `"unstable": ["bundle"]` rather than a `--unstable-bundle` flag on every command.

## Assets

Machine photography, the logo and the company photographs come from jac-machines.com. The product shots were trimmed to
their subject, squared onto a white field and converted to WebP; the whole set is under 1 MB. Archivo and Inter are
self-hosted in `static/fonts/` so the pages need no third-party request.

## Deployment

`.github/workflows/pages.yml` builds on every push and pull request, and deploys to GitHub Pages when the pushed branch
is the repository's default branch.

Pages is enabled with **Settings → Pages → Source** set to **GitHub Actions**. The workflow requests the `pages: write`
and `id-token: write` permissions itself, so nothing else needs granting.

All asset paths are relative, so the `/jac/` project sub-path works without extra configuration.
