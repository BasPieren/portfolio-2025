<template>
    <div class="toggle-apperance">
        <input 
            id="apperance-toggle"
            type="checkbox"
            name="apperance-toggle"
            class="toggle-apperance__input"
        />
        <label 
            for="apperance-toggle"
            class="toggle-apperance__label"
            @click="handleClick"
        />
    </div>
</template>

<script setup lang="ts">
const handleClick = () => {
    document.documentElement.classList.toggle('light');
};
</script>

<style scoped lang="scss">
@use 'style';
</style>