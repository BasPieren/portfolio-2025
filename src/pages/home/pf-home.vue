<template>
    <section
        class="home"
    >
        <StoryblokComponent
            v-if="story"
            :blok="story.content"
        />
    </section>
</template>

<script setup lang="ts">
import { useStoryblok } from '@storyblok/vue';
import { onBeforeMount } from 'vue';
import { redirectToAuthCodeFlow } from '@/utils/redirect-to-spotify-auth-flow';
import { getSpotifyAccessToken } from '@/utils/get-spotify-access-token';
import { getSpotifyProfile } from '@/utils/get-spotify-profile';

const story = await useStoryblok('home', { version: 'draft' });

onBeforeMount(async () => {
    // const params = new URLSearchParams(window.location.search);
    // const code = params.get('code');

    // if (!code) {
    //     redirectToAuthCodeFlow();
    // } else {
    //     const accessToken = await getSpotifyAccessToken(code);
    //     const spotifyProfile = await getSpotifyProfile(accessToken);

    //     console.log('Spotify Profile:', spotifyProfile);
    // }
});
</script>

<style scoped lang="scss">
@use 'pf-home';
</style>
