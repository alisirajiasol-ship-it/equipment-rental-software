import {
  Wrench,
  Plus,
  CheckCircle2,
  AlertTriangle,
  Clock,
  Calendar,
  Layers,
} from "lucide-react";

export default function MaintenanceScheduleCard() {
  return (
    <div className="rounded-3xl border border-slate-200/90 bg-white p-4 sm:p-6 shadow-xl ring-1 ring-slate-900/5 text-left">
      {/* Header with Title and Add Service Button */}
      <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-4">
        <div>
          <h3 className="text-base font-bold text-slate-900 leading-tight">
            Maintenance Schedule
          </h3>
          <span className="text-xs text-slate-400">
            Real-time fleet service tracking &amp; hour meters
          </span>
        </div>
        <button
          type="button"
          className="inline-flex items-center gap-1.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-3 py-2 transition-colors shadow-xs"
        >
          <Plus className="h-3.5 w-3.5" aria-hidden="true" />
          <span>Add Service</span>
        </button>
      </div>

      {/* Maintenance Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs">
          <thead>
            <tr className="border-b border-slate-100 text-slate-400 font-semibold">
              <th className="pb-2.5 font-medium">Service Item</th>
              <th className="pb-2.5 font-medium">Interval</th>
              <th className="pb-2.5 font-medium">Next Due</th>
              <th className="pb-2.5 font-medium text-right">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50 text-slate-700">
            {/* Row 1 */}
            <tr className="hover:bg-slate-50/50 transition-colors">
              <td className="py-3">
                <div className="flex items-center gap-2.5">
                  <div className="h-7 w-7 rounded-lg bg-amber-500/10 text-amber-600 flex items-center justify-center shrink-0">
                    <Wrench className="h-3.5 w-3.5" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="font-semibold text-slate-900 block text-xs">
                      Engine Oil &amp; Filter
                    </span>
                    <span className="text-[10px] text-slate-400">CAT 320 Excavator</span>
                  </div>
                </div>
              </td>
              <td className="py-3 text-slate-600">250 hrs</td>
              <td className="py-3 text-slate-900 font-semibold">1,500 hrs</td>
              <td className="py-3 text-right">
                <span className="inline-flex rounded-full bg-amber-50 px-2.5 py-0.5 text-[10px] font-bold text-amber-700 border border-amber-200">
                  Due Soon
                </span>
              </td>
            </tr>

            {/* Row 2 */}
            <tr className="hover:bg-slate-50/50 transition-colors">
              <td className="py-3">
                <div className="flex items-center gap-2.5">
                  <div className="h-7 w-7 rounded-lg bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="font-semibold text-slate-900 block text-xs">
                      Hydraulic System
                    </span>
                    <span className="text-[10px] text-slate-400">Genie S-65 Boom Lift</span>
                  </div>
                </div>
              </td>
              <td className="py-3 text-slate-600">500 hrs</td>
              <td className="py-3 text-slate-900 font-semibold">1,750 hrs</td>
              <td className="py-3 text-right">
                <span className="inline-flex rounded-full bg-emerald-50 px-2.5 py-0.5 text-[10px] font-bold text-emerald-700 border border-emerald-200">
                  On Track
                </span>
              </td>
            </tr>

            {/* Row 3 */}
            <tr className="hover:bg-slate-50/50 transition-colors">
              <td className="py-3">
                <div className="flex items-center gap-2.5">
                  <div className="h-7 w-7 rounded-lg bg-blue-500/10 text-blue-600 flex items-center justify-center shrink-0">
                    <Layers className="h-3.5 w-3.5" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="font-semibold text-slate-900 block text-xs">
                      Tire Inspection
                    </span>
                    <span className="text-[10px] text-slate-400">Bobcat T770 Loader</span>
                  </div>
                </div>
              </td>
              <td className="py-3 text-slate-600">100 hrs</td>
              <td className="py-3 text-slate-900 font-semibold">1,420 hrs</td>
              <td className="py-3 text-right">
                <span className="inline-flex rounded-full bg-blue-50 px-2.5 py-0.5 text-[10px] font-bold text-blue-700 border border-blue-200">
                  Completed
                </span>
              </td>
            </tr>

            {/* Row 4 */}
            <tr className="hover:bg-slate-50/50 transition-colors">
              <td className="py-3">
                <div className="flex items-center gap-2.5">
                  <div className="h-7 w-7 rounded-lg bg-indigo-500/10 text-indigo-600 flex items-center justify-center shrink-0">
                    <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="font-semibold text-slate-900 block text-xs">
                      Safety Inspection
                    </span>
                    <span className="text-[10px] text-slate-400">Annual ANSI Standard</span>
                  </div>
                </div>
              </td>
              <td className="py-3 text-slate-600">30 days</td>
              <td className="py-3 text-slate-900 font-semibold">Oct 20, 2026</td>
              <td className="py-3 text-right">
                <span className="inline-flex rounded-full bg-indigo-50 px-2.5 py-0.5 text-[10px] font-bold text-indigo-700 border border-indigo-200">
                  Scheduled
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
