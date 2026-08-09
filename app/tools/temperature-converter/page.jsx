import ToolPageLayout from "@/components/ToolPageLayout";
import TemperatureConverter from "@/components/TemperatureConverter";
import { SITE } from "@/constant/site";
import { createMetadata } from "@/Data/Seo/seo-utils";
import { temperatureConverterFaqs } from "@/Data/Tools/faqs";
import { relatedFor } from "@/Data/Tools/tools";

export const metadata = createMetadata({
  title: "Temperature Converter — Celsius, Fahrenheit & Kelvin | The Stockit",
  description:
    "Free online temperature converter. Convert between Celsius, Fahrenheit and Kelvin instantly as you type. Simple, accurate and free.",
  keywords:
    "temperature converter, celsius to fahrenheit, fahrenheit to celsius, celsius to kelvin, temperature conversion",
  url: `${SITE.baseUrl}/tools/temperature-converter`,
  image: "/og/og-tools-temperature-converter.jpg",
  type: "website",
});

const articles = [
  {
    id: "three-scales",
    title: "Celsius, Fahrenheit and Kelvin",
    body: (
      <>
        <p>
          Three scales dominate the world:
        </p>
        <ul>
          <li>
            <strong>Celsius (°C)</strong> — the everyday scale in most of the
            world; water freezes at 0° and boils at 100°.
          </li>
          <li>
            <strong>Fahrenheit (°F)</strong> — used in the United States and a
            few territories; water freezes at 32° and boils at 212°.
          </li>
          <li>
            <strong>Kelvin (K)</strong> — the absolute scientific scale, zero
            ("absolute zero") is −273.15°C. Used in physics, astronomy and
            engineering; note Kelvin has no degree symbol.
          </li>
        </ul>
        <p>
          They are different rulers for the same physical temperature, and the
          math between them is linear — which is why conversion is always exact.
        </p>
      </>
    ),
  },
  {
    id: "quick-formulas",
    title: "The conversion formulas",
    body: (
      <>
        <p>
          Three formulas cover every case, since all paths run through Celsius:
        </p>
        <ul>
          <li>
            <strong>C → F</strong>: <code>°F = °C × 9/5 + 32</code>
          </li>
          <li>
            <strong>F → C</strong>: <code>°C = (°F − 32) × 5/9</code>
          </li>
          <li>
            <strong>C → K</strong>: <code>K = °C + 273.15</code>
          </li>
        </ul>
        <p>
          Handy anchors: 0°C = 32°F = 273.15K (freezing water), 100°C = 212°F =
          373.15K (boiling water), and 20°C ≈ 68°F (a comfortable room).
        </p>
      </>
    ),
  },
  {
    id: "common-conversions",
    title: "The conversions people search for most",
    body: (
      <>
        <p>
          The most searched temperature questions are recipe and weather based:
        </p>
        <ul>
          <li>
            <strong>180°C to °F</strong> — 356°F, the standard oven
            temperature in most recipes.
          </li>
          <li>
            <strong>37°C to °F</strong> — 98.6°F, average human body
            temperature.
          </li>
          <li>
            <strong>100°C to °F</strong> — 212°F, boiling point.
          </li>
          <li>
            <strong>0°C to °F</strong> — 32°F, freezing point.
          </li>
        </ul>
        <p>
          Type any of these into the converter above and the other two scales
          update instantly.
        </p>
      </>
    ),
  },
  {
    id: "accuracy",
    title: "Accuracy for cooking and science",
    body: (
      <>
        <p>
          Because the conversions are pure linear arithmetic, they are exact to
          every digit of precision your browser supports. We round to two
          decimals for readability — enough for cooking (where ovens are rarely
          accurate to a degree anyway) and for everyday science. Kelvin is
          calculated from the Celsius value, so it inherits the same precision.
        </p>
      </>
    ),
  },
];

const TemperatureConverterPage = () => (
  <ToolPageLayout
    kicker="Free Tool · No Sign-Up · No Tracking"
    title="Temperature Converter — Celsius, Fahrenheit & Kelvin"
    breadcrumbName="Temperature Converter"
    intro="Convert temperature between Celsius, Fahrenheit and Kelvin instantly as you type. Exact linear math, rounded to two decimals for readability."
    schema={{
      tool: "tools/temperature-converter",
      name: "Temperature Converter — Celsius, Fahrenheit & Kelvin",
      path: "/tools/temperature-converter",
      description:
        "Free online temperature converter between Celsius, Fahrenheit and Kelvin with live, instant results as you type.",
      keywords: "temperature converter, celsius to fahrenheit, fahrenheit to celsius, celsius to kelvin",
    }}
    articles={articles}
    faqs={temperatureConverterFaqs}
    faqTitle="Temperature Converter FAQ"
    faqDescription="Common questions about temperature conversion, answered by our science experts."
    related={relatedFor("temperature-converter")}
  >
    <TemperatureConverter />
  </ToolPageLayout>
);

export default TemperatureConverterPage;
