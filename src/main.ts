import '../src/style/main.scss';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { StoryblokVue, apiPlugin } from '@storyblok/vue';

import App from './App.vue';
import pfPage from './components/page/pf-page.vue';
import pfHero from './components/hero/pf-hero.vue';
import router from './router';

const app = createApp(App);

app.use(StoryblokVue, {
    accessToken: import.meta.env.VITE_STORYBLOK_PREVIEW_TOKEN,
    use: [ apiPlugin ],
});

app.use(createPinia());
app.use(router);

app.mount('#app');

app.component('Page', pfPage);
app.component('Hero', pfHero);
