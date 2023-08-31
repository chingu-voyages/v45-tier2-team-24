import React from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup, useMap, Circle } from "react-leaflet";
//import data from './data';
import LocationMarker from './LocationMarker';
import MeteoriteMarker from "./MeteoriteMarker";


export default function Map({data}) {
  const myData = data.filter((element)=> element.reclat && element.reclong);
  //console.log(myData);
  return (
    <>
      <MapContainer
        style={{ height: "450px", width: "100%" }}
        center={[51.505, -0.09]}
        zoom={4}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {myData.map((item) =>
          <MeteoriteMarker
            key={item.id}
            mass={item.mass}
            name={item.name}
            id={item.id}
            reclat={item.reclat}
            reclong={item.reclong}
            recclass={item.recclass}
            year={item.year}
          />
        )}
        <LocationMarker />
      </MapContainer>
    </>
  );
}
