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

Pages is enabled with **Settings → Pages → Source** set to **GitHub Actions**. The workflow requests the `pages: write`
and `id-token: write` permissions itself, so nothing else needs granting.

The site is served at https://quentinadam.github.io/jac/. All asset paths are relative, so the project sub-path works
without extra configuration.
