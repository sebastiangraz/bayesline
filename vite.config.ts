import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { patchCssModules } from 'vite-css-modules';
import { fileURLToPath, URL } from 'url';

// https://vitejs.dev/config/
export default defineConfig({
  //use patchCssModules until VITE 5.3 is released
  plugins: [patchCssModules(), react()],
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
  }
});
