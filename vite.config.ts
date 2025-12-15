import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

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
      plugins: [react()],
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
        // Enable bundle splitting
        rollupOptions: {
          output: {
            manualChunks: {
              // Vendor chunks for better caching
              'react-vendor': ['react', 'react-dom'],
              'three-vendor': ['three', 'react-force-graph-3d'],
              // App chunks
              'graph-data': ['./graphData_final_with_posters'],
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
        include: ['react', 'react-dom', 'three', 'react-force-graph-3d'],
      },
    };
});
