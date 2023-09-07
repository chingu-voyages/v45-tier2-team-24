import React from "react";
import { Popup, Circle } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import MeteoritePopup from "./MeteoritePopup";

export default function MeteoriteMarker({
  updateSelectedMeteorite,
  id,
  reclat,
  reclong,
  mass,
  name,
  recclass,
  year
}) {
  return mass ? (
    <Circle
      key={id}
      center={[reclat, reclong]}
      opacity={0.5}
      radius={10000 * Math.log(parseInt(mass))}
      eventHandlers={{
        click: (e) => {
          updateSelectedMeteorite(id);
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
          e.target.setStyle({ color: '#3388ff' });// our original color
        },
      }}
    >
      {/*
      <Popup>
        <MeteoritePopup
          id={id}
          name={name}
          mass={mass}
          recclass={recclass}
          year={year}

        />
      </Popup>*/}
    </Circle>
  ) : (
    <Circle key={id} center={[reclat, reclong]} opacity={0.5} color="#FF5733">
      <Popup>{name}</Popup>
    </Circle>
  );
}
