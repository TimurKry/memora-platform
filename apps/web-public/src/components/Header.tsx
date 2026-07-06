import Link from "next/link";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3">
      <span className="relative flex h-8 w-8 items-center justify-center" aria-hidden>
        <span className="absolute left-1 top-0 h-1.5 w-1.5 rounded-full bg-memora-ink" />
        <span className="absolute right-1 top-0 h-1.5 w-1.5 rounded-full bg-memora-ink" />
        <span className="absolute bottom-0 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-memora-ink" />
      </span>
      <span className="font-serif text-xl tracking-wide text-memora-ink">MEMORA</span>
    </Link>
  );
}

export function Header() {
  return (
    <header className="border-b border-memora-line bg-memora-cream">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 lg:px-10">
        <Logo />

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Hauptnavigation">
          <Link href="/" className="nav-link">
            Für Angehörige
          </Link>
          <Link href="/vorsorge" className="nav-link">
            Vorsorge
          </Link>
          <Link href="/ueber-uns" className="nav-link">
            Über uns
          </Link>
          <Link href="/ratgeber" className="nav-link">
            Ratgeber
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link href="/kontakt" className="btn-outline hidden px-4 py-2 sm:inline-flex">
            Kontakt
          </Link>
          <button
            type="button"
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
            aria-label="Menü"
          >
            <span className="h-px w-5 bg-memora-ink" />
            <span className="h-px w-5 bg-memora-ink" />
          </button>
        </div>
      </div>
    </header>
  );
}
