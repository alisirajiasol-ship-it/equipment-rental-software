// lib/seo.ts - page metadata helper (title, description, canonical, OG, Twitter)
import type { Metadata } from "next";
import { SITE_URL } from "./site";

// Utility pages (/login, /signup) are NEVER indexable - on staging AND on the final domain.
// Deliberately NOT tied to ALLOW_INDEXING (that flag only governs the public marketing pages).
export const NOINDEX_METADATA: Metadata = {
  robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
};

type PageSeo = {
  title: string; // <= 60 chars, primary keyword first
  ogTitle?: string; // optional social title (defaults to title)
  description: string; // <= 155 chars, benefit + CTA
  path: string; // "/" | "/pricing" ...
  image?: { url: string; width: number; height: number; alt: string };
};

const DEFAULT_OG = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "Equipment Rental Software: Rent Smarter. Manage Everything.",
};

export function pageMetadata({
  title,
  ogTitle,
  description,
  path,
  image = DEFAULT_OG,
}: PageSeo): Metadata {
  const social = ogTitle ?? title;
  const url = path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`;
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      siteName: "Equipment Rental Software",
      locale: "en_US",
      url,
      title: social,
      description,
      images: [image],
    },
    twitter: { card: "summary_large_image", title: social, description, images: [image.url] },
  };
}
