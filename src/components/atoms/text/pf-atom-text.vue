<template>
    <section
        v-editable="blok"
        class="text"
    >
        <h1 class="text__heading">
            {{ blok.heading }}
        </h1>

        <h2 class="text__subheading">
            {{ blok.subheading }}
        </h2>

        <p class="text__paragraph">
            {{ blok.paragraph }}
        </p>
    </section>
</template>

<script setup lang="ts">
defineProps({ blok: Object });
</script>

<style scoped lang="scss">
@use 'pf-atom-text';
</style>
