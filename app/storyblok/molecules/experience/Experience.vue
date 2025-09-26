<template>
    <article
        v-editable="blok"
        class="experience"
    >
        <div class="experience__container">
            <div class="experience__headings">
                <h3 
                    v-if="blok?.heading"
                    class="experience__heading"
                >
                    {{ blok?.heading }}
                </h3>

                <h5
                    v-if="blok?.subheading"
                    :class="[
                        'experience__subheading',
                        'u-light',
                        'u-semibold',
                    ]"
                >
                    {{ blok?.subheading }}
                </h5>
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
        </div>

        <p
            v-if="blok?.paragraph"
            class="timeline-item__paragraph"
        >
            {{ blok?.paragraph }}
        </p>
    </article>
</template>

<script setup >
defineProps({ blok: Object });
</script>

<style lang="scss">
@use 'style';
</style>
