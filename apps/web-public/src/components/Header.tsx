import Link from "next/link";

function LogoMark() {
  return (
    <span className="relative block h-[26px] w-[26px] shrink-0" aria-hidden>
      <span className="absolute left-0 top-0 h-[8px] w-[8px] rounded-full bg-memora-gold" />
      <span className="absolute right-0 top-0 h-[8px] w-[8px] rounded-full bg-memora-gold" />
      <span className="absolute bottom-0 left-1/2 h-[8px] w-[8px] -translate-x-1/2 rounded-full bg-memora-gold" />
    </span>
  );
}

export function Header() {
  return (
    <header className="border-b border-memora-border bg-memora-paper">
      <div className="mx-auto grid max-w-[1280px] grid-cols-[1fr_auto_1fr] items-center border-x border-memora-border px-6 py-5 lg:px-10">
        <Link href="/" className="flex items-center gap-3 justify-self-start">
          <LogoMark />
          <span className="font-serif text-[14px] tracking-logo text-memora-accent">MEMORA</span>
        </Link>

        <nav
          className="hidden items-center gap-8 justify-self-center lg:flex xl:gap-10"
          aria-label="Hauptnavigation"
        >
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

        <div className="flex items-center gap-4 justify-self-end">
          <Link href="/kontakt" className="btn-outline hidden px-5 py-2.5 lg:inline-flex">
            Kontakt
          </Link>
          <button
            type="button"
            className="flex h-9 w-9 flex-col items-center justify-center gap-[5px]"
            aria-label="Menü öffnen"
          >
            <span className="h-px w-[18px] bg-memora-gold" />
            <span className="h-px w-[18px] bg-memora-gold" />
          </button>
        </div>
      </div>
    </header>
  );
}
