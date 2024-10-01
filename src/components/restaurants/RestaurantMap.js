import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import MarkerClusterGroup from '@changey/react-leaflet-markercluster';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';

// Función para personalizar el icono de los clusters
const createClusterCustomIcon = (cluster) => {
  const count = cluster.getChildCount();
  let size = 'large';

  if (count < 10) {
    size = 'small';
  } else if (count < 100) {
    size = 'medium';
  }

  return L.divIcon({
    html: `<div><span>${count}</span></div>`,
    className: `custom-cluster-icon custom-cluster-${size}`,
    iconSize: L.point(40, 40, true),
  });
};

const RestaurantMap = ({ filteredRestaurants }) => {
  return (
    <MapContainer center={[41.3851, 2.1734]} zoom={13} style={{ height: 'calc(100vh - 300px)', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      <MarkerClusterGroup iconCreateFunction={createClusterCustomIcon}>
        {filteredRestaurants.length > 0 && filteredRestaurants.map((restaurant, index) => {
          const [lng, lat] = restaurant.Coordinates;
          return (
            <Marker key={index} position={[lat, lng]}>
              <Popup>
                <h2 style={{ margin: '0', fontSize: '16px' }}>{restaurant.Nombre}</h2>
                <p style={{ margin: '0' }}>Tipo: {restaurant.Tipo}</p>
                <p>Nota: {restaurant.Nota}</p>
                <p>Número de Reseñas: {restaurant['Nº Reseñas']}</p>
                <p>Barrio: {restaurant.Barrio}</p>
                <p>Dirección: {restaurant.Dirección}</p>
              </Popup>
            </Marker>
          );
        })}
      </MarkerClusterGroup>
    </MapContainer>
  );
};

export default RestaurantMap;
