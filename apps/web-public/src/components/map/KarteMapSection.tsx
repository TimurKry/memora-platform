"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { DEMO_CEMETERY, type MapLocation } from "@memora/shared";
import { CemeterySearch } from "./CemeterySearch";
import { MapboxMapClient } from "./MapboxMapClient";
import type { GeocodingResult } from "@/lib/mapbox";
import { hasMapboxToken } from "@/lib/mapbox";

function parseLocation(params: URLSearchParams): MapLocation {
  const lng = params.get("lng");
  const lat = params.get("lat");
  const name = params.get("name");

  if (lng && lat) {
    const coordinates: [number, number] = [parseFloat(lng), parseFloat(lat)];
    if (!Number.isNaN(coordinates[0]) && !Number.isNaN(coordinates[1])) {
      return {
        id: "search-result",
        name: name ? decodeURIComponent(name) : "Ausgewählter Ort",
        address: name ? decodeURIComponent(name) : `${lat}, ${lng}`,
        coordinates,
      };
    }
  }

  return DEMO_CEMETERY;
}

export function KarteMapSection() {
  const searchParams = useSearchParams();
  const urlLocation = useMemo(() => parseLocation(searchParams), [searchParams]);
  const [selectedLocation, setSelectedLocation] = useState<MapLocation | null>(null);
  const location = selectedLocation ?? urlLocation;

  const handleSelect = (result: GeocodingResult) => {
    setSelectedLocation({
      id: result.id,
      name: result.name,
      address: result.address,
      coordinates: result.coordinates,
    });
  };

  if (!hasMapboxToken()) {
    return (
      <div className="border border-[#E6E4DF] bg-[#F7F6F2] p-8 text-center">
        <p className="text-sm text-[#1B1B1B]">Mapbox-Token fehlt</p>
        <p className="mt-2 text-xs text-[#666]">
          <code className="bg-white px-1">NEXT_PUBLIC_MAPBOX_TOKEN</code> in{" "}
          <code className="bg-white px-1">apps/web-public/.env.local</code> setzen — denselben
          Token wie in meeting-point-finder verwenden.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <CemeterySearch onSelect={handleSelect} />
      <div className="aspect-[4/3] w-full border border-[#E6E4DF]">
        <MapboxMapClient
          center={location.coordinates}
          zoom={15}
          markers={[location]}
          key={location.id}
        />
      </div>
      <p className="text-xs text-[#666]">
        {location.name} — {location.address}
      </p>
    </div>
  );
}
