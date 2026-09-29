import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { siteConfig } from "@/data/siteData";
import SignUpForm from "./SignUpForm";
import { 
  ShieldCheck, 
  CheckCircle2, 
  Sparkles, 
  Boxes, 
  CalendarCheck, 
  CreditCard, 
  Wrench,
  Clock,
  ArrowRight
} from "lucide-react";

export const metadata: Metadata = {
  title: "Start 14-Day Free Trial | Full Platform Access",
  description:
    "Start your 14-day free trial of EquipmentRentalSoftware.io. Full access to inventory tracking, live calendar bookings, automated invoicing, and maintenance checklists. No credit card required.",
  alternates: {
    canonical: "/signup",
  },
};

export default function SignUpPage() {
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
        name: "Start Free Trial",
        item: `${siteConfig.baseUrl}/signup`,
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
        {/* Left Column: Sign Up Form & Branding (7 cols on lg) */}
        <div className="lg:col-span-7 p-6 sm:p-10 lg:p-11 flex flex-col justify-between">
          <div>
            {/* Top Brand Logo */}
            <div className="mb-6">
              <Link href="/" className="inline-block transition-opacity hover:opacity-95" aria-label="Equipment Rental Software Home">
                <Image
                  src="/images/logo.png"
                  alt="EquipmentRentalSoftware.io"
                  width={220}
                  height={59}
                  priority
                  className="h-11 md:h-12 w-auto object-contain"
                />
              </Link>
            </div>

            {/* Header Titles */}
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 border border-blue-200 px-3 py-0.5 text-xs font-bold text-blue-700 mb-2">
                <Sparkles className="h-3.5 w-3.5 text-blue-600" />
                <span>14-Day Free Fleet Sandbox</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
                Start your 14-day free trial
              </h1>
              <p className="mt-1.5 text-xs sm:text-sm text-slate-600">
                Full platform access. Setup takes under 2 minutes. No credit card required.
              </p>
            </div>

            {/* Sign Up Form Client Component with Suspense */}
            <Suspense fallback={<div className="p-8 text-center text-xs text-slate-500">Loading signup portal...</div>}>
              <SignUpForm />
            </Suspense>
          </div>

          {/* Quick Footer Links */}
          <div className="mt-8 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between text-xs text-slate-500 gap-2">
            <span>&copy; {new Date().getFullYear()} {siteConfig.name}</span>
            <div className="flex items-center gap-4">
              <Link href="/pricing" className="hover:text-slate-800 transition-colors">Pricing Comparison</Link>
              <span>•</span>
              <Link href="/privacy-policy" className="hover:text-slate-800 transition-colors">Privacy</Link>
              <span>•</span>
              <Link href="/terms-and-conditions" className="hover:text-slate-800 transition-colors">Terms</Link>
            </div>
          </div>
        </div>

        {/* Right Column: Platform Capabilities Showcase (5 cols on lg) */}
        <div className="hidden lg:flex lg:col-span-5 bg-slate-900 text-white p-10 flex-col justify-between relative overflow-hidden">
          {/* Subtle Ambient Background Gradient */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 h-64 w-64 rounded-full bg-blue-600/20 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 h-64 w-64 rounded-full bg-emerald-600/15 blur-3xl pointer-events-none" />

          {/* Content */}
          <div className="relative z-10 space-y-6">
            <div>
              <span className="text-[11px] font-bold text-blue-400 uppercase tracking-widest block mb-1">
                Full Platform Capabilities
              </span>
              <h2 className="text-2xl font-extrabold tracking-tight text-white leading-snug">
                Everything Included in Your 14-Day Free Trial
              </h2>
            </div>

            {/* Feature Checklist List */}
            <div className="space-y-3.5 text-xs text-slate-200">
              <div className="flex items-start gap-3">
                <div className="h-5 w-5 rounded-md bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Boxes className="h-3.5 w-3.5" />
                </div>
                <div>
                  <strong className="text-white block font-semibold">Live Asset Tracking &amp; VIN Telematics</strong>
                  <span className="text-slate-400 text-[11px]">Real-time status across Rented, Ready, and In Inspection.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="h-5 w-5 rounded-md bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                  <CalendarCheck className="h-3.5 w-3.5" />
                </div>
                <div>
                  <strong className="text-white block font-semibold">24/7 Calendar with Collision Protection</strong>
                  <span className="text-slate-400 text-[11px]">Automatic buffer hours prevent scheduling overlaps.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="h-5 w-5 rounded-md bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                  <CreditCard className="h-3.5 w-3.5" />
                </div>
                <div>
                  <strong className="text-white block font-semibold">Stripe Pre-Auth Holds &amp; Invoicing</strong>
                  <span className="text-slate-400 text-[11px]">Capture security deposits and sync directly to QuickBooks.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="h-5 w-5 rounded-md bg-purple-500/20 text-purple-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Wrench className="h-3.5 w-3.5" />
                </div>
                <div>
                  <strong className="text-white block font-semibold">Mobile Photo Walkaround Checklists</strong>
                  <span className="text-slate-400 text-[11px]">Document equipment condition and engine hours on mobile.</span>
                </div>
              </div>
            </div>

            {/* Testimonial Box */}
            <div className="rounded-2xl border border-slate-800/90 bg-slate-950/60 p-4 space-y-2.5">
              <p className="text-xs text-slate-300 leading-relaxed italic">
                &ldquo;Within 48 hours of starting our trial, we imported our fleet of 65 machines and took our first online contractor reservation without any setup hassle.&rdquo;
              </p>
              <div className="flex items-center gap-2.5 pt-1">
                <div className="h-7 w-7 rounded-full bg-blue-600 flex items-center justify-center font-bold text-xs text-white">
                  DG
                </div>
                <div>
                  <span className="text-xs font-bold text-white block">Dave Gallagher</span>
                  <span className="text-[10px] text-slate-400">Operations Director, Tri-County Heavy Rentals</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Security Strip */}
          <div className="relative z-10 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
            <span className="flex items-center gap-1.5 text-slate-300 font-medium">
              <ShieldCheck className="h-4 w-4 text-emerald-400" />
              SOC 2 Type II Certified
            </span>
            <span className="flex items-center gap-1 text-slate-400 text-[11px]">
              <Clock className="h-3.5 w-3.5 text-blue-400" /> 2-Min Setup
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
