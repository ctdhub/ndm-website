import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '',
  build: {
    outDir: 'docs',
    rollupOptions: {
      input: {
        main: './index.html',
        home: './home.html',
        //about: './about/index.html',
        //beliefs: './beliefs/index.html',
        //directions: './direction/index.html',
        //giving: './giving/index.html',
        //leadership: './leadership/index.html',
        //livestream: './livestream/index.html'
      }
    }
  }
})
