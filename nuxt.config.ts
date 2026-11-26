import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
    compatibilityDate: '2025-09-12',
    devtools: { enabled: true },
    modules: [
        [
            '@storyblok/nuxt',
            {
                accessToken: process.env.STORYBLOK_PREVIEW_TOKEN,
                apiOptions: { region: 'eu' },
                devtools: { enabled: true },
            },
        ],
        '@nuxtjs/device',
    ],
    devServer: {
        https: {
            key: '../certs/localhost-key.pem',
            cert: '../certs/localhost.pem',
        },
    },
    css: ['allo-font', '~/style/main.css'],
    build: {
        transpile: ['@fortawesome/vue-fontawesome'],
    },
});
