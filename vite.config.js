import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // base: './',
  server: {
      proxy: {
        // 'api': 'http://127.0.0.1:8000'
        // 'api': 'http://44.206.246.99:8000',
        'api': 'http://18.118.122.152:8000'
      }
    },
  plugins: [react()],
})
