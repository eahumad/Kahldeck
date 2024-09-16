import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      onwarn(warning, warn) {
        if (warning.code === 'UNUSED_EXTERNAL_IMPORT') return
        warn(warning)
      }
    },
    outDir: 'dist',
  },
  server: {
    port: 5173,
    proxy: {
      '/eel': {
        changeOrigin: true,
        ws: true,
        target: 'http://localhost:8476',
      }
      
    },
  }
})
