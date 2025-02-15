import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueDevTools from 'vite-plugin-vue-devtools';
import basicSsl from '@vitejs/plugin-basic-ssl';

export default defineConfig({
    plugins: [ vue(), vueDevTools(), basicSsl() ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
            '@pages': fileURLToPath(new URL('./src/pages', import.meta.url)),
            '@components': fileURLToPath(new URL('./src/components', import.meta.url)),
        },
    },
    server: {
        port: 3000,
        https: true,
    },
});
