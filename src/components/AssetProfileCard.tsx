import {
  FileText,
  Wrench,
  Clock,
  Layers,
  CheckCircle2,
  MoreHorizontal,
  Truck,
  FolderClosed,
  LineChart,
  LayoutGrid,
} from "lucide-react";

export default function AssetProfileCard() {
  return (
    <div className="rounded-3xl border border-slate-200/90 bg-white p-4 sm:p-6 shadow-xl ring-1 ring-slate-900/5 text-left">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-start">
        {/* Left Mini Sidebar */}
        <div className="md:col-span-3 border-b md:border-b-0 md:border-r border-slate-100 pb-4 md:pb-0 md:pr-4 space-y-1">
          <button
            type="button"
            className="flex w-full items-center gap-2 rounded-xl px-3 py-2 text-xs font-medium text-slate-500 hover:bg-slate-50"
          >
            <LayoutGrid className="h-3.5 w-3.5 text-slate-400" aria-hidden="true" />
            <span>Overview</span>
          </button>
          <button
            type="button"
            className="flex w-full items-center gap-2 rounded-xl bg-blue-600 px-3 py-2 text-xs font-semibold text-white shadow-xs"
          >
            <Layers className="h-3.5 w-3.5 text-white" aria-hidden="true" />
            <span>Details</span>
          </button>
          <button
            type="button"
            className="flex w-full items-center gap-2 rounded-xl px-3 py-2 text-xs font-medium text-slate-500 hover:bg-slate-50"
          >
            <Wrench className="h-3.5 w-3.5 text-slate-400" aria-hidden="true" />
            <span>Maintenance</span>
          </button>
          <button
            type="button"
            className="flex w-full items-center gap-2 rounded-xl px-3 py-2 text-xs font-medium text-slate-500 hover:bg-slate-50"
          >
            <FolderClosed className="h-3.5 w-3.5 text-slate-400" aria-hidden="true" />
            <span>Documents</span>
          </button>
          <button
            type="button"
            className="flex w-full items-center gap-2 rounded-xl px-3 py-2 text-xs font-medium text-slate-500 hover:bg-slate-50"
          >
            <Clock className="h-3.5 w-3.5 text-slate-400" aria-hidden="true" />
            <span>Timeline</span>
          </button>
          <button
            type="button"
            className="flex w-full items-center gap-2 rounded-xl px-3 py-2 text-xs font-medium text-slate-500 hover:bg-slate-50"
          >
            <LineChart className="h-3.5 w-3.5 text-slate-400" aria-hidden="true" />
            <span>Utilization</span>
          </button>
        </div>

        {/* Right Main Asset Profile Details */}
        <div className="md:col-span-9 space-y-5">
          {/* Header row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-600 shrink-0">
                <Truck className="h-6 w-6" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900 leading-tight">
                  CAT 320 Hydraulic Excavator
                </h3>
                <span className="text-xs text-slate-400 font-mono">
                  #CAT-320-891002
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="inline-flex rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 border border-emerald-200">
                Inspected &amp; Available
              </span>
              <button
                type="button"
                className="p-1 rounded-lg hover:bg-slate-100 text-slate-400"
                aria-label="More options"
              >
                <MoreHorizontal className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          </div>

          {/* 4 Stat Boxes */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
            <div className="rounded-xl bg-slate-50 p-3 border border-slate-100">
              <span className="text-slate-400 block text-[11px] mb-0.5">Engine Hours</span>
              <strong className="text-sm font-bold text-slate-900">1,420 hrs</strong>
            </div>

            <div className="rounded-xl bg-slate-50 p-3 border border-slate-100">
              <span className="text-slate-400 block text-[11px] mb-0.5">Next Service Due</span>
              <strong className="text-sm font-bold text-slate-900">1,500 hrs</strong>
              <span className="text-[10px] text-slate-400 block">(in 80 hrs)</span>
            </div>

            <div className="rounded-xl bg-slate-50 p-3 border border-slate-100">
              <span className="text-slate-400 block text-[11px] mb-0.5">Total Lifetime Revenue</span>
              <strong className="text-sm font-bold text-emerald-600">$142,800.00</strong>
            </div>

            <div className="rounded-xl bg-slate-50 p-3 border border-slate-100">
              <span className="text-slate-400 block text-[11px] mb-0.5">Current Location</span>
              <strong className="text-sm font-bold text-slate-900 block">Yard A</strong>
              <span className="text-[10px] text-slate-400 block">(Northlake, IL)</span>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="space-y-2">
            <span className="text-xs font-bold text-slate-800 uppercase tracking-wider block">
              Recent Activity
            </span>

            <div className="space-y-2 text-xs">
              <div className="flex items-center justify-between p-2.5 rounded-xl border border-slate-100 bg-slate-50/70">
                <div className="flex items-center gap-2.5">
                  <div className="h-6 w-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="font-semibold text-slate-900 block">
                      Pre-Rental Inspection
                    </span>
                    <span className="text-[11px] text-slate-400">
                      Completed by John D. &bull; Oct 10, 2026
                    </span>
                  </div>
                </div>
                <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-[10px] font-bold text-emerald-800">
                  Passed
                </span>
              </div>

              <div className="flex items-center justify-between p-2.5 rounded-xl border border-slate-100 bg-slate-50/70">
                <div className="flex items-center gap-2.5">
                  <div className="h-6 w-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                    <Wrench className="h-3.5 w-3.5" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="font-semibold text-slate-900 block">
                      Oil Change Service
                    </span>
                    <span className="text-[11px] text-slate-400">
                      Completed by Service Team &bull; Sep 28, 2026
                    </span>
                  </div>
                </div>
                <span className="rounded-full bg-blue-100 px-2.5 py-0.5 text-[10px] font-bold text-blue-800">
                  Completed
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
