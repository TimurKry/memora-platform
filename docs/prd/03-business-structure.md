# 03 — Business Structure

> Maps business entities, relationships, and web application surfaces.
> **Decisions locked:** Hybrid customer account · Case in MVP · web-public in MVP

---

## Entity Hierarchy

```text
Platform (Memora)
└── Tenant (billing + branding unit)
    ├── Organization(s) — typed business entities
    │   ├── funeral_home
    │   ├── cemetery
    │   ├── supplier
    │   ├── transport
    │   └── crematorium
    └── Location(s) — physical branches per organization
```

| Level | Definition | Pays SaaS | White-label site |
|-------|------------|-----------|------------------|
| Platform | Memora operator | — | memora.app |
| Tenant | Subscribing legal entity | ✓ | Branded domain / subdomain |
| Organization | Business type within tenant | — | Module set in partner portal |
| Location | Branch / site | — | Address on public pages |

### Cemetery Model (Decision: Hybrid C)

- Cemetery **can be its own Tenant** (cemetery-first GTM, own SaaS + branding)
- Funeral home connects via **Partnership** (cross-tenant link)
- Cemetery data owned by cemetery tenant; funeral home sees only linked Requests/Orders

---

## Core Business Objects

### Case (MVP — first-class entity)

Central object for the funeral journey. UI simplified in MVP; full workflow in Phase 2.

```text
Case
├── stages: inquiry → consultation → planning → documentation →
│            coordination → ceremony → billing → closed
├── contacts[]        # bereaved family, deceased metadata
├── appointments[]    # consultations, viewings, ceremony
├── documents[]       # uploads, verification status
├── orders[]          # marketplace items (Phase 2)
├── requests[]        # cross-org (cemetery, transport) (Phase 2)
├── payments[]        # linked invoices / Stripe intents
└── owner_org_id      # always funeral_home (orchestrator)
```

**MVP scope:** Case CRUD, basic stages, link appointments + contacts. No cross-tenant requests yet.

### Other entities

| Entity | Owner | MVP |
|--------|-------|-----|
| Appointment | Organization | ✓ |
| Contact | Tenant | ✓ |
| Order | Organization | Phase 2 |
| Request | Cross-org via Partnership | Phase 2 |
| Partnership | Platform | Phase 2 (schema stub in MVP) |

---

## Organization Types → Partner Portal Modules

Single app (`app.memora.app`), navigation filtered by `organization.type`:

| Module | funeral_home | cemetery | supplier | transport |
|--------|:------------:|:--------:|:--------:|:---------:|
| Dashboard | ✓ | ✓ | ✓ | ✓ |
| Cases | ✓ | — | — | — |
| Calendar | ✓ | ✓ | — | ✓ |
| CRM / Contacts | ✓ | — | — | — |
| Cemetery (plots, slots) | — | ✓ | — | — |
| Marketplace (buy) | ✓ | — | — | — |
| Catalog / Orders | — | — | ✓ | — |
| Documents | ✓ | ✓ | — | — |
| Payments | ✓ | — | — | — |
| Settings / Staff | ✓ | ✓ | ✓ | ✓ |

---

## Web Application Surfaces (MVP)

| App | URL (dev) | Audience | MVP deliverable |
|-----|-----------|----------|-----------------|
| **web-public** | `localhost:3000` | B2C discovery | Search, compare funeral homes, entry to booking |
| **web-tenant** | `localhost:3001` | B2C per brand | White-label site, services, book, case status |
| **web-partner** | `localhost:3002` | B2B staff | Cases, calendar, CRM shell |
| **web-admin** | `localhost:3003` | Memora ops | Tenant list, provisioning shell |
| **api** | `localhost:4000` | All apps | REST API (Phase 1 increment) |

### web-public in MVP

- Aggregator homepage: find funeral homes by city (DE)
- Listing cards: name, rating placeholder, services summary, CTA
- Link out to tenant white-label site for booking
- SEO landing pages (`/de/berlin/bestattungen`)
- Customer account entry (login/register → hybrid model)

---

## Customer Account Model (Decision: Hybrid)

```text
User (global identity — one email)
├── auth_provider_id
├── CustomerProfile (global)
└── TenantMembership[] (optional, for B2B staff)

CustomerCaseAccess
  user_id + tenant_id + case_id  →  data isolated per tenant
```

| Aspect | Behavior |
|--------|----------|
| Login | Single account on memora.app or tenant site (SSO) |
| Data isolation | Cases, documents, payments scoped to `tenant_id` |
| Cross-tenant view | Customer sees separate lists per tenant (no merge) |
| White-label | Tenant site login shows only that tenant's data |
| GDPR | Export/delete per tenant scope |

---

## Case Ownership (Decision: Funeral Home orchestrator)

- **Default owner:** `funeral_home` organization that created the Case
- **Exception (Phase 2):** Cemetery-initiated Case when customer enters via cemetery portal (cemetery-first GTM)
- MVP: only funeral home creates Cases

---

## Cross-Tenant Partnerships (Phase 2, schema in MVP)

```text
partnerships
  initiator_tenant_id
  partner_tenant_id
  initiator_org_id
  partner_org_id
  type: cemetery | supplier | transport
  status: pending | active | suspended
  terms: jsonb
```

---

## Money Flows

```text
Customer → Funeral Home (Stripe Connect)
              ├── platform_fee → Memora
              ├── supplier_payout → Supplier (Phase 2)
              └── partnership_fee → Cemetery (Phase 2, configurable)
```

Funeral Home is the **payment hub** in standard flow.

---

## MVP Boundaries

### In MVP
- [x] Entity model: Tenant, Organization, Location, Case, Appointment, Contact
- [x] web-public discovery + SEO shell
- [x] web-tenant white-label booking flow (demo → API)
- [x] web-partner: cases + calendar shell
- [x] Hybrid customer account (auth stub → Clerk/Auth.js)
- [x] Single-org tenant (funeral home only)

### Phase 2
- Cross-tenant partnerships live
- Cemetery tenant + Requests
- Marketplace orders
- web-public → full comparison checkout

---

*Version 0.1 — decisions locked 2026-07-05*
