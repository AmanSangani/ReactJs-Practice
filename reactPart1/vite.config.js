import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ["@material-tailwind/react"]
  },
  build: {
    rollupOptions: {
      external: ['@material-tailwind/react']
    }
  }
})
