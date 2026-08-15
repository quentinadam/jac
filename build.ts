/**
 * Builds the site into `dist/`: `src/main.ts` is bundled to `dist/main.js` with
 * `Deno.bundle()`, and everything in `static/` is copied alongside it.
 *
 * Run with `deno task build`.
 */

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
for await (const entry of Deno.readDir('static')) {
  if (entry.isFile) {
    await Deno.copyFile(`static/${entry.name}`, `${outputDir}/${entry.name}`);
  }
}

console.log(`built ${outputDir}/`);
