import { defineConfig } from 'vite';

export default defineConfig({
    root: '.',
    publicDir: 'public',
    build: {
        outDir: 'dist',
        assetsDir: 'assets',
        minify: 'terser',
        cssMinify: true
    },
    server: {
        port: 5173,
        open: true
    }
});
