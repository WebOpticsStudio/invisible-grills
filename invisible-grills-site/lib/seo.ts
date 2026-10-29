import type { Metadata } from "next";
import { site } from "./site";

export function pageMeta(title: string, description: string, path: string): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title, description, url: path, type: "website", siteName: site.name, locale: "en_IN" },
  };
}

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: site.name,
    url: site.url,
    telephone: site.phone,
    email: site.email,
    address: { "@type": "PostalAddress", streetAddress: site.address, addressCountry: "IN" },
    areaServed: site.serviceAreas.map((name) => ({ "@type": "City", name })),
    openingHours: site.hours,
    description: `${site.tagline}. Site inspection, measurement and written quotations.`,
  };
}

/** Serialise JSON-LD safely for inline <script>. */
export const jsonLdString = (data: unknown) => JSON.stringify(data).replace(/</g, "\\u003c");
