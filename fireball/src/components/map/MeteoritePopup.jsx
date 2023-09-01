import React from "react";
import { Popup, Circle } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function MeteoritePopup({id, name, mass, recclass, year}) {
  
    return (
      <div>
        <h3>{name}</h3>
        <p>Mass: {mass}</p>
        <p>Class: {recclass}</p>
        <p>Year: {year}</p>
        <button className="border-solid border-2 rounded-md p-2"
          onClick=
          {() => {
            alert(`meteor id is: ${id}`);
          }}>
          {`Select ${name}`}
        </button>
      </div>
    );
}
