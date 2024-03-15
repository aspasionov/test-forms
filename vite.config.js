import path from "path"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  resolve: {
    alias: {
      '@assets': path.resolve(__dirname, './src/assets'),
      '@components': path.resolve(__dirname, './src/components'),
      '@screens': path.resolve(__dirname, './src/screens'),
      '@validations': path.resolve(__dirname, './src/validations'),
      '@api': path.resolve(__dirname, './src/api'),
      '@helpers': path.resolve(__dirname, './src/helpers'),
      '@contexts': path.resolve(__dirname, './src/contexts'),
    },
  },

  plugins: [react()],
})
