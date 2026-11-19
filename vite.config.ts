import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';

function normalizeBasePath(rawBase?: string): string {
  if (!rawBase || rawBase.trim() === '') {
    return '/';
  }
  let base = rawBase.trim();
  if (!base.startsWith('/')) {
    base = `/${base}`;
  }
  if (!base.endsWith('/')) {
    base = `${base}/`;
  }
  return base;
}

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, process.cwd(), '');
  const basePath = normalizeBasePath(env.VITE_BASE_PATH || process.env.VITE_BASE_PATH);

  return {
    base: basePath,
    plugins: [
      react(),
      tailwindcss(),
      // Copies src/assets into dist/ so root-relative URLs like
      // "/src/assets/images/..." (e.g. generate_image output) still resolve
      // in production builds. Do not remove.
      {
        name: 'copy-unbundled-src-assets',
        apply: 'build',
        closeBundle(error?: Error): void {
          if (error) {
            return;
          }
          const distDir = path.resolve(__dirname, 'dist');
          const srcAssets = path.resolve(__dirname, 'src/assets');
          const distAssets = path.resolve(distDir, 'src/assets');
          if (fs.existsSync(distDir) && fs.existsSync(srcAssets)) {
            fs.cpSync(srcAssets, distAssets, {recursive: true, force: true});
          }
        },
      },
      // Emits a GitHub Pages SPA fallback 404.html aligned with the active VITE_BASE_PATH.
      // Preserves deep links, query strings, and custom 404 rendering without redirect loops.
      {
        name: 'github-pages-spa-fallback',
        apply: 'build',
        closeBundle(error?: Error): void {
          if (error) {
            return;
          }
          const distDir = path.resolve(__dirname, 'dist');
          if (!fs.existsSync(distDir)) {
            return;
          }
          const fallbackHtml = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>ShivShilp LLC</title>
    <script>
      (function () {
        var base = ${JSON.stringify(basePath)};
        var target = window.location.pathname + window.location.search + window.location.hash;
        try {
          if (target !== base && !sessionStorage.getItem('shivshilp_spa_redirect_attempted')) {
            sessionStorage.setItem('shivshilp_spa_redirect', target);
            sessionStorage.setItem('shivshilp_spa_redirect_attempted', '1');
            window.location.replace(base);
            return;
          }
          sessionStorage.removeItem('shivshilp_spa_redirect_attempted');
        } catch (e) {}
      })();
    </script>
  </head>
  <body style="font-family: system-ui, -apple-system, sans-serif; padding: 3rem 1.5rem; color: #101828; background: #F5F7FB;">
    <main style="max-width: 36rem; margin: 0 auto;">
      <h1 style="font-size: 1.5rem; margin-bottom: 0.75rem;">Redirecting to ShivShilp LLC</h1>
      <p style="color: #475467; line-height: 1.6; margin-bottom: 1.5rem;">
        If you are not redirected automatically, continue to the home page.
      </p>
      <a href="${basePath}" style="color: #155EEF; font-weight: 600;">Return to ShivShilp LLC</a>
    </main>
  </body>
</html>
`;
          fs.writeFileSync(path.join(distDir, '404.html'), fallbackHtml, 'utf-8');
        },
      },
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
