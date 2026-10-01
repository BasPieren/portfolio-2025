<template>
    <section class="home">
        <StoryblokComponent
            v-if="story"
            :blok="story.content"
        />
    </section>
</template>

<script setup>
const { story } = await useAsyncStoryblok('home', {
    lazy: false,
    api: { version: 'draft' },
});
</script>

<style scoped src="./style.css"></style>
