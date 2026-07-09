import Link from "next/link";
import { InfoGridSearch } from "./map/InfoGridSearch";
import { EditorialMapboxStatic } from "./map/EditorialMapboxStatic";

function LilyDrawing() {
  return (
    <svg
      viewBox="0 0 72 110"
      className="mt-10 h-[92px] w-[54px] text-memora-text"
      fill="none"
      stroke="currentColor"
      strokeWidth="0.65"
      aria-hidden
    >
      <path d="M36 100 L36 42" opacity="0.7" />
      <path d="M36 62 Q18 48 22 28 Q34 44 36 52" opacity="0.55" />
      <path d="M36 58 Q54 44 50 24 Q38 40 36 50" opacity="0.55" />
      <path d="M36 48 Q14 30 28 12 Q35 30 36 42" opacity="0.45" />
      <path d="M36 46 Q58 28 44 10 Q37 28 36 40" opacity="0.45" />
      <ellipse cx="36" cy="44" rx="5" ry="9" opacity="0.6" />
    </svg>
  );
}

export function InfoGrid() {
  return (
    <section className="border-t border-memora-border">
      <div className="grid md:grid-cols-3">
        <div className="border-b border-memora-border px-8 py-12 md:border-b-0 md:border-r lg:px-10 lg:py-14 xl:px-12">
          <h2 className="section-title">WIR NEHMEN UNS ZEIT.</h2>
          <p className="editorial-body mt-5">
            Jede Abschiednahme ist einzigartig. Wir schaffen Raum für Gespräche, Fragen und
            Entscheidungen — ohne Eile, ohne Druck.
          </p>
          <div className="flex justify-center md:justify-start">
            <LilyDrawing />
          </div>
          <Link
            href="/ueber-uns"
            className="mt-2 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.16em] text-memora-text transition-opacity hover:opacity-60"
          >
            Mehr erfahren <span aria-hidden>→</span>
          </Link>
        </div>

        <div className="border-b border-memora-border px-8 py-12 md:border-b-0 md:border-r lg:px-10 lg:py-14 xl:px-12">
          <h2 className="section-title">
            FINDEN.
            <br />
            ERINNERN.
            <br />
            VERBUNDEN BLEIBEN.
          </h2>
          <p className="editorial-body mt-5">
            Friedhof oder Grab finden — mit illustrierten Wegkarten für jeden Friedhof.
          </p>
          <div className="mt-7">
            <InfoGridSearch />
          </div>
          <Link
            href="/karte"
            className="mt-5 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.16em] text-memora-text transition-opacity hover:opacity-60"
          >
            Auf Karte suchen <span aria-hidden>→</span>
          </Link>
        </div>

        <div className="px-8 py-12 lg:px-10 lg:py-14 xl:px-12">
          <h2 className="section-title">HAUPTFRIEDHOF LEIPZIG</h2>
          <div className="mt-5 flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            <p className="editorial-body">
              Friedhof Leipzig-Süd
              <br />
              Karl-Liebknecht-Straße 120
              <br />
              04275 Leipzig
            </p>
            <Link
              href="/karte"
              className="aspect-[4/3] w-full max-w-[130px] shrink-0 border border-memora-border bg-[#faf9f6] p-1.5 transition-opacity hover:opacity-80"
              aria-label="Karte: Hauptfriedhof Leipzig"
            >
              <EditorialMapboxStatic label="Südfriedhof" className="h-full w-full" />
            </Link>
          </div>
          <Link
            href="/kontakt"
            className="mt-5 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.16em] text-memora-text transition-opacity hover:opacity-60"
          >
            Route planen <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
