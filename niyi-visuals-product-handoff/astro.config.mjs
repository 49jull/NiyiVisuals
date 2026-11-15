import { defineConfig } from 'astro/config';

// Preview-only handoff: the other pages are deliberately outside this phase.
const pending = new Set(['/about/', '/services/', '/portfolio/', '/gallery-1/', '/gallery-2/', '/gallery-3/', '/contact/']);
function existingPageHandoff() {
  const middleware = (request, response, next) => {
    const url = new URL(request.url ?? '/', 'http://localhost');
    const path = url.pathname.endsWith('/') ? url.pathname : `${url.pathname}/`;
    if (!pending.has(path)) return next();
    response.writeHead(302, { Location: `https://niyivisuals.mypixieset.com${path}${url.search}`, 'Cache-Control': 'no-store' });
    response.end();
  };
  return {
    name: 'niyi-preview-existing-pages',
    configureServer(server) { server.middlewares.use(middleware); },
    configurePreviewServer(server) { server.middlewares.use(middleware); },
  };
}
export default defineConfig({
  output: 'static',
  trailingSlash: 'always',
  devToolbar: { enabled: false },
  vite: { plugins: [existingPageHandoff()] },
});
