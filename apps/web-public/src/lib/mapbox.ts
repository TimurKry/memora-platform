import { MAPBOX_GEOCODING_TYPES } from "@memora/shared";

export function getMapboxToken(): string {
  const token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN?.trim();
  if (!token) {
    throw new Error("NEXT_PUBLIC_MAPBOX_TOKEN fehlt.");
  }
  return token;
}

export function hasMapboxToken(): boolean {
  return Boolean(process.env.NEXT_PUBLIC_MAPBOX_TOKEN?.trim());
}

export interface GeocodingResult {
  id: string;
  name: string;
  address: string;
  coordinates: [number, number];
}

export async function searchPlaces(
  query: string,
  options?: { country?: string; limit?: number }
): Promise<GeocodingResult[]> {
  const token = getMapboxToken();
  const country = options?.country ?? "de";
  const limit = options?.limit ?? 5;

  const url = new URL(
    `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(query)}.json`
  );
  url.searchParams.set("access_token", token);
  url.searchParams.set("country", country);
  url.searchParams.set("types", MAPBOX_GEOCODING_TYPES);
  url.searchParams.set("limit", String(limit));
  url.searchParams.set("language", "de");

  const response = await fetch(url.toString());
  if (!response.ok) {
    throw new Error(`Geocoding fehlgeschlagen: ${response.status}`);
  }

  const data = (await response.json()) as {
    features: Array<{
      id: string;
      place_name: string;
      text: string;
      center: [number, number];
    }>;
  };

  return data.features.map((feature) => ({
    id: feature.id,
    name: feature.text,
    address: feature.place_name,
    coordinates: feature.center,
  }));
}

export function staticMapUrl(
  coordinates: [number, number],
  options?: { width?: number; height?: number; zoom?: number; style?: string }
): string {
  const token = getMapboxToken();
  const [lng, lat] = coordinates;
  const width = options?.width ?? 560;
  const height = options?.height ?? 400;
  const zoom = options?.zoom ?? 14;
  const style = options?.style ?? "light-v11";

  return `https://api.mapbox.com/styles/v1/mapbox/${style}/static/pin-l+1b1b1b(${lng},${lat})/${lng},${lat},${zoom},0/${width}x${height}@2x?access_token=${token}`;
}
