import { MapContainer, TileLayer, useMap } from 'react-leaflet'
import { useEffect, useState } from "react"
import "leaflet/dist/leaflet.css";
import LocationMarker from './LocationMarker';
import MeteoriteMarker from "./MeteoriteMarker";
import "./map.css"


export default function Map({ data, filteredRange, setSelectedMeteorite }) {

  const validData = data || [];
  const validFilteredRange = filteredRange || [];

  const mapData =
    validFilteredRange.length > 0 ? validFilteredRange : validData;

  const validMapData = mapData.filter((item) => item.reclat && item.reclong);
  return (
    <div>

      <MapContainer
        className="h-[600px] w-full"
        center={[51.505, -0.09]}
        zoom={4}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {validMapData.map((item) => (
          <MeteoriteMarker
            key={item.id}
            setSelectedMeteorite={setSelectedMeteorite}
            mass={item.mass}
            name={item.name}
            id={item.id}
            reclat={item.reclat}
            reclong={item.reclong}
            recclass={item.recclass}
            year={item.year}
          />
        ))}
        <LocationMarker />
      </MapContainer>
    </div>
  );
}

