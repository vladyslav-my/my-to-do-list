/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';
import * as path from 'path';
import { readFileSync } from 'fs';

// https://vitejs.dev/config/
export default defineConfig({
   plugins: [react(), svgr()],
   resolve: {
      alias: {
         '@': path.resolve('src'),
         '@scss': path.resolve('src/scss'),
         '@assets': path.resolve('src/assets'),
      },
   },
   css: {
      preprocessorOptions: {
         scss: {
            additionalData: readFileSync(
               path.resolve('src/scss/global.scss'),
               (_err, data) => data.toString()
            ),
         },
      },
   },
});
