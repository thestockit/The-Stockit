import ToolPageLayout from "@/components/ToolPageLayout";
import JsonFormatter from "@/components/JsonFormatter";
import { SITE } from "@/constant/site";
import { createMetadata } from "@/Data/Seo/seo-utils";
import { jsonFormatterFaqs } from "@/Data/Tools/faqs";
import { relatedFor } from "@/Data/Tools/tools";

export const metadata = createMetadata({
  title: "JSON Formatter & Validator — Beautify & Minify | The Stockit",
  description:
    "Free online JSON formatter and validator. Beautify, minify and validate JSON instantly with clear error messages. Perfect for developers and API work.",
  keywords:
    "JSON formatter, JSON beautifier, JSON validator, JSON pretty print, minify JSON, format JSON online",
  url: `${SITE.baseUrl}/tools/json-formatter`,
  image: "/og/og-tools-json-formatter.jpg",
  type: "website",
});

const articles = [
  {
    id: "what-is-json",
    title: "What is JSON and why format it?",
    body: (
      <>
        <p>
          JSON (JavaScript Object Notation) is the lightweight data format that
          powers most of the modern web — every REST API, configuration file and
          NoSQL database record uses it. It is made of key-value pairs, arrays
          and nested objects that are easy for machines to read but genuinely
          hard for humans to scan in a single long line.
        </p>
        <p>
          Formatting (or "pretty-printing") JSON adds indentation and line
          breaks so the structure becomes visible at a glance. This tool
          beautifies, minifies and validates JSON with errors that point you to
          the exact position of the problem.
        </p>
      </>
    ),
  },
  {
    id: "common-errors",
    title: "Common JSON errors and how to fix them",
    body: (
      <>
        <p>
          The most frequent mistakes our validator catches:
        </p>
        <ul>
          <li>
            <strong>Trailing commas</strong> — an extra <code>,</code> after the
            last item in an object or array. JSON does not allow them.
          </li>
          <li>
            <strong>Single quotes</strong> — JSON requires double quotes around
            every key and string value.
          </li>
          <li>
            <strong>Unquoted keys</strong> — keys must be wrapped in quotes, a
            common slip when pasting JavaScript objects.
          </li>
          <li>
            <strong>Missing commas or brackets</strong> — a lost <code>{'}'}</code>{" "}
            or <code>{']'}</code> at the end of a long payload.
          </li>
        </ul>
        <p>
          When validation fails, we highlight the offending line and show a
          position indicator like{" "}
          <code>Line 4, column 17 — expected , or {'}'}</code> so you know exactly
          where to look.
        </p>
      </>
    ),
  },
  {
    id: "minify-for-api",
    title: "When to minify JSON",
    body: (
      <>
        <p>
          Minified JSON removes every space, tab and newline, shrinking payloads
          for storage and transport. For large API responses, minifying can cut
          file size by up to 30%, which means faster downloads and lower
          bandwidth bills. Use <strong>Minify</strong> when preparing payloads
          for production, and <strong>Format</strong> when you need to read or
          debug them.
        </p>
        <p>
          Combined with our{" "}
          <a href="/tools/base64-converter" className="text-blue-600 hover:underline">
            Base64 encoder
          </a>{" "}
          and{" "}
          <a href="/tools/url-encoder" className="text-blue-600 hover:underline">
            URL encoder
          </a>
          , you can move JSON between tools, APIs and storage formats without
          leaving the browser.
        </p>
      </>
    ),
  },
  {
    id: "privacy",
    title: "Your JSON never leaves your browser",
    body: (
      <>
        <p>
          Parsing, validation, beautifying and minifying all run locally with
          the browser's native <code>JSON.parse</code> engine. Nothing you paste
          is uploaded, stored or logged — so it is safe to run configs, keys and
          internal API responses through it.
        </p>
        <p>
          If you are moving JSON around web apps, pair this with our{" "}
          <a href="/tools/uuid-generator" className="text-blue-600 hover:underline">
            UUID generator
          </a>{" "}
          for IDs and the{" "}
          <a href="/tools/hash-generator" className="text-blue-600 hover:underline">
            hash generator
          </a>{" "}
          for checksums.
        </p>
      </>
    ),
  },
];

const JsonFormatterPage = () => (
  <ToolPageLayout
    kicker="Free Tool · No Sign-Up · No Tracking"
    title="JSON Formatter & Validator — Beautify & Minify"
    breadcrumbName="JSON Formatter"
    intro="Format, minify and validate JSON instantly. Clear, position-aware error messages make debugging fast — and everything runs locally in your browser."
    schema={{
      tool: "tools/json-formatter",
      name: "JSON Formatter & Validator — Beautify & Minify",
      path: "/tools/json-formatter",
      description:
        "Free online JSON formatter, beautifier, minifier and validator with position-aware error messages that runs entirely in the browser.",
      keywords: "JSON formatter, JSON beautifier, JSON validator, minify JSON, pretty print",
    }}
    articles={articles}
    faqs={jsonFormatterFaqs}
    faqTitle="JSON Formatter FAQ"
    faqDescription="Common questions about formatting and validating JSON, answered by our web experts."
    related={relatedFor("json-formatter")}
  >
    <JsonFormatter />
  </ToolPageLayout>
);

export default JsonFormatterPage;
