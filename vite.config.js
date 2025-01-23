import { defineConfig } from 'vite'
import autoprefixer from "autoprefixer";

export default defineConfig({
  root: 'src',
  server: {
    port: 3000,
    open: './index.html'
  },
  css: {
    postcss: {
      plugins: [autoprefixer],
    },
  },
  base: './',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    assetsInlineLimit: 0,
    rollupOptions: {
      input: [
        'src/index.html',
      ],
      output: {
        entryFileNames: `assets/js/[name].js`,
        chunkFileNames: `assets/js/[name].js`,
        assetFileNames: (assetInfo) => {
          let filename = assetInfo.originalFileName;

          if (filename != null) {
            filename = filename.split('/');
            filename.pop();
          }
            
          if (/\.( gif|jpeg|jpg|png|svg|webp )$/.test(assetInfo.name)) {
            return filename != null ? filename.join('/') + '/[name].[ext]' : 'assets/img/[name].[ext]' 
          }
          if (/\.css$/.test(assetInfo.name)) {
            return 'assets/css/[name].[ext]';
          }
          return 'assets/[name].[ext]';
        }
      }
    },
  },
  envDir: './env'
})