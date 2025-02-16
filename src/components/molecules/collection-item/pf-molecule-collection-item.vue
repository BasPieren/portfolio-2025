<template>
    <div
        v-editable="blok"
        class="collection-item"
    >
        <img
            v-if="blok?.media"
            class="collection-item__media"
            :src="blok?.media"
        />

        <div
            v-if="blok?.value || blok?.description"
            class="collection-item__content"
        >
            <h4 class="collection-item__value h3--primary">
                {{ blok?.value }}
            </h4>

            <p class="collection-item__description p--small p--bold">
                {{ blok?.description }}
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
