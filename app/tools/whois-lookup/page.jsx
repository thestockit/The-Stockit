import Link from "next/link";
import ToolPageLayout from "@/components/ToolPageLayout";
import WhoisLookup from "@/components/WhoisLookup";
import { SITE } from "@/constant/site";
import { createMetadata } from "@/Data/Seo/seo-utils";
import { whoisFaqs } from "@/Data/Tools/faqs";
import { relatedFor } from "@/Data/Tools/tools";

export const metadata = createMetadata({
  title: "WHOIS Lookup — Domain Ownership & Registration | The Stockit",
  description:
    "Free WHOIS lookup: check any domain's registrar, registration and expiry dates, nameservers, status codes and abuse contact. Live RDAP registry data for domains worldwide.",
  keywords:
    "WHOIS lookup, domain lookup, check domain registration, domain availability, WHOIS check, WHOIS records",
  url: `${SITE.baseUrl}/tools/whois-lookup`,
  image: "/og/og-tools-whois-lookup.jpg",
  type: "website",
});

const articles = [
  {
    id: "what-is-whois",
    title: "What is a WHOIS record?",
    body: (
      <>
        <p>
          A WHOIS record is the public registration file attached to every
          registered domain name. It answers three practical questions:{" "}
          <strong>who</strong> manages the domain, <strong>when</strong> it was
          registered and when it expires, and <strong>how</strong> it is
          configured — through its nameservers and status codes.
        </p>
        <p>
          Traditionally served over the WHOIS protocol, this data is now
          available through RDAP (Registration Data Access Protocol), the modern
          standard that ICANN-accredited registries use. Our tool reads directly
          from the RDAP directory at rdap.org, so the results are the same
          registry-grade records registrars and hosting providers rely on — not
          a scraped, possibly stale copy.
        </p>
      </>
    ),
  },
  {
    id: "how-to-check-a-domain",
    title: "How to check a domain's registration",
    body: (
      <>
        <ol>
          <li>
            Type the domain without <code>www</code> or{" "}
            <code>https://</code> — for example <code>thestockit.com</code>.
          </li>
          <li>
            Press <strong>Look Up WHOIS</strong>. Results appear in under a
            second.
          </li>
          <li>
            Review the <strong>registrar</strong>,{" "}
            <strong>Registered On</strong> and <strong>Expires On</strong>{" "}
            dates, <strong>Name Servers</strong> and{" "}
            <strong>Domain Status</strong> codes.
          </li>
        </ol>
        <p>
          If you see a privacy service instead of an owner name, that is normal —
          most registrars now mask personal registrant details while keeping a
          working abuse contact. For support or disputes, contact the registrar
          shown in the record.
        </p>
      </>
    ),
  },
  {
    id: "domain-status-codes",
    title: "Understanding domain status codes",
    body: (
      <>
        <p>
          Domain status codes are flags the registry applies to a domain, and
          they control what actions are permitted at any time. The most common
          ones you will see:
        </p>
        <ul>
          <li>
            <strong>clientTransferProhibited</strong> — the most common lock; it
            blocks transfer to another registrar and is standard anti-theft
            protection.
          </li>
          <li>
            <strong>clientUpdateProhibited</strong> — prevents changes to the
            domain's details until the lock is removed.
          </li>
          <li>
            <strong>clientDeleteProhibited</strong> — stops the domain from being
            deleted, protecting against accidental or malicious deletion.
          </li>
          <li>
            <strong>clientRenewProhibited</strong> — blocks renewal of the
            registration period.
          </li>
        </ul>
        <p>
          A single domain can carry several statuses at once, which is why we
          render them as chips under the record. If a code like{" "}
          <code>pendingDelete</code> appears, the domain is in the final stage of
          release and may soon be available for re-registration.
        </p>
      </>
    ),
  },
  {
    id: "why-own-your-domain",
    title: "Why your domain is your most valuable asset",
    body: (
      <>
        <p>
          Your domain is the one digital asset your business truly owns. Your
          social accounts can be suspended, your hosting can move, but your
          domain remains your identity — which is why registration details must
          be accurate and kept under an email address you control.
        </p>
        <p>
          Before buying a domain for your{" "}
          <Link href="/hosting" className="text-blue-600 hover:underline">
            website
          </Link>
          , run a WHOIS check to confirm the name is available and see who
          manages similar names in your niche. For help choosing, registering or
          managing a domain, explore our{" "}
          <Link href="/domain" className="text-blue-600 hover:underline">
            domain services
          </Link>
          .
        </p>
      </>
    ),
  },
];

const WhoisLookupPage = () => (
  <ToolPageLayout
    kicker="Free Tool · No Sign-Up · No Tracking"
    title="WHOIS Lookup — Domain Ownership & Registration"
    breadcrumbName="WHOIS Lookup"
    intro="Look up the public registration record of any domain — registrar, registration and expiry dates, nameservers, status codes and abuse contact. Live RDAP registry data, straight from the source."
    schema={{
      tool: "tools/whois-lookup",
      name: "WHOIS Lookup — Domain Ownership & Registration",
      path: "/tools/whois-lookup",
      description:
        "Free WHOIS lookup that reads live RDAP registry data to show a domain's registrar, registration and expiry dates, nameservers, status codes and abuse contact.",
      keywords: "WHOIS lookup, domain lookup, check domain registration, domain availability",
    }}
    articles={articles}
    faqs={whoisFaqs}
    faqTitle="WHOIS Lookup FAQ"
    faqDescription="Common questions about WHOIS lookups, answered by our web experts."
    related={relatedFor("whois-lookup")}
  >
    <WhoisLookup />
  </ToolPageLayout>
);

export default WhoisLookupPage;
