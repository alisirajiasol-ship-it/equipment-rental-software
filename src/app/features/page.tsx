import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/siteData";
import InventoryDashboardMockup from "@/components/features/InventoryDashboardMockup";
import BookingCalendarMockup from "@/components/features/BookingCalendarMockup";
import BillingInvoicingMockup from "@/components/features/BillingInvoicingMockup";
import MaintenanceInspectionMockup from "@/components/features/MaintenanceInspectionMockup";
import {
  Boxes,
  CalendarCheck,
  CheckCircle2,
  CreditCard,
  Wrench,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  QrCode,
  Gauge,
  Clock,
  FileText
} from "lucide-react";

export const metadata: Metadata = {
  title: "Features & Capabilities",
  description:
    "Explore full features of EquipmentRentalSoftware.io: asset tracking, live availability, online reservations, automated invoicing, maintenance logs, and multi-depot fleet dispatch.",
  alternates: {
    canonical: "/features",
  },
};

export default function FeaturesPage() {
  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteConfig.baseUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Features",
        item: `${siteConfig.baseUrl}/features`,
      },
    ],
  };

  return (
    <div className="flex flex-col py-12 sm:py-20 bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }}
      />

      {/* Page Header */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center mb-16 sm:mb-24">
        <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-bold text-blue-700 mb-6 shadow-2xs">
          <Sparkles className="h-3.5 w-3.5 text-blue-600" />
          <span>Purpose-Built Equipment Rental Platform</span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15] max-w-4xl mx-auto">
          Every Feature Engineered to Save Time, Prevent Mistakes &amp; Maximize Fleet ROI
        </h1>
        <p className="mt-5 max-w-2xl mx-auto text-base sm:text-lg text-slate-600 leading-relaxed">
          Equipment rental companies manage high-value assets with complex scheduling, strict safety regulations, and rapid jobsite turnarounds. Here is how our unified software replaces disjointed spreadsheets with one live system.
        </p>

        {/* Hero CTA Button Bar */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/signup"
            className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-8 py-3.5 text-sm font-bold text-white shadow-md hover:bg-blue-700 hover:shadow-lg transition-all duration-200"
          >
            <span>Start 14-Day Free Trial</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <Link
            href="/contact-us"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-8 py-3.5 text-sm font-bold text-slate-800 shadow-2xs hover:bg-slate-50 transition-all duration-200"
          >
            <span>Schedule Guided Demo</span>
          </Link>
        </div>
      </div>

      {/* Alternating Feature Deep-Dive Sections */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-28 sm:space-y-36">

        {/* ========================================================
            FEATURE 1: Equipment Inventory & Asset Lifecycle
            Layout: Text Left -> Visual Right
           ======================================================== */}
        <section id="inventory" className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left: Text Content (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-extrabold tracking-widest text-blue-600 uppercase block mb-2">
                1. Equipment Inventory &amp; Asset Lifecycle
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
                Complete Inventory Control from Yard Acquisition to Resale
              </h2>
            </div>

            <p className="text-base leading-relaxed text-slate-600">
              Maintain a live digital register of every machine, attachment, and tool. Track manufacturer specifications, serial VINs, real-time depot yards, operational status, and automated financial depreciation from one centralized dashboard.
            </p>

            <div className="space-y-3 pt-2 text-sm text-slate-700">
              <div className="flex items-start gap-3">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-50 text-blue-600 shrink-0 mt-0.5">
                  <CheckCircle2 className="h-4 w-4" />
                </div>
                <span>
                  <strong className="text-slate-900">Live Status Tracking:</strong> Real-time visibility across Rented Out, Ready in Yard, and In Inspection.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-50 text-blue-600 shrink-0 mt-0.5">
                  <CheckCircle2 className="h-4 w-4" />
                </div>
                <span>
                  <strong className="text-slate-900">Serial &amp; VIN Telematics:</strong> Complete equipment audit trails with hour meters and depot geofencing.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-50 text-blue-600 shrink-0 mt-0.5">
                  <CheckCircle2 className="h-4 w-4" />
                </div>
                <span>
                  <strong className="text-slate-900">Multi-Yard Depot Filtering:</strong> Instantly filter by branch location, machinery category, or model tag.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-50 text-blue-600 shrink-0 mt-0.5">
                  <CheckCircle2 className="h-4 w-4" />
                </div>
                <span>
                  <strong className="text-slate-900">Utilization Analytics:</strong> Track rental ROI and machine utilization percentages automatically.
                </span>
              </div>
            </div>

            <div className="pt-3">
              <Link
                href="/signup"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-bold text-white shadow-sm hover:bg-blue-700 transition-colors"
              >
                <span>Start Tracking Fleet Assets</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Right: Realistic SaaS Visual Mockup (7 cols) */}
          <div className="lg:col-span-7">
            <InventoryDashboardMockup />
          </div>
        </section>


        {/* ========================================================
            FEATURE 2: Real-Time Availability & Online Booking
            Layout: Visual Left -> Text Right (Reversed)
           ======================================================== */}
        <section id="booking" className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left: Realistic SaaS Visual Mockup (7 cols) */}
          <div className="order-2 lg:order-1 lg:col-span-7">
            <BookingCalendarMockup />
          </div>

          {/* Right: Text Content (5 cols) */}
          <div className="order-1 lg:order-2 lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-extrabold tracking-widest text-indigo-600 uppercase block mb-2">
                2. Real-Time Availability &amp; Online Booking
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
                Visual Gantt Dispatch Calendar with Zero-Collision Protection
              </h2>
            </div>

            <p className="text-base leading-relaxed text-slate-600">
              Stop double booking expensive machinery. Our interactive scheduling calendar uses automated conflict-locking rules and customizable turnaround buffers so equipment is thoroughly inspected, cleaned, and refueled before its next customer dispatch.
            </p>

            <div className="space-y-3 pt-2 text-sm text-slate-700">
              <div className="flex items-start gap-3">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-indigo-50 text-indigo-600 shrink-0 mt-0.5">
                  <CheckCircle2 className="h-4 w-4" />
                </div>
                <span>
                  <strong className="text-slate-900">Zero-Collision Logic:</strong> Instant booking locking prevents overlaps across days, weeks, or months.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-indigo-50 text-indigo-600 shrink-0 mt-0.5">
                  <CheckCircle2 className="h-4 w-4" />
                </div>
                <span>
                  <strong className="text-slate-900">Turnaround Service Buffers:</strong> Automatic 4-hour prep blocks between rentals for maintenance and fueling.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-indigo-50 text-indigo-600 shrink-0 mt-0.5">
                  <CheckCircle2 className="h-4 w-4" />
                </div>
                <span>
                  <strong className="text-slate-900">24/7 Client Booking Portal:</strong> Commercial contractors check availability and submit reservations anytime.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-indigo-50 text-indigo-600 shrink-0 mt-0.5">
                  <CheckCircle2 className="h-4 w-4" />
                </div>
                <span>
                  <strong className="text-slate-900">Tiered Rental Rates:</strong> Seamless calculation for 4-hour, daily, weekly, and monthly contract durations.
                </span>
              </div>
            </div>

            <div className="pt-3">
              <Link
                href="/signup"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-bold text-white shadow-sm hover:bg-blue-700 transition-colors"
              >
                <span>Launch Online Booking Engine</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>


        {/* ========================================================
            FEATURE 3: Payments, Invoicing & Security Deposits
            Layout: Text Left -> Visual Right
           ======================================================== */}
        <section id="payments" className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left: Text Content (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-extrabold tracking-widest text-emerald-600 uppercase block mb-2">
                3. Payments, Invoicing &amp; Security Deposits
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
                Automated Invoicing, Security Pre-Auth Holds &amp; Quick Pay
              </h2>
            </div>

            <p className="text-base leading-relaxed text-slate-600">
              Protect your business cash flow. Automatically authorize credit card security deposits before machinery rolls off your yard, bill metered overtime engine hours upon return, and sync two-way transactions directly into QuickBooks or Xero.
            </p>

            <div className="space-y-3 pt-2 text-sm text-slate-700">
              <div className="flex items-start gap-3">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 shrink-0 mt-0.5">
                  <CheckCircle2 className="h-4 w-4" />
                </div>
                <span>
                  <strong className="text-slate-900">Security Deposit Pre-Auth:</strong> Place automated temporary holds on credit cards to safeguard equipment.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 shrink-0 mt-0.5">
                  <CheckCircle2 className="h-4 w-4" />
                </div>
                <span>
                  <strong className="text-slate-900">Metered Overage Billing:</strong> Bill excess runtime hours and refueling charges automatically upon check-in.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 shrink-0 mt-0.5">
                  <CheckCircle2 className="h-4 w-4" />
                </div>
                <span>
                  <strong className="text-slate-900">Stripe &amp; QuickBooks Integration:</strong> 2-way invoice sync removes double entry and speeds reconciliation.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 shrink-0 mt-0.5">
                  <CheckCircle2 className="h-4 w-4" />
                </div>
                <span>
                  <strong className="text-slate-900">Flexible B2B Payment Terms:</strong> Accept credit cards, ACH, bank transfers, or structured Net 30/60 invoices.
                </span>
              </div>
            </div>

            <div className="pt-3">
              <Link
                href="/signup"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-bold text-white shadow-sm hover:bg-blue-700 transition-colors"
              >
                <span>Automate Deposits &amp; Invoicing</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Right: Realistic SaaS Visual Mockup (7 cols) */}
          <div className="lg:col-span-7">
            <BillingInvoicingMockup />
          </div>
        </section>


        {/* ========================================================
            FEATURE 4: Fleet Maintenance & Mobile Inspections
            Layout: Visual Left -> Text Right (Reversed)
           ======================================================== */}
        <section id="maintenance" className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left: Realistic SaaS Visual Mockup (7 cols) */}
          <div className="order-2 lg:order-1 lg:col-span-7">
            <MaintenanceInspectionMockup />
          </div>

          {/* Right: Text Content (5 cols) */}
          <div className="order-1 lg:order-2 lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-extrabold tracking-widest text-amber-600 uppercase block mb-2">
                4. Fleet Maintenance &amp; Mobile Inspections
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
                Telematics Maintenance Alerts &amp; Smartphone Walkarounds
              </h2>
            </div>

            <p className="text-base leading-relaxed text-slate-600">
              Prevent catastrophic equipment breakdowns before they eat into rental margins. Automatically trigger service tickets at 250h, 500h, or 1,000h intervals, and empower yard technicians to perform timestamped photo check-in inspections on mobile.
            </p>

            <div className="space-y-3 pt-2 text-sm text-slate-700">
              <div className="flex items-start gap-3">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-amber-50 text-amber-600 shrink-0 mt-0.5">
                  <CheckCircle2 className="h-4 w-4" />
                </div>
                <span>
                  <strong className="text-slate-900">Engine Hour Telematics:</strong> Automated preventive alerts when machinery approaches scheduled service thresholds.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-amber-50 text-amber-600 shrink-0 mt-0.5">
                  <CheckCircle2 className="h-4 w-4" />
                </div>
                <span>
                  <strong className="text-slate-900">Mobile Photo Walkarounds:</strong> Yard staff capture pre-delivery and return condition photos to verify damage.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-amber-50 text-amber-600 shrink-0 mt-0.5">
                  <CheckCircle2 className="h-4 w-4" />
                </div>
                <span>
                  <strong className="text-slate-900">OSHA &amp; ANSI Compliance:</strong> Digital checklists document tire pressure, fluid levels, and safety beacons.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-amber-50 text-amber-600 shrink-0 mt-0.5">
                  <CheckCircle2 className="h-4 w-4" />
                </div>
                <span>
                  <strong className="text-slate-900">Overdue Safety Lockout:</strong> Uncertified or overdue machinery is automatically blocked from customer hire.
                </span>
              </div>
            </div>

            <div className="pt-3">
              <Link
                href="/signup"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-bold text-white shadow-sm hover:bg-blue-700 transition-colors"
              >
                <span>Automate Fleet Maintenance</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

      </div>

      {/* Bottom Conversion CTA Strip */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-28 sm:mt-36 text-center">
        <div className="rounded-3xl bg-slate-900 text-white p-10 sm:p-16 shadow-2xl relative overflow-hidden">
          <div className="relative z-10 max-w-3xl mx-auto">
            <span className="text-xs font-bold text-blue-400 uppercase tracking-widest block mb-3">
              Start Free • No Credit Card Required
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              Ready to Upgrade Your Entire Equipment Rental Operation?
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
              Join commercial equipment yards nationwide managing inventory, reservations, customer payments, and fleet maintenance from one unified platform.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/signup"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-8 py-4 text-sm font-bold text-white shadow-md hover:bg-blue-700 hover:shadow-lg transition-all duration-200"
              >
                <span>Start 14-Day Free Trial</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href="/contact-us"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-800 px-8 py-4 text-sm font-semibold text-white hover:bg-slate-700 transition-all duration-200"
              >
                <span>Schedule Live Demonstration</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
