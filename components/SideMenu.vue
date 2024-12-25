<template>
  <div>
    <button
      @click="isOpen = true"
      class="fixed top-4 right-4 z-[1000] bg-white dark:bg-gray-800 p-3 rounded-lg shadow-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>

    <Transition name="fade">
      <div
        v-if="isOpen"
        class="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-[1001]"
        @click="isOpen = false"
      ></div>
    </Transition>

    <Transition name="slide">
      <div
        v-if="isOpen"
        class="fixed right-0 top-0 h-full w-72 md:w-96 bg-white dark:bg-gray-800 shadow-lg z-[1002] p-6"
      >
        <div class="flex justify-between items-center mb-8">
          <h2 class="text-xl font-bold dark:text-white">{{ $t('menu.title') }}</h2>
          <button 
            @click="isOpen = false"
            class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav class="space-y-6">
          <div class="space-y-2">
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
              {{ $t('menu.language') }}
            </label>
            <LanguageSwitch />
          </div>

          <ThemeToggle />
          <InstallPWA />
          
          <a
            href="https://github.com/yourusername/metro-map"
            target="_blank"
            class="flex items-center gap-2 p-3 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-200"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"></path>
            </svg>
            {{ $t('menu.github') }}
          </a>

          <button
            @click="showAbout = true"
            class="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-200"
          >
            {{ $t('menu.about') }}
          </button>
        </nav>
      </div>
    </Transition>

    <!-- About Modal -->
    <Transition name="fade">
      <div 
        v-if="showAbout" 
        class="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-[1003] flex items-center justify-center p-4"
      >
        <div class="bg-white dark:bg-gray-800 p-6 rounded-lg max-w-md w-full">
          <h2 class="text-xl font-bold mb-4 dark:text-white">{{ $t('about.title') }}</h2>
          <p class="mb-6 dark:text-gray-300">{{ $t('about.description') }}</p>
          <button
            @click="showAbout = false"
            class="w-full p-3 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition-all duration-200"
          >
            {{ $t('about.close') }}
          </button>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
const isOpen = ref(false);
const showAbout = ref(false);
</script>