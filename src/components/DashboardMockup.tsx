import {
  Boxes,
  Clock,
  DollarSign,
  Search,
  Truck,
  CheckCircle2,
  Wrench,
  Layers,
  Home,
  Check,
  Building,
} from "lucide-react";

export default function DashboardMockup() {
  return (
    <div className="relative mx-auto w-full rounded-3xl border border-slate-200/90 bg-white p-3 sm:p-5 shadow-2xl ring-1 ring-slate-900/5 text-left" aria-hidden="true">
      {/* Browser Bar Header */}
      <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4 px-1">
        <div className="flex items-center gap-1.5">
          <div className="h-2.5 w-2.5 rounded-full bg-slate-300"></div>
          <div className="h-2.5 w-2.5 rounded-full bg-slate-300"></div>
          <div className="h-2.5 w-2.5 rounded-full bg-slate-300"></div>
        </div>
        <div className="flex items-center rounded-lg bg-slate-100 px-4 py-1 text-xs font-mono text-slate-500">
          <span>app.equipmentrentalsoftware.io/dashboard</span>
        </div>
        <div className="flex items-center gap-1.5 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>+ Live Sync Active</span>
        </div>
      </div>

      {/* Top 4 Stat Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
        {/* Fleet Total */}
        <div className="rounded-2xl border border-slate-100 bg-slate-50/70 p-3.5">
          <div className="flex items-center justify-between text-slate-500 mb-1">
            <span className="text-xs font-semibold text-slate-600">Fleet Total</span>
            <Boxes className="h-3.5 w-3.5 text-slate-500" aria-hidden="true" />
          </div>
          <div className="text-2xl font-extrabold text-slate-900">142</div>
          <span className="text-[11px] font-medium text-emerald-600">+12% this month</span>
        </div>

        {/* Active Rentals */}
        <div className="rounded-2xl border border-slate-100 bg-slate-50/70 p-3.5">
          <div className="flex items-center justify-between text-slate-500 mb-1">
            <span className="text-xs font-semibold text-slate-600">Active Rentals</span>
            <Home className="h-3.5 w-3.5 text-blue-600" aria-hidden="true" />
          </div>
          <div className="text-2xl font-extrabold text-blue-600">89 Units</div>
          <span className="text-[11px] font-medium text-slate-500">On active jobsites</span>
        </div>

        {/* Due Returns */}
        <div className="rounded-2xl border border-slate-100 bg-slate-50/70 p-3.5">
          <div className="flex items-center justify-between text-slate-500 mb-1">
            <span className="text-xs font-semibold text-slate-600">Due Returns</span>
            <Clock className="h-3.5 w-3.5 text-amber-500" aria-hidden="true" />
          </div>
          <div className="text-2xl font-extrabold text-slate-900">12 Today</div>
          <span className="text-[11px] font-medium text-amber-600">4 pending check-ins</span>
        </div>

        {/* Month Revenue */}
        <div className="rounded-2xl border border-slate-100 bg-slate-50/70 p-3.5">
          <div className="flex items-center justify-between text-slate-500 mb-1">
            <span className="text-xs font-semibold text-slate-600">Month Revenue</span>
            <DollarSign className="h-3.5 w-3.5 text-slate-700" aria-hidden="true" />
          </div>
          <div className="text-2xl font-extrabold text-slate-900">$84,650</div>
          <span className="text-[11px] font-medium text-emerald-600">+18% vs last month</span>
        </div>
      </div>

      {/* Main Split Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* Left Side: Live Dispatch Table */}
        <div className="lg:col-span-8 rounded-2xl border border-slate-100 bg-white p-3.5 sm:p-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
            <div className="flex items-center gap-2">
              <Layers className="h-4 w-4 text-slate-700" aria-hidden="true" />
              <p className="text-xs sm:text-sm font-bold text-slate-900">
                Live Equipment Dispatch & Status
              </p>
            </div>
            <div className="flex items-center gap-1.5 rounded-lg border border-slate-200 px-2.5 py-1 text-xs text-slate-400">
              <Search className="h-3 w-3" aria-hidden="true" />
              <span>Search inventory...</span>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-slate-100 text-[11px] font-semibold text-slate-400">
                  <th className="pb-2 font-medium">Equipment / Asset</th>
                  <th className="pb-2 font-medium">Contract / Client</th>
                  <th className="pb-2 font-medium">Status</th>
                  <th className="pb-2 font-medium text-right">Daily Rate</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50 text-slate-700">
                {/* Row 1 */}
                <tr className="hover:bg-slate-50/50 transition-colors">
                  <td className="py-2.5">
                    <div className="flex items-center gap-2.5">
                      <div className="h-7 w-7 rounded-lg bg-amber-500/10 text-amber-600 flex items-center justify-center shrink-0">
                        <Truck className="h-4 w-4" aria-hidden="true" />
                      </div>
                      <div>
                        <span className="font-semibold text-slate-900 block text-xs">CAT 320 Excavator</span>
                        <span className="text-[10px] text-slate-400">#EX-104</span>
                      </div>
                    </div>
                  </td>
                  <td className="py-2.5 text-xs text-slate-600">Apex Infrastructure LLC</td>
                  <td className="py-2.5">
                    <span className="inline-flex rounded-full bg-blue-50 px-2 py-0.5 text-[10px] font-semibold text-blue-700 border border-blue-100">
                      Rented (Out)
                    </span>
                  </td>
                  <td className="py-2.5 text-right font-bold text-slate-900 text-xs">$850/day</td>
                </tr>

                {/* Row 2 */}
                <tr className="hover:bg-slate-50/50 transition-colors">
                  <td className="py-2.5">
                    <div className="flex items-center gap-2.5">
                      <div className="h-7 w-7 rounded-lg bg-blue-500/10 text-blue-600 flex items-center justify-center shrink-0">
                        <Layers className="h-4 w-4" aria-hidden="true" />
                      </div>
                      <div>
                        <span className="font-semibold text-slate-900 block text-xs">Genie S-65 Boom Lift</span>
                        <span className="text-[10px] text-slate-400">#BL-082</span>
                      </div>
                    </div>
                  </td>
                  <td className="py-2.5 text-xs text-slate-600">Midwest Glazing</td>
                  <td className="py-2.5">
                    <span className="inline-flex rounded-full bg-blue-50 px-2 py-0.5 text-[10px] font-semibold text-blue-700 border border-blue-100">
                      Rented (Out)
                    </span>
                  </td>
                  <td className="py-2.5 text-right font-bold text-slate-900 text-xs">$420/day</td>
                </tr>

                {/* Row 3 */}
                <tr className="hover:bg-slate-50/50 transition-colors">
                  <td className="py-2.5">
                    <div className="flex items-center gap-2.5">
                      <div className="h-7 w-7 rounded-lg bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0">
                        <Boxes className="h-4 w-4" aria-hidden="true" />
                      </div>
                      <div>
                        <span className="font-semibold text-slate-900 block text-xs">Bobcat T770 Loader</span>
                        <span className="text-[10px] text-slate-400">#SK-019</span>
                      </div>
                    </div>
                  </td>
                  <td className="py-2.5 text-xs text-slate-600">Available for Booking</td>
                  <td className="py-2.5">
                    <span className="inline-flex rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold text-emerald-700 border border-emerald-100">
                      Ready on Yard
                    </span>
                  </td>
                  <td className="py-2.5 text-right font-bold text-slate-900 text-xs">$365/day</td>
                </tr>

                {/* Row 4 */}
                <tr className="hover:bg-slate-50/50 transition-colors">
                  <td className="py-2.5">
                    <div className="flex items-center gap-2.5">
                      <div className="h-7 w-7 rounded-lg bg-red-500/10 text-red-600 flex items-center justify-center shrink-0">
                        <Wrench className="h-4 w-4" aria-hidden="true" />
                      </div>
                      <div>
                        <span className="font-semibold text-slate-900 block text-xs">Wacker Neuson Generator</span>
                        <span className="text-[10px] text-slate-400">#GN-055</span>
                      </div>
                    </div>
                  </td>
                  <td className="py-2.5 text-xs text-slate-600">Oil & Filter Service</td>
                  <td className="py-2.5">
                    <span className="inline-flex rounded-full bg-amber-50 px-2 py-0.5 text-[10px] font-semibold text-amber-700 border border-amber-100">
                      In Maintenance
                    </span>
                  </td>
                  <td className="py-2.5 text-right font-bold text-slate-900 text-xs">$290/day</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Right Side: Online Booking Engine Card */}
        <div className="lg:col-span-4 rounded-2xl border border-slate-100 bg-slate-50/60 p-3.5 sm:p-4 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-slate-800">
                Online Booking Engine
              </span>
              <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                Instant Hold
              </span>
            </div>

            {/* Reservation preview box */}
            <div className="rounded-xl border border-slate-200/80 bg-white p-3 mb-3 shadow-xs">
              <div className="flex items-start gap-2.5 mb-2">
                <div className="h-8 w-8 rounded-lg bg-amber-500/10 text-amber-600 flex items-center justify-center shrink-0">
                  <Truck className="h-4 w-4" aria-hidden="true" />
                </div>
                <div>
                  <span className="font-bold text-slate-900 block text-xs">
                    New Reservation #OR-8921
                  </span>
                  <span className="text-[11px] text-slate-500">5-Day Rental (Mon-Fri)</span>
                </div>
              </div>
              <div className="text-right border-t border-slate-100 pt-1.5">
                <span className="text-xs font-extrabold text-slate-900">$2,450.00</span>
              </div>
            </div>

            {/* Checklists */}
            <div className="space-y-2 mb-3 text-[11px]">
              <div className="flex items-center gap-2 text-slate-700">
                <CheckCircle2 className="h-3.5 w-3.5 text-blue-600 shrink-0" aria-hidden="true" />
                <div>
                  <strong className="text-slate-900 block font-semibold leading-tight">
                    Deposit & ID Verified
                  </strong>
                  <span className="text-slate-400 text-[10px]">
                    $1,000 security deposit pre-authorized
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-slate-700">
                <CheckCircle2 className="h-3.5 w-3.5 text-blue-600 shrink-0" aria-hidden="true" />
                <div>
                  <strong className="text-slate-900 block font-semibold leading-tight">
                    Pre-Delivery Inspection Passed
                  </strong>
                  <span className="text-slate-400 text-[10px]">
                    Safety checklist completed
                  </span>
                </div>
              </div>
            </div>
          </div>

          <button
            type="button"
            className="w-full rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold py-2.5 transition-colors shadow-xs"
          >
            View Reservation Details
          </button>
        </div>
      </div>
    </div>
  );
}
