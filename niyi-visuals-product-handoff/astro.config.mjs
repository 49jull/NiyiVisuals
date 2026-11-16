import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// The published service/price page remains authoritative while terms are unresolved.
const pending = new Set(['/services/']);
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
  integrations: [react()],
  trailingSlash: 'always',
  devToolbar: { enabled: false },
  vite: { plugins: [existingPageHandoff()] },
});
