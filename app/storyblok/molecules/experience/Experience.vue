<template>
    <div
        v-editable="blok"
        class="experience"
    >
        <div class="experience__content">
            <h4 
                v-if="blok?.heading"
                class="experience__heading"
            >
                {{ blok?.heading }}
            </h4>

            <p
                v-if="blok?.subheading"
                :class="[
                    'experience__subheading',
                    'u-light',
                    'u-semibold',
                ]"
            >
                {{ blok?.subheading }}
            </p>
        </div>

        <p
            v-if="blok?.date"
            :class="[
                'experience__date',
                'u-small'
            ]"
        >
            {{ blok?.date }}
        </p>

        <p
            v-if="blok?.paragraph"
            :class="[
                'timeline-item__paragraph',
                'u-small'
            ]"
        >
            {{ blok?.paragraph }}
        </p>
    </div>
</template>

<script setup >
defineProps({ blok: Object });
</script>

<style lang="scss">
@use 'style';
</style>
