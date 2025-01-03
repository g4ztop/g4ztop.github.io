import { defineConfig } from 'vite'

export default defineConfig({
  base: '/your-repo-name/',  // Replace with your actual repository name
  resolve: {
    alias: {
      'three': '/node_modules/three'
    }
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      external: ['three'],
      output: {
        globals: {
          three: 'THREE'
        }
      }
    }
  }
})
