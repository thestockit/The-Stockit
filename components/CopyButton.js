"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

const CopyButton = ({ value, label = "value", size = "sm", className = "" }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (e) => {
    e.stopPropagation();
    const text = String(value ?? "");
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  };

  const classes =
    size === "lg"
      ? `inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold shadow-md transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
          copied
            ? "bg-emerald-50 text-emerald-700 focus-visible:ring-emerald-500"
            : "bg-white text-blue-700 hover:bg-blue-50 focus-visible:ring-white"
        }`
      : `flex items-center gap-1 rounded-md px-2 py-1 text-[10px] font-semibold transition focus-visible:outline-none focus-visible:ring-2 ${
          copied
            ? "bg-emerald-100 text-emerald-700 focus-visible:ring-emerald-500"
            : "bg-gray-100 text-gray-500 hover:bg-blue-600 hover:text-white focus-visible:ring-blue-500"
        }`;

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={`Copy ${label}`}
      className={`${classes} ${className}`}
    >
      {copied ? <Check className="h-3 w-3" aria-hidden="true" /> : <Copy className="h-3 w-3" aria-hidden="true" />}
      {copied ? "Copied" : "Copy"}
    </button>
  );
};

export default CopyButton;
