"use client";

import { useState } from "react";
import { Binary, ShieldCheck } from "lucide-react";
import CopyButton from "./CopyButton";

const MODES = [
  { id: "encode", label: "Encode (Text → Base64)" },
  { id: "decode", label: "Decode (Base64 → Text)" },
];

const toBase64 = (s) => {
  const bytes = new TextEncoder().encode(s);
  let binary = "";
  for (let i = 0; i < bytes.length; i += 1) binary += String.fromCharCode(bytes[i]);
  return btoa(binary);
};

const fromBase64 = (s) => {
  const clean = s.replace(/\s+/g, "");
  const binary = atob(clean);
  const bytes = Uint8Array.from(binary, (c) => c.charCodeAt(0));
  return new TextDecoder().decode(bytes);
};

const Base64Converter = () => {
  const [mode, setMode] = useState("encode");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState(null);

  const convert = (e) => {
    if (e) e.preventDefault();
    if (!input) return;
    try {
      setOutput(mode === "encode" ? toBase64(input) : fromBase64(input));
      setError(null);
    } catch {
      setError(
        mode === "encode"
          ? "Something went wrong while encoding this text."
          : "That is not valid Base64 — it may contain invalid characters or be corrupted."
      );
      setOutput("");
    }
  };

  const canConvert = input.length > 0;

  return (
    <div className="mx-auto max-w-5xl px-6 py-8 md:py-12">
      <div className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-[0_10px_40px_-18px_rgba(79,70,229,0.25)]">
        <div className="border-b border-gray-100 p-6 sm:p-8">
          <div className="flex flex-wrap gap-2">
            {MODES.map((m) => (
              <button
                key={m.id}
                type="button"
                onClick={() => {
                  setMode(m.id);
                  setOutput("");
                  setError(null);
                }}
                aria-pressed={mode === m.id}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                  mode === m.id
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md shadow-blue-600/25"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {m.label}
              </button>
            ))}
          </div>

          <form onSubmit={convert} className="mt-5">
            <label htmlFor="base64-input" className="sr-only">
              Input text
            </label>
            <textarea
              id="base64-input"
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
                setError(null);
              }}
              placeholder={
                mode === "encode"
                  ? "Type or paste text to encode…"
                  : "Paste Base64 to decode…"
              }
              rows={6}
              spellCheck="false"
              className="w-full resize-y rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4 text-sm font-medium leading-relaxed text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-blue-400 focus:bg-white focus:ring-2 focus:ring-blue-500/20"
            />
            <button
              type="submit"
              disabled={!canConvert}
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-2.5 text-sm font-semibold text-white shadow-md shadow-blue-600/25 transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <Binary className="h-4 w-4" aria-hidden="true" />
              {mode === "encode" ? "Encode" : "Decode"}
            </button>
          </form>
        </div>

        <div className="p-6 sm:p-8">
          <div className="flex items-center justify-between">
            <label
              htmlFor="base64-output"
              className="text-xs font-semibold uppercase tracking-wide text-gray-400"
            >
              {mode === "encode" ? "Base64 output" : "Decoded text"}
            </label>
            {output && <CopyButton value={output} label="result" />}
          </div>
          <textarea
            id="base64-output"
            value={output}
            readOnly
            rows={6}
            placeholder="Result appears here…"
            className="mt-3 w-full resize-y rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4 text-sm font-medium leading-relaxed text-gray-800 outline-none placeholder:text-gray-400"
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
              UTF-8 aware — emojis and non-Latin scripts encode and decode
              correctly. Everything runs in your browser.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Base64Converter;
