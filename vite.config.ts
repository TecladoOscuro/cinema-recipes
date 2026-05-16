import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg'],
      manifest: {
        name: 'Platós de Cine',
        short_name: 'Platós de Cine',
        description: 'Comidas icónicas de películas y series — recetas recreadas de la gran pantalla',
        theme_color: '#111118',
        background_color: '#111118',
        display: 'standalone',
        orientation: 'portrait',
        start_url: '/cinema-recipes/',
        scope: '/cinema-recipes/',
        icons: [
          { src: 'icon-192.png', sizes: '192x192', type: 'image/png' },
          { src: 'icon-512.png', sizes: '512x512', type: 'image/png' },
        ],
      },
    }),
  ],
  base: '/cinema-recipes/',
})
