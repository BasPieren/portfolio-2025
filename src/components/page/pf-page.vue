<template>
    <div
        v-editable="blok"
        class="page"
    >
        <StoryblokComponent
            v-for="inblok in blok?.body"
            :blok="inblok"
            :key="inblok._uid"
        />
    </div>
</template>

<script setup lang="ts">
defineProps({ blok: Object });
</script>

<style scoped lang="scss">
@use 'pf-page';
</style>
