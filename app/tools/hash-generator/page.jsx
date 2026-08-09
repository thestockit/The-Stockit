import ToolPageLayout from "@/components/ToolPageLayout";
import HashGenerator from "@/components/HashGenerator";
import { SITE } from "@/constant/site";
import { createMetadata } from "@/Data/Seo/seo-utils";
import { hashGeneratorFaqs } from "@/Data/Tools/faqs";
import { relatedFor } from "@/Data/Tools/tools";

export const metadata = createMetadata({
  title: "SHA Hash Generator — SHA-1, 256, 384 & 512 | The Stockit",
  description:
    "Free online SHA hash generator. Create SHA-1, SHA-256, SHA-384 and SHA-512 hashes of any text right in your browser. Nothing is uploaded.",
  keywords:
    "SHA256 generator, SHA-256 hash, SHA1 generator, hash generator, SHA-512, SHA-384, checksum online",
  url: `${SITE.baseUrl}/tools/hash-generator`,
  image: "/og/og-tools-hash-generator.jpg",
  type: "website",
});

const articles = [
  {
    id: "what-is-sha",
    title: "What is a SHA hash?",
    body: (
      <>
        <p>
          SHA (Secure Hash Algorithm) turns any input into a fixed-length,
          irreversible digest — a hexadecimal string that looks like a random
          fingerprint of the data. SHA-256 always produces 64 hex characters
          (256 bits), SHA-512 produces 128, and so on, no matter whether the
          input is one letter or a whole file.
        </p>
        <p>
          Hashing is a one-way street: you cannot reconstruct the original from
          the digest. Change a single character in the input and the entire hash
          changes unpredictably, which makes hashes ideal for verifying
          integrity.
        </p>
      </>
    ),
  },
  {
    id: "sha-variants",
    title: "SHA-1 vs SHA-256 vs SHA-512",
    body: (
      <>
        <ul>
          <li>
            <strong>SHA-256</strong> — the modern default. Used by TLS
            certificates, most APIs, and password derivation stacks. Safe to
            reach for whenever you need a checksum.
          </li>
          <li>
            <strong>SHA-384 / SHA-512</strong> — stronger variants from the
            SHA-2 family, useful when you need longer digests or extra security
            margin.
          </li>
          <li>
            <strong>SHA-1</strong> — historically everywhere (Git, older
            signatures), but its collision resistance is broken and browsers and
            security standards have deprecated it. Only use SHA-1 for legacy
            compatibility checks, never for security.
          </li>
        </ul>
        <p>
          In 2026, SHA-256 remains the balanced choice for virtually all
          integrity and signature work.
        </p>
      </>
    ),
  },
  {
    id: "use-cases",
    title: "What hashes are used for",
    body: (
      <>
        <ul>
          <li>
            <strong>Password storage</strong> — systems store a hash of your
            password, not the password itself. (For your own accounts, always
            let the password manager or framework use a slow KDF like bcrypt or
            Argon2, not plain SHA.)
          </li>
          <li>
            <strong>File integrity</strong> — compare the SHA-256 of a download
            against the checksum published by the vendor.
          </li>
          <li>
            <strong>API signatures</strong> — HMAC-style signing and{" "}
            <a href="/tools/base64-converter" className="text-blue-600 hover:underline">
              Base64
            </a>{" "}
            wrapping of digests.
          </li>
          <li>
            <strong>Deduplication</strong> — using the hash as a stable key for
            identical content.
          </li>
        </ul>
        <p>
          Need a fresh API key or ID? Pair hashing with our{" "}
          <a href="/tools/uuid-generator" className="text-blue-600 hover:underline">
            UUID generator
          </a>{" "}
          for a v4 identifier.
        </p>
      </>
    ),
  },
  {
    id: "crypto-api",
    title: "The Web Crypto API and you",
    body: (
      <>
        <p>
          This tool computes digests with the browser's native{" "}
          <code>crypto.subtle.digest</code> — the same implementation browsers
          use for TLS. Your text is converted to bytes and hashed locally, so
          nothing leaves this page and nothing can be intercepted. If you open
          the tool over plain HTTP, browsers disable <code>crypto.subtle</code>,
          so load this page over HTTPS or localhost.
        </p>
      </>
    ),
  },
];

const HashGeneratorPage = () => (
  <ToolPageLayout
    kicker="Free Tool · No Sign-Up · No Tracking"
    title="SHA Hash Generator — SHA-1, 256, 384 & 512"
    breadcrumbName="SHA Hash Generator"
    intro="Generate SHA-1, SHA-256, SHA-384 and SHA-512 hashes of any text instantly, using the browser's native Web Crypto API. Your input never leaves this page."
    schema={{
      tool: "tools/hash-generator",
      name: "SHA Hash Generator — SHA-1, 256, 384 & 512",
      path: "/tools/hash-generator",
      description:
        "Free online SHA hash generator for SHA-1, SHA-256, SHA-384 and SHA-512 computed locally with the Web Crypto API.",
      keywords: "SHA256 generator, SHA-256 hash, SHA1 generator, hash generator, checksum online",
    }}
    articles={articles}
    faqs={hashGeneratorFaqs}
    faqTitle="SHA Hash Generator FAQ"
    faqDescription="Common questions about SHA hashes, answered by our security experts."
    related={relatedFor("hash-generator")}
  >
    <HashGenerator />
  </ToolPageLayout>
);

export default HashGeneratorPage;
