"use client";

import { useCallback, useState } from "react";
import { hasMapboxToken, searchPlaces, type GeocodingResult } from "@/lib/mapbox";

interface CemeterySearchProps {
  onSelect: (result: GeocodingResult) => void;
  placeholder?: string;
}

export function CemeterySearch({
  onSelect,
  placeholder = "Friedhof oder Ort suchen…",
}: CemeterySearchProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<GeocodingResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const tokenAvailable = hasMapboxToken();

  const handleSearch = useCallback(async () => {
    const trimmed = query.trim();
    if (trimmed.length < 2) return;

    setLoading(true);
    setError(null);
    try {
      const places = await searchPlaces(trimmed, { country: "de", limit: 6 });
      setResults(places);
      if (places.length === 0) {
        setError("Keine Ergebnisse gefunden.");
      }
    } catch {
      setError("Suche nicht verfügbar. Mapbox-Token prüfen.");
      setResults([]);
    } finally {
      setLoading(false);
    }
  }, [query]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      void handleSearch();
    }
  };

  if (!tokenAvailable) {
    return (
      <p className="text-xs text-[#666]">
        Mapbox-Token fehlt — Suche nach dem Deploy mit{" "}
        <code className="bg-[#F7F6F2] px-1">MAPBOX_TOKEN</code> Secret verfügbar.
      </p>
    );
  }

  return (
    <div className="relative w-full">
      <div className="flex border border-[#E6E4DF] bg-white">
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className="flex-1 bg-transparent px-4 py-3 text-sm text-[#1B1B1B] outline-none placeholder:text-[#999]"
          aria-label="Friedhof suchen"
        />
        <button
          type="button"
          onClick={() => void handleSearch()}
          disabled={loading}
          className="border-l border-[#E6E4DF] px-5 py-3 text-xs uppercase tracking-widest text-[#1B1B1B] transition hover:bg-[#F7F6F2] disabled:opacity-50"
        >
          {loading ? "…" : "Suchen"}
        </button>
      </div>

      {error && (
        <p className="mt-2 text-xs text-[#666]" role="alert">
          {error}
        </p>
      )}

      {results.length > 0 && (
        <ul
          className="absolute left-0 right-0 top-full z-20 mt-1 max-h-64 overflow-y-auto border border-[#E6E4DF] bg-white shadow-sm"
          role="listbox"
        >
          {results.map((result) => (
            <li key={result.id}>
              <button
                type="button"
                className="w-full border-b border-[#E6E4DF] px-4 py-3 text-left last:border-b-0 hover:bg-[#F7F6F2]"
                onClick={() => {
                  onSelect(result);
                  setResults([]);
                  setQuery(result.name);
                }}
              >
                <span className="block text-sm text-[#1B1B1B]">{result.name}</span>
                <span className="block text-xs text-[#666]">{result.address}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
