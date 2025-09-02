import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/', // 👈 This is important for Netlify
  plugins: [react()],
  server: {
    hmr: true,
    host: true,
    port: 5173,
  },
});
