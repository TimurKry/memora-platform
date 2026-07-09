# MEMORA Documentation Hub

> **Single source of truth** for architecture, business, and implementation specs.  
> Maintained by the [Technical Documentation Agent](../AGENTS.md).  
> **Ecosystem map:** [`ECOSYSTEM.md`](ECOSYSTEM.md) — required reading before any module design.

---

## Status legend

| Status | Meaning |
|--------|---------|
| ✅ Done | Reviewed, usable |
| 🟡 Draft | Exists, needs expansion |
| ⬜ Planned | Structure only |

---

## Structure

```
docs/
├── ECOSYSTEM.md          ← Win-win map (all participants) ✅
├── README.md             ← This file
│
├── architecture/         ⬜ System design, services, deployment topology
├── business/             🟡 Model, pricing, monetization
├── database/             🟡 ER diagrams, schemas (see also prd/07)
├── api/                  ⬜ REST/OpenAPI specs per module
├── modules/              ⬜ Cross-cutting module index
│
├── crm/                  ⬜ Leads, contacts, Cases, timeline
├── marketplace/          ⬜ Catalog, orders, commissions
├── cemetery/             ⬜ Maps, plots, reservations, navigation
├── crematorium/          ⬜ Scheduling, capacity, status
├── white-label/          ⬜ Tenants, branding, domains, feature flags
│
├── user-flows/           🟡 Journeys (see also prd/05)
├── security/             ⬜ Auth, GDPR, audit, RBAC
├── deployment/           🟡 CI/CD, GitHub Pages, cloud (see tech-stack.md)
├── integrations/         ⬜ Stripe, Mapbox, email, insurance APIs
├── ai/                   ⬜ Future: assistant, OCR, recommendations
│
├── roadmap/              🟡 Phases (see prd/12-roadmap.md)
├── diagrams/             ⬜ Shared Mermaid sources
├── decisions/            🟡 ADRs
├── glossary/             🟡 Terms (see prd/glossary.md)
│
└── prd/                  ✅ Formal PRD sections (English)
```

---

## Quick links

| Topic | Document |
|-------|----------|
| **Ecosystem & monetization** | [`ECOSYSTEM.md`](ECOSYSTEM.md) |
| Vision | [`prd/01-vision.md`](prd/01-vision.md) |
| Business model | [`prd/02-business-model.md`](prd/02-business-model.md) · [`business/README.md`](business/README.md) |
| Entities & Case | [`prd/03-business-structure.md`](prd/03-business-structure.md) |
| Personas & RBAC | [`prd/04-personas-roles.md`](prd/04-personas-roles.md) |
| User flows | [`prd/05-user-flows.md`](prd/05-user-flows.md) |
| Features | [`prd/06-features.md`](prd/06-features.md) |
| Database | [`prd/07-database.md`](prd/07-database.md) · [`database/README.md`](database/README.md) |
| Roadmap | [`prd/12-roadmap.md`](prd/12-roadmap.md) |
| Tech stack | [`tech-stack.md`](tech-stack.md) |
| Win-win (RU) | [`../collaboration/monetization-win-win.md`](../collaboration/monetization-win-win.md) |
| Team decisions | [`../collaboration/decisions-log.md`](../collaboration/decisions-log.md) |

---

## Agent workflow

1. Read `ECOSYSTEM.md`
2. Pick or create module doc under the right folder
3. Add Mermaid diagrams
4. Update this index (status)
5. ADR for architectural decisions → `decisions/`
6. Commit: `docs: <what changed>`

---

## Implementation apps (reference)

| App | Port | Doc surface |
|-----|------|-------------|
| web-public | 3000 | B2C discovery · [`white-label/`](white-label/) |
| web-tenant | 3001 | Branded tenant site |
| web-partner | 3002 | B2B portal · [`crm/`](crm/) |
| web-admin | 3003 | Platform ops |
| api | 4000 | [`api/`](api/) |

---

*Last updated: 2026-07-09*
