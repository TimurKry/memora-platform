# 07 — Data Model & Database

## Design Principles

1. **Shared DB, shared schema**, row-level `tenant_id` isolation
2. **UUID** primary keys everywhere
3. **Soft delete** where business requires history (`deleted_at`)
4. **Audit** sensitive mutations via `audit_logs` + optional `domain_events`
5. **JSONB** for extensibility (custom fields, branding) — not for relational data
6. **PostgreSQL RLS** as defense-in-depth (see tech-stack.md)

## Core Entity Groups

### Platform

```text
tenants
  id, slug, name, status, plan_id, branding (jsonb), settings (jsonb)
  default_locale, timezone, created_at, ...

users
  id, email, auth_provider_id, ...

memberships
  user_id, tenant_id, organization_id?, role, scope

audit_logs
  id, actor_id, action, entity_type, entity_id, payload, ip, created_at
```

### Organization

```text
organizations
  id, tenant_id, type (enum: funeral_home | cemetery | supplier | ...)
  name, legal_name, tax_id, address, ...

locations
  id, organization_id, name, address, geo, ...

staff_profiles
  id, user_id, organization_id, title, ...
```

### Booking

```text
services
  id, tenant_id, organization_id, name, duration_min, price_cents, ...

availability_rules
  id, resource_id, day_of_week, start_time, end_time, ...

availability_exceptions
  id, resource_id, date, is_available, ...

appointments
  id, tenant_id, organization_id, service_id, contact_id
  starts_at, ends_at, status, notes, payment_status, ...
```

### CRM

```text
contacts
  id, tenant_id, email, phone, name, source, ...

activities
  id, contact_id, type, payload (jsonb), created_by, ...
```

### Payments

```text
payment_intents
  id, tenant_id, stripe_id, amount_cents, currency, status, ...

invoices
  id, appointment_id?, order_id?, total_cents, status, ...
```

### Marketplace (Phase 2)

```text
products, product_variants, inventory, orders, order_items, ...
```

### Cemetery (Phase 2)

```text
cemetery_sections, plots, plot_status_history, ceremony_slots, ...
```

## Tenant Isolation Rules

- Every query in tenant context MUST filter by `tenant_id`
- Cross-tenant joins forbidden except platform admin service role
- Integration tests: "tenant leakage" suite mandatory in CI

## Indexing Strategy (MVP)

| Table | Index |
|-------|-------|
| appointments | `(tenant_id, organization_id, starts_at)` |
| contacts | `(tenant_id, email)` unique where not deleted |
| services | `(tenant_id, organization_id, status)` |

## GDPR

- `data_export_requests`, `deletion_requests` tables
- Retention policies per entity type (configurable per tenant plan)
- PII minimization: only collect fields required for service

---

*Expand: full ER diagrams (dbdiagram.io), Prisma schema, migration policy*
