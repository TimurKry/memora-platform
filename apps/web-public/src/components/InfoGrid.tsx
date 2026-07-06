import Link from "next/link";

function LilyDrawing() {
  return (
    <svg
      viewBox="0 0 72 110"
      className="mx-auto mt-8 h-[88px] w-[52px] text-memora-text"
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

function MiniMap() {
  return (
    <div className="relative mt-8 aspect-[4/3] w-full max-w-[140px] border border-memora-border bg-memora-white">
      <svg viewBox="0 0 140 105" className="h-full w-full opacity-50" aria-hidden>
        <path d="M0 70 L35 50 L70 65 L105 40 L140 55" fill="none" stroke="#1b1b1b" strokeWidth="0.6" />
        <path d="M20 90 L60 75 L100 85" fill="none" stroke="#1b1b1b" strokeWidth="0.4" opacity="0.5" />
        <circle cx="88" cy="48" r="3" fill="#1b1b1b" />
      </svg>
    </div>
  );
}

export function InfoGrid() {
  return (
    <section className="border-t border-memora-border">
      <div className="mx-auto grid max-w-editorial md:grid-cols-3">
        {/* Col 1 */}
        <div className="border-b border-memora-border px-8 py-12 md:border-b-0 md:border-r lg:px-12 lg:py-16">
          <h2 className="section-title">WIR NEHMEN UNS ZEIT.</h2>
          <p className="editorial-body mt-5">
            Jede Abschiednahme ist einzigartig. Wir schaffen Raum für Gespräche, Fragen und
            Entscheidungen — ohne Eile, ohne Druck.
          </p>
          <LilyDrawing />
          <Link
            href="/ueber-uns"
            className="mt-6 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.16em] text-memora-text transition-opacity hover:opacity-60"
          >
            Mehr erfahren <span aria-hidden>→</span>
          </Link>
        </div>

        {/* Col 2 */}
        <div className="border-b border-memora-border px-8 py-12 md:border-b-0 md:border-r lg:px-12 lg:py-16">
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
          <form className="mt-8" action="/suchen">
            <label className="sr-only" htmlFor="cemetery-search">
              Friedhof oder Ort
            </label>
            <div className="relative">
              <input
                id="cemetery-search"
                type="search"
                name="q"
                placeholder="Friedhof oder Ort eingeben"
                className="w-full border border-memora-border bg-memora-white py-3.5 pl-4 pr-10 text-[13px] text-memora-text placeholder:text-memora-muted/50 focus:border-memora-accent focus:outline-none"
              />
              <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-memora-muted">
                ⌕
              </span>
            </div>
          </form>
          <Link
            href="/karte"
            className="mt-5 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.16em] text-memora-text transition-opacity hover:opacity-60"
          >
            Auf Karte suchen <span aria-hidden>→</span>
          </Link>
        </div>

        {/* Col 3 */}
        <div className="px-8 py-12 lg:px-12 lg:py-16">
          <h2 className="section-title">HAUPTFRIEDHOF LEIPZIG</h2>
          <p className="editorial-body mt-5">
            Friedhof Leipzig-Süd
            <br />
            Karl-Liebknecht-Straße 120
            <br />
            04275 Leipzig
          </p>
          <Link
            href="/kontakt"
            className="mt-5 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.16em] text-memora-text transition-opacity hover:opacity-60"
          >
            Route planen <span aria-hidden>→</span>
          </Link>
          <MiniMap />
        </div>
      </div>
    </section>
  );
}
