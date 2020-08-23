import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

function Maps(props) {
  var windowHeight = window.innerHeight * (0.95).toString();
  const mapStyles = {
    height: windowHeight,
    width: "100%",
  };

  var iconBase = "http://maps.google.com/mapfiles/kml/paddle/";

  const center = {
    lat: Number(props.userLocation[1]),
    lng: Number(props.userLocation[0]),
  };

  const locations = [
    {
      name: "center",
      location: center,
      imgURL: iconBase + "red-stars.png",
    },
  ].concat(
    props.restaurants.map((item, index) => {
      return {
        name: item.restaurant.name,
        location: {
          lat: Number(item.restaurant.location.latitude),
          lng: Number(item.restaurant.location.longitude),
        },
        imgURL: iconBase + (index + 1).toString() + ".png",
      };
    })
  );

  return (
    <LoadScript googleMapsApiKey="AIzaSyAt5NuRkDNkH0xiPYjt050weIs3EK8rBUo">
      <GoogleMap mapContainerStyle={mapStyles} zoom={13} center={center}>
        {locations.map((item, index) => {
          return (
            <Marker
              key={index + 1}
              position={item.location}
              icon={item.imgURL}
            />
          );
        })}
      </GoogleMap>
    </LoadScript>
  );
}

export default Maps;
