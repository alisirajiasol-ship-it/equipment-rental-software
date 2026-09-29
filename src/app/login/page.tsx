import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/siteData";
import LoginForm from "./LoginForm";
import { 
  ShieldCheck, 
  CheckCircle2, 
  Gauge, 
  TrendingUp, 
  ArrowRight,
  Boxes,
  CalendarCheck,
  CreditCard
} from "lucide-react";

export const metadata: Metadata = {
  title: "Account Login | Fleet Dispatch & Inventory Portal",
  description:
    "Sign in to your EquipmentRentalSoftware.io account. Access real-time machinery availability, contractor bookings, asset telematics, and automated invoicing.",
  alternates: {
    canonical: "/login",
  },
};

export default function LoginPage() {
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
        name: "Login",
        item: `${siteConfig.baseUrl}/login`,
      },
    ],
  };

  return (
    <div className="min-h-[calc(100vh-140px)] bg-slate-50 flex items-center justify-center py-10 px-4 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }}
      />

      <div className="w-full max-w-5xl rounded-3xl border border-slate-200/90 bg-white shadow-2xl shadow-slate-200/60 overflow-hidden grid grid-cols-1 lg:grid-cols-12">
        {/* Left Column: Login Form & Branding (7 cols on lg) */}
        <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-between">
          <div>
            {/* Top Brand Logo */}
            <div className="mb-8">
              <Link href="/" className="inline-block transition-opacity hover:opacity-95" aria-label="Equipment Rental Software Home">
                <Image
                  src="/images/logo.png"
                  alt="EquipmentRentalSoftware.io"
                  width={220}
                  height={59}
                  priority
                  className="h-12 w-auto object-contain"
                />
              </Link>
            </div>

            {/* Title & Subheading */}
            <div className="mb-6">
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
                Sign in to your fleet portal
              </h1>
              <p className="mt-2 text-sm text-slate-600">
                Manage inventory, live bookings, telemetry meters, and customer invoices from one centralized platform.
              </p>
            </div>

            {/* Login Form Client Component */}
            <LoginForm />
          </div>

          {/* Quick Footer Links */}
          <div className="mt-8 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between text-xs text-slate-500 gap-2">
            <span>&copy; {new Date().getFullYear()} {siteConfig.name}</span>
            <div className="flex items-center gap-4">
              <Link href="/privacy-policy" className="hover:text-slate-800 transition-colors">Privacy Policy</Link>
              <span>•</span>
              <Link href="/terms-and-conditions" className="hover:text-slate-800 transition-colors">Terms of Service</Link>
              <span>•</span>
              <Link href="/contact-us" className="hover:text-slate-800 transition-colors">Support</Link>
            </div>
          </div>
        </div>

        {/* Right Column: Enterprise Showcase & Live Dispatch Preview (5 cols on lg) */}
        <div className="hidden lg:flex lg:col-span-5 bg-slate-900 text-white p-10 flex-col justify-between relative overflow-hidden">
          {/* Subtle Ambient Background Gradient */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 h-64 w-64 rounded-full bg-blue-600/20 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 h-64 w-64 rounded-full bg-indigo-600/20 blur-3xl pointer-events-none" />

          {/* Top Pill */}
          <div className="relative z-10 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 border border-blue-400/30 px-3.5 py-1 text-xs font-bold text-blue-300">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Fleet Telematics Online</span>
            </div>

            <h2 className="text-2xl font-extrabold tracking-tight text-white leading-snug">
              Commercial Rental Operations on Autopilot
            </h2>

            {/* Live Metrics Showcase Box */}
            <div className="rounded-2xl border border-slate-800 bg-slate-800/60 p-4 space-y-3 backdrop-blur-xs">
              <div className="flex items-center justify-between pb-2 border-b border-slate-700/60">
                <span className="text-xs font-semibold text-slate-400">Total Tracked Fleet</span>
                <span className="text-xs font-bold text-emerald-400 font-mono">142 Units Live</span>
              </div>
              <div className="flex items-center justify-between pb-2 border-b border-slate-700/60">
                <span className="text-xs font-semibold text-slate-400">Collision-Free Bookings</span>
                <span className="text-xs font-bold text-blue-400 font-mono">100% Protected</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-400">Avg. Daily Utilization</span>
                <span className="text-xs font-bold text-amber-400 font-mono">84.6%</span>
              </div>
            </div>

            {/* Testimonial Quote */}
            <div className="rounded-2xl border border-slate-800/80 bg-slate-950/40 p-5 space-y-3">
              <p className="text-xs text-slate-300 leading-relaxed italic">
                &ldquo;Before EquipmentRentalSoftware.io, scheduling conflicts and paper service logs cost us thousands every month. Now our entire depot dispatch operates smoothly in real-time.&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-1">
                <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center font-bold text-xs text-white">
                  MV
                </div>
                <div>
                  <span className="text-xs font-bold text-white block">Marcus Vance</span>
                  <span className="text-[10px] text-slate-400">VP Fleet Operations, Apex Infrastructure</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Trust Badge Strip */}
          <div className="relative z-10 pt-6 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
            <span className="flex items-center gap-1.5 text-slate-300 font-medium">
              <ShieldCheck className="h-4 w-4 text-emerald-400" />
              99.99% Uptime SLA
            </span>
            <Link href="/pricing" className="text-blue-400 hover:text-blue-300 font-bold flex items-center gap-1">
              <span>View Pricing</span>
              <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
