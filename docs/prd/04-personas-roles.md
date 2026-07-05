# 04 — Personas & Roles

## B2C Personas

### Primary: Bereaved Family Member
- **Context:** Recent loss; high stress, low patience for bureaucracy
- **Goals:** Arrange funeral quickly, understand costs, upload documents, pay securely
- **Pain:** Multiple phone calls, unclear pricing, paper forms

### Secondary: Pre-Planning Customer
- **Context:** Planning ahead for self or family
- **Goals:** Compare options, reserve services, store preferences
- **Pain:** Lack of transparent comparison tools

## B2B Personas

| Persona | Organization type | Primary tasks |
|---------|-------------------|---------------|
| Funeral Director | Funeral home | Leads, quotes, services, staff, invoicing |
| Cemetery Administrator | Cemetery | Plots, ceremonies, availability, requests |
| Supplier Manager | Coffin/florist/monument | Catalog, inventory, orders |
| Driver / Logistics | Transport company | Schedule, routes, confirmations |
| Office Manager | Any B2B org | Calendar, documents, customer comms |

## Platform Personas

| Persona | Scope |
|---------|-------|
| Super Admin | Full platform |
| Support Agent | Tenant assist, impersonation (audited) |
| Sales / Onboarding | Tenant provisioning |

## RBAC Model

**Scopes (hierarchical):**

```text
platform → tenant → organization → location
```

**Core roles (MVP):**

| Role | Scope | Key permissions |
|------|-------|-----------------|
| `platform:admin` | Platform | All tenants, billing, flags |
| `platform:support` | Platform | Read + impersonate (limited) |
| `tenant:owner` | Tenant | Billing, branding, users |
| `tenant:admin` | Tenant | Settings, all orgs in tenant |
| `org:manager` | Organization | CRM, booking, staff |
| `org:staff` | Organization | Own calendar, assigned contacts |
| `customer` | Self | Own bookings, documents, payments |

**Permission examples:** `booking:read`, `booking:write`, `crm:export`, `payments:refund`, `marketplace:manage_catalog`

## RBAC Matrix (Template)

| Permission | platform:admin | tenant:owner | org:manager | org:staff | customer |
|------------|------------------|--------------|-------------|-----------|----------|
| tenant.settings | ✓ | ✓ | — | — | — |
| booking.create | ✓ | ✓ | ✓ | ✓ | ✓ (own) |
| payments.refund | ✓ | ✓ | ✓ | — | — |
| crm.export | ✓ | ✓ | ✓ | — | — |

---

*Expand: full permission enum, custom roles (Enterprise), invitation flows*
