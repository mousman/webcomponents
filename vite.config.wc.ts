import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import tailwindcss from '@tailwindcss/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Components from 'unplugin-vue-components/vite'

export default defineConfig(({ mode }) => ({
  plugins: [
    vue(),
    vueDevTools(),
    tailwindcss(),
    Icons({
      compiler: 'vue3',
    }),
    Components({
      resolvers: [IconsResolver()],
    }),
  ],
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
