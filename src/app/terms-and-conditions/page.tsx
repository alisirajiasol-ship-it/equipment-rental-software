import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/siteData";
import { ShieldCheck, FileCheck, Scale, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description:
    "Terms of Service and licensing agreement for Equipment Rental Software platform, user obligations, subscription billing, and SLA policies.",
  alternates: {
    canonical: "/terms-and-conditions",
  },
  openGraph: {
    title: "Terms and Conditions | Equipment Rental Software",
    description:
      "Terms of Service and licensing agreement for Equipment Rental Software platform, user obligations, subscription billing, and SLA policies.",
    url: `${siteConfig.baseUrl}/terms-and-conditions`,
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${siteConfig.baseUrl}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: "Terms and Conditions - Equipment Rental Software",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms and Conditions | Equipment Rental Software",
    description:
      "Terms of Service and licensing agreement for Equipment Rental Software platform, user obligations, subscription billing, and SLA policies.",
    images: [`${siteConfig.baseUrl}/opengraph-image`],
  },
};

export default function TermsAndConditionsPage() {
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
        name: "Terms and Conditions",
        item: `${siteConfig.baseUrl}/terms-and-conditions`,
      },
    ],
  };

  return (
    <div className="flex flex-col py-12 sm:py-20 bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }}
      />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 border-b border-slate-200 pb-8 text-center sm:text-left">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3.5 py-1 text-xs font-bold text-slate-800 uppercase tracking-wider mb-4 border border-slate-200">
            Legal Terms
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Terms of Service & Licensing Agreement
          </h1>
          <p className="mt-3 text-sm text-slate-500">
            Effective Date: January 1, 2026 | Last Updated: September 2026
          </p>
        </div>

        {/* Content Body */}
        <div className="prose prose-slate max-w-none space-y-8 text-sm leading-relaxed text-slate-700">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">1. Acceptance of Terms</h2>
            <p>
              By accessing, browsing, subscribing to, or utilizing {siteConfig.shortName} (&ldquo;Service&rdquo;), offered by {siteConfig.name}, you agree to be bound by these Terms and Conditions. If you are entering into this agreement on behalf of a company, rental yard, or legal entity, you represent that you possess the authority to bind such entity.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">2. Description of Service</h2>
            <p>
              {siteConfig.shortName} is a cloud-based rental management platform that provides inventory cataloging, asset tracking, live reservation scheduling, customer relationship management, digital contract execution, automated payment processing, and equipment preventative maintenance logs.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">3. Subscription Tiers, Trials, and Billing</h2>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
              <li>
                <strong className="text-slate-800">14-Day Free Trial:</strong> Eligible subscriptions begin with a 14-day free trial. If not canceled prior to the trial conclusion, the designated payment method will be billed at the chosen tier rate.
              </li>
              <li>
                <strong className="text-slate-800">Plan Tiers:</strong> Subscription tiers (Starter at $39/mo, Professional at $79/mo, and Business at $149/mo) are billed on either a monthly or annual cycle with transparent pricing published on our <Link href="/pricing" className="text-blue-600 underline">Pricing Page</Link>.
              </li>
              <li>
                <strong className="text-slate-800">Payment Authorization:</strong> Subscribers authorize recurring charges to their credit card or designated bank payment method until service cancellation is requested.
              </li>
              <li>
                <strong className="text-slate-800">Cancellation:</strong> You may cancel your subscription at any time via your account portal. Cancellations take effect at the conclusion of the active billing period.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">4. Customer Data Ownership and Portability</h2>
            <p>
              Subscribers retain full, exclusive ownership of all proprietary fleet assets, rental transaction records, customer contact databases, and inspection photographs uploaded to the platform. We do not claim intellectual property rights over subscriber data. Upon termination, subscribers may export complete data sets in standard CSV/JSON formats within 60 days.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">5. Service Level Agreement (SLA) & Uptime</h2>
            <p>
              We guarantee a 99.98% platform uptime availability, excluding scheduled routine maintenance windows announced at least 48 hours in advance. In the event of an unscheduled outage exceeding our SLA commitment, eligible accounts receive service credits as outlined in our enterprise agreements.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">6. Physical Equipment & Liability Disclaimer</h2>
            <p>
              {siteConfig.name} provides operational software management tools. We are not an equipment rental broker, equipment manufacturer, insurer, or legal representative. Subscribers remain solely responsible for the physical inspection, mechanical maintenance, operator training, safety certifications (e.g., OSHA, ANSI), and insurance verification of all equipment rented to third-party operators.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">7. Governing Law and Jurisdiction</h2>
            <p>
              These Terms and Conditions shall be governed by, construed, and enforced in accordance with the laws of the State of Illinois, United States, without regard to its conflict of law principles. Any legal action or proceeding arising under this agreement shall be brought exclusively in the state or federal courts located in Cook County, Illinois.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">8. Legal and Compliance Inquiries</h2>
            <p>
              For legal notifications or compliance inquiries, please address correspondence to:
            </p>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 space-y-1 text-xs text-slate-700">
              <strong className="text-slate-900 block text-sm">{siteConfig.name} Legal Department</strong>
              <p>Email: <a href={`mailto:${siteConfig.contact.email}`} className="text-blue-600 underline">{siteConfig.contact.email}</a></p>
              <p>Phone: {siteConfig.contact.phone}</p>
              <p>Address: {siteConfig.contact.street}, {siteConfig.contact.city}, {siteConfig.contact.state} {siteConfig.contact.zip}, United States</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
