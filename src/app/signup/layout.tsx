// app/signup/layout.tsx - noindex, nofollow on every host (staging and final domain).
// A layout is used so it also works when page.tsx is a client component; it covers /signup?plan=... too.
import type { Metadata } from "next";
import { NOINDEX_METADATA } from "@/lib/seo";

export const metadata: Metadata = NOINDEX_METADATA;

export default function SignupLayout({ children }: { children: React.ReactNode }) {
  return children;
}
