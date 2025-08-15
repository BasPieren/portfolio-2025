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
                class="card__paragraph"
            >
                {{ blok.paragraph }}
            </p>

            <div
                v-if="blok?.tags && blok.tags.length > 0"
                class="card__tags"
            >
                <span
                    v-for="tag in blok?.tags"
                    :key="tag"
                    :class="[
                        'card__tag',
                        `card__tag--${tag.toLowerCase()}`,
                        'p--small',
                    ]"
                >
                    {{ tag }}
                </span>
            </div>
        </div>
    </article>
</template>

<script setup lang="ts">
defineProps({ blok: Object });
</script>

<style scoped lang="scss">
@use 'style';
</style>
