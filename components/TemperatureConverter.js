"use client";

import { useState } from "react";
import { RefreshCw, Thermometer } from "lucide-react";
import CopyButton from "./CopyButton";

const UNITS = [
  { id: "C", label: "Celsius (°C)" },
  { id: "F", label: "Fahrenheit (°F)" },
  { id: "K", label: "Kelvin (K)" },
];

const toCelsius = (value, from) => {
  if (from === "C") return value;
  if (from === "F") return (value - 32) * (5 / 9);
  return value - 273.15;
};

const fromCelsius = (c, to) => {
  if (to === "C") return c;
  if (to === "F") return c * (9 / 5) + 32;
  return c + 273.15;
};

const format = (v) => {
  if (Number.isNaN(v) || !Number.isFinite(v)) return "";
  return v.toLocaleString(undefined, { maximumFractionDigits: 2 });
};

const TemperatureConverter = () => {
  const [unit, setUnit] = useState("C");
  const [value, setValue] = useState("0");
  const parsed = parseFloat(value);
  const celsius = Number.isNaN(parsed) ? NaN : toCelsius(parsed, unit);

  const clear = () => {
    setValue("");
    setUnit("C");
  };

  return (
    <div className="mx-auto max-w-5xl px-6 py-8 md:py-12">
      <div className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-[0_10px_40px_-18px_rgba(79,70,229,0.25)]">
        <div className="border-b border-gray-100 p-6 sm:p-8">
          <label
            htmlFor="temp-input"
            className="text-xs font-semibold uppercase tracking-wide text-gray-400"
          >
            Temperature
          </label>
          <input
            id="temp-input"
            type="number"
            step="any"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="0"
            className="mt-3 w-full rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4 text-2xl font-bold text-gray-800 outline-none transition placeholder:text-gray-300 focus:border-blue-400 focus:bg-white focus:ring-2 focus:ring-blue-500/20"
          />
          <div className="mt-4 flex flex-wrap items-center gap-2">
            {UNITS.map((u) => (
              <button
                key={u.id}
                type="button"
                onClick={() => setUnit(u.id)}
                aria-pressed={unit === u.id}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                  unit === u.id
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md shadow-blue-600/25"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {u.label}
              </button>
            ))}
            <button
              type="button"
              onClick={clear}
              className="ml-auto inline-flex items-center gap-1.5 rounded-full border border-gray-200 px-4 py-2 text-sm font-semibold text-gray-500 transition hover:border-gray-300 hover:text-gray-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              <RefreshCw className="h-3.5 w-3.5" aria-hidden="true" />
              Clear
            </button>
          </div>
        </div>

        <div className="grid gap-4 p-6 sm:grid-cols-3 sm:p-8">
          {UNITS.filter((u) => u.id !== unit).map((u) => {
            const converted = Number.isNaN(celsius) ? NaN : fromCelsius(celsius, u.id);
            return (
              <div
                key={u.id}
                className="rounded-2xl border border-gray-100 bg-gray-50/70 p-5"
              >
                <div className="flex items-center justify-between gap-2">
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                    {u.label}
                  </p>
                  <CopyButton value={format(converted)} label={`${u.label} value`} />
                </div>
                <p className="mt-2 break-words text-3xl font-bold text-black">
                  {format(converted)}
                </p>
              </div>
            );
          })}
        </div>

        <div className="border-t border-gray-100 bg-gray-50/60 px-6 py-5 sm:px-10">
          <p className="flex items-start gap-2 text-xs text-gray-400">
            <Thermometer className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
            <span>
              Conversion is instant — results update as you type. Water freezes at
              0°C / 32°F / 273.15K and boils at 100°C / 212°F / 373.15K.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TemperatureConverter;
