"use client";

import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { DEMO_CEMETERY, MAPBOX_STYLE, type MapLocation } from "@memora/shared";
import { getMapboxToken } from "@/lib/mapbox";
import "./mapbox.css";

export interface MapboxMapProps {
  center?: [number, number];
  zoom?: number;
  markers?: MapLocation[];
  className?: string;
  interactive?: boolean;
  onMarkerClick?: (location: MapLocation) => void;
}

export function MapboxMap({
  center = DEMO_CEMETERY.coordinates,
  zoom = 14,
  markers = [DEMO_CEMETERY],
  className = "",
  interactive = true,
  onMarkerClick,
}: MapboxMapProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);
  const markersRef = useRef<mapboxgl.Marker[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    mapboxgl.accessToken = getMapboxToken();
    // CDN worker — fixes GitHub Pages subpath (/memora-platform/)
    mapboxgl.workerUrl = `https://api.mapbox.com/mapbox-gl-js/v${mapboxgl.version}/mapbox-gl-csp-worker.js`;

    const map = new mapboxgl.Map({
      container: containerRef.current,
      style: MAPBOX_STYLE,
      center,
      zoom,
      interactive,
      attributionControl: true,
    });

    map.addControl(new mapboxgl.NavigationControl({ showCompass: false }), "top-right");

    mapRef.current = map;

    return () => {
      markersRef.current.forEach((m) => m.remove());
      markersRef.current = [];
      map.remove();
      mapRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;

    markersRef.current.forEach((m) => m.remove());
    markersRef.current = [];

    markers.forEach((location) => {
      const el = document.createElement("div");
      el.className = "memora-marker";
      el.title = location.name;

      const marker = new mapboxgl.Marker({ element: el })
        .setLngLat(location.coordinates)
        .setPopup(
          new mapboxgl.Popup({ offset: 12, closeButton: true }).setHTML(
            `<strong>${location.name}</strong><br/><span style="color:#666;font-size:12px">${location.address}</span>`
          )
        )
        .addTo(map);

      if (onMarkerClick) {
        el.addEventListener("click", () => onMarkerClick(location));
      }

      markersRef.current.push(marker);
    });
  }, [markers, onMarkerClick]);

  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;
    map.flyTo({ center, zoom, duration: 800 });
  }, [center, zoom]);

  return (
    <div
      ref={containerRef}
      className={`mapbox-editorial h-full w-full min-h-[280px] ${className}`}
    />
  );
}
