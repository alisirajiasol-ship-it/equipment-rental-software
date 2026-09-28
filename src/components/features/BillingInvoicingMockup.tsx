import { 
  CreditCard, 
  CheckCircle2, 
  Clock, 
  Download, 
  ArrowUpRight, 
  Shield, 
  DollarSign,
  FileText,
  Building2,
  Check
} from "lucide-react";

export default function BillingInvoicingMockup() {
  return (
    <div className="w-full rounded-2xl border border-slate-200/90 bg-white shadow-xl shadow-slate-200/50 overflow-hidden text-slate-800">
      {/* SaaS Window Chrome / Title Bar */}
      <div className="flex items-center justify-between border-b border-slate-200 bg-slate-50/80 px-4 py-2.5">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-rose-400/80" />
          <div className="h-3 w-3 rounded-full bg-amber-400/80" />
          <div className="h-3 w-3 rounded-full bg-emerald-400/80" />
          <span className="ml-2 text-xs font-semibold text-slate-600 font-mono">
            app.equipmentrentalsoftware.io/billing/invoices
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2.5 py-0.5 text-[11px] font-bold text-blue-700 border border-blue-200/70">
            <CreditCard className="h-3 w-3" />
            Stripe &amp; QuickBooks Synced
          </span>
        </div>
      </div>

      {/* Financial Health Summary Strip */}
      <div className="grid grid-cols-3 gap-3 p-3.5 border-b border-slate-100 bg-slate-50/40">
        <div className="rounded-xl border border-slate-200/80 bg-white p-2.5 shadow-xs">
          <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider block">Collected This Week</span>
          <span className="text-lg font-bold text-slate-900 mt-0.5 block">$42,890.00</span>
        </div>
        <div className="rounded-xl border border-slate-200/80 bg-white p-2.5 shadow-xs">
          <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider block">Active Deposit Holds</span>
          <span className="text-lg font-bold text-blue-600 mt-0.5 block">$12,500.00</span>
        </div>
        <div className="rounded-xl border border-slate-200/80 bg-white p-2.5 shadow-xs">
          <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider block">Outstanding Balances</span>
          <span className="text-lg font-bold text-amber-600 mt-0.5 block">$3,420.00</span>
        </div>
      </div>

      {/* Main Split Layout: Invoices Sidebar + Live High-Fidelity Invoice Preview */}
      <div className="grid grid-cols-1 md:grid-cols-12 divide-y md:divide-y-0 md:divide-x divide-slate-100">
        {/* Left Column: Recent Invoices Queue (4 cols) */}
        <div className="md:col-span-4 p-3 space-y-2 bg-slate-50/30">
          <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block px-1">
            Recent Invoices
          </span>

          {/* Selected Invoice: INV-2026-904 */}
          <div className="p-3 rounded-xl border-2 border-blue-600 bg-blue-50/50 shadow-xs cursor-pointer">
            <div className="flex items-center justify-between mb-1">
              <span className="font-bold text-xs text-blue-900 font-mono">#INV-2026-904</span>
              <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[9px] font-bold text-emerald-800">
                PAID
              </span>
            </div>
            <span className="font-bold text-xs text-slate-900 block truncate">Apex Infrastructure LLC</span>
            <div className="flex items-center justify-between mt-2 text-[11px]">
              <span className="text-slate-500">Oct 12, 2026</span>
              <span className="font-bold text-slate-900">$1,775.00</span>
            </div>
          </div>

          {/* Invoice 2 */}
          <div className="p-3 rounded-xl border border-slate-200 bg-white shadow-2xs hover:bg-slate-50 transition-colors">
            <div className="flex items-center justify-between mb-1">
              <span className="font-bold text-xs text-slate-700 font-mono">#INV-2026-905</span>
              <span className="rounded-full bg-blue-100 px-2 py-0.5 text-[9px] font-bold text-blue-800">
                PROCESSING
              </span>
            </div>
            <span className="font-semibold text-xs text-slate-800 block truncate">Midwest Glazing Partners</span>
            <div className="flex items-center justify-between mt-2 text-[11px]">
              <span className="text-slate-500">Oct 14, 2026</span>
              <span className="font-bold text-slate-900">$2,450.00</span>
            </div>
          </div>

          {/* Invoice 3 */}
          <div className="p-3 rounded-xl border border-slate-200 bg-white shadow-2xs hover:bg-slate-50 transition-colors">
            <div className="flex items-center justify-between mb-1">
              <span className="font-bold text-xs text-slate-700 font-mono">#INV-2026-906</span>
              <span className="rounded-full bg-amber-100 px-2 py-0.5 text-[9px] font-bold text-amber-800">
                HOLD ACTIVE
              </span>
            </div>
            <span className="font-semibold text-xs text-slate-800 block truncate">Sterling Paving Co.</span>
            <div className="flex items-center justify-between mt-2 text-[11px]">
              <span className="text-slate-500">Oct 15, 2026</span>
              <span className="font-bold text-slate-900">$850.00</span>
            </div>
          </div>
        </div>

        {/* Right Column: High-Fidelity Invoice Document Preview (8 cols) */}
        <div className="md:col-span-8 p-4 bg-white">
          <div className="rounded-xl border border-slate-200 bg-slate-50/30 p-4 space-y-4">
            {/* Invoice Top Header */}
            <div className="flex items-start justify-between border-b border-slate-200 pb-3">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-extrabold text-slate-900 tracking-tight">
                    Invoice #INV-2026-904
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2.5 py-0.5 text-[10px] font-bold text-emerald-800">
                    <Check className="h-3 w-3" /> PAID
                  </span>
                </div>
                <span className="text-[11px] text-slate-500 block mt-0.5">
                  Billed to: <strong className="text-slate-800">Apex Infrastructure LLC</strong> (Project: O&apos;Hare Terminal 5)
                </span>
              </div>
              <div className="text-right">
                <span className="text-xs text-slate-500 block">Total Amount Billed</span>
                <span className="text-xl font-extrabold text-emerald-600 block">$1,775.00</span>
              </div>
            </div>

            {/* Itemized Line Items Table */}
            <div className="space-y-2 text-xs">
              <div className="grid grid-cols-12 text-[10px] font-bold text-slate-500 uppercase tracking-wider border-b border-slate-100 pb-1">
                <div className="col-span-7">Rental Description</div>
                <div className="col-span-2 text-center">Duration</div>
                <div className="col-span-3 text-right">Amount</div>
              </div>

              <div className="grid grid-cols-12 py-1 border-b border-slate-100 items-center">
                <div className="col-span-7">
                  <span className="font-bold text-slate-900 block">Bobcat T770 Compact Track Loader</span>
                  <span className="text-[10px] text-slate-500">Asset Tag #SK-201 • Standard Tooth Bucket</span>
                </div>
                <div className="col-span-2 text-center text-slate-600 font-medium">1 Week</div>
                <div className="col-span-3 text-right font-bold text-slate-900">$1,450.00</div>
              </div>

              <div className="grid grid-cols-12 py-1 border-b border-slate-100 items-center">
                <div className="col-span-7">
                  <span className="font-semibold text-slate-800">Commercial Damage Waiver Protection</span>
                  <span className="text-[10px] text-slate-500">Comprehensive jobsite physical waiver</span>
                </div>
                <div className="col-span-2 text-center text-slate-600 font-medium">7 Days</div>
                <div className="col-span-3 text-right font-bold text-slate-900">$145.00</div>
              </div>

              <div className="grid grid-cols-12 py-1 border-b border-slate-100 items-center">
                <div className="col-span-7">
                  <span className="font-semibold text-slate-800">Depot Dispatch Delivery &amp; Pickup</span>
                  <span className="text-[10px] text-slate-500">Roundtrip flatbed transport from Yard A</span>
                </div>
                <div className="col-span-2 text-center text-slate-600 font-medium">Roundtrip</div>
                <div className="col-span-3 text-right font-bold text-slate-900">$180.00</div>
              </div>
            </div>

            {/* Financial Ledger & Security Deposit Hold Box */}
            <div className="rounded-lg bg-blue-50/60 border border-blue-200/80 p-2.5 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2 text-xs">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-blue-600 shrink-0" />
                <div>
                  <span className="font-bold text-blue-950 block text-[11px]">Security Deposit Pre-Auth Hold</span>
                  <span className="text-[10px] text-blue-800">
                    $1,000.00 pre-authorized on Visa ending in 4242 (Released upon return inspection)
                  </span>
                </div>
              </div>
              <span className="rounded bg-blue-600 text-white px-2 py-0.5 text-[10px] font-bold shrink-0 self-start sm:self-auto">
                Authorized
              </span>
            </div>

            {/* Footer Calculation & Actions */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 text-xs border-t border-slate-200">
              <div className="flex items-center gap-2 text-slate-600 text-[11px]">
                <span>Payment: <strong>Visa •••• 4242</strong> via Stripe</span>
                <span>•</span>
                <span className="text-emerald-700 font-semibold">QuickBooks Synced ✓</span>
              </div>
              <div className="flex items-center gap-2">
                <button className="flex items-center gap-1 rounded-md border border-slate-300 bg-white px-2.5 py-1 text-xs font-semibold text-slate-700 hover:bg-slate-50 shadow-2xs">
                  <Download className="h-3 w-3" />
                  <span>Download PDF</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
