import type { Map, LayerGroup } from 'leaflet'
import type { Station } from '~/types/station'
import { lineColors } from '~/data/metroLines'

export function useStations() {
  const layerGroups: Record<string, LayerGroup> = {}

  async function renderStations(map: Map, stations: Station[]) {
    const L = await import('leaflet')
    
    // Group stations by line
    const stationsByLine: Record<string, Station[]> = {}
    stations.forEach(station => {
      const lines = station['Line(s)'].split(',')
      lines.forEach(line => {
        if (!stationsByLine[line]) stationsByLine[line] = []
        stationsByLine[line].push(station)
      })
    })

    // Render each line
    Object.entries(stationsByLine).forEach(([line, lineStations]) => {
      const color = lineColors[line] || '#000000'
      const points: [number, number][] = []
      
      // Create layer group for the line if it doesn't exist
      if (!layerGroups[line]) {
        layerGroups[line] = L.layerGroup().addTo(map)
      }

      lineStations.forEach((station) => {
        const lat = parseFloat(station.Latitude)
        const lng = parseFloat(station.Longitude)
        points.push([lat, lng])

        // Add station marker
        L.marker([lat, lng], {
          icon: L.divIcon({
            className: `bg-[${color}] w-3 h-3 rounded-full border-2 border-white`,
            iconSize: [12, 12]
          })
        })
        .addTo(layerGroups[line])
        .bindPopup(`
          <div class="text-center">
            <div class="font-bold">${station['Name English']}</div>
            <div class="font-bold">${station['Name Persian']}</div>
            <div class="text-sm text-gray-600">Line ${line}</div>
          </div>
        `)
      })

      // Draw line between stations
      if (points.length > 1) {
        L.polyline(points, {
          color: color,
          weight: 3,
          opacity: 0.7
        }).addTo(layerGroups[line])
      }
    })
  }

  return {
    renderStations,
    layerGroups
  }
}