import { defineNuxtConfig } from 'nuxt/config';
import fs from 'fs'

export default defineNuxtConfig({
    compatibilityDate: '2025-09-12',
    devtools: { enabled: true },
    modules: [[
        '@nuxtjs/eslint-module',
        {
            lintOnStart: false
        },
    ], [
        '@storyblok/nuxt',
        {
            accessToken: process.env.STORYBLOK_PREVIEW_TOKEN,
            apiOptions: { region: 'eu' },
            devtools: { enabled: true },
        },
    ], '@nuxtjs/device'],
    devServer: {
        https: {
            key: '../certs/localhost-key.pem',
            cert: '../certs/localhost.pem',
        }
    },
    css: ['~/style/main.css'],
    app: {
        head: {
            link: [
                { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
                { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
                {
                    rel: 'stylesheet',
                    href: 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap',
                },
            ],
        },
    },
});