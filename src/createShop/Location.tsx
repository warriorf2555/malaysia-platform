import React, { useEffect, useState } from "react";

import { useJsApiLoader, GoogleMap, Marker } from "@react-google-maps/api";

type LocationProps = {
  isConfirm: boolean;
  marker: {
    lat: number;
    lng: number;
  };
  setMarker: React.Dispatch<{
    lat: number;
    lng: number;
  }>;
};

const Location: React.FunctionComponent<LocationProps> = (props) => {
  const [isLoading, setLoading] = useState(true);

  const onMapClick = (e: google.maps.MapMouseEvent) => {
    props.setMarker({
      lat: e.latLng?.lat() || 0,
      lng: e.latLng?.lng() || 0,
    });
  };

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.GOOGLE_MAP_API_KEY || "",
  });

  const CENTER = { lat: 3.1313526387981856, lng: 101.69261347057947 };

  // DEV NOTE: Cheaky way to refresh form
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 10);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  // Loading Indicators
  if (!isLoaded) {
    return <>Loading...</>;
  }

  if (!isLoading) {
    return (
      <div
        className={`min-w-screen flex ${
          props.isConfirm ? "min-h-[68vh] justify-end" : "justify-center"
        } items-center `}
      >
        {/* Display Google map */}
        <GoogleMap
          center={CENTER}
          zoom={15}
          mapContainerStyle={{
            width: "60%",
            height: props.isConfirm ? "55vh" : "68vh",
            borderRadius: "25px",
          }}
          mapContainerClassName=""
          onClick={(e) => {
            props.isConfirm ? "" : onMapClick(e);
          }}
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
  }
};

export default Location;
