import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import Sitemap from 'vite-plugin-sitemap';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return {
    build: {
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return id.toString().split('node_modules/')[1].split('/')[0].toString();
            }
          },
          entryFileNames: `[name].${env.npm_package_version}.js`,
          chunkFileNames: `[name].${env.npm_package_version}.js`,
          assetFileNames: `[name].${env.npm_package_version}.[ext]`,
        },
      },
    },
    plugins: [
      react(),
      tailwindcss(),
      Sitemap({
        hostname: env.VITE_PUBLIC_URL,
        dynamicRoutes: JSON.parse(env.VITE_SITEMAP_URLS || ''),
        robots: [
          {
            userAgent: '*',
            allow: JSON.parse(env.VITE_ALLOW_ROBOTS_URLS || ''),
            disallow: JSON.parse(env.VITE_DISALLOW_ROBOTS_URLS || ''),
          },
        ],
      }),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
  };
});
