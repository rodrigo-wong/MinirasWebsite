import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Import the default Leaflet marker images
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// Fix the default icon issue and set the anchor point to center the marker
let DefaultIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconAnchor: [12, 41], // Adjust these values to center the marker correctly
});

L.Marker.prototype.options.icon = DefaultIcon;

// Custom component to keep the map centered
const KeepMapCentered = ({ center }) => {
  const map = useMap();
  useEffect(() => {
    map.setView(center);
  }, [center, map]);
  return null;
};

const Maps = () => {
  const position = [43.379239, -79.806138]; // Correct coordinates for Walkers Line & Upper Middle Rd

  return (
    <div className="border-2 h-100 rounded-3 overflow-hidden text-center d-flex justify-content-center align-items-center order-lg-last order-md-last order-first mb-4 mb-lg-0">
      <MapContainer center={position} zoom={13} style={{ height: '400px', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>Walkers Line & Upper Middle Rd</Popup>
        </Marker>
        <KeepMapCentered center={position} />
      </MapContainer>
    </div>
  );
};

export default Maps;
