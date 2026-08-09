import ToolPageLayout from "@/components/ToolPageLayout";
import ColorConverter from "@/components/ColorConverter";
import { SITE } from "@/constant/site";
import { createMetadata } from "@/Data/Seo/seo-utils";
import { colorConverterFaqs } from "@/Data/Tools/faqs";
import { relatedFor } from "@/Data/Tools/tools";

export const metadata = createMetadata({
  title: "Color Converter — HEX, RGB & HSL | The Stockit",
  description:
    "Free online color converter. Convert colors between HEX, RGB and HSL with a live preview and copy buttons. Perfect for designers and developers.",
  keywords:
    "color converter, hex to rgb, rgb to hex, hsl converter, color code converter, hex color picker",
  url: `${SITE.baseUrl}/tools/color-converter`,
  image: "/og/og-tools-color-converter.jpg",
  type: "website",
});

const articles = [
  {
    id: "color-spaces",
    title: "HEX, RGB and HSL explained",
    body: (
      <>
        <p>
          Every color on screen can be written three ways:
        </p>
        <ul>
          <li>
            <strong>HEX</strong> — six hex digits mixing red, green and blue
            (<code>#4F46E5</code>). Compact and universal in CSS.
          </li>
          <li>
            <strong>RGB</strong> — three numbers from 0–255 (<code>rgb(79, 70,
            229)</code>). Matches how screens mix light directly.
          </li>
          <li>
            <strong>HSL</strong> — hue (0–360°), saturation and lightness (
            <code>hsl(243, 75%, 59%)</code>). The most human way to reason about
            color: pick the hue, then adjust richness and brightness.
          </li>
        </ul>
        <p>
          All three describe the same color; this tool converts between them
          both ways, including alpha (opacity) values.
        </p>
      </>
    ),
  },
  {
    id: "when-hsl",
    title: "Why developers prefer HSL",
    body: (
      <>
        <p>
          HSL is the easiest format to reason about programmatically. Lightening
          a button by 10% is a simple <code>l + 10</code>; creating a
          monochromatic palette means holding hue fixed while stepping
          saturation and lightness. Design systems like Tailwind and Material
          are built exactly this way.
        </p>
        <p>
          Convert a HEX from your design file to HSL, tweak the lightness, and
          you have hover states, borders and text colors that harmonize
          automatically — no eyeballing needed.
        </p>
      </>
    ),
  },
  {
    id: "alpha",
    title: "Working with alpha (opacity)",
    body: (
      <>
        <p>
          Modern CSS supports alpha everywhere: <code>rgba()</code> and{" "}
          <code>hsla()</code> take a fourth value from 0 (invisible) to 1 (opaque),
          and HEX can carry two extra digits for alpha like{" "}
          <code>#4F46E580</code>. This tool preserves the alpha channel as you
          convert, so a semi-transparent overlay in HSL becomes the same
          semi-transparent color in HEX.
        </p>
        <p>
          Note that alpha blends against whatever sits underneath — the same{" "}
          <code>rgba()</code> looks different on white and on black.
        </p>
      </>
    ),
  },
  {
    id: "css",
    title: "Pasting colors into CSS",
    body: (
      <>
        <p>
          Every output here comes with a copy button, so you can jump straight
          from a design tool to your stylesheet. For accessibility, test your
          text-and-background pairings for contrast — WCAG AA needs roughly a
          4.5:1 ratio for body text, which means dark text on light
          backgrounds or vice versa.
        </p>
        <p>
          While you are styling, our{" "}
          <a href="/tools/json-formatter" className="text-blue-600 hover:underline">
            JSON formatter
          </a>{" "}
          keeps your config tidy, and the{" "}
          <a href="/tools/qr-code-generator" className="text-blue-600 hover:underline">
            QR code generator
          </a>{" "}
          can share brand colors with a color-picked palette.
        </p>
      </>
    ),
  },
];

const ColorConverterPage = () => (
  <ToolPageLayout
    kicker="Free Tool · No Sign-Up · No Tracking"
    title="Color Converter — HEX, RGB & HSL"
    breadcrumbName="Color Converter"
    intro="Convert colors between HEX, RGB and HSL with a live preview and one-click copy. Alpha values are preserved through every conversion."
    schema={{
      tool: "tools/color-converter",
      name: "Color Converter — HEX, RGB & HSL",
      path: "/tools/color-converter",
      description:
        "Free online color converter between HEX, RGB and HSL with live preview, alpha support and one-click copy for designers and developers.",
      keywords: "color converter, hex to rgb, rgb to hex, hsl converter, color code converter",
    }}
    articles={articles}
    faqs={colorConverterFaqs}
    faqTitle="Color Converter FAQ"
    faqDescription="Common questions about converting color codes, answered by our web experts."
    related={relatedFor("color-converter")}
  >
    <ColorConverter />
  </ToolPageLayout>
);

export default ColorConverterPage;
