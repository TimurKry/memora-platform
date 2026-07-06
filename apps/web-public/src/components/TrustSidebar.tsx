export function TrustSidebar() {
  return (
    <aside className="w-full shrink-0 border-t border-memora-border bg-memora-paper lg:w-[168px] lg:border-l lg:border-t-0">
      <div className="flex flex-row justify-center gap-0 lg:flex-col lg:items-stretch">
        {[
          {
            icon: (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.8 19.8 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.8 19.8 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
              </svg>
            ),
            l1: "24/7",
            l2: "Erreichbar",
          },
          {
            icon: (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
              </svg>
            ),
            l1: "Persönliche",
            l2: "Begleitung",
          },
          {
            icon: (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
              </svg>
            ),
            l1: "Transparente",
            l2: "Kosten",
          },
        ].map((item) => (
          <div
            key={item.l1}
            className="flex flex-1 flex-col items-center border-r border-memora-border px-3 py-8 text-center last:border-r-0 lg:flex-none lg:border-b lg:border-r-0 lg:px-4 lg:py-9"
          >
            <div className="mb-2.5 text-memora-muted">{item.icon}</div>
            <span className="block text-[8px] uppercase tracking-[0.14em] text-memora-text">{item.l1}</span>
            <span className="block text-[8px] uppercase tracking-[0.12em] text-memora-muted">{item.l2}</span>
          </div>
        ))}

        <div className="hidden flex-col items-center border-t border-memora-border px-4 py-8 text-center lg:flex">
          <p className="text-[8px] uppercase tracking-[0.16em] text-memora-muted">Bewertungen</p>
          <p className="mt-2 font-serif text-[1.65rem] leading-none">4.9</p>
          <p className="mt-1 text-[10px] tracking-[0.2em]" aria-hidden>
            ★★★★★
          </p>
          <p className="mt-1 text-[9px] text-memora-muted">(128)</p>
        </div>
      </div>

      {/* Mobile ratings */}
      <div className="border-t border-memora-border py-6 text-center lg:hidden">
        <p className="text-[8px] uppercase tracking-[0.16em] text-memora-muted">Bewertungen · 4.9 ★★★★★ (128)</p>
      </div>
    </aside>
  );
}
