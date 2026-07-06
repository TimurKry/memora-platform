import Link from "next/link";

function IconWreath() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.8">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 3c-2 3-2 6 0 9s2 6 0 9M12 3c2 3 2 6 0 9s-2 6 0 9" />
    </svg>
  );
}

function IconLeaf() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.8">
      <path d="M12 22C12 14 18 8 22 4C16 6 10 10 6 16C4 12 4 8 6 4C10 8 12 14 12 22Z" />
    </svg>
  );
}

function IconCandle() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.8">
      <path d="M12 2v2M10 6h4l-1 14H11L10 6Z" />
      <path d="M12 2c1 1 1.5 2 1 3s-1.5 1.5-1 3" />
    </svg>
  );
}

function IconGuide() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.8">
      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
    </svg>
  );
}

const items = [
  { href: "/suchen", label: "Bestattungsarten", Icon: IconWreath },
  { href: "/vorsorge", label: "Vorsorge", Icon: IconLeaf },
  { href: "/ratgeber?tag=begleitung", label: "Trauerbegleitung", Icon: IconCandle },
  { href: "/ratgeber", label: "Ratgeber", Icon: IconGuide },
];

export function CategoryBar() {
  return (
    <nav className="border-t border-memora-border" aria-label="Leistungsbereiche">
      <div className="mx-auto grid max-w-editorial grid-cols-2 md:grid-cols-4">
        {items.map(({ href, label, Icon }, i) => (
          <Link
            key={href}
            href={href}
            className={`group flex flex-col items-center px-4 py-10 text-center transition-colors duration-300 hover:bg-memora-white/60 ${
              i < items.length - 1 ? "md:border-r md:border-memora-border" : ""
            } ${i % 2 === 0 ? "border-r border-memora-border md:border-r" : ""} ${
              i < 2 ? "border-b border-memora-border md:border-b-0" : ""
            }`}
          >
            <span className="mb-4 text-memora-muted transition-colors group-hover:text-memora-text">
              <Icon />
            </span>
            <span className="text-[9px] uppercase tracking-[0.18em] text-memora-text">{label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
