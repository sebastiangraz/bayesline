import { defineConfig } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react-swc';
import { patchCssModules } from 'vite-css-modules';
import { fileURLToPath, URL } from 'url';
import { TanStackRouterVite } from '@tanstack/router-vite-plugin';
// https://vitejs.dev/config/
export default defineConfig({
  //use patchCssModules until VITE 5.3 is released
  plugins: [patchCssModules(), react(), TanStackRouterVite()],
  css: {
    modules: {
      localsConvention: 'camelCaseOnly'
    }
  },
  resolve: {
    alias: [
      /* '@': '/src' */
      { find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url)) }
    ]
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        nested: resolve(__dirname, 'signup/index.html')
      }
    }
  }
});
