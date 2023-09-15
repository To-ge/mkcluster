import { MarkerClusterer } from "@react-google-maps/api";
import Pin from "./Pin";
import { Coordinates } from "@/types/map.type";
import { MKClusterProps } from "@/types/map.type";

const fetchMarkers = async () => {
  const data = await fetch("/api/geometry", {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return data.json();
};

const MKCluster = async ({ map }: MKClusterProps) => {
  const markers: Coordinates[] = await fetchMarkers();
  console.log("🚀");
  console.log(markers);

  return (
    <>
      <MarkerClusterer
        options={{
          imagePath:
            "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
        }}
      >
        {(clusterer) => (
          <Pin markers={markers} clusterer={clusterer} map={map} />
        )}
      </MarkerClusterer>
    </>
  );
};

export default MKCluster;
