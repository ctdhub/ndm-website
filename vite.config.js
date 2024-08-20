import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import { resolve } from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: "",
  build: {
    outDir: "docs",
    rollupOptions: {
      input: {
        main: "./index.html",
        home: "./home.html",
        about: "./about.html",
        beliefs: "./beliefs.html",
        directions: "./directions.html",
        events: "./events.html",
        framework: "./framework.html",
        giving: "./giving.html",
        info: "./info.html",
        leadership: "./leadership.html",
        livestream: "./livestream.html",
        missing: "./404.html",
      },
    },
  },
})
