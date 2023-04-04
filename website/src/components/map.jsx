import React from 'react'

import 'leaflet/dist/leaflet.css';
import {MapContainer, TileLayer} from 'react-leaflet';

import styles from './maps.module.css';

const Map = () => {
  return (
    <MapContainer className={styles.map} center={[52.505,-0.09]} zoom={1.5} scrollWheelZoom={true}>
        <TileLayer 
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
    </MapContainer>
    
  )
}

export default Map
