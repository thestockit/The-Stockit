"use client";

import { useEffect, useState } from "react";
import { ChevronDown, ListTree } from "lucide-react";

const cleanHeadingText = (raw) =>
  String(raw || "")
    .replace(/^\d+[.)\s]+/, "")
    .replace(/\p{Extended_Pictographic}/gu, "")
    .replace(/[#*`>]+/g, "")
    .replace(/\s+/g, " ")
    .trim();

const linkClasses = (active) =>
  `relative -ml-px block border-l-2 py-1.5 pl-4 text-[13px] leading-snug transition-colors ${
    active
      ? "border-indigo-600 bg-indigo-50/60 font-semibold text-indigo-700"
      : "border-transparent text-gray-600 hover:border-gray-300 hover:text-gray-900"
  }`;

export default function TableOfContents({ offset = 100 }) {
  const [headings, setHeadings] = useState([]);
  const [activeId, setActiveId] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll("article h2, article h3"));
    if (!nodes.length) return;

    const hs = nodes.map((node) => {
      let id = node.id;
      if (!id) {
        id = node.textContent
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/(^-|-$)/g, "");
        node.id = id;
      }
      return { id, text: cleanHeadingText(node.textContent), level: Number(node.tagName[1]) };
    });

    setHeadings(hs);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "-40% 0px -55% 0px",
        threshold: 0,
      }
    );

    nodes.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  }, []);

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top, behavior: "smooth" });
    setOpen(false);
  };

  if (!headings.length) return null;

  return (
    <div className="w-full">
      {/* Desktop card */}
      <div className="hidden md:block rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
        <div className="mb-3 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
              <ListTree className="h-4 w-4" aria-hidden />
            </span>
            <h3 className="text-sm font-bold text-gray-900">On this page</h3>
          </div>
          <span className="rounded-full bg-gray-100 px-2.5 py-1 text-[11px] font-semibold text-gray-500">
            {headings.length} sections
          </span>
        </div>

        <nav>
          <ul className="space-y-0.5">
            {headings.map((h) => (
              <li key={h.id} className={h.level === 3 ? "ml-4" : ""}>
                <a
                  href={`#${h.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToId(h.id);
                  }}
                  className={linkClasses(activeId === h.id)}
                  aria-current={activeId === h.id ? "true" : undefined}
                >
                  {h.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Mobile collapsible */}
      <div className="md:hidden">
        <button
          type="button"
          onClick={() => setOpen((s) => !s)}
          aria-expanded={open}
          className="flex w-full items-center justify-between rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-semibold text-gray-900 shadow-sm transition-colors hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
        >
          <span className="flex items-center gap-2">
            <ListTree className="h-4 w-4 text-indigo-600" aria-hidden />
            On this page
          </span>
          <ChevronDown
            className={`h-4 w-4 text-gray-400 transition-transform duration-200 ${
              open ? "rotate-180" : ""
            }`}
            aria-hidden
          />
        </button>

        {open && (
          <nav className="mt-2 rounded-xl border border-gray-200 bg-white p-3 shadow-sm">
            <ul className="space-y-0.5">
              {headings.map((h) => (
                <li key={h.id} className={h.level === 3 ? "ml-4" : ""}>
                  <a
                    href={`#${h.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToId(h.id);
                    }}
                    className={linkClasses(activeId === h.id)}
                  >
                    {h.text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </div>
  );
}
