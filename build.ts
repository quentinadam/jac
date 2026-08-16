/**
 * Builds the site into `dist/`.
 *
 * Pages are rendered from the templates in `src/site/`, `src/main.ts` is bundled
 * to `dist/main.js` with `Deno.bundle()`, and `static/` is copied over the top.
 *
 * Run with `deno task build`.
 */

import { render } from './src/site/layout.ts';
import { pages } from './src/site/pages.ts';

const outputDir = 'dist';

await Deno.remove(outputDir, { recursive: true }).catch((error: unknown) => {
  if (!(error instanceof Deno.errors.NotFound)) {
    throw error;
  }
});

const result = await Deno.bundle({
  entrypoints: ['src/main.ts'],
  outputDir,
  platform: 'browser',
  format: 'esm',
  minify: true,
  sourcemap: 'linked',
});

for (const warning of result.warnings) {
  console.warn(`warning: ${warning.text}`);
}

if (!result.success) {
  for (const error of result.errors) {
    console.error(`error: ${error.text}`);
  }
  Deno.exit(1);
}

await Deno.mkdir(outputDir, { recursive: true });

/** Copies `static/` into `dist/`, keeping the directory structure. */
async function copyTree(from: string, to: string) {
  await Deno.mkdir(to, { recursive: true });
  for await (const entry of Deno.readDir(from)) {
    if (entry.isDirectory) {
      await copyTree(`${from}/${entry.name}`, `${to}/${entry.name}`);
    } else if (entry.isFile) {
      await Deno.copyFile(`${from}/${entry.name}`, `${to}/${entry.name}`);
    }
  }
}

await copyTree('static', outputDir);

for (const page of pages) {
  await Deno.writeTextFile(`${outputDir}/${page.file}`, render(page));
}

console.log(`built ${outputDir}/ — ${pages.length} pages`);
