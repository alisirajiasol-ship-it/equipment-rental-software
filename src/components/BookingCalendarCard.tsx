import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Layers,
} from "lucide-react";

export default function BookingCalendarCard() {
  const daysOfWeek = ["S", "M", "T", "W", "T", "F", "S"];

  // Calendar dates representation for October 2026
  // October 1 2026 is a Thursday (4 blank slots before 1)
  const days = [
    { num: null }, { num: null }, { num: null }, { num: null },
    { num: 1 }, { num: 2 }, { num: 3 },
    { num: 4 }, { num: 5 }, { num: 6 }, { num: 7 }, { num: 8 }, { num: 9 }, { num: 10 },
    { num: 11 }, { num: 12, selected: true, start: true },
    { num: 13, selected: true },
    { num: 14, selected: true },
    { num: 15, selected: true },
    { num: 16, selected: true, end: true },
    { num: 17 },
    { num: 18 }, { num: 19 }, { num: 20 }, { num: 21 }, { num: 22 }, { num: 23 }, { num: 24 },
    { num: 25 }, { num: 26 }, { num: 27 }, { num: 28 }, { num: 29 }, { num: 30 }, { num: 31 },
  ];

  return (
    <div className="rounded-3xl border border-slate-200/90 bg-white p-4 sm:p-6 shadow-xl ring-1 ring-slate-900/5 text-left">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        {/* Left Sub-panel: Date Picker Calendar */}
        <div className="rounded-2xl border border-slate-100 bg-slate-50/50 p-4 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold text-slate-800">
                Select Rental Dates
              </span>
              <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-700">
                <button type="button" className="p-1 rounded hover:bg-slate-200 text-slate-500" aria-label="Previous month">
                  <ChevronLeft className="h-3.5 w-3.5" aria-hidden="true" />
                </button>
                <span>October 2026</span>
                <button type="button" className="p-1 rounded hover:bg-slate-200 text-slate-500" aria-label="Next month">
                  <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
                </button>
              </div>
            </div>

            {/* Days of Week Header */}
            <div className="grid grid-cols-7 gap-1 text-center text-[10px] font-semibold text-slate-400 mb-2">
              {daysOfWeek.map((d, i) => (
                <div key={i}>{d}</div>
              ))}
            </div>

            {/* Dates Grid */}
            <div className="grid grid-cols-7 gap-1 text-center text-xs">
              {days.map((day, idx) => {
                if (day.num === null) {
                  return <div key={idx} className="h-7 w-7"></div>;
                }
                const isSelected = day.selected;
                return (
                  <div
                    key={idx}
                    className={`h-7 w-7 mx-auto flex items-center justify-center rounded-lg text-xs font-medium transition-all ${
                      isSelected
                        ? "bg-blue-600 text-white font-bold shadow-xs"
                        : "text-slate-700 hover:bg-slate-200/60"
                    }`}
                  >
                    {day.num}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center justify-between text-[11px] text-slate-500">
            <span>Selected Duration</span>
            <span className="font-bold text-blue-600">5 Days (Mon-Fri)</span>
          </div>
        </div>

        {/* Right Sub-panel: Rental Summary */}
        <div className="rounded-2xl border border-slate-100 bg-white p-4 flex flex-col justify-between">
          <div>
            <span className="text-xs font-bold text-slate-800 uppercase tracking-wider block mb-3">
              Your Rental Summary
            </span>

            {/* Asset item card */}
            <div className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-50 border border-slate-100 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600 shrink-0">
                <Layers className="h-5 w-5" aria-hidden="true" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-900 leading-tight">
                  Genie S-65 Boom Lift
                </h4>
                <span className="text-[10px] text-slate-400">
                  45ft Articulating Boom Lift
                </span>
              </div>
            </div>

            {/* Price Line Items */}
            <div className="space-y-2 text-xs text-slate-600 border-b border-slate-100 pb-3 mb-3">
              <div className="flex justify-between">
                <span>Rental Period</span>
                <span className="font-semibold text-slate-900">Oct 12 – Oct 16 (5 days)</span>
              </div>
              <div className="flex justify-between">
                <span>Daily Rate</span>
                <span className="font-semibold text-slate-900">$420.00</span>
              </div>
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-semibold text-slate-900">$2,100.00</span>
              </div>
              <div className="flex justify-between">
                <span>Damage Waiver</span>
                <span className="font-semibold text-slate-900">$350.00</span>
              </div>
            </div>

            <div className="flex justify-between items-baseline mb-4">
              <span className="text-xs font-bold text-slate-900">Total</span>
              <span className="text-lg font-extrabold text-slate-900">$2,450.00</span>
            </div>
          </div>

          <button
            type="button"
            className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold py-3 transition-colors shadow-xs"
          >
            <span>Continue to Checkout</span>
            <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
}
