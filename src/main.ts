import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { StoryblokVue, apiPlugin } from '@storyblok/vue';

import App from './App.vue';
import Grid from './components/Grid.vue';
import Page from './components/Page.vue';
import Teaser from './components/Teaser.vue';
import Feature from './components/Feature.vue';
import router from './router';

const app = createApp(App);

app.use(StoryblokVue, {
    accessToken: import.meta.env.VITE_STORYBLOK_PREVIEW_TOKEN,
    use: [ apiPlugin ],
});

app.use(createPinia());
app.use(router);

app.mount('#app');

app.component('Grid', Grid);
app.component('Page', Page);
app.component('Teaser', Teaser);
app.component('Feature', Feature);
