const TENANTS = [
  { slug: "bestattungen-mueller", name: "Bestattungen Müller", plan: "Professional", status: "active" },
  { slug: "friedhofsgarten-schmidt", name: "Friedhofsgarten Schmidt", plan: "Starter", status: "active" },
  { slug: "demo-tenant", name: "Demo Tenant", plan: "Trial", status: "suspended" },
];

export default function AdminPage() {
  return (
    <div className="p-8">
      <header className="mb-8 border-b border-zinc-800 pb-6">
        <p className="text-xs uppercase tracking-widest text-zinc-500">Platform Admin</p>
        <h1 className="text-2xl font-semibold">Memora Tenants</h1>
      </header>

      <div className="overflow-hidden rounded-lg border border-zinc-800">
        <table className="w-full text-left text-sm">
          <thead className="bg-zinc-900 text-zinc-400">
            <tr>
              <th className="px-4 py-3">Slug</th>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Plan</th>
              <th className="px-4 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {TENANTS.map((t) => (
              <tr key={t.slug} className="border-t border-zinc-800">
                <td className="px-4 py-3 font-mono text-xs">{t.slug}</td>
                <td className="px-4 py-3">{t.name}</td>
                <td className="px-4 py-3">{t.plan}</td>
                <td className="px-4 py-3">
                  <span
                    className={`rounded px-2 py-0.5 text-xs ${
                      t.status === "active"
                        ? "bg-emerald-900 text-emerald-300"
                        : "bg-red-900 text-red-300"
                    }`}
                  >
                    {t.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-6 text-sm text-zinc-500">
        <a href="http://localhost:3000" className="underline">
          Public site
        </a>
      </p>
    </div>
  );
}
