// app/components/MiniMap.tsx
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import type { LatLngExpression } from 'leaflet';

interface MiniMapProps {
  position: LatLngExpression;
  pharmacyName: string;
}

const MiniMap = ({ position, pharmacyName }: MiniMapProps) => {
  return (
    <MapContainer center={position} zoom={15} style={{ height: '200px', width: '100%', borderRadius: '8px' }}>
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
  );
};

export default MiniMap;