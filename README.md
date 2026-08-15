# jac

A single page that says hello and shows the current time.

## Layout

```
src/main.ts       the clock, in TypeScript
static/           index.html, styles.css — copied to dist/ as-is
build.ts          bundles src/main.ts to dist/main.js with Deno.bundle()
serve.ts          serves dist/ for local preview
```

## Tasks

```sh
deno task build   # writes dist/
deno task serve   # builds, then serves dist/ on http://localhost:8000
```

`build.ts` calls [`Deno.bundle()`](https://docs.deno.com/api/deno/~/Deno.bundle), which is still unstable, so
`deno.json` enables it with `"unstable": ["bundle"]` rather than a `--unstable-bundle` flag on every command.

## Deployment

`.github/workflows/pages.yml` builds on every push and pull request, and deploys to GitHub Pages when the pushed branch
is the repository's default branch.

To turn the site on, in **Settings → Pages → Build and deployment**, set **Source** to **GitHub Actions**. Nothing else
needs changing — the workflow already requests the `pages: write` and `id-token: write` permissions it needs, and
creates the `github-pages` environment on its first run.

The site is then served at https://quentinadam.github.io/jac/. All asset paths are relative, so the project sub-path
works without extra configuration.
