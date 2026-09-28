"use client";

import { useState } from "react";
import { siteConfig } from "@/data/siteData";
import { Mail, Phone, ExternalLink, X, MessageSquare, Clock } from "lucide-react";

export default function SideGmailContact() {
  const [isOpen, setIsOpen] = useState(false);

  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    siteConfig.contact.email
  )}&su=${encodeURIComponent("Equipment Rental Software - Fleet Inquiry")}`;

  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex items-center">
      {/* Side Trigger Tab */}
      {!isOpen && (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="group flex items-center gap-2.5 rounded-l-2xl bg-slate-900 border-l border-y border-slate-700/80 p-3 sm:py-3.5 sm:px-4 text-white shadow-2xl transition-all duration-300 hover:bg-blue-600 hover:shadow-blue-500/25 cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-blue-400"
          aria-label="Open side Gmail contact window"
        >
          {/* Gmail Envelope Icon */}
          <div className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-red-600 text-white shadow-xs group-hover:scale-110 transition-transform">
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
          </div>
          <div className="hidden sm:flex flex-col text-left">
            <span className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider group-hover:text-blue-100">
              Need Help?
            </span>
            <span className="text-xs font-bold text-white tracking-tight">
              Email &amp; Gmail
            </span>
          </div>
        </button>
      )}

      {/* Expanded Side Contact Card */}
      {isOpen && (
        <div className="mr-3 w-80 sm:w-92 rounded-3xl border border-slate-200 bg-white p-6 shadow-2xl transition-all duration-300 animate-in fade-in slide-in-from-right-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-red-600 text-white shadow-xs">
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900 leading-tight">
                  Direct Fleet Support
                </h3>
                <span className="text-xs text-slate-500">
                  EquipmentRentalSoftware.io
                </span>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition"
              aria-label="Close contact window"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <p className="text-xs text-slate-600 leading-relaxed mb-4">
            Have questions about equipment onboarding, rate matrices, or fleet integrations? Send an email directly to our Northlake operations team.
          </p>

          <div className="space-y-2.5">
            {/* Direct Gmail One-Click Compose */}
            <a
              href={gmailComposeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-xl bg-red-600 hover:bg-red-700 text-white px-4 py-3 text-xs font-bold shadow-xs transition-all duration-200"
            >
              <span className="flex items-center gap-2">
                <Mail className="h-4 w-4" aria-hidden="true" />
                <span>Compose in Gmail</span>
              </span>
              <ExternalLink className="h-3.5 w-3.5 text-red-200" aria-hidden="true" />
            </a>

            {/* Standard Mail App */}
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-800 px-4 py-2.5 text-xs font-semibold transition-all duration-200"
            >
              <span className="flex items-center gap-2">
                <MessageSquare className="h-4 w-4 text-slate-500" aria-hidden="true" />
                <span>Default Mail App</span>
              </span>
              <span className="text-[11px] font-mono text-slate-500">
                {siteConfig.contact.email}
              </span>
            </a>

            {/* Direct Phone */}
            <a
              href={`tel:${siteConfig.contact.phone.replace(/[^0-9]/g, "")}`}
              className="flex items-center justify-between rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-800 px-4 py-2.5 text-xs font-semibold transition-all duration-200"
            >
              <span className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-blue-600" aria-hidden="true" />
                <span>Call Operations</span>
              </span>
              <span className="text-xs font-bold text-slate-900">
                {siteConfig.contact.phone}
              </span>
            </a>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
            <span className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5 text-emerald-600 shrink-0" aria-hidden="true" />
              <span>Response SLA: Under 2 hours</span>
            </span>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-slate-600 font-medium"
            >
              Dismiss
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
