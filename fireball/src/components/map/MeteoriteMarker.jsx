import React from "react";
import { Popup, Circle } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import MeteoritePopup from "./MeteoritePopup";

export default function MeteoriteMarker({
  setSelectedMeteorite,
  id,
  reclat,
  reclong,
  mass,
  name,
  recclass,
  year,
  setTableOpen,
  setChartOpen,
}) {
  return mass ? (
    <Circle
      key={id}
      center={[reclat, reclong]}
      opacity={0.5}
      radius={10000 * Math.log(parseInt(mass))}
      eventHandlers={{
        click: (e) => {
          e.originalEvent.stopPropagation();
          setSelectedMeteorite(id);
          setTableOpen(true);
          setChartOpen(false);
        },
        mouseover: (e) => {
          e.target.setRadius(e.target._mRadius * 1.1);
          e.target.setStyle({ color: "#6633cc" });
          //purple: #6633cc
          //orange: #ff6600
          //green: #00ff00
        },

        mouseout: (e) => {
          e.target.setRadius(e.target._mRadius / 1.1);
          e.target.setStyle({ color: "#3388ff" }); // our original color
        },
      }}
    ></Circle>
  ) : (
    <Circle key={id} center={[reclat, reclong]} opacity={0.5} color="#FF5733">
      <Popup>{name}</Popup>
    </Circle>
  );
}
