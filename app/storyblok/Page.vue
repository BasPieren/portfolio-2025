<template>
    <main>
        <StoryblokComponent
            v-for="currentBlok in blok.body"
            :key="currentBlok._uid"
            :blok="currentBlok"
        />
    </main>
</template>

<script setup>
defineProps({ blok: Object });
</script>
