import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/siteData";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200/90 bg-white text-slate-700">
      {/* Main Footer Links & Info */}
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-8 xl:gap-12 items-start">
          {/* Column 1: Brand & Slogan */}
          <div className="lg:col-span-4 space-y-4">
            <Link
              href="/"
              className="inline-block transition-opacity hover:opacity-95"
              aria-label="Equipment Rental Software Home"
            >
              <Image
                src="/images/logo.png"
                alt="EquipmentRentalSoftware.io"
                width={240}
                height={64}
                className="h-12 md:h-14 w-auto object-contain"
              />
            </Link>

            <p className="text-sm leading-relaxed text-slate-600 max-w-sm">
              A complete equipment rental management platform to track inventory, manage bookings, handle maintenance, and grow your business.
            </p>

            {/* Social Media Circular Buttons */}
            <div className="flex items-center gap-2.5 pt-1">
              {/* LinkedIn */}
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="h-8 w-8 rounded-full bg-slate-100 hover:bg-slate-200 border border-slate-200/80 flex items-center justify-center text-slate-600 hover:text-slate-950 transition-colors"
              >
                <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              {/* X / Twitter */}
              <a
                href={siteConfig.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="h-8 w-8 rounded-full bg-slate-100 hover:bg-slate-200 border border-slate-200/80 flex items-center justify-center text-slate-600 hover:text-slate-950 transition-colors"
              >
                <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: PLATFORM */}
          <div className="lg:col-span-2 lg:pl-2 xl:pl-4 space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-900">
              PLATFORM
            </p>
            <ul className="space-y-2.5 text-sm text-slate-600">
              <li>
                <Link href="/" className="hover:text-slate-900 transition-colors">
                  Overview
                </Link>
              </li>
              <li>
                <Link href="/features" className="hover:text-slate-900 transition-colors">
                  All Features
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-slate-900 transition-colors">
                  Pricing Plans
                </Link>
              </li>
              <li>
                <Link href="/features#inventory" className="hover:text-slate-900 transition-colors">
                  Asset Tracking
                </Link>
              </li>
              <li>
                <Link href="/features#maintenance" className="hover:text-slate-900 transition-colors">
                  Fleet Maintenance
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: COMPANY */}
          <div className="lg:col-span-3 lg:pl-2 xl:pl-6 space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-900">
              COMPANY
            </p>
            <ul className="space-y-2.5 text-sm text-slate-600">
              <li>
                <Link href="/about-us" className="hover:text-slate-900 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="hover:text-slate-900 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-slate-900 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-and-conditions" className="hover:text-slate-900 transition-colors">
                  Terms and Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: HEADQUARTERS */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-900">
              HEADQUARTERS
            </p>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5 text-slate-600">
                <MapPin className="h-4 w-4 text-slate-500 shrink-0 mt-0.5" aria-hidden="true" />
                <span className="leading-relaxed">
                  {siteConfig.contact.street}
                  <br />
                  {siteConfig.contact.city}, {siteConfig.contact.stateCode}{" "}
                  {siteConfig.contact.zip}
                  <br />
                  {siteConfig.contact.country}
                </span>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/[^0-9]/g, "")}`}
                  className="flex items-center gap-2.5 text-slate-600 hover:text-slate-900 transition-colors"
                >
                  <Phone className="h-4 w-4 text-slate-500 shrink-0" aria-hidden="true" />
                  <span>{siteConfig.contact.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex items-center gap-2.5 text-slate-600 hover:text-slate-900 transition-colors whitespace-nowrap"
                >
                  <Mail className="h-4 w-4 text-slate-500 shrink-0" aria-hidden="true" />
                  <span className="font-medium">{siteConfig.contact.email}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright & Legal Row with Vertical Separators */}
        <div className="mt-12 pt-6 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.domain}. All rights reserved.
          </p>
          <div className="flex items-center gap-3 sm:gap-4 text-slate-500">
            <span className="text-slate-300">|</span>
            <a href="/sitemap.xml" className="hover:text-slate-900 transition-colors">
              Sitemap
            </a>
            <span className="text-slate-300">|</span>
            <Link href="/privacy-policy" className="hover:text-slate-900 transition-colors">
              Privacy &amp; Cookies
            </Link>
            <span className="text-slate-300">|</span>
            <Link href="/contact-us" className="hover:text-slate-900 transition-colors">
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
