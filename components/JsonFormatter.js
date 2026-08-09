"use client";

import { useState } from "react";
import { Braces, CheckCircle2, Loader2, ShieldCheck, XCircle } from "lucide-react";
import CopyButton from "./CopyButton";

const JsonFormatter = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState(null);
  const [valid, setValid] = useState(false);

  const run = (mode) => {
    if (!input.trim()) {
      setError("Paste some JSON to get started.");
      setOutput("");
      setValid(false);
      return;
    }
    try {
      const parsed = JSON.parse(input);
      setOutput(
        mode === "minify" ? JSON.stringify(parsed) : JSON.stringify(parsed, null, 2)
      );
      setError(null);
      setValid(true);
    } catch (err) {
      setError(err.message || "Invalid JSON.");
      setOutput("");
      setValid(false);
    }
  };

  const canRun = input.trim().length > 0;

  return (
    <div className="mx-auto max-w-5xl px-6 py-8 md:py-12">
      <div className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-[0_10px_40px_-18px_rgba(79,70,229,0.25)]">
        <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-2">
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="json-input"
                className="text-xs font-semibold uppercase tracking-wide text-gray-400"
              >
                JSON input
              </label>
              <button
                type="button"
                onClick={() => setInput("")}
                className="text-xs font-semibold text-gray-400 transition hover:text-gray-600"
              >
                Clear
              </button>
            </div>
            <textarea
              id="json-input"
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
                setError(null);
                setValid(false);
              }}
              placeholder={`{"name": "The Stockit", "tools": 18, "free": true}`}
              rows={14}
              spellCheck="false"
              className="mt-3 w-full resize-y rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4 font-mono text-xs leading-relaxed text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-blue-400 focus:bg-white focus:ring-2 focus:ring-blue-500/20"
            />
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="json-output"
                className="text-xs font-semibold uppercase tracking-wide text-gray-400"
              >
                Output
              </label>
              <div className="flex items-center gap-2">
                {valid && (
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600">
                    <CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" />
                    Valid
                  </span>
                )}
                {error && (
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-red-500">
                    <XCircle className="h-3.5 w-3.5" aria-hidden="true" />
                    Invalid
                  </span>
                )}
                {output && <CopyButton value={output} label="formatted JSON" />}
              </div>
            </div>
            <textarea
              id="json-output"
              value={output}
              readOnly
              rows={14}
              placeholder="Formatted or minified JSON appears here…"
              className="mt-3 w-full resize-y rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4 font-mono text-xs leading-relaxed text-gray-800 outline-none placeholder:text-gray-400"
            />
          </div>
        </div>

        {error && (
          <div className="border-t border-red-100 bg-red-50 px-6 py-4 sm:px-10">
            <p className="flex items-start gap-2 text-xs font-medium leading-relaxed text-red-600">
              <XCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
              <span className="break-all">{error}</span>
            </p>
          </div>
        )}

        <div className="flex flex-wrap items-center gap-3 border-t border-gray-100 bg-gray-50/60 px-6 py-5 sm:px-10">
          <button
            type="button"
            onClick={() => run("format")}
            disabled={!canRun}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-2.5 text-sm font-semibold text-white shadow-md shadow-blue-600/25 transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <Braces className="h-4 w-4" aria-hidden="true" />
            Format / Beautify
          </button>
          <button
            type="button"
            onClick={() => run("minify")}
            disabled={!canRun}
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-gray-700 ring-1 ring-gray-200 transition hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Minify
          </button>
          <p className="ml-auto flex items-center gap-1.5 text-xs text-gray-400">
            <ShieldCheck className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            Runs locally — your JSON never leaves your browser.
          </p>
        </div>
      </div>
    </div>
  );
};

export default JsonFormatter;
