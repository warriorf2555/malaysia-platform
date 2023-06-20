import React, { useEffect, useState } from "react";
import { env } from "~/env.mjs";

import { useJsApiLoader, GoogleMap, Marker } from "@react-google-maps/api";

const googleMapStyles: google.maps.MapTypeStyle[] = [
  {
    elementType: "labels.icon",
    stylers: [{ visibility: "off" }],
  },
];

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
    googleMapsApiKey: env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY,
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
            height: props.isConfirm ? "55vh" : "66vh",
            borderRadius: "25px",
          }}
          mapContainerClassName="lg:w-[64%] w-[85%]"
          onClick={(e) => {
            props.isConfirm ? "" : onMapClick(e);
          }}
          options={{
            styles: googleMapStyles,
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
