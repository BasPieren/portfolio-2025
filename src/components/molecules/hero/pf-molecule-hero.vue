<template>
    <section
        v-editable="blok"
        class="hero"
    >
        <img
            v-if="blok.media"
            class="hero__media"
            :src="blok.media"
        >

        <div class="hero__content">
            <h4 class="hero__heading">
                {{ blok.heading }}
            </h4>

            <p class="hero__paragraph p--small">
                {{ blok.paragraph }}
            </p>
        </div>

        <div class="hero__socials">
            <a
                v-if="blok.linkedin"
                class="hero__button hero__button--linkedin"
                :href="blok.linkedin.url"
                target="_blank"
            >
                <span class="hero__button-label">
                    LinkedIn
                </span>

                <font-awesome-icon :icon="faLinkedin" />
            </a>
        </div>
    </section>
</template>

<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

defineProps({ blok: Object });
</script>

<style scoped lang="scss">
@use 'pf-molecule-hero';
</style>
