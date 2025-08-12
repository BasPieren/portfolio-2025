<template>
    <section
        class="home"
    >
        <StoryblokComponent
            v-if="story"
            :blok="story.content"
        />
    </section>
</template>

<script setup lang="ts">
import { useStoryblok } from '@storyblok/vue';

const story = await useStoryblok('home', { version: 'draft' });
</script>

<style scoped lang="scss">
@use 'pf-home';
</style>
