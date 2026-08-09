import ToolPageLayout from "@/components/ToolPageLayout";
import WordCounter from "@/components/WordCounter";
import { SITE } from "@/constant/site";
import { createMetadata } from "@/Data/Seo/seo-utils";
import { wordCounterFaqs } from "@/Data/Tools/faqs";
import { relatedFor } from "@/Data/Tools/tools";

export const metadata = createMetadata({
  title: "Word Counter — Count Words & Characters | The Stockit",
  description:
    "Free online word counter. Count words, characters, sentences and paragraphs with reading and speaking time. Instant, private and completely free.",
  keywords:
    "word counter, character counter, count words online, word count tool, reading time calculator",
  url: `${SITE.baseUrl}/tools/word-counter`,
  image: "/og/og-tools-word-counter.jpg",
  type: "website",
});

const articles = [
  {
    id: "how-counting-works",
    title: "How word counting works",
    body: (
      <>
        <p>
          A word is any run of characters separated by whitespace — this tool
          splits on spaces, tabs and newlines, so numbers, symbols and emojis
          attached to text count correctly. Character counts are shown in two
          flavors: <strong>with spaces</strong> (as an editor would count) and{" "}
          <strong>without spaces</strong> (the stricter limit many platforms use
          for labels and captions).
        </p>
        <p>
          Sentences are split on sentence-ending punctuation (<code>.</code>,{" "}
          <code>!</code>, <code>?</code>) and paragraphs on blank lines, giving
          you the full structural picture at a glance.
        </p>
      </>
    ),
  },
  {
    id: "limits",
    title: "Word and character limits in 2026",
    body: (
      <>
        <p>
          If you are writing for the web, you will bump into limits everywhere:
        </p>
        <ul>
          <li>
            <strong>Google meta descriptions</strong> — around 150–160 characters
            (roughly 20–25 words) before truncation.
          </li>
          <li>
            <strong>Title tags</strong> — about 50–60 characters for a full
            desktop display.
          </li>
          <li>
            <strong>SEO blog posts</strong> — 1,500–2,500 words is a common
            sweet spot for ranking content.
          </li>
          <li>
            <strong>SMS</strong> — 160 characters per message (or 70 with
            non-GSM characters).
          </li>
          <li>
            <strong>Social captions</strong> — platform-specific caps on
            characters and hashtags.
          </li>
        </ul>
        <p>
          Our{" "}
          <a href="/tools/text-case-converter" className="text-blue-600 hover:underline">
            text case converter
          </a>{" "}
          pairs well when you need to match a style guide while staying within
          limits.
        </p>
      </>
    ),
  },
  {
    id: "reading-time",
    title: "Reading time: how it is estimated",
    body: (
      <>
        <p>
          Most people read at 200–250 words per minute for typical web content,
          and 100–130 wpm is a widely used audiobook speech rate. We estimate
          reading time at 230 wpm and speaking time at 130 wpm so your draft is
          realistic for both a blog reader and a video or podcast script.
        </p>
        <p>
          The estimates scale linearly with word count, so a 460-word article
          reads in about two minutes and takes close to three and a half minutes
          to speak aloud.
        </p>
      </>
    ),
  },
  {
    id: "writing-quality",
    title: "Use counts to tighten your writing",
    body: (
      <>
        <p>
          Word count is a quality lever, not just a statistic. Long paragraphs
          and bloated sentences drag attention away — aim for short sentences and
          one idea per paragraph. Run your text through here after drafting,
          then{" "}
          <a href="/tools/text-case-converter" className="text-blue-600 hover:underline">
            normalize the case
          </a>{" "}
          for headings, and use the{" "}
          <a href="/tools/list-randomizer" className="text-blue-600 hover:underline">
            list randomizer
          </a>{" "}
          to shuffle ideas when brainstorming.
        </p>
      </>
    ),
  },
];

const WordCounterPage = () => (
  <ToolPageLayout
    kicker="Free Tool · No Sign-Up · No Tracking"
    title="Word Counter — Count Words & Characters"
    breadcrumbName="Word Counter"
    intro="Count words, characters (with or without spaces), sentences and paragraphs, plus reading and speaking time. Live counts update as you type — nothing is uploaded."
    schema={{
      tool: "tools/word-counter",
      name: "Word Counter — Count Words & Characters",
      path: "/tools/word-counter",
      description:
        "Free online word counter tracking words, characters with and without spaces, sentences, paragraphs, and estimated reading and speaking time.",
      keywords: "word counter, character counter, count words online, word count tool, reading time",
    }}
    articles={articles}
    faqs={wordCounterFaqs}
    faqTitle="Word Counter FAQ"
    faqDescription="Common questions about counting words and characters, answered by our content experts."
    related={relatedFor("word-counter")}
  >
    <WordCounter />
  </ToolPageLayout>
);

export default WordCounterPage;
