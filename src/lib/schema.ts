// lib/schema.ts - builds single @graph JSON-LD schema matching Section 7 exactly
import { BUSINESS, SITE_URL } from "./site";
import { FAQ } from "./faq";

export function homeSchema() {
  const orgId = `${SITE_URL}/#organization`;
  const siteId = `${SITE_URL}/#website`;
  const appId = `${SITE_URL}/#software`;

  const plan = (name: string, price: string, description: string) => ({
    "@type": "Offer",
    name,
    description,
    url: `${SITE_URL}/pricing`,
    price,
    priceCurrency: "USD",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      price,
      priceCurrency: "USD",
      unitText: "month",
      referenceQuantity: {
        "@type": "QuantitativeValue",
        value: 1,
        unitCode: "MON",
      },
    },
  });

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": orgId,
        name: BUSINESS.name,
        url: `${SITE_URL}/`,
        logo: {
          "@type": "ImageObject",
          url: `${SITE_URL}/images/logo.png`,
          width: 892,
          height: 239,
        },
        email: BUSINESS.email,
        telephone: BUSINESS.phone,
        address: {
          "@type": "PostalAddress",
          streetAddress: BUSINESS.address.streetAddress,
          addressLocality: BUSINESS.address.addressLocality,
          addressRegion: BUSINESS.address.addressRegion,
          postalCode: BUSINESS.address.postalCode,
          addressCountry: BUSINESS.address.addressCountry,
        },
        contactPoint: [
          {
            "@type": "ContactPoint",
            contactType: "customer support",
            telephone: BUSINESS.phone,
            email: BUSINESS.email,
            areaServed: "US",
            availableLanguage: "English",
          },
        ],
      },
      {
        "@type": "WebSite",
        "@id": siteId,
        name: BUSINESS.name,
        url: `${SITE_URL}/`,
        alternateName: "EquipmentRentalSoftware.io",
        inLanguage: "en-US",
        publisher: {
          "@id": orgId,
        },
      },
      {
        "@type": "SoftwareApplication",
        "@id": appId,
        name: BUSINESS.name,
        url: `${SITE_URL}/`,
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        description:
          "Equipment rental software to manage inventory, availability, bookings, payments, invoicing, and maintenance for equipment rental businesses.",
        publisher: {
          "@id": orgId,
        },
        featureList: [
          "Equipment inventory and asset lifecycle tracking",
          "Real-time availability with double-booking prevention",
          "Online booking (Professional and Business plans)",
          "Payments, invoicing, and security deposits",
          "Fleet maintenance and mobile inspections",
        ],
        offers: [
          plan(
            "Starter",
            "39.00",
            "For small rental businesses: inventory, availability, bookings, customer management, rental orders, basic reporting, 2 users, 1 location, email support."
          ),
          plan(
            "Professional",
            "79.00",
            "Adds online booking, payments and invoicing, equipment maintenance, advanced reporting, 5 users, integrations, and priority support with chat."
          ),
          plan(
            "Business",
            "149.00",
            "Everything in Professional, plus unlimited users, multiple locations, and priority support."
          ),
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}/#faq`,
        mainEntity: FAQ.map(({ q, a }) => ({
          "@type": "Question",
          name: q,
          acceptedAnswer: {
            "@type": "Answer",
            text: a,
          },
        })),
      },
    ],
  };
}
