const items = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
      </svg>
    ),
    label: "24/7",
    sub: "Erreichbarkeit",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    label: "Persönliche",
    sub: "Begleitung",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M2 10h20" />
      </svg>
    ),
    label: "Transparente",
    sub: "Kosten",
  },
];

export function TrustSidebar() {
  return (
    <aside className="border-b border-memora-line bg-memora-cream lg:w-52 lg:border-b-0 lg:border-l">
      <div className="flex flex-row flex-wrap justify-center gap-8 px-6 py-8 lg:flex-col lg:items-center lg:gap-12 lg:py-16">
        {items.map((item) => (
          <div key={item.label} className="flex flex-col items-center text-center">
            <div className="mb-2 text-memora-ink-muted">{item.icon}</div>
            <span className="text-[10px] font-medium uppercase tracking-[0.12em] text-memora-ink">
              {item.label}
            </span>
            <span className="text-[10px] uppercase tracking-[0.1em] text-memora-ink-muted">
              {item.sub}
            </span>
          </div>
        ))}

        <div className="w-full border-t border-memora-line pt-6 text-center lg:mt-4">
          <p className="font-serif text-2xl text-memora-ink">4.9</p>
          <p className="text-xs text-amber-700" aria-label="4.9 von 5 Sternen">
            ★★★★★
          </p>
          <p className="mt-1 text-[10px] text-memora-ink-muted">(128)</p>
        </div>
      </div>
    </aside>
  );
}
