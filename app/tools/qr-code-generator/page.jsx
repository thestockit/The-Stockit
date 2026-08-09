import ToolPageLayout from "@/components/ToolPageLayout";
import QrCodeGenerator from "@/components/QrCodeGenerator";
import { SITE } from "@/constant/site";
import { createMetadata } from "@/Data/Seo/seo-utils";
import { qrCodeGeneratorFaqs } from "@/Data/Tools/faqs";
import { relatedFor } from "@/Data/Tools/tools";

export const metadata = createMetadata({
  title: "QR Code Generator — Free & Unlimited | The Stockit",
  description:
    "Create unlimited free QR codes for URLs, text, Wi-Fi and more. Customize size and colors, then download as high-quality PNG. No sign-up, no watermark.",
  keywords:
    "QR code generator, QR code maker, create QR code, free QR code, custom QR code, QR generator online",
  url: `${SITE.baseUrl}/tools/qr-code-generator`,
  image: "/og/og-tools-qr-code-generator.jpg",
  type: "website",
});

const articles = [
  {
    id: "how-qr-works",
    title: "How QR codes work",
    body: (
      <>
        <p>
          A QR (Quick Response) code stores data in a two-dimensional grid of
          black and white modules. Three corner squares are the finder patterns a
          camera uses to locate and orient the code; the rest is data, error
          correction and padding. QR codes hold up to around 3,000 bytes — enough
          for a long URL, contact details or a Wi-Fi configuration.
        </p>
        <p>
          Every smartphone's camera can scan them natively now, which is why QR
          codes are the default bridge between the physical and digital world —
          on menus, posters, packaging and business cards.
        </p>
      </>
    ),
  },
  {
    id: "error-correction",
    title: "Error correction levels explained",
    body: (
      <>
        <p>
          QR codes use Reed–Solomon error correction so they survive damage and
          partial obstruction. Four levels trade capacity for resilience:
        </p>
        <ul>
          <li>
            <strong>L (7%)</strong> — highest capacity, for clean prints and
            digital screens.
          </li>
          <li>
            <strong>M (15%)</strong> — balanced default for most uses.
          </li>
          <li>
            <strong>Q (25%)</strong> — for labels, packaging and worn surfaces.
          </li>
          <li>
            <strong>H (30%)</strong> — maximum resilience; ideal for logos or
            images placed over the code and heavy industrial use.
          </li>
        </ul>
        <p>
          Choosing H lets you add a small logo in the center without breaking
          the scan, since the surrounding modules still hold enough data.
        </p>
      </>
    ),
  },
  {
    id: "best-practices",
    title: "Best practices for scannable QR codes",
    body: (
      <>
        <ul>
          <li>
            Keep 4 modules (the "quiet zone") of empty space around the code —
            our generator sets a margin by default.
          </li>
          <li>
            Use a high contrast between foreground and background; avoid
            reversing colors or light-on-light combos.
          </li>
          <li>
            Test at the size and distance it will actually be used at. A poster
            code needs more modules of quiet zone than a screen code.
          </li>
          <li>
            Never point a QR code to a shortened URL you do not control — if the
            short link dies, so does the code printed on everything.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "tracking",
    title: "Dynamic vs static QR codes",
    body: (
      <>
        <p>
          <strong>Static QR codes</strong> — like the ones this tool creates —
          store the data directly in the pattern. They never expire, cost
          nothing to generate and cannot be edited later. For print materials
          that stay forever, static is ideal.
        </p>
        <p>
          <strong>Dynamic QR codes</strong> point to a short redirect URL you can
          retarget later and come with scan analytics — but they depend on a
          third-party service staying alive. Start with a static code for{" "}
          <a href="/tools/url-encoder" className="text-blue-600 hover:underline">
            encoded URLs
          </a>{" "}
          and switch to dynamic only when you need retargeting and stats.
        </p>
      </>
    ),
  },
];

const QrCodeGeneratorPage = () => (
  <ToolPageLayout
    kicker="Free Tool · No Sign-Up · No Tracking"
    title="QR Code Generator — Free & Unlimited"
    breadcrumbName="QR Code Generator"
    intro="Create unlimited QR codes for URLs, text, Wi-Fi and more. Choose error-correction level, size and colors, then download as high-quality PNG — free, no watermark, no sign-up."
    schema={{
      tool: "tools/qr-code-generator",
      name: "QR Code Generator — Free & Unlimited",
      path: "/tools/qr-code-generator",
      description:
        "Free unlimited QR code generator with customizable size, error-correction level and colors, downloadable as PNG without sign-up or watermark.",
      keywords: "QR code generator, QR code maker, create QR code, free QR code, custom QR code",
    }}
    articles={articles}
    faqs={qrCodeGeneratorFaqs}
    faqTitle="QR Code Generator FAQ"
    faqDescription="Common questions about creating and using QR codes, answered by our web experts."
    related={relatedFor("qr-code-generator")}
  >
    <QrCodeGenerator />
  </ToolPageLayout>
);

export default QrCodeGeneratorPage;
