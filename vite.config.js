import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // اگر روی GitHub Pages منتشر می‌کنید، نام مخزن را اینجا بگذارید:
  // base: '/my-repo-name/',
  server: { port: 5173, open: true }
})
