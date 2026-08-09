"use client";

import { useState } from "react";
import { FileSearch, Loader2, Search, ShieldCheck } from "lucide-react";
import SpecList from "./SpecList";

const parseVcard = (vcardArray) => {
  if (!Array.isArray(vcardArray)) return {};
  const fields = Array.isArray(vcardArray[1]) ? vcardArray[1] : [];
  const out = {};
  for (const item of fields) {
    if (!Array.isArray(item)) continue;
    if (item[0] === "fn" && item[3]) out.fn = item[3];
    if (item[0] === "email" && item[3]) out.email = item[3];
    if (item[0] === "tel" && item[3]) out.tel = item[3];
  }
  return out;
};

const findEntity = (entities, role) => {
  if (!Array.isArray(entities)) return null;
  return entities.find((e) => e.roles && e.roles.includes(role)) || null;
};

const fmtDate = (iso) => {
  if (!iso) return "";
  return `${new Date(iso).toISOString().replace("T", " ").slice(0, 16)} UTC`;
};

const cleanDomain = (input) => {
  let d = String(input || "").trim().toLowerCase();
  d = d.replace(/^https?:\/\//i, "").replace(/^www\./i, "");
  d = d.split("/")[0].split("?")[0].split("#")[0];
  return d;
};

const isValidDomain = (d) =>
  /^(?=.{1,253}$)([a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z]{2,}$/i.test(d);

const buildRows = (json) => {
  const registrar = findEntity(json.entities, "registrar");
  const registrarCard = registrar ? parseVcard(registrar.vcardArray) : {};
  const registrant = findEntity(json.entities, "registrant");
  const registrantCard = registrant ? parseVcard(registrant.vcardArray) : {};

  const events = {};
  (json.events || []).forEach((e) => {
    events[e.eventAction] = e.eventDate;
  });

  return [
    { label: "Domain", value: json.ldhName, copyable: true },
    { label: "Registry Domain ID", value: json.handle, copyable: true },
    { label: "Registrar", value: registrarCard.fn, copyable: true },
    {
      label: "Registrar Abuse Email",
      value: registrarCard.email,
      copyable: true,
    },
    { label: "Registrant", value: registrantCard.fn, copyable: true },
    { label: "Registered On", value: fmtDate(events.registration) },
    { label: "Expires On", value: fmtDate(events.expiration) },
    { label: "Updated On", value: fmtDate(events["last changed"]) },
    {
      label: "Name Servers",
      value: (json.nameservers || []).map((ns) => ns.ldhName).join("\n"),
      copyable: true,
    },
    { label: "Domain Status", value: (json.status || []).join(", "), copyable: true },
    { label: "WHOIS Server", value: json.port43, copyable: true },
    {
      label: "DNSSEC",
      value: json.secureDNS
        ? json.secureDNS.delegationSigned
          ? "Signed"
          : "Not signed"
        : "",
    },
  ].filter(
    (r) => r.value !== null && r.value !== undefined && String(r.value) !== ""
  );
};

const StatusBadges = ({ statuses }) => {
  if (!statuses || statuses.length === 0) return null;
  return (
    <div className="mt-5 flex flex-wrap gap-2">
      {statuses.map((s) => (
        <span
          key={s}
          className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600"
        >
          {s}
        </span>
      ))}
    </div>
  );
};

const WhoisLookup = () => {
  const [input, setInput] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const lookup = async (e) => {
    if (e) e.preventDefault();
    const target = cleanDomain(input);
    if (!target) return;
    if (!isValidDomain(target)) {
      setError(
        `"${target}" is not a valid domain. Enter a domain like example.com or example.pk.`
      );
      setData(null);
      return;
    }

    setLoading(true);
    setError(null);
    setData(null);
    try {
      const res = await fetch(
        `https://rdap.org/domain/${encodeURIComponent(target)}`
      );
      if (res.status === 404) {
        throw new Error(
          `No WHOIS record found for ${target}. It may be available for registration, or its TLD does not expose RDAP data.`
        );
      }
      if (!res.ok) throw new Error("The WHOIS lookup failed. Please try again.");
      const json = await res.json();
      if (!json || !json.ldhName) throw new Error("The WHOIS lookup returned no data.");
      setData(json);
    } catch (err) {
      setError(err.message || "Failed to look up the domain. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const canLookup = input.trim().length > 0 && !loading;

  return (
    <div className="mx-auto max-w-5xl px-6 py-8 md:py-12">
      <div className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-[0_10px_40px_-18px_rgba(79,70,229,0.25)]">
        <div className="border-b border-gray-100 p-6 sm:p-8">
          <form onSubmit={lookup} role="search" className="flex flex-col gap-3 sm:flex-row">
            <label htmlFor="whois-domain" className="sr-only">
              Domain name
            </label>
            <input
              id="whois-domain"
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enter a domain, e.g. google.com"
              autoComplete="off"
              spellCheck="false"
              className="min-w-0 flex-1 rounded-full border border-gray-200 bg-gray-50 px-5 py-3 text-sm font-medium text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-blue-400 focus:bg-white focus:ring-2 focus:ring-blue-500/20"
            />
            <button
              type="submit"
              disabled={!canLookup}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-blue-600/25 transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading ? (
                <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
              ) : (
                <Search className="h-4 w-4" aria-hidden="true" />
              )}
              {loading ? "Looking up…" : "Look Up WHOIS"}
            </button>
          </form>
          <p className="mt-3 flex items-center gap-1.5 text-xs text-gray-400">
            <FileSearch className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            Live RDAP registry data — same source registrars use. No account needed.
          </p>
        </div>

        <div className="p-6 sm:p-8">
          {loading ? (
            <div className="animate-pulse space-y-3">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="h-11 rounded-xl bg-gray-100" />
              ))}
            </div>
          ) : error ? (
            <div className="rounded-2xl border border-red-100 bg-red-50 px-6 py-8 text-center">
              <p className="mx-auto max-w-lg text-sm font-medium leading-relaxed text-red-600">
                {error}
              </p>
            </div>
          ) : data ? (
            <>
              <div className="mb-5">
                <p className="text-sm font-semibold text-gray-900">
                  WHOIS record for{" "}
                  <span className="break-all font-mono text-blue-700">
                    {data.ldhName}
                  </span>
                </p>
              </div>
              <SpecList rows={buildRows(data)} />
              <StatusBadges statuses={data.status} />
            </>
          ) : (
            <div className="rounded-2xl border border-dashed border-gray-200 bg-gray-50/50 px-6 py-10 text-center">
              <p className="text-sm font-medium text-gray-400">
                Enter a domain above to see its registrar, registration dates,
                nameservers and status.
              </p>
            </div>
          )}
        </div>

        <div className="border-t border-gray-100 bg-gray-50/60 px-6 py-5 sm:px-10">
          <p className="flex items-start gap-2 text-xs text-gray-400">
            <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
            <span>
              WHOIS data is public registry information fetched live from the RDAP
              directory. We do not store or log the domains you look up.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhoisLookup;
