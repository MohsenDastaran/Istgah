import localforage from "localforage";
import { ref, watch } from "vue";
import type { Ref } from "vue";
import type { Map } from "leaflet";

// Bounding boxes for Tehran and Karaj
const BOUNDING_BOXES = [
  { minLat: 35.6, maxLat: 35.8, minLng: 51.2, maxLng: 51.6 }, // Tehran
  { minLat: 35.8, maxLat: 36.0, minLng: 50.8, maxLng: 51.0 }, // Karaj
];

// Initialize localforage
const tileCache = localforage.createInstance({
  name: "tile-cache",
  storeName: "map-tiles",
});
// map vector cache:
// Export all markers and polylines to IndexedDB
// function exportMapVectors(map: Map) {
//   const markersData: any[] = [];
//   const polylinesData: any[] = [];

//   map.eachLayer((layer) => {
//     if (layer instanceof L.Marker) {
//       // Store marker data (position, icon, popup content, etc.)
//       markersData.push({
//         type: "marker",
//         position: layer.getLatLng(),
//         iconData: layer.options.icon.options,
//         popupContent: layer.getPopup()?.getContent(),
//       });
//     } else if (layer instanceof L.Polyline) {
//       // Store polyline data (coordinates, color, etc.)
//       polylinesData.push({
//         type: "polyline",
//         coordinates: layer.getLatLngs(),
//         color: layer.options.color,
//         weight: layer.options.weight,
//         opacity: layer.options.opacity,
//       });
//     }
//   });
//   // Store markers and polylines data in IndexedDB
//   if (markersData.length) localforage.setItem("mapMarkers", markersData);
//   if (polylinesData.length) localforage.setItem("mapPolylines", polylinesData);
// }

function isInBoundingBox(lat: number, lng: number): boolean {
  return BOUNDING_BOXES.some(
    (box) =>
      lat >= box.minLat &&
      lat <= box.maxLat &&
      lng >= box.minLng &&
      lng <= box.maxLng
  );
}

export function useMap(container: Ref<HTMLElement | null>) {
  const map: Ref<Map | null> = ref(null);
  const colorMode = useColorMode();

  async function initializeMap() {
    if (typeof window === "undefined" || !container.value) return null;

    const L = await import("leaflet");
    const newMap = L.map(container.value, {
      preferCanvas: true,
      trackResize: false,
      renderer: L.canvas(),
      inertia: false,
      zoomAnimationThreshold: 1,
    }).setView([35.7, 51.4], 12);

    const isDark = colorMode.value === "dark";

    const tileLayer = L.tileLayer(
      "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      {
        attribution: "© OpenStreetMap contributors",
        className: isDark ? "dark-tiles" : "",
      }
    );

    // Override createTile to handle caching
    tileLayer.createTile = function (coords: any) {
      const img = document.createElement("img");
      const { x, y, z } = coords;

      // Generate tile URL
      const tileUrl = L.Util.template(this._url, {
        s: this._getSubdomain(coords),
        z,
        x,
        y,
      });

      const latLngBounds = this._tileCoordsToBounds(coords); // Bounds for the tile
      const center = latLngBounds.getCenter();

      if (isInBoundingBox(center.lat, center.lng)) {
        const cacheKey = `${z}/${x}/${y}`;

        // Check cache
        tileCache.getItem(cacheKey).then((cachedTile: Blob | null) => {
          if (cachedTile) {
            // Create a valid object URL for this session
            img.src = URL.createObjectURL(cachedTile);
            img.onload = () => URL.revokeObjectURL(img.src); // Revoke URL after use
          } else {
            // Fetch and cache
            fetch(tileUrl)
              .then((response) => {
                if (!response.ok)
                  throw new Error(`Failed to fetch tile: ${response.status}`);
                return response.blob();
              })
              .then((blob) => {
                img.src = URL.createObjectURL(blob);
                img.onload = () => URL.revokeObjectURL(img.src); // Revoke URL after use

                // Cache the tile
                tileCache.setItem(cacheKey, blob).catch(console.error);
              })
              .catch((error) => {
                console.error(error);
                img.src = tileUrl; // Fallback to original tile
              });
          }
        });
      } else {
        img.src = tileUrl; // Default behavior
      }

      return img;
    };

    tileLayer.addTo(newMap);

    newMap.zoomControl.remove();
    L.control
      .zoom({
        position: "bottomleft",
      })
      .addTo(newMap);

    // Update map style when theme changes
    // watch(
    //   () => colorMode.value,
    //   (newMode) => {
    //     const tiles = document.querySelectorAll(".leaflet-tile-pane img");
    //     tiles.forEach((tile) => {
    //       if (newMode === "dark") {
    //         tile.classList.add("dark-tiles");
    //       } else {
    //         tile.classList.remove("dark-tiles");
    //       }
    //     });
    //   }
    // );

    return newMap;
  }

  return {
    map,
    initializeMap,
  };
}
