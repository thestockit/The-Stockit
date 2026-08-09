import ToolPageLayout from "@/components/ToolPageLayout";
import Base64Converter from "@/components/Base64Converter";
import { SITE } from "@/constant/site";
import { createMetadata } from "@/Data/Seo/seo-utils";
import { base64ConverterFaqs } from "@/Data/Tools/faqs";
import { relatedFor } from "@/Data/Tools/tools";

export const metadata = createMetadata({
  title: "Base64 Encoder / Decoder — UTF-8 Safe | The Stockit",
  description:
    "Free online Base64 encoder and decoder with full UTF-8 support for emojis and non-Latin scripts. Encode or decode instantly in your browser — private and secure.",
  keywords:
    "base64 encode, base64 decode, base64 converter, base64 to text, text to base64, UTF-8 base64",
  url: `${SITE.baseUrl}/tools/base64-converter`,
  image: "/og/og-tools-base64-converter.jpg",
  type: "website",
});

const articles = [
  {
    id: "what-is-base64",
    title: "What is Base64?",
    body: (
      <>
        <p>
          Base64 is an encoding that turns binary data into safe ASCII text
          using a 64-character alphabet (<code>A–Z</code>, <code>a–z</code>,{" "}
          <code>0–9</code>, <code>+</code>, <code>/</code> and padding{" "}
          <code>=</code>). It lets you carry raw bytes through channels that
          only understand text — email bodies, URLs, JSON fields and HTTP
          headers.
        </p>
        <p>
          It is <strong>not encryption</strong>: Base64 is trivially reversible
          and adds about 33% overhead. Use it for transport and storage formats,
          never for hiding content.
        </p>
      </>
    ),
  },
  {
    id: "utf8-support",
    title: "Why UTF-8 matters for Base64",
    body: (
      <>
        <p>
          Emojis, Arabic, Urdu, Chinese and accented characters each occupy 2–4
          bytes in UTF-8. If a Base64 tool ignores this and treats input as a
          single byte per character, those characters get mangled. Our encoder
          uses the browser's <code>TextEncoder</code> so every multi-byte
          character round-trips perfectly.
        </p>
        <p>
          A quick way to verify: encode the emoji <code>🚀</code> — the correct
          UTF-8 result is <code>8J+Umg==</code>. If your tool produces something
          shorter, it is not UTF-8 safe.
        </p>
      </>
    ),
  },
  {
    id: "common-uses",
    title: "Common uses of Base64",
    body: (
      <>
        <ul>
          <li>
            <strong>Data URIs</strong> — embedding small images as{" "}
            <code>data:image/png;base64,…</code> directly in HTML or CSS to cut
            HTTP requests.
          </li>
          <li>
            <strong>API tokens</strong> — the middle section of every JWT is a
            Base64-encoded JSON payload.
          </li>
          <li>
            <strong>Email attachments</strong> — MIME encodes attachments as
            Base64 before sending.
          </li>
          <li>
            <strong>Storing binary in text fields</strong> — databases and JSON
            payloads that cannot hold raw bytes.
          </li>
        </ul>
        <p>
          When you are moving data between formats, our{" "}
          <a href="/tools/json-formatter" className="text-blue-600 hover:underline">
            JSON formatter
          </a>{" "}
          and{" "}
          <a href="/tools/url-encoder" className="text-blue-600 hover:underline">
            URL encoder
          </a>{" "}
          cover the surrounding steps.
        </p>
      </>
    ),
  },
  {
    id: "url-safe",
    title: "Standard vs URL-safe Base64",
    body: (
      <>
        <p>
          In URLs, the <code>+</code> and <code>/</code> characters and the{" "}
          <code>=</code> padding can be misinterpreted or stripped. URL-safe
          Base64 replaces them with <code>-</code> and <code>_</code>, and drops
          padding. Most tools (and this one) encode standard Base64 — if you are
          building signed URLs, apply URL-safe substitution afterwards, and our{" "}
          <a href="/tools/url-encoder" className="text-blue-600 hover:underline">
            URL encoder
          </a>{" "}
          will handle the percent-encoding on top.
        </p>
      </>
    ),
  },
];

const Base64ConverterPage = () => (
  <ToolPageLayout
    kicker="Free Tool · No Sign-Up · No Tracking"
    title="Base64 Encoder / Decoder — UTF-8 Safe"
    breadcrumbName="Base64 Converter"
    intro="Encode or decode Base64 instantly with correct UTF-8 handling for emojis and non-Latin scripts. Fully client-side — your data never leaves this page."
    schema={{
      tool: "tools/base64-converter",
      name: "Base64 Encoder / Decoder — UTF-8 Safe",
      path: "/tools/base64-converter",
      description:
        "Free online Base64 encoder and decoder with full UTF-8 support for emojis and non-Latin scripts, running entirely in the browser.",
      keywords: "base64 encode, base64 decode, base64 converter, base64 to text, UTF-8 base64",
    }}
    articles={articles}
    faqs={base64ConverterFaqs}
    faqTitle="Base64 Converter FAQ"
    faqDescription="Common questions about Base64 encoding, answered by our web experts."
    related={relatedFor("base64-converter")}
  >
    <Base64Converter />
  </ToolPageLayout>
);

export default Base64ConverterPage;
