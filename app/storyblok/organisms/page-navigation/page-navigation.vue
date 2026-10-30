<template>
    <nav class="navigation">
        <div class="navigation__inner">
            <div class="navigation__backdrop"></div>
            <div class="navigation__edge"></div>

            <ul class="navigation__list">
                <li class="navigation__item">
                    <NuxtLink 
                        to="/about"
                        class="navigation__link"
                    >
                        About
                    </NuxtLink>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script setup>

</script>

<style scoped src="./page-navigation.css"></style>
