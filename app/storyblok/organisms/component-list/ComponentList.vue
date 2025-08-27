<template>
    <section
        v-editable="blok"
        class="component-list"
    >
        <StoryblokComponent
            v-for="inblok in blok?.componentList_items"
            :blok="inblok"
            :key="inblok._uid"
        />
    </section>
</template>

<script setup >
defineProps({ blok: Object });
</script>

<style scoped lang="scss">
@use 'style';
</style>
