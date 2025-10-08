import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    host: true, // 0.0.0.0 - allows access via localhost and LAN IP
    port: 5173,
    strictPort: false,
    open: true,
  },
  preview: {
    host: true,
    port: 5173,
  },
});
