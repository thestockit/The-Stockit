"use client";

import { MapPin, RefreshCw } from "lucide-react";
import CopyButton from "@/components/CopyButton";

const IpHero = ({
  data = {},
  onRefresh,
  loading,
  label = "Your Public IP Address",
  status = "Connected",
}) => {
  const city = data.city || "";
  const region = data.region || "";
  const country = data.country || "";
  const location = [city, region, country].filter(Boolean).join(", ");
  const flag = data.flag?.emoji || "";
  const isp = data.connection?.isp || data.connection?.org || "";
  const tz = data.timezone?.id || "";

  const ispText = isp ? (status === "Connected" ? `Connected via ${isp}` : isp) : "";

  return (
    <div className="relative overflow-hidden bg-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 -bottom-24 h-64 w-64 rounded-full bg-purple-500/10 blur-3xl"
      />

      <div className="relative px-6 py-8 sm:px-10 sm:py-10">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            {data.type && (
              <span className="inline-flex items-center rounded-full bg-blue-600 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white shadow-sm shadow-blue-600/30">
                {data.type}
              </span>
            )}
            {status && (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" aria-hidden="true" />
                {status}
              </span>
            )}
          </div>
          {onRefresh && (
            <button
              type="button"
              onClick={onRefresh}
              disabled={loading}
              className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm transition hover:border-blue-400 hover:text-blue-700 disabled:cursor-not-allowed disabled:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            >
              <RefreshCw
                className={`h-4 w-4 ${loading ? "animate-spin" : ""}`}
                aria-hidden="true"
              />
              Refresh
            </button>
          )}
        </div>

        <p className="mt-8 text-xs font-bold uppercase tracking-[0.2em] text-gray-400">
          {label}
        </p>
        <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-3">
          <p className="break-all font-mono text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
            {data.ip}
          </p>
          <CopyButton value={data.ip} label="IP address" size="lg" />
        </div>

        {location && (
          <div className="mt-7 flex items-center gap-2.5">
            <MapPin className="h-6 w-6 shrink-0 text-blue-600" aria-hidden="true" />
            <p className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
              {location}
              {flag ? ` ${flag}` : ""}
            </p>
          </div>
        )}

        {(ispText || tz) && (
          <p className="mt-2 pl-9 text-sm font-medium text-gray-500">
            {[ispText, tz ? `Timezone: ${tz}` : ""].filter(Boolean).join("  ·  ")}
          </p>
        )}
      </div>
    </div>
  );
};

export default IpHero;
