<template>
    <section
        v-editable="blok"
        class="hero"
    >
        <div
            class="hero__inner"
        >
            {{ blok.heading }}

            {{ blok.paragraph }}
        </div>
    </section>
</template>

<script setup lang="ts">
defineProps({ blok: Object });
</script>

<style scoped lang="scss">
@use 'pf-hero';
</style>
