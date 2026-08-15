/**
 * Serves `dist/` on http://localhost:8000 for local preview.
 *
 * Run with `deno task serve`, which builds first.
 */

const root = 'dist';

const contentTypes: Record<string, string> = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.map': 'application/json; charset=utf-8',
};

Deno.serve(async (request) => {
  const { pathname } = new URL(request.url);
  const path = root + (pathname.endsWith('/') ? `${pathname}index.html` : pathname);

  try {
    const file = await Deno.readFile(path);
    const extension = path.slice(path.lastIndexOf('.'));
    return new Response(file, {
      headers: { 'content-type': contentTypes[extension] ?? 'application/octet-stream' },
    });
  } catch {
    return new Response('Not found', { status: 404 });
  }
});
