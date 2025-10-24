// components/Toc.js
"use client";

import React, { useEffect, useState } from "react";

export default function TableOfContents({ offset = 100 }) {
  const [headings, setHeadings] = useState([]);
  const [activeId, setActiveId] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Find headings inside the article element (server-rendered)
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
      return { id, text: node.textContent, level: Number(node.tagName[1]) };
    });

    setHeadings(hs);

    // IntersectionObserver for scrollspy
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
    <div className="md:sticky md:top-24 self-start">
      {/* Mobile: collapsible */}
      <div className="md:hidden mb-4">
        <button
          onClick={() => setOpen((s) => !s)}
          className="w-full px-4 py-2 text-left font-semibold bg-gradient-to-r from-[#6a5acd] to-[#48d1cc] text-white rounded-lg"
          aria-expanded={open}
        >
          📑 Table of Contents
        </button>

        {open && (
          <nav className="mt-3 bg-white border-gradient rounded-xl p-4 shadow">
            <ul className="space-y-2 text-sm">
              {headings.map((h) => (
                <li key={h.id} className={h.level === 3 ? "pl-4" : ""}>
                  <a
                    href={`#${h.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToId(h.id);
                    }}
                    className={`block cursor-pointer ${
                      activeId === h.id ? "text-[#6a5acd] font-semibold" : "text-gray-700 hover:text-[#48d1cc]"
                    }`}
                  >
                    {h.text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>

      {/* Desktop: sticky sidebar */}
      <div className="hidden md:block border-gradient rounded-xl bg-white p-4 shadow max-w-[300px]">
        <h3 className="text-lg font-semibold mb-3 text-[#6a5acd]">📑 Table of Contents</h3>
        <ul className="space-y-2 text-sm">
          {headings.map((h) => (
            <li key={h.id} className={h.level === 3 ? "pl-4" : ""}>
              <a
                href={`#${h.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToId(h.id);
                }}
                className={`flex items-center gap-2 cursor-pointer ${
                  activeId === h.id ? "text-[#6a5acd] font-semibold" : "text-gray-700 hover:text-[#48d1cc]"
                }`}
                aria-current={activeId === h.id ? "true" : undefined}
              >
                <span
                  className={`inline-block w-1 h-4 rounded ${
                    activeId === h.id ? "bg-gradient-to-b from-[#6a5acd] to-[#48d1cc]" : "bg-transparent"
                  }`}
                />
                <span className="truncate">{h.text}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
