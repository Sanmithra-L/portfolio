import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vite configuration for Sanmithra's portfolio.
// Uses React plugin; Tailwind CSS is handled via PostCSS (v3 style).
export default defineConfig({
  plugins: [react()],
})
