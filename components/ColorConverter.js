"use client";

import { useState } from "react";
import { Palette, ShieldCheck } from "lucide-react";
import CopyButton from "./CopyButton";

const clamp = (n, lo, hi) => Math.min(hi, Math.max(lo, n));

const hexToRgb = (hex) => {
  let h = String(hex || "").trim().replace(/^#/, "");
  if (h.length === 3 || h.length === 4) {
    h = h.split("").map((c) => c + c).join("");
  }
  if ((h.length !== 6 && h.length !== 8) || !/^[0-9a-fA-F]+$/.test(h)) return null;
  return {
    r: parseInt(h.slice(0, 2), 16),
    g: parseInt(h.slice(2, 4), 16),
    b: parseInt(h.slice(4, 6), 16),
    a: h.length === 8 ? Math.round((parseInt(h.slice(6, 8), 16) / 255) * 100) / 100 : 1,
  };
};

const rgbToHex = ({ r, g, b, a }) => {
  const to2 = (n) => clamp(Math.round(n), 0, 255).toString(16).padStart(2, "0");
  const hex = `#${to2(r)}${to2(g)}${to2(b)}`;
  return a < 1 ? hex + to2(a * 255) : hex;
};

const rgbToHsl = ({ r, g, b }) => {
  const rn = r / 255;
  const gn = g / 255;
  const bn = b / 255;
  const max = Math.max(rn, gn, bn);
  const min = Math.min(rn, gn, bn);
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;
  const d = max - min;
  if (d !== 0) {
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    if (max === rn) h = (gn - bn) / d + (gn < bn ? 6 : 0);
    else if (max === gn) h = (bn - rn) / d + 2;
    else h = (rn - gn) / d + 4;
    h *= 60;
  }
  return { h: Math.round(h), s: Math.round(s * 100), l: Math.round(l * 100) };
};

const hslToRgb = (h, s, l) => {
  const sn = s / 100;
  const ln = l / 100;
  const c = (1 - Math.abs(2 * ln - 1)) * sn;
  const hp = (((h % 360) + 360) % 360) / 60;
  const x = c * (1 - Math.abs((hp % 2) - 1));
  let rgb;
  if (hp < 1) rgb = [c, x, 0];
  else if (hp < 2) rgb = [0, x, c];
  else if (hp < 3) rgb = [0, c, x];
  else if (hp < 4) rgb = [x, 0, c];
  else if (hp < 5) rgb = [c, 0, x];
  else rgb = [c, x, 0];
  const m = ln - c / 2;
  return {
    r: Math.round((rgb[0] + m) * 255),
    g: Math.round((rgb[1] + m) * 255),
    b: Math.round((rgb[2] + m) * 255),
  };
};

const parseRgb = (s) => {
  const parts = String(s).replace(/[^0-9.,-]/g, "").split(",").map((p) => parseFloat(p));
  if (parts.length < 3 || parts.some((p) => Number.isNaN(p))) return null;
  const [r, g, b] = parts;
  const a = parts.length >= 4 ? parts[3] : 1;
  if (r < 0 || r > 255 || g < 0 || g > 255 || b < 0 || b > 255 || a < 0 || a > 1) return null;
  return { r, g, b, a };
};

const formatRgb = ({ r, g, b, a }) =>
  a < 1 ? `${r}, ${g}, ${b}, ${a}` : `${r}, ${g}, ${b}`;

const parseHsl = (s) => {
  const parts = String(s).replace(/[^0-9.,-]/g, "").split(",").map((p) => parseFloat(p));
  if (parts.length < 3 || parts.some((p) => Number.isNaN(p))) return null;
  const [h, sat, light] = parts;
  const a = parts.length >= 4 ? parts[3] : 1;
  if (h < 0 || h > 360 || sat < 0 || sat > 100 || light < 0 || light > 100 || a < 0 || a > 1) return null;
  return { h, s: sat, l: light, a };
};

const formatHsl = ({ h, s, l, a }) =>
  a < 1 ? `${h}, ${s}%, ${l}%, ${a}` : `${h}, ${s}%, ${l}%`;

const ColorField = ({ id, label, value, onChange, prefix }) => (
  <div className="flex items-center gap-3">
    <label htmlFor={id} className="w-10 shrink-0 text-xs font-semibold uppercase tracking-wide text-gray-400">
      {label}
    </label>
    <div className="flex min-w-0 flex-1 items-center rounded-full border border-gray-200 bg-gray-50 px-4 focus-within:border-blue-400 focus-within:bg-white focus-within:ring-2 focus-within:ring-blue-500/20">
      {prefix && <span className="mr-2 text-sm font-semibold text-gray-400">{prefix}</span>}
      <input
        id={id}
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        spellCheck="false"
        className="min-w-0 flex-1 bg-transparent py-3 font-mono text-sm font-medium text-gray-800 outline-none"
      />
    </div>
  </div>
);

const ColorConverter = () => {
  const [hex, setHex] = useState("#4f46e5");
  const [rgb, setRgb] = useState("79, 70, 229");
  const [hsl, setHsl] = useState("245, 76%, 59%");
  const [error, setError] = useState(null);
  const [color, setColor] = useState({ r: 79, g: 70, b: 229, a: 1 });

  const apply = ({ r, g, b, a }) => {
    setColor({ r, g, b, a });
    setHex(rgbToHex({ r, g, b, a }));
    setRgb(formatRgb({ r, g, b, a }));
    const { h, s, l } = rgbToHsl({ r, g, b });
    setHsl(formatHsl({ h, s, l, a }));
    setError(null);
  };

  const onHex = (value) => {
    setHex(value);
    const parsed = hexToRgb(value);
    if (parsed) apply(parsed);
    else if (value.trim()) setError("That is not a valid HEX color.");
  };

  const onRgb = (value) => {
    setRgb(value);
    const parsed = parseRgb(value);
    if (parsed) apply(parsed);
    else if (value.trim()) setError("Use the format R, G, B or R, G, B, A (0–255, alpha 0–1).");
  };

  const onHsl = (value) => {
    setHsl(value);
    const parsed = parseHsl(value);
    if (parsed) {
      const { r, g, b } = hslToRgb(parsed.h, parsed.s, parsed.l);
      apply({ r, g, b, a: parsed.a });
    } else if (value.trim()) {
      setError("Use the format H, S%, L% or H, S%, L%, A (H 0–360, S/L 0–100).");
    }
  };

  const swatch = `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`;

  return (
    <div className="mx-auto max-w-5xl px-6 py-8 md:py-12">
      <div className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-[0_10px_40px_-18px_rgba(79,70,229,0.25)]">
        <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-2">
          <div className="space-y-4">
            <ColorField id="color-hex" label="HEX" value={hex} onChange={onHex} prefix="#" />
            <ColorField id="color-rgb" label="RGB" value={rgb} onChange={onRgb} prefix="rgb()" />
            <ColorField id="color-hsl" label="HSL" value={hsl} onChange={onHsl} prefix="hsl()" />

            <div>
              <label
                htmlFor="color-picker"
                className="text-xs font-semibold uppercase tracking-wide text-gray-400"
              >
                Or pick a color
              </label>
              <input
                id="color-picker"
                type="color"
                value={hex.length === 9 ? hex.slice(0, 7) : hex}
                onChange={(e) => onHex(e.target.value)}
                className="mt-2 h-12 w-full cursor-pointer rounded-xl border border-gray-200 bg-white p-1"
              />
            </div>

            {error && (
              <p className="rounded-2xl border border-red-100 bg-red-50 px-5 py-3 text-sm font-medium text-red-600">
                {error}
              </p>
            )}
          </div>

          <div className="flex flex-col items-center justify-center rounded-2xl border border-gray-100 bg-gray-50/50 p-6">
            <div
              className="h-40 w-full rounded-2xl border border-gray-200 shadow-inner"
              style={{ backgroundColor: swatch }}
              role="img"
              aria-label={`Color preview: ${hex}`}
            />
            <div className="mt-6 flex w-full flex-wrap items-center justify-center gap-2">
              <CopyButton value={hex} label="HEX color" />
              <CopyButton value={`rgb(${formatRgb(color)})`} label="RGB color" />
              <CopyButton value={`hsl(${formatHsl({ ...rgbToHsl(color), a: color.a })})`} label="HSL color" />
            </div>
            <p className="mt-4 text-xs text-gray-400">
              {hex} = rgb({formatRgb(color)}) = hsl({formatHsl({ ...rgbToHsl(color), a: color.a })})
            </p>
          </div>
        </div>

        <div className="border-t border-gray-100 bg-gray-50/60 px-6 py-5 sm:px-10">
          <p className="flex items-start gap-2 text-xs text-gray-400">
            <Palette className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
            <span>
              Supports HEX, RGBA and HSLA including transparency. All conversion
              happens locally in your browser.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ColorConverter;
