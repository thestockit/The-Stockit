"use client";

import { useState } from "react";
import { Eraser, ShieldCheck } from "lucide-react";
import CopyButton from "./CopyButton";

const toWords = (s) => s.match(/\p{L}\p{M}*|\p{N}+/gu) || [];
const capitalize = (w) => w[0].toUpperCase() + w.slice(1).toLowerCase();
const lowercaseFirst = (w) => w[0].toLowerCase() + w.slice(1);

const CASES = [
  { id: "upper", label: "UPPERCASE", fn: (s) => s.toUpperCase() },
  { id: "lower", label: "lowercase", fn: (s) => s.toLowerCase() },
  {
    id: "title",
    label: "Title Case",
    fn: (s) => s.toLowerCase().replace(/(^|[^\p{L}\p{N}])(\p{L})/gu, (_, pre, ch) => pre + ch.toUpperCase()),
  },
  {
    id: "sentence",
    label: "Sentence case",
    fn: (s) =>
      s.toLowerCase().replace(/(^|\.\s+|!\s+|\?\s+|\n+)(\p{L})/gu, (_, pre, ch) => pre + ch.toUpperCase()),
  },
  {
    id: "camel",
    label: "camelCase",
    fn: (s) => {
      const words = toWords(s);
      return words.length === 0
        ? s
        : lowercaseFirst(words[0]) + words.slice(1).map(capitalize).join("");
    },
  },
  {
    id: "pascal",
    label: "PascalCase",
    fn: (s) => {
      const words = toWords(s);
      return words.length === 0 ? s : words.map(capitalize).join("");
    },
  },
  {
    id: "snake",
    label: "snake_case",
    fn: (s) => toWords(s).map((w) => w.toLowerCase()).join("_"),
  },
  {
    id: "kebab",
    label: "kebab-case",
    fn: (s) => toWords(s).map((w) => w.toLowerCase()).join("-"),
  },
  {
    id: "constant",
    label: "CONSTANT_CASE",
    fn: (s) => toWords(s).map((w) => w.toUpperCase()).join("_"),
  },
  {
    id: "alternating",
    label: "AlTeRnAtInG",
    fn: (s) =>
      s.split("").map((c, i) => (i % 2 === 0 ? c.toUpperCase() : c.toLowerCase())).join(""),
  },
  {
    id: "inverse",
    label: "iNVERSE CASE",
    fn: (s) =>
      s
        .split("")
        .map((c) =>
          c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase()
        )
        .join(""),
  },
];

const countWords = (s) => (s.trim() ? s.trim().split(/\s+/).length : 0);

const TextCaseConverter = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [active, setActive] = useState(null);

  const apply = (c) => {
    setOutput(c.fn(input));
    setActive(c.id);
  };

  const clear = () => {
    setInput("");
    setOutput("");
    setActive(null);
  };

  return (
    <div className="mx-auto max-w-5xl px-6 py-8 md:py-12">
      <div className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-[0_10px_40px_-18px_rgba(79,70,229,0.25)]">
        <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-2">
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="case-input"
                className="text-xs font-semibold uppercase tracking-wide text-gray-400"
              >
                Your text
              </label>
              <span className="text-xs text-gray-400">
                {countWords(input)} words · {input.length} characters
              </span>
            </div>
            <textarea
              id="case-input"
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
                if (active) setOutput(CASES.find((c) => c.id === active).fn(e.target.value));
              }}
              placeholder="Paste or type your text here…"
              rows={10}
              className="mt-3 w-full resize-y rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4 text-sm font-medium leading-relaxed text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-blue-400 focus:bg-white focus:ring-2 focus:ring-blue-500/20"
            />
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="case-output"
                className="text-xs font-semibold uppercase tracking-wide text-gray-400"
              >
                Converted text
              </label>
              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-400">
                  {countWords(output)} words · {output.length} characters
                </span>
                {output && (
                  <>
                    <CopyButton value={output} label="converted text" />
                    <button
                      type="button"
                      onClick={clear}
                      className="inline-flex items-center gap-1 rounded-md px-2 py-1 text-[10px] font-semibold text-gray-500 transition hover:bg-gray-100 hover:text-red-600"
                    >
                      <Eraser className="h-3 w-3" aria-hidden="true" />
                      Clear
                    </button>
                  </>
                )}
              </div>
            </div>
            <textarea
              id="case-output"
              value={output}
              readOnly
              rows={10}
              placeholder="Converted text appears here…"
              className="mt-3 w-full resize-y rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4 text-sm font-medium leading-relaxed text-gray-800 outline-none placeholder:text-gray-400"
            />
          </div>
        </div>

        <div className="border-t border-gray-100 bg-gray-50/60 p-6 sm:px-8">
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
            Convert to
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {CASES.map((c) => {
              const isActive = active === c.id;
              return (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => apply(c)}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                    isActive
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md shadow-blue-600/25"
                      : "bg-white text-gray-600 ring-1 ring-gray-200 hover:bg-gray-100"
                  }`}
                >
                  {c.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="border-t border-gray-100 bg-white px-6 py-5 sm:px-10">
          <p className="flex items-start gap-2 text-xs text-gray-400">
            <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
            <span>
              All conversion happens in your browser. Your text is never uploaded or
              stored — it leaves your device only if you copy it yourself.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TextCaseConverter;
