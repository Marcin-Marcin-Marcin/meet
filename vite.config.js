import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  base: '/',
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: false,
      srcDir: 'src',
      filename: 'service-worker.js',
      workbox: {
        runtimeCaching: [
          {
            urlPattern: /\/.*\.png$/,
            handler: 'StaleWhileRevalidate',
            options: {
              cacheName: 'images',
              expiration: { maxEntries: 50 }
            }
          }
        ]
      }
    })
  ],
})
