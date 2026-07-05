import { CASE_STAGE_LABELS, type CaseSummary } from "@memora/shared";

const DEMO_CASES: CaseSummary[] = [
  {
    id: "1",
    reference: "CASE-2026-0042",
    stage: "consultation",
    contactName: "Max Mustermann",
    createdAt: "2026-07-05",
    nextAppointment: "2026-07-07 10:30",
  },
  {
    id: "2",
    reference: "CASE-2026-0038",
    stage: "planning",
    contactName: "Anna Schmidt",
    createdAt: "2026-07-02",
  },
  {
    id: "3",
    reference: "CASE-2026-0031",
    stage: "ceremony",
    contactName: "Familie Weber",
    createdAt: "2026-06-28",
    nextAppointment: "2026-07-08 14:00",
  },
];

export default function PartnerPage() {
  return (
    <div className="flex min-h-screen">
      <aside className="w-56 bg-slate-900 p-4 text-white">
        <p className="text-xs uppercase tracking-widest text-slate-400">Partner</p>
        <h1 className="mt-1 font-semibold">Bestattungen Müller</h1>
        <nav className="mt-8 space-y-1 text-sm">
          {["Dashboard", "Fälle", "Kalender", "CRM", "Dokumente", "Einstellungen"].map(
            (item, i) => (
              <div
                key={item}
                className={`rounded-lg px-3 py-2 ${i === 1 ? "bg-slate-800" : "text-slate-400"}`}
              >
                {item}
              </div>
            ),
          )}
        </nav>
      </aside>

      <main className="flex-1 p-8">
        <header className="mb-8">
          <h2 className="text-2xl font-semibold text-slate-900">Fälle</h2>
          <p className="text-slate-500">MVP Demo — Case-first model</p>
        </header>

        <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
          <table className="w-full text-left text-sm">
            <thead className="border-b bg-slate-50 text-slate-600">
              <tr>
                <th className="px-4 py-3 font-medium">Referenz</th>
                <th className="px-4 py-3 font-medium">Kontakt</th>
                <th className="px-4 py-3 font-medium">Phase</th>
                <th className="px-4 py-3 font-medium">Nächster Termin</th>
              </tr>
            </thead>
            <tbody>
              {DEMO_CASES.map((c) => (
                <tr key={c.id} className="border-b last:border-0">
                  <td className="px-4 py-3 font-mono text-xs">{c.reference}</td>
                  <td className="px-4 py-3">{c.contactName}</td>
                  <td className="px-4 py-3">
                    <span className="rounded-full bg-violet-100 px-2.5 py-0.5 text-xs font-medium text-violet-800">
                      {CASE_STAGE_LABELS[c.stage]}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-slate-500">
                    {c.nextAppointment ?? "—"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-6 text-sm text-slate-400">
          <a href="http://localhost:3000" className="underline">
            ← Öffentliches Portal
          </a>
        </p>
      </main>
    </div>
  );
}
