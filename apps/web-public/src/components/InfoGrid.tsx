import Link from "next/link";

function LilyIcon() {
  return (
    <svg
      viewBox="0 0 80 120"
      className="mx-auto h-24 w-16 text-memora-ink opacity-70"
      fill="none"
      stroke="currentColor"
      strokeWidth="0.8"
      aria-hidden
    >
      <path d="M40 110 L40 50" />
      <path d="M40 70 Q20 50 25 30 Q40 45 40 55" />
      <path d="M40 65 Q60 45 55 25 Q40 42 40 52" />
      <path d="M40 55 Q15 35 30 15 Q38 35 40 48" />
      <path d="M40 52 Q65 32 50 12 Q42 32 40 45" />
      <ellipse cx="40" cy="48" rx="6" ry="10" />
    </svg>
  );
}

export function InfoGrid() {
  return (
    <section className="border-b border-memora-line">
      <div className="mx-auto grid max-w-[1400px] md:grid-cols-3">
        <div className="vertical-divider px-6 py-10 lg:px-10 lg:py-14">
          <h2 className="section-title">WIR NEHMEN UNS ZEIT.</h2>
          <p className="mt-4 text-sm leading-relaxed text-memora-ink-muted">
            Jede Abschiednahme ist einzigartig. Deshalb nehmen wir uns die Zeit, die Sie brauchen —
            für Gespräche, Fragen und Entscheidungen in Ruhe.
          </p>
          <LilyIcon />
          <Link
            href="/ueber-uns"
            className="mt-4 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.12em] text-memora-ink hover:underline"
          >
            Mehr erfahren <span aria-hidden>→</span>
          </Link>
        </div>

        <div className="vertical-divider border-t border-memora-line px-6 py-10 md:border-t-0 lg:px-10 lg:py-14">
          <h2 className="section-title">
            FINDEN. ERINNERN.
            <br />
            VERBUNDEN BLEIBEN.
          </h2>
          <p className="mt-4 text-sm text-memora-ink-muted">
            Ort oder Friedhof finden — für eine würdevolle Erinnerung.
          </p>
          <form className="mt-6" action="#suchen">
            <label className="sr-only" htmlFor="friedhof-search">
              Friedhof suchen
            </label>
            <input
              id="friedhof-search"
              type="search"
              placeholder="Friedhof suchen..."
              className="w-full border border-memora-line bg-white px-4 py-3 text-sm placeholder:text-memora-ink-muted/60 focus:border-memora-ink focus:outline-none"
            />
          </form>
          <Link
            href="#suchen"
            className="mt-4 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.12em] text-memora-ink hover:underline"
          >
            <span aria-hidden>⌖</span> Auf Karte suchen
          </Link>
        </div>

        <div className="border-t border-memora-line px-6 py-10 md:border-t-0 lg:px-10 lg:py-14">
          <h2 className="section-title">STANDORT</h2>
          <p className="mt-4 text-sm text-memora-ink-muted">
            Memora Platform
            <br />
            Leipzig (Demo)
            <br />
            Mo–Fr 8–18 Uhr
          </p>
          <Link
            href="/kontakt"
            className="mt-4 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.12em] text-memora-ink hover:underline"
          >
            Route planen <span aria-hidden>→</span>
          </Link>
          <div className="mt-6 h-24 border border-memora-line bg-white/50">
            <svg viewBox="0 0 200 80" className="h-full w-full opacity-40" aria-hidden>
              <path d="M0 60 L40 40 L80 55 L120 30 L160 50 L200 35" fill="none" stroke="#1a1a1a" strokeWidth="0.8" />
              <circle cx="120" cy="30" r="4" fill="#1a1a1a" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
