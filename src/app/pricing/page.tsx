import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig, faqs } from "@/data/siteData";
import PricingTable from "@/components/PricingTable";
import FaqAccordion from "@/components/FaqAccordion";
import { ShieldCheck, HelpCircle, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Pricing Plans & Comparison Matrix",
  description:
    "Simple, transparent pricing for any rental fleet. Plans from $39/mo with inventory tracking, online bookings, and maintenance logs. Try free for 14 days.",
  alternates: {
    canonical: "/pricing",
  },
  openGraph: {
    title: "Pricing Plans & Comparison Matrix | Equipment Rental Software",
    description:
      "Simple, transparent pricing for any rental fleet. Plans from $39/mo with inventory tracking, online bookings, and maintenance logs. Try free for 14 days.",
    url: `${siteConfig.baseUrl}/pricing`,
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${siteConfig.baseUrl}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: "Pricing Plans - Equipment Rental Software",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing Plans & Comparison Matrix | Equipment Rental Software",
    description:
      "Simple, transparent pricing for any rental fleet. Plans from $39/mo with inventory tracking, online bookings, and maintenance logs. Try free for 14 days.",
    images: [`${siteConfig.baseUrl}/opengraph-image`],
  },
};

export default function PricingPage() {
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
        name: "Pricing",
        item: `${siteConfig.baseUrl}/pricing`,
      },
    ],
  };

  return (
    <div className="flex flex-col py-12 sm:py-20 bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }}
      />

      {/* Header */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center mb-12 sm:mb-16">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3.5 py-1 text-xs font-bold text-slate-800 uppercase tracking-wider mb-4 border border-slate-200">
          Transparent Fleet Pricing
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
          Flexible Plans Tailored for Any Equipment Fleet Size
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-slate-600">
          Choose a plan that fits your rental operation. From small independent yards to multi-depot commercial fleets, our plans scale with your business.
        </p>
      </div>

      {/* Pricing Cards & Full Comparison Table */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <PricingTable showFullMatrix={true} />
      </div>

      {/* Modern SaaS Value Guarantee & Enterprise Consultation Banner */}
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 mt-20">
        <div className="relative overflow-hidden rounded-3xl p-[1px] bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-400 shadow-2xl">
          <div className="relative overflow-hidden rounded-[23px] bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 p-8 sm:p-12 text-white">
            {/* Ambient background glow elements */}
            <div className="absolute -right-16 -top-16 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl pointer-events-none" aria-hidden="true" />
            <div className="absolute -left-16 -bottom-16 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl pointer-events-none" aria-hidden="true" />

            <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
              <div className="space-y-5 max-w-2xl text-left">
                <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/20 border border-blue-400/40 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-blue-300">
                  <ShieldCheck className="h-4 w-4 text-cyan-400" aria-hidden="true" />
                  <span>100% Risk-Free Guarantee &bull; Cancel Anytime</span>
                </div>

                <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
                  14-Day Free Fleet Trial. Instant Setup. Zero Risk.
                </h3>

                <p className="text-sm sm:text-base leading-relaxed text-slate-300">
                  No credit card required. Import your equipment inventory via CSV or QuickBooks sync, invite your yard operators, and begin taking automated contractor reservations in under 15 minutes.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs font-semibold text-slate-300">
                  <div className="flex items-center gap-2 rounded-xl bg-white/5 border border-white/10 px-3 py-2">
                    <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0" aria-hidden="true" />
                    <span>Free Fleet CSV Import</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-xl bg-white/5 border border-white/10 px-3 py-2">
                    <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0" aria-hidden="true" />
                    <span>Full Pro Feature Access</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-xl bg-white/5 border border-white/10 px-3 py-2">
                    <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0" aria-hidden="true" />
                    <span>1-Click Online Cancel</span>
                  </div>
                </div>
              </div>

              {/* SaaS Action Buttons */}
              <div className="flex flex-col gap-3.5 w-full lg:w-auto shrink-0">
                <Link
                  href="/contact-us?plan=trial"
                  className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 px-8 py-4 text-sm font-bold text-white shadow-xl shadow-blue-600/30 hover:shadow-blue-500/50 hover:scale-[1.02] transition-all duration-200"
                >
                  <span>Start Free Trial Now</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link
                  href="/contact-us"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 hover:bg-white/20 px-6 py-3.5 text-xs font-semibold text-white backdrop-blur-md transition-all duration-200"
                >
                  <span>Need Custom Enterprise Terms?</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-24">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
            Frequently Asked Pricing Questions
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Everything you need to know about our plans, contracts, payments, and onboarding.
          </p>
        </div>

        <FaqAccordion />
      </div>
    </div>
  );
}
