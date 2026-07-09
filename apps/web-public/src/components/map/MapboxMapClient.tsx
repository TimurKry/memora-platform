"use client";

import dynamic from "next/dynamic";
import type { MapboxMapProps } from "./MapboxMap";

const MapboxMapDynamic = dynamic(
  () => import("./MapboxMap").then((m) => m.MapboxMap),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-full min-h-[280px] w-full items-center justify-center border border-[#E6E4DF] bg-[#F7F6F2] text-sm text-[#666]">
        Karte wird geladen…
      </div>
    ),
  }
);

export function MapboxMapClient(props: MapboxMapProps) {
  return <MapboxMapDynamic {...props} />;
}
