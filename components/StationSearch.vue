<template>
  <div class="fixed top-4 left-4 z-[1000] w-72">
    <div class="bg-white rounded-lg shadow-lg p-4">
      <input
        v-model="searchTerm"
        type="text"
        placeholder="Search stations..."
        class="w-full px-3 py-2 border rounded-lg mb-2"
      />
      
      <div class="flex gap-2 mb-2">
        <label class="flex items-center">
          <input
            type="checkbox"
            v-model="showMetro"
            class="mr-2"
          />
          Metro
        </label>
        <label class="flex items-center">
          <input
            type="checkbox"
            v-model="showBRT"
            class="mr-2"
          />
          BRT
        </label>
      </div>

      <div v-if="searchResults.length > 0" class="max-h-60 overflow-y-auto">
        <div
          v-for="station in searchResults"
          :key="station.ID"
          class="p-2 hover:bg-gray-100 cursor-pointer rounded"
          @click="selectStation(station)"
        >
          <div>{{ station['Name English'] }}</div>
          <div class="text-sm text-gray-600">{{ station['Name Persian'] }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Station } from '~/types/station';

const searchTerm = ref('');
const showMetro = ref(true);
const showBRT = ref(true);

const props = defineProps<{
  stations: Station[];
}>();

const emit = defineEmits<{
  (e: 'filter', stations: Station[]): void;
  (e: 'select', station: Station): void;
}>();

const searchResults = computed(() => {
  if (!searchTerm.value) return [];
  
  return props.stations.filter(station => 
    (station['Name English'].toLowerCase().includes(searchTerm.value.toLowerCase()) ||
     station['Name Persian'].includes(searchTerm.value)) &&
    ((showMetro.value && !station['Line(s)'].includes('BRT')) ||
     (showBRT.value && station['Line(s)'].includes('BRT')))
  ).slice(0, 10);
});

const filteredStations = computed(() => {
  return props.stations.filter(station => 
    (showMetro.value && !station['Line(s)'].includes('BRT')) ||
    (showBRT.value && station['Line(s)'].includes('BRT'))
  );
});

watch([showMetro, showBRT], () => {
  emit('filter', filteredStations.value);
});

function selectStation(station: Station) {
  emit('select', station);
  searchTerm.value = '';
}
</script>