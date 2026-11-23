<template>
    <article
        v-editable="blok"
        class="experience"
    >
        <div class="experience__container">
            <div class="experience__headings">
                <h3 v-if="blok?.heading">
                    {{ blok?.heading }}
                </h3>

                <h4 v-if="blok?.subheading">
                    {{ blok?.subheading }}
                </h4>
            </div>

            <h5 v-if="blok?.date">
                {{ blok?.date }}
            </h5>
        </div>

        <p v-if="blok?.paragraph">
            {{ blok?.paragraph }}
        </p>
    </article>
</template>

<script setup>
defineProps({ blok: Object });
</script>

<style scoped src="./experience.css"></style>
