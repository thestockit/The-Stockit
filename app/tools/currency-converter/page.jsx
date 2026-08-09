import ToolPageLayout from "@/components/ToolPageLayout";
import CurrencyConverter from "@/components/CurrencyConverter";
import { SITE } from "@/constant/site";
import { createMetadata } from "@/Data/Seo/seo-utils";
import { currencyConverterFaqs } from "@/Data/Tools/faqs";
import { relatedFor } from "@/Data/Tools/tools";

export const metadata = createMetadata({
  title: "Currency Converter — Live Rates, 160+ Currencies | The Stockit",
  description:
    "Free online currency converter. Convert between 160+ world currencies with live daily exchange rates. Includes USD, EUR, GBP, PKR, INR and more.",
  keywords:
    "currency converter, exchange rate, USD to EUR, USD to PKR, money converter, currency exchange online",
  url: `${SITE.baseUrl}/tools/currency-converter`,
  image: "/og/og-tools-currency-converter.jpg",
  type: "website",
});

const articles = [
  {
    id: "how-rates-work",
    title: "Where our exchange rates come from",
    body: (
      <>
        <p>
          This converter pulls live mid-market rates from a free open API that
          aggregates global market data, covering 160+ currencies and updated
          daily. A <strong>mid-market rate</strong> is the midpoint between the
          buy and sell prices in the interbank market — it is the fairest
          baseline you can get without paying for live data.
        </p>
        <p>
          Real banks and money transfer services never give you this exact rate.
          They add a margin (often 1–4%) plus a fixed fee. Use this tool to
          estimate a transfer or purchase, then compare what your provider
          actually quotes.
        </p>
      </>
    ),
  },
  {
    id: "popular-pairs",
    title: "The most-converted currency pairs",
    body: (
      <>
        <p>
          The pairs people check most are the ones that move money across
          borders: <strong>USD to EUR</strong>, <strong>EUR to USD</strong>,{" "}
          <strong>GBP to USD</strong>, <strong>USD to JPY</strong>, and — for the
          large diaspora remittance corridors — <strong>USD to PKR</strong>,{" "}
          <strong>USD to INR</strong>, <strong>USD to BDT</strong> and{" "}
          <strong>GBP to PKR</strong>. All of these are one swap away in the tool
          above.
        </p>
        <p>
          If you are converting for a cross-border payment, remember the rate you
          see now can shift before the transfer settles — especially for
          volatile currencies.
        </p>
      </>
    ),
  },
  {
    id: "how-to-read",
    title: "How to read an exchange rate",
    body: (
      <>
        <p>
          A rate like <strong>1 USD = 0.93 EUR</strong> means one US dollar
          buys 0.93 euros. To convert an amount, multiply it by that rate; to
          invert the pair, use the reciprocal. Our tool handles both directions
          automatically when you swap the currencies, and it rounds results for
          readability without distorting small conversions.
        </p>
        <p>
          The one caveat: currencies with very large denominations (like the
          Indonesian rupiah or Vietnamese dong) produce large numbers — which is
          exactly why we show the intermediate per-unit rate under every result.
        </p>
      </>
    ),
  },
  {
    id: "when-to-convert",
    title: "Practical uses of a live converter",
    body: (
      <>
        <ul>
          <li>Budgeting a trip or an international purchase before you buy.</li>
          <li>Checking what an overseas invoice will actually cost you.</li>
          <li>Estimating remittance amounts for family abroad.</li>
          <li>Comparing quotes from banks, brokers and transfer apps.</li>
        </ul>
        <p>
          For a quick, always-updated reference you can keep this page in your
          bookmarks — it is free, has no ads and no sign-up.
        </p>
      </>
    ),
  },
];

const CurrencyConverterPage = () => (
  <ToolPageLayout
    kicker="Free Tool · No Sign-Up · No Tracking"
    title="Currency Converter — Live Rates, 160+ Currencies"
    breadcrumbName="Currency Converter"
    intro="Convert between 160+ world currencies with live, daily mid-market rates. Includes USD, EUR, GBP, PKR, INR and more — with one-tap swap and copy."
    schema={{
      tool: "tools/currency-converter",
      name: "Currency Converter — Live Rates, 160+ Currencies",
      path: "/tools/currency-converter",
      description:
        "Free online currency converter supporting 160+ currencies with live daily mid-market exchange rates from an open API, including USD, EUR, GBP, PKR and INR.",
      keywords: "currency converter, exchange rate, USD to EUR, USD to PKR, money converter",
    }}
    articles={articles}
    faqs={currencyConverterFaqs}
    faqTitle="Currency Converter FAQ"
    faqDescription="Common questions about currency conversion, answered by our finance experts."
    related={relatedFor("currency-converter")}
  >
    <CurrencyConverter />
  </ToolPageLayout>
);

export default CurrencyConverterPage;
