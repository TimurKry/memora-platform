export interface MapLocation {
  id: string;
  name: string;
  address: string;
  coordinates: [number, number]; // [lng, lat]
}

/** Hauptfriedhof Leipzig-Süd — demo cemetery */
export const DEMO_CEMETERY: MapLocation = {
  id: "leipzig-sued",
  name: "Hauptfriedhof Leipzig",
  address: "Karl-Liebknecht-Straße 120, 04275 Leipzig",
  coordinates: [12.4028, 51.3125],
};

export const MAPBOX_STYLE = "mapbox://styles/mapbox/light-v11";

export const MAPBOX_GEOCODING_TYPES = "place,poi,address";
