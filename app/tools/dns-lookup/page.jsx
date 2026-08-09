import Link from "next/link";
import ToolPageLayout from "@/components/ToolPageLayout";
import DnsLookup from "@/components/DnsLookup";
import { SITE } from "@/constant/site";
import { createMetadata } from "@/Data/Seo/seo-utils";
import { dnsFaqs } from "@/Data/Tools/faqs";
import { relatedFor } from "@/Data/Tools/tools";

export const metadata = createMetadata({
  title: "DNS Lookup — Check A, MX, TXT & NS Records | The Stockit",
  description:
    "Free DNS lookup: resolve A, AAAA, MX, TXT, NS, CNAME, SOA and CAA records for any domain with live TTL values. Debug email and website issues in seconds.",
  keywords:
    "DNS lookup, DNS check, check DNS records, MX lookup, TXT lookup, NS lookup, domain DNS, DNS records checker",
  url: `${SITE.baseUrl}/tools/dns-lookup`,
  image: "/og/og-tools-dns-lookup.jpg",
  type: "website",
});

const articles = [
  {
    id: "what-are-dns-records",
    title: "What are DNS records?",
    body: (
      <>
        <p>
          The Domain Name System (DNS) is the internet's phone book: it converts
          human-friendly names like <code>thestockit.com</code> into the IP
          addresses computers use to reach each other. DNS <strong>records</strong>{" "}
          are the individual entries that define how a domain works.
        </p>
        <p>
          The <strong>A record</strong> points your domain at a server's IPv4
          address — this is the record that makes your website load.{" "}
          <strong>MX records</strong> tell the internet where to deliver your
          email. <strong>TXT records</strong> carry verification strings and
          email-authentication policies like SPF. <strong>CNAME</strong> aliases
          one name to another, <strong>NS</strong> lists the authoritative
          nameservers, and <strong>SOA</strong> is the record that opens the
          authority chain.
        </p>
      </>
    ),
  },
  {
    id: "why-dns-matters",
    title: "Why DNS troubleshooting matters for business",
    body: (
      <>
        <p>
          When a website or email suddenly stops working, DNS is often the
          culprit. A few of the most common situations where this lookup saves
          the day:
        </p>
        <ul>
          <li>
            <strong>Your site is live but won't load:</strong> check the{" "}
            <strong>A</strong> record to confirm the domain is pointed at your
            hosting server's IP.
          </li>
          <li>
            <strong>Emails go to spam or bounce:</strong> verify the{" "}
            <strong>MX</strong> record and look for an SPF{" "}
            <strong>TXT</strong> record.
          </li>
          <li>
            <strong>You just switched hosting:</strong> confirm the new IP has
            propagated by re-checking the A record until it shows the new value.
          </li>
          <li>
            <strong>A subdomain like blog or mail is missing:</strong> check{" "}
            <strong>CNAME</strong> and the relevant record type for that host.
          </li>
        </ul>
        <p>
          Because our results come from a live public resolver (dns.google), you
          see the exact answers your visitors' devices would receive — including
          the TTL, which tells you how long before a change fully propagates.
        </p>
      </>
    ),
  },
  {
    id: "email-dns-checklist",
    title: "DNS checklist for reliable email delivery",
    body: (
      <>
        <ol>
          <li>
            <strong>MX record:</strong> confirm it points to your email provider
            with the correct priority number.
          </li>
          <li>
            <strong>SPF (TXT):</strong> ensure <code>v=spf1</code> lists every
            server allowed to send on your behalf.
          </li>
          <li>
            <strong>DKIM (TXT):</strong> the provider-specific key that signs
            your outbound mail.
          </li>
          <li>
            <strong>DMARC (TXT):</strong> a policy that tells receiving servers
            what to do with mail that fails SPF or DKIM.
          </li>
        </ol>
        <p>
          Run the MX lookup and a TXT lookup on your domain to confirm the first
          two items now. For a deeper guide, read our{" "}
          <Link
            href="/blog/what-is-dns-and-how-does-it-work"
            className="text-blue-600 hover:underline"
          >
            introduction to DNS
          </Link>
          .
        </p>
      </>
    ),
  },
  {
    id: "dns-and-hosting",
    title: "DNS and web hosting",
    body: (
      <>
        <p>
          When you order{" "}
          <Link href="/hosting" className="text-blue-600 hover:underline">
            web hosting
          </Link>
          , you receive an IP address (or a hostname) to point your domain at. On
          most hosting plans the nameservers you are given{" "}
          <em>are</em> the NS records, and the A record maps the domain to the
          server. After registration, DNS propagation can take from a few
          minutes to 48 hours — this lookup lets you watch it go live in
          real time.
        </p>
      </>
    ),
  },
];

const DnsLookupPage = () => (
  <ToolPageLayout
    kicker="Free Tool · No Sign-Up · No Tracking"
    title="DNS Lookup — Check A, MX, TXT & NS Records"
    breadcrumbName="DNS Lookup"
    intro="Resolve live DNS records for any domain — A, AAAA, CNAME, MX, TXT, NS, SOA and CAA — with real TTL values. Debug websites and email in seconds."
    schema={{
      tool: "tools/dns-lookup",
      name: "DNS Lookup — Check A, MX, TXT & NS Records",
      path: "/tools/dns-lookup",
      description:
        "Free DNS lookup that resolves A, AAAA, CNAME, MX, TXT, NS, SOA and CAA records for any domain via the public dns.google resolver, with live TTL values.",
      keywords: "DNS lookup, DNS check, check DNS records, MX lookup, TXT lookup",
    }}
    articles={articles}
    faqs={dnsFaqs}
    faqTitle="DNS Lookup FAQ"
    faqDescription="Common questions about DNS lookups, answered by our web experts."
    related={relatedFor("dns-lookup")}
  >
    <DnsLookup />
  </ToolPageLayout>
);

export default DnsLookupPage;
