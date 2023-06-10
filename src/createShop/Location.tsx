import React from "react";

import { useJsApiLoader, GoogleMap, Marker } from "@react-google-maps/api";

type InputFieldProps = {
  marker: {
    lat: number;
    lng: number;
  };
  setMarker: React.Dispatch<{
    lat: number;
    lng: number;
  }>;
};

const Location: React.FunctionComponent<InputFieldProps> = (props) => {
  const onMapClick = (e: google.maps.MapMouseEvent) => {
    props.setMarker({
      lat: e.latLng?.lat() || 0,
      lng: e.latLng?.lng() || 0,
    });
  };

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey:
      process.env.GOOGLE_MAP_API_KEY ||
      "AIzaSyDlBlvifO09HIMcoKimw85FJOtSw1dlPaw",
  });

  const CENTER = { lat: 3.1313526387981856, lng: 101.69261347057947 };

  // Loading Indicators
  if (!isLoaded) {
    return <>hello</>;
  }

  return (
    <div className="min-w-screen flex min-h-[68vh] items-center justify-center">
      {/* Display Google map */}
      <GoogleMap
        center={CENTER}
        zoom={15}
        mapContainerStyle={{
          width: "60%",
          height: "68vh",
          borderRadius: "25px",
        }}
        mapContainerClassName=""
        onClick={onMapClick}
      >
        <Marker
          key={props.marker.lat}
          position={{
            lat: props.marker.lat,
            lng: props.marker.lng,
          }}
        />
      </GoogleMap>
    </div>
  );
};

export default Location;
