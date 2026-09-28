import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/siteData";
import {
  Boxes,
  CalendarCheck,
  CheckCircle2,
  Clock,
  CreditCard,
  FileCheck,
  Layers,
  MapPin,
  QrCode,
  Shield,
  Smartphone,
  Truck,
  Users,
  Wrench,
  ArrowRight,
  TrendingUp,
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

      {/* Header */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center mb-16 sm:mb-20">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight max-w-4xl mx-auto">
          Every Feature Engineered to Save Time, Prevent Mistakes, and Maximize Utilization
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-slate-600">
          Equipment rental companies manage high-value assets with complex scheduling, strict safety regulations, and rapid turnaround times. Here is how our purpose-built platform powers your operations.
        </p>

        {/* Hero CTA Button matching SaaS standard */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-8 py-4 text-sm font-bold text-white shadow-md hover:bg-blue-700 hover:shadow-lg transition-all duration-200"
          >
            <span>Start 14-Day Free Trial</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <Link
            href="/contact-us"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-8 py-4 text-sm font-bold text-slate-800 shadow-xs hover:bg-slate-50 transition-all duration-200"
          >
            <span>Schedule Guided Demo</span>
          </Link>
        </div>
      </div>

      {/* Feature Deep Dive Sections */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-24">
        {/* Section 1: Inventory & Asset Tracking */}
        <section id="inventory" className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
              <Boxes className="h-6 w-6" aria-hidden="true" />
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900">
              Complete Equipment Inventory &amp; Asset Lifecycle Tracking
            </h2>
            <p className="text-base leading-relaxed text-slate-600">
              Maintain a live digital register of every piece of equipment, attachment, and accessory. Record manufacturer specifications, purchase dates, acquisition values, depreciation schedules, and real-time depot locations.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-slate-700 pt-2">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
                <span>Barcode &amp; QR mobile scanning for rapid checkout</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
                <span>Serial number and VIN level audit trails</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
                <span>Package and kit bundled equipment rentals</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
                <span>Depreciation and residual value calculation</span>
              </div>
            </div>

            {/* Section 1 CTA */}
            <div className="pt-4">
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-7 py-3.5 text-sm font-bold text-white shadow-sm hover:bg-blue-700 hover:shadow-md transition-all duration-200"
              >
                <span>Start Tracking Fleet Assets</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <span className="text-sm font-bold text-slate-900">Asset Record #TL-0982</span>
                <span className="rounded-full bg-slate-100 px-3 py-0.5 text-xs font-semibold text-slate-700">
                  Tracked
                </span>
              </div>
              <div className="space-y-3 text-xs text-slate-600">
                <div className="flex justify-between py-1 border-b border-slate-50">
                  <span>Category</span>
                  <span className="font-semibold text-slate-900">Mini Excavator (3.5T)</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-50">
                  <span>Serial Number</span>
                  <span className="font-mono text-slate-900">CAT03035VJW882</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-50">
                  <span>Current Renter</span>
                  <span className="font-semibold text-slate-900">Midwest Paving Co.</span>
                </div>
                <div className="flex justify-between py-1">
                  <span>Scheduled Return</span>
                  <span className="font-semibold text-slate-900">Friday, 4:00 PM</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Real-Time Availability & Booking */}
        <section id="booking" className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <span className="text-sm font-bold text-slate-900">Fleet Dispatch Calendar</span>
                <span className="rounded-full bg-emerald-100 px-3 py-0.5 text-xs font-bold text-emerald-800">
                  No Conflicts
                </span>
              </div>
              <div className="space-y-2 text-xs">
                <div className="p-3 rounded-xl bg-blue-50/70 border border-blue-100">
                  <div className="flex justify-between font-bold text-blue-900 mb-1">
                    <span>120ft Boom Lift #BL-102</span>
                    <span>Reserved</span>
                  </div>
                  <span className="text-blue-700">Contractor: Harbor Skyline Project</span>
                </div>
                <div className="p-3 rounded-xl bg-emerald-50/70 border border-emerald-100">
                  <div className="flex justify-between font-bold text-emerald-900 mb-1">
                    <span>60kW Towable Generator #GN-22</span>
                    <span>Ready for Dispatch</span>
                  </div>
                  <span className="text-emerald-700">Available at Yard A (Northlake)</span>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-700">
              <CalendarCheck className="h-6 w-6" aria-hidden="true" />
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900">
              Real-Time Availability Calendar &amp; 24/7 Online Booking Engine
            </h2>
            <p className="text-base leading-relaxed text-slate-600">
              Never worry about double booking expensive equipment. Our engine uses instant locking logic with customizable turnaround buffers so equipment is thoroughly inspected, refueled, and prepped before its next job.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-slate-700 pt-2">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
                <span>Custom buffer hours for cleaning &amp; fuel service</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
                <span>Client self-service mobile booking portal</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
                <span>Multi-day, weekly, and monthly rate tiers</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
                <span>Delivery and pickup dispatch route scheduling</span>
              </div>
            </div>

            {/* Section 2 CTA */}
            <div className="pt-4">
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-7 py-3.5 text-sm font-bold text-white shadow-sm hover:bg-blue-700 hover:shadow-md transition-all duration-200"
              >
                <span>Launch 24/7 Online Booking</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        {/* Section 3: Payments, Invoicing & Deposits */}
        <section id="payments" className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700">
              <CreditCard className="h-6 w-6" aria-hidden="true" />
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900">
              Integrated Payments, Invoicing &amp; Automated Security Deposits
            </h2>
            <p className="text-base leading-relaxed text-slate-600">
              Protect your business cash flow. Capture credit card pre-authorizations for security deposits, process partial returns, and bill metered excess hours directly to the customer card on file.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-slate-700 pt-2">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
                <span>Instant credit card authorization hold on card</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
                <span>Automated release or capture upon return inspection</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
                <span>2-way real-time synchronization with QuickBooks</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
                <span>Commercial contractor Net 30/60 billing terms</span>
              </div>
            </div>

            {/* Section 3 CTA */}
            <div className="pt-4">
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-7 py-3.5 text-sm font-bold text-white shadow-sm hover:bg-blue-700 hover:shadow-md transition-all duration-200"
              >
                <span>Automate Deposits &amp; Billing</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <span className="text-sm font-bold text-slate-900">Invoice #INV-2026-904</span>
                <span className="rounded-full bg-emerald-100 px-3 py-0.5 text-xs font-bold text-emerald-800">
                  Paid Online
                </span>
              </div>
              <div className="space-y-2 text-xs text-slate-600">
                <div className="flex justify-between">
                  <span>Weekly Rental (Skid Steer)</span>
                  <span className="font-semibold text-slate-900">$1,450.00</span>
                </div>
                <div className="flex justify-between">
                  <span>Damage Waiver Protection</span>
                  <span className="font-semibold text-slate-900">$145.00</span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery &amp; Collection Fee</span>
                  <span className="font-semibold text-slate-900">$180.00</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-slate-100 text-sm font-bold text-slate-900">
                  <span>Total Amount Billed</span>
                  <span>$1,775.00</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Maintenance & Inspections */}
        <section id="maintenance" className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <span className="text-sm font-bold text-slate-900">Preventive Service Log</span>
                <span className="rounded-full bg-blue-100 px-3 py-0.5 text-xs font-bold text-blue-800">
                  Scheduled
                </span>
              </div>
              <div className="space-y-3 text-xs text-slate-600">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="font-bold text-slate-900 block">500-Hour Hydraulic Service</span>
                    <span className="text-slate-500">Excavator #EX-104 (Current: 485 hrs)</span>
                  </div>
                  <span className="font-semibold text-amber-600">Due in 15 hrs</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="font-bold text-slate-900 block">Annual ANSI Safety Certification</span>
                    <span className="text-slate-500">Boom Lift #BL-082</span>
                  </div>
                  <span className="font-semibold text-emerald-600">Certified</span>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-50 text-amber-700">
              <Wrench className="h-6 w-6" aria-hidden="true" />
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900">
              Preventative Fleet Maintenance &amp; Mobile Check-in Inspections
            </h2>
            <p className="text-base leading-relaxed text-slate-600">
              Safeguard the lifespan and resale value of your equipment. Trigger automated maintenance tickets based on engine runtime, document tire and hydraulic conditions with photos at checkout, and keep equipment running safely.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-slate-700 pt-2">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
                <span>Pre and post-rental digital photo condition checklists</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
                <span>Engine operating hour and odometer logs</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
                <span>Parts, labor, and subcontractor service cost tracking</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
                <span>Automatic safety lockout for overdue equipment</span>
              </div>
            </div>

            {/* Section 4 CTA */}
            <div className="pt-4">
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-7 py-3.5 text-sm font-bold text-white shadow-sm hover:bg-blue-700 hover:shadow-md transition-all duration-200"
              >
                <span>Automate Fleet Maintenance</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* Bottom CTA */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-24 text-center">
        <div className="rounded-3xl bg-slate-900 text-white p-12 sm:p-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            See the Complete Platform in Action
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-base text-slate-300">
            Start your 14-day free trial now or book a guided demonstration with one of our equipment rental industry specialists.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-sm font-bold text-slate-900 shadow-sm hover:bg-slate-100 transition-all duration-200"
            >
              <span>Start Free Trial</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-800 px-8 py-4 text-sm font-semibold text-white hover:bg-slate-700 transition-all duration-200"
            >
              <span>Schedule Live Demo</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
