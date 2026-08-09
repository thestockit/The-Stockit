"use client";

import { useState } from "react";
import { Download, Loader2, QrCode, ShieldCheck } from "lucide-react";

const ECC = [
  { value: "L", label: "Low (L)" },
  { value: "M", label: "Medium (M)" },
  { value: "Q", label: "Quartile (Q)" },
  { value: "H", label: "High (H)" },
];

const buildUrl = ({ data, size, foreground, background, ecc, margin }) => {
  const params = new URLSearchParams({
    data,
    size: `${size}x${size}`,
    color: foreground.replace("#", ""),
    bgcolor: background.replace("#", ""),
    qzone: String(margin),
    ecc,
  });
  return `https://api.qrserver.com/v1/create-qr-code/?${params.toString()}`;
};

const QrCodeGenerator = () => {
  const [data, setData] = useState("");
  const [size, setSize] = useState(200);
  const [foreground, setForeground] = useState("#111827");
  const [background, setBackground] = useState("#ffffff");
  const [ecc, setEcc] = useState("M");
  const [margin, setMargin] = useState(1);
  const [qr, setQr] = useState(null);
  const [loading, setLoading] = useState(false);

  const generate = (e) => {
    if (e) e.preventDefault();
    if (!data.trim()) return;
    setLoading(true);
    const url = buildUrl({ data, size, foreground, background, ecc, margin });
    const probe = new Image();
    probe.onload = () => {
      setQr(url);
      setLoading(false);
    };
    probe.onerror = () => {
      setLoading(false);
    };
    probe.src = url;
  };

  const canGenerate = data.trim().length > 0 && !loading;

  return (
    <div className="mx-auto max-w-5xl px-6 py-8 md:py-12">
      <div className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-[0_10px_40px_-18px_rgba(79,70,229,0.25)]">
        <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-2">
          <div>
            <form onSubmit={generate}>
              <label
                htmlFor="qr-data"
                className="text-xs font-semibold uppercase tracking-wide text-gray-400"
              >
                Content
              </label>
              <textarea
                id="qr-data"
                value={data}
                onChange={(e) => setData(e.target.value)}
                placeholder="URL, text, Wi-Fi (WIFI:T:WPA;S:…;P:…;;) or any content…"
                rows={4}
                spellCheck="false"
                className="mt-3 w-full resize-y rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4 text-sm font-medium leading-relaxed text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-blue-400 focus:bg-white focus:ring-2 focus:ring-blue-500/20"
              />

              <div className="mt-5 grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="qr-size"
                    className="text-xs font-semibold uppercase tracking-wide text-gray-400"
                  >
                    Size: {size}px
                  </label>
                  <input
                    id="qr-size"
                    type="range"
                    min="100"
                    max="500"
                    step="25"
                    value={size}
                    onChange={(e) => setSize(Number(e.target.value))}
                    className="mt-3 w-full accent-blue-600"
                  />
                </div>
                <div>
                  <label
                    htmlFor="qr-margin"
                    className="text-xs font-semibold uppercase tracking-wide text-gray-400"
                  >
                    Margin: {margin}
                  </label>
                  <input
                    id="qr-margin"
                    type="range"
                    min="0"
                    max="10"
                    value={margin}
                    onChange={(e) => setMargin(Number(e.target.value))}
                    className="mt-3 w-full accent-blue-600"
                  />
                </div>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="qr-fg"
                    className="text-xs font-semibold uppercase tracking-wide text-gray-400"
                  >
                    Foreground
                  </label>
                  <div className="mt-2 flex items-center gap-3">
                    <input
                      id="qr-fg"
                      type="color"
                      value={foreground}
                      onChange={(e) => setForeground(e.target.value)}
                      className="h-10 w-14 cursor-pointer rounded-lg border border-gray-200 bg-white p-1"
                    />
                    <span className="font-mono text-xs text-gray-600">
                      {foreground}
                    </span>
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="qr-bg"
                    className="text-xs font-semibold uppercase tracking-wide text-gray-400"
                  >
                    Background
                  </label>
                  <div className="mt-2 flex items-center gap-3">
                    <input
                      id="qr-bg"
                      type="color"
                      value={background}
                      onChange={(e) => setBackground(e.target.value)}
                      className="h-10 w-14 cursor-pointer rounded-lg border border-gray-200 bg-white p-1"
                    />
                    <span className="font-mono text-xs text-gray-600">
                      {background}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                  Error correction
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {ECC.map((e) => (
                    <button
                      key={e.value}
                      type="button"
                      onClick={() => setEcc(e.value)}
                      aria-pressed={ecc === e.value}
                      className={`rounded-full px-4 py-1.5 text-xs font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                        ecc === e.value
                          ? "bg-gray-800 text-white"
                          : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                      }`}
                    >
                      {e.label}
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                disabled={!canGenerate}
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-2.5 text-sm font-semibold text-white shadow-md shadow-blue-600/25 transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <QrCode className="h-4 w-4" aria-hidden="true" />
                Generate QR Code
              </button>
            </form>
          </div>

          <div className="flex flex-col items-center justify-center rounded-2xl border border-gray-100 bg-gray-50/50 p-6">
            {loading ? (
              <div className="flex flex-col items-center gap-3 text-gray-400">
                <Loader2 className="h-8 w-8 animate-spin" aria-hidden="true" />
                <p className="text-sm font-medium">Generating…</p>
              </div>
            ) : qr ? (
              <>
                {/* eslint-disable-next-line @next/next/no-img-element -- QR is a dynamic external API image, no local optimization applies */}
                <img
                  src={qr}
                  alt={`QR code for ${data}`}
                  width={size}
                  height={size}
                  className="rounded-xl border border-gray-200 bg-white shadow-sm"
                />
                <a
                  href={qr}
                  download="qrcode.png"
                  className="mt-5 inline-flex items-center gap-2 rounded-full bg-gray-900 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-gray-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-500"
                >
                  <Download className="h-4 w-4" aria-hidden="true" />
                  Download PNG
                </a>
              </>
            ) : (
              <p className="max-w-xs text-center text-sm font-medium text-gray-400">
                Your QR code will appear here — ready to download as a PNG and
                use anywhere.
              </p>
            )}
          </div>
        </div>

        <div className="border-t border-gray-100 bg-gray-50/60 px-6 py-5 sm:px-10">
          <p className="flex items-start gap-2 text-xs text-gray-400">
            <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
            <span>
              Free and unlimited. Codes are rendered by a public QR service —
              avoid encoding sensitive data you would not want scanned.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default QrCodeGenerator;
