import type { Map, Marker } from 'leaflet';
import { ref } from 'vue';

export function useUserLocation() {
  const currentMarker = ref<Marker | null>(null);
  const error = ref<string | null>(null);

  async function showUserLocation(map: Map): Promise<void> {
    if (!('geolocation' in navigator)) {
      error.value = 'Geolocation is not supported in your browser';
      throw new Error(error.value);
    }
    
    const L = await import('leaflet');
    
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          
          // Remove existing marker if any
          if (currentMarker.value) {
            currentMarker.value.remove();
          }
          
          // Add new marker
          currentMarker.value = L.marker([latitude, longitude], {
            icon: L.divIcon({
              html: `
                <div class="w-4 h-4 bg-blue-500 rounded-full border-2 border-white shadow-lg pulse"></div>
              `,
              className: '',
              iconSize: [16, 16],
              iconAnchor: [8, 8]
            })
          }).addTo(map)
            .bindPopup('You are here')
            .openPopup();
          
          // Center map on user location
          map.setView([latitude, longitude], 15);
          
          error.value = null;
          resolve();
        },
        (err) => {
          let message = 'Error getting location';
          
          switch (err.code) {
            case err.PERMISSION_DENIED:
              message = 'Location access was denied. Please enable location permissions in your browser settings.';
              break;
            case err.POSITION_UNAVAILABLE:
              message = 'Location information is unavailable. Please try again.';
              break;
            case err.TIMEOUT:
              message = 'Location request timed out. Please try again.';
              break;
          }
          
          error.value = message;
          reject(new Error(message));
        },
        {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 0
        }
      );
    });
  }

  return {
    showUserLocation,
    currentMarker,
    error
  };
}