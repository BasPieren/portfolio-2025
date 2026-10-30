<template>
    <section class="page">
        <StoryblokComponent
            v-if="story"
            :blok="story.content"
        />
    </section>
</template>

<script setup>
const { story } = await useAsyncStoryblok('about', {
    lazy: false,
    api: { version: 'draft' },
});
</script>
