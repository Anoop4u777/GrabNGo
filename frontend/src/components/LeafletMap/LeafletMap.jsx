import React from 'react';
import './LeafletMap.css'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const LeafletMap = ({ latitude, longitude, name, category, location }) => {
  const position = [latitude, longitude];

  return (
    <div>
      <h1>Our Location Details</h1>
      <div className='leaflet-container'>
        <MapContainer center={position} zoom={10} style={{ height: "60vh", width: "100%" }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution=''
          />
          <Marker position={position}>
            <Popup>
              Name: {name} <br />
              Location: {location} <br />
              Category: {category}
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
}

export default LeafletMap;
