import { defineConfig, UserConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { patchCssModules } from 'vite-css-modules';
import { fileURLToPath, URL } from 'url';
import { TanStackRouterVite } from '@tanstack/router-vite-plugin';
import remarkFrontmatter from 'remark-frontmatter';
import remarkMdxFrontmatter from 'remark-mdx-frontmatter';
import remarkgfm from 'remark-gfm';
import remarkemoji from 'remark-emoji';

// https://vitejs.dev/config/

export default defineConfig(async (): Promise<UserConfig> => {
  const mdx = await import('@mdx-js/rollup');

  return {
    //use patchCssModules until VITE 5.3 is released
    plugins: [
      patchCssModules(),
      mdx.default({
        remarkPlugins: [remarkgfm, remarkFrontmatter, remarkMdxFrontmatter, remarkemoji],
        providerImportSource: '@mdx-js/react'
      }),
      react(),
      TanStackRouterVite()
    ],
    css: {
      modules: {
        localsConvention: 'camelCaseOnly'
      }
    },
    base: './',
    resolve: {
      alias: [
        /* '@': '/src' */
        { find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url)) }
      ]
    }
  };
});
