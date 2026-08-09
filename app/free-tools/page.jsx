import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ToolsCard from "@/components/ToolsCard";
import ToolFaqs from "@/components/ToolFaqs";
import ToolsIndexSchema from "@/components/ToolsIndexSchema";
import CTABanner from "@/components/CTABanner";
import { SITE } from "@/constant/site";
import { createMetadata } from "@/Data/Seo/seo-utils";
import { tools } from "@/Data/Tools/tools";
import { toolsIndexFaqs } from "@/Data/Tools/faqs";

export const metadata = createMetadata({
  title: "Free Tools | The Stockit",
  description:
    "Free online tools for Pakistani businesses and developers — IP checker, IP lookup, WHOIS, DNS lookup, password generator and more. Fast, private, and 100% free.",
  keywords:
    "free tools, IP checker, IP lookup, WHOIS lookup, DNS lookup, password generator, base64, JSON formatter, online tools, The Stockit tools",
  url: `${SITE.baseUrl}/free-tools`,
  image: "/og/og-tools.jpg",
  type: "website",
});

const ArticleSection = ({ id, title, children }) => (
  <section id={id} className="mx-auto max-w-5xl scroll-mt-24 px-6 py-10 md:py-14">
    <div className="grid gap-6 md:grid-cols-12">
      <div className="md:col-span-3">
        <h2 className="text-2xl font-bold leading-snug text-black md:sticky md:top-28">
          {title}
        </h2>
      </div>
      <div className="prose prose-gray max-w-none leading-relaxed md:col-span-9">
        {children}
      </div>
    </div>
  </section>
);

const FreeToolsPage = () => (
  <>
    <Header />

    <div className="mx-auto max-w-5xl px-6 pt-10 text-center md:pt-16">
      <p className="text-xs font-semibold uppercase tracking-wider text-blue-600">
        Free Tools · No Sign-Up · No Tracking
      </p>
      <h1 className="mt-3 text-4xl font-bold leading-tight text-black sm:text-5xl">
        Discover Our Free Tools
      </h1>
      <p className="mx-auto mt-4 max-w-2xl font-medium leading-relaxed tracking-wide text-gray-500">
        Professional-grade utilities for businesses, developers and creators —
        from checking your IP to looking up WHOIS records, DNS answers, strong
        passwords, currency rates and text conversions. Fast, private and 100%
        free.
      </p>
    </div>

    <div className="mx-auto max-w-5xl px-6 py-10 md:py-14">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {tools.map((tool) => (
          <ToolsCard
            key={tool.slug}
            icon={tool.icon}
            title={tool.shortTitle}
            description={tool.description}
            url={tool.path}
            badge={tool.badge}
          />
        ))}
      </div>
      <p className="mt-8 text-center text-sm text-gray-400">
        Looking for something specific?{" "}
        <Link href="/contact" className="font-semibold text-blue-700 hover:underline">
          Tell us which tool to build next
        </Link>
        .
      </p>
    </div>

    <div className="mx-auto max-w-5xl px-6">
      <hr className="border-gray-100" />
    </div>

    <ArticleSection id="why-free-tools" title="Free tools built for the web">
      <p>
        Every tool on this page is built for the everyday questions that
        developers, designers, students and business owners hit on a weekly basis —
        what is my IP, who owns this domain, why is my email bouncing, what is a
        strong password, how do I encode this text. These are the utilities that
        usually cost a subscription or demand a hunt through cluttered,
        ad-stuffed websites.
      </p>
      <p>
        The Stockit is a web design and digital marketing agency based in
        Islamabad, Pakistan, working with clients around the world. These tools
        grew out of our own daily work — checking client domains, verifying DNS
        after migration, formatting JSON during integrations, and generating
        secure credentials for new accounts. They are exactly what we use
        internally, published openly for everyone.
      </p>
    </ArticleSection>

    <ArticleSection id="privacy-first" title="Privacy-first by design">
      <ul>
        <li>
          <strong>Password generator and text case converter</strong> run 100%
          in your browser — nothing you type ever leaves your device.
        </li>
        <li>
          <strong>IP, WHOIS and DNS lookups</strong> query live public sources
          (ipwho.is, the RDAP registry directory and dns.google) and we do not
          log, store or sell the addresses you search.
        </li>
        <li>
          <strong>No accounts, no ads, no tracking scripts.</strong> Open a
          tool, get your answer, and leave. There is nothing to sign up for and
          no analytics behind the scenes.
        </li>
      </ul>
    </ArticleSection>

    <ArticleSection id="save-money" title="Tools that save you money">
      <p>
        Businesses everywhere pay monthly for tools that do one simple thing.
        This collection replaces the most common paid utilities: instead of
        buying a WHOIS membership to check domains, a DNS checker to debug email,
        a password manager premium tier to generate credentials, or a developer
        suite to format JSON and encode text, you get the same class of results
        here for free.
      </p>
      <p>
        The tools are deliberately simple and fast — no logins, no installers,
        no crippled free tiers. When a paid platform leaves you underwhelmed,
        or when a client asks "can you just check something quickly?", this page
        is the first stop. And if your business needs more than a tool — a
        website, hosting or{" "}
        <Link href="/seo-services" className="text-blue-600 hover:underline">
          SEO
        </Link>{" "}
        — our{" "}
        <Link href="/services" className="text-blue-600 hover:underline">
          services
        </Link>{" "}
        are built to scale with you.
      </p>
    </ArticleSection>

    <ToolFaqs
      title="Free Tools FAQ"
      description="Common questions about our free tool collection, answered by our web experts."
      items={toolsIndexFaqs}
    />

    <CTABanner
      title="Need a website that performs?"
      description="From blazing-fast hosting to SEO and web development, The Stockit builds and manages websites that rank and convert for Pakistani businesses."
      ctaText="Talk to an expert"
      ctaLink="/contact"
    />

    <ToolsIndexSchema tools={tools} faqItems={toolsIndexFaqs} />

    <Footer />
  </>
);

export default FreeToolsPage;
