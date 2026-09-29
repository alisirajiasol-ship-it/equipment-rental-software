import type { Metadata } from "next";
import { siteConfig } from "@/data/siteData";
import ContactForm from "./ContactForm";
import { MapPin, Phone, Mail, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us & Support",
  description:
    "Contact Equipment Rental Software team in Northlake, IL. Call (708) 562-1403 or email hello@equipmentrentalsoftware.io for software support and live demos.",
  alternates: {
    canonical: "/contact-us",
  },
  openGraph: {
    title: "Contact Us & Support | Equipment Rental Software",
    description:
      "Contact Equipment Rental Software team in Northlake, IL. Call (708) 562-1403 or email hello@equipmentrentalsoftware.io for software support and live demos.",
    url: `${siteConfig.baseUrl}/contact-us`,
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${siteConfig.baseUrl}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: "Contact Us - Equipment Rental Software",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us & Support | Equipment Rental Software",
    description:
      "Contact Equipment Rental Software team in Northlake, IL. Call (708) 562-1403 or email hello@equipmentrentalsoftware.io for software support and live demos.",
    images: [`${siteConfig.baseUrl}/opengraph-image`],
  },
};

export default function ContactUsPage() {
  const contactPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Equipment Rental Software",
    url: `${siteConfig.baseUrl}/contact-us`,
    mainEntity: {
      "@type": "LocalBusiness",
      name: siteConfig.name,
      telephone: siteConfig.contact.phone,
      email: siteConfig.contact.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: siteConfig.contact.street,
        addressLocality: siteConfig.contact.city,
        addressRegion: siteConfig.contact.stateCode,
        postalCode: siteConfig.contact.zip,
        addressCountry: siteConfig.contact.countryCode,
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: siteConfig.contact.latitude,
        longitude: siteConfig.contact.longitude,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "07:00",
          closes: "18:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Saturday",
          opens: "08:00",
          closes: "13:00",
        },
      ],
    },
  };

  return (
    <div className="flex flex-col py-12 sm:py-20 bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageJsonLd) }}
      />

      {/* Header */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center mb-16">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3.5 py-1 text-xs font-bold text-slate-800 uppercase tracking-wider mb-4 border border-slate-200">
          Get In Touch
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
          We are Here to Help You Streamline Your Rental Fleet
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-slate-600">
          Have questions about implementation, pricing tiers, or hardware integrations? Our dedicated team is ready to assist.
        </p>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Info Panel */}
          <div className="lg:col-span-5 space-y-8">
            <div className="rounded-3xl border border-slate-200 bg-slate-50/70 p-8 space-y-6">
              <h2 className="text-xl font-bold text-slate-900">
                Direct Contact Information
              </h2>

              <div className="space-y-4 text-sm">
                {/* Phone */}
                <div className="flex items-start gap-3.5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-white shrink-0">
                    <Phone className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                      Direct Telephone
                    </span>
                    <a
                      href={`tel:${siteConfig.contact.phone.replace(/[^0-9]/g, "")}`}
                      className="text-base font-bold text-slate-900 hover:underline"
                    >
                      {siteConfig.contact.phone}
                    </a>
                    <span className="text-xs text-slate-500 block">
                      Mon - Fri, 7:00 AM - 6:00 PM CST
                    </span>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-white shrink-0">
                    <Mail className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                      General & Support Inquiries
                    </span>
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="text-base font-bold text-slate-900 hover:underline"
                    >
                      {siteConfig.contact.email}
                    </a>
                    <span className="text-xs text-slate-500 block">
                      Under 2-hour response SLA
                    </span>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-3.5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-white shrink-0">
                    <MapPin className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                      Corporate Headquarters
                    </span>
                    <p className="text-sm font-semibold text-slate-900 leading-snug">
                      {siteConfig.contact.street}
                      <br />
                      {siteConfig.contact.city}, {siteConfig.contact.state}{" "}
                      {siteConfig.contact.zip}
                      <br />
                      {siteConfig.contact.country}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form Card */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-slate-200/90 bg-white p-8 sm:p-10 shadow-lg">
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 mb-2">
                Send Us a Message
              </h2>
              <p className="text-sm text-slate-600 mb-8">
                Fill out the details below and an equipment rental operations specialist will reach out promptly.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
