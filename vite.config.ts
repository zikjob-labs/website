import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslintPlugin from 'vite-plugin-eslint';
import svgr from '@honkhonk/vite-plugin-svgr'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(path.resolve(), './src'),
    },
  },
  plugins: [svgr(), react(), eslintPlugin()],
});
