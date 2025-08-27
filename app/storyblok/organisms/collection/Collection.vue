<template>
    <article
        v-editable="blok"
        class="collection"
    >
        <StoryblokComponent
            v-for="inblok in blok?.collection_items"
            :blok="inblok"
            :key="inblok._uid"
        />
    </article>
</template>

<script setup >
defineProps({ blok: Object });
</script>

<style scoped lang="scss">
@use 'style';
</style>
