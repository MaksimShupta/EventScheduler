import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Standard-Icon-Fix für Leaflet (optional, falls nötig)
import markerIconPng from "leaflet/dist/images/marker-icon.png";

const LocationMap = ({ latitude, longitude, address }) => {
  return (
    <MapContainer
      center={[latitude, longitude]}
      zoom={13}
      className="w-full h-64 rounded-lg shadow-md"
    >
      {/* OpenStreetMap Layer */}
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      {/* Marker für die Location */}
      <Marker
        position={[latitude, longitude]}
        icon={L.icon({
          iconUrl: markerIconPng,
          iconSize: [25, 41],
          iconAnchor: [12, 41],
        })}
      >
        <Popup>{address}</Popup>
      </Marker>
    </MapContainer>
  );
};

export default LocationMap;
