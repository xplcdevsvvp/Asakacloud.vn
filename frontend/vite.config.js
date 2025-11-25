import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  build: {
    // Output the built site into frontend/dist so GitHub Actions can publish it
    outDir: 'frontend/dist',
    emptyOutDir: true,
  },
})
