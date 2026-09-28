import { 
  Wrench, 
  CheckCircle2, 
  AlertTriangle, 
  Clock, 
  Smartphone, 
  Camera, 
  UserCheck, 
  Gauge, 
  Check, 
  ChevronRight,
  ShieldAlert
} from "lucide-react";

export default function MaintenanceInspectionMockup() {
  return (
    <div className="w-full rounded-2xl border border-slate-200/90 bg-white shadow-xl shadow-slate-200/50 overflow-hidden text-slate-800">
      {/* SaaS Window Chrome / Title Bar */}
      <div className="flex items-center justify-between border-b border-slate-200 bg-slate-50/80 px-4 py-2.5">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-rose-400/80" />
          <div className="h-3 w-3 rounded-full bg-amber-400/80" />
          <div className="h-3 w-3 rounded-full bg-emerald-400/80" />
          <span className="ml-2 text-xs font-semibold text-slate-600 font-mono">
            app.equipmentrentalsoftware.io/maintenance/inspections
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-2.5 py-0.5 text-[11px] font-bold text-amber-800 border border-amber-200/70">
            <AlertTriangle className="h-3 w-3 text-amber-600" />
            1 Service Due Alert
          </span>
        </div>
      </div>

      {/* Main Container: Split View (Desktop Dashboard on Left, Mobile Inspection Screen on Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-slate-100 bg-slate-50/20">
        {/* Left: Machine Maintenance Profile & Preventive Checklist (7 cols) */}
        <div className="lg:col-span-7 p-4 space-y-4">
          {/* Machine Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-slate-900 text-white flex items-center justify-center font-bold text-xs shadow-xs">
                CAT
              </div>
              <div>
                <span className="font-bold text-sm text-slate-900 block leading-tight">
                  CAT 320 Hydraulic Excavator
                </span>
                <span className="text-[11px] text-slate-500 font-mono">
                  Asset Tag #EX-104 • Depot Yard A
                </span>
              </div>
            </div>
            <span className="rounded-full bg-blue-100 px-2.5 py-0.5 text-[10px] font-bold text-blue-800">
              Active Fleet Unit
            </span>
          </div>

          {/* Runtime Hour Meter Gauge */}
          <div className="rounded-xl border border-slate-200 bg-white p-3.5 shadow-xs">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <Gauge className="h-4 w-4 text-slate-500" />
                <span className="text-xs font-bold text-slate-700">Telematics Hour Meter</span>
              </div>
              <span className="text-sm font-extrabold text-slate-900 font-mono">485 operating hours</span>
            </div>

            {/* Meter Progress Bar */}
            <div className="space-y-1.5">
              <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
                <div className="bg-amber-500 h-2.5 rounded-full" style={{ width: "97%" }} />
              </div>
              <div className="flex justify-between text-[11px]">
                <span className="text-slate-500">Last Major Service: 250 hrs</span>
                <span className="font-bold text-amber-700 flex items-center gap-1">
                  <AlertTriangle className="h-3 w-3" /> Next Service: 500 hrs (15 hrs remaining)
                </span>
              </div>
            </div>
          </div>

          {/* Preventive Service Checklist (Directly from brief) */}
          <div className="space-y-2">
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block px-1">
              Active Service &amp; Inspection Checklist
            </span>

            <div className="space-y-1.5">
              {/* Item 1 */}
              <div className="rounded-lg border border-slate-200/90 bg-white p-2.5 flex items-center justify-between text-xs shadow-2xs">
                <div className="flex items-center gap-2.5">
                  <div className="h-5 w-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 shrink-0">
                    <Check className="h-3 w-3" />
                  </div>
                  <div>
                    <span className="font-semibold text-slate-900 block leading-tight">Hydraulic inspection &amp; line pressure</span>
                    <span className="text-[10px] text-slate-500">Tested: 3,500 PSI • Zero leaks detected</span>
                  </div>
                </div>
                <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">Passed</span>
              </div>

              {/* Item 2 */}
              <div className="rounded-lg border border-slate-200/90 bg-white p-2.5 flex items-center justify-between text-xs shadow-2xs">
                <div className="flex items-center gap-2.5">
                  <div className="h-5 w-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 shrink-0">
                    <Check className="h-3 w-3" />
                  </div>
                  <div>
                    <span className="font-semibold text-slate-900 block leading-tight">Engine compression &amp; cooling loop</span>
                    <span className="text-[10px] text-slate-500">Coolant temp normal • Radiator clean</span>
                  </div>
                </div>
                <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">Passed</span>
              </div>

              {/* Item 3 */}
              <div className="rounded-lg border border-slate-200/90 bg-white p-2.5 flex items-center justify-between text-xs shadow-2xs">
                <div className="flex items-center gap-2.5">
                  <div className="h-5 w-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 shrink-0">
                    <Check className="h-3 w-3" />
                  </div>
                  <div>
                    <span className="font-semibold text-slate-900 block leading-tight">Track tension &amp; undercarriage inspection</span>
                    <span className="text-[10px] text-slate-500">84% track life remaining</span>
                  </div>
                </div>
                <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">Passed</span>
              </div>

              {/* Item 4: Warning Alert (from brief) */}
              <div className="rounded-lg border border-amber-300 bg-amber-50/70 p-2.5 flex items-center justify-between text-xs shadow-2xs">
                <div className="flex items-center gap-2.5">
                  <div className="h-5 w-5 rounded-full bg-amber-200 flex items-center justify-center text-amber-800 shrink-0">
                    <AlertTriangle className="h-3 w-3" />
                  </div>
                  <div>
                    <span className="font-bold text-amber-950 block leading-tight">Oil service due</span>
                    <span className="text-[10px] text-amber-800">Triggered at 485 hrs • Booked for Yard return</span>
                  </div>
                </div>
                <span className="text-[10px] font-bold text-amber-900 bg-amber-200/80 px-2 py-0.5 rounded">Service Due</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Mobile Inspection Device Preview (5 cols) */}
        <div className="lg:col-span-5 p-4 bg-slate-100/70 flex flex-col justify-center items-center">
          {/* Smartphone Frame Container */}
          <div className="w-full max-w-[260px] rounded-2xl border-4 border-slate-800 bg-white p-3 shadow-lg text-slate-900">
            {/* Phone Top Notch */}
            <div className="flex items-center justify-between border-b border-slate-100 pb-2 mb-2">
              <span className="text-[10px] font-bold font-mono text-slate-500">10:42 AM</span>
              <div className="h-1.5 w-12 rounded-full bg-slate-300" />
              <span className="text-[10px] font-bold text-slate-500">100%</span>
            </div>

            {/* Mobile App Header */}
            <div className="mb-2">
              <div className="flex items-center gap-1.5 text-blue-600 mb-0.5">
                <Smartphone className="h-3 w-3" />
                <span className="text-[10px] font-bold uppercase tracking-wider">Yard Mobile Check-in</span>
              </div>
              <span className="text-xs font-bold text-slate-900 block leading-tight">
                Return Inspection #INSP-81
              </span>
              <span className="text-[10px] text-slate-500">Tech: Dave M. (Depot Yard A)</span>
            </div>

            {/* Photo Checklist Thumbnails */}
            <div className="space-y-1.5 mb-2.5">
              <span className="text-[9px] font-bold text-slate-500 uppercase tracking-wider block">
                Condition Photos Captured (4/4)
              </span>
              <div className="grid grid-cols-4 gap-1">
                <div className="h-11 rounded-md bg-slate-800 text-white flex flex-col items-center justify-center text-[8px] font-semibold text-center p-0.5">
                  <Camera className="h-3 w-3 mb-0.5 text-blue-400" />
                  <span>Front</span>
                </div>
                <div className="h-11 rounded-md bg-slate-800 text-white flex flex-col items-center justify-center text-[8px] font-semibold text-center p-0.5">
                  <Camera className="h-3 w-3 mb-0.5 text-blue-400" />
                  <span>Tracks</span>
                </div>
                <div className="h-11 rounded-md bg-slate-800 text-white flex flex-col items-center justify-center text-[8px] font-semibold text-center p-0.5">
                  <Camera className="h-3 w-3 mb-0.5 text-blue-400" />
                  <span>Cab</span>
                </div>
                <div className="h-11 rounded-md bg-slate-800 text-white flex flex-col items-center justify-center text-[8px] font-semibold text-center p-0.5">
                  <Camera className="h-3 w-3 mb-0.5 text-blue-400" />
                  <span>Boom</span>
                </div>
              </div>
            </div>

            {/* Fluid & Fuel Checks */}
            <div className="rounded-lg bg-slate-50 p-2 text-[10px] space-y-1 border border-slate-100 mb-2.5">
              <div className="flex justify-between">
                <span className="text-slate-600">Fuel Level:</span>
                <span className="font-bold text-emerald-700">100% (Refueled)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Job Damage:</span>
                <span className="font-bold text-slate-900">None Documented</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Customer Sign:</span>
                <span className="font-bold text-blue-600">Captured on Glass ✓</span>
              </div>
            </div>

            {/* Completed Button */}
            <button className="w-full rounded-lg bg-emerald-600 py-1.5 text-center text-[11px] font-bold text-white shadow-xs">
              ✓ Inspection Approved
            </button>
          </div>
        </div>
      </div>

      {/* Maintenance Bottom Compliance Bar */}
      <div className="p-3 bg-slate-900 text-white flex items-center justify-between text-xs">
        <div className="flex items-center gap-2">
          <div className="h-5 w-5 rounded-full bg-blue-600 flex items-center justify-center font-bold text-white text-[10px]">
            OSHA
          </div>
          <span className="text-slate-300 text-[11px]">
            <strong className="text-white">OSHA &amp; ANSI Compliance:</strong> Digital timestamps, runtime hour logging, and condition photos protect equipment resale value.
          </span>
        </div>
        <span className="hidden sm:inline-block text-[11px] text-emerald-400 font-semibold font-mono">
          94% Fleet Health
        </span>
      </div>
    </div>
  );
}
