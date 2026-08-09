import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ToolFaqs from "@/components/ToolFaqs";
import ToolsSchema from "@/components/ToolsSchema";
import CTABanner from "@/components/CTABanner";

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

const RelatedGrid = ({ items }) => (
  <section className="mx-auto max-w-5xl px-6 py-10 md:py-14">
    <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm">
      <h2 className="text-2xl font-bold text-black">More tools and resources</h2>
      <p className="mt-2 max-w-2xl text-gray-500">
        Our free tools help developers, designers and businesses around the world.
        Explore related pages while you are here.
      </p>
      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="group rounded-2xl border border-gray-200 p-5 transition hover:border-blue-400 hover:shadow-md"
          >
            <p className="font-semibold text-gray-900 group-hover:text-blue-700">
              {item.title} →
            </p>
            <p className="mt-1 text-sm text-gray-500">{item.description}</p>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

const ToolPageLayout = ({
  kicker,
  title,
  intro,
  breadcrumbName,
  children,
  articles = [],
  faqs = [],
  faqTitle = "FAQ",
  faqDescription = "",
  related = [],
  cta = {},
  schema = {},
}) => {
  const {
    title: ctaTitle = "Need a website that performs?",
    description = "From blazing-fast hosting to SEO and web development, The Stockit builds and manages websites that rank and convert for businesses everywhere.",
    ctaText = "Talk to an expert",
    ctaLink = "/contact",
  } = cta;

  return (
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
              {breadcrumbName || title}
            </li>
          </ol>
        </nav>

        <div className="mt-6 text-center">
          {kicker && (
            <p className="text-xs font-semibold uppercase tracking-wider text-blue-600">
              {kicker}
            </p>
          )}
          <h1 className="mt-3 text-3xl font-bold leading-tight text-black sm:text-5xl">
            {title}
          </h1>
          {intro && (
            <p className="mx-auto mt-4 max-w-2xl font-medium leading-relaxed tracking-wide text-gray-500">
              {intro}
            </p>
          )}
        </div>
      </div>

      {children}

      <div className="mx-auto max-w-5xl px-6">
        <hr className="border-gray-100" />
      </div>

      {articles.map((article) => (
        <ArticleSection key={article.id} id={article.id} title={article.title}>
          {article.body}
        </ArticleSection>
      ))}

      {faqs.length > 0 && (
        <ToolFaqs title={faqTitle} description={faqDescription} items={faqs} />
      )}

      {related.length > 0 && <RelatedGrid items={related} />}

      <CTABanner
        title={ctaTitle}
        description={description}
        ctaText={ctaText}
        ctaLink={ctaLink}
      />

      <ToolsSchema
        tool={schema.tool}
        name={schema.name}
        path={schema.path}
        description={schema.description}
        keywords={schema.keywords}
        faqItems={faqs}
      />

      <Footer />
    </>
  );
};

export default ToolPageLayout;
