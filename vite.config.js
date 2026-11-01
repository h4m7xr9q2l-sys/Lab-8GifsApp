import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/Lab-8GifsApp/",// Reemplaza por el nombre exacto de tu repositorio en GitHub
})