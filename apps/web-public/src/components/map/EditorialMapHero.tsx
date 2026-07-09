"use client";

import dynamic from "next/dynamic";
import { DEMO_CEMETERY, LEIPZIG_CENTER } from "@memora/shared";
import { hasMapboxToken } from "@/lib/mapbox";
import { EditorialCityMap } from "./EditorialCityMap";

const MapboxMapClient = dynamic(
  () => import("./MapboxMap").then((m) => m.MapboxMap),
  {
    ssr: false,
    loading: () => <EditorialCityMap className="animate-pulse opacity-80" />,
  }
);

export function EditorialMapHero() {
  if (!hasMapboxToken()) {
    return <EditorialCityMap />;
  }

  return (
    <div className="relative h-full w-full">
      <MapboxMapClient
        center={LEIPZIG_CENTER}
        zoom={12}
        markers={[DEMO_CEMETERY]}
        interactive
      />
      <div className="editorial-map-wash pointer-events-none absolute inset-0" aria-hidden />
    </div>
  );
}
