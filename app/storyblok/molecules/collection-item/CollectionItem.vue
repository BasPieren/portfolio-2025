<template>
    <div
        v-editable="blok"
        class="collection-item"
    >
        <div class="collection-item__media-wrapper">
            <img
                v-if="blok?.media"
                class="collection-item__media"
                :src="blok?.media"
            />
        </div>

        <p v-if="blok?.description">
            {{ blok?.description }}
        </p>
    </div>
</template>

<script setup lang="ts">
defineProps({ blok: Object });
</script>

<style scoped src="./collection-item.css"></style>
