import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
  plugins: [svelte({ compilerOptions: { css: 'injected' } })],
  build: {
    lib: {
      entry: 'src/index.ts',
      formats: ['es'],
      fileName: () => 'worn-dialog.js'
    },
    rollupOptions: { external: ['svelte', 'svelte/transition', 'svelte/motion'] },
    outDir: 'dist',
    emptyOutDir: true
  }
});
