"use client";

import { useCallback, useEffect, useState } from "react";
import {
  Clock,
  Globe2,
  Loader2,
  MapPin,
  Network,
  RefreshCw,
  ShieldCheck,
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

const isIpv6 = (ip) => typeof ip === "string" && ip.includes(":");

const fetchFromIpWhoIs = async () => {
  const res = await fetch("https://ipwho.is/");
  if (!res.ok) throw new Error("The IP lookup service is unavailable right now.");
  const json = await res.json();
  if (json && json.success === false) throw new Error(json.message || "The IP lookup failed.");
  if (!json || !json.ip) throw new Error("The IP lookup returned no data.");
  return json;
};

const fetchFromIpify = async () => {
  const res = await fetch("https://api.ipify.org?format=json");
  if (!res.ok) throw new Error("Could not determine your IP address.");
  const json = await res.json();
  if (!json || !json.ip) throw new Error("Could not determine your IP address.");
  return { ip: json.ip };
};

const fetchDetailsFor = async (ip) => {
  const res = await fetch(`https://ipwho.is/${encodeURIComponent(ip)}`);
  if (!res.ok) throw new Error("The IP lookup service is unavailable right now.");
  const json = await res.json();
  if (json && json.success === false) throw new Error(json.message || "The IP lookup failed.");
  if (!json || !json.ip) throw new Error("The IP lookup returned no data.");
  return json;
};

const fetchIpv4WithDetails = async () => {
  const res = await fetch("https://api.ipify.org?format=json");
  if (!res.ok) throw new Error("Could not determine your IP address.");
  const json = await res.json();
  let ip = json && json.ip ? json.ip : null;
  if (!ip) throw new Error("Could not determine your IP address.");

  if (isIpv6(ip)) {
    try {
      const altRes = await fetch("https://api.ipv4.app?format=json");
      if (altRes.ok) {
        const altJson = await altRes.json();
        if (altJson && altJson.ip && !isIpv6(altJson.ip)) ip = altJson.ip;
      }
    } catch {
      // keep the detected address
    }
  }

  return fetchDetailsFor(ip);
};

const HeroSkeleton = () => (
  <div className="animate-pulse bg-white px-6 py-10 sm:px-10">
    <div className="h-6 w-28 rounded-full bg-gray-200" />
    <div className="mt-8 h-4 w-44 rounded bg-gray-200" />
    <div className="mt-3 h-12 w-72 rounded-lg bg-gray-200 sm:w-96" />
    <div className="mt-7 flex items-center gap-2">
      <div className="h-6 w-6 rounded-full bg-gray-200" />
      <div className="h-8 w-64 rounded-lg bg-gray-200" />
    </div>
  </div>
);

const ErrorState = ({ message, onRetry }) => (
  <div className="bg-white px-6 py-12 text-center sm:px-10">
    <p className="mx-auto max-w-md text-sm font-medium leading-relaxed text-gray-600">
      {message}
    </p>
    <button
      type="button"
      onClick={onRetry}
      className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-blue-600/25 transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
    >
      <RefreshCw className="h-4 w-4" aria-hidden="true" />
      Try Again
    </button>
  </div>
);

const IpChecker = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState("geolocation");

  const checkIp = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await fetchIpv4WithDetails();
      setData(result);
    } catch (err) {
      try {
        setData(await fetchFromIpWhoIs());
      } catch {
        try {
          setData(await fetchFromIpify());
        } catch {
          setError(
            err.message ||
              "Failed to fetch IP details. Please check your connection and try again."
          );
          setData(null);
        }
      }
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    checkIp();
  }, [checkIp]);

  const sections = data ? buildIpSections(data) : [];
  const activeSection =
    sections.find((section) => section.id === activeTab) || sections[0];
  const showMap = activeTab === "geolocation" && data;

  return (
    <div className="relative mx-auto max-w-5xl px-6 py-8 md:py-12">
      <div className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-[0_10px_40px_-18px_rgba(79,70,229,0.25)]">
        {loading ? (
          <HeroSkeleton />
        ) : error ? (
          <ErrorState message={error} onRetry={checkIp} />
        ) : data ? (
          <>
            <IpHero
              data={data}
              onRefresh={checkIp}
              loading={loading}
              label="Your IPv4 Address"
              status="Connected"
            />

            <div className="border-t border-gray-100 p-6 sm:p-8">
              <div
                role="tablist"
                aria-label="IP details sections"
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

            <div className="border-t border-gray-100 bg-gray-50/60 px-6 py-5 sm:px-10">
              <p className="flex items-start gap-2 text-xs text-gray-400">
                <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                <span>
                  We never store your IP address. Details are fetched live from public
                  IP geolocation APIs when you open the page or press “Refresh”.
                </span>
              </p>
            </div>
          </>
        ) : null}
      </div>

      <p className="mt-6 flex items-center justify-center gap-1.5 text-center text-xs text-gray-400">
        <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
        Approximate location, not your exact address. Accurate to city or district level.
      </p>
    </div>
  );
};

export default IpChecker;
