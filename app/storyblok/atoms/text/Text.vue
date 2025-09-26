<template>
    <section
        v-editable="blok"
        class="text"
    >
        <h1
            v-if="blok?.mainHeading"
            class="text__main-heading"
        >
            {{ blok.mainHeading }}
        </h1>

        <h2
            v-if="blok?.heading"
            class="text__heading"
        >
            {{ blok.heading }}
        </h2>

        <h3
            v-if="blok?.subheading"
            class="text__subheading"
        >
            {{ blok.subheading }}
        </h3>

        <p
            v-if="blok?.paragraph"
            class="text__paragraph"
        >
            {{ blok.paragraph }}
        </p>
    </section>
</template>

<script setup lang="ts">
defineProps({ blok: Object });
</script>

<style scoped lang="scss">
@use 'style';
</style>
