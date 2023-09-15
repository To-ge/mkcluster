"use client";

import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { Suspense, memo, useCallback, useState } from "react";
import MKCluster from "./MKCluster";

const containerStyle = {
  width: "1200px",
  height: "700px",
};

const center = {
  lat: 35.182253007459444,
  lng: 139.90534328438358,
};

const Map = memo(() => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyDr--91YAgoc5qaqwX1FzvZnAnVMELqyUw",
  });

  const [map, setMap] = useState<google.maps.Map>();

  const onLoad = useCallback(function callback(map: google.maps.Map) {
    map.setZoom(10);
    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback(map: google.maps.Map) {
    setMap(map);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      <Suspense
        fallback={<div className="text-xl font-bold m-5">Loading...</div>}
      >
        <MKCluster map={map} />
      </Suspense>
    </GoogleMap>
  ) : (
    <></>
  );
});

Map.displayName = "MapComponent";
export default Map;
