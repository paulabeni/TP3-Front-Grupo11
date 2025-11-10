import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api/deezer': {
        target: 'https://api.deezer.com',
        changeOrigin: true,
        configure: (proxy, _options) => {
          proxy.on('proxyReq', (proxyReq, req, _res) => {
            const url = new URL(req.url, 'http://localhost');
            const params = url.searchParams;
            
            if (params.has('artist')) {
              proxyReq.path = `/search/artist?q=${encodeURIComponent(params.get('artist'))}&limit=1`;
            } else {
              const index = params.get('index') || '0';
              const limit = params.get('limit') || '10';
              proxyReq.path = `/chart/0/tracks?index=${index}&limit=${limit}`;
            }
          });
        },
      },
    },
  },
})
