import ToolPageLayout from "@/components/ToolPageLayout";
import ListRandomizer from "@/components/ListRandomizer";
import { SITE } from "@/constant/site";
import { createMetadata } from "@/Data/Seo/seo-utils";
import { listRandomizerFaqs } from "@/Data/Tools/faqs";
import { relatedFor } from "@/Data/Tools/tools";

export const metadata = createMetadata({
  title: "List Randomizer — Shuffle & Pick Winners | The Stockit",
  description:
    "Free online list randomizer. Shuffle any list, pick random winners, or draw one lucky item — perfect for giveaways, draws and lottery picks. Secure and private.",
  keywords:
    "list randomizer, shuffle list, random picker, pick random winner, wheel randomizer, name randomizer",
  url: `${SITE.baseUrl}/tools/list-randomizer`,
  image: "/og/og-tools-list-randomizer.jpg",
  type: "website",
});

const articles = [
  {
    id: "fair-shuffling",
    title: "How a fair shuffle works",
    body: (
      <>
        <p>
          A fair shuffle must reach every possible ordering with equal
          probability. The textbook method is the <strong>Fisher–Yates
          shuffle</strong>: walk the list from the end, pick a random spot
          among the not-yet-placed items, and swap. Done correctly, each of the{" "}
          <code>n!</code> orderings is equally likely.
        </p>
        <p>
          We pair Fisher–Yates with the browser's cryptographically secure
          random source (with a safe fallback), so the outcome is not only
          mathematically uniform but also practically unpredictable — exactly
          what a fair draw needs.
        </p>
      </>
    ),
  },
  {
    id: "winner-draws",
    title: "Running a fair winner draw",
    body: (
      <>
        <p>
          For giveaways and prize draws, the <strong>Pick Winners</strong> mode
          deals out the requested number of names without duplicates — each entry
          can win at most once. For small contests, that is all you need for a
          defensible, auditable result.
        </p>
        <p>
          Best practice for bigger draws: decide the method <em>before</em> you
          run it, keep the entry list somewhere you can show, and run the draw
          once. There is no need to reroll for drama — the first result is the
          fair one.
        </p>
      </>
    ),
  },
  {
    id: "use-cases",
    title: "Everyday uses for a list randomizer",
    body: (
      <>
        <ul>
          <li>Prize draws, contests and school raffles.</li>
          <li>Choosing a winner or "next up" from a group of volunteers.</li>
          <li>Shuffling a playlist, workout circuit or study order.</li>
          <li>Randomizing quiz questions or interview candidate order.</li>
          <li>Randomly assigning tasks, seats or groups.</li>
        </ul>
        <p>
          Need a numeric version instead? Our{" "}
          <a href="/tools/random-number-generator" className="text-blue-600 hover:underline">
            random number generator
          </a>{" "}
          picks from a range, and the{" "}
          <a href="/tools/word-counter" className="text-blue-600 hover:underline">
            word counter
          </a>{" "}
          is there when your list needs a character budget.
        </p>
      </>
    ),
  },
  {
    id: "privacy",
    title: "Your list stays private",
    body: (
      <>
        <p>
          Everything happens in your browser tab. Names, entries and results are
          never uploaded, stored or logged — which matters when you are
          shuffling something sensitive like a list of employees or students.
          Close the tab and the list is gone.
        </p>
      </>
    ),
  },
];

const ListRandomizerPage = () => (
  <ToolPageLayout
    kicker="Free Tool · No Sign-Up · No Tracking"
    title="List Randomizer — Shuffle & Pick Winners"
    breadcrumbName="List Randomizer"
    intro="Shuffle any list, pick random winners, or draw one lucky item. Uses a cryptographically secure Fisher–Yates shuffle — perfect for giveaways, draws and lottery picks."
    schema={{
      tool: "tools/list-randomizer",
      name: "List Randomizer — Shuffle & Pick Winners",
      path: "/tools/list-randomizer",
      description:
        "Free online list randomizer that shuffles any list or picks unique winners using a cryptographically secure Fisher–Yates shuffle in the browser.",
      keywords: "list randomizer, shuffle list, random picker, pick random winner, name randomizer",
    }}
    articles={articles}
    faqs={listRandomizerFaqs}
    faqTitle="List Randomizer FAQ"
    faqDescription="Common questions about shuffling lists and picking winners, answered by our web experts."
    related={relatedFor("list-randomizer")}
  >
    <ListRandomizer />
  </ToolPageLayout>
);

export default ListRandomizerPage;
