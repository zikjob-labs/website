import { visualizer } from 'rollup-plugin-visualizer';
import { fileURLToPath, URL } from 'url';
import { defineConfig } from 'vite';
import eslintPlugin from 'vite-plugin-eslint';

import svgr from '@honkhonk/vite-plugin-svgr';
import react from '@vitejs/plugin-react';

import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill';
import { NodeModulesPolyfillPlugin } from '@esbuild-plugins/node-modules-polyfill';
import rollupNodePolyFill from 'rollup-plugin-node-polyfills';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  plugins: [svgr(), react(), eslintPlugin(), visualizer()],
  optimizeDeps: {
    esbuildOptions: {
      plugins: [
        NodeModulesPolyfillPlugin(),
        NodeGlobalsPolyfillPlugin({
          process: true,
          buffer: true,
        }),
      ],
      define: {
        global: 'globalThis',
      },
    },
  },
  build: {
    rollupOptions: {
      plugins: [rollupNodePolyFill()],
      // output: {
      //   manualChunks(id) {
      //     if (id.includes('node_modules')) {
      //       return id
      //         .toString()
      //         .split('node_modules/')[1]
      //         .split('/')[0]
      //         .toString();
      //     }
      //   },
      // },
    },
  },
});
