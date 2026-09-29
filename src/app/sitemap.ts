import { MetadataRoute } from "next";
import { siteConfig } from "@/data/siteData";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModDate = new Date("2026-09-29T12:00:00.000Z");

  const routes = [
    {
      url: siteConfig.baseUrl,
      lastModified: lastModDate,
    },
    {
      url: `${siteConfig.baseUrl}/features`,
      lastModified: lastModDate,
    },
    {
      url: `${siteConfig.baseUrl}/pricing`,
      lastModified: lastModDate,
    },
    {
      url: `${siteConfig.baseUrl}/contact-us`,
      lastModified: lastModDate,
    },
    {
      url: `${siteConfig.baseUrl}/about-us`,
      lastModified: lastModDate,
    },
    {
      url: `${siteConfig.baseUrl}/login`,
      lastModified: lastModDate,
    },
    {
      url: `${siteConfig.baseUrl}/signup`,
      lastModified: lastModDate,
    },
    {
      url: `${siteConfig.baseUrl}/privacy-policy`,
      lastModified: lastModDate,
    },
    {
      url: `${siteConfig.baseUrl}/terms-and-conditions`,
      lastModified: lastModDate,
    },
  ];

  return routes;
}
