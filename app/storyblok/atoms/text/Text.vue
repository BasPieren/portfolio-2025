<template>
    <section
        v-editable="blok"
        class="text"
    >
        <h1 v-if="blok?.mainHeading">
            {{ blok.mainHeading }}
        </h1>

        <h2 v-if="blok?.heading">
            {{ blok.heading }}
        </h2>

        <h3 v-if="blok?.subheading">
            {{ blok.subheading }}
        </h3>

        <p 
            v-if="blok?.paragraph"
            :class="blok?.intro ? `intro` : ''"
        >
            {{ blok.paragraph }}
        </p>
    </section>
</template>

<script setup lang="ts">
defineProps({ blok: Object });
</script>

<style scoped src="./text.css"></style>
