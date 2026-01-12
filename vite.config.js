import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './',
  
  // AÑADE ESTO:
  build: {
    outDir: 'dist',
    copyPublicDir: true, 
    assetsDir: 'assets',
  },
  
  publicDir: 'public', 
})