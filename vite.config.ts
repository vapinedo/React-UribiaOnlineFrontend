import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  base: '/React-UribiaOnlineFrontend/',
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        display: "standalone",
        display_override: ["window-controls-overlay"],
        name: 'Uribia Online',
        short_name: 'Uribia Online',
        description: 'E-commerce para la ciudad de Uribia en La Guajira, Colombia',
        start_url: "/React-UribiaOnlineFrontend/",
        scope: "/React-UribiaOnlineFrontend/",
        theme_color: '#19223c',
        background_color: "#d4d4d4",
        icons: [
          {
            src: 'pwa-164x64.png',
            sizes: '64x64',
            type: 'image/png',
          },
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: "any",
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: "maskable",
          },
        ],
      },
    })
  ],
  build: {
    outDir: 'build',
  },
  resolve: {
    alias: {
      '@app': '/src',
      '@mocks': '/src/mocks',
      '@hooks': '/src/hooks',
      '@stores': '/src/stores',
      '@routes': '/src/routes',
      '@models': '/src/models',
      '@layouts': '/src/layouts',
      '@features': '/src/features',
      '@services': '/src/services',
      '@components': '/src/components',
      '@firebaseConfig': '/src/firebaseConfig',
    },
  },
});