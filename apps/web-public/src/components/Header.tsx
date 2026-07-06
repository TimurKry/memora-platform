import Link from "next/link";

function LogoMark() {
  return (
    <span className="relative block h-7 w-7" aria-hidden>
      <span className="absolute left-0 top-0 h-[7px] w-[7px] rounded-full bg-memora-accent" />
      <span className="absolute right-0 top-0 h-[7px] w-[7px] rounded-full bg-memora-accent" />
      <span className="absolute bottom-0 left-1/2 h-[7px] w-[7px] -translate-x-1/2 rounded-full bg-memora-accent" />
    </span>
  );
}

export function Header() {
  return (
    <header className="border-b border-memora-border bg-memora-paper/80 backdrop-blur-sm">
      <div className="mx-auto flex max-w-editorial items-center justify-between px-8 py-6 lg:px-14">
        <Link href="/" className="flex items-center gap-4">
          <LogoMark />
          <span className="font-serif text-[15px] tracking-logo text-memora-text">MEMORA</span>
        </Link>

        <nav className="hidden items-center gap-10 xl:flex" aria-label="Hauptnavigation">
          <Link href="/suchen" className="nav-link">
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

        <div className="flex items-center gap-5">
          <Link href="/kontakt" className="btn-outline hidden px-5 py-2.5 lg:inline-flex">
            Kontakt
          </Link>
          <button
            type="button"
            className="flex h-9 w-9 flex-col items-center justify-center gap-[5px]"
            aria-label="Menü öffnen"
          >
            <span className="h-px w-[18px] bg-memora-accent" />
            <span className="h-px w-[18px] bg-memora-accent" />
          </button>
        </div>
      </div>
    </header>
  );
}
