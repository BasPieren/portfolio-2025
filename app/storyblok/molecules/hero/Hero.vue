<template>
    <section
        v-editable="blok"
        :class="[
            'container',
            'container--column',
            'container--large-gap',
            'hero'
        ]"
    >
        <div class="hero__media-wrapper">
            <img
                v-if="blok?.media"
                class="hero__media"
                :src="blok?.media"
            />
        </div>

        <div class="hero__content">
            <h3>
                {{ blok?.heading }}
            </h3>

            <p>
                {{ blok?.paragraph }}
            </p>
        </div>

        <div class="hero__socials">
            <a
                v-if="blok?.linkedin"
                class="hero__button"
                :href="blok?.linkedin.url"
                target="_blank"
            >
                <span class="hero__button-label"> LinkedIn </span>

                <font-awesome-icon :icon="faLinkedin" />
            </a>
        </div>
    </section>
</template>

<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

defineProps({ blok: Object });
</script>

<style scoped src="./hero.css"></style>
