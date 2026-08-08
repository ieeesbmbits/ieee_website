import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  base: './',
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        execom: resolve(__dirname, 'execom.html'),
        gallery: resolve(__dirname, 'gallery.html'),
        event: resolve(__dirname, 'event.html')
      }
    }
  }
});
