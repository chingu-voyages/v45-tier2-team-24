import React, { useEffect, useState } from "react";
import { Marker, Popup, useMap } from "react-leaflet";
import { icon } from "leaflet"
import "leaflet/dist/leaflet.css";


const defaultIcon = L.icon({
  iconUrl: "https://img.icons8.com/stickers/100/comet.png",
  iconSize: [55, 56],
  iconAnchor: [3, 50]
});

export default function LocationMarker() {
  const [position, setPosition] = useState(null);
  const map = useMap();

  useEffect(() => {
    map.locate().on("locationfound", function (e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
      const radius = e.accuracy;
      const circle = L.circle(e.latlng, radius);
      circle.addTo(map);
    });
  }, [map]);

  return position === null ? null : (
    <Marker position={position} icon={defaultIcon}>
      <Popup>You are here</Popup>
    </Marker>
  );
}
