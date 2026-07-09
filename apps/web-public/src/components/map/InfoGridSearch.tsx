"use client";

import { useRouter } from "next/navigation";
import { CemeterySearch } from "@/components/map/CemeterySearch";
import type { GeocodingResult } from "@/lib/mapbox";

export function InfoGridSearch() {
  const router = useRouter();

  const handleSelect = (result: GeocodingResult) => {
    const params = new URLSearchParams({
      lng: String(result.coordinates[0]),
      lat: String(result.coordinates[1]),
      name: result.name,
    });
    router.push(`/karte?${params.toString()}`);
  };

  return <CemeterySearch onSelect={handleSelect} placeholder="Friedhof oder Ort eingeben" />;
}
