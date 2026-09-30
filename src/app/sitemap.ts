// app/sitemap.ts -> /sitemap.xml
import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

// lastModified = date the page CONTENT last changed (update when you edit a page). Never use new Date().
const PAGES: { path: string; lastModified: string }[] = [
  { path: "/", lastModified: "2026-09-29" },
  { path: "/features", lastModified: "2026-09-29" },
  { path: "/pricing", lastModified: "2026-09-29" },
  { path: "/contact-us", lastModified: "2026-09-29" },
  { path: "/about-us", lastModified: "2026-09-29" },
  { path: "/privacy-policy", lastModified: "2026-09-29" },
  { path: "/terms-and-conditions", lastModified: "2026-09-29" },
  // NEVER add /login or /signup: they are noindex (app/login, app/signup layouts + X-Robots-Tag) and must stay out of the sitemap.
];

export default function sitemap(): MetadataRoute.Sitemap {
  return PAGES.map(({ path, lastModified }) => ({
    url: path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`,
    lastModified,
  }));
}
