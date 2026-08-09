import Link from "next/link";
import ToolPageLayout from "@/components/ToolPageLayout";
import PasswordGenerator from "@/components/PasswordGenerator";
import { SITE } from "@/constant/site";
import { createMetadata } from "@/Data/Seo/seo-utils";
import { passwordFaqs } from "@/Data/Tools/faqs";
import { relatedFor } from "@/Data/Tools/tools";

export const metadata = createMetadata({
  title: "Password Generator — Create Strong, Secure Passwords | The Stockit",
  description:
    "Free password generator that creates cryptographically strong, random passwords in your browser. Custom length and character sets. Nothing is ever sent to a server.",
  keywords:
    "password generator, strong password generator, secure password, random password, create strong password",
  url: `${SITE.baseUrl}/tools/password-generator`,
  image: "/og/og-tools-password-generator.jpg",
  type: "website",
});

const articles = [
  {
    id: "how-it-works",
    title: "How this password generator works",
    body: (
      <>
        <p>
          Every password here is created using the{" "}
          <strong>Web Crypto API</strong> — the same cryptographically secure
          random number generator that browsers use to protect TLS connections.
          Not a pattern, not a word list, and not a predictable "random" sequence
          from a maths formula: each character is drawn from a genuinely
          unpredictable source of entropy on your device.
        </p>
        <p>
          Because everything runs locally, your password never touches our server
          or any third party. It exists only in your browser tab, which means the
          safest possible way to use it is to copy it once and close the tab.
        </p>
      </>
    ),
  },
  {
    id: "what-makes-a-password-strong",
    title: "What actually makes a password strong?",
    body: (
      <>
        <p>
          Strength comes down to <strong>entropy</strong> — the number of possible
          combinations an attacker must guess through. Two factors control it:
        </p>
        <ul>
          <li>
            <strong>Length.</strong> Every extra character multiplies the search
            space. A 16-character password has billions of times more
            combinations than an 8-character one.
          </li>
          <li>
            <strong>Character pool.</strong> Using upper and lower case, digits
            and symbols increases the pool per position — but length always
            matters more than variety.
          </li>
        </ul>
        <p>
          Our strength meter measures exactly this entropy. Aim for{" "}
          <strong>12–16+ characters</strong> with all four character sets for a
          rating of Strong or Very Strong — comfortably beyond what brute-force
          attacks can reach.
        </p>
      </>
    ),
  },
  {
    id: "password-security",
    title: "Password security essentials",
    body: (
      <>
        <p>
          Weak and reused passwords remain the leading cause of hacked social
          media, email and payment accounts everywhere. Common problems include
          using names and phone numbers, reusing one password across every
          account, and saving passwords in plain text or in browser notes.
        </p>
        <p>
          The fix is simple: a <strong>unique, long password per account</strong>,
          stored in a password manager, with two-factor authentication enabled on
          anything valuable. Use this generator for the passwords themselves and
          for a strong master password for your manager.
        </p>
      </>
    ),
  },
  {
    id: "password-hygiene",
    title: "Good password hygiene checklist",
    body: (
      <>
        <ul>
          <li>
            Use a <strong>unique password for every account</strong> — a leak at
            one site must not compromise the others.
          </li>
          <li>
            Prefer <strong>longer over complex</strong>: 16+ characters beats a
            short string with forced symbols.
          </li>
          <li>
            Store passwords in a <strong>password manager</strong> — not in your
            browser notes, a spreadsheet or on paper.
          </li>
          <li>
            Enable <strong>two-factor authentication (2FA)</strong> wherever it is
            offered, especially for email and banking.
          </li>
          <li>
            <strong>Rotate immediately</strong> after any breach notification or
            if you suspect an account was shared or stolen.
          </li>
        </ul>
      </>
    ),
  },
];

const PasswordGeneratorPage = () => (
  <ToolPageLayout
    kicker="Free Tool · No Sign-Up · No Tracking"
    title="Password Generator — Create Strong, Secure Passwords"
    breadcrumbName="Password Generator"
    intro="Generate cryptographically random, unbreakable passwords with a custom length and character sets. Everything runs in your browser — nothing is ever sent to a server."
    schema={{
      tool: "tools/password-generator",
      name: "Password Generator — Create Strong, Secure Passwords",
      path: "/tools/password-generator",
      description:
        "Free password generator using the Web Crypto API to create strong, random passwords with custom length, character sets and ambiguous-character exclusion, entirely in the browser.",
      keywords: "password generator, strong password, secure password, random password",
    }}
    articles={articles}
    faqs={passwordFaqs}
    faqTitle="Password Generator FAQ"
    faqDescription="Common questions about strong passwords, answered by our security-conscious web experts."
    related={relatedFor("password-generator")}
  >
    <PasswordGenerator />
  </ToolPageLayout>
);

export default PasswordGeneratorPage;
