import { 
  Calendar as CalendarIcon, 
  ChevronLeft, 
  ChevronRight, 
  Plus, 
  ShieldCheck, 
  Clock, 
  CheckCircle2, 
  User,
  SlidersHorizontal
} from "lucide-react";

export default function BookingCalendarMockup() {
  return (
    <div className="w-full rounded-2xl border border-slate-200/90 bg-white shadow-xl shadow-slate-200/50 overflow-hidden text-slate-800" aria-hidden="true">
      {/* SaaS Window Chrome / Title Bar */}
      <div className="flex items-center justify-between border-b border-slate-200 bg-slate-50/80 px-4 py-2.5">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-rose-400/80" />
          <div className="h-3 w-3 rounded-full bg-amber-400/80" />
          <div className="h-3 w-3 rounded-full bg-emerald-400/80" />
          <span className="ml-2 text-xs font-semibold text-slate-600 font-mono">
            app.equipmentrentalsoftware.io/dispatch/schedule
          </span>
        </div>
        <div className="flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-0.5 text-[11px] font-bold text-emerald-700 border border-emerald-200/70">
          <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
          <span>Zero-Collision Protected</span>
        </div>
      </div>

      {/* Calendar Toolbar */}
      <div className="p-4 flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 bg-slate-50/40">
        <div className="flex items-center gap-3">
          <div className="flex items-center rounded-lg border border-slate-200 bg-white shadow-2xs">
            <button className="p-1.5 hover:bg-slate-50 text-slate-600 border-r border-slate-200">
              <ChevronLeft className="h-3.5 w-3.5" />
            </button>
            <span className="px-3 py-1 text-xs font-bold text-slate-900">
              Oct 12 – Oct 18, 2026
            </span>
            <button className="p-1.5 hover:bg-slate-50 text-slate-600 border-l border-slate-200">
              <ChevronRight className="h-3.5 w-3.5" />
            </button>
          </div>

          <div className="hidden sm:flex items-center rounded-lg border border-slate-200 bg-white p-0.5 text-xs font-semibold">
            <span className="rounded-md bg-blue-50 text-blue-700 px-2.5 py-1">Week View</span>
            <span className="text-slate-600 px-2.5 py-1 hover:text-slate-900 cursor-pointer">Month</span>
            <span className="text-slate-600 px-2.5 py-1 hover:text-slate-900 cursor-pointer">Timeline</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button className="flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 shadow-2xs">
            <SlidersHorizontal className="h-3 w-3 text-slate-400" />
            <span>Northlake Yard</span>
          </button>
          <button className="flex items-center gap-1.5 rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-bold text-white shadow-xs hover:bg-blue-700">
            <Plus className="h-3.5 w-3.5" />
            <span>Create Booking</span>
          </button>
        </div>
      </div>

      {/* Gantt Timeline Grid */}
      <div className="overflow-x-auto">
        <div className="min-w-[580px]">
          {/* Days Header */}
          <div className="grid grid-cols-8 border-b border-slate-200/90 bg-slate-50/70 text-[11px] font-semibold text-slate-500 uppercase tracking-wider text-center">
            <div className="py-2 px-3 text-left border-r border-slate-200/70">Machine / Unit</div>
            <div className="py-2 border-r border-slate-200/40">Mon 12</div>
            <div className="py-2 border-r border-slate-200/40">Tue 13</div>
            <div className="py-2 border-r border-slate-200/40">Wed 14</div>
            <div className="py-2 border-r border-slate-200/40 bg-blue-50/30 text-blue-800 font-bold">Thu 15 (Today)</div>
            <div className="py-2 border-r border-slate-200/40">Fri 16</div>
            <div className="py-2 border-r border-slate-200/40">Sat 17</div>
            <div className="py-2">Sun 18</div>
          </div>

          {/* Machine Row 1: CAT 320 Excavator */}
          <div className="grid grid-cols-8 border-b border-slate-100 items-center hover:bg-slate-50/40 transition-colors">
            <div className="p-3 border-r border-slate-200/70">
              <span className="font-bold text-xs text-slate-900 block leading-tight">CAT 320 Excavator</span>
              <span className="text-[10px] text-slate-500 font-mono">#EX-104 • Tracked</span>
            </div>
            {/* 7 Days Timeline Area */}
            <div className="col-span-7 p-2 grid grid-cols-7 gap-1 relative h-14 items-center">
              {/* Mon to Thu: Apex Infrastructure Rental */}
              <div className="col-span-4 h-9 rounded-lg bg-blue-600 text-white px-2.5 flex items-center justify-between shadow-xs border border-blue-700/50">
                <div className="truncate">
                  <span className="font-bold text-[11px] block truncate">Apex Infrastructure LLC (#OR-8921)</span>
                  <span className="text-[9px] text-blue-100 block">4-Day Commercial Hire • $650/day</span>
                </div>
                <span className="rounded bg-blue-700/80 px-1.5 py-0.5 text-[9px] font-bold text-white uppercase ml-1 shrink-0">Rented</span>
              </div>
              {/* Fri to Sun: Turner Construction Reserved */}
              <div className="col-span-3 h-9 rounded-lg bg-teal-600/90 text-white px-2.5 flex items-center justify-between shadow-xs border border-teal-700/50">
                <div className="truncate">
                  <span className="font-bold text-[11px] block truncate">Turner Construction</span>
                  <span className="text-[9px] text-teal-100 block">Reserved • Confirmed</span>
                </div>
                <span className="rounded bg-teal-800/80 px-1.5 py-0.5 text-[9px] font-bold text-white uppercase ml-1 shrink-0">Reserved</span>
              </div>
            </div>
          </div>

          {/* Machine Row 2: Boom Lift */}
          <div className="grid grid-cols-8 border-b border-slate-100 items-center hover:bg-slate-50/40 transition-colors">
            <div className="p-3 border-r border-slate-200/70">
              <span className="font-bold text-xs text-slate-900 block leading-tight">JLG 860SJ Boom Lift</span>
              <span className="text-[10px] text-slate-500 font-mono">#BL-082 • 86ft</span>
            </div>
            <div className="col-span-7 p-2 grid grid-cols-7 gap-1 relative h-14 items-center">
              {/* Mon-Tue: Available */}
              <div className="col-span-2 h-9 rounded-lg border border-dashed border-emerald-300 bg-emerald-50/60 px-2 flex items-center justify-center text-center">
                <span className="text-[10px] font-bold text-emerald-700 flex items-center gap-1">
                  <CheckCircle2 className="h-3 w-3" /> Ready in Yard
                </span>
              </div>
              {/* Wed-Sat: Midwest Glazing */}
              <div className="col-span-4 h-9 rounded-lg bg-indigo-600 text-white px-2.5 flex items-center justify-between shadow-xs border border-indigo-700/50">
                <div className="truncate">
                  <span className="font-bold text-[11px] block truncate">Midwest Glazing Partners (#OR-8944)</span>
                  <span className="text-[9px] text-indigo-100 block">High-Rise Façade Contract</span>
                </div>
                <span className="rounded bg-indigo-700/80 px-1.5 py-0.5 text-[9px] font-bold text-white uppercase ml-1 shrink-0">Rented</span>
              </div>
              {/* Sun: Buffer */}
              <div className="col-span-1 h-9 rounded-lg bg-amber-50 border border-amber-200 px-1.5 flex items-center justify-center text-center">
                <span className="text-[9px] font-bold text-amber-800 leading-tight">4h Prep Buffer</span>
              </div>
            </div>
          </div>

          {/* Machine Row 3: Generator */}
          <div className="grid grid-cols-8 border-b border-slate-100 items-center hover:bg-slate-50/40 transition-colors">
            <div className="p-3 border-r border-slate-200/70">
              <span className="font-bold text-xs text-slate-900 block leading-tight">Wacker 70kVA Generator</span>
              <span className="text-[10px] text-slate-500 font-mono">#GN-015 • Towable</span>
            </div>
            <div className="col-span-7 p-2 grid grid-cols-7 gap-1 relative h-14 items-center">
              {/* Mon-Wed: Oil & Tiler */}
              <div className="col-span-3 h-9 rounded-lg bg-blue-600 text-white px-2.5 flex items-center justify-between shadow-xs">
                <div className="truncate">
                  <span className="font-bold text-[11px] block truncate">Oil &amp; Tiler Services (#OR-8950)</span>
                  <span className="text-[9px] text-blue-100 block">Emergency Back-up Hire</span>
                </div>
                <span className="rounded bg-blue-700/80 px-1.5 py-0.5 text-[9px] font-bold text-white uppercase ml-1 shrink-0">Rented</span>
              </div>
              {/* Thu: Buffer */}
              <div className="col-span-1 h-9 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center text-center px-1">
                <span className="text-[9px] font-bold text-amber-800 leading-tight flex items-center gap-0.5">
                  <Clock className="h-2.5 w-2.5" /> Buffer
                </span>
              </div>
              {/* Fri-Sun: Available */}
              <div className="col-span-3 h-9 rounded-lg border border-dashed border-emerald-300 bg-emerald-50/60 px-2 flex items-center justify-center text-center">
                <span className="text-[10px] font-bold text-emerald-700 flex items-center gap-1">
                  <CheckCircle2 className="h-3 w-3" /> Available Online
                </span>
              </div>
            </div>
          </div>

          {/* Machine Row 4: Skid Steer */}
          <div className="grid grid-cols-8 items-center hover:bg-slate-50/40 transition-colors">
            <div className="p-3 border-r border-slate-200/70">
              <span className="font-bold text-xs text-slate-900 block leading-tight">Bobcat T770 Loader</span>
              <span className="text-[10px] text-slate-500 font-mono">#SK-201 • Auxiliary</span>
            </div>
            <div className="col-span-7 p-2 grid grid-cols-7 gap-1 relative h-14 items-center">
              {/* Mon to Sun: Monthly Contract */}
              <div className="col-span-7 h-9 rounded-lg bg-slate-900 text-white px-3 flex items-center justify-between shadow-xs">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-emerald-400" />
                  <span className="font-bold text-[11px]">Sterling Paving &amp; Concrete — 30-Day Project Master Lease</span>
                  <span className="text-[10px] text-slate-400 hidden sm:inline">($360/day • Rate Locked)</span>
                </div>
                <span className="rounded bg-slate-800 px-2 py-0.5 text-[9px] font-bold text-emerald-400 uppercase shrink-0">
                  Active Contract
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Conflict Prevention Notification Footer */}
      <div className="p-3 bg-slate-900 text-white flex items-center justify-between text-xs">
        <div className="flex items-center gap-2">
          <div className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 text-slate-950 font-bold text-[10px]">
            ✓
          </div>
          <span className="text-slate-200 text-[11px]">
            <strong className="text-white">Collision Shield Active:</strong> Automatic 4-hour return buffers lock units between bookings, preventing scheduling overlaps.
          </span>
        </div>
        <span className="hidden sm:inline-block text-[11px] text-emerald-400 font-semibold font-mono">
          0 Conflicts Detected
        </span>
      </div>
    </div>
  );
}
