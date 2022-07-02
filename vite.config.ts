import { visualizer } from 'rollup-plugin-visualizer';
import { fileURLToPath, URL } from 'url';
import { defineConfig } from 'vite';
import eslintPlugin from 'vite-plugin-eslint';

import svgr from '@honkhonk/vite-plugin-svgr';
import react from '@vitejs/plugin-react';

import GlobalsPolyfills from '@esbuild-plugins/node-globals-polyfill'
import NodeModulesPolyfills from '@esbuild-plugins/node-modules-polyfill'

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    global: 'globalThis',
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  plugins: [svgr(), react(), eslintPlugin(), visualizer()],
  optimizeDeps: {
    esbuildOptions: {
      plugins: [
        NodeModulesPolyfills(),
        GlobalsPolyfills({
          process: true,
          buffer: true,
        })
      ],
      define: {
        global: 'globalThis',
      }
    }
  }
  // build: {
  //   rollupOptions: {
  //     output: {
  //       manualChunks(id) {
  //         if (id.includes('node_modules')) {
  //           return id
  //             .toString()
  //             .split('node_modules/')[1]
  //             .split('/')[0]
  //             .toString();
  //         }
  //       },
  //     },
  //   },
  // },
});
