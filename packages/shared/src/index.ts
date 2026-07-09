export type OrganizationType =
  | "funeral_home"
  | "cemetery"
  | "supplier"
  | "transport"
  | "crematorium";

export type CaseStage =
  | "inquiry"
  | "consultation"
  | "planning"
  | "documentation"
  | "coordination"
  | "ceremony"
  | "billing"
  | "closed";

export interface TenantBranding {
  primaryColor: string;
  secondaryColor: string;
  logoText: string;
  tagline: string;
}

export interface FuneralHomeListing {
  id: string;
  slug: string;
  name: string;
  city: string;
  region: string;
  rating: number;
  reviewCount: number;
  description: string;
  services: string[];
  priceFrom: number;
  tenantUrl: string;
  branding: TenantBranding;
}

export interface Tenant {
  id: string;
  slug: string;
  name: string;
  city: string;
  address: string;
  phone: string;
  email: string;
  branding: TenantBranding;
  services: Service[];
}

export interface Service {
  id: string;
  name: string;
  description: string;
  durationMin: number;
  priceFrom: number;
}

export interface CaseSummary {
  id: string;
  reference: string;
  stage: CaseStage;
  contactName: string;
  createdAt: string;
  nextAppointment?: string;
}

export const CASE_STAGE_LABELS: Record<CaseStage, string> = {
  inquiry: "Erstanfrage",
  consultation: "Beratung",
  planning: "Planung",
  documentation: "Dokumente",
  coordination: "Koordination",
  ceremony: "Trauerfeier",
  billing: "Abrechnung",
  closed: "Abgeschlossen",
};

export const DEMO_CITIES = ["Berlin", "München", "Hamburg", "Köln", "Frankfurt"];

export const DEMO_LISTINGS: FuneralHomeListing[] = [
  {
    id: "1",
    slug: "bestattungen-mueller",
    name: "Bestattungen Müller",
    city: "Berlin",
    region: "Berlin",
    rating: 4.8,
    reviewCount: 127,
    description:
      "Einfühlsame Begleitung in schweren Zeiten. Familienunternehmen seit 1952 mit persönlicher Beratung rund um die Uhr.",
    services: ["Erdbestattung", "Feuerbestattung", "Trauerredner", "Blumenschmuck"],
    priceFrom: 2890,
    tenantUrl: "/demo",
    branding: {
      primaryColor: "#1e3a5f",
      secondaryColor: "#c9a962",
      logoText: "Müller",
      tagline: "Würdevoll. Menschlich. Nah.",
    },
  },
  {
    id: "2",
    slug: "friedhofsgarten-schmidt",
    name: "Friedhofsgarten Schmidt",
    city: "Berlin",
    region: "Berlin",
    rating: 4.6,
    reviewCount: 89,
    description:
      "Moderne Bestattungskultur trifft traditionelle Werte. Transparente Preise und digitale Begleitung.",
    services: ["Feuerbestattung", "Seebestattung", "Anonyme Bestattung", "Vorsorge"],
    priceFrom: 1950,
    tenantUrl: "/demo",
    branding: {
      primaryColor: "#2d4a3e",
      secondaryColor: "#8fbc8f",
      logoText: "Schmidt",
      tagline: "Abschied in Würde gestalten",
    },
  },
  {
    id: "3",
    slug: "memora-bestattungen-berlin",
    name: "Memora Bestattungen Berlin",
    city: "Berlin",
    region: "Berlin",
    rating: 4.9,
    reviewCount: 203,
    description:
      "Vollständig digitale Bestattungsplanung — von der ersten Beratung bis zur Trauerfeier. Online buchbar.",
    services: ["Komplettbestattung", "Beratung", "Dokumente", "Online-Zahlung"],
    priceFrom: 3200,
    tenantUrl: "/demo",
    branding: {
      primaryColor: "#3d2b4a",
      secondaryColor: "#b8860b",
      logoText: "Memora",
      tagline: "Der moderne Weg des Abschieds",
    },
  },
];

export const DEMO_TENANT: Tenant = {
  id: "tenant-1",
  slug: "bestattungen-mueller",
  name: "Bestattungen Müller",
  city: "Berlin",
  address: "Friedrichstraße 112, 10117 Berlin",
  phone: "+49 30 12345678",
  email: "info@bestattungen-mueller.de",
  branding: DEMO_LISTINGS[0].branding,
  services: [
    {
      id: "s1",
      name: "Erstberatung",
      description:
        "Persönliches Gespräch — vor Ort oder per Video. Wir besprechen Ihre Wünsche und Möglichkeiten.",
      durationMin: 60,
      priceFrom: 0,
    },
    {
      id: "s2",
      name: "Erdbestattung",
      description:
        "Klassische Erdbestattung inkl. Organisation aller Formalitäten und Trauerfeier.",
      durationMin: 120,
      priceFrom: 4500,
    },
    {
      id: "s3",
      name: "Feuerbestattung",
      description: "Krematoriumsorganisation, Urne, Trauerfeier nach Ihren Wünschen.",
      durationMin: 90,
      priceFrom: 2890,
    },
    {
      id: "s4",
      name: "Trauerredner",
      description:
        "Professionelle Trauerrede, individuell auf den Verstorbenen zugeschnitten.",
      durationMin: 45,
      priceFrom: 350,
    },
  ],
};

export function formatPrice(cents: number): string {
  return new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(cents);
}

export * from "./map";
