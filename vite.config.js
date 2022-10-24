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
        home: './pages/home.html',
        about: './pages/about.html',
        beliefs: './pages/beliefs.html',
        directions: './pages/directions.html',
        giving: './pages/giving.html',
        leadership: './pages/leadership.html',
        livestream: './pages/livestream.html',
        info: './pages/info.html'
      }
    }
  }
})
