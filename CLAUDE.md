# jac

A redesign concept for the jac-machines.com website, built as a static Deno site.

## Checks

Run all three after changing any file, and fix whatever they report:

```sh
deno fmt
deno lint
deno check build.ts serve.ts src/main.ts
```

`deno fmt` rewrites files in place; `lint` and `check` only report. CI runs the same three (with `deno fmt --check`)
before building, so a failure here is a failure there. `deno check build.ts` also covers everything under `src/site/`,
which `build.ts` imports.

`.claude/hooks/deno-checks.sh` runs them automatically after each edit, but do not rely on it — it exits quietly when
Deno is not on `PATH`.

## Conventions

- Single quotes, 120-column lines — set in `deno.json`, applied by `deno fmt`.
- Pages are rendered at build time from `src/site/`: `data.ts` holds the catalogue, `layout.ts` the shell, `pages/*.ts`
  one module per page. Add a page by exporting a `Page` and listing it in `src/site/pages.ts`.
- `src/main.ts` is the only browser bundle. `src/site/` is Deno-side and never shipped to the browser.
- `Deno.bundle()` is unstable and enabled through `"unstable": ["bundle"]` in `deno.json`, not a `--unstable-bundle`
  flag. Type-checking it also needs `deno.unstable` in `compilerOptions.lib`.
- `static/` is copied to `dist/` recursively; keep asset paths in the templates relative — the site is served from the
  `/jac/` sub-path on GitHub Pages.
- `dist/` is generated. Never edit or commit it.

## Layout gotcha

Cards that hold a photograph use flexbox, not `grid-template-rows: auto 1fr`. With a grid row, the intrinsic width of a
lazily loaded image leaks into the track sizing once it arrives and the card's text overflows its own box.
