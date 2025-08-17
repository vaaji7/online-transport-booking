import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/online-transport-booking/',  // ensures asset URLs are correct on GitHub Pages
})
