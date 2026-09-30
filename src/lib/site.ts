// lib/site.ts - single source of truth for URLs and business facts
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://equipment-rental-software.vercel.app"
).replace(/\/$/, "");

// Set NEXT_PUBLIC_ALLOW_INDEXING="true" ONLY in the production environment of the final domain.
export const ALLOW_INDEXING = process.env.NEXT_PUBLIC_ALLOW_INDEXING === "true";

export const BUSINESS = {
  name: "Equipment Rental Software",
  slogan: "Rent Smarter. Manage Everything.",
  phone: "+1-708-562-1403",
  phoneDisplay: "(708) 562-1403",
  email: "hello@equipmentrentalsoftware.io",
  address: {
    streetAddress: "162 E North Ave",
    addressLocality: "Northlake",
    addressRegion: "IL",
    postalCode: "60164",
    addressCountry: "US",
  },
  logoPath: "/images/logo.png",
  sameAs: [] as string[],
} as const;
