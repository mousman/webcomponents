import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ mode }) => ({
  plugins: [vue(), vueDevTools(), tailwindcss()],
  define: {
    'process.env.NODE_ENV': JSON.stringify(mode),
  },
  build: {
    outDir: 'dist-lib',
    lib: {
      entry: './src/main-wc.ts',
      name: 'diabolo-wc',
      fileName: () => `diabolo-notifications.mjs`,
      formats: ['es'],
    },
    // shall we include or not the vue chunk ? I'm assuming yes in this case, but if not ,
    // just uncomment the following lines and add the external vue load somewhere in the html
    //
    //
    // rollupOptions: {
    //   external: ['vue'],
    //   output: {
    //     globals: {
    //       vue: 'Vue',
    //     },
    //   },
    // },
    cssCodeSplit: true,
    rollupOptions: {
      input: {
        demo: './demo.html',
      },
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
}))
