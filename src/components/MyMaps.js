import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import Navbar from "./Navbar";

function MyMaps() {
  const position = [39.7392, 104.9903];
  return (
    <div>
      <Navbar />
      <MapContainer
        classname="map"
        center={position}
        zoom={10}
        style={{ height: 600, width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </div>
  );
}

export default MyMaps;
