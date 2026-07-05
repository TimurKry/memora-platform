# Memora Platform — Tech Stack

> White-label multi-tenant SaaS for the funeral industry: branded sites, booking, payments, CRM, marketplace, cemetery management.
>
> **Principle:** architecture supports multiple monetization models (SaaS subscriptions, marketplace commissions, payment processing fees, referral programs, cemetery partnerships) without coupling to a single revenue stream.

---

## Stack at a Glance

| Layer | Choice | Why |
|-------|--------|-----|
| Monorepo | **Turborepo** + **pnpm workspaces** | Shared types, UI kit, config; fast CI |
| Language | **TypeScript** (strict) | End-to-end type safety across apps and packages |
| Frontend (B2C + B2B portals) | **Next.js 15** (App Router) | SSR/ISR for SEO, RSC, multi-tenant routing |
| Admin / internal | **Next.js** (separate app) | Same stack, isolated deploy surface |
| Backend API | **NestJS** | Modular domains, guards, DI, enterprise patterns |
| API style | **REST** (v1) + **OpenAPI**; GraphQL optional later | Predictable contracts for mobile/partners |
| Database | **PostgreSQL 16** | ACID, JSONB, full-text search, mature ecosystem |
| ORM | **Prisma** | Migrations, type-safe queries, good DX |
| Cache / queues | **Redis** + **BullMQ** | Sessions, rate limits, async jobs |
| Search | **Meilisearch** (MVP) → OpenSearch (scale) | Marketplace & funeral home discovery |
| File storage | **S3-compatible** (AWS S3 / Cloudflare R2) | Documents, images, exports |
| Payments | **Stripe Connect** | Multi-party payouts, EU, marketplace model |
| Auth | **Clerk** or **Auth.js** + custom RBAC | SSO-ready; tenant-scoped roles |
| Email | **Resend** + React Email | Transactional + white-label templates |
| SMS / WhatsApp | **Twilio** (premium module) | Opt-in per tenant |
| i18n | **next-intl** + ICU messages | DE launch → AT, CH, NL, BE, FR, EU |
| Observability | **OpenTelemetry** → Grafana / Datadog | Traces, metrics, logs |
| Error tracking | **Sentry** | Frontend + backend |
| CI/CD | **GitHub Actions** | Lint, test, build, deploy |
| Containers | **Docker** | Local dev + production parity |
| IaC | **Terraform** or **Pulumi** | AWS / Hetzner EU for GDPR |
| CDN / edge | **Cloudflare** | WAF, custom domains, SSL for white-label |

---

## Monorepo Structure

```text
memora-platform/
├── apps/
│   ├── web-public/          # B2C: discovery, booking, marketplace checkout
│   ├── web-tenant/          # White-label tenant sites (dynamic branding)
│   ├── web-admin/           # Platform super-admin
│   ├── web-partner/         # B2B: funeral homes, cemeteries, suppliers
│   └── api/                 # NestJS REST API
├── packages/
│   ├── database/            # Prisma schema, migrations, seed
│   ├── shared/              # Types, constants, validators (Zod)
│   ├── ui/                  # Design system (shadcn/ui + Tailwind)
│   ├── email/               # React Email templates
│   ├── config/              # ESLint, TS, Tailwind presets
│   └── i18n/                # Shared translation keys
├── docs/
│   ├── prd/                 # Product Requirements Document
│   └── tech-stack.md        # This file
├── infra/                   # Terraform, Docker Compose
├── turbo.json
├── pnpm-workspace.yaml
└── package.json
```

---

## Multi-Tenancy Model

**Recommended:** shared database, shared schema, **row-level tenant isolation**.

| Approach | Use in Memora |
|----------|---------------|
| Row-level (`tenant_id` on every business table) | Default — cost-efficient, simpler ops |
| Schema-per-tenant | Only for enterprise / regulatory isolation |
| DB-per-tenant | Avoid unless legally required |

**Implementation:**

- `tenants` table: slug, domain, branding JSON, plan, locale, timezone
- Middleware resolves tenant from: custom domain → subdomain → path prefix
- Prisma middleware / NestJS guards enforce `tenant_id` on every query
- PostgreSQL **RLS** (Row Level Security) as defense-in-depth
- Platform admin bypasses RLS via service role (audited)

**White-label routing:**

```text
klinik-mueller.de          → tenant resolved by custom domain
{slug}.memora.app          → default subdomain
memora.app/f/{slug}        → fallback path-based (dev/staging)
```

---

## Domain Modules (NestJS)

Each module maps to a bounded context in the PRD:

| Module | Responsibility |
|--------|----------------|
| `tenants` | Onboarding, branding, domains, plans |
| `auth` | Users, roles, permissions, SSO hooks |
| `organizations` | Funeral homes, cemeteries, suppliers (org types) |
| `booking` | Appointments, availability, calendars, resources |
| `cemetery` | Plots, ceremonies, availability, requests |
| `crm` | Contacts, leads, pipelines, communications |
| `marketplace` | Catalogs, SKUs, inventory, orders |
| `payments` | Stripe Connect, invoices, refunds, payouts |
| `documents` | Uploads, templates, e-sign hooks |
| `notifications` | Email, SMS, in-app, webhooks |
| `analytics` | Events, dashboards, exports |
| `admin` | Platform ops, feature flags, audit log |

**Cross-cutting:** `@memora/shared` (Zod DTOs), event bus (in-process → Redis pub/sub → optional Kafka later).

---

## Frontend Architecture

### Apps split by audience

| App | Users | Key concerns |
|-----|-------|--------------|
| `web-public` | End customers (B2C) | SEO, comparison, booking funnel |
| `web-tenant` | Branded tenant experience | Dynamic theme, tenant config from API |
| `web-partner` | Business users (B2B) | CRM, calendar, orders, reports |
| `web-admin` | Memora operators | Tenants, billing, support, feature flags |

### Shared patterns

- **TanStack Query** — server state, cache invalidation
- **Zustand** — lightweight client UI state
- **React Hook Form + Zod** — forms aligned with API DTOs
- **Tailwind CSS v4 + shadcn/ui** — consistent design system
- **Tenant theming** — CSS variables injected from tenant `branding` config

### Rendering strategy

| Surface | Strategy |
|---------|----------|
| Marketing / discovery pages | SSG + ISR |
| Tenant branded pages | SSR with tenant context |
| Partner dashboards | CSR + SSR shell (auth) |
| Document-heavy flows | SSR |

---

## Data Layer

### Primary store: PostgreSQL

Core entity groups (high level — detailed in PRD § Database):

- **Platform:** tenants, users, roles, permissions, audit_logs
- **Organizations:** organizations, locations, staff, org_relationships
- **Booking:** services, resources, availability_rules, appointments
- **Cemetery:** sections, plots, plot_status, ceremony_slots
- **CRM:** contacts, deals, activities, notes
- **Marketplace:** products, variants, suppliers, orders, order_items
- **Payments:** payment_intents, invoices, payouts, subscriptions
- **Documents:** files, document_types, signatures

### Conventions

- UUID primary keys
- `created_at`, `updated_at`, `deleted_at` (soft delete where needed)
- `tenant_id` NOT NULL on tenant-scoped tables
- JSONB for flexible metadata (branding, custom fields)
- Event sourcing **not** required at MVP — append-only `domain_events` table for audit/analytics

### Migrations

- Prisma Migrate in CI
- Seed scripts per environment (demo tenants, DE locale data)

---

## Integrations

| Integration | Provider | Phase |
|-------------|----------|-------|
| Payments | Stripe Connect | MVP |
| Email | Resend | MVP |
| Calendar sync | Google / Microsoft (OAuth) | Phase 2 |
| E-sign | DocuSign or EU alternative | Phase 2 |
| SMS / WhatsApp | Twilio | Premium |
| Maps / geocoding | Mapbox or Google Maps | Phase 2 |
| AI assistant | OpenAI / Anthropic via abstraction | Premium |
| Accounting export | DATEV (DE) | Phase 3 |

All integrations behind **adapter interfaces** in `packages/shared` — swap providers without domain changes.

---

## Security & Compliance (EU / DE launch)

| Area | Approach |
|------|----------|
| GDPR | Data residency EU, DPA with subprocessors, export/delete APIs |
| Auth | MFA for partner/admin; session rotation |
| Encryption | TLS everywhere; AES-256 at rest (DB, S3) |
| Audit | Immutable audit log for admin and payment actions |
| PCI | Stripe handles card data — no PAN storage |
| RBAC | Platform → Tenant → Organization → Location scopes |
| Rate limiting | Redis + Cloudflare |
| Secrets | AWS Secrets Manager / Doppler |

---

## Dev Environment

```yaml
# docker-compose.yml (local)
services:
  postgres:   # 5432
  redis:      # 6379
  meilisearch:# 7700
  mailpit:    # 8025 (email dev)
  minio:      # 9000 (S3 local)
```

**Commands (target):**

```bash
pnpm install
pnpm docker:up
pnpm db:migrate
pnpm db:seed
pnpm dev          # all apps via Turborepo
```

---

## Testing Strategy

| Level | Tool |
|-------|------|
| Unit | Vitest |
| API integration | Vitest + Supertest + testcontainers (Postgres) |
| E2E | Playwright (critical flows: booking, checkout, tenant branding) |
| Contract | OpenAPI snapshot tests |
| Load | k6 (booking peaks, payment webhooks) |

---

## Deployment (Production Target)

| Component | Hosting |
|-----------|---------|
| Next.js apps | Vercel **or** AWS ECS/Fargate (if strict EU-only) |
| NestJS API | AWS ECS / Railway / Fly.io (EU region) |
| PostgreSQL | AWS RDS / Supabase / Neon (EU) |
| Redis | ElastiCache / Upstash |
| Files | Cloudflare R2 or S3 eu-central-1 |
| DNS / SSL | Cloudflare (custom domains per tenant) |

**Environments:** `local` → `staging` → `production`

**Branch strategy:** trunk-based; feature flags for incomplete modules.

---

## MVP Scope (Technical)

Phase 1 — prove multi-tenant booking + payments in DE:

1. Tenant onboarding + white-label site (subdomain)
2. Organization profile + service catalog
3. Appointment booking + calendar
4. Stripe Connect checkout (single-party first, marketplace later)
5. Partner dashboard (basic CRM: contacts + appointments)
6. Platform admin (tenant list, suspend, impersonate)
7. i18n: German (primary), English (secondary)

**Explicitly out of MVP:** cemetery plot management, full marketplace, AI, WhatsApp, DATEV.

---

## Technology Decision Log

| Decision | Alternatives considered | Rationale |
|----------|-------------------------|-----------|
| Turborepo + pnpm | Nx, yarn workspaces | Simpler config; strong Next.js ecosystem |
| NestJS over tRPC-only | Fastify raw, tRPC in Next | Clear module boundaries for large domain |
| Prisma over Drizzle | TypeORM, Drizzle | Team velocity; migration tooling |
| Clerk over custom auth | Auth.js, Keycloak | Faster MVP; migrate if vendor lock-in hurts |
| Meilisearch over ES | PostgreSQL FTS only | Better DX for MVP search; upgrade path clear |
| Stripe Connect | Adyen, Mollie | Best marketplace + Connect model docs |

---

## Related Documents

- [PRD Outline](./prd/README.md) — full product specification structure
- [PRD § Architecture](./prd/09-architecture.md) — detailed system design (TBD)
- [PRD § Database](./prd/07-database.md) — entity model (TBD)

---

*Version: 0.1 — 2026-07-05*
