import React from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import data from './data';

export default function Map() {
  const myData = data.filter((element)=> element.reclat && element.reclong);
  console.log(myData);
  return (
    <>
      <h1>My map</h1>
      <MapContainer
        style={{ height: "450px", width: "100%" }}
        center={[51.505, -0.09]}
        zoom={1}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {myData.map(item =>(
          <Marker key={item.id} position={[item.reclat, item.reclong]}>
            <Popup>
              {item.name}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </>
  );
}
