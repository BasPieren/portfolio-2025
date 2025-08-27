import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    modules: [
        [
            '@storyblok/nuxt',
            {
                accessToken: process.env.STORYBLOK_PREVIEW_TOKEN,
                apiOptions: { region: 'eu' },
                devtools: { enabled: true },
            },
        ],
    ],
});
