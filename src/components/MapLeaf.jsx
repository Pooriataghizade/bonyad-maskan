import { MapContainer } from "react-leaflet";
import { TileLayer } from "react-leaflet";
import { useMap } from "react-leaflet";
import { Marker } from "react-leaflet";
import React from 'react'
import { Popup } from "react-leaflet";

function MapLeaf() {
  return (
    <div >
        <div className="flex justify-center mt-9">
        <MapContainer center={[51.505, -0.09]} zoom={12} >
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
</MapContainer>
        </div>
    </div>
  )
}

export default MapLeaf