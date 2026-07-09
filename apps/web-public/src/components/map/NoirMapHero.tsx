"use client";

import dynamic from "next/dynamic";
import { DEMO_CEMETERY, LEIPZIG_CENTER, MAPBOX_STYLE_NOIR } from "@memora/shared";
import { hasMapboxToken } from "@/lib/mapbox";
import { NoirCityMap } from "./NoirCityMap";

const MapboxMapClient = dynamic(
  () => import("./MapboxMap").then((m) => m.MapboxMap),
  {
    ssr: false,
    loading: () => <NoirCityMap className="animate-pulse opacity-80" />,
  }
);

export function NoirMapHero() {
  if (!hasMapboxToken()) {
    return <NoirCityMap />;
  }

  return (
    <div className="noir-map-hero relative h-full w-full">
      <MapboxMapClient
        center={LEIPZIG_CENTER}
        zoom={12}
        markers={[DEMO_CEMETERY]}
        interactive
        mapStyle={MAPBOX_STYLE_NOIR}
        className="noir-mapbox-hero"
      />
      <div className="noir-map-overlay pointer-events-none absolute inset-0" aria-hidden />
      <div className="noir-venetian pointer-events-none absolute inset-0" aria-hidden />
    </div>
  );
}
