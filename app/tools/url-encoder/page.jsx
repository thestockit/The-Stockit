import ToolPageLayout from "@/components/ToolPageLayout";
import UrlEncoder from "@/components/UrlEncoder";
import { SITE } from "@/constant/site";
import { createMetadata } from "@/Data/Seo/seo-utils";
import { urlEncoderFaqs } from "@/Data/Tools/faqs";
import { relatedFor } from "@/Data/Tools/tools";

export const metadata = createMetadata({
  title: "URL Encoder / Decoder — Query String Tool | The Stockit",
  description:
    "Free online URL encoder and decoder. Encode and decode URLs, query strings and parameters with component-level or full-URL encoding. Private and instant.",
  keywords:
    "URL encoder, URL decoder, URL encode online, decode URL, percent encoding, query string encoder",
  url: `${SITE.baseUrl}/tools/url-encoder`,
  image: "/og/og-tools-url-encoder.jpg",
  type: "website",
});

const articles = [
  {
    id: "what-is-url-encoding",
    title: "What is URL encoding?",
    body: (
      <>
        <p>
          URLs are only allowed to contain a small safe alphabet of characters.
          Everything else — spaces, <code>&</code>, <code>?</code>,{" "}
          <code>#</code>, emojis and non-ASCII letters — must be percent-encoded
          (for example a space becomes <code>%20</code> and{" "}
          <code>?</code> becomes <code>%3F</code>) so the URL is unambiguous to
          servers and browsers.
        </p>
        <p>
          This is also why query parameters carrying user input are always
          encoded: it prevents an argument like{" "}
          <code>a&b=broken</code> from being split into two parameters, and it
          is the first line of defense against injection attacks.
        </p>
      </>
    ),
  },
  {
    id: "component-vs-url",
    title: "Component-level vs full-URL encoding",
    body: (
      <>
        <p>
          The two modes differ in what they leave untouched:
        </p>
        <ul>
          <li>
            <strong>Component encoding</strong> (<code>encodeURIComponent</code>)
            escapes almost everything, including <code>:</code>, <code>/</code>{" "}
            and <code>?</code>. Use it for the <em>value</em> of a single query
            parameter.
          </li>
          <li>
            <strong>Full-URL encoding</strong> (<code>encodeURI</code>) keeps
            structural characters like <code>:</code>, <code>/</code> and{" "}
            <code>?</code> intact. Use it for an entire URL that already
            contains its separators.
          </li>
        </ul>
        <p>
          Picking the wrong mode is a classic bug: encoding a whole URL with{" "}
          <code>encodeURIComponent</code> produces <code>https%3A%2F%2F…</code>,
          which no browser will navigate to.
        </p>
      </>
    ),
  },
  {
    id: "decode-gotchas",
    title: "Decoding: what can go wrong",
    body: (
      <>
        <p>
          When decoding, the biggest issue is bad input: a stray{" "}
          <code>%</code> not followed by two hex digits, or an invalid sequence
          like <code>%ZZ</code>. Many tools throw an exception or silently
          corrupt the output. Our decoder detects the invalid sequence and tells
          you exactly where it is.
        </p>
        <p>
          A second gotcha: URLs in analytics and tracking links often arrive
          double-encoded (e.g. <code>%2520</code> for a space). If the decoded
          text still shows <code>%</code> sequences, run it through once more.
        </p>
      </>
    ),
  },
  {
    id: "when-to-use",
    title: "When you need a URL encoder",
    body: (
      <>
        <ul>
          <li>Building query strings for API requests and tracking pixels.</li>
          <li>
            Embedding links inside emails and SMS that may contain spaces or
            special characters.
          </li>
          <li>
            Encoding redirect and callback parameters like{" "}
            <code>?next=…</code>.
          </li>
          <li>
            Preparing a{" "}
            <a href="/tools/qr-code-generator" className="text-blue-600 hover:underline">
              QR code
            </a>{" "}
            that must be scanned correctly on any device.
          </li>
        </ul>
        <p>
          Pair it with our{" "}
          <a href="/tools/base64-converter" className="text-blue-600 hover:underline">
            Base64 encoder
          </a>{" "}
          when a value needs both encodings.
        </p>
      </>
    ),
  },
];

const UrlEncoderPage = () => (
  <ToolPageLayout
    kicker="Free Tool · No Sign-Up · No Tracking"
    title="URL Encoder / Decoder — Query String Tool"
    breadcrumbName="URL Encoder"
    intro="Encode and decode URLs, query strings and parameters with component-level or full-URL encoding, plus clear errors on invalid input. Instant and fully private."
    schema={{
      tool: "tools/url-encoder",
      name: "URL Encoder / Decoder — Query String Tool",
      path: "/tools/url-encoder",
      description:
        "Free online URL encoder and decoder with component-level or full-URL encoding modes and precise error reporting on invalid input.",
      keywords: "URL encoder, URL decoder, percent encoding, URL encode online, query string encoder",
    }}
    articles={articles}
    faqs={urlEncoderFaqs}
    faqTitle="URL Encoder FAQ"
    faqDescription="Common questions about URL encoding, answered by our web experts."
    related={relatedFor("url-encoder")}
  >
    <UrlEncoder />
  </ToolPageLayout>
);

export default UrlEncoderPage;
