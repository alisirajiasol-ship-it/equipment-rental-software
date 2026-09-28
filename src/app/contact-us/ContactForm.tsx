"use client";

import { useState } from "react";
import { CheckCircle2, Send, AlertCircle } from "lucide-react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    fleetSize: "10-50 units",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate instantaneous clean submission
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-3xl border border-emerald-200 bg-emerald-50/70 p-8 sm:p-10 text-center animate-in fade-in duration-300">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-600 text-white shadow-sm mb-4">
          <CheckCircle2 className="h-8 w-8" aria-hidden="true" />
        </div>
        <h3 className="text-xl font-bold text-slate-900">
          Inquiry Successfully Received
        </h3>
        <p className="mt-2 text-sm text-slate-600 max-w-md mx-auto">
          Thank you for reaching out to EquipmentRentalSoftware.io. An equipment software specialist will review your fleet requirements and contact you within 2 business hours.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-6 inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-2.5 text-xs font-bold text-white shadow-xs hover:bg-slate-800"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="name"
            className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
          >
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="John Doe"
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-slate-900 focus:outline-hidden focus:ring-1 focus:ring-slate-900"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
          >
            Work Email <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="john@equipmentcompany.com"
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-slate-900 focus:outline-hidden focus:ring-1 focus:ring-slate-900"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="company"
            className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
          >
            Company / Yard Name <span className="text-red-500">*</span>
          </label>
          <input
            id="company"
            type="text"
            required
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            placeholder="Apex Equipment Rentals"
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-slate-900 focus:outline-hidden focus:ring-1 focus:ring-slate-900"
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
          >
            Phone Number
          </label>
          <input
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="(708) 555-0199"
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-slate-900 focus:outline-hidden focus:ring-1 focus:ring-slate-900"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="fleetSize"
          className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
        >
          Estimated Fleet / Inventory Size
        </label>
        <select
          id="fleetSize"
          value={formData.fleetSize}
          onChange={(e) => setFormData({ ...formData, fleetSize: e.target.value })}
          className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 focus:border-slate-900 focus:outline-hidden focus:ring-1 focus:ring-slate-900"
        >
          <option value="1-10 units">1 - 10 Equipment Units (Starter)</option>
          <option value="11-50 units">11 - 50 Equipment Units (Professional)</option>
          <option value="51-200 units">51 - 200 Equipment Units (Business)</option>
          <option value="200+ units">200+ Enterprise Multi-Location Fleet</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
        >
          Tell us about your operations & goals
        </label>
        <textarea
          id="message"
          rows={4}
          required
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="What equipment categories do you manage? What current software or processes are you replacing?"
          className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-slate-900 focus:outline-hidden focus:ring-1 focus:ring-slate-900"
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-8 py-4 text-sm font-bold text-white shadow-sm hover:bg-blue-600 transition-all focus-visible:ring-2 focus-visible:ring-blue-600"
      >
        <span>Submit Inquiry</span>
        <Send className="h-4 w-4" aria-hidden="true" />
      </button>

      <p className="text-center text-[11px] text-slate-500">
        We respect your privacy. Zero spam. We never share or sell your business information.
      </p>
    </form>
  );
}
