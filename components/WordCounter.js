"use client";

import { useMemo, useState } from "react";
import { FileText, ShieldCheck } from "lucide-react";
import CopyButton from "./CopyButton";

const countWords = (s) => (s.trim() ? s.trim().split(/\s+/).length : 0);
const countSentences = (s) =>
  (s.match(/[.!?…]+(\s|$)/g) || []).length || (s.trim() ? 1 : 0);
const countParagraphs = (s) =>
  s
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean).length;
const readingMinutes = (words, wpm = 230) =>
  Math.max(1, Math.ceil(words / wpm));
const speakingMinutes = (words, wpm = 130) =>
  Math.max(1, Math.ceil(words / wpm));

const formatMinutes = (min) => {
  if (min < 60) return `${min} min`;
  const h = Math.floor(min / 60);
  const m = min % 60;
  return m ? `${h} hr ${m} min` : `${h} hr`;
};

const StatCard = ({ label, value }) => (
  <div className="rounded-2xl border border-gray-100 bg-gray-50/60 p-4 text-center">
    <p className="text-2xl font-bold text-black sm:text-3xl">{value}</p>
    <p className="mt-1 text-xs font-medium uppercase tracking-wide text-gray-400">
      {label}
    </p>
  </div>
);

const WordCounter = () => {
  const [input, setInput] = useState("");

  const stats = useMemo(() => {
    const words = countWords(input);
    const chars = input.length;
    const charsNoSpaces = input.replace(/\s/g, "").length;
    return {
      words,
      chars,
      charsNoSpaces,
      sentences: countSentences(input),
      paragraphs: countParagraphs(input),
      reading: formatMinutes(readingMinutes(words)),
      speaking: formatMinutes(speakingMinutes(words)),
    };
  }, [input]);

  const active = input.trim().length > 0;

  return (
    <div className="mx-auto max-w-5xl px-6 py-8 md:py-12">
      <div className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-[0_10px_40px_-18px_rgba(79,70,229,0.25)]">
        <div className="p-6 sm:p-8">
          <div className="flex items-center justify-between">
            <label
              htmlFor="word-counter-input"
              className="text-xs font-semibold uppercase tracking-wide text-gray-400"
            >
              Type or paste your text
            </label>
            {active && (
              <button
                type="button"
                onClick={() => setInput("")}
                className="text-xs font-semibold text-gray-400 transition hover:text-gray-600"
              >
                Clear
              </button>
            )}
          </div>
          <textarea
            id="word-counter-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Start typing or paste your text here to count words, characters, sentences and more…"
            rows={10}
            className="mt-3 w-full resize-y rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4 text-sm font-medium leading-relaxed text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-blue-400 focus:bg-white focus:ring-2 focus:ring-blue-500/20"
          />
        </div>

        <div className="border-t border-gray-100 bg-gray-50/40 p-6 sm:p-8">
          {active ? (
            <>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                <StatCard label="Words" value={stats.words.toLocaleString()} />
                <StatCard label="Characters" value={stats.chars.toLocaleString()} />
                <StatCard
                  label="Characters (no spaces)"
                  value={stats.charsNoSpaces.toLocaleString()}
                />
                <StatCard label="Sentences" value={stats.sentences.toLocaleString()} />
                <StatCard label="Paragraphs" value={stats.paragraphs.toLocaleString()} />
                <StatCard label="Reading time" value={stats.reading} />
                <StatCard label="Speaking time" value={stats.speaking} />
              </div>
              <div className="mt-5 flex flex-wrap items-center gap-3">
                <CopyButton value={input} label="your text" size="lg" />
                <p className="text-xs text-gray-400">
                  Counts update live as you type — nothing is uploaded.
                </p>
              </div>
            </>
          ) : (
            <p className="text-center text-sm font-medium text-gray-400">
              Start typing above to see live word, character and reading-time
              counts.
            </p>
          )}
        </div>

        <div className="border-t border-gray-100 bg-gray-50/60 px-6 py-5 sm:px-10">
          <p className="flex items-start gap-2 text-xs text-gray-400">
            <FileText className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
            <span>
              Reading time uses ~230 words per minute; speaking time uses ~130.
              Your text is processed locally.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default WordCounter;
