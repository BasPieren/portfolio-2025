import { defineNuxtConfig } from 'nuxt/config';
import fs from 'fs'

export default defineNuxtConfig({
    compatibilityDate: '2025-09-12',
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
        https: {
            key: '../certs/localhost-key.pem',
            cert: '../certs/localhost.pem',
        }
    },
});