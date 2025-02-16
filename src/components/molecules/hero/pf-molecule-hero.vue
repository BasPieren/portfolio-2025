<template>
    <section
        v-editable="blok"
        class="hero"
    >
        <img
            v-if="blok.media"
            class="hero__media"
            :src="blok.media"
        >

        <div class="hero__content">
            <h3 class="hero__heading">
                {{ blok.heading }}
            </h3>

            <p class="hero__paragraph p--small">
                {{ blok.paragraph }}
            </p>
        </div>
    </section>
</template>

<script setup lang="ts">
defineProps({ blok: Object });
</script>

<style scoped lang="scss">
@use 'pf-molecule-hero';
</style>
