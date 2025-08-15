<template>
    <div
        v-editable="blok"
        class="column-section"
    >
        <StoryblokComponent
            v-for="inblok in blok?.columnSection_elements"
            :blok="inblok"
            :key="inblok._uid"
        />
    </div>
</template>

<script setup lang="ts">
defineProps({ blok: Object });
</script>

<style scoped lang="scss">
@use 'style';
</style>
