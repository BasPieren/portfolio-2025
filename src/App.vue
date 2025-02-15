<template>
    <header>
        <div
            class="wrapper"
        >
            <nav>
                <RouterLink
                    to="/"
                >Home</RouterLink>
            </nav>
        </div>
    </header>

    <Suspense>
        <RouterView />
    </Suspense>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
</script>
