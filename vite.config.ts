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
        // Aggressive bundle splitting to reduce chunk sizes
        rollupOptions: {
          output: {
            manualChunks: (id) => {
              // Vendor chunks for better caching
              if (id.includes('node_modules')) {
                if (id.includes('react') || id.includes('react-dom')) {
                  return 'react-vendor';
                }
                if (id.includes('three')) {
                  // Split Three.js into smaller chunks
                  if (id.includes('three/examples') || id.includes('three/addons')) {
                    return 'three-addons';
                  }
                  if (id.includes('three/core') || id.includes('three/src')) {
                    return 'three-core';
                  }
                  return 'three-vendor';
                }
                if (id.includes('react-force-graph-3d')) {
                  return 'three-graph';
                }
                if (id.includes('fuse.js') || id.includes('hammerjs')) {
                  return 'utils-vendor';
                }
                // Group smaller utilities together
                if (id.includes('focus-trap') || id.includes('react-intersection') || id.includes('react-swipeable')) {
                  return 'ui-utils';
                }
                return 'vendor';
              }
              // App chunks - split large files
              if (id.includes('graphData_enriched') || id.includes('graphData_final')) {
                return 'graph-data';
              }
              if (id.includes('components/Graph') || id.includes('Graph.tsx')) {
                return 'graph-component';
              }
              if (id.includes('components/')) {
                return 'ui-components';
              }
              if (id.includes('utils/') || id.includes('hooks/')) {
                return 'utils';
              }
              if (id.includes('types.ts') || id.includes('themes.ts')) {
                return 'config';
              }
            },
          },
        },
        // Increase chunk size limit and optimize
        chunkSizeWarningLimit: 750, // Lower warning threshold
        minify: isProduction ? 'terser' : false,
        terserOptions: isProduction ? {
          compress: {
            drop_console: true,
            drop_debugger: true,
            pure_funcs: ['console.log', 'console.info', 'console.debug'],
          },
          mangle: {
            safari10: true,
          },
        } : undefined,
        // Enable source maps only for development
        sourcemap: false, // Disable source maps for production to reduce size
        // Optimize CSS
        cssCodeSplit: true,
        // Optimize assets
        assetsInlineLimit: 4096, // Inline smaller assets
        // Reduce bundle size
        reportCompressedSize: false, // Skip compression reporting to speed up builds
      },
      // Enable gzip compression for assets
      optimizeDeps: {
        include: ['react', 'react-dom', 'three', 'react-force-graph-3d', 'fuse.js', 'hammerjs'],
      },
    };
});
