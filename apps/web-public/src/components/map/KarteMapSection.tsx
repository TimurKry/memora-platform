"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { DEMO_CEMETERY, type MapLocation } from "@memora/shared";
import { CemeterySearch } from "./CemeterySearch";
import { MapboxMapClient } from "./MapboxMapClient";
import { CemeteryMap } from "../CemeteryMap";
import type { GeocodingResult } from "@/lib/mapbox";
import { hasMapboxToken } from "@/lib/mapbox";

function safeDecode(value: string | null): string | undefined {
  if (!value) return undefined;
  try {
    return decodeURIComponent(value);
  } catch {
    return value;
  }
}

function parseLocation(params: URLSearchParams): MapLocation {
  const lng = params.get("lng");
  const lat = params.get("lat");
  const name = safeDecode(params.get("name"));

  if (lng && lat) {
    const coordinates: [number, number] = [parseFloat(lng), parseFloat(lat)];
    if (!Number.isNaN(coordinates[0]) && !Number.isNaN(coordinates[1])) {
      return {
        id: "search-result",
        name: name ?? "Ausgewählter Ort",
        address: name ?? `${lat}, ${lng}`,
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
      <div className="space-y-6">
        <p className="text-xs text-memora-muted">
          Interaktive Karte — Token in <code className="text-memora-text">.env.local</code>
        </p>
        <div className="aspect-[4/3] w-full border border-memora-border bg-[#faf9f6] p-4">
          <CemeteryMap variant="hero" />
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <CemeterySearch onSelect={handleSelect} />
      <div className="aspect-[4/3] w-full border border-memora-border bg-[#faf9f6] p-3 shadow-[inset_0_0_0_1px_rgba(27,27,27,0.04)]">
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
