import { defineConfig, squooshImageService } from 'astro/config';
import compressor from "astro-compressor";
import purgecss from "astro-purgecss";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  build: {
    assets: 'assets/images',
    inlineStylesheets: 'never',
    format: 'file',
    base: '/',
    // assetsPrefix: '/dist/'
  },
  image: {
    service: squooshImageService(),
    domains: ["astro.build"]
  },
  compressHTML: true,
  optimizeHoistedScript: true,
  output: 'static',
  vite: {
    build: {
      rollupOptions: {
        output: {
          chunkFileNames: 'assets/js/[name]-[hash].js',
          entryFileNames: 'assets/js/[name]-[hash].js',
          assetFileNames: ({
            name
          }) => {
            if (/\.(gif|jpe?g|png|svg)$/.test(name ?? '')) {
              return 'assets/images/[name]-[hash][extname]';
            }
            if (/\.css$/.test(name ?? '')) {
              return 'assets/css/[name]-[hash][extname]';
            }
            // if (/\.ts$/.test(name ?? '')) {
            //   return 'assets/js/[name]-[hash][extname]';
            // }

            // default value
            // ref: https://rollupjs.org/guide/en/#outputassetfilenames
            return 'assets/[name]-[hash][extname]';
          }
        }
      },
      emptyOutDir: true
    }
    // css: {
    //     transformer: "lightningcss",
    //   },
  },
  integrations: [compressor({
    gzip: true,
    brotli: false
  }), purgecss({safelist:['svg']}), icon()]
});
// safelist