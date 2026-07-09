import Image from "next/image";
import { DEMO_CEMETERY } from "@memora/shared";
import { hasMapboxToken, staticMapUrl } from "@/lib/mapbox";

interface MapboxStaticPreviewProps {
  className?: string;
}

export function MapboxStaticPreview({ className = "" }: MapboxStaticPreviewProps) {
  if (!hasMapboxToken()) {
    return (
      <div
        className={`flex items-center justify-center bg-[#EDECE8] text-xs text-[#666] ${className}`}
      >
        Karte — Token in .env.local
      </div>
    );
  }

  const src = staticMapUrl(DEMO_CEMETERY.coordinates, {
    width: 400,
    height: 280,
    zoom: 13,
  });

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={`Karte: ${DEMO_CEMETERY.name}`}
        fill
        className="object-cover grayscale-[0.35] contrast-[1.02]"
        sizes="(max-width: 768px) 100vw, 400px"
        unoptimized
      />
    </div>
  );
}
