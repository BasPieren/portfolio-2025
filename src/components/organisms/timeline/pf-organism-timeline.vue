<template>
    <article
        v-editable="blok"
        class="timeline"
    >
        <StoryblokComponent
            v-for="inblok in blok?.timeline_items"
            :blok="inblok"
            :key="inblok._uid"
        />
    </article>
</template>

<script setup lang="ts">
defineProps({ blok: Object });
</script>

<style scoped lang="scss">
@use 'pf-organism-timeline';
</style>
