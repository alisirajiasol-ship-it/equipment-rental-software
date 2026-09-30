import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { Showcase } from "@/components/Showcase";
import DashboardMockup from "@/components/DashboardMockup";
import { homeSchema } from "@/lib/schema";
import { FAQ } from "@/lib/faq";
import { SITE_URL } from "@/lib/site";
import {
  ArrowRight,
  Boxes,
  Calendar,
  CreditCard,
  Wrench,
  CheckCircle2,
  ChevronDown,
  Phone,
  Mail,
  Truck,
  Wrench as ToolIcon,
  Tent,
  Tv,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Equipment Rental Software: Inventory, Booking & Maintenance",
  description:
    "Equipment rental software to manage inventory, prevent double bookings, take payments, and track maintenance. Plans from $39/mo. Start your free trial.",
  alternates: {
    canonical: `${SITE_URL}/`,
  },
  openGraph: {
    type: "website",
    siteName: "Equipment Rental Software",
    locale: "en_US",
    url: `${SITE_URL}/`,
    title: "Equipment Rental Software: Inventory, Booking & Maintenance",
    description:
      "Equipment rental software to manage inventory, prevent double bookings, take payments, and track maintenance. Plans from $39/mo. Start your free trial.",
    images: [
      {
        url: `${SITE_URL}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: "Equipment Rental Software: Rent Smarter. Manage Everything.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Equipment Rental Software: Inventory, Booking & Maintenance",
    description:
      "Equipment rental software to manage inventory, prevent double bookings, take payments, and track maintenance. Plans from $39/mo. Start your free trial.",
    images: [`${SITE_URL}/opengraph-image`],
  },
};

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <JsonLd data={homeSchema()} />

      {/* Section 1: Hero */}
      <section
        aria-labelledby="hero-h1"
        className="relative overflow-hidden pt-10 pb-16 sm:pt-14 sm:pb-20 bg-gradient-to-b from-blue-50/40 via-white to-slate-50/50"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            {/* Left Column: Copy & Actions */}
            <div className="lg:col-span-5 text-left space-y-6">
              <p className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/70 text-blue-800 text-xs font-semibold tracking-wide">
                Built for equipment rental businesses
              </p>

              <h1
                id="hero-h1"
                className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.12]"
              >
                Equipment Rental Software: Rent Smarter. Manage Everything.
              </h1>

              <p className="text-base sm:text-lg leading-relaxed text-slate-600">
                Equipment rental management software that puts your inventory, availability, bookings, payments, and maintenance in one place. Stop juggling spreadsheets and paper, and give your team a clear view of every item you rent.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
                <Link
                  href="/signup"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-7 py-3.5 text-sm font-bold text-white shadow-sm transition-all duration-200 hover:bg-blue-700 hover:shadow-md focus-visible:ring-2 focus-visible:ring-blue-600"
                >
                  <span>Start Free Trial</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>

                <Link
                  href="/contact-us"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-7 py-3.5 text-sm font-bold text-slate-800 shadow-xs transition-all duration-200 hover:bg-slate-50 hover:border-slate-400"
                >
                  <span>Book a Demo</span>
                </Link>
              </div>

              <div className="pt-1">
                <Link
                  href="/pricing"
                  className="text-sm font-semibold text-blue-700 hover:text-blue-800 hover:underline inline-flex items-center gap-1"
                >
                  <span>Plans start at $39/month.</span>
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
              </div>
            </div>

            {/* Right Column: Dashboard Mockup */}
            <div className="lg:col-span-7">
              <DashboardMockup />
              <p className="text-center text-xs text-slate-500 mt-3">
                Sample data shown for illustration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Equipment categories strip */}
      <section
        aria-label="Equipment categories"
        className="border-y border-slate-200/80 bg-white py-10"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-6">
            Built for equipment rental businesses
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="flex items-center gap-3.5 rounded-2xl border border-slate-200/90 bg-slate-50/50 p-4 text-left shadow-xs hover:border-blue-400 hover:bg-white transition-all">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/10 text-amber-700 shrink-0">
                <Truck className="h-5 w-5" aria-hidden="true" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-sm font-bold text-slate-900 leading-snug">
                  Construction &amp; heavy equipment
                </div>
                <div className="text-xs text-slate-500 mt-0.5">
                  Excavators, lifts, generators
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3.5 rounded-2xl border border-slate-200/90 bg-slate-50/50 p-4 text-left shadow-xs hover:border-blue-400 hover:bg-white transition-all">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-700 shrink-0">
                <ToolIcon className="h-5 w-5" aria-hidden="true" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-sm font-bold text-slate-900 leading-snug">
                  Tool rental
                </div>
                <div className="text-xs text-slate-500 mt-0.5">
                  Power and hand tools
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3.5 rounded-2xl border border-slate-200/90 bg-slate-50/50 p-4 text-left shadow-xs hover:border-blue-400 hover:bg-white transition-all">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/10 text-purple-700 shrink-0">
                <Tent className="h-5 w-5" aria-hidden="true" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-sm font-bold text-slate-900 leading-snug">
                  Party &amp; event rental
                </div>
                <div className="text-xs text-slate-500 mt-0.5">
                  Tents, tables, staging
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3.5 rounded-2xl border border-slate-200/90 bg-slate-50/50 p-4 text-left shadow-xs hover:border-blue-400 hover:bg-white transition-all">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-700 shrink-0">
                <Tv className="h-5 w-5" aria-hidden="true" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-sm font-bold text-slate-900 leading-snug">
                  AV &amp; production rental
                </div>
                <div className="text-xs text-slate-500 mt-0.5">
                  Audio, video, lighting
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: At a glance (4 facts, list, no heading) */}
      <section
        aria-label="At a glance facts"
        className="bg-slate-900 text-white py-12"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <li className="flex items-start gap-3 rounded-2xl bg-slate-800/60 p-5 border border-slate-800">
              <CheckCircle2 className="h-5 w-5 text-blue-400 shrink-0 mt-0.5" aria-hidden="true" />
              <div className="text-sm leading-relaxed text-slate-300">
                <strong className="text-white block font-semibold mb-0.5">From $39/mo</strong>
                Three plans, from small rental businesses to multi-location operations
              </div>
            </li>
            <li className="flex items-start gap-3 rounded-2xl bg-slate-800/60 p-5 border border-slate-800">
              <CheckCircle2 className="h-5 w-5 text-blue-400 shrink-0 mt-0.5" aria-hidden="true" />
              <div className="text-sm leading-relaxed text-slate-300">
                <strong className="text-white block font-semibold mb-0.5">Online booking</strong>
                Let customers reserve equipment online on Professional and Business plans
              </div>
            </li>
            <li className="flex items-start gap-3 rounded-2xl bg-slate-800/60 p-5 border border-slate-800">
              <CheckCircle2 className="h-5 w-5 text-blue-400 shrink-0 mt-0.5" aria-hidden="true" />
              <div className="text-sm leading-relaxed text-slate-300">
                <strong className="text-white block font-semibold mb-0.5">Payments &amp; invoicing</strong>
                Take payments and send invoices from the same system (Professional and Business plans)
              </div>
            </li>
            <li className="flex items-start gap-3 rounded-2xl bg-slate-800/60 p-5 border border-slate-800">
              <CheckCircle2 className="h-5 w-5 text-blue-400 shrink-0 mt-0.5" aria-hidden="true" />
              <div className="text-sm leading-relaxed text-slate-300">
                <strong className="text-white block font-semibold mb-0.5">Multiple locations</strong>
                Run more than one location on the Business plan
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* Section 4: Features overview */}
      <section
        aria-labelledby="features-overview-h2"
        className="py-20 sm:py-24 bg-slate-50/70"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2
              id="features-overview-h2"
              className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900"
            >
              Equipment Rental Business Software for Every Part of Your Operation
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              Running an equipment rental business means knowing what you own, who has it, what they owe, and when it needs service. This equipment rental business software connects those pieces so your team works from one source of truth instead of several.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="rounded-3xl border border-slate-200/90 bg-white p-7 shadow-xs hover:shadow-md transition-all flex flex-col justify-between text-left">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 mb-6">
                  <Boxes className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  Equipment Inventory &amp; Asset Lifecycle
                </h3>
                <p className="text-sm leading-relaxed text-slate-600 mb-6">
                  Give every piece of equipment its own record, from the day it joins your fleet through every rental, inspection, and service. Know what you own and what condition it is in.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100">
                <Link
                  href="/features#inventory"
                  className="text-sm font-semibold text-blue-700 hover:text-blue-800 inline-flex items-center gap-1.5"
                >
                  <span>Explore inventory management features</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>

            {/* Card 2 */}
            <div className="rounded-3xl border border-slate-200/90 bg-white p-7 shadow-xs hover:shadow-md transition-all flex flex-col justify-between text-left">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-50 text-purple-600 mb-6">
                  <Calendar className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  Real-Time Availability &amp; Online Booking
                </h3>
                <p className="text-sm leading-relaxed text-slate-600 mb-6">
                  Availability updates as bookings are made, which helps you avoid double bookings. On the Professional and Business plans, customers can book equipment online whenever it suits them.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100">
                <Link
                  href="/features#booking"
                  className="text-sm font-semibold text-blue-700 hover:text-blue-800 inline-flex items-center gap-1.5"
                >
                  <span>See booking and availability features</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>

            {/* Card 3 */}
            <div className="rounded-3xl border border-slate-200/90 bg-white p-7 shadow-xs hover:shadow-md transition-all flex flex-col justify-between text-left">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 mb-6">
                  <CreditCard className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  Payments, Invoicing &amp; Security Deposits
                </h3>
                <p className="text-sm leading-relaxed text-slate-600 mb-6">
                  Send invoices, take payments, and handle security deposits without switching tools, and keep a clear record of what each customer has paid and what is still due. Payments and invoicing are included on the Professional and Business plans.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100">
                <Link
                  href="/features#payments"
                  className="text-sm font-semibold text-blue-700 hover:text-blue-800 inline-flex items-center gap-1.5"
                >
                  <span>See payments and invoicing features</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>

            {/* Card 4 */}
            <div className="rounded-3xl border border-slate-200/90 bg-white p-7 shadow-xs hover:shadow-md transition-all flex flex-col justify-between text-left">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-50 text-amber-700 mb-6">
                  <Wrench className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  Fleet Maintenance &amp; Mobile Inspections
                </h3>
                <p className="text-sm leading-relaxed text-slate-600 mb-6">
                  Schedule maintenance, keep service history, and run mobile inspections at pickup and return, so equipment goes out ready and comes back documented. Equipment maintenance is included on the Professional and Business plans.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100">
                <Link
                  href="/features#maintenance"
                  className="text-sm font-semibold text-blue-700 hover:text-blue-800 inline-flex items-center gap-1.5"
                >
                  <span>See maintenance and inspection features</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/features"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 hover:bg-blue-600 px-7 py-3.5 text-sm font-bold text-white shadow-sm transition-all duration-200"
            >
              <span>Explore all equipment rental software features</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Section 5: Feature Deep-Dive 1 (Inventory) */}
      <section
        aria-labelledby="deepdive-inventory-h2"
        className="py-20 sm:py-24 bg-white border-t border-slate-200/80"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 text-left space-y-6">
              <h2
                id="deepdive-inventory-h2"
                className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight"
              >
                Equipment Rental Inventory Management Software for Your Whole Fleet
              </h2>
              <p className="text-base leading-relaxed text-slate-600">
                Spreadsheets and whiteboards work until your fleet grows. With equipment rental inventory management software, every item lives in one inventory with its status, rental history, and maintenance record attached.
              </p>

              <ul className="space-y-3 pt-2 text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
                  <span>One record for each item across its full lifecycle in your fleet</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
                  <span>See at a glance what is available, out on rent, or in the shop</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
                  <span>Link every rental order and customer to the equipment involved</span>
                </li>
              </ul>

              <div className="pt-2">
                <Link
                  href="/features#inventory"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 hover:bg-blue-600 px-7 py-3.5 text-sm font-bold text-white shadow-sm transition-all duration-200"
                >
                  <span>See all inventory features</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7">
              <Showcase
                src="/images/equipment-rental-inventory-asset-record.webp"
                alt="Equipment rental inventory record for a CAT 336D excavator with status, hours, and next service"
                caption="Sample equipment record. Data shown is for illustration."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Feature Deep-Dive 2 (Booking) */}
      <section
        aria-labelledby="deepdive-booking-h2"
        className="py-20 sm:py-24 bg-slate-50/60 border-t border-slate-200/80"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 order-2 lg:order-1">
              <Showcase
                src="/images/equipment-rental-booking-contract-boom-lift.webp"
                alt="Equipment rental booking contract for a JLG boom lift with customer, booking number, and return time"
                caption="Sample rental contract. Data shown is for illustration."
              />
            </div>

            <div className="lg:col-span-5 text-left space-y-6 order-1 lg:order-2">
              <h2
                id="deepdive-booking-h2"
                className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight"
              >
                Equipment Rental Booking Software That Prevents Double Bookings
              </h2>
              <p className="text-base leading-relaxed text-slate-600">
                Nothing costs a rental business trust faster than promising the same excavator to two customers. Our equipment rental booking software keeps availability current in real time, so you can see what is truly free for the dates requested before you say yes.
              </p>

              <ul className="space-y-3 pt-2 text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
                  <span>Real-time availability by date for every item</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
                  <span>Double-booking prevention built into the booking flow</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
                  <span>Online booking so customers can reserve equipment without a phone call (Professional and Business plans)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
                  <span>Rental orders and customer records tied to every booking</span>
                </li>
              </ul>

              <div className="pt-2">
                <Link
                  href="/features#booking"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 hover:bg-blue-600 px-7 py-3.5 text-sm font-bold text-white shadow-sm transition-all duration-200"
                >
                  <span>Learn how availability works</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Feature Deep-Dive 3 (Payments - Text only) */}
      <section
        aria-labelledby="deepdive-payments-h2"
        className="py-20 sm:py-24 bg-white border-t border-slate-200/80"
      >
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2
            id="deepdive-payments-h2"
            className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight"
          >
            Payments, Invoicing, and Security Deposits in One Place
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-slate-600 max-w-2xl mx-auto">
            Get paid without chasing paperwork. Generate invoices from rental orders, take payments, and manage security deposits in the same system where you manage the rental.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left pt-4">
            <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-6 shadow-xs">
              <CheckCircle2 className="h-5 w-5 text-emerald-600 mb-3" aria-hidden="true" />
              <div className="text-sm font-semibold text-slate-900 leading-snug">
                Invoicing and payments in the same system as your rental orders
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-6 shadow-xs">
              <CheckCircle2 className="h-5 w-5 text-emerald-600 mb-3" aria-hidden="true" />
              <div className="text-sm font-semibold text-slate-900 leading-snug">
                Security deposits tracked with each rental
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-6 shadow-xs">
              <CheckCircle2 className="h-5 w-5 text-emerald-600 mb-3" aria-hidden="true" />
              <div className="text-sm font-semibold text-slate-900 leading-snug">
                Payments and invoicing included on Professional and Business plans
              </div>
            </div>
          </div>

          <div className="pt-4">
            <Link
              href="/features#payments"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 hover:bg-blue-600 px-7 py-3.5 text-sm font-bold text-white shadow-sm transition-all duration-200"
            >
              <span>Read about payments and invoicing</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Section 8: Feature Deep-Dive 4 (Maintenance) */}
      <section
        aria-labelledby="deepdive-maintenance-h2"
        className="py-20 sm:py-24 bg-slate-50/60 border-t border-slate-200/80"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 text-left space-y-6">
              <h2
                id="deepdive-maintenance-h2"
                className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight"
              >
                Fleet Maintenance and Mobile Inspections Built Into Every Rental
              </h2>
              <p className="text-base leading-relaxed text-slate-600">
                Equipment that is not ready costs you a rental and sometimes a customer. Keep service history and upcoming maintenance next to each item, and run inspections from a mobile device when equipment goes out and comes back.
              </p>

              <ul className="space-y-3 pt-2 text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
                  <span>Maintenance tracking for every item (Professional and Business plans)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
                  <span>Mobile inspections at pickup and return</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
                  <span>Service history stays with the equipment record</span>
                </li>
              </ul>

              <div className="pt-2">
                <Link
                  href="/features#maintenance"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 hover:bg-blue-600 px-7 py-3.5 text-sm font-bold text-white shadow-sm transition-all duration-200"
                >
                  <span>Learn about fleet maintenance tracking</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7">
              <Showcase
                src="/images/equipment-rental-maintenance-inspection-work-order.webp"
                alt="Equipment rental maintenance work order with a passed inspection checklist beside an excavator"
                caption="Sample work order. Data shown is for illustration."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 9: How it works */}
      <section
        aria-labelledby="how-it-works-h2"
        className="py-20 sm:py-24 bg-white border-t border-slate-200/80"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto mb-16">
            <h2
              id="how-it-works-h2"
              className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900"
            >
              How Equipment Rental Software Works
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600">
              Three steps take you from spreadsheets to a system your whole team can use.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="rounded-3xl border border-slate-200/90 bg-slate-50/50 p-8 shadow-xs flex flex-col justify-between">
              <div>
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white font-bold text-sm mb-6">
                  1
                </span>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  1. Add your equipment
                </h3>
                <p className="text-sm leading-relaxed text-slate-600">
                  Create a record for each item in your fleet with the details your team needs to rent it out.
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200/90 bg-slate-50/50 p-8 shadow-xs flex flex-col justify-between">
              <div>
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white font-bold text-sm mb-6">
                  2
                </span>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  2. Take bookings
                </h3>
                <p className="text-sm leading-relaxed text-slate-600">
                  Accept bookings from your team and, on Professional and Business plans, from customers online. Availability updates as each booking is made.
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200/90 bg-slate-50/50 p-8 shadow-xs flex flex-col justify-between">
              <div>
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white font-bold text-sm mb-6">
                  3
                </span>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  3. Rent, invoice, and maintain
                </h3>
                <p className="text-sm leading-relaxed text-slate-600">
                  Send invoices, collect payments and deposits, inspect equipment at pickup and return, and schedule service so it is ready for the next customer. Payments, invoicing, and maintenance are included from the Professional plan.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <Link
              href="/signup"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-7 py-3.5 text-sm font-bold text-white shadow-sm transition-all duration-200 hover:bg-blue-700 hover:shadow-md"
            >
              <span>Start Free Trial</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Section 10: Benefits */}
      <section
        aria-labelledby="benefits-h2"
        className="py-20 sm:py-24 bg-slate-50/70 border-t border-slate-200/80"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto mb-16">
            <h2
              id="benefits-h2"
              className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900"
            >
              What You Gain With Equipment Rental Management Software
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            <div className="rounded-3xl border border-slate-200/90 bg-white p-7 shadow-xs">
              <h3 className="text-lg font-bold text-slate-900 mb-3">
                Fewer scheduling conflicts
              </h3>
              <p className="text-sm leading-relaxed text-slate-600">
                Real-time availability and double-booking prevention help you say yes only to rentals you can fill.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200/90 bg-white p-7 shadow-xs">
              <h3 className="text-lg font-bold text-slate-900 mb-3">
                Less manual work
              </h3>
              <p className="text-sm leading-relaxed text-slate-600">
                Bookings, orders, invoices, and equipment records live in one system, so you re-key less and lose fewer details.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200/90 bg-white p-7 shadow-xs">
              <h3 className="text-lg font-bold text-slate-900 mb-3">
                Clearer payments
              </h3>
              <p className="text-sm leading-relaxed text-slate-600">
                Invoicing, payments, and security deposits sit next to the rental order, so it is clear who owes what.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200/90 bg-white p-7 shadow-xs">
              <h3 className="text-lg font-bold text-slate-900 mb-3">
                Equipment that is ready to rent
              </h3>
              <p className="text-sm leading-relaxed text-slate-600">
                Maintenance schedules and mobile inspections help you catch problems before the next customer does.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 11: Industries */}
      <section
        aria-labelledby="industries-h2"
        className="py-20 sm:py-24 bg-white border-t border-slate-200/80"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2
              id="industries-h2"
              className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900"
            >
              Built for Contractors, Tool Shops, Event Rental, and AV Companies
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              Whether you rent a few dozen tools or a yard full of machines, the daily work is the same: know what is available, book it, get paid, and keep it in good shape.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-3xl border border-slate-200/90 bg-slate-50/50 p-8 shadow-xs">
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Construction and Heavy Equipment Rental
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-slate-600">
                Track excavators, loaders, lifts, and generators with availability, service history, and rental orders in one place. It suits construction equipment rental businesses and heavy equipment yards that need to know what is out, what is due back, and what needs service.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200/90 bg-slate-50/50 p-8 shadow-xs">
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Tool Rental
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-slate-600">
                Track power tools and hand tools, and keep customer records and rental orders organized for busy counter and online rentals.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200/90 bg-slate-50/50 p-8 shadow-xs">
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Party and Event Rental
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-slate-600">
                Manage tents, tables, chairs, and staging with date-based availability, so the same inventory is not promised to two events on the same weekend.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200/90 bg-slate-50/50 p-8 shadow-xs">
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                AV and Production Equipment Rental
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-slate-600">
                Keep audio, video, and lighting gear accounted for across bookings, with inspections that show what went out and what came back.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center space-y-4">
            <p className="text-base text-slate-600 font-medium">
              Not sure it fits your business? Tell us what you rent and we will help you find the right plan.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 hover:bg-blue-600 px-6 py-3 text-sm font-bold text-white shadow-sm transition-all duration-200"
              >
                <span>Contact our team</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href="/about-us"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-bold text-slate-800 shadow-xs transition-all duration-200 hover:bg-slate-50"
              >
                <span>About Equipment Rental Software</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 12: Pricing teaser */}
      <section
        aria-labelledby="pricing-teaser-h2"
        className="py-20 sm:py-24 bg-slate-50/70 border-t border-slate-200/80"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2
              id="pricing-teaser-h2"
              className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900"
            >
              Equipment Rental Software for Small Business: Simple, Scalable Pricing
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              Starter is $39/mo and built for small rental businesses. Move up to Professional or Business as you add users, locations, and equipment. Starter and Professional start with a free trial.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Starter Plan */}
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xs flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  Starter
                </h3>
                <p className="text-3xl font-extrabold text-slate-900 mt-3">
                  $39<span className="text-base font-medium text-slate-500">/mo</span>
                </p>
                <p className="text-sm font-semibold text-slate-500 mt-1">
                  For small rental businesses
                </p>
                <ul className="space-y-3 pt-6 border-t border-slate-100 mt-6 text-sm text-slate-700">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
                    <span>Equipment inventory and real-time availability</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
                    <span>Bookings, customer management, and rental orders</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
                    <span>Basic reporting</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
                    <span>2 users, 1 location</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
                    <span>Email support</span>
                  </li>
                </ul>
              </div>

              <div className="pt-8">
                <Link
                  href="/signup?plan=starter"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 hover:bg-blue-600 px-6 py-3.5 text-sm font-bold text-white shadow-sm transition-all duration-200"
                >
                  <span>Start Free Trial</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>

            {/* Professional Plan */}
            <div className="rounded-3xl border-2 border-blue-600 bg-white p-8 shadow-md flex flex-col justify-between relative">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold uppercase tracking-wider py-1 px-3.5 rounded-full shadow-xs">
                Popular
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  Professional
                </h3>
                <p className="text-3xl font-extrabold text-slate-900 mt-3">
                  $79<span className="text-base font-medium text-slate-500">/mo</span>
                </p>
                <p className="text-sm font-semibold text-slate-500 mt-1">
                  Everything in Starter, plus:
                </p>
                <ul className="space-y-3 pt-6 border-t border-slate-100 mt-6 text-sm text-slate-700">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
                    <span>Online booking</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
                    <span>Payments and invoicing</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
                    <span>Equipment maintenance</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
                    <span>Advanced reporting</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
                    <span>5 users</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
                    <span>Integrations</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
                    <span>Priority support and chat</span>
                  </li>
                </ul>
              </div>

              <div className="pt-8">
                <Link
                  href="/signup?plan=pro"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-700 px-6 py-3.5 text-sm font-bold text-white shadow-sm transition-all duration-200"
                >
                  <span>Start Free Trial</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>

            {/* Business Plan */}
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xs flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  Business
                </h3>
                <p className="text-3xl font-extrabold text-slate-900 mt-3">
                  $149<span className="text-base font-medium text-slate-500">/mo</span>
                </p>
                <p className="text-sm font-semibold text-slate-500 mt-1">
                  For multi-location operations
                </p>
                <ul className="space-y-3 pt-6 border-t border-slate-100 mt-6 text-sm text-slate-700">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
                    <span>Everything in Professional</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
                    <span>Unlimited users</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
                    <span>Multiple locations</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
                    <span>Priority support</span>
                  </li>
                </ul>
              </div>

              <div className="pt-8">
                <Link
                  href="/contact-us"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 px-6 py-3.5 text-sm font-bold text-slate-800 shadow-xs transition-all duration-200"
                >
                  <span>Book a Demo</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/pricing"
              className="text-sm font-semibold text-blue-700 hover:text-blue-800 hover:underline inline-flex items-center gap-1.5"
            >
              <span>Compare all plans</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Section 13: Integrations */}
      <section
        aria-labelledby="integrations-h2"
        className="py-20 sm:py-24 bg-white border-t border-slate-200/80"
      >
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2
            id="integrations-h2"
            className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900"
          >
            Connect Your Rental Software to the Tools You Already Use
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-slate-600 max-w-2xl mx-auto">
            Integrations are included with the Professional and Business plans. Tell us which tools your team relies on and we will confirm what connects to your setup.
          </p>
          <div className="pt-4">
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 hover:bg-blue-600 px-7 py-3.5 text-sm font-bold text-white shadow-sm transition-all duration-200"
            >
              <span>Talk to our team about integrations</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Section 14: FAQ */}
      <section
        aria-labelledby="faq-h2"
        className="py-20 sm:py-24 bg-slate-50/70 border-t border-slate-200/80"
      >
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2
              id="faq-h2"
              className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900"
            >
              Equipment Rental Software FAQ
            </h2>
            <p className="mt-3 text-base text-slate-600">
              Answers to common questions about equipment rental software, pricing, and getting started.
            </p>
          </div>

          <div className="space-y-4">
            {FAQ.map((faq, index) => (
              <details
                key={index}
                className="group rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-xs open:shadow-md transition-all duration-200"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4 font-semibold text-slate-900 select-none list-none [&::-webkit-details-marker]:hidden">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900">
                    {faq.q}
                  </h3>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-500 group-hover:bg-blue-50 group-hover:text-blue-600 group-open:rotate-180 transition-transform duration-200 shrink-0">
                    <ChevronDown className="h-4 w-4" aria-hidden="true" />
                  </span>
                </summary>
                <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-600 border-t border-slate-100 pt-4">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Section 15: Final CTA */}
      <section
        aria-labelledby="final-cta-h2"
        className="py-20 sm:py-24 bg-slate-900 text-white relative overflow-hidden"
      >
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-8 relative z-10">
          <h2
            id="final-cta-h2"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight"
          >
            Ready to Rent Smarter and Manage Everything?
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Start your free trial and see how equipment rental software can simplify your inventory, bookings, payments, and maintenance. Prefer a walkthrough? Book a demo and we will show you around.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              href="/signup"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-700 px-8 py-4 text-sm font-bold text-white shadow-lg transition-all duration-200"
            >
              <span>Start Free Trial</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>

            <Link
              href="/contact-us"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-800/80 hover:bg-slate-800 px-8 py-4 text-sm font-bold text-white shadow-xs transition-all duration-200"
            >
              <span>Book a Demo</span>
            </Link>
          </div>

          <div className="pt-6 border-t border-slate-800/80 text-xs sm:text-sm text-slate-400 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <span>Questions? Call (708) 562-1403 or email hello@equipmentrentalsoftware.io.</span>
            <div className="flex items-center gap-4">
              <a
                href="tel:17085621403"
                className="hover:text-white transition-colors inline-flex items-center gap-1.5"
              >
                <Phone className="h-3.5 w-3.5" aria-hidden="true" />
                <span>Call Us</span>
              </a>
              <a
                href="mailto:hello@equipmentrentalsoftware.io"
                className="hover:text-white transition-colors inline-flex items-center gap-1.5"
              >
                <Mail className="h-3.5 w-3.5" aria-hidden="true" />
                <span>Email Us</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
