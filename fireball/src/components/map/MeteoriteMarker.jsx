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
      }}
    }
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
