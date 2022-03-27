import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { useLocation } from "react-router-dom";
import credentials from "./credentials";

//console.log(credentials)

const Map = () => {
  const { state } = useLocation();

  //console.log(state);

  const center = {
    lat: Number(state.koordinaten.lat),
    lng: Number(state.koordinaten.lng),
  };

  const containerStyle = {
    width: "100%",
    height: "500px",
  };

  return (
    <>
      <h2>Hier wirst du sein</h2>

      <p>
        {state.adresse}, {state.ort}
      </p>

      <LoadScript googleMapsApiKey={credentials[0].mapsKey}>
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
          {/* Child components, such as markers, info windows, etc. */}
          <></>
          <Marker key="marker_1" position={center} />
        </GoogleMap>
      </LoadScript>
    </>
  );
};
export default React.memo(Map);
