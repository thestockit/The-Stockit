"use client";

import { useMemo, useState } from "react";
import { Dices, RefreshCw, ShieldCheck } from "lucide-react";
import CopyButton from "./CopyButton";

const randomInt = (min, max) => {
  const range = max - min + 1;
  const limit = Math.floor(4294967296 / range) * range;
  const arr = new Uint32Array(1);
  let value;
  do {
    crypto.getRandomValues(arr);
    value = arr[0];
  } while (value >= limit);
  return min + (value % range);
};

const RandomNumberGenerator = () => {
  const [min, setMin] = useState("1");
  const [max, setMax] = useState("100");
  const [count, setCount] = useState("1");
  const [unique, setUnique] = useState(false);
  const [error, setError] = useState(null);
  const [numbers, setNumbers] = useState([]);
  const [nonce, setNonce] = useState(0);

  const parsed = useMemo(() => {
    const lo = parseInt(min, 10);
    const hi = parseInt(max, 10);
    const n = parseInt(count, 10);
    if (!Number.isInteger(lo) || !Number.isInteger(hi) || !Number.isInteger(n)) {
      return { error: "Enter whole numbers for minimum, maximum and count." };
    }
    if (hi < lo) return { error: "Maximum must be greater than or equal to minimum." };
    if (n < 1 || n > 1000) return { error: "Count must be between 1 and 1000." };
    if (unique && hi - lo + 1 < n) {
      return { error: "Range is too small for that many unique numbers." };
    }
    return { lo, hi, n };
  }, [min, max, count, unique]);

  const generate = (e) => {
    if (e) e.preventDefault();
    if (parsed.error) {
      setError(parsed.error);
      return;
    }
    const { lo, hi, n } = parsed;
    if (unique) {
      const pool = Array.from({ length: hi - lo + 1 }, (_, i) => lo + i);
      for (let i = pool.length - 1; i > 0; i -= 1) {
        const j = randomInt(0, i);
        [pool[i], pool[j]] = [pool[j], pool[i]];
      }
      setNumbers(pool.slice(0, n));
    } else {
      setNumbers(Array.from({ length: n }, () => randomInt(lo, hi)));
    }
    setError(null);
    setNonce((x) => x + 1);
  };

  const canGenerate = !parsed.error;

  return (
    <div className="mx-auto max-w-5xl px-6 py-8 md:py-12">
      <div className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-[0_10px_40px_-18px_rgba(79,70,229,0.25)]">
        <div className="border-b border-gray-100 p-6 sm:p-8">
          <form onSubmit={generate} className="grid gap-4 sm:grid-cols-4">
            <div>
              <label
                htmlFor="rng-min"
                className="text-xs font-semibold uppercase tracking-wide text-gray-400"
              >
                Minimum
              </label>
              <input
                id="rng-min"
                type="number"
                value={min}
                onChange={(e) => setMin(e.target.value)}
                className="mt-2 w-full rounded-full border border-gray-200 bg-gray-50 px-5 py-3 text-sm font-semibold text-gray-800 outline-none transition focus:border-blue-400 focus:bg-white focus:ring-2 focus:ring-blue-500/20"
              />
            </div>
            <div>
              <label
                htmlFor="rng-max"
                className="text-xs font-semibold uppercase tracking-wide text-gray-400"
              >
                Maximum
              </label>
              <input
                id="rng-max"
                type="number"
                value={max}
                onChange={(e) => setMax(e.target.value)}
                className="mt-2 w-full rounded-full border border-gray-200 bg-gray-50 px-5 py-3 text-sm font-semibold text-gray-800 outline-none transition focus:border-blue-400 focus:bg-white focus:ring-2 focus:ring-blue-500/20"
              />
            </div>
            <div>
              <label
                htmlFor="rng-count"
                className="text-xs font-semibold uppercase tracking-wide text-gray-400"
              >
                How many
              </label>
              <input
                id="rng-count"
                type="number"
                min="1"
                max="1000"
                value={count}
                onChange={(e) => setCount(e.target.value)}
                className="mt-2 w-full rounded-full border border-gray-200 bg-gray-50 px-5 py-3 text-sm font-semibold text-gray-800 outline-none transition focus:border-blue-400 focus:bg-white focus:ring-2 focus:ring-blue-500/20"
              />
            </div>
            <div className="flex items-end">
              <button
                type="submit"
                disabled={!canGenerate}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-blue-600/25 transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <Dices className="h-4 w-4" aria-hidden="true" />
                Generate
              </button>
            </div>
          </form>

          <label className="mt-4 flex cursor-pointer items-center gap-3">
            <input
              type="checkbox"
              checked={unique}
              onChange={(e) => setUnique(e.target.checked)}
              className="h-4 w-4 accent-blue-600"
            />
            <span className="text-sm font-medium text-gray-600">
              Unique numbers — no repeats
            </span>
          </label>
        </div>

        <div className="p-6 sm:p-8">
          {error && (
            <p className="mb-5 rounded-2xl border border-red-100 bg-red-50 px-5 py-3 text-sm font-medium text-red-600">
              {error}
            </p>
          )}

          {numbers.length > 0 ? (
            <>
              <div className="flex flex-wrap gap-2">
                {numbers.map((num, i) => (
                  <span
                    key={`${num}-${i}-${nonce}`}
                    className="rounded-2xl border border-gray-100 bg-gray-50 px-5 py-3 font-mono text-lg font-bold text-gray-900 shadow-sm"
                  >
                    {num.toLocaleString()}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <CopyButton
                  value={numbers.join(", ")}
                  label="generated numbers"
                  size="lg"
                />
                <button
                  type="button"
                  onClick={generate}
                  className="inline-flex items-center gap-1.5 rounded-full bg-gray-100 px-5 py-2.5 text-sm font-semibold text-gray-600 transition hover:bg-gray-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                >
                  <RefreshCw className="h-4 w-4" aria-hidden="true" />
                  Generate again
                </button>
              </div>
            </>
          ) : (
            <p className="text-center text-sm font-medium text-gray-400">
              Pick a range and press Generate to draw secure random numbers.
            </p>
          )}
        </div>

        <div className="border-t border-gray-100 bg-gray-50/60 px-6 py-5 sm:px-10">
          <p className="flex items-start gap-2 text-xs text-gray-400">
            <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
            <span>
              Uses the Web Crypto API — cryptographically secure, no bias, no
              uploads.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RandomNumberGenerator;
