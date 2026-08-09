import Link from "next/link";
import ToolPageLayout from "@/components/ToolPageLayout";
import TextCaseConverter from "@/components/TextCaseConverter";
import { SITE } from "@/constant/site";
import { createMetadata } from "@/Data/Seo/seo-utils";
import { textCaseFaqs } from "@/Data/Tools/faqs";
import { relatedFor } from "@/Data/Tools/tools";

export const metadata = createMetadata({
  title: "Text Case Converter — Change Case of Any Text | The Stockit",
  description:
    "Free text case converter: transform text to upper, lower, title, sentence, camelCase, PascalCase, snake_case and more. Runs 100% in your browser.",
  keywords:
    "text case converter, case converter, title case converter, sentence case, camelCase, snake_case, uppercase lowercase",
  url: `${SITE.baseUrl}/tools/text-case-converter`,
  image: "/og/og-tools-text-case-converter.jpg",
  type: "website",
});

const articles = [
  {
    id: "why-convert-case",
    title: "Why you need a text case converter",
    body: (
      <>
        <p>
          Casing errors are the most common copy-paste mistakes on the web. A
          headline pasted from a chat window arrives in all-caps, a{" "}
          <code>camelCase</code> variable becomes <code>camelcase</code>, and a
          client's report needs Title Case on every heading. Retyping is slow and
          error-prone; this tool fixes the case in one click.
        </p>
        <p>
          Because it runs entirely in your browser, it is safe for sensitive
          material — client copy, unpublished drafts, proprietary code and
          bilingual Urdu–English content never leave your device.
        </p>
      </>
    ),
  },
  {
    id: "developers-and-content",
    title: "For developers and content writers",
    body: (
      <>
        <p>
          <strong>Developers</strong> switch between naming conventions
          constantly: <code>camelCase</code> and <code>PascalCase</code> in
          JavaScript and React, <code>snake_case</code> in databases and Python,
          <code>kebab-case</code> in URLs and filenames, and{" "}
          <code>CONSTANT_CASE</code> for environment variables. Converting a list
          of names between these formats takes seconds here instead of a regex
          rabbit hole.
        </p>
        <p>
          <strong>Content writers and marketers</strong> use Title Case for
          headlines and campaign titles, Sentence case for meta descriptions and
          body copy, and UPPERCASE sparingly for emphasis. The live word and
          character counts also help keep meta descriptions inside Google's
          display limits.
        </p>
      </>
    ),
  },
  {
    id: "bilingual-support",
    title: "Bilingual support for Urdu, Arabic and more",
    body: (
      <>
        <p>
          The converter is Unicode-aware, so it handles mixed-script text
          gracefully. Latin letters are converted normally while Urdu, Arabic,
          Cyrillic and other non-Latin characters pass through untouched —
          useful when preparing bilingual website copy, social posts or product
          listings for international markets.
        </p>
        <p>
          For the best experience on a new website, our{" "}
          <Link href="/services" className="text-blue-600 hover:underline">
            web design services
          </Link>{" "}
          help you structure bilingual content so headings and body copy look
          right in both scripts.
        </p>
      </>
    ),
  },
];

const TextCaseConverterPage = () => (
  <ToolPageLayout
    kicker="Free Tool · No Sign-Up · No Tracking"
    title="Text Case Converter — Change Case of Any Text"
    breadcrumbName="Text Case Converter"
    intro="Convert any text to upper, lower, Title Case, Sentence case, camelCase, PascalCase, snake_case and more in one click. 100% in your browser, with live word and character counts."
    schema={{
      tool: "tools/text-case-converter",
      name: "Text Case Converter — Change Case of Any Text",
      path: "/tools/text-case-converter",
      description:
        "Free browser-based text case converter supporting uppercase, lowercase, title, sentence, camelCase, PascalCase, snake_case, kebab-case, CONSTANT_CASE, alternating and inverse cases.",
      keywords: "text case converter, case converter, title case, camelCase, snake_case",
    }}
    articles={articles}
    faqs={textCaseFaqs}
    faqTitle="Text Case Converter FAQ"
    faqDescription="Common questions about case conversion, answered by our web experts."
    related={relatedFor("text-case-converter")}
  >
    <TextCaseConverter />
  </ToolPageLayout>
);

export default TextCaseConverterPage;
