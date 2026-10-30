<template>
    <!-- <header class="header">
        <div class="header__backgdrop"></div>
        
        <page-navigation />
        <atom-apperance-toggle v-if="isDesktop" />
    </header> -->

    <section
        v-editable="blok"
        class="layout"
    >
        <div class="layout__inner">
            <div :class="['layout__column', 'layout__column--left']">
                <StoryblokComponent
                    v-for="inblok in blok?.column_left"
                    :blok="inblok"
                    :key="inblok._uid"
                />
            </div>

            <div :class="['layout__column', 'layout__column--right']">
                <StoryblokComponent
                    v-for="inblok in blok?.column_right"
                    :blok="inblok"
                    :key="inblok._uid"
                />
            </div>
        </div>
    </section>
</template>

<script setup>
defineProps({ blok: Object });

const { isDesktop } = useDevice();
</script>

<style scoped src="./layout.css"></style>
