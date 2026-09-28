"use client";

import { useState } from "react";
import { faqs } from "@/data/siteData";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-4">
      {faqs.map((faq, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
              isOpen
                ? "border-slate-300 bg-white shadow-sm"
                : "border-slate-200/90 bg-slate-50/50 hover:bg-white hover:border-slate-300"
            }`}
          >
            <button
              type="button"
              onClick={() => toggle(idx)}
              className="flex w-full items-center justify-between gap-4 p-6 text-left"
              aria-expanded={isOpen}
            >
              <span className="text-base sm:text-lg font-bold text-slate-900">
                {faq.question}
              </span>
              <div
                className={`rounded-full p-1.5 transition-transform duration-200 shrink-0 ${
                  isOpen
                    ? "rotate-180 bg-slate-900 text-white"
                    : "bg-slate-200 text-slate-700"
                }`}
              >
                <ChevronDown className="h-4 w-4" aria-hidden="true" />
              </div>
            </button>
            {isOpen && (
              <div className="px-6 pb-6 pt-0 text-sm leading-relaxed text-slate-600 border-t border-slate-100 mt-2 pt-4">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
