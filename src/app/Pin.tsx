import { useEffect } from "react";
import { PinProps } from "@/types/map.type";
import { Marker } from "@react-google-maps/api";
import _ from "lodash";
import { MarkerExtended } from "@react-google-maps/marker-clusterer";

const Pin = ({ markers, clusterer, map }: PinProps) => {
  const updateCluster = _.debounce(() => {
    if (map && clusterer) {
      const bounds = map.getBounds();
      clusterer.clearMarkers();
      const visibleMarkers: google.maps.Marker[] = markers
        .map(
          (marker) =>
            new google.maps.Marker({
              position: new google.maps.LatLng(marker.lat, marker.lng),
            })
        )
        .filter((marker) => {
          const position = marker.getPosition();
          return position && marker.getVisible() && bounds?.contains(position);
        });
      clusterer.addMarkers(visibleMarkers, false);
      console.log(visibleMarkers);
    }
  }, 100);

  useEffect(() => {
    if (map) {
      map.addListener("dragend", updateCluster);
      map.addListener("zoom_changed", updateCluster);
      updateCluster();
    }
  }, [map, updateCluster]);

  return (
    <>
      {clusterer.getMarkers().map((marker: MarkerExtended, index: number) => {
        console.log(clusterer.getMarkers());
        return (
          <Marker
            key={index}
            position={
              marker.getPosition() || { lat: 35.682839, lng: 139.759455 }
            }
            clusterer={clusterer}
          />
        );
      })}
    </>
  );
};

export default Pin;
