<template>
    <div
        v-editable="blok"
        class="collection-item"
    >
        <img
            v-if="blok.media"
            class="collection-item__media"
            :src="blok.media"
        />

        <div
            v-if="blok.value || blok.description"
            class="collection-item__content"
        >
            <h3 class="collection-item__value h3--highlight">
                {{ blok.value }}
            </h3>

            <p class="collection-item__description p--small">
                {{ blok.description }}
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps({ blok: Object });
</script>

<style lang="scss">
@use 'pf-molecule-collection-item'
</style>
