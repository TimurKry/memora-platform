import { CategoryBar } from "@/components/CategoryBar";
import { Header } from "@/components/Header";
import { KarteMapSection } from "@/components/map/KarteMapSection";
import { Suspense } from "react";

export default function KartePage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-[1280px] border-x border-memora-border px-8 py-16 lg:px-14 lg:py-20">
        <p className="text-[10px] uppercase tracking-[0.22em] text-memora-muted">
          Interaktive Karte
        </p>
        <h1 className="mt-4 font-serif text-3xl md:text-4xl">Friedhofskarte</h1>
        <p className="editorial-body mt-4 max-w-lg">
          Friedhof oder Ort suchen — mit Mapbox-Karte und Wegführung zu Gräbern und Kapellen.
        </p>
        <div className="mx-auto mt-12 max-w-3xl border border-memora-border bg-memora-white p-6 lg:p-10">
          <Suspense
            fallback={
              <div className="flex aspect-[4/3] items-center justify-center text-sm text-memora-muted">
                Karte wird geladen…
              </div>
            }
          >
            <KarteMapSection />
          </Suspense>
        </div>
      </main>
      <div className="mx-auto max-w-[1280px] border-x border-memora-border">
        <CategoryBar />
      </div>
    </>
  );
}
