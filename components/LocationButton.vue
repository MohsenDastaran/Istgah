<template>
  <div class="fixed bottom-4 right-4 z-[1000]">
    <button
      @click="locate"
      class="bg-white p-3 rounded-full shadow-lg hover:bg-gray-50 active:bg-gray-100"
      title="Find my location"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-6 h-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
      >
        <circle cx="12" cy="12" r="3"></circle>
        <path d="M12 2v3m0 14v3m-9-9H2m19 0h-3"></path>
      </svg>
    </button>
    <!-- <div v-if="error" class="mt-4 bg-red-50 text-red-600 p-4 rounded-lg shadow-lg max-w-xs">
      {{ error }}
      <button 
        v-if="error.includes('denied')"
        @click="openSettings"
        class="mt-2 text-sm underline"
      >
        Open browser settings
      </button> 
    </div>-->
  </div>
</template>

<script setup>
const emit = defineEmits(["locate"]);
const locate = (e) => {
  console.log(e);
  emit("locate");
};
</script>
