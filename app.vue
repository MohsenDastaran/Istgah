<template>
  <div
    class="min-h-screen transition-colors duration-200"
    :class="[colorMode.value === 'dark' ? 'dark bg-gray-900' : 'bg-gray-100']"
    :dir="$i18n.locale === 'fa' ? 'rtl' : 'ltr'"
  >
    <MetroMap :stations="stations" />
  </div>
</template>

<script setup lang="ts">
import type { Station } from "~/types/station";
import { stations } from "~/data/stations";

useHead({
  title: "Istgah",
  meta: [
    {
      name: "description",
      content: "Tehran Public transportation App - حمل و نقل عمومی مترو تهران",
    },
  ],
  bodyAttrs: {
    class: "test",
  },
  script: [{ innerHTML: "console.log('Hello world')" }],
});

const colorMode = useColorMode();
const { locale } = useI18n();

// Load saved preferences
onMounted(() => {
  const savedLocale = localStorage.getItem("preferred-locale");
  const savedColorMode = localStorage.getItem("preferred-theme");

  if (savedLocale) {
    locale.value = savedLocale;
  }

  if (savedColorMode) {
    colorMode.preference = savedColorMode;
  }
});

// Save preferences when changed
watch(locale, (newLocale) => {
  localStorage.setItem("preferred-locale", newLocale);
});

watch(
  () => colorMode.preference,
  (newMode) => {
    localStorage.setItem("preferred-theme", newMode);
  }
);
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap");
@import url("https://fonts.googleapis.com/earlyaccess/notonaskharabic.css");

:root {
  --font-family-sans: "Inter", "Noto Naskh Arabic", sans-serif;
}

html {
  font-family: var(--font-family-sans);
}

.dark {
  color-scheme: dark;
}

/* Transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}

/* RTL Support */
[dir="rtl"] .slide-enter-from,
[dir="rtl"] .slide-leave-to {
  transform: translateX(-100%);
}
</style>
