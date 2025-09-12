import { defineNuxtConfig } from 'nuxt/config';
import mkcert from "vite-plugin-mkcert";

export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: [
        [
            '@nuxtjs/eslint-module',
            {
                lintOnStart: false
            },
        ],
        [
            '@storyblok/nuxt',
            {
                accessToken: process.env.STORYBLOK_PREVIEW_TOKEN,
                apiOptions: { region: 'eu' },
                devtools: { enabled: true },
            },
        ],
    ],
    devServer: {
        https: true,
    },
});