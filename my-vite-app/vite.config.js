import { defineConfig } from 'vite'

export default defineConfig({
  base: "/",
  assetsInclude: ['**/*.glsl'],
  build: {
    rollupOptions: {
      input: {
        main: '/index.html'
      }
    }
  }
})