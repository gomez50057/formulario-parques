import React, { useRef, useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const MapComponent = ({ coordinates }) => {
  const mapRef = useRef(null);
  const markerRef = useRef(null);

  useEffect(() => {
    if (!mapRef.current) return;

    const map = L.map(mapRef.current);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    markerRef.current = L.marker(coordinates).addTo(map);

    map.fitBounds([coordinates]);

    return () => {
      map.remove();
    };
  }, [coordinates]);

  useEffect(() => {
    if (coordinates && coordinates.length === 2 && markerRef.current) {
      markerRef.current.setLatLng(coordinates);
    }
  }, [coordinates]);

  return <div ref={mapRef} style={{ height: '400px', width: '100%' }} />;
};

export default MapComponent;
