import Link from "next/link";

const categories = [
  { href: "/suchen", label: "Bestattungsarten", icon: "❋" },
  { href: "/vorsorge", label: "Vorsorge", icon: "✿" },
  { href: "/ratgeber?tag=begleitung", label: "Trauerbegleitung", icon: "🕯" },
  { href: "/ratgeber", label: "Ratgeber", icon: "◎" },
];

export function CategoryBar() {
  return (
    <nav
      className="border-b border-memora-line bg-memora-cream"
      aria-label="Leistungsbereiche"
    >
      <div className="mx-auto grid max-w-[1400px] grid-cols-2 md:grid-cols-4">
        {categories.map((cat) => (
          <Link
            key={cat.href}
            href={cat.href}
            className="flex flex-col items-center border-r border-memora-line px-4 py-8 text-center transition last:border-r-0 hover:bg-white/40"
          >
            <span className="mb-3 text-xl opacity-60" aria-hidden>
              {cat.icon}
            </span>
            <span className="text-[10px] font-medium uppercase tracking-[0.14em] text-memora-ink">
              {cat.label}
            </span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
