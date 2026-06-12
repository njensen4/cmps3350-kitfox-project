import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/team-3/lab-d-nikolas/',
  plugins: [react()],
})
