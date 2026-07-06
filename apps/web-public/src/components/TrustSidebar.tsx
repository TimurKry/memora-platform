function IconPhone() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.8 19.8 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.8 19.8 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}

function IconPeople() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
    </svg>
  );
}

function IconDoc() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
      <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
    </svg>
  );
}

const trustItems = [
  { icon: IconPhone, line1: "24/7", line2: "Erreichbar" },
  { icon: IconPeople, line1: "Persönliche", line2: "Begleitung" },
  { icon: IconDoc, line1: "Transparente", line2: "Kosten" },
];

export function TrustSidebar() {
  return (
    <aside className="border-t border-memora-border bg-memora-paper lg:w-[11rem] lg:shrink-0 lg:border-l lg:border-t-0">
      <div className="flex flex-row flex-wrap justify-around gap-6 px-6 py-10 lg:flex-col lg:items-center lg:justify-start lg:gap-0 lg:px-0 lg:py-16">
        {trustItems.map((item) => (
          <div
            key={item.line1}
            className="flex flex-col items-center px-4 py-5 text-center lg:border-b lg:border-memora-border lg:py-8"
          >
            <div className="mb-3 text-memora-muted">
              <item.icon />
            </div>
            <span className="block text-[9px] uppercase tracking-[0.14em] text-memora-text">
              {item.line1}
            </span>
            <span className="block text-[9px] uppercase tracking-[0.12em] text-memora-muted">
              {item.line2}
            </span>
          </div>
        ))}

        <div className="w-full px-4 py-6 text-center lg:mt-2 lg:px-6">
          <p className="text-[9px] uppercase tracking-[0.16em] text-memora-muted">Bewertungen</p>
          <p className="mt-2 font-serif text-[1.75rem] leading-none text-memora-text">4.9</p>
          <p className="mt-1 text-[11px] tracking-widest text-memora-text" aria-hidden>
            ★★★★★
          </p>
          <p className="mt-1 text-[10px] text-memora-muted">(128)</p>
        </div>
      </div>
    </aside>
  );
}
