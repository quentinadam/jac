# jac

A single static page that shows the current time, built with Deno.

## Checks

Run all three after changing any file, and fix whatever they report:

```sh
deno fmt
deno lint
deno check build.ts serve.ts src/main.ts
```

`deno fmt` rewrites files in place; `lint` and `check` only report. CI runs the same three (with `deno fmt --check`)
before building, so a failure here is a failure there.

`.claude/hooks/deno-checks.sh` runs them automatically after each edit, but do not rely on it — it exits quietly when
Deno is not on `PATH`.

## Conventions

- Single quotes, 120-column lines — set in `deno.json`, applied by `deno fmt`.
- `Deno.bundle()` is unstable and enabled through `"unstable": ["bundle"]` in `deno.json`, not a `--unstable-bundle`
  flag. Type-checking it also needs `deno.unstable` in `compilerOptions.lib`.
- `static/` is copied to `dist/` verbatim; only `src/` is bundled. Keep asset paths in `index.html` relative — the site
  is served from the `/jac/` sub-path on GitHub Pages.
- `dist/` is generated. Never edit or commit it.
