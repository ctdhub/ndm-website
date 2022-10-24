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
        about: './about.html',
        beliefs: './beliefs.html',
        directions: './directions.html',
        giving: './giving.html',
        leadership: './leadership.html',
        livestream: './livestream.html',
        info: './info.html'
      }
    }
  }
})
