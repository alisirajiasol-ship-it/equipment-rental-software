import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig, faqs } from "@/data/siteData";
import DashboardMockup from "@/components/DashboardMockup";
import FaqAccordion from "@/components/FaqAccordion";
import {
  QuickBooksLogo,
  StripeLogo,
  XeroLogo,
  ZapierLogo,
} from "@/components/IntegrationLogos";
import { CommercialWrenchIcon } from "@/components/ToolsIcon";
import {
  ArrowRight,
  Boxes,
  Calendar,
  CheckCircle2,
  Clock,
  CreditCard,
  Globe,
  Layers,
  ShieldCheck,
  Star,
  Truck,
  Wrench,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Equipment Rental Software | Rent Smarter. Manage Everything.",
  description:
    "All-in-one equipment rental software to track inventory, automate online bookings, dispatch fleets, and manage maintenance. Start your free trial today.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Equipment Rental Software | Rent Smarter. Manage Everything.",
    description:
      "All-in-one equipment rental software to track inventory, automate online bookings, dispatch fleets, and manage maintenance. Start your free trial today.",
    url: siteConfig.baseUrl,
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${siteConfig.baseUrl}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: "Equipment Rental Software Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Equipment Rental Software | Rent Smarter. Manage Everything.",
    description:
      "All-in-one equipment rental software to track inventory, automate online bookings, dispatch fleets, and manage maintenance. Start your free trial today.",
    images: [`${siteConfig.baseUrl}/opengraph-image`],
  },
};

export default function HomePage() {
  const softwareApplicationJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    url: siteConfig.baseUrl,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web-based SaaS",
    description: siteConfig.description,
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "USD",
      lowPrice: "39",
      highPrice: "149",
      offerCount: "3",
    },
    featureList: [
      "Real-time equipment inventory tracking",
      "Live equipment availability calendar",
      "Online customer booking engine",
      "Security deposit and automated invoicing",
      "Preventative maintenance and inspection logs",
      "Multi-depot yard management",
      "Contract digital signatures",
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <div className="flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero Section matching mockup: 2-column layout */}
      <section className="relative overflow-hidden pt-10 pb-16 sm:pt-14 sm:pb-20 bg-gradient-to-b from-blue-50/30 via-white to-slate-50/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            {/* Left Column: Copy & Actions */}
            <div className="lg:col-span-5 text-left space-y-6">
              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
                Equipment Rental Software to Manage Your Entire Rental Business
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg leading-relaxed text-slate-600">
                All-in-one equipment rental management software to track fleet inventory, schedule bookings, manage contracts, automate payments, and streamline maintenance. Give your team real-time visibility while letting customers reserve equipment online 24/7.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
                <Link
                  href="/signup"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-7 py-3.5 text-sm font-bold text-white shadow-sm transition-all duration-200 hover:bg-blue-700 hover:shadow-md focus-visible:ring-2 focus-visible:ring-blue-600"
                >
                  <span>Start 14-Day Free Trial</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>

                <Link
                  href="/contact-us"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-7 py-3.5 text-sm font-bold text-slate-800 shadow-xs transition-all duration-200 hover:bg-slate-50 hover:border-slate-400"
                >
                  <span>Book a Live Demo</span>
                </Link>
              </div>

              {/* Trust checklist */}
              <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-1 text-xs font-medium text-slate-500">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0" aria-hidden="true" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0" aria-hidden="true" />
                  <span>Quick setup</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0" aria-hidden="true" />
                  <span>Cancel anytime</span>
                </div>
              </div>
            </div>

            {/* Right Column: Dashboard Mockup */}
            <div className="lg:col-span-7">
              <DashboardMockup />
            </div>
          </div>
        </div>
      </section>

      {/* Built For Every Equipment Rental Business Category Bar */}
      <section id="industries" className="border-y border-slate-200/80 bg-white py-14">
        <div className="mx-auto max-w-7xl xl:max-w-[1440px] px-3 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-8">
            BUILT FOR EVERY EQUIPMENT RENTAL BUSINESS
          </p>

          <div className="overflow-x-auto pb-4 pt-1 scrollbar-none">
            <div className="flex items-center gap-2 sm:gap-2.5 xl:gap-3 min-w-max xl:min-w-0 xl:grid xl:grid-cols-6 pr-4 xl:pr-0">
              {/* 1. Heavy Earthmoving */}
              <div className="flex items-center gap-2.5 sm:gap-3 rounded-2xl border border-slate-200/90 bg-white px-2.5 py-3 sm:px-3 sm:py-3.5 xl:px-3.5 xl:py-3.5 shadow-xs hover:border-blue-500 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 text-left shrink-0 xl:shrink min-w-[190px] xl:min-w-0">
                <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-amber-500/10 text-amber-600 shrink-0">
                  <Truck className="h-4.5 w-4.5 sm:h-5 sm:w-5" aria-hidden="true" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-xs sm:text-[13px] font-bold text-slate-900 leading-tight tracking-tight whitespace-nowrap">
                    Heavy Earthmoving
                  </div>
                  <div className="text-[10.5px] sm:text-[11px] font-medium text-slate-500 mt-0.5 whitespace-nowrap">
                    Excavators &amp; Dozers
                  </div>
                </div>
              </div>

              {/* 2. Commercial Tools */}
              <div className="flex items-center gap-2.5 sm:gap-3 rounded-2xl border border-slate-200/90 bg-white px-2.5 py-3 sm:px-3 sm:py-3.5 xl:px-3.5 xl:py-3.5 shadow-xs hover:border-blue-500 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 text-left shrink-0 xl:shrink min-w-[190px] xl:min-w-0">
                <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600 shrink-0">
                  <CommercialWrenchIcon className="h-4.5 w-4.5 sm:h-5 sm:w-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-xs sm:text-[13px] font-bold text-slate-900 leading-tight tracking-tight whitespace-nowrap">
                    Commercial Tools
                  </div>
                  <div className="text-[10.5px] sm:text-[11px] font-medium text-slate-500 mt-0.5 whitespace-nowrap">
                    Hand &amp; Power Gear
                  </div>
                </div>
              </div>

              {/* 3. Event Staging */}
              <div className="flex items-center gap-2.5 sm:gap-3 rounded-2xl border border-slate-200/90 bg-white px-2.5 py-3 sm:px-3 sm:py-3.5 xl:px-3.5 xl:py-3.5 shadow-xs hover:border-blue-500 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 text-left shrink-0 xl:shrink min-w-[190px] xl:min-w-0">
                <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-purple-500/10 text-purple-600 shrink-0">
                  <Boxes className="h-4.5 w-4.5 sm:h-5 sm:w-5" aria-hidden="true" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-xs sm:text-[13px] font-bold text-slate-900 leading-tight tracking-tight whitespace-nowrap">
                    Event Staging
                  </div>
                  <div className="text-[10.5px] sm:text-[11px] font-medium text-slate-500 mt-0.5 whitespace-nowrap">
                    Audio, Video &amp; Tents
                  </div>
                </div>
              </div>

              {/* 4. Aerial Lifts */}
              <div className="flex items-center gap-2.5 sm:gap-3 rounded-2xl border border-slate-200/90 bg-white px-2.5 py-3 sm:px-3 sm:py-3.5 xl:px-3.5 xl:py-3.5 shadow-xs hover:border-blue-500 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 text-left shrink-0 xl:shrink min-w-[190px] xl:min-w-0">
                <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 shrink-0">
                  <Layers className="h-4.5 w-4.5 sm:h-5 sm:w-5" aria-hidden="true" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-xs sm:text-[13px] font-bold text-slate-900 leading-tight tracking-tight whitespace-nowrap">
                    Aerial Lifts
                  </div>
                  <div className="text-[10.5px] sm:text-[11px] font-medium text-slate-500 mt-0.5 whitespace-nowrap">
                    Booms &amp; Scissor Lifts
                  </div>
                </div>
              </div>

              {/* 5. Power Generation */}
              <div className="flex items-center gap-2.5 sm:gap-3 rounded-2xl border border-slate-200/90 bg-white px-2.5 py-3 sm:px-3 sm:py-3.5 xl:px-3.5 xl:py-3.5 shadow-xs hover:border-blue-500 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 text-left shrink-0 xl:shrink min-w-[190px] xl:min-w-0">
                <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-red-500/10 text-red-600 shrink-0">
                  <Zap className="h-4.5 w-4.5 sm:h-5 sm:w-5" aria-hidden="true" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-xs sm:text-[13px] font-bold text-slate-900 leading-tight tracking-tight whitespace-nowrap">
                    Power Generation
                  </div>
                  <div className="text-[10.5px] sm:text-[11px] font-medium text-slate-500 mt-0.5 whitespace-nowrap">
                    Towable Generators
                  </div>
                </div>
              </div>

              {/* 6. Scaffolding & Rig */}
              <div className="flex items-center gap-2.5 sm:gap-3 rounded-2xl border border-slate-200/90 bg-white px-2.5 py-3 sm:px-3 sm:py-3.5 xl:px-3.5 xl:py-3.5 shadow-xs hover:border-blue-500 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 text-left shrink-0 xl:shrink min-w-[190px] xl:min-w-0">
                <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-600 shrink-0">
                  <ShieldCheck className="h-4.5 w-4.5 sm:h-5 sm:w-5" aria-hidden="true" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-xs sm:text-[13px] font-bold text-slate-900 leading-tight tracking-tight whitespace-nowrap">
                    Scaffolding &amp; Rig
                  </div>
                  <div className="text-[10.5px] sm:text-[11px] font-medium text-slate-500 mt-0.5 whitespace-nowrap">
                    Towers &amp; Shoring
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section id="solutions" className="py-20 sm:py-24 bg-slate-50/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
              Everything You Need to Run Your Equipment Rental Business
            </h2>
            <p className="mt-3 text-base text-slate-600">
              Manage availability, bookings, payments, maintenance, and day-to-day operations from one unified platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1: Real-Time Availability */}
            <div className="rounded-3xl border border-slate-200/90 bg-white p-7 shadow-xs hover:shadow-md transition-all flex flex-col justify-between text-left">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 mb-6">
                  <Calendar className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  Real-Time Availability
                </h3>
                <p className="text-sm leading-relaxed text-slate-600 mb-5">
                  Track current availability, upcoming returns, and jobsite allocations with 100% zero-conflict booking logic.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 flex flex-col gap-2.5 text-xs text-slate-600 font-medium">
                <div className="flex items-center gap-2 text-slate-700">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" aria-hidden="true" />
                  <span>Depot double-booking prevention</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" aria-hidden="true" />
                  <span>Visual fleet utilization timeline</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" aria-hidden="true" />
                  <span>Configurable turnaround inspection buffers</span>
                </div>
              </div>
            </div>

            {/* Card 2: 24/7 Online Booking */}
            <div className="rounded-3xl border border-slate-200/90 bg-white p-7 shadow-xs hover:shadow-md transition-all flex flex-col justify-between text-left">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-50 text-purple-600 mb-6">
                  <Globe className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  24/7 Online Booking
                </h3>
                <p className="text-sm leading-relaxed text-slate-600 mb-5">
                  Let customers check availability, book equipment, sign contracts, and pay deposits anytime.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 flex flex-col gap-2.5 text-xs text-slate-600 font-medium">
                <div className="flex items-center gap-2 text-slate-700">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" aria-hidden="true" />
                  <span>Self-service contractor portal</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" aria-hidden="true" />
                  <span>Instant digital contract e-signatures</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" aria-hidden="true" />
                  <span>Automatic driver license &amp; insurance verification</span>
                </div>
              </div>
            </div>

            {/* Card 3: Payments & Deposits */}
            <div className="rounded-3xl border border-slate-200/90 bg-white p-7 shadow-xs hover:shadow-md transition-all flex flex-col justify-between text-left">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 mb-6">
                  <CreditCard className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  Payments &amp; Deposits
                </h3>
                <p className="text-sm leading-relaxed text-slate-600 mb-5">
                  Automate security deposits, recurring billing, and integrated invoicing with QuickBooks.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 flex flex-col gap-2.5 text-xs text-slate-600 font-medium">
                <div className="flex items-center gap-2 text-slate-700">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" aria-hidden="true" />
                  <span>Automated deposit pre-authorizations</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" aria-hidden="true" />
                  <span>Direct 2-way QuickBooks ledger sync</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" aria-hidden="true" />
                  <span>Metered excess hours card charging</span>
                </div>
              </div>
            </div>

            {/* Card 4: Maintenance & Inspections */}
            <div className="rounded-3xl border border-slate-200/90 bg-white p-7 shadow-xs hover:shadow-md transition-all flex flex-col justify-between text-left">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-50 text-amber-600 mb-6">
                  <Wrench className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  Maintenance &amp; Inspections
                </h3>
                <p className="text-sm leading-relaxed text-slate-600 mb-5">
                  Track engine hours, schedule service, and manage digital inspection checklists.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 flex flex-col gap-2.5 text-xs text-slate-600 font-medium">
                <div className="flex items-center gap-2 text-slate-700">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" aria-hidden="true" />
                  <span>Service interval runtime alerts</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" aria-hidden="true" />
                  <span>Photo check-in damage inspection</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" aria-hidden="true" />
                  <span>Automatic lockout for scheduled maintenance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alternating Showcase 1: Asset Tracking (No eyebrow, Box-type button, Real Image) */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left copy */}
            <div className="lg:col-span-5 text-left space-y-6">
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
                Equipment Rental Inventory Tracking &amp; Real-Time Fleet Visibility
              </h2>
              <p className="text-base leading-relaxed text-slate-600">
                Give every machine in your equipment rental software a complete digital profile with serial numbers, GPS yard location, engine hours, rental history, and revenue records.
              </p>

              <div className="space-y-3 pt-2 text-sm text-slate-700">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
                  <span>Instant QR and barcode scanning at pickup and drop-off</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
                  <span>Configurable turnaround buffers for cleaning and inspection</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
                  <span>Automated reminders sent to customers prior to due returns</span>
                </div>
              </div>

              {/* Box Type Button */}
              <div className="pt-2">
                <Link
                  href="/features#inventory"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 hover:bg-blue-600 px-7 py-3.5 text-sm font-bold text-white shadow-sm transition-all duration-200"
                >
                  <span>Explore Asset Tracking Tools</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>

            {/* Right: Unified Showcase Image */}
            <div className="lg:col-span-7">
              <div className="relative overflow-hidden rounded-3xl border border-slate-200/90 shadow-xl bg-slate-100">
                <Image
                  src="/images/showcase-asset-tracking.jpg"
                  alt="Equipment rental software asset tracking dashboard with excavator on active jobsite"
                  width={1000}
                  height={750}
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  quality={80}
                  className="w-full h-auto object-cover object-center"
                />
                <div className="absolute top-4 right-4 bg-slate-900/80 backdrop-blur-md text-white px-3.5 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 shadow-lg">
                  <ShieldCheck className="h-3.5 w-3.5 text-blue-400" aria-hidden="true" />
                  <span>Real-Time Fleet Telematics</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alternating Showcase 2: Automated Customer Experience */}
      <section className="py-20 sm:py-24 bg-slate-50/60 border-t border-slate-200/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: Unified Showcase Image */}
            <div className="lg:col-span-7 order-2 lg:order-1">
              <div className="relative overflow-hidden rounded-3xl border border-slate-200/90 shadow-xl bg-slate-100">
                <Image
                  src="/images/showcase-dispatch-scheduling.jpg"
                  alt="Equipment rental management dispatch calendar and contractor order booking view"
                  width={1000}
                  height={750}
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  quality={80}
                  className="w-full h-auto object-cover object-center"
                />
                <div className="absolute top-4 right-4 bg-slate-900/80 backdrop-blur-md text-white px-3.5 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 shadow-lg">
                  <Calendar className="h-3.5 w-3.5 text-emerald-400" aria-hidden="true" />
                  <span>24/7 Online Booking</span>
                </div>
              </div>
            </div>

            {/* Right copy */}
            <div className="lg:col-span-5 text-left space-y-6 order-1 lg:order-2">
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
                Online Equipment Rental Booking &amp; Automated Contractor Agreements
              </h2>
              <p className="text-base leading-relaxed text-slate-600">
                Give customers a branded online booking portal where they can browse available equipment, select dates, upload licenses, sign digital rental agreements, and pay deposits automatically.
              </p>

              <div className="space-y-3 pt-2 text-sm text-slate-700">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
                  <span>Automated credit card holds for refundable security deposits</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
                  <span>Legally binding electronic signatures on rental agreements</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
                  <span>Customer portal for re-orders, invoices, and off-rent notifications</span>
                </div>
              </div>

              {/* Box Type Button */}
              <div className="pt-2">
                <Link
                  href="/features#booking"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 hover:bg-blue-600 px-7 py-3.5 text-sm font-bold text-white shadow-sm transition-all duration-200"
                >
                  <span>Explore Booking Workflows</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alternating Showcase 3: Fleet Maintenance & Protection */}
      <section className="py-20 sm:py-24 bg-white border-t border-slate-200/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left copy */}
            <div className="lg:col-span-5 text-left space-y-6">
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
                Fleet Maintenance Tracking &amp; Inspection Workflows for Equipment Rental
              </h2>
              <p className="text-base leading-relaxed text-slate-600">
                Track engine operating hours, service intervals, pre-rental inspections, parts, repairs, and maintenance downtime for every machine. Keep equipment rental-ready and avoid costly jobsite breakdowns.
              </p>

              <div className="space-y-3 pt-2 text-sm text-slate-700">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
                  <span>Digital inspection checklists with photos</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
                  <span>Automatic maintenance downtime blocks</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
                  <span>Comprehensive parts, labor cost, and warranty logging</span>
                </div>
              </div>

              {/* Box Type Button */}
              <div className="pt-2">
                <Link
                  href="/features#maintenance"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 hover:bg-blue-600 px-7 py-3.5 text-sm font-bold text-white shadow-sm transition-all duration-200"
                >
                  <span>Explore Maintenance Logs</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>

            {/* Right: Unified Showcase Image */}
            <div className="lg:col-span-7">
              <div className="relative overflow-hidden rounded-3xl border border-slate-200/90 shadow-xl bg-slate-100">
                <Image
                  src="/images/showcase-maintenance-inspections.jpg"
                  alt="Preventative fleet maintenance inspection checklist and repair order logging"
                  width={1000}
                  height={750}
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  quality={80}
                  className="w-full h-auto object-cover object-center"
                />
                <div className="absolute top-4 right-4 bg-slate-900/80 backdrop-blur-md text-white px-3.5 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 shadow-lg">
                  <Wrench className="h-3.5 w-3.5 text-amber-400" aria-hidden="true" />
                  <span>Automated Service Logs</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Ecosystem Section (No eyebrow tag) */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Seamlessly Integrates with Your Accounting and Business Tools
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-300">
            Connect EquipmentRentalSoftware.io to QuickBooks, Stripe, Xero, Samsara, and Zapier to eliminate double data entry and sync invoices automatically.
          </p>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {/* QuickBooks */}
            <div className="rounded-2xl border border-slate-800 bg-slate-800/60 p-6 text-center flex flex-col items-center justify-center hover:bg-slate-800/80 transition-all shadow-sm">
              <QuickBooksLogo className="h-12 w-12 mb-4" />
              <span className="text-lg font-bold text-white block">QuickBooks</span>
              <span className="text-xs text-slate-400 mt-1 block">Automated 2-way invoice sync</span>
            </div>

            {/* Stripe Payments */}
            <div className="rounded-2xl border border-slate-800 bg-slate-800/60 p-6 text-center flex flex-col items-center justify-center hover:bg-slate-800/80 transition-all shadow-sm">
              <StripeLogo className="h-12 w-12 mb-4" />
              <span className="text-lg font-bold text-white block">Stripe Payments</span>
              <span className="text-xs text-slate-400 mt-1 block">Security deposits &amp; credit cards</span>
            </div>

            {/* Xero Accounting */}
            <div className="rounded-2xl border border-slate-800 bg-slate-800/60 p-6 text-center flex flex-col items-center justify-center hover:bg-slate-800/80 transition-all shadow-sm">
              <XeroLogo className="h-12 w-12 mb-4" />
              <span className="text-lg font-bold text-white block">Xero Accounting</span>
              <span className="text-xs text-slate-400 mt-1 block">Real-time ledger reconciliation</span>
            </div>

            {/* Zapier & APIs */}
            <div className="rounded-2xl border border-slate-800 bg-slate-800/60 p-6 text-center flex flex-col items-center justify-center hover:bg-slate-800/80 transition-all shadow-sm">
              <ZapierLogo className="h-12 w-12 mb-4" />
              <span className="text-lg font-bold text-white block">Zapier &amp; APIs</span>
              <span className="text-xs text-slate-400 mt-1 block">Connect to 1,000+ business apps</span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials (No eyebrow tag) */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
              Trusted by Equipment Rental Owners Nationwide
            </h2>
            <p className="mt-3 text-base text-slate-600">
              Here is what equipment yard operators, operations directors, and rental managers say about using our platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="rounded-3xl border border-slate-200 bg-slate-50/60 p-8 shadow-xs flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" aria-hidden="true" />
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-slate-700">
                  &ldquo;Before EquipmentRentalSoftware.io, we were using paper whiteboards and Excel. We had double-booked a $90k excavator twice in one summer. Since switching, scheduling conflicts are down to zero and our dispatch team saves 3 hours every day.&rdquo;
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-200/80">
                <span className="text-sm font-bold text-slate-900 block">Marcus Vance</span>
                <span className="text-xs text-slate-500">Operations Director, Midwest Heavy Fleet</span>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50/60 p-8 shadow-xs flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" aria-hidden="true" />
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-slate-700">
                  &ldquo;The online booking and deposit engine paid for the entire annual subscription in the first week. Contractors book equipment at night, sign the damage waiver digitally, and their deposit is already secured before they pull into the yard.&rdquo;
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-200/80">
                <span className="text-sm font-bold text-slate-900 block">Elena Rostova</span>
                <span className="text-xs text-slate-500">Owner, Apex Tool &amp; Equipment Hire</span>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50/60 p-8 shadow-xs flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" aria-hidden="true" />
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-slate-700">
                  &ldquo;Fleet maintenance tracking alone is worth every dollar. We caught two major engine faults through the hour meter logs before catastrophic failure occurred. The inspection photo upload protects us against unfair damage disputes.&rdquo;
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-200/80">
                <span className="text-sm font-bold text-slate-900 block">Bradley Chen</span>
                <span className="text-xs text-slate-500">Fleet Superintendent, Tri-State Scaffolding</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section (No eyebrow tag) */}
      <section className="py-20 bg-slate-50/70 border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
              Frequently Asked Questions
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Have questions about onboarding, hardware compatibility, or billing? Here are answers to common questions.
            </p>
          </div>

          <FaqAccordion />
        </div>
      </section>
    </div>
  );
}
