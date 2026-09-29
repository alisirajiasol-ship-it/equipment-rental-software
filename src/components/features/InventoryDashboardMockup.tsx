import { 
  Search, 
  Filter, 
  Plus, 
  CheckCircle2, 
  Clock, 
  AlertTriangle, 
  Wrench, 
  ArrowUpRight,
  TrendingUp,
  MapPin,
  SlidersHorizontal,
  ChevronDown
} from "lucide-react";

export default function InventoryDashboardMockup() {
  return (
    <div className="w-full rounded-2xl border border-slate-200/90 bg-white shadow-xl shadow-slate-200/50 overflow-hidden text-slate-800" aria-hidden="true">
      {/* SaaS Window Chrome / Title Bar */}
      <div className="flex items-center justify-between border-b border-slate-200 bg-slate-50/80 px-4 py-2.5">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-rose-400/80" />
          <div className="h-3 w-3 rounded-full bg-amber-400/80" />
          <div className="h-3 w-3 rounded-full bg-emerald-400/80" />
          <span className="ml-2 text-xs font-semibold text-slate-600 font-mono">
            app.equipmentrentalsoftware.io/inventory/fleet
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-700 border border-emerald-200/60">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Live Depot Sync
          </span>
        </div>
      </div>

      {/* Dashboard Top Metric Strip */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 border-b border-slate-100 bg-slate-50/40">
        <div className="rounded-xl border border-slate-200/80 bg-white p-3 shadow-xs">
          <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">Total Fleet</span>
          <div className="mt-1 flex items-baseline justify-between">
            <span className="text-xl font-bold text-slate-900">142</span>
            <span className="text-[10px] font-semibold text-emerald-600 flex items-center">
              <TrendingUp className="h-3 w-3 mr-0.5" /> +8 this mo
            </span>
          </div>
        </div>
        <div className="rounded-xl border border-slate-200/80 bg-white p-3 shadow-xs">
          <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">Available</span>
          <div className="mt-1 flex items-baseline justify-between">
            <span className="text-xl font-bold text-emerald-600">48</span>
            <span className="rounded-full bg-emerald-100/70 px-1.5 py-0.5 text-[10px] font-bold text-emerald-800">Ready</span>
          </div>
        </div>
        <div className="rounded-xl border border-slate-200/80 bg-white p-3 shadow-xs">
          <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">On Rent</span>
          <div className="mt-1 flex items-baseline justify-between">
            <span className="text-xl font-bold text-blue-600">82</span>
            <span className="rounded-full bg-blue-100/70 px-1.5 py-0.5 text-[10px] font-bold text-blue-800">57.7%</span>
          </div>
        </div>
        <div className="rounded-xl border border-slate-200/80 bg-white p-3 shadow-xs">
          <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">Service Due</span>
          <div className="mt-1 flex items-baseline justify-between">
            <span className="text-xl font-bold text-amber-600">12</span>
            <span className="rounded-full bg-amber-100/70 px-1.5 py-0.5 text-[10px] font-bold text-amber-800">Scheduled</span>
          </div>
        </div>
      </div>

      {/* Control Toolbar */}
      <div className="p-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 border-b border-slate-100">
        <div className="flex items-center gap-2 flex-1 max-w-md">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400" />
            <input 
              type="text" 
              readOnly 
              value="CAT 320 Excavator" 
              className="w-full rounded-lg border border-slate-200 bg-slate-50/70 pl-8 pr-3 py-1.5 text-xs text-slate-800 font-medium focus:outline-hidden"
            />
          </div>
          <button className="flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 shadow-2xs shrink-0">
            <SlidersHorizontal className="h-3 w-3 text-slate-500" />
            <span>Northlake Yard A</span>
            <ChevronDown className="h-3 w-3 text-slate-400" />
          </button>
        </div>

        <button className="flex items-center justify-center gap-1.5 rounded-lg bg-blue-600 px-3.5 py-1.5 text-xs font-bold text-white shadow-xs hover:bg-blue-700 transition-colors shrink-0">
          <Plus className="h-3.5 w-3.5" />
          <span>Add Equipment</span>
        </button>
      </div>

      {/* Realistic Equipment Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr className="border-b border-slate-200/90 bg-slate-50/60 text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
              <th className="py-2.5 px-3.5">Asset / Equipment</th>
              <th className="py-2.5 px-3">Location</th>
              <th className="py-2.5 px-3">Status</th>
              <th className="py-2.5 px-3">Next Service</th>
              <th className="py-2.5 px-3 text-right">Daily Rate</th>
              <th className="py-2.5 px-3 text-center">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {/* Row 1 - Selected CAT 320 */}
            <tr className="bg-blue-50/30 hover:bg-blue-50/50 transition-colors">
              <td className="py-2.5 px-3.5">
                <div className="flex items-center gap-2.5">
                  <div className="h-8 w-8 rounded-lg bg-slate-800 text-white flex items-center justify-center text-[10px] font-bold shrink-0 shadow-xs">
                    CAT
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block leading-tight">CAT 320 Hydraulic Excavator</span>
                    <span className="text-[10px] text-slate-500 font-mono">Tag #EX-104 • VIN: CAT0320VJW88</span>
                  </div>
                </div>
              </td>
              <td className="py-2.5 px-3">
                <span className="font-medium text-slate-700">Northlake Yard A</span>
              </td>
              <td className="py-2.5 px-3">
                <span className="inline-flex items-center gap-1 rounded-full bg-blue-100 px-2 py-0.5 text-[10px] font-bold text-blue-800">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                  Rented Out
                </span>
              </td>
              <td className="py-2.5 px-3">
                <span className="font-semibold text-amber-700 flex items-center gap-1">
                  <AlertTriangle className="h-3 w-3" /> Due in 15 hrs
                </span>
              </td>
              <td className="py-2.5 px-3 text-right font-bold text-slate-900">
                $650.00
              </td>
              <td className="py-2.5 px-3 text-center">
                <span className="rounded-md border border-blue-200 bg-blue-50 px-2 py-1 text-[10px] font-bold text-blue-700">
                  Manage
                </span>
              </td>
            </tr>

            {/* Row 2 - Boom Lift */}
            <tr className="hover:bg-slate-50/70 transition-colors">
              <td className="py-2.5 px-3.5">
                <div className="flex items-center gap-2.5">
                  <div className="h-8 w-8 rounded-lg bg-orange-600 text-white flex items-center justify-center text-[10px] font-bold shrink-0 shadow-xs">
                    JLG
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block leading-tight">JLG 860SJ Telescopic Boom Lift</span>
                    <span className="text-[10px] text-slate-500 font-mono">Tag #BL-082 • 86ft Platform</span>
                  </div>
                </div>
              </td>
              <td className="py-2.5 px-3">
                <span className="font-medium text-slate-700">Chicago Yard B</span>
              </td>
              <td className="py-2.5 px-3">
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-bold text-emerald-800">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
                  Ready to Rent
                </span>
              </td>
              <td className="py-2.5 px-3">
                <span className="text-slate-600 font-medium">In 120 hrs</span>
              </td>
              <td className="py-2.5 px-3 text-right font-bold text-slate-900">
                $420.00
              </td>
              <td className="py-2.5 px-3 text-center">
                <span className="rounded-md border border-slate-200 bg-white px-2 py-1 text-[10px] font-bold text-slate-700">
                  Book
                </span>
              </td>
            </tr>

            {/* Row 3 - Skid Steer */}
            <tr className="hover:bg-slate-50/70 transition-colors">
              <td className="py-2.5 px-3.5">
                <div className="flex items-center gap-2.5">
                  <div className="h-8 w-8 rounded-lg bg-slate-700 text-white flex items-center justify-center text-[10px] font-bold shrink-0 shadow-xs">
                    BC
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block leading-tight">Bobcat T770 Compact Track Loader</span>
                    <span className="text-[10px] text-slate-500 font-mono">Tag #SK-201 • High-Flow Aux</span>
                  </div>
                </div>
              </td>
              <td className="py-2.5 px-3">
                <span className="font-medium text-slate-700">Northlake Yard A</span>
              </td>
              <td className="py-2.5 px-3">
                <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-bold text-amber-800">
                  <Wrench className="h-2.5 w-2.5" />
                  Inspection
                </span>
              </td>
              <td className="py-2.5 px-3">
                <span className="text-slate-600 font-medium">Annual OSHA</span>
              </td>
              <td className="py-2.5 px-3 text-right font-bold text-slate-900">
                $360.00
              </td>
              <td className="py-2.5 px-3 text-center">
                <span className="rounded-md border border-slate-200 bg-white px-2 py-1 text-[10px] font-bold text-slate-700">
                  Inspect
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Selected Machine Detail Card Preview */}
      <div className="p-3.5 bg-slate-900 text-white flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-3">
          <div className="h-7 w-7 rounded-md bg-blue-600 flex items-center justify-center font-bold text-white text-[11px] shrink-0">
            ✓
          </div>
          <div>
            <span className="font-bold text-white block">Active Hire: Apex Infrastructure LLC (Contract #CR-4402)</span>
            <span className="text-[11px] text-slate-300">Meter: 485.4 Operating Hours • Jobsite: Interstate 294 Expansion</span>
          </div>
        </div>
        <div className="flex items-center gap-2 self-end sm:self-auto shrink-0">
          <span className="text-[11px] text-slate-400">Scheduled Return: Friday, 4:00 PM</span>
        </div>
      </div>
    </div>
  );
}
