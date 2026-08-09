"use client";

import { useState } from "react";
import {
  Clock,
  Globe2,
  Loader2,
  Network,
  Search,
  SearchCheck,
} from "lucide-react";
import IpHero from "@/components/IpHero";
import IpDetails from "@/components/IpDetails";
import IpMap from "@/components/IpMap";
import { buildIpSections } from "@/Data/Tools/ip-sections";

const TABS = [
  { id: "geolocation", label: "Geolocation", Icon: Globe2 },
  { id: "connection", label: "Connection", Icon: Network },
  { id: "timezone", label: "Timezone", Icon: Clock },
];

const QUICK_PICKS = ["8.8.8.8", "1.1.1.1", "google.com", "39.62.0.1"];

const IpLookup = () => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState("geolocation");

  const lookup = async (value) => {
    const target = String(value ?? query).trim();
    if (!target) {
      setError("Please enter an IP address or domain name.");
      return;
    }

    setLoading(true);
    setError(null);
    setData(null);
    try {
      const res = await fetch(`https://ipwho.is/${encodeURIComponent(target)}`);
      const json = await res.json();
      if (!res.ok || (json && json.success === false)) {
        throw new Error(
          json && json.message
            ? json.message
            : `No information found for "${target}".`
        );
      }
      setData(json);
    } catch (err) {
      setError(err.message || "Lookup failed. Please check the address and try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    lookup();
  };

  const sections = data ? buildIpSections(data) : [];
  const activeSection =
    sections.find((section) => section.id === activeTab) || sections[0];
  const showMap = activeTab === "geolocation" && data;

  return (
    <div className="relative mx-auto max-w-5xl px-6 py-8 md:py-12">
      <div className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-[0_10px_40px_-18px_rgba(79,70,229,0.25)]">
        <form
          onSubmit={handleSubmit}
          className="border-b border-gray-100 bg-gray-50/60 p-6 sm:p-8"
        >
          <label htmlFor="ip-query" className="sr-only">
            IP address or domain
          </label>
          <div className="flex flex-col gap-3 sm:flex-row">
            <div className="relative w-full flex-1">
              <Search
                className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"
                aria-hidden="true"
              />
              <input
                id="ip-query"
                type="text"
                inputMode="text"
                autoComplete="off"
                spellCheck="false"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Enter an IP address or domain — e.g. 8.8.8.8 or google.com"
                className="w-full rounded-full border border-gray-300 bg-white py-3 pl-11 pr-5 text-sm font-medium text-gray-900 shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-blue-600/25 transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            >
              {loading ? (
                <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
              ) : (
                <SearchCheck className="h-4 w-4" aria-hidden="true" />
              )}
              {loading ? "Looking up..." : "Lookup"}
            </button>
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-2">
            <span className="text-sm text-gray-400">Try:</span>
            {QUICK_PICKS.map((pick) => (
              <button
                key={pick}
                type="button"
                onClick={() => {
                  setQuery(pick);
                  lookup(pick);
                }}
                className="rounded-full border border-gray-200 bg-white px-4 py-1.5 text-sm font-medium text-gray-600 shadow-sm transition hover:border-blue-500 hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                {pick}
              </button>
            ))}
          </div>
        </form>

        {error && (
          <div
            role="alert"
            className="mx-6 mt-6 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700"
          >
            {error}
          </div>
        )}

        {loading && (
          <div className="flex items-center justify-center gap-2 py-16 text-gray-400">
            <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
            <span className="text-sm font-medium">Looking up details…</span>
          </div>
        )}

        {data && (
          <>
            <IpHero
              data={data}
              label="Looked Up Address"
              status="Resolved"
            />
            <div className="border-t border-gray-100 p-6 sm:p-8">
              <div
                role="tablist"
                aria-label="IP lookup result sections"
                className="flex flex-wrap gap-2"
              >
                {TABS.map((tab) => {
                  const isActive = activeSection?.id === tab.id;
                  const isAvailable = sections.some((section) => section.id === tab.id);
                  if (!isAvailable) return null;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      aria-controls={`panel-${tab.id}`}
                      onClick={() => setActiveTab(tab.id)}
                      className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 ${
                        isActive
                          ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md shadow-blue-600/25"
                          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                      }`}
                    >
                      <tab.Icon className="h-4 w-4" aria-hidden="true" />
                      {tab.label}
                    </button>
                  );
                })}
              </div>

              <div
                id={`panel-${activeSection?.id}`}
                role="tabpanel"
                className="mt-6"
              >
                {showMap && (
                  <div className="mb-6">
                    <IpMap
                      latitude={data.latitude}
                      longitude={data.longitude}
                      city={data.city}
                      country={data.country}
                    />
                  </div>
                )}
                {activeSection && <IpDetails sections={[activeSection]} />}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default IpLookup;
