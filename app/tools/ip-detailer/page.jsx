import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import IpChecker from "@/components/IpChecker";
import ToolFaqs from "@/components/ToolFaqs";
import ToolsSchema from "@/components/ToolsSchema";
import CTABanner from "@/components/CTABanner";
import { SITE } from "@/constant/site";
import { createMetadata } from "@/Data/Seo/seo-utils";
import { ipCheckerFaqs } from "@/Data/Tools/faqs";

export const metadata = createMetadata({
  title: "IP Checker — What Is My IP Address? Free & Instant",
  description:
    "Free IP checker: find your public IP address instantly with detailed network, location, ISP and timezone information. No sign-up, private and 100% free.",
  keywords:
    "IP checker, what is my IP, my IP address, public IP address, find my IP, IP address check, The Stockit IP tool",
  url: `${SITE.baseUrl}/tools/ip-detailer`,
  image: "/og/og-tools-ip-checker.jpg",
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
      <h2 className="text-2xl font-bold text-black">More tools and resources</h2>
      <p className="mt-2 max-w-2xl text-gray-500">
        Our free tools help developers, designers and businesses around the world.
        Explore related pages while you are here.
      </p>
      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        <Link
          href="/tools/ip-detailer/ip-lookup"
          className="group rounded-2xl border border-gray-200 p-5 transition hover:border-blue-400 hover:shadow-md"
        >
          <p className="font-semibold text-gray-900 group-hover:text-blue-700">
            IP Lookup →
          </p>
          <p className="mt-1 text-sm text-gray-500">
            Look up geolocation and ISP details for any IP or domain.
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
            Fast, secure hosting plans for websites everywhere.
          </p>
        </Link>
        <Link
          href="/domain"
          className="group rounded-2xl border border-gray-200 p-5 transition hover:border-blue-400 hover:shadow-md"
        >
          <p className="font-semibold text-gray-900 group-hover:text-blue-700">
            Domains →
          </p>
          <p className="mt-1 text-sm text-gray-500">
            Register and manage .com, .pk and country domains.
          </p>
        </Link>
        <Link
          href="/blog/what-is-dns-and-how-does-it-work"
          className="group rounded-2xl border border-gray-200 p-5 transition hover:border-blue-400 hover:shadow-md"
        >
          <p className="font-semibold text-gray-900 group-hover:text-blue-700">
            What is DNS? →
          </p>
          <p className="mt-1 text-sm text-gray-500">
            Learn how the domain name system connects IPs to websites.
          </p>
        </Link>
        <Link
          href="/blog/ssl-certificate-everything-you-need-to-know"
          className="group rounded-2xl border border-gray-200 p-5 transition hover:border-blue-400 hover:shadow-md"
        >
          <p className="font-semibold text-gray-900 group-hover:text-blue-700">
            SSL Certificates →
          </p>
          <p className="mt-1 text-sm text-gray-500">
            Understand SSL and why every site needs encryption.
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

const IpDetailerPage = () => (
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
          <li className="font-medium text-gray-600" aria-current="page">
            IP Checker
          </li>
        </ol>
      </nav>

      <div className="mt-6 text-center">
        <p className="text-xs font-semibold uppercase tracking-wider text-blue-600">
          Free Tool · No Sign-Up · No Tracking
        </p>
        <h1 className="mt-3 text-3xl font-bold leading-tight text-black sm:text-5xl">
          IP Checker — What Is My IP Address?
        </h1>
        <p className="mx-auto mt-4 max-w-2xl font-medium leading-relaxed tracking-wide text-gray-500">
          Find your public IP address in seconds. Our free IP checker shows your IP
          along with your location, internet service provider, network details and
          timezone — useful for troubleshooting, security checks and setting up
          servers and remote access.
        </p>
      </div>
    </div>

    <IpChecker />

    <div className="mx-auto max-w-5xl px-6">
      <hr className="border-gray-100" />
    </div>

    <ArticleSection id="what-is-an-ip-address" title="What is an IP address?">
      <p>
        An <strong>IP address</strong> (Internet Protocol address) is a unique string
        of numbers assigned to every device that connects to the internet. Think of it
        as your device's mailing address: it tells websites, apps and servers where to
        send the data you request. Without an IP address, the internet would have no
        way to know which device asked for a page, a video or an email.
      </p>
      <p>
        There are two types of addresses you come across. Your{" "}
        <strong>public IP address</strong> is the one seen by the outside world — it is
        assigned by your internet service provider (ISP) such as PTCL, Jazz, Zong,
        StormFiber or Nayatel. Your <strong>private IP address</strong> (like
        192.168.x.x) is used only inside your home or office network and is never
        visible on the internet. The tool above detects your current public IP
        automatically the moment you open the page.
      </p>
    </ArticleSection>

    <ArticleSection
      id="how-to-find-your-ip"
      title="How to find your IP address"
    >
      <p>
        There are several ways to check your IP address, depending on the device you
        are using:
      </p>
      <ol>
        <li>
          <strong>Online (fastest):</strong> open this IP checker — your public IP
          appears automatically with full details. Works on any device and browser.
        </li>
        <li>
          <strong>On Windows:</strong> press <code>Win + R</code>, type{" "}
          <code>cmd</code> and press Enter, then run <code>ipconfig</code>. Your
          private IP is under “IPv4 Address”.
        </li>
        <li>
          <strong>On Android or iPhone:</strong> open Wi-Fi settings, tap your
          connected network and look at the IP address shown in the network details.
        </li>
        <li>
          <strong>On your router:</strong> log in to your router's admin panel (often
          192.168.0.1 or 192.168.1.1) and check the WAN or internet status page for
          the public IP your ISP assigned.
        </li>
      </ol>
      <p>
        Most home and business connections use dynamic IPs, so the address you see
        today can change after a router restart or a reconnection. If you need a
        fixed address — for hosting a server or remote access — ask your ISP about a{" "}
        <strong>static IP</strong> add-on.
      </p>
    </ArticleSection>

    <ArticleSection
      id="ipv4-vs-ipv6"
      title="IPv4 vs IPv6: what is the difference?"
    >
      <p>
        <strong>IPv4</strong> is the format most people recognise — four groups of
        numbers separated by dots, such as <code>39.63.1.1</code>. It has supported the
        internet for decades, but it offers only about 4.3 billion unique addresses,
        which the world has now exhausted.
      </p>
      <p>
        <strong>IPv6</strong> was created to solve that shortage. It uses a longer,
        hexadecimal format such as{" "}
        <code>2400:8900::f03c:91ff:fed1</code>, providing a practically unlimited pool
        of addresses. ISPs worldwide are gradually rolling out IPv6 alongside IPv4.
        Our IP checker detects which version your connection is using and labels it
        clearly, so you know exactly which protocol you are on.
      </p>
    </ArticleSection>

    <ArticleSection
      id="static-vs-dynamic-ip"
      title="Static vs dynamic IP addresses"
    >
      <p>
        A <strong>dynamic IP address</strong> is assigned automatically by your ISP and
        can change periodically. This is the default for almost every home and most
        business broadband plans — it is easy to manage and costs nothing
        extra. It can be a slight inconvenience if you want to host a website or access
        your home network remotely, because the address can shift.
      </p>
      <p>
        A <strong>static IP address</strong> stays the same permanently. Businesses use
        them for hosting servers, running email systems, connecting to secure VPNs and
        remote monitoring. Static IPs are more predictable and help with authentication
        and firewall rules, but ISPs usually charge a monthly fee for them. If you run
        a server-heavy setup, our{" "}
        <Link href="/hosting" className="text-blue-600 hover:underline">
          web hosting
        </Link>{" "}
        plans already include stable, dedicated infrastructure — you do not need to
        host from a home connection.
      </p>
    </ArticleSection>

    <ArticleSection
      id="what-can-someone-see"
      title="What can someone find out from my IP address?"
    >
      <p>
        By itself, your IP reveals a limited amount of information: the country,
        city and region your connection comes from, your ISP and, in some cases, your
        approximate timezone. It does <em>not</em> reveal your name, email, exact
        street address or the contents of your browsing activity.
      </p>
      <p>
        Websites use your IP for practical purposes — serving local language and
        currency, enforcing regional rules and blocking fraudulent traffic. Network
        administrators use it to monitor performance. Only your ISP and law enforcement
        (with proper legal authority) can link an IP to a physical subscriber address,
        which is why a VPN is the common way people add a layer of privacy when they
        want it.
      </p>
    </ArticleSection>

    <ArticleSection
      id="protect-your-ip"
      title="How to protect your IP address"
    >
      <ul>
        <li>
          <strong>Use a VPN</strong> when you connect to public Wi-Fi in cafes, hotels
          or airports — it hides your real IP and encrypts your traffic.
        </li>
        <li>
          <strong>Keep your router updated</strong> and change the default admin
          password. An unpatched router can be hijacked to spoof traffic.
        </li>
        <li>
          <strong>Avoid suspicious links</strong> in messages and emails. Phishing
          pages are a common way attackers gather personal data around the world.
        </li>
        <li>
          <strong>Use HTTPS everywhere</strong>. Encrypted connections protect your
          data in transit; learn more about{" "}
          <Link
            href="/blog/ssl-certificate-everything-you-need-to-know"
            className="text-blue-600 hover:underline"
          >
            SSL certificates
          </Link>{" "}
          and why every site needs one.
        </li>
        <li>
          <strong>Restart your router</strong> to get a fresh dynamic IP if your
          current one ever gets blocked by a service.
        </li>
      </ul>
    </ArticleSection>

    <ToolFaqs
      title="IP Checker FAQ"
      description="Common questions about IP addresses, answered by our web experts."
      items={ipCheckerFaqs}
    />

    <RelatedLinks />

    <CTABanner
      title="Need a website that performs?"
      description="From blazing-fast hosting to SEO and web development, The Stockit builds and manages websites that rank and convert for businesses everywhere."
      ctaText="Talk to an expert"
      ctaLink="/contact"
    />

    <ToolsSchema
      tool="tools/ip-detailer"
      name="IP Checker — What Is My IP Address"
      path="/tools/ip-detailer"
      description="Free IP checker that instantly finds your public IP address with geolocation, ISP, network and timezone details."
      keywords="IP checker, what is my IP, my IP address, IP address lookup"
      faqItems={ipCheckerFaqs}
    />

    <Footer />
  </>
);

export default IpDetailerPage;
