import type { NextConfig } from "next";

const PROD_HOST = "equipmentrentalsoftware.io";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
  },
  async redirects() {
    if (process.env.REDIRECT_TO_PRODUCTION_DOMAIN !== "true") return [];
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "equipment-rental-software.vercel.app" }],
        destination: `https://${PROD_HOST}/:path*`,
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: `www.${PROD_HOST}` }],
        destination: `https://${PROD_HOST}/:path*`,
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
      // Belt-and-braces: the vercel.app host is never indexable on staging
      {
        source: "/:path*",
        has: [{ type: "host", value: "equipment-rental-software.vercel.app" }],
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
      // /login and /signup: noindex on EVERY host, including production domain
      {
        source: "/:path(login|signup)",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
      // Long-cache static files in /public/images
      {
        source: "/images/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
      {
        source: "/favicon(.*)",
        headers: [{ key: "Cache-Control", value: "public, max-age=86400" }],
      },
    ];
  },
};

export default nextConfig;
