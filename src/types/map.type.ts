import { Clusterer } from "@react-google-maps/marker-clusterer";

export type Coordinates = {
  lat: number;
  lng: number;
};

export type Geometry = {
  type: string;
  coordinates: number[];
};

export type GeoData = {
  type: string;
  properties: {
    P05_001: string;
    P05_002: string;
    P05_003: string;
    P05_004: string;
  };
  geometry: {
    type: string;
    coordinates: number[];
  };
};

export type MKClusterProps = {
  map: google.maps.Map | undefined;
};

export type PinProps = {
  markers: Coordinates[];
  clusterer: Clusterer;
  map: google.maps.Map | undefined;
};
