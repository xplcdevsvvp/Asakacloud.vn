import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  build: {
    // Output the built site into `dist` (this runs inside the `frontend/` folder)
    // GitHub Actions runs `npm run build` with working-directory = ./frontend,
    // so the correct output folder is `frontend/dist` on the repo root.
    outDir: 'dist',
    emptyOutDir: true,
  },
})
