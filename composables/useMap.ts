import type { Ref } from "vue";
import type { Map } from "leaflet";

export function useMap(container: Ref<HTMLElement | null>) {
  const map: Ref<Map | null> = ref(null);
  const colorMode = useColorMode();

  async function initializeMap() {
    if (typeof window === "undefined" || !container.value) return null;

    const L = await import("leaflet");
    const newMap = L.map(container.value).setView([35.7, 51.4], 12);

    const isDark = colorMode.value === "dark";

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "© OpenStreetMap contributors",
      className: isDark ? "dark-tiles" : "",
    }).addTo(newMap);

    newMap.zoomControl.remove();
    L.control
      .zoom({
        position: "bottomleft",
      })
      .addTo(newMap);

    // Update map style when theme changes
    watch(
      () => colorMode.value,
      (newMode) => {
        const tiles = document.querySelectorAll(".leaflet-tile-pane img");
        tiles.forEach((tile) => {
          if (newMode === "dark") {
            tile.classList.add("dark-tiles");
          } else {
            tile.classList.remove("dark-tiles");
          }
        });
      }
    );

    return newMap;
  }

  return {
    map,
    initializeMap,
  };
}
