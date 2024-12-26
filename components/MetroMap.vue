<template>
  <div class="relative h-screen w-full">
    <div ref="mapContainer" class="h-full w-full"></div>
    <StationSearch
      :stations="stations"
      @filter="handleFilter"
      @select="handleStationSelect"
    />
    <SideMenu />
    <StationDetails :station="selectedStation" />
    <LocationButton @locate="handleLocate" />
  </div>
</template>

<script setup lang="ts">
import { findStationColor, findIntersectionColor } from "~/data/metroLines";
import type { Station } from "~/types/station";
import { createStationIcon } from "~/utils/stationIcons";

const props = defineProps<{
  stations: Station[];
}>();

const mapContainer = ref<HTMLElement | null>(null);

const { map, initializeMap } = useMap(mapContainer);
const { showUserLocation } = useUserLocation();
const selectedStation = ref<Station | null>(null);
let visibleStations = ref<Station[]>(props.stations);

function handleFilter(filtered: Station[]) {
  visibleStations.value = filtered;
  console.log(filtered);

  // renderStations();
}

function handleStationSelect(station: Station) {
  selectedStation.value = station;
  map.value?.setView(
    [parseFloat(station.Latitude), parseFloat(station.Longitude)],
    15
  );
}

async function handleLocate(e) {
  console.log(e);

  if (!map.value) return;
  try {
    await showUserLocation(map.value);
  } catch (error) {
    console.error("Location error:", error);
  }
}

async function renderStations() {
  if (!map.value) return;

  const L = await import("leaflet");

  // Clear existing layers
  map.value.eachLayer((layer) => {
    if (layer instanceof L.Marker || layer instanceof L.Polyline) {
      layer.remove();
    }
  });

  // Render each line
  const generateLineByStation = (station: Station, origin: []) => {
    // const lat = parseFloat(station.Latitude);
    // const lng = parseFloat(station.Longitude);
    const next = station.Next.split(",");
    next.forEach((n) => {
      const nextStation = visibleStations.value.find((s) => s.ID === n.trim());

      if (nextStation && Number(n) > 0) {
        const nextCoordinate = [
          parseFloat(nextStation.Latitude),
          parseFloat(nextStation.Longitude),
        ];
        const data = [origin, nextCoordinate];
        const color = findIntersectionColor(
          station["Line(s)"],
          nextStation["Line(s)"]
        );
        if (nextCoordinate[0] && nextCoordinate[1]) {
          L.polyline(data, {
            color,
            weight: 5,
            opacity: 0.8,
          }).addTo(map.value);
        }
      }
    });
  };

  for (const station of visibleStations.value) {
    const line = station["Line(s)"];

    const color = findStationColor(line);
    const points: [number, number][] = [];

    const lat = parseFloat(station.Latitude);
    const lng = parseFloat(station.Longitude);

    // Render each line
    if (lat && lng) generateLineByStation(station, [lat, lng]);

    points.push([lat, lng]);

    const isBRT = line === "BRT";
    const icon = await createStationIcon(
      color,
      isBRT,
      station["Is Active"] === "T"
    );
    // Render Points

    if (lat && lng) {
      L.marker([lat, lng], { icon })
        .addTo(map.value)
        .on("click", () => {
          selectedStation.value = station;
        }).bindPopup(`
      <div class="text-center">
      <div class="font-bold">${station["Name English"]}</div>
      <div class="font-bold">${station["Name Persian"]}</div>
      <div class="text-sm text-gray-600">Line ${line}</div>
      </div>
      `);
    }
    // }
  }
}

onMounted(async () => {
  const mapInstance = await initializeMap();
  if (!mapInstance) return;

  map.value = mapInstance;
  await renderStations();
});
</script>

<style>
.station-icon {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid white;
  color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  padding-left: 1px;
}
</style>
