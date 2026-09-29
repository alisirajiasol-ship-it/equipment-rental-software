import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
      {
        source: "/images/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/favicon(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/Features",
        destination: "/features",
        permanent: true,
      },
      {
        source: "/Pricing",
        destination: "/pricing",
        permanent: true,
      },
      {
        source: "/Contact-Us",
        destination: "/contact-us",
        permanent: true,
      },
      {
        source: "/About-Us",
        destination: "/about-us",
        permanent: true,
      },
      {
        source: "/Login",
        destination: "/login",
        permanent: true,
      },
      {
        source: "/Signup",
        destination: "/signup",
        permanent: true,
      },
      {
        source: "/blog",
        destination: "/features",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
