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
            <h4 
                v-if="blok?.value"
                class="collection-item__value"
            >
                {{ blok?.value }}
            </h4>

            <p 
                v-if="blok?.description"
                :class="[
                    'u-small',
                    'u-light',
                    'u-semibold',
                    'collection-item__description', 
                ]"
            >
                {{ blok?.description }}
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps({ blok: Object });
</script>

<style lang="scss">
@use 'style';
</style>
