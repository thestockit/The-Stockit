"use client";

import { useState } from "react";
import { Hash, Loader2, ShieldCheck } from "lucide-react";
import CopyButton from "./CopyButton";

const ALGOS = [
  { id: "SHA-256", label: "SHA-256", length: 64 },
  { id: "SHA-384", label: "SHA-384", length: 96 },
  { id: "SHA-512", label: "SHA-512", length: 128 },
  { id: "SHA-1", label: "SHA-1", length: 40 },
];

const toHex = (buf) =>
  Array.from(new Uint8Array(buf), (b) => b.toString(16).padStart(2, "0")).join("");

const HashGenerator = () => {
  const [input, setInput] = useState("");
  const [algo, setAlgo] = useState("SHA-256");
  const [hash, setHash] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const generate = async (e) => {
    if (e) e.preventDefault();
    if (!input) return;
    setLoading(true);
    setError(null);
    try {
      if (!crypto?.subtle) {
        throw new Error(
          "The Web Crypto API is not available here. Open this page over HTTPS (or localhost) and try again."
        );
      }
      const data = new TextEncoder().encode(input);
      const digest = await crypto.subtle.digest(algo, data);
      setHash(toHex(digest));
    } catch (err) {
      setError(err.message || "Failed to compute the hash.");
      setHash("");
    } finally {
      setLoading(false);
    }
  };

  const canGenerate = input.length > 0 && !loading;

  return (
    <div className="mx-auto max-w-5xl px-6 py-8 md:py-12">
      <div className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-[0_10px_40px_-18px_rgba(79,70,229,0.25)]">
        <div className="border-b border-gray-100 p-6 sm:p-8">
          <form onSubmit={generate}>
            <label
              htmlFor="hash-input"
              className="text-xs font-semibold uppercase tracking-wide text-gray-400"
            >
              Text to hash
            </label>
            <textarea
              id="hash-input"
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
                setHash("");
                setError(null);
              }}
              placeholder="Type or paste any text, string or token…"
              rows={4}
              spellCheck="false"
              className="mt-3 w-full resize-y rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4 text-sm font-medium leading-relaxed text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-blue-400 focus:bg-white focus:ring-2 focus:ring-blue-500/20"
            />

            <div className="mt-4 flex flex-wrap items-center gap-2">
              {ALGOS.map((a) => (
                <button
                  key={a.id}
                  type="button"
                  onClick={() => setAlgo(a.id)}
                  aria-pressed={algo === a.id}
                  className={`rounded-full px-5 py-2 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                    algo === a.id
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md shadow-blue-600/25"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {a.label}
                </button>
              ))}
            </div>

            <button
              type="submit"
              disabled={!canGenerate}
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-2.5 text-sm font-semibold text-white shadow-md shadow-blue-600/25 transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading ? (
                <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
              ) : (
                <Hash className="h-4 w-4" aria-hidden="true" />
              )}
              {loading ? "Hashing…" : "Generate Hash"}
            </button>
          </form>
        </div>

        <div className="p-6 sm:p-8">
          <div className="flex items-center justify-between">
            <label
              htmlFor="hash-output"
              className="text-xs font-semibold uppercase tracking-wide text-gray-400"
            >
              {algo} hash ({ALGOS.find((a) => a.id === algo).length} characters)
            </label>
            {hash && <CopyButton value={hash} label={`${algo} hash`} />}
          </div>
          <textarea
            id="hash-output"
            value={hash}
            readOnly
            rows={3}
            placeholder="The hash digest appears here…"
            className="mt-3 w-full resize-y rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4 font-mono text-sm leading-relaxed text-gray-800 outline-none placeholder:text-gray-400"
          />
          {error && (
            <p className="mt-4 rounded-2xl border border-red-100 bg-red-50 px-5 py-3 text-sm font-medium text-red-600">
              {error}
            </p>
          )}
        </div>

        <div className="border-t border-gray-100 bg-gray-50/60 px-6 py-5 sm:px-10">
          <p className="flex items-start gap-2 text-xs text-gray-400">
            <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
            <span>
              Hashes are computed with the browser's native Web Crypto API — your
              input never leaves this page.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HashGenerator;
