import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/siteData";
import { Shield, Lock, FileText, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Official Privacy Policy for Equipment Rental Software. Learn how we safeguard your rental fleet data, billing records, and customer information.",
  alternates: {
    canonical: "/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | Equipment Rental Software",
    description:
      "Official Privacy Policy for Equipment Rental Software. Learn how we safeguard your rental fleet data, billing records, and customer information.",
    url: `${siteConfig.baseUrl}/privacy-policy`,
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${siteConfig.baseUrl}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: "Privacy Policy - Equipment Rental Software",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Equipment Rental Software",
    description:
      "Official Privacy Policy for Equipment Rental Software. Learn how we safeguard your rental fleet data, billing records, and customer information.",
    images: [`${siteConfig.baseUrl}/opengraph-image`],
  },
};

export default function PrivacyPolicyPage() {
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
        name: "Privacy Policy",
        item: `${siteConfig.baseUrl}/privacy-policy`,
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
            Trust & Compliance
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Privacy Policy & Data Protection Framework
          </h1>
          <p className="mt-3 text-sm text-slate-500">
            Effective Date: January 1, 2026 | Last Updated: September 2026
          </p>
        </div>

        {/* Content Body */}
        <div className="prose prose-slate max-w-none space-y-8 text-sm leading-relaxed text-slate-700">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">1. Overview and Commitment</h2>
            <p>
              EquipmentRentalSoftware.io (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;), operated by {siteConfig.name}, respects the privacy of our subscribers, their staff, and their commercial equipment rental customers. This Privacy Policy outlines our transparent data practices concerning the collection, storage, protection, and disclosure of information gathered through our web platform and services.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">2. Categories of Information We Collect</h2>
            <p>To provide equipment inventory, reservations, customer verification, and accounting synchronization, we collect the following types of information:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
              <li>
                <strong className="text-slate-800">Account Credentials:</strong> Name, work email address, company name, telephone number, depot address, and administrative login credentials.
              </li>
              <li>
                <strong className="text-slate-800">Rental Customer & Contractor Records:</strong> Contact details, authorized driver/operator names, driver license identification numbers, certificates of liability insurance, and digital signature records.
              </li>
              <li>
                <strong className="text-slate-800">Equipment & Telematics Data:</strong> Machine serial numbers, VINs, GPS locations, engine hours, maintenance history, inspection photographs, and operational status logs.
              </li>
              <li>
                <strong className="text-slate-800">Billing & Payment Tokens:</strong> Payment transactions and security deposit holds are processed through PCI-DSS Level 1 certified gateways (e.g., Stripe). We store tokenized payment methods; raw credit card numbers never touch our servers.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">3. Purpose and Legal Grounds for Processing</h2>
            <p>We process collected data exclusively for legitimate business and operational requirements:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
              <li>Facilitating reservation scheduling, check-in, and check-out workflows.</li>
              <li>Generating accurate rental contracts, invoices, and accounting ledger synchronization.</li>
              <li>Enforcing automated preventative maintenance reminders to safeguard equipment safety.</li>
              <li>Securing deposits and managing loss prevention in the event of equipment damage or late returns.</li>
              <li>Complying with statutory tax, occupational safety, and financial record-keeping laws.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">4. Data Security and Infrastructure Safeguards</h2>
            <p>
              We maintain SOC2 Type II certified standards. All web traffic is strictly encrypted using Transport Layer Security (TLS 1.3). Data at rest is encrypted using military-grade AES-256 encryption. We implement continuous vulnerability scanning, role-based access control (RBAC), and automated multi-region daily backups.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">5. Third-Party Processors and Integrations</h2>
            <p>
              We never sell, rent, or trade your operational data to marketing brokers. Data is transmitted only to verified sub-processors required to deliver our core SaaS functionality:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
              <li><strong>Cloud Hosting & Edge Delivery:</strong> Vercel and AWS global edge infrastructure.</li>
              <li><strong>Payment Processing:</strong> Stripe (PCI-DSS Level 1 certified).</li>
              <li><strong>Accounting Synchronization:</strong> Intuit QuickBooks Online and Xero (upon user configuration).</li>
              <li><strong>Transactional Notifications:</strong> SendGrid and Twilio for SMS/email booking confirmations.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">6. Data Retention and Your Rights</h2>
            <p>
              You maintain ownership of your fleet and customer data. In accordance with applicable data protection legislation (including GDPR and CCPA), you may request a full export of your equipment data in JSON or CSV format, request corrections, or request complete account deletion at any time.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">7. Data Protection Contact</h2>
            <p>
              If you have any questions or data access requests regarding this Privacy Policy, please contact our designated privacy compliance officer:
            </p>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 space-y-1 text-xs text-slate-700">
              <strong className="text-slate-900 block text-sm">{siteConfig.name} Privacy Operations</strong>
              <p>Email: <a href={`mailto:${siteConfig.contact.email}`} className="text-blue-600 underline">{siteConfig.contact.email}</a></p>
              <p>Phone: {siteConfig.contact.phone}</p>
              <p>Mailing Address: {siteConfig.contact.street}, {siteConfig.contact.city}, {siteConfig.contact.state} {siteConfig.contact.zip}, United States</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
