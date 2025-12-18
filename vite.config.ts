import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import viteImagemin from 'vite-plugin-imagemin';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    const isProduction = mode === 'production';

    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
        fs: {
          // Allow serving files from one level up to the project root
          allow: ['.']
        }
      },
      plugins: [
        react(),
        VitePWA({
          registerType: 'autoUpdate',
          includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
          manifest: {
            name: 'All Roads To Kill Bill',
            short_name: 'Kill Bill Graph',
            description: 'Interactive 3D visualization of Quentin Tarantino\'s film influence network',
            theme_color: '#FFD700',
            background_color: '#000000',
            display: 'standalone',
            icons: [
              {
                src: 'pwa-192x192.png',
                sizes: '192x192',
                type: 'image/png'
              },
              {
                src: 'pwa-512x512.png',
                sizes: '512x512',
                type: 'image/png'
              }
            ]
          }
        }),
        viteImagemin({
          gifsicle: {
            optimizationLevel: 7,
            interlaced: false,
          },
          optipng: {
            optimizationLevel: 7,
          },
          mozjpeg: {
            quality: 80,
          },
          pngquant: {
            quality: [0.8, 0.9],
            speed: 4,
          },
          svgo: {
            plugins: [
              {
                name: 'removeViewBox',
              },
              {
                name: 'removeEmptyAttrs',
                active: false,
              },
            ],
          },
        })
      ],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      },
      build: {
        // Enable enhanced bundle splitting
        rollupOptions: {
          output: {
            manualChunks: (id) => {
              // Vendor chunks for better caching
              if (id.includes('node_modules')) {
                if (id.includes('react') || id.includes('react-dom')) {
                  return 'react-vendor';
                }
                if (id.includes('three') || id.includes('react-force-graph')) {
                  return 'three-vendor';
                }
                if (id.includes('fuse.js') || id.includes('hammerjs')) {
                  return 'utils-vendor';
                }
                return 'vendor';
              }
              // App chunks
              if (id.includes('graphData_final_with_posters')) {
                return 'graph-data';
              }
              if (id.includes('components/Graph')) {
                return 'graph-component';
              }
              if (id.includes('components/')) {
                return 'ui-components';
              }
              if (id.includes('utils/')) {
                return 'utils';
              }
            },
          },
        },
        // Optimize chunk sizes
        chunkSizeWarningLimit: 1000, // Warn if chunks exceed 1000kb
        minify: isProduction ? 'terser' : false,
        terserOptions: isProduction ? {
          compress: {
            drop_console: true,
            drop_debugger: true,
          },
        } : undefined,
        // Enable source maps for debugging in production
        sourcemap: !isProduction,
        // Optimize CSS
        cssCodeSplit: true,
      },
      // Enable gzip compression for assets
      optimizeDeps: {
        include: ['react', 'react-dom', 'three', 'react-force-graph-3d', 'fuse.js', 'hammerjs'],
      },
    };
});
