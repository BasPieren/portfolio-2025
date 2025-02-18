<template>
    <article class="card">
        <header class="card__header">
            <img
                v-if="blok?.media"
                class="card__media"
                :src="blok?.media"
            />
        </header>

        <div class="card__content">
            <h5
                v-if="blok?.heading"
                class="card__heading"
            >
                {{ blok.heading }}
            </h5>

            <p
                v-if="blok?.paragraph"
                class="card__paragraph p--small"
            >
                {{ blok.paragraph }}
            </p>
        </div>
    </article>
</template>

<script setup lang="ts">
defineProps({ blok: Object });
</script>

<style scoped lang="scss">
@use 'pf-molecule-card'
</style>
