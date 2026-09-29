"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { 
  User, 
  Building2, 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Truck, 
  Sparkles,
  CreditCard,
  ChevronDown
} from "lucide-react";

export default function SignUpForm() {
  const searchParams = useSearchParams();
  const planParam = searchParams.get("plan");

  const [fullName, setFullName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fleetSize, setFleetSize] = useState("16-50");
  const [selectedPlan, setSelectedPlan] = useState("pro");
  const [showPassword, setShowPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(true);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (planParam === "starter" || planParam === "pro" || planParam === "business") {
      setSelectedPlan(planParam);
    }
  }, [planParam]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password || !fullName || !companyName) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 1400);
  };

  return (
    <div className="w-full">
      {success ? (
        <div className="rounded-3xl border border-emerald-200 bg-emerald-50/90 p-8 text-center space-y-4 animate-in fade-in duration-300">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 shadow-xs">
            <CheckCircle2 className="h-8 w-8" />
          </div>
          <h3 className="text-2xl font-extrabold text-emerald-950">
            Your Fleet Account is Ready!
          </h3>
          <p className="text-sm text-emerald-800 max-w-md mx-auto leading-relaxed">
            Welcome to EquipmentRentalSoftware.io, <strong className="font-bold">{fullName}</strong>! We have provisioned a 14-day full access sandbox for <strong className="font-bold">{companyName}</strong> on the <span className="uppercase font-mono font-bold">{selectedPlan}</span> tier.
          </p>
          <div className="pt-2">
            <Link
              href="/login"
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 text-sm font-bold text-white shadow-md hover:bg-emerald-700 transition-colors"
            >
              <span>Access Your Fleet Portal Now</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Plan Tier Selector Chips */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              Select Your 14-Day Free Trial Plan
            </label>
            <div className="grid grid-cols-3 gap-2.5">
              <button
                type="button"
                onClick={() => setSelectedPlan("starter")}
                className={`rounded-xl border p-2.5 text-center transition-all ${
                  selectedPlan === "starter"
                    ? "border-blue-600 bg-blue-50/70 text-blue-950 ring-2 ring-blue-600/20"
                    : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                }`}
              >
                <span className="block text-xs font-bold">Starter</span>
                <span className="block text-[11px] font-extrabold text-blue-600 mt-0.5">$39/mo</span>
                <span className="block text-[9px] text-slate-500">Up to 25 units</span>
              </button>

              <button
                type="button"
                onClick={() => setSelectedPlan("pro")}
                className={`relative rounded-xl border p-2.5 text-center transition-all ${
                  selectedPlan === "pro"
                    ? "border-blue-600 bg-blue-50/70 text-blue-950 ring-2 ring-blue-600/20 shadow-xs"
                    : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                }`}
              >
                <span className="absolute -top-2 left-1/2 -translate-x-1/2 rounded-full bg-blue-600 px-2 py-0.2 text-[8px] font-bold text-white uppercase tracking-wider">
                  Popular
                </span>
                <span className="block text-xs font-bold">Professional</span>
                <span className="block text-[11px] font-extrabold text-blue-600 mt-0.5">$79/mo</span>
                <span className="block text-[9px] text-slate-500">Up to 75 units</span>
              </button>

              <button
                type="button"
                onClick={() => setSelectedPlan("business")}
                className={`rounded-xl border p-2.5 text-center transition-all ${
                  selectedPlan === "business"
                    ? "border-blue-600 bg-blue-50/70 text-blue-950 ring-2 ring-blue-600/20"
                    : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                }`}
              >
                <span className="block text-xs font-bold">Business</span>
                <span className="block text-[11px] font-extrabold text-blue-600 mt-0.5">$149/mo</span>
                <span className="block text-[9px] text-slate-500">Unlimited fleet</span>
              </button>
            </div>
          </div>

          {/* Full Name & Company Name (2 Columns) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div>
              <label htmlFor="fullName" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Your Full Name
              </label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400">
                  <User className="h-4 w-4" />
                </div>
                <input
                  id="fullName"
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Marcus Vance"
                  className="w-full rounded-xl border border-slate-300 bg-white py-2.5 pl-10 pr-3.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:outline-hidden focus:ring-2 focus:ring-blue-600/20 shadow-2xs"
                />
              </div>
            </div>

            <div>
              <label htmlFor="companyName" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Company / Depot Yard
              </label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400">
                  <Building2 className="h-4 w-4" />
                </div>
                <input
                  id="companyName"
                  type="text"
                  required
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  placeholder="Apex Equipment Rentals"
                  className="w-full rounded-xl border border-slate-300 bg-white py-2.5 pl-10 pr-3.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:outline-hidden focus:ring-2 focus:ring-blue-600/20 shadow-2xs"
                />
              </div>
            </div>
          </div>

          {/* Work Email Address */}
          <div>
            <label htmlFor="signupEmail" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Work Email Address
            </label>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400">
                <Mail className="h-4 w-4" />
              </div>
              <input
                id="signupEmail"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="marcus@apexequipment.com"
                className="w-full rounded-xl border border-slate-300 bg-white py-2.5 pl-10 pr-3.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:outline-hidden focus:ring-2 focus:ring-blue-600/20 shadow-2xs"
              />
            </div>
          </div>

          {/* Password & Fleet Size (2 Columns) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div>
              <label htmlFor="signupPassword" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Create Password
              </label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400">
                  <Lock className="h-4 w-4" />
                </div>
                <input
                  id="signupPassword"
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Min. 8 characters"
                  className="w-full rounded-xl border border-slate-300 bg-white py-2.5 pl-10 pr-10 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:outline-hidden focus:ring-2 focus:ring-blue-600/20 shadow-2xs"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-slate-400 hover:text-slate-600"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            <div>
              <label htmlFor="fleetSize" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Approx. Fleet Size
              </label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400">
                  <Truck className="h-4 w-4" />
                </div>
                <select
                  id="fleetSize"
                  value={fleetSize}
                  onChange={(e) => setFleetSize(e.target.value)}
                  className="w-full rounded-xl border border-slate-300 bg-white py-2.5 pl-10 pr-8 text-sm text-slate-900 focus:border-blue-600 focus:outline-hidden focus:ring-2 focus:ring-blue-600/20 shadow-2xs appearance-none"
                >
                  <option value="1-15">1 – 15 Machines / Tools</option>
                  <option value="16-50">16 – 50 Fleet Units</option>
                  <option value="51-150">51 – 150 Fleet Units</option>
                  <option value="150+">150+ Commercial Units</option>
                </select>
                <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              </div>
            </div>
          </div>

          {/* Terms Agreement */}
          <div className="pt-1">
            <label className="flex items-start gap-2.5 cursor-pointer text-xs text-slate-600">
              <input
                type="checkbox"
                required
                checked={agreeTerms}
                onChange={(e) => setAgreeTerms(e.target.checked)}
                className="mt-0.5 h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
              />
              <span>
                I agree to the{" "}
                <Link href="/terms-and-conditions" className="font-semibold text-blue-600 hover:underline">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="/privacy-policy" className="font-semibold text-blue-600 hover:underline">
                  Privacy Policy
                </Link>
                . No credit card required.
              </span>
            </label>
          </div>

          {/* Primary Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-bold text-white shadow-md hover:bg-blue-700 hover:shadow-lg disabled:opacity-70 transition-all duration-200"
          >
            {loading ? (
              <>
                <div className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                <span>Creating Your 14-Day Free Trial...</span>
              </>
            ) : (
              <>
                <span>Start 14-Day Free Fleet Trial</span>
                <ArrowRight className="h-4 w-4" />
              </>
            )}
          </button>

          {/* Guarantee Badges */}
          <div className="flex items-center justify-center gap-4 text-[11px] text-slate-500 pt-1">
            <span className="flex items-center gap-1 font-semibold text-emerald-700">
              <CheckCircle2 className="h-3 w-3 text-emerald-600" /> 14 Days Full Access
            </span>
            <span>•</span>
            <span className="flex items-center gap-1 font-semibold text-slate-600">
              <CreditCard className="h-3 w-3 text-slate-500" /> No Card Required
            </span>
            <span>•</span>
            <span className="flex items-center gap-1 font-semibold text-blue-700">
              <ShieldCheck className="h-3 w-3 text-blue-600" /> Cancel Anytime
            </span>
          </div>

          {/* SSO Divider */}
          <div className="relative my-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-3 font-bold text-slate-400">Or sign up with SSO</span>
            </div>
          </div>

          {/* SSO Buttons */}
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => {
                setFullName("Alex Rivera");
                setCompanyName("Rivera Fleet Solutions");
                setEmail("alex@riverafleet.com");
                setPassword("DemoSecure2026!");
              }}
              className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white py-2 px-3 text-xs font-bold text-slate-700 hover:bg-slate-50 hover:border-slate-300 shadow-2xs transition-all"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                />
              </svg>
              <span>Google</span>
            </button>

            <button
              type="button"
              onClick={() => {
                setFullName("Sarah Jenkins");
                setCompanyName("Jenkins Crane & Rigging");
                setEmail("sarah@jenkinsrigging.com");
                setPassword("DemoSecure2026!");
              }}
              className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white py-2 px-3 text-xs font-bold text-slate-700 hover:bg-slate-50 hover:border-slate-300 shadow-2xs transition-all"
            >
              <svg className="h-4 w-4" viewBox="0 0 23 23">
                <path fill="#f35325" d="M1 1h10v10H1z" />
                <path fill="#81bc06" d="M12 1h10v10H12z" />
                <path fill="#05a6f0" d="M1 12h10v10H1z" />
                <path fill="#ffba08" d="M12 12h10v10H12z" />
              </svg>
              <span>Microsoft</span>
            </button>
          </div>
        </form>
      )}

      {/* Already Have Account */}
      <div className="mt-6 pt-4 border-t border-slate-200/80 text-center">
        <p className="text-xs text-slate-600">
          Already have an equipment rental account?{" "}
          <Link href="/login" className="font-bold text-blue-600 hover:text-blue-700 hover:underline">
            Sign In to Dashboard
          </Link>
        </p>
      </div>
    </div>
  );
}
