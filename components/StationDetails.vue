<template>
  <div v-if="station" class="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-[1000] bg-white p-4 rounded-lg shadow-lg">
    <div class="text-center mb-4">
      <h3 class="font-bold">{{ station['Name English'] }}</h3>
      <p class="text-gray-600">{{ station['Name Persian'] }}</p>
    </div>
    <div class="flex gap-2">
      <a
        :href="googleMapsUrl"
        target="_blank"
        class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Show on Google Maps
      </a>
      <a
        :href="directionsUrl"
        target="_blank"
        class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
      >
        Get Directions
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Station } from '~/types/station';

const props = defineProps<{
  station: Station | null;
}>();

const googleMapsUrl = computed(() => {
  if (!props.station) return '#';
  return `https://www.google.com/maps/search/?api=1&query=${props.station.Latitude},${props.station.Longitude}`;
});

const directionsUrl = computed(() => {
  if (!props.station) return '#';
  return `https://www.google.com/maps/dir/?api=1&destination=${props.station.Latitude},${props.station.Longitude}`;
});
</script>