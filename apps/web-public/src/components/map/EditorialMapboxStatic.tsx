import Image from "next/image";
import { DEMO_CEMETERY } from "@memora/shared";
import { hasMapboxToken, staticMapUrl } from "@/lib/mapbox";
import { EditorialStreetMap } from "./EditorialStreetMap";

interface EditorialMapboxStaticProps {
  className?: string;
  label?: string;
}

/**
 * Real Mapbox static image in editorial colors (grayscale + cream).
 * Falls back to SVG street map when token is missing at build time.
 */
export function EditorialMapboxStatic({
  className = "",
  label = "Südfriedhof",
}: EditorialMapboxStaticProps) {
  if (!hasMapboxToken()) {
    return <EditorialStreetMap className={className} label={label} />;
  }

  const src = staticMapUrl(DEMO_CEMETERY.coordinates, {
    width: 260,
    height: 195,
    zoom: 14,
  });

  return (
    <div
      className={`relative h-full w-full overflow-hidden bg-[#faf9f6] ${className}`}
    >
      <Image
        src={src}
        alt={`Karte: ${DEMO_CEMETERY.name}`}
        fill
        className="object-cover grayscale contrast-[1.06] brightness-[1.04]"
        sizes="130px"
        unoptimized
      />
      {/* Cream paper wash */}
      <div
        className="pointer-events-none absolute inset-0 bg-[#f7f6f2]/25 mix-blend-soft-light"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 shadow-[inset_0_0_24px_rgba(247,246,242,0.5)]"
        aria-hidden
      />
    </div>
  );
}
