"use client";

import { useState } from "react";
import { ArrowUpDown, Banknote, Loader2, ShieldCheck } from "lucide-react";
import CopyButton from "./CopyButton";

const CURRENCIES = [
  { code: "USD", name: "US Dollar" },
  { code: "EUR", name: "Euro" },
  { code: "GBP", name: "British Pound" },
  { code: "JPY", name: "Japanese Yen" },
  { code: "AUD", name: "Australian Dollar" },
  { code: "CAD", name: "Canadian Dollar" },
  { code: "CHF", name: "Swiss Franc" },
  { code: "CNY", name: "Chinese Yuan" },
  { code: "HKD", name: "Hong Kong Dollar" },
  { code: "NZD", name: "New Zealand Dollar" },
  { code: "SEK", name: "Swedish Krona" },
  { code: "KRW", name: "South Korean Won" },
  { code: "SGD", name: "Singapore Dollar" },
  { code: "NOK", name: "Norwegian Krone" },
  { code: "MXN", name: "Mexican Peso" },
  { code: "INR", name: "Indian Rupee" },
  { code: "PKR", name: "Pakistani Rupee" },
  { code: "BDT", name: "Bangladeshi Taka" },
  { code: "LKR", name: "Sri Lankan Rupee" },
  { code: "NPR", name: "Nepalese Rupee" },
  { code: "BRL", name: "Brazilian Real" },
  { code: "ZAR", name: "South African Rand" },
  { code: "TRY", name: "Turkish Lira" },
  { code: "RUB", name: "Russian Ruble" },
  { code: "AED", name: "UAE Dirham" },
  { code: "SAR", name: "Saudi Riyal" },
  { code: "QAR", name: "Qatari Riyal" },
  { code: "KWD", name: "Kuwaiti Dinar" },
  { code: "BHD", name: "Bahraini Dinar" },
  { code: "OMR", name: "Omani Rial" },
  { code: "ILS", name: "Israeli Shekel" },
  { code: "MYR", name: "Malaysian Ringgit" },
  { code: "THB", name: "Thai Baht" },
  { code: "IDR", name: "Indonesian Rupiah" },
  { code: "PHP", name: "Philippine Peso" },
  { code: "VND", name: "Vietnamese Dong" },
  { code: "EGP", name: "Egyptian Pound" },
  { code: "NGN", name: "Nigerian Naira" },
  { code: "KES", name: "Kenyan Shilling" },
  { code: "DKK", name: "Danish Krone" },
  { code: "PLN", name: "Polish Zloty" },
  { code: "CZK", name: "Czech Koruna" },
  { code: "HUF", name: "Hungarian Forint" },
  { code: "RON", name: "Romanian Leu" },
  { code: "UAH", name: "Ukrainian Hryvnia" },
  { code: "ARS", name: "Argentine Peso" },
  { code: "CLP", name: "Chilean Peso" },
  { code: "COP", name: "Colombian Peso" },
  { code: "TWD", name: "Taiwan Dollar" },
].sort((a, b) => a.code.localeCompare(b.code));

const symbolFor = (code) =>
  ({ USD: "$", EUR: "€", GBP: "£", JPY: "¥", PKR: "₨", INR: "₹", CNY: "¥" }[code] || "");

const CurrencyConverter = () => {
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("EUR");
  const [amount, setAmount] = useState("100");
  const [rates, setRates] = useState(null);
  const [base, setBase] = useState(null);
  const [updated, setUpdated] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const ensureRates = async (code) => {
    if (rates && base === code) return true;
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`https://open.er-api.com/v6/latest/${encodeURIComponent(code)}`);
      if (!res.ok) throw new Error("The currency service is unavailable. Please try again shortly.");
      const json = await res.json();
      if (json.result !== "success") throw new Error("The currency service returned an error.");
      setRates(json.rates);
      setBase(code);
      setUpdated(json.time_last_update_utc || null);
      return true;
    } catch (err) {
      setError(err.message || "Failed to load exchange rates.");
      return false;
    } finally {
      setLoading(false);
    }
  };

  const convert = async (e) => {
    if (e) e.preventDefault();
    const parsed = parseFloat(amount);
    if (Number.isNaN(parsed) || parsed <= 0) {
      setError("Enter a valid amount greater than zero.");
      return;
    }
    const ok = await ensureRates(from);
    if (!ok) return;
    setError(null);
  };

  const swap = () => {
    setFrom(to);
    setTo(from);
  };

  const rate = rates && base === from && rates[to] ? rates[to] : null;
  const result = rate && !Number.isNaN(parseFloat(amount))
    ? parseFloat(amount) * rate
    : null;

  return (
    <div className="mx-auto max-w-5xl px-6 py-8 md:py-12">
      <div className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-[0_10px_40px_-18px_rgba(79,70,229,0.25)]">
        <div className="border-b border-gray-100 p-6 sm:p-8">
          <form onSubmit={convert} className="grid gap-4 md:grid-cols-[1fr_auto_1fr_auto]">
            <div>
              <label
                htmlFor="cc-amount"
                className="text-xs font-semibold uppercase tracking-wide text-gray-400"
              >
                Amount
              </label>
              <input
                id="cc-amount"
                type="number"
                min="0"
                step="any"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="mt-2 w-full rounded-full border border-gray-200 bg-gray-50 px-5 py-3 text-sm font-semibold text-gray-800 outline-none transition focus:border-blue-400 focus:bg-white focus:ring-2 focus:ring-blue-500/20"
              />
            </div>

            <div className="flex items-end">
              <label htmlFor="cc-from" className="sr-only">
                From currency
              </label>
              <select
                id="cc-from"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
                className="w-full rounded-full border border-gray-200 bg-gray-50 px-4 py-3 text-sm font-semibold text-gray-700 outline-none transition focus:border-blue-400 focus:bg-white focus:ring-2 focus:ring-blue-500/20 md:w-44"
              >
                {CURRENCIES.map((c) => (
                  <option key={c.code} value={c.code}>
                    {c.code} — {c.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex items-end justify-center">
              <button
                type="button"
                onClick={swap}
                aria-label="Swap currencies"
                className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition hover:bg-gray-200 hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                <ArrowUpDown className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            <div>
              <label htmlFor="cc-to" className="sr-only">
                To currency
              </label>
              <select
                id="cc-to"
                value={to}
                onChange={(e) => setTo(e.target.value)}
                className="mt-2 w-full rounded-full border border-gray-200 bg-gray-50 px-4 py-3 text-sm font-semibold text-gray-700 outline-none transition focus:border-blue-400 focus:bg-white focus:ring-2 focus:ring-blue-500/20 md:mt-0 md:w-44"
              >
                {CURRENCIES.map((c) => (
                  <option key={c.code} value={c.code}>
                    {c.code} — {c.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="md:col-span-4">
              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-3 text-sm font-semibold text-white shadow-md shadow-blue-600/25 transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {loading ? (
                  <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                ) : (
                  <Banknote className="h-4 w-4" aria-hidden="true" />
                )}
                Convert
              </button>
            </div>
          </form>
        </div>

        <div className="p-6 sm:p-8">
          {error && (
            <p className="mb-5 rounded-2xl border border-red-100 bg-red-50 px-5 py-3 text-sm font-medium text-red-600">
              {error}
            </p>
          )}

          {result !== null && rate ? (
            <>
              <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                {amount} {from} equals
              </p>
              <p className="mt-1 break-words text-3xl font-bold text-black sm:text-5xl">
                {symbolFor(to)}
                {result.toLocaleString(undefined, { maximumFractionDigits: 2 })}{" "}
                <span className="text-xl font-bold text-gray-400 sm:text-2xl">{to}</span>
              </p>
              <p className="mt-3 text-sm text-gray-500">
                1 {from} ={" "}
                {rate.toLocaleString(undefined, { maximumFractionDigits: 6 })} {to}
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <CopyButton
                  value={`${amount} ${from} = ${result.toLocaleString(undefined, { maximumFractionDigits: 2 })} ${to}`}
                  label="conversion result"
                  size="lg"
                />
              </div>
            </>
          ) : (
            <p className="text-center text-sm font-medium text-gray-400">
              Enter an amount, choose your currency pair and press Convert.
            </p>
          )}
        </div>

        <div className="border-t border-gray-100 bg-gray-50/60 px-6 py-5 sm:px-10">
          <p className="flex items-start gap-2 text-xs text-gray-400">
            <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
            <span>
              Live mid-market rates from a free open API, updated daily. Banks add
              their own margin on top of these rates.
              {updated ? ` Rates last updated ${new Date(updated).toUTCString()}.` : ""}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CurrencyConverter;
