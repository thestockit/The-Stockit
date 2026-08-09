"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";

const ToolFaqs = ({ title, description, items = [] }) => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="mx-auto max-w-5xl px-6 py-10 md:py-14">
      <div className="text-center">
        <p className="text-xs font-semibold uppercase tracking-wider text-blue-600">
          Frequently Asked
        </p>
        <h2 className="mt-2 text-2xl font-bold text-black sm:text-3xl">{title}</h2>
        {description && (
          <p className="mx-auto mt-3 max-w-2xl text-center font-medium leading-relaxed tracking-wide text-gray-500">
            {description}
          </p>
        )}
      </div>

      <div className="mt-8 space-y-3">
        {items.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={item.question}
              className={`overflow-hidden rounded-2xl border transition ${
                isOpen
                  ? "border-gray-200 bg-white shadow-sm"
                  : "border-gray-200 bg-white hover:border-gray-300"
              }`}
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${index}`}
                className="flex w-full items-center justify-between gap-4 p-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                <h3 className="text-base font-semibold leading-snug text-gray-900 md:text-lg">
                  {item.question}
                </h3>
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition ${
                    isOpen
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  {isOpen ? (
                    <Minus className="h-4 w-4" aria-hidden="true" />
                  ) : (
                    <Plus className="h-4 w-4" aria-hidden="true" />
                  )}
                </span>
              </button>
              {isOpen && (
                <div
                  id={`faq-answer-${index}`}
                  className="px-5 pb-5"
                >
                  <p className="leading-relaxed text-gray-600">{item.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ToolFaqs;
