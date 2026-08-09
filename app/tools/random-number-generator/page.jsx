import ToolPageLayout from "@/components/ToolPageLayout";
import RandomNumberGenerator from "@/components/RandomNumberGenerator";
import { SITE } from "@/constant/site";
import { createMetadata } from "@/Data/Seo/seo-utils";
import { randomNumberGeneratorFaqs } from "@/Data/Tools/faqs";
import { relatedFor } from "@/Data/Tools/tools";

export const metadata = createMetadata({
  title: "Random Number Generator — Secure & Instant | The Stockit",
  description:
    "Free random number generator. Generate secure random numbers in any range, with or without repeats, using cryptographically secure browser randomness.",
  keywords:
    "random number generator, random number, pick random number, RNG online, secure random numbers",
  url: `${SITE.baseUrl}/tools/random-number-generator`,
  image: "/og/og-tools-random-number-generator.jpg",
  type: "website",
});

const articles = [
  {
    id: "secure-randomness",
    title: "Why cryptographic randomness matters",
    body: (
      <>
        <p>
          Not all random is created equal. <code>Math.random()</code> is a
          pseudorandom generator seeded from a fixed algorithm — fine for games
          and animations, but predictable enough that the next value can often be
          guessed. For draws, giveaways and anything with money on the line, you
          want <strong>cryptographic randomness</strong>.
        </p>
        <p>
          This tool uses the browser's <code>crypto.getRandomValues</code> and
          applies <strong>rejection sampling</strong>, which discards out-of-range
          values instead of nudging them — so every number in your range is
          exactly as likely as every other. No bias, no shortcuts.
        </p>
      </>
    ),
  },
  {
    id: "unbiased-ranges",
    title: "Understanding bias and ranges",
    body: (
      <>
        <p>
          A naive generator computing <code>Math.floor(Math.random() * n)</code>{" "}
          introduces a tiny bias unless <code>n</code> divides evenly into the
          generator's output space. Rejection sampling fixes this by rerolling
          whenever the raw value falls outside the largest full multiple of your
          range — the technique our tool uses.
        </p>
        <p>
          Negative ranges, like <code>−50 to 50</code>, work the same way: the
          tool maps the range into a zero-based span, rolls securely, and offsets
          back. The result is fair at any scale, from a coin flip to a million
          possible outcomes.
        </p>
      </>
    ),
  },
  {
    id: "unique-mode",
    title: "Unique numbers vs repetition",
    body: (
      <>
        <p>
          Sometimes repeats are fine (rolling dice), and sometimes they are not
          (a raffle where each ticket can win once). Our <strong>unique
          mode</strong> uses a secure Fisher–Yates shuffle over the whole range
          and deals out distinct numbers — guaranteeing no duplicates even when
          you ask for many at once.
        </p>
        <p>
          The <strong>no-repeat mode</strong> additionally remembers the last
          drawn number and skips it, so the same result never appears twice in a
          row. For pick-the-winner scenarios, our{" "}
          <a href="/tools/list-randomizer" className="text-blue-600 hover:underline">
            list randomizer
          </a>{" "}
          is the better fit when candidates have names.
        </p>
      </>
    ),
  },
  {
    id: "use-cases",
    title: "Everyday uses for a random number generator",
    body: (
      <>
        <ul>
          <li>Fair winner selection in giveaways and contests.</li>
          <li>Dice rolls and board-game helpers.</li>
          <li>Picking a random quiz question or flashcard index.</li>
          <li>Generating test data and placeholder values while developing.</li>
          <li>Deciding between options when you truly cannot choose.</li>
        </ul>
        <p>
          Running a giveaway? Use this tool to draw the number, then the{" "}
          <a href="/tools/list-randomizer" className="text-blue-600 hover:underline">
            list randomizer
          </a>{" "}
          to pick winners by name from your entry list.
        </p>
      </>
    ),
  },
];

const RandomNumberGeneratorPage = () => (
  <ToolPageLayout
    kicker="Free Tool · No Sign-Up · No Tracking"
    title="Random Number Generator — Secure & Instant"
    breadcrumbName="Random Number Generator"
    intro="Generate secure random numbers in any range, with or without repeats. Uses cryptographically secure, unbiased browser randomness — perfect for draws, dice and test data."
    schema={{
      tool: "tools/random-number-generator",
      name: "Random Number Generator — Secure & Instant",
      path: "/tools/random-number-generator",
      description:
        "Free random number generator using cryptographically secure, unbiased browser randomness with unique and no-repeat modes.",
      keywords: "random number generator, random number, pick random number, RNG online, secure random numbers",
    }}
    articles={articles}
    faqs={randomNumberGeneratorFaqs}
    faqTitle="Random Number Generator FAQ"
    faqDescription="Common questions about generating random numbers, answered by our web experts."
    related={relatedFor("random-number-generator")}
  >
    <RandomNumberGenerator />
  </ToolPageLayout>
);

export default RandomNumberGeneratorPage;
