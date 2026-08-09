import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import IpLookup from "@/components/IpLookup";
import ToolFaqs from "@/components/ToolFaqs";
import ToolsSchema from "@/components/ToolsSchema";
import CTABanner from "@/components/CTABanner";
import { SITE } from "@/constant/site";
import { createMetadata } from "@/Data/Seo/seo-utils";
import { ipLookupFaqs } from "@/Data/Tools/faqs";

export const metadata = createMetadata({
  title: "IP Lookup — IP Address Geolocation & ISP Finder",
  description:
    "Free IP lookup tool: enter any IP address or domain to see geolocation, country, region, city, ISP, ASN and timezone. Fast, private and free from The Stockit.",
  keywords:
    "IP lookup, IP address lookup, IP geolocation, find IP location, trace IP address, domain IP lookup, The Stockit tools",
  url: `${SITE.baseUrl}/tools/ip-detailer/ip-lookup`,
  image: "/og/og-tools-ip-lookup.jpg",
  type: "website",
});

const ArticleSection = ({ id, title, children }) => (
  <section id={id} className="mx-auto max-w-5xl px-6 py-10 md:py-14 scroll-mt-24">
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

const RelatedLinks = () => (
  <section className="mx-auto max-w-5xl px-6 py-10 md:py-14">
    <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm">
      <h2 className="text-2xl font-bold text-black">Keep exploring</h2>
      <p className="mt-2 max-w-2xl text-gray-500">
        Related tools, guides and services that pair well with IP lookup.
      </p>
      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        <Link
          href="/tools/ip-detailer"
          className="group rounded-2xl border border-gray-200 p-5 transition hover:border-blue-400 hover:shadow-md"
        >
          <p className="font-semibold text-gray-900 group-hover:text-blue-700">
            IP Checker →
          </p>
          <p className="mt-1 text-sm text-gray-500">
            See your own public IP address and network details instantly.
          </p>
        </Link>
        <Link
          href="/blog/best-payment-gateway-for-your-website-in-pakistan"
          className="group rounded-2xl border border-gray-200 p-5 transition hover:border-blue-400 hover:shadow-md"
        >
          <p className="font-semibold text-gray-900 group-hover:text-blue-700">
            Payment Gateways in Pakistan →
          </p>
          <p className="mt-1 text-sm text-gray-500">
            How geo-detection helps you show the right payment methods.
          </p>
        </Link>
        <Link
          href="/seo-services"
          className="group rounded-2xl border border-gray-200 p-5 transition hover:border-blue-400 hover:shadow-md"
        >
          <p className="font-semibold text-gray-900 group-hover:text-blue-700">
            SEO Services →
          </p>
          <p className="mt-1 text-sm text-gray-500">
            Improve rankings and understand your international traffic.
          </p>
        </Link>
        <Link
          href="/hosting"
          className="group rounded-2xl border border-gray-200 p-5 transition hover:border-blue-400 hover:shadow-md"
        >
          <p className="font-semibold text-gray-900 group-hover:text-blue-700">
            Web Hosting →
          </p>
          <p className="mt-1 text-sm text-gray-500">
            Hosting that keeps your site fast for visitors around the world.
          </p>
        </Link>
        <Link
          href="/blog/web-hosting-explained-how-it-works"
          className="group rounded-2xl border border-gray-200 p-5 transition hover:border-blue-400 hover:shadow-md"
        >
          <p className="font-semibold text-gray-900 group-hover:text-blue-700">
            How Web Hosting Works →
          </p>
          <p className="mt-1 text-sm text-gray-500">
            Understand servers, IPs and how websites stay online.
          </p>
        </Link>
        <Link
          href="/free-tools"
          className="group rounded-2xl border border-gray-200 p-5 transition hover:border-blue-400 hover:shadow-md"
        >
          <p className="font-semibold text-gray-900 group-hover:text-blue-700">
            All Free Tools →
          </p>
          <p className="mt-1 text-sm text-gray-500">
            Browse the full collection of tools from The Stockit.
          </p>
        </Link>
      </div>
    </div>
  </section>
);

const IpLookupPage = () => (
  <>
    <Header />

    <div className="mx-auto max-w-5xl px-6 pt-10 md:pt-14">
      <nav aria-label="Breadcrumb" className="text-sm text-gray-400">
        <ol className="flex flex-wrap items-center gap-1.5">
          <li>
            <Link href="/" className="transition hover:text-blue-600">
              Home
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <Link href="/free-tools" className="transition hover:text-blue-600">
              Free Tools
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <Link
              href="/tools/ip-detailer"
              className="transition hover:text-blue-600"
            >
              IP Checker
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li className="font-medium text-gray-600" aria-current="page">
            IP Lookup
          </li>
        </ol>
      </nav>

      <div className="mt-6 text-center">
        <p className="text-xs font-semibold uppercase tracking-wider text-blue-600">
          Free Tool · IP & Domain Lookup
        </p>
        <h1 className="mt-3 text-3xl font-bold leading-tight text-black sm:text-5xl">
          IP Lookup — IP Geolocation Finder
        </h1>
        <p className="mx-auto mt-4 max-w-2xl font-medium leading-relaxed tracking-wide text-gray-500">
          Enter any IP address (IPv4 or IPv6) or domain name to reveal its geolocation,
          country, region, city, ISP, ASN and timezone. Used by developers, network
          admins and marketers — private, free and no registration required.
        </p>
      </div>
    </div>

    <IpLookup />

    <div className="mx-auto max-w-5xl px-6">
      <hr className="border-gray-100" />
    </div>

    <ArticleSection id="what-is-ip-lookup" title="What is an IP address lookup?">
      <p>
        An <strong>IP address lookup</strong> is a way to retrieve the public records
        attached to an IP address or domain. Give the tool any address and it returns
        details such as the <strong>country</strong>, <strong>region</strong>,{" "}
        <strong>city</strong>, approximate coordinates, <strong>ISP</strong>{" "}
        (internet service provider), <strong>ASN</strong> (autonomous system number)
        and <strong>timezone</strong>.
      </p>
      <p>
        You can also enter a domain like <code>google.com</code> — the lookup resolves
        the domain to its IP first, then returns the hosting and geolocation details
        for that address. This is the same kind of data that powers “what is my IP”
        widgets, geo-targeting and fraud checks across the web.
      </p>
    </ArticleSection>

    <ArticleSection
      id="ip-lookup-accuracy"
      title="How accurate is IP geolocation?"
    >
      <p>
        IP geolocation is <strong>approximate, not exact</strong>. Databases built from
        ISP registration and routing data can usually pinpoint the city or district —
        often within a few kilometres for fixed broadband connections. Accuracy is
        lower for mobile data, corporate gateways and VPN traffic, and some addresses
        resolve to a data centre that sits far from the actual users.
      </p>
      <p>
        For that reason, treat coordinates and maps as a general idea of location
        rather than a precise pin. If you see a result that looks wrong, the address
        likely belongs to a hosting or cloud provider, or your traffic is being routed
        through a proxy or CDN.
      </p>
    </ArticleSection>

    <ArticleSection id="read-ip-lookup-results" title="How to read IP lookup results">
      <ol>
        <li>
          <strong>IP Address &amp; Type:</strong> confirms whether the address is
          IPv4 or IPv6 and shows the exact string.
        </li>
        <li>
          <strong>Geolocation:</strong> continent, country, region and city — where
          the address is registered.
        </li>
        <li>
          <strong>Connection:</strong> the ISP and organization that owns the block,
          plus its ASN, which is the network's unique registration number.
        </li>
        <li>
          <strong>Timezone:</strong> the local timezone and UTC offset, which is handy
          when scheduling messages or checking logs across regions.
        </li>
      </ol>
      <p>
        Use the tabs on the tool to switch between these groups, or copy any value with
        the copy button for use in your own scripts and documentation.
      </p>
    </ArticleSection>

    <ArticleSection
      id="why-ip-lookup-matters"
      title="Why IP lookup matters for your website"
    >
      <p>
        If you run a website or online store, knowing where your traffic comes from is
        practical, not academic. IP lookup data powers:
      </p>
      <ul>
        <li>
          <strong>Geo-targeted content:</strong> showing local currency and payment
          methods to visitors in one country while displaying others elsewhere.
        </li>
        <li>
          <strong>Fraud prevention:</strong> flagging orders or logins that come from
          high-risk regions or mismatched locations.
        </li>
        <li>
          <strong>SEO and analytics:</strong> understanding which cities and ISPs drive
          the most visits so you can focus ads and content where they work best.
        </li>
        <li>
          <strong>Security:</strong> spotting unexpected access from unfamiliar
          networks on your hosting dashboard.
        </li>
      </ul>
      <p>
        For e-commerce and lead-generation sites, pairing IP lookup with the right{" "}
        <Link
          href="/blog/best-payment-gateway-for-your-website-in-pakistan"
          className="text-blue-600 hover:underline"
        >
          local payment gateways
        </Link>{" "}
        noticeably improves conversion. If you need help setting any of this up, our{" "}
        <Link href="/seo-services" className="text-blue-600 hover:underline">
          SEO and analytics team
        </Link>{" "}
        can handle it end to end.
      </p>
    </ArticleSection>

    <ArticleSection id="ip-lookup-legality" title="Is IP lookup legal?">
      <p>
        Yes. Looking up an IP address with publicly available tools is a routine,
        legal activity used by developers, network administrators, marketers and
        security teams worldwide. The information returned — country, region, ISP and
        timezone — is public registration data, not private personal information.
      </p>
      <p>
        What matters is how the data is used. Harassing, stalking or attempting to
        access someone's systems based on their IP is illegal in most jurisdictions,
        including under cybercrime legislation such as Pakistan's PECA 2016, and can
        carry serious penalties. Use IP lookup for legitimate purposes —
        troubleshooting, geo-targeting, security and analytics — and you are on solid
        ground.
      </p>
    </ArticleSection>

    <ToolFaqs
      title="IP Lookup FAQ"
      description="Answers to common questions about IP lookups and geolocation data."
      items={ipLookupFaqs}
    />

    <RelatedLinks />

    <CTABanner
      title="Turn visitor data into revenue"
      description="Our team helps businesses localise content, prevent fraud and grow with data-driven SEO and analytics. Let's talk about your goals."
      ctaText="Start a project"
      ctaLink="/contact"
    />

    <ToolsSchema
      tool="tools/ip-detailer/ip-lookup"
      name="IP Lookup — IP Address Geolocation Finder"
      path="/tools/ip-detailer/ip-lookup"
      description="Free IP lookup tool that reveals geolocation, country, region, city, ISP, ASN and timezone for any IP address or domain."
      keywords="IP lookup, IP geolocation, IP address lookup, trace IP"
      faqItems={ipLookupFaqs}
    />

    <Footer />
  </>
);

export default IpLookupPage;
