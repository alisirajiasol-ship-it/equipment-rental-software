import { ImageResponse } from "next/og";
import { siteConfig } from "@/data/siteData";

export const runtime = "nodejs";
export const alt = "Equipment Rental Software | Rent Smarter. Manage Everything.";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#090d16",
          padding: "60px 80px",
          color: "white",
        }}
      >
        {/* Top Header */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "56px",
              height: "56px",
              borderRadius: "16px",
              backgroundColor: "#2563eb",
              color: "white",
              fontSize: "24px",
              fontWeight: 800,
            }}
          >
            ERS
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: "28px", fontWeight: 800, color: "#ffffff", letterSpacing: "-0.5px" }}>
              EquipmentRentalSoftware<span style={{ color: "#3b82f6" }}>.io</span>
            </span>
            <span style={{ fontSize: "16px", color: "#94a3b8", fontWeight: 500 }}>
              {siteConfig.slogan}
            </span>
          </div>
        </div>

        {/* Center Content */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px", maxWidth: "1000px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              backgroundColor: "rgba(37, 99, 235, 0.15)",
              border: "1px solid rgba(59, 130, 246, 0.4)",
              padding: "6px 18px",
              borderRadius: "999px",
              alignSelf: "flex-start",
            }}
          >
            <span style={{ fontSize: "14px", fontWeight: 700, color: "#60a5fa", letterSpacing: "1px", textTransform: "uppercase" }}>
              Commercial Fleet & Rental Management Platform
            </span>
          </div>
          <div
            style={{
              fontSize: "50px",
              fontWeight: 900,
              lineHeight: 1.15,
              color: "#ffffff",
              letterSpacing: "-1px",
            }}
          >
            Equipment Rental Software to Manage Your Entire Rental Business
          </div>
          <div
            style={{
              fontSize: "20px",
              lineHeight: 1.5,
              color: "#cbd5e1",
            }}
          >
            Manage inventory, bookings, contracts, payments, maintenance, and customers from one centralized platform.
          </div>
        </div>

        {/* Bottom Feature Badges & Details */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid #1e293b",
            paddingTop: "24px",
          }}
        >
          <div style={{ display: "flex", gap: "28px", fontSize: "15px", color: "#94a3b8", fontWeight: 600 }}>
            <span>Live Availability</span>
            <span>Online Bookings</span>
            <span>Automated Invoicing</span>
            <span>Fleet Maintenance</span>
          </div>
          <div style={{ display: "flex", fontSize: "15px", color: "#60a5fa", fontWeight: 700 }}>
            {siteConfig.contact.city}, {siteConfig.contact.stateCode} &bull; {siteConfig.contact.phone}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
