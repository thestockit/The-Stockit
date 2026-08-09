"use client";

import { useMemo, useState } from "react";
import { Copy, Fingerprint, RefreshCw, ShieldCheck } from "lucide-react";
import CopyButton from "./CopyButton";

const genV4 = () => {
  if (typeof crypto.randomUUID === "function") {
    return crypto.randomUUID();
  }
  const bytes = crypto.getRandomValues(new Uint8Array(16));
  bytes[6] = (bytes[6] & 0x0f) | 0x40;
  bytes[8] = (bytes[8] & 0x3f) | 0x80;
  const hex = Array.from(bytes, (b) => b.toString(16).padStart(2, "0")).join("");
  return `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20)}`;
};

const formatUuid = (uuid, { uppercase, hyphens }) => {
  let out = uuid;
  if (!hyphens) out = out.replace(/-/g, "");
  if (uppercase) out = out.toUpperCase();
  return out;
};

const UuidGenerator = () => {
  const [count, setCount] = useState(5);
  const [uppercase, setUppercase] = useState(false);
  const [hyphens, setHyphens] = useState(true);
  const [nonce, setNonce] = useState(0);

  const uuids = useMemo(
    () =>
      Array.from({ length: count }, () =>
        formatUuid(genV4(), { uppercase, hyphens })
      ),
    // eslint-disable-next-line react-hooks/exhaustive-deps -- nonce intentionally re-triggers generation on demand
    [count, uppercase, hyphens, nonce]
  );

  const output = uuids.join("\n");

  return (
    <div className="mx-auto max-w-5xl px-6 py-8 md:py-12">
      <div className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-[0_10px_40px_-18px_rgba(79,70,229,0.25)]">
        <div className="border-b border-gray-100 p-6 sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="text-sm font-semibold text-gray-900">Your UUIDs</p>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setNonce((n) => n + 1)}
                className="inline-flex items-center gap-1.5 rounded-full bg-gray-100 px-4 py-1.5 text-xs font-semibold text-gray-600 transition hover:bg-gray-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                <RefreshCw className="h-3.5 w-3.5" aria-hidden="true" />
                Regenerate
              </button>
              <CopyButton value={output} label="generated UUIDs" size="lg" />
            </div>
          </div>

          <div className="mt-4 max-h-80 overflow-auto rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4">
            <pre className="select-all whitespace-pre-wrap break-all font-mono text-sm font-semibold leading-relaxed text-gray-900">
              {output}
            </pre>
          </div>
        </div>

        <div className="grid gap-8 p-6 sm:p-8 md:grid-cols-2">
          <div>
            <label
              htmlFor="uuid-count"
              className="text-xs font-semibold uppercase tracking-wide text-gray-400"
            >
              Number of UUIDs: <span className="text-blue-700">{count}</span>
            </label>
            <input
              id="uuid-count"
              type="range"
              min="1"
              max="100"
              value={count}
              onChange={(e) => setCount(Number(e.target.value))}
              className="mt-3 w-full accent-blue-600"
            />
            <div className="mt-1 flex justify-between text-[11px] text-gray-400">
              <span>1</span>
              <span>100</span>
            </div>
          </div>

          <div className="flex flex-wrap content-start gap-2">
            <button
              type="button"
              onClick={() => setHyphens((v) => !v)}
              aria-pressed={hyphens}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                hyphens
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md shadow-blue-600/25"
                  : "bg-gray-100 text-gray-500 hover:bg-gray-200"
              }`}
            >
              Include hyphens
            </button>
            <button
              type="button"
              onClick={() => setUppercase((v) => !v)}
              aria-pressed={uppercase}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                uppercase
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md shadow-blue-600/25"
                  : "bg-gray-100 text-gray-500 hover:bg-gray-200"
              }`}
            >
              Uppercase
            </button>
          </div>
        </div>

        <div className="border-t border-gray-100 bg-gray-50/60 px-6 py-5 sm:px-10">
          <p className="flex items-start gap-2 text-xs text-gray-400">
            <Fingerprint className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
            <span>
              RFC 4122 version 4 UUIDs generated in your browser with the Web
              Crypto API. Nothing is sent to a server.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default UuidGenerator;
