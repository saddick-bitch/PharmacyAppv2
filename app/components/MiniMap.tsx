// app/components/MiniMap.tsx
import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import type { LatLngExpression } from 'leaflet';

interface MiniMapProps {
  position: LatLngExpression;
  pharmacyName: string;
}

const MiniMap = ({ position, pharmacyName }: MiniMapProps) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    // Fix for default markers in webpack/vite
    delete (L.Icon.Default.prototype as any)._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
      iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
    });
    // Ensure map invalidates size after mount
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 100);
  }, []);

  if (!isClient) {
    return <div style={{ height: '100%', width: '100%', borderRadius: '8px', backgroundColor: '#f0f0f0' }}>Cargando mapa...</div>;
  }

  return (
    <div style={{ height: '100%', width: '100%', position: 'relative', overflow: 'hidden', borderRadius: '8px', zIndex: 1 }}>
      <MapContainer 
        center={position} 
        zoom={15} 
        style={{ height: '100%', width: '100%' }}
        scrollWheelZoom={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>
            {pharmacyName}
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MiniMap;