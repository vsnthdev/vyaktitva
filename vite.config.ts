/*
 *  Vite.js bundler configuration for vyaktitva.
 *  Created On 28 December 2022
 */

import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    build: {
        emptyOutDir: true,
        outDir: path.resolve('dist'),
        lib: {
            entry: path.resolve(__dirname, 'src/lib/index.ts'),
            name: 'vyaktitva',
            fileName: format => `vyaktitva.${format}.js`
        },
        rollupOptions: {
            external: ['react', 'react-dom'],
            output: {
                globals: {
                    react: 'React'
                }
            }
        }
    },
    plugins: [react()],
})
