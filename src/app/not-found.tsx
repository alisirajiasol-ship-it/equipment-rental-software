import Link from "next/link";
import { ArrowLeft, Home, Layers, DollarSign, Mail } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 - Page Not Found",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8 bg-slate-50/50">
      <div className="max-w-xl w-full text-center space-y-8 bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-sm">
        <div className="space-y-3">
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
            Error 404
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Page Not Found
          </h1>
          <p className="text-base text-slate-600 leading-relaxed max-w-md mx-auto">
            The page you are looking for doesn&apos;t exist or has moved. Explore the key sections of our equipment rental platform below.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
          <Link
            href="/"
            className="flex items-center gap-3 p-3.5 rounded-xl border border-slate-200 hover:border-blue-500 hover:bg-blue-50/30 transition-all text-slate-800 group"
          >
            <div className="h-9 w-9 rounded-lg bg-blue-100/70 text-blue-700 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <Home className="h-4.5 w-4.5" aria-hidden="true" />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900">Homepage</div>
              <div className="text-xs text-slate-500">Platform overview</div>
            </div>
          </Link>

          <Link
            href="/features"
            className="flex items-center gap-3 p-3.5 rounded-xl border border-slate-200 hover:border-blue-500 hover:bg-blue-50/30 transition-all text-slate-800 group"
          >
            <div className="h-9 w-9 rounded-lg bg-emerald-100/70 text-emerald-700 flex items-center justify-center shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
              <Layers className="h-4.5 w-4.5" aria-hidden="true" />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900">Features</div>
              <div className="text-xs text-slate-500">Asset tracking &amp; booking</div>
            </div>
          </Link>

          <Link
            href="/pricing"
            className="flex items-center gap-3 p-3.5 rounded-xl border border-slate-200 hover:border-blue-500 hover:bg-blue-50/30 transition-all text-slate-800 group"
          >
            <div className="h-9 w-9 rounded-lg bg-amber-100/70 text-amber-700 flex items-center justify-center shrink-0 group-hover:bg-amber-600 group-hover:text-white transition-colors">
              <DollarSign className="h-4.5 w-4.5" aria-hidden="true" />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900">Pricing</div>
              <div className="text-xs text-slate-500">Plans from $39/mo</div>
            </div>
          </Link>

          <Link
            href="/contact-us"
            className="flex items-center gap-3 p-3.5 rounded-xl border border-slate-200 hover:border-blue-500 hover:bg-blue-50/30 transition-all text-slate-800 group"
          >
            <div className="h-9 w-9 rounded-lg bg-purple-100/70 text-purple-700 flex items-center justify-center shrink-0 group-hover:bg-purple-600 group-hover:text-white transition-colors">
              <Mail className="h-4.5 w-4.5" aria-hidden="true" />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900">Contact Us</div>
              <div className="text-xs text-slate-500">Support &amp; live demos</div>
            </div>
          </Link>
        </div>

        <div className="pt-2">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-6 py-3 text-sm font-bold text-white hover:bg-blue-600 transition-colors shadow-sm"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            <span>Return to Homepage</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
