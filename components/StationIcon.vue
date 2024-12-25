<template>
  <div
    class="station-icon"
    :class="{ 'is-bus': isBRT }"
    :style="{ backgroundColor: color }"
  >
    <svg
      v-if="isBRT"
      xmlns="http://www.w3.org/2000/svg"
      class="h-3 w-3"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        d="M8 16H6V8h2v8zm6 0h-2V8h2v8zm3-12H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h1v1c0 .55.45 1 1 1s1-.45 1-1v-1h8v1c0 .55.45 1 1 1s1-.45 1-1v-1h1c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 10H3V6h14v8z"
      />
    </svg>
    <svg
      v-else
      xmlns="http://www.w3.org/2000/svg"
      class="h-3 w-3"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        d="M4 16l-1-1V3c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2v12l-1 1H4zm2-4h8v-1H6v1zm0-3h8V8H6v1zm0-3h8V5H6v1z"
      />
    </svg>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  color: string;
  isBRT: boolean;
}>();
</script>
