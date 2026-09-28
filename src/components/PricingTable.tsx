"use client";

import { useState } from "react";
import Link from "next/link";
import { pricingTiers, pricingMatrix } from "@/data/siteData";
import { Check, Minus, ArrowRight, Sparkles, Shield, HelpCircle } from "lucide-react";

export default function PricingTable({ showFullMatrix = true }: { showFullMatrix?: boolean }) {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <div className="w-full">
      {/* Billing Switch */}
      <div className="flex flex-col items-center justify-center gap-3 mb-14">
        <div className="inline-flex items-center rounded-full bg-slate-100 p-1.5 border border-slate-200 shadow-inner">
          <button
            type="button"
            onClick={() => setIsAnnual(false)}
            className={`rounded-full px-5 py-2 text-sm font-semibold transition-all duration-200 ${
              !isAnnual
                ? "bg-white text-slate-900 shadow-xs"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Monthly Billing
          </button>
          <button
            type="button"
            onClick={() => setIsAnnual(true)}
            className={`flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold transition-all duration-200 ${
              isAnnual
                ? "bg-slate-900 text-white shadow-xs"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            <span>Annual Billing</span>
            <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-bold text-emerald-800">
              Save 20%
            </span>
          </button>
        </div>
        <p className="text-xs text-slate-500 font-medium">
          All plans include a 14-day free trial. No credit card required to start.
        </p>
      </div>

      {/* 3 Tier Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-20 items-stretch">
        {pricingTiers.map((tier) => {
          const price = isAnnual ? tier.yearlyPrice : tier.monthlyPrice;
          return (
            <div
              key={tier.id}
              className={`relative flex flex-col justify-between rounded-3xl p-8 transition-all duration-300 ${
                tier.popular
                  ? "bg-slate-900 text-white shadow-2xl ring-2 ring-slate-900 md:-translate-y-2"
                  : "bg-white text-slate-900 border border-slate-200/90 shadow-sm hover:shadow-lg"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-sm">
                    <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                    Most Popular
                  </span>
                </div>
              )}

              <div>
                <div className="flex items-center justify-between gap-4 mb-2">
                  <h3 className="text-2xl font-bold tracking-tight">{tier.name}</h3>
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      tier.popular
                        ? "bg-slate-800 text-slate-200"
                        : "bg-slate-100 text-slate-700"
                    }`}
                  >
                    {tier.bestFor}
                  </span>
                </div>
                <p
                  className={`text-sm mb-6 ${
                    tier.popular ? "text-slate-300" : "text-slate-600"
                  }`}
                >
                  {tier.tagline}
                </p>

                {/* Price Display */}
                <div className="mb-6 pb-6 border-b border-slate-200/20">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl sm:text-5xl font-extrabold tracking-tight">
                      ${price}
                    </span>
                    <span
                      className={`text-sm font-medium ${
                        tier.popular ? "text-slate-300" : "text-slate-500"
                      }`}
                    >
                      /month
                    </span>
                  </div>
                  <span
                    className={`text-xs block mt-1 ${
                      tier.popular ? "text-slate-400" : "text-slate-500"
                    }`}
                  >
                    {isAnnual ? "Billed annually" : "Billed monthly"}
                  </span>
                </div>

                {/* Included Features List */}
                <div className="space-y-3 mb-8">
                  <p
                    className={`text-xs font-bold uppercase tracking-wider ${
                      tier.popular ? "text-slate-400" : "text-slate-500"
                    }`}
                  >
                    Plan Highlights
                  </p>
                  <ul className="space-y-3 text-sm">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div
                          className={`mt-0.5 rounded-full p-0.5 shrink-0 ${
                            tier.popular
                              ? "bg-blue-500/20 text-blue-400"
                              : "bg-slate-100 text-slate-700"
                          }`}
                        >
                          <Check className="h-4 w-4 stroke-[2.5]" aria-hidden="true" />
                        </div>
                        <span
                          className={tier.popular ? "text-slate-200" : "text-slate-700"}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <Link
                href={tier.ctaHref}
                className={`w-full inline-flex items-center justify-center gap-2 rounded-xl py-3.5 px-6 text-sm font-bold shadow-sm transition-all duration-200 ${
                  tier.popular
                    ? "bg-white text-slate-900 hover:bg-slate-100 hover:shadow-md"
                    : "bg-slate-900 text-white hover:bg-slate-800 hover:shadow-md"
                }`}
              >
                <span>{tier.ctaText}</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          );
        })}
      </div>

      {/* Complete Comparison Matrix (as specified in document) */}
      {showFullMatrix && (
        <div className="max-w-7xl mx-auto mt-16 pt-16 border-t border-slate-200">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Detailed Feature Comparison Matrix
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Compare capabilities side-by-side to choose the exact plan that matches your fleet size and operations.
            </p>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-slate-200 bg-white shadow-xs">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50/80">
                  <th className="py-5 px-6 text-sm font-bold text-slate-900 w-1/3">
                    Feature & Capability
                  </th>
                  <th className="py-5 px-6 text-sm font-bold text-slate-900 text-center w-1/5">
                    Starter
                    <span className="block text-xs font-normal text-slate-500 mt-0.5">
                      $39/mo
                    </span>
                  </th>
                  <th className="py-5 px-6 text-sm font-bold text-slate-900 text-center w-1/5 bg-slate-100/60">
                    Professional
                    <span className="block text-xs font-normal text-slate-500 mt-0.5">
                      $79/mo
                    </span>
                  </th>
                  <th className="py-5 px-6 text-sm font-bold text-slate-900 text-center w-1/5">
                    Business
                    <span className="block text-xs font-normal text-slate-500 mt-0.5">
                      $149/mo
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm">
                {pricingMatrix.map((item, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-slate-50/50 transition-colors"
                  >
                    <td className="py-4 px-6 font-medium text-slate-900">
                      {item.name}
                    </td>

                    {/* Starter Column */}
                    <td className="py-4 px-6 text-center text-slate-700">
                      {typeof item.starter === "boolean" ? (
                        item.starter ? (
                          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-slate-100 text-slate-900">
                            <Check className="h-4 w-4 stroke-[2.5]" aria-hidden="true" />
                          </span>
                        ) : (
                          <span className="inline-flex h-6 w-6 items-center justify-center text-slate-400">
                            <Minus className="h-4 w-4" aria-hidden="true" />
                          </span>
                        )
                      ) : (
                        <span className="font-semibold text-slate-800">
                          {item.starter}
                        </span>
                      )}
                    </td>

                    {/* Pro Column */}
                    <td className="py-4 px-6 text-center text-slate-700 bg-slate-50/40">
                      {typeof item.pro === "boolean" ? (
                        item.pro ? (
                          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                            <Check className="h-4 w-4 stroke-[2.5]" aria-hidden="true" />
                          </span>
                        ) : (
                          <span className="inline-flex h-6 w-6 items-center justify-center text-slate-400">
                            <Minus className="h-4 w-4" aria-hidden="true" />
                          </span>
                        )
                      ) : (
                        <span className="font-semibold text-slate-900">
                          {item.pro}
                        </span>
                      )}
                    </td>

                    {/* Business Column */}
                    <td className="py-4 px-6 text-center text-slate-700">
                      {typeof item.business === "boolean" ? (
                        item.business ? (
                          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-800">
                            <Check className="h-4 w-4 stroke-[2.5]" aria-hidden="true" />
                          </span>
                        ) : (
                          <span className="inline-flex h-6 w-6 items-center justify-center text-slate-400">
                            <Minus className="h-4 w-4" aria-hidden="true" />
                          </span>
                        )
                      ) : (
                        <span className="font-semibold text-slate-900">
                          {item.business}
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
