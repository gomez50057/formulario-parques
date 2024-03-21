import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Mapa = ({ coordenadas }) => {
  const [position, setPosition] = useState(coordenadas);

  useEffect(() => {
    setPosition(coordenadas);
  }, [coordenadas]);

  return (
    <MapContainer center={position} zoom={20} style={{ height: '400px', width: '100%' }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={position}>
        <Popup>
          Coordenadas: {position[0]}, {position[1]}
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Mapa;
