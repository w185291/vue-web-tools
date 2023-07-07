import { defineConfig } from 'vite'
import * as path from 'path';
import vue from '@vitejs/plugin-vue';
import Sitemap from 'vite-plugin-sitemap';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Sitemap({
      hostname : "https://vue-tools.roger-soho.win/",
      exclude: [
        '/tools/url'
      , '/tools/json'
      , '/tools/one-way-encryption'
      , '/tools/reversible-encryption'
      , '/query/ip'
    ]
    }),
  ],
  resolve: {
    alias: [
        { find: '@', replacement: path.resolve(__dirname, 'src') },
    ],
  },
 
})
