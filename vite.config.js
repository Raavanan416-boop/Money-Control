import { defineConfig } from 'vite';
import fs from 'fs';
import path from 'path';

// Build version — unique per build, used by service worker for cache busting.
// Using Date.now() ensures a new string on every `npm run build`.
const BUILD_VERSION = Date.now().toString();

/**
 * Custom Vite plugin — rewrites __BUILD_VERSION__ inside the copied sw.js
 * after the build is complete.
 *
 * Vite copies public/ files verbatim (no Rollup transform), so `define`
 * substitution does not work for service workers in public/.
 * This plugin patches the output file directly in the closeBundle hook.
 */
function serviceWorkerVersionPlugin() {
  return {
    name: 'sw-version-inject',
    closeBundle() {
      const swOut = path.resolve('dist', 'sw.js');
      if (fs.existsSync(swOut)) {
        let content = fs.readFileSync(swOut, 'utf-8');
        content = content.replaceAll('__BUILD_VERSION__', BUILD_VERSION);
        fs.writeFileSync(swOut, content, 'utf-8');
        console.log(`[sw-version-inject] Injected BUILD_VERSION=${BUILD_VERSION} into dist/sw.js`);
      }
    }
  };
}

export default defineConfig({
  root: '.',
  publicDir: 'public',
  plugins: [
    serviceWorkerVersionPlugin()
  ],
  server: {
    port: 3000,
    strictPort: false,
    cors: true,
    open: false
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        // Content hash in filename — new deploy = new filename = automatic cache bust.
        // Every build produces unique URLs; SW cache-first strategy is safe.
        entryFileNames: 'assets/app-bundle.[hash].js',
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash].[ext]'
      }
    }
  }
});
