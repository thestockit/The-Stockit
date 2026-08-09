"use client";

import { useState } from "react";
import { Globe2, Loader2, Search, ShieldCheck } from "lucide-react";
import CopyButton from "./CopyButton";

const TYPES = [
  { value: "A", label: "A" },
  { value: "AAAA", label: "AAAA" },
  { value: "CNAME", label: "CNAME" },
  { value: "MX", label: "MX" },
  { value: "TXT", label: "TXT" },
  { value: "NS", label: "NS" },
  { value: "SOA", label: "SOA" },
  { value: "CAA", label: "CAA" },
];

const TYPE_NAMES = {
  1: "A",
  28: "AAAA",
  5: "CNAME",
  15: "MX",
  16: "TXT",
  2: "NS",
  6: "SOA",
  257: "CAA",
  12: "PTR",
};

const STATUS_MESSAGES = {
  0: "NOERROR",
  1: "FORMERR",
  2: "SERVFAIL",
  3: "NXDOMAIN",
  4: "NOTIMP",
  5: "REFUSED",
};

const cleanData = (type, data) => {
  if (type === "TXT" && typeof data === "string") {
    return data.replace(/^"|"$/g, "");
  }
  return data;
};

const cleanDomain = (input) => {
  let d = String(input || "").trim().toLowerCase();
  d = d.replace(/^https?:\/\//i, "").replace(/^www\./i, "");
  d = d.split("/")[0].split("?")[0].split("#")[0];
  return d;
};

const ResultTable = ({ title, records }) => {
  if (!records || records.length === 0) return null;
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
      <div className="border-b border-gray-100 bg-gray-50/70 px-5 py-3">
        <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
          {title}
        </p>
      </div>
      <table className="w-full text-left text-sm">
        <thead>
          <tr className="border-b border-gray-100 text-xs uppercase tracking-wide text-gray-400">
            <th scope="col" className="px-5 py-2.5 font-semibold">
              Type
            </th>
            <th scope="col" className="px-5 py-2.5 font-semibold">
              Value
            </th>
            <th scope="col" className="px-5 py-2.5 font-semibold">
              TTL
            </th>
            <th scope="col" className="px-5 py-2.5 text-right font-semibold">
              <span className="sr-only">Copy</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {records.map((record, index) => {
            const type = TYPE_NAMES[record.type] || String(record.type);
            const value = cleanData(type, record.data);
            return (
              <tr
                key={`${type}-${value}-${record.TTL}-${index}`}
                className={`border-b border-gray-50 last:border-0 ${
                  index % 2 === 1 ? "bg-gray-50/40" : ""
                }`}
              >
                <td className="px-5 py-3 align-top">
                  <span className="inline-flex rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-bold text-blue-700">
                    {type}
                  </span>
                </td>
                <td className="break-all px-5 py-3 font-mono text-xs font-medium text-gray-800">
                  {value}
                </td>
                <td className="whitespace-nowrap px-5 py-3 text-xs text-gray-400">
                  {record.TTL}s
                </td>
                <td className="px-5 py-3 text-right">
                  <CopyButton value={value} label={`${type} record`} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

const DnsLookup = () => {
  const [input, setInput] = useState("");
  const [type, setType] = useState("A");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const lookup = async (e) => {
    if (e) e.preventDefault();
    const target = cleanDomain(input);
    if (!target) return;

    setLoading(true);
    setError(null);
    setData(null);
    try {
      const url = `https://dns.google/resolve?name=${encodeURIComponent(
        target
      )}&type=${type}`;
      const res = await fetch(url);
      if (!res.ok) throw new Error("The DNS lookup failed. Please try again.");
      const json = await res.json();
      if (json.Status !== 0) {
        throw new Error(
          `DNS status ${json.Status} (${STATUS_MESSAGES[json.Status] || "unknown"}): the name "${
            json.Question?.[0]?.name || target
          }" could not be resolved.`
        );
      }
      setData(json);
    } catch (err) {
      setError(err.message || "Failed to resolve the domain. Please try again.");
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
            <div className="flex min-w-0 flex-1 flex-col gap-3 sm:flex-row">
              <label htmlFor="dns-domain" className="sr-only">
                Domain name
              </label>
              <input
                id="dns-domain"
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter a domain, e.g. google.com"
                autoComplete="off"
                spellCheck="false"
                className="min-w-0 flex-1 rounded-full border border-gray-200 bg-gray-50 px-5 py-3 text-sm font-medium text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-blue-400 focus:bg-white focus:ring-2 focus:ring-blue-500/20"
              />
              <label htmlFor="dns-type" className="sr-only">
                Record type
              </label>
              <select
                id="dns-type"
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="rounded-full border border-gray-200 bg-gray-50 px-4 py-3 text-sm font-semibold text-gray-700 outline-none transition focus:border-blue-400 focus:bg-white focus:ring-2 focus:ring-blue-500/20"
              >
                {TYPES.map((t) => (
                  <option key={t.value} value={t.value}>
                    {t.label}
                  </option>
                ))}
              </select>
            </div>
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
              {loading ? "Resolving…" : "Look Up DNS"}
            </button>
          </form>
          <p className="mt-3 flex items-center gap-1.5 text-xs text-gray-400">
            <Globe2 className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            Resolved live via public DNS-over-HTTPS (dns.google).
          </p>
        </div>

        <div className="space-y-5 p-6 sm:p-8">
          {loading ? (
            <div className="animate-pulse space-y-3">
              {[...Array(6)].map((_, i) => (
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
              <div>
                <p className="text-sm font-semibold text-gray-900">
                  DNS records for{" "}
                  <span className="break-all font-mono text-blue-700">
                    {data.Question?.[0]?.name || input}
                  </span>{" "}
                  <span className="text-xs font-medium text-gray-400">
                    ({type} records)
                  </span>
                </p>
              </div>
              <ResultTable title={`Answer (${(data.Answer || []).length} records)`} records={data.Answer} />
              <ResultTable title={`Authoritative Nameservers (${(data.Authority || []).length})`} records={data.Authority} />
              <ResultTable title={`Additional Records (${(data.Additional || []).length})`} records={data.Additional} />
              {(!data.Answer || data.Answer.length === 0) && (
                <p className="rounded-2xl border border-dashed border-gray-200 bg-gray-50/50 px-6 py-8 text-center text-sm font-medium text-gray-400">
                  No {type} records were found for this domain.
                </p>
              )}
            </>
          ) : (
            <div className="rounded-2xl border border-dashed border-gray-200 bg-gray-50/50 px-6 py-10 text-center">
              <p className="text-sm font-medium text-gray-400">
                Enter a domain and pick a record type to see live DNS answers.
              </p>
            </div>
          )}
        </div>

        <div className="border-t border-gray-100 bg-gray-50/60 px-6 py-5 sm:px-10">
          <p className="flex items-start gap-2 text-xs text-gray-400">
            <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
            <span>
              DNS answers come from the public dns.google resolver in real time. We
              do not store or log the domains you query.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DnsLookup;
