import type { ReactNode } from "react";

function SectionRail() {
  return (
    <div
      className="hidden w-12 shrink-0 flex-col items-center border-r border-memora-border py-16 lg:flex"
      aria-hidden
    >
      {["01", "02", "03"].map((n, i) => (
        <span
          key={n}
          className={`mb-12 font-serif text-[13px] tabular-nums ${
            i === 0 ? "text-memora-text" : "text-memora-border"
          }`}
        >
          {n}
        </span>
      ))}
    </div>
  );
}

export function EditorialFrame({
  children,
  sidebar,
}: {
  children: ReactNode;
  sidebar?: ReactNode;
}) {
  return (
    <div className="mx-auto w-full max-w-[1280px] border-x border-memora-border">
      <div className="flex">
        <SectionRail />
        <div className="flex min-w-0 flex-1 flex-col lg:flex-row">
          <div className="min-w-0 flex-1">{children}</div>
          {sidebar}
        </div>
      </div>
    </div>
  );
}

export function EditorialSection({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <section className={`border-b border-memora-border ${className}`}>{children}</section>;
}
