import '../src/style/main.scss';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { StoryblokVue, apiPlugin } from '@storyblok/vue';

import App from './App.vue';
import pfPage from './components/page/pf-page.vue';
import pfLayout from './components/layout/pf-layout.vue';
import pfAtomText from './components/atoms/text/pf-atom-text.vue';
import pfOrganismCollection from './components/organisms/collection/pf-organism-collection.vue';
import pfMoleculeCollectionItem from './components/molecules/collection-item/pf-molecule-collection-item.vue';
import pfMoleculeHero from './components/molecules/hero/pf-molecule-hero.vue';
import router from './router';

const app = createApp(App);

app.use(StoryblokVue, {
    accessToken: import.meta.env.VITE_STORYBLOK_PREVIEW_TOKEN,
    use: [ apiPlugin ],
});

app.use(createPinia());
app.use(router);

app.mount('#app');

app.component('page', pfPage);
app.component('layout', pfLayout);
app.component('text', pfAtomText);
app.component('collection', pfOrganismCollection);
app.component('collection_item', pfMoleculeCollectionItem);
app.component('hero', pfMoleculeHero);
