<template>
  <select
    v-model="currentLocale"
    class="w-full p-2 rounded-lg bg-gray-100 dark:bg-gray-700 border-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
  >
    <option value="en">English</option>
    <option value="fa">فارسی</option>
  </select>
</template>

<script setup lang="ts">
const { locale } = useI18n();
const currentLocale = computed({
  get: () => locale.value,
  set: (value) => {
    locale.value = value;
  }
});
</script>