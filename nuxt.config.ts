export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@vite-pwa/nuxt",
    "@nuxtjs/i18n",
    "@nuxtjs/color-mode",
  ],
  css: ["@/assets/css/main.css"],
  colorMode: {
    classSuffix: "",
    fallback: "light",
    storageKey: "nuxt-color-scheme",
  },
  i18n: {
    locales: [
      { code: "en", iso: "en-US", file: "en.json", dir: "ltr" },
      { code: "fa", iso: "fa-IR", file: "fa.json", dir: "rtl" },
    ],
    defaultLocale: "en",
    langDir: "locales/",
    strategy: "prefix_except_default",
  },
  pwa: {
    manifest: {
      name: "Tehran Metro Map",
      short_name: "MetroMap",
      description: "Interactive Tehran metro and BRT stations map",
      theme_color: "#ffffff",
      icons: [
        {
          src: "pwa-192x192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "pwa-512x512.png",
          sizes: "512x512",
          type: "image/png",
        },
      ],
    },
    workbox: {
      navigateFallback: "/",
      globPatterns: ["**/*.{js,css,html,png,svg,ico}"],
    },
  },
  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css",
        },
      ],
    },
  },
});
