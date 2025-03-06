import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/shop-item-app/', // если нужно деплоить на GitHub Pages
  build: {
    outDir: 'dist', // убедитесь, что выходная папка указана правильно
  },
});
