"use client";

import { useMemo, useState } from "react";
import { Copy, RefreshCw, ShieldCheck, Wrench } from "lucide-react";
import CopyButton from "./CopyButton";

const CHARS = {
  upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lower: "abcdefghijklmnopqrstuvwxyz",
  digits: "0123456789",
  symbols: "!@#$%^&*()_+-=[]{}|;:,.<>?",
};

const AMBIGUOUS = new Set("Il1O0o".split(""));

const CHAR_OPTIONS = [
  { id: "upper", label: "ABC", title: "Uppercase (A–Z)" },
  { id: "lower", label: "abc", title: "Lowercase (a–z)" },
  { id: "digits", label: "123", title: "Digits (0–9)" },
  { id: "symbols", label: "#$%", title: "Symbols (!@#…)" },
];

const generate = ({ length, upper, lower, digits, symbols, excludeAmbiguous }) => {
  let pool = "";
  if (upper) pool += CHARS.upper;
  if (lower) pool += CHARS.lower;
  if (digits) pool += CHARS.digits;
  if (symbols) pool += CHARS.symbols;
  if (excludeAmbiguous) {
    pool = pool.split("").filter((c) => !AMBIGUOUS.has(c)).join("");
  }
  if (!pool) pool = CHARS.lower;

  const out = new Uint32Array(length);
  crypto.getRandomValues(out);
  let result = "";
  for (let i = 0; i < length; i += 1) {
    result += pool[out[i] % pool.length];
  }
  return result;
};

const strength = (length, poolSize) => {
  if (poolSize <= 0) return { score: 0, label: "No characters selected" };
  const entropy = length * Math.log2(poolSize);
  if (entropy < 40) return { score: 25, label: "Weak", color: "bg-red-500", text: "text-red-600" };
  if (entropy < 80) return { score: 55, label: "Fair", color: "bg-amber-500", text: "text-amber-600" };
  if (entropy < 120) return { score: 80, label: "Strong", color: "bg-emerald-500", text: "text-emerald-600" };
  return { score: 100, label: "Very Strong", color: "bg-emerald-600", text: "text-emerald-700" };
};

const PasswordGenerator = () => {
  const [length, setLength] = useState(16);
  const [options, setOptions] = useState({
    upper: true,
    lower: true,
    digits: true,
    symbols: true,
    excludeAmbiguous: false,
  });
  const [nonce, setNonce] = useState(0);

  const { password, poolSize, rating } = useMemo(() => {
    let pool = 0;
    if (options.upper) pool += CHARS.upper.length;
    if (options.lower) pool += CHARS.lower.length;
    if (options.digits) pool += CHARS.digits.length;
    if (options.symbols) pool += CHARS.symbols.length;
    if (options.excludeAmbiguous) pool -= AMBIGUOUS.size;
    if (pool < 0) pool = 0;
    const pass = generate({ length, ...options });
    return { password: pass, poolSize: pool, rating: strength(length, pool) };
    // eslint-disable-next-line react-hooks/exhaustive-deps -- nonce intentionally re-triggers generation on demand
  }, [length, options, nonce]);

  const toggle = (key) => {
    setOptions((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="mx-auto max-w-5xl px-6 py-8 md:py-12">
      <div className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-[0_10px_40px_-18px_rgba(79,70,229,0.25)]">
        <div className="border-b border-gray-100 p-6 sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="text-sm font-semibold text-gray-900">Your password</p>
            <button
              type="button"
              onClick={() => setNonce((n) => n + 1)}
              className="inline-flex items-center gap-1.5 rounded-full bg-gray-100 px-4 py-1.5 text-xs font-semibold text-gray-600 transition hover:bg-gray-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              title="Generate a new random password"
              aria-label="Generate a new random password"
            >
              <RefreshCw className="h-3.5 w-3.5" aria-hidden="true" />
              Regenerate
            </button>
          </div>

          <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center">
            <div className="flex min-w-0 flex-1 items-center gap-3 rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4">
              <Wrench className="h-4 w-4 shrink-0 text-blue-600" aria-hidden="true" />
              <span className="select-all break-all font-mono text-lg font-semibold text-gray-900 sm:text-xl">
                {password}
              </span>
            </div>
            <CopyButton value={password} label="generated password" size="lg" />
          </div>

          <div className="mt-4">
            <div className="flex items-center justify-between text-xs font-semibold">
              <span className={`${rating.text}`}>{rating.label}</span>
              <span className="text-gray-400">
                {length} characters · {poolSize} characters in pool
              </span>
            </div>
            <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-gray-100">
              <div
                className={`h-full rounded-full transition-all duration-300 ${rating.color}`}
                style={{ width: `${rating.score}%` }}
              />
            </div>
          </div>
        </div>

        <div className="grid gap-8 p-6 sm:p-8 md:grid-cols-2">
          <div>
            <label
              htmlFor="password-length"
              className="text-xs font-semibold uppercase tracking-wide text-gray-400"
            >
              Length: <span className="text-blue-700">{length}</span>
            </label>
            <input
              id="password-length"
              type="range"
              min="8"
              max="64"
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
              className="mt-3 w-full accent-blue-600"
            />
            <div className="mt-1 flex justify-between text-[11px] text-gray-400">
              <span>8</span>
              <span>64</span>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
              Character sets
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {CHAR_OPTIONS.map((opt) => {
                const active = options[opt.id];
                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => toggle(opt.id)}
                    aria-pressed={active}
                    title={opt.title}
                    className={`rounded-full px-4 py-2 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                      active
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md shadow-blue-600/25"
                        : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                    }`}
                  >
                    {opt.label}
                  </button>
                );
              })}
            </div>

            <label className="mt-4 flex cursor-pointer items-start gap-3">
              <input
                type="checkbox"
                checked={options.excludeAmbiguous}
                onChange={() => toggle("excludeAmbiguous")}
                className="mt-0.5 h-4 w-4 accent-blue-600"
              />
              <span className="text-sm font-medium text-gray-600">
                Exclude ambiguous characters
                <span className="block text-xs text-gray-400">
                  Removes easily confused characters like I, l, 1, O, 0.
                </span>
              </span>
            </label>
          </div>
        </div>

        <div className="border-t border-gray-100 bg-gray-50/60 px-6 py-5 sm:px-10">
          <p className="flex items-start gap-2 text-xs text-gray-400">
            <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
            <span>
              Passwords are generated locally in your browser using the Web Crypto
              API. Nothing is sent to a server or stored anywhere.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PasswordGenerator;
