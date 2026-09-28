import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/siteData";
import {
  Boxes,
  ShieldCheck,
  TrendingUp,
  Users,
  Target,
  Clock,
  ArrowRight,
  Award,
  Sparkles,
  Truck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn the mission behind EquipmentRentalSoftware.io: empowering commercial equipment rental businesses to automate operations, track inventory, and scale sustainably.",
  alternates: {
    canonical: "/about-us",
  },
};

export default function AboutUsPage() {
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
        name: "About Us",
        item: `${siteConfig.baseUrl}/about-us`,
      },
    ],
  };

  return (
    <div className="flex flex-col py-12 sm:py-20 bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }}
      />

      {/* Hero Header */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center mb-16 sm:mb-20">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3.5 py-1 text-xs font-bold text-slate-800 uppercase tracking-wider mb-4 border border-slate-200">
          Our Story & Mission
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight max-w-4xl mx-auto">
          We Built the Software We Wished Existed When Managing Equipment Yards
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-base sm:text-lg text-slate-600 leading-relaxed">
          {siteConfig.description}
        </p>
      </div>

      {/* Key Operational Impact Metrics */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="rounded-3xl border border-slate-200 bg-slate-50/70 p-6 sm:p-8 text-center">
            <span className="text-3xl sm:text-4xl font-extrabold text-slate-900 block mb-1">
              $45M+
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Fleet Assets Managed
            </span>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50/70 p-6 sm:p-8 text-center">
            <span className="text-3xl sm:text-4xl font-extrabold text-slate-900 block mb-1">
              500+
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Rental Companies
            </span>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50/70 p-6 sm:p-8 text-center">
            <span className="text-3xl sm:text-4xl font-extrabold text-slate-900 block mb-1">
              1.2M+
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Hours Saved Annually
            </span>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50/70 p-6 sm:p-8 text-center">
            <span className="text-3xl sm:text-4xl font-extrabold text-emerald-700 block mb-1">
              99.98%
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Platform Uptime SLA
            </span>
          </div>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
              <Target className="h-6 w-6" aria-hidden="true" />
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900">
              Engineered for the Reality of Modern Rental Yards
            </h2>
            <p className="text-base leading-relaxed text-slate-600">
              Most generic inventory software is built for retail ecommerce warehouses with barcodes in clean air-conditioned rooms. Equipment rental is fundamentally different: machinery returns covered in mud, fuel tanks must be inspected, engine hours require logging, and rental contracts involve complex security deposits, liability waivers, and delivery dispatch.
            </p>
            <p className="text-base leading-relaxed text-slate-600">
              EquipmentRentalSoftware.io was designed from the ground up to solve these exact workflows. We replace disconnected spreadsheets, whiteboards, and clunky legacy software with one fast, intuitive cloud platform accessible anywhere on desktop, tablet, or phone.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-900 text-white p-8 sm:p-10 space-y-6">
            <h3 className="text-2xl font-bold tracking-tight text-white">
              Our Core Commitments
            </h3>
            <div className="space-y-4 text-sm text-slate-300">
              <div className="flex items-start gap-3">
                <ShieldCheck className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <strong className="text-white block">Zero Double Bookings Guarantee</strong>
                  <span>Our calendar engine enforces strict real-time asset locking and customizable prep buffers.</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-blue-400 shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <strong className="text-white block">Speed and Reliability</strong>
                  <span>Lightning-fast response times so counter staff never keep commercial contractors waiting in line.</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <TrendingUp className="h-5 w-5 text-amber-400 shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <strong className="text-white block">Fleet Profitability Focus</strong>
                  <span>Clear visibility into revenue per machine, depreciation, and maintenance overhead to maximize ROI.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Company Values */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-24">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Our Guiding Principles
          </span>
          <h2 className="mt-1 text-3xl font-extrabold tracking-tight text-slate-900">
            The Values Behind Every Feature We Ship
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="rounded-3xl border border-slate-200 bg-slate-50/60 p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-white mb-6">
              <Award className="h-6 w-6" aria-hidden="true" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Simplicity First</h3>
            <p className="text-sm leading-relaxed text-slate-600">
              Software shouldn’t require a 3-week training course. We build interfaces so intuitive that new yard associates can create rental orders and process check-ins on day one.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50/60 p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-white mb-6">
              <Truck className="h-6 w-6" aria-hidden="true" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Built for the Field</h3>
            <p className="text-sm leading-relaxed text-slate-600">
              Our mobile interface is optimized for yard operators wearing work gloves, conducting outdoor inspections in bright sunlight, and handling deliveries on the go.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50/60 p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-white mb-6">
              <Users className="h-6 w-6" aria-hidden="true" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Dedicated Industry Support</h3>
            <p className="text-sm leading-relaxed text-slate-600">
              When you call or email our team, you speak to specialists who understand fleet utilization, damage waivers, and equipment maintenance schedules.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Box */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="rounded-3xl bg-slate-50 border border-slate-200 p-12 sm:p-16">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
            Join Hundreds of Successful Equipment Rental Operations
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-base text-slate-600">
            Experience how EquipmentRentalSoftware.io can transform your yard workflow. Start your 14-day free trial today.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-8 py-3.5 text-sm font-bold text-white shadow-sm hover:bg-blue-600 transition-all duration-200"
            >
              <span>View Pricing Plans</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-8 py-3.5 text-sm font-bold text-slate-800 hover:bg-slate-50 transition-all duration-200"
            >
              <span>Contact Our Team</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
