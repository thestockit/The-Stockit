import ToolPageLayout from "@/components/ToolPageLayout";
import UuidGenerator from "@/components/UuidGenerator";
import { SITE } from "@/constant/site";
import { createMetadata } from "@/Data/Seo/seo-utils";
import { uuidGeneratorFaqs } from "@/Data/Tools/faqs";
import { relatedFor } from "@/Data/Tools/tools";

export const metadata = createMetadata({
  title: "UUID Generator — RFC 4122 v4 UUIDs | The Stockit",
  description:
    "Free online UUID generator. Create RFC 4122 version 4 UUIDs in bulk — with or without hyphens, upper or lower case. Runs securely in your browser.",
  keywords:
    "UUID generator, generate UUID, v4 UUID, GUID generator, RFC 4122, random UUID online",
  url: `${SITE.baseUrl}/tools/uuid-generator`,
  image: "/og/og-tools-uuid-generator.jpg",
  type: "website",
});

const articles = [
  {
    id: "what-is-a-uuid",
    title: "What is a UUID?",
    body: (
      <>
        <p>
          A UUID (Universally Unique Identifier) is a 128-bit number formatted as
          36 characters — 32 hex digits with four hyphens, like{" "}
          <code>550e8400-e29b-41d4-a716-446655440000</code>. Version 4 UUIDs are
          generated from cryptographically secure random bytes, so every value
          produced is effectively unique across all devices and all time.
        </p>
        <p>
          UUIDs are the industry standard for database primary keys, API resource
          identifiers, session tokens and distributed systems where two machines
          must never assign the same ID. Because they are created locally, a
          system keeps working even when offline or partitioned.
        </p>
      </>
    ),
  },
  {
    id: "uuid-vs-guid",
    title: "UUID vs GUID — what is the difference?",
    body: (
      <>
        <p>
          There is no technical difference. GUID (Globally Unique Identifier) is
          Microsoft's name for the same format, widely used in Windows
          development and .NET. UUID is the term used by the RFC 4122 standard,
          IETF, and the open-source and web ecosystems. The two are
          interchangeable in practice.
        </p>
        <p>
          Both follow the same version-and-variant layout: a{" "}
          <strong>version</strong> digit (4 for the random type this tool
          generates) sits in the third group, and the <strong>variant</strong>{" "}
          bits sit in the fourth. If you ever need to tell them apart, this tool
          only ever outputs version 4.
        </p>
      </>
    ),
  },
  {
    id: "why-v4-random",
    title: "Why use random v4 UUIDs?",
    body: (
      <>
        <p>
          Version 4 UUIDs are the most common choice for new systems because they
          need no coordination: each value is just 122 bits of strong random
          data. There is no timestamp or MAC address to leak, and no central
          authority to ask for a range.
        </p>
        <p>
          Version 1 (time-based) UUIDs reveal when an ID was created and can
          expose the generating machine, so security-conscious developers prefer
          v4. Our generator uses the browser's native Web Crypto API, giving you
          the same quality of randomness operating systems use for key
          generation — no Math.random shortcuts.
        </p>
      </>
    ),
  },
  {
    id: "when-to-use",
    title: "Where to use generated UUIDs",
    body: (
      <>
        <p>
          Generate IDs in bulk and paste them straight into your project:{" "}
          <strong>database seed scripts</strong>, <strong>API mocks</strong>,{" "}
          <strong>test fixtures</strong> and <strong>migration files</strong> are
          the most common use cases. The hyphen-free (32-character) form is
          useful for MongoDB ObjectId-style fields and compact storage.
        </p>
        <p>
          Many databases, including PostgreSQL and SQL Server, can also generate
          UUIDs natively with <code>gen_random_uuid()</code> and{" "}
          <code>NEWID()</code>. Use this tool when you need a batch of IDs now,
          or to compare with how your backend formats them. While you are
          setting up your database, our{" "}
          <a href="/tools/json-formatter" className="text-blue-600 hover:underline">
            JSON formatter
          </a>{" "}
          and{" "}
          <a href="/tools/hash-generator" className="text-blue-600 hover:underline">
            SHA hash generator
          </a>{" "}
          round out a developer's quick toolkit.
        </p>
      </>
    ),
  },
];

const UuidGeneratorPage = () => (
  <ToolPageLayout
    kicker="Free Tool · No Sign-Up · No Tracking"
    title="UUID Generator — RFC 4122 v4 IDs"
    breadcrumbName="UUID Generator"
    intro="Generate version 4 UUIDs (RFC 4122) in bulk, with or without hyphens, in upper or lower case. Cryptographically secure, generated locally in your browser, and completely free."
    schema={{
      tool: "tools/uuid-generator",
      name: "UUID Generator — RFC 4122 v4 IDs",
      path: "/tools/uuid-generator",
      description:
        "Free online UUID generator producing RFC 4122 version 4 UUIDs in bulk, with or without hyphens, upper or lower case, using cryptographically secure browser randomness.",
      keywords: "UUID generator, generate UUID, v4 UUID, GUID generator, RFC 4122",
    }}
    articles={articles}
    faqs={uuidGeneratorFaqs}
    faqTitle="UUID Generator FAQ"
    faqDescription="Common questions about generating UUIDs, answered by our web experts."
    related={relatedFor("uuid-generator")}
  >
    <UuidGenerator />
  </ToolPageLayout>
);

export default UuidGeneratorPage;
