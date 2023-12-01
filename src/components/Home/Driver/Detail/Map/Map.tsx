import React from "react";
import {
  GoogleMap,
  useJsApiLoader,
  DirectionsRenderer,
} from "@react-google-maps/api";

const containerStyle = {
  width: "260px",
  height: "400px",
};

const Map = ({
  destination,
  origin,
}: {
  destination: string;
  origin: string;
}) => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyDqfFwajkOLqmiP0OQzvnR5WS3nAlrfwGM",
  });

  const [map, setMap] = React.useState<any>(null);

  const onLoad = React.useCallback(function callback(map: any) {
    const directionsService = new window.google.maps.DirectionsService();
    directionsService.route(
      {
        origin,
        destination,
        travelMode: window.google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status === window.google.maps.DirectionsStatus.OK) {
          setMap(result);
        } else {
          console.error(`Error fetching directions ${result}`);
        }
      }
    );
  }, []);

  const onUnmount = React.useCallback(function callback(map: any) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {map && <DirectionsRenderer directions={map} />}
      <></>
    </GoogleMap>
  ) : (
    <></>
  );
};

export default React.memo(Map);
