import React, { useRef, useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const defaultCoordinates = [20.122456535910004, -98.7368359132531];

const MapComponent = ({ coordinates }) => {
  const mapRef = useRef(null);
  const markerRef = useRef(null);

  useEffect(() => {
    if (!mapRef.current) return;

    const map = L.map(mapRef.current).setView(defaultCoordinates, 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    const customIcon = L.icon({
      iconUrl: process.env.PUBLIC_URL + '/parque.png', // Ruta a tu imagen en la carpeta public
      iconSize: [32, 32], // Tamaño de tu icono
      iconAnchor: [16, 32], // Punto de anclaje del icono
    });

    markerRef.current = L.marker(defaultCoordinates, { icon: customIcon }).addTo(map);

    return () => {
      map.remove();
    };
  }, []);

  useEffect(() => {
    if (coordinates && coordinates.length === 2 && markerRef.current) {
      markerRef.current.setLatLng(coordinates);
    }
  }, [coordinates]);

  return <div ref={mapRef} style={{ height: '400px', width: '100%' }} />;
};

export default MapComponent;
