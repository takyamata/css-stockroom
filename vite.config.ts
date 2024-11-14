import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    css: {
        modules: {
            generateScopedName: '[name]__[local]',
        },
        // preprocessorOptions: {
        //     scss: {
        //         additionalData: `@use "./src/styles/global/" as *;`,
        //     },
        // },
    },
    resolve: {
        alias: {
            '@assets': path.resolve(__dirname, 'src/assets'),
            '@components': path.resolve(__dirname, 'src/components'),
            '@layout': path.resolve(__dirname, 'src/layout'),
            '@pages': path.resolve(__dirname, 'src/pages'),
            '@styles': path.resolve(__dirname, 'src/styles/'),
        },
    },
});
