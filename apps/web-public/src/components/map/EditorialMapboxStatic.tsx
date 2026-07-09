import Image from "next/image";
import { DEMO_CEMETERY } from "@memora/shared";
import { hasMapboxToken, staticMapUrl } from "@/lib/mapbox";
import { NoirCityMap } from "./NoirCityMap";

interface EditorialMapboxStaticProps {
  className?: string;
  label?: string;
}

export function EditorialMapboxStatic({
  className = "",
  label = "Südfriedhof",
}: EditorialMapboxStaticProps) {
  if (!hasMapboxToken()) {
    return <NoirCityMap className={className} />;
  }

  const src = staticMapUrl(DEMO_CEMETERY.coordinates, {
    width: 260,
    height: 195,
    zoom: 14,
  });

  return (
    <div className={`relative h-full w-full overflow-hidden bg-memora-ink ${className}`}>
      <Image
        src={src}
        alt={`Karte: ${DEMO_CEMETERY.name}`}
        fill
        className="object-cover contrast-[1.2] brightness-[0.75] saturate-0"
        sizes="130px"
        unoptimized
      />
      <div className="noir-map-overlay pointer-events-none absolute inset-0" aria-hidden />
      <p className="pointer-events-none absolute bottom-1.5 left-0 right-0 text-center font-noir text-[7px] uppercase tracking-noir text-memora-gold opacity-80">
        {label}
      </p>
    </div>
  );
}
