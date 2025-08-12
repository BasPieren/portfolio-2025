<template>
    <div
        v-editable="blok"
        :class="[
            'collection-item',
            {
                'collection-item--strava': blok?.platform === Platform.Strava,
                'collection-item--steam': blok?.platform === Platform.Steam,
                'collection-item--spotify': blok?.platform === Platform.Spotify,
            }
        ]"
    >
        <img
            v-if="blok?.media"
            class="collection-item__media"
            :src="blok?.media"
        />

        <div
            v-if="blok?.value || blok?.description"
            class="collection-item__content"
        >
            <h4 class="collection-item__value">
                {{ dynamicValue || blok?.value }}
            </h4>

            <p class="collection-item__description p--small p--light p--semibold">
                {{ blok?.description }}
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { Platform } from '@/enums/platform';
import { getSteamOwnedGames } from '@/utils/get-steam-owned-games';
import { getStravaStats } from '@/utils/get-strava-stats';

const props = defineProps({ blok: Object });

const dynamicValue = ref<string | number | null>(null);

onMounted(async () => {
    switch (props.blok?.platform) {
    case Platform.Steam:
        const steamGames = await getSteamOwnedGames();
        dynamicValue.value = steamGames.response.game_count;
        break;
    case Platform.Strava:
        const stravaStats = await getStravaStats();
        dynamicValue.value = (stravaStats.ytd_ride_totals.distance / 1000).toFixed();
        break;
    default:
        dynamicValue.value = null;
    }
});

</script>

<style lang="scss">
@use 'pf-molecule-collection-item'
</style>
