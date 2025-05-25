import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/App-Arbitros/', // Cambia "App-Arbitros" por el nombre de tu repo de GitHub
  plugins: [react()],
})
