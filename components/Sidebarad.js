"use client";

import Link from "next/link";
import { ArrowRight, BadgePercent, MessageCircle, ShieldCheck, Sparkles } from "lucide-react";

const cleanProviderName = (raw = "") =>
  String(raw)
    .replace(/^want to try\s+/i, "")
    .replace(/^try\s+/i, "")
    .replace(/^check out\s+/i, "")
    .replace(/[?!.]+$/g, "")
    .trim();

export default function Sidebarad({
  heading = "Exclusive For Readers",
  discount = 70,
  hostingName = "MissHosting",
  affiliateLink = "#",
}) {
  const isAgencyCta = discount === 0;
  const provider = cleanProviderName(hostingName);
  const isInternal = affiliateLink.startsWith("/");

  if (isAgencyCta) {
    return (
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-950 via-slate-900 to-purple-950 p-6 text-white shadow-lg">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
          <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-blue-500/25 blur-2xl" />
          <div className="absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-purple-500/25 blur-2xl" />
        </div>

        <div className="relative">
          <span className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-emerald-300">
            <Sparkles className="h-3 w-3" aria-hidden />
            Free consultation
          </span>

          <h3 className="text-xl font-extrabold leading-snug tracking-tight text-white">
            {heading}
          </h3>

          <p className="mt-3 text-sm leading-relaxed text-gray-300">
            A free, no-obligation strategy call with our Islamabad / Rawalpindi team — in Urdu or
            English, with PKR pricing and a same-day WhatsApp reply.
          </p>

          <Link
            href={isInternal ? affiliateLink : "/contact"}
            className="group mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 px-5 py-3 text-sm font-bold text-white shadow-lg transition hover:from-indigo-400 hover:to-purple-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2"
          >
            Get a Free Quote
            <ArrowRight
              className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
              aria-hidden
            />
          </Link>

          <div className="mt-5 flex items-center gap-2 border-t border-white/10 pt-4 text-xs text-gray-400">
            <MessageCircle className="h-3.5 w-3.5 shrink-0 text-emerald-400" aria-hidden />
            <span>Mon–Sat 9AM–7PM PKT · +92 324 5304585</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
      <div className="h-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />
      <div className="p-6">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-amber-700">
          <BadgePercent className="h-3 w-3" aria-hidden />
          Limited-time offer
        </span>

        <h3 className="mt-4 text-2xl font-extrabold tracking-tight text-gray-900">
          Get{" "}
          <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            {discount}% off
          </span>
          <span className="block text-lg font-bold text-gray-700">
            {provider || "this provider"}
          </span>
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-gray-600">
          Read our full review below and claim your exclusive reader discount.
        </p>

        <a
          href={affiliateLink}
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gray-900 px-5 py-3 text-sm font-bold text-white transition hover:bg-gray-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2"
        >
          Claim Deal
          <ArrowRight
            className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
            aria-hidden
          />
        </a>

        <p className="mt-4 flex items-center gap-1.5 text-[11px] leading-relaxed text-gray-400">
          <ShieldCheck className="h-3.5 w-3.5 shrink-0" aria-hidden />
          We may earn a commission if you purchase through this link — at no extra cost to you.
        </p>
      </div>
    </div>
  );
}
