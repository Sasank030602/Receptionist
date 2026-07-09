import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: [
      'react-icons/ri',
      'react-icons/md',
      'react-icons/rx',
      'react-icons/fa',
      'react-icons/io5',
      'react-icons/ci'
    ]
  }
})
