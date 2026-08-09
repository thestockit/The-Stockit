"use client";

import { useState } from "react";
import { Copy, Dices, Loader2, Shuffle, Trash2 } from "lucide-react";
import CopyButton from "./CopyButton";

const secureRandom = () => {
  const arr = new Uint32Array(1);
  if (typeof crypto !== "undefined" && crypto.getRandomValues) {
    crypto.getRandomValues(arr);
    return arr[0] / 4294967296;
  }
  return Math.random();
};

const fisherYates = (list) => {
  const a = [...list];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(secureRandom() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

const ListRandomizer = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);
  const [winners, setWinners] = useState("");
  const [count, setCount] = useState("1");
  const [mode, setMode] = useState("shuffle");
  const [error, setError] = useState(null);

  const parseList = () =>
    input
      .split(/\r?\n/)
      .map((l) => l.trim())
      .filter(Boolean);

  const randomize = (e) => {
    if (e) e.preventDefault();
    const items = parseList();
    if (items.length === 0) {
      setError("Add at least one item, one per line.");
      setResult(null);
      setWinners("");
      return;
    }
    setError(null);
    setResult(fisherYates(items));
  };

  const pick = (e) => {
    if (e) e.preventDefault();
    const items = parseList();
    if (items.length === 0) {
      setError("Add at least one item, one per line.");
      setResult(null);
      setWinners("");
      return;
    }
    const n = Math.min(Math.max(parseInt(count, 10) || 1, 1), items.length);
    setError(null);
    setWinners(fisherYates(items).slice(0, n).join("\n"));
  };

  const copyAll = async () => {
    if (!result) return;
    await navigator.clipboard.writeText(result.join("\n"));
  };

  const clear = () => {
    setInput("");
    setResult(null);
    setWinners("");
    setError(null);
  };

  return (
    <div className="mx-auto max-w-5xl px-6 py-8 md:py-12">
      <div className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-[0_10px_40px_-18px_rgba(79,70,229,0.25)]">
        <div className="border-b border-gray-100 p-6 sm:p-8">
          <div className="flex items-start justify-between gap-4">
            <label
              htmlFor="lr-input"
              className="text-xs font-semibold uppercase tracking-wide text-gray-400"
            >
              Your list — one item per line
            </label>
            {input && (
              <button
                type="button"
                onClick={clear}
                className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 px-3 py-1.5 text-xs font-semibold text-gray-500 transition hover:border-gray-300 hover:text-gray-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                <Trash2 className="h-3.5 w-3.5" aria-hidden="true" />
                Clear
              </button>
            )}
          </div>
          <textarea
            id="lr-input"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
              setError(null);
            }}
            placeholder={"Names\nDishes\nPrize draw entries\n…"}
            rows={7}
            spellCheck="false"
            className="mt-3 w-full resize-y rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4 text-sm font-medium leading-relaxed text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-blue-400 focus:bg-white focus:ring-2 focus:ring-blue-500/20"
          />

          <div className="mt-5 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={randomize}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-2.5 text-sm font-semibold text-white shadow-md shadow-blue-600/25 transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            >
              <Shuffle className="h-4 w-4" aria-hidden="true" />
              Randomize Order
            </button>

            <span className="text-sm font-semibold text-gray-400">or</span>

            <div className="flex items-center gap-2">
              <input
                type="number"
                min="1"
                value={count}
                onChange={(e) => setCount(e.target.value)}
                aria-label="Number of winners"
                className="w-20 rounded-full border border-gray-200 bg-gray-50 px-4 py-2.5 text-center text-sm font-semibold text-gray-800 outline-none transition focus:border-blue-400 focus:bg-white focus:ring-2 focus:ring-blue-500/20"
              />
              <button
                type="button"
                onClick={pick}
                className="inline-flex items-center gap-2 rounded-full border-2 border-blue-600 px-6 py-2.5 text-sm font-semibold text-blue-700 transition hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
              >
                <Dices className="h-4 w-4" aria-hidden="true" />
                Pick Winners
              </button>
            </div>
          </div>

          {error && (
            <p className="mt-4 rounded-2xl border border-red-100 bg-red-50 px-5 py-3 text-sm font-medium text-red-600">
              {error}
            </p>
          )}
        </div>

        {(result || winners) && (
          <div className="p-6 sm:p-8">
            <div className="flex items-center justify-between">
              <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                {winners ? "Winners" : "Randomized order"}
              </p>
              <div className="flex items-center gap-2">
                <CopyButton
                  value={winners || result.join("\n")}
                  label="result"
                />
                <button
                  type="button"
                  onClick={copyAll}
                  className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 px-4 py-1.5 text-xs font-semibold text-gray-500 transition hover:border-gray-300 hover:text-gray-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                >
                  <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                  Copy all
                </button>
              </div>
            </div>
            <ol className="mt-3 grid gap-2">
              {(winners ? winners.split("\n") : result).map((item, i) => (
                <li
                  key={`${i}-${item}`}
                  className="flex items-center gap-3 rounded-2xl border border-gray-100 bg-gray-50/70 px-5 py-3 text-sm font-medium text-gray-700"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-purple-600 text-xs font-bold text-white">
                    {i + 1}
                  </span>
                  {item}
                </li>
              ))}
            </ol>
          </div>
        )}

        {!result && !winners && (
          <div className="p-6 sm:p-8">
            <p className="text-center text-sm font-medium text-gray-400">
              Your shuffled list will appear here.
            </p>
          </div>
        )}

        <div className="border-t border-gray-100 bg-gray-50/60 px-6 py-5 sm:px-10">
          <p className="flex items-start gap-2 text-xs text-gray-400">
            <Loader2 className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
            <span>
              Shuffling uses the browser's cryptographically secure random number
              generator (with a Math.random fallback) — nothing is sent to a
              server.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ListRandomizer;
