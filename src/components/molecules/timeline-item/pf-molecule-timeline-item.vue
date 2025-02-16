<template>
    <div
        v-editable="blok"
        class="timeline-item"
    >
        <div class="timeline-item__icon">
            <font-awesome-icon
                v-if="blok?.work"
                :icon="faBriefcase"
            />

            <font-awesome-icon
                v-if="blok?.school"
                :icon="faGraduationCap"
            />
        </div>

        <div class="timeline-item__content">
            <h4 class="timeline-item__heading">
                {{ blok?.heading }}
            </h4>

            <p class="timeline-item__paragraph p--bold">
                {{ blok?.paragraph }}
            </p>
        </div>

        <p class="timeline-item__date p--small">
            {{ blok?.date }}
        </p>
    </div>
</template>

<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons';

defineProps({ blok: Object });
</script>

<style lang="scss">
@use 'pf-molecule-timeline-item'
</style>
