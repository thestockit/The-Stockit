// app/blog/[slug]/page.js
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Markdown from "markdown-to-jsx";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TableOfContents from "@/components/Toc";
import Sidebarad from "@/components/Sidebarad";
import { SITE } from "@/constant/site";
import {
  createMetadata,
  blogPostingSchema,
  breadcrumbSchema,
} from "@/Data/Seo/seo-utils";

const postsDirectory = path.join(process.cwd(), "posts");

const readPost = async (slug) => {
  const filePath = path.join(postsDirectory, `${slug}.md`);
  try {
    await fs.promises.access(filePath);
  } catch {
    return null;
  }
  const fileContents = await fs.promises.readFile(filePath, "utf8");
  const { data: frontmatter, content } = matter(fileContents);
  return { frontmatter, content };
};

export async function generateStaticParams() {
  try {
    await fs.promises.access(postsDirectory);
  } catch {
    return [];
  }

  const filenames = await fs.promises.readdir(postsDirectory);
  return filenames
    .filter((f) => /\.md$/i.test(f))
    .map((filename) => ({ slug: filename.replace(/\.md$/, "") }));
}

export async function generateMetadata({ params }) {
  const post = await readPost(params.slug);
  if (!post) return {};

  const url = `${SITE.baseUrl}/blog/${params.slug}`;

  return createMetadata({
    title: post.frontmatter.title,
    description:
      post.frontmatter.description ||
      post.frontmatter.excerpt ||
      "A guide from The Stockit for Pakistani businesses.",
    keywords: post.frontmatter.category
      ? `${post.frontmatter.category}, The Stockit blog, Pakistan`
      : "The Stockit blog, Pakistan",
    url,
    image: post.frontmatter.coverImage,
    type: "article",
    authors: post.frontmatter.author ? [post.frontmatter.author] : undefined,
    publishedTime: post.frontmatter.date,
  });
}

export default async function BlogPost({ params }) {
  const post = await readPost(params.slug);

  if (!post) {
    notFound();
  }

  const { frontmatter, content } = post;
  const postUrl = `${SITE.baseUrl}/blog/${params.slug}`;

  // Dynamic banner props from frontmatter
  const bannerProps = {
    heading: frontmatter.bannerHeading || "Exclusive for readers",
    question: frontmatter.bannerQuestion || "Want to try this hosting?",
    discount: frontmatter.bannerDiscount ?? 50,
    affiliateLink: frontmatter.bannerLink || "#",
    expiryDate: frontmatter.bannerExpiry || null,
  };

  const blogSchema = {
    "@context": "https://schema.org",
    "@graph": [
      blogPostingSchema({
        title: frontmatter.title,
        description:
          frontmatter.description ||
          frontmatter.excerpt ||
          "A guide from The Stockit for Pakistani businesses.",
        url: postUrl,
        datePublished: frontmatter.date,
        dateModified: frontmatter.date,
        author: frontmatter.author,
        coverImage: frontmatter.coverImage,
        category: frontmatter.category,
      }),
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Blog", path: "/blog" },
        { name: frontmatter.title, path: `/blog/${params.slug}` },
      ]),
    ],
  };

  return (
    <>
      {/* HEADER */}
      <Header />

      {/* BLOG SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />

      {/* MAIN CONTAINER */}
      <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-[1fr_300px] gap-8">

        {/* ------------------ MAIN BLOG CONTENT ------------------ */}
        <article className="bg-white shadow-lg rounded-2xl p-6">

          {/* Breadcrumb Navigation */}
          <nav className="text-sm mb-4 text-gray-500" aria-label="Breadcrumb">
            <Link href="/" className="hover:underline">Home</Link> /{" "}
            <Link href="/blog" className="hover:underline">Blog</Link> /{" "}
            <span className="text-gray-700">{frontmatter.title}</span>
          </nav>

          {/* Blog Cover Image */}
          {frontmatter.coverImage && (
            <div className="mb-6 relative w-full h-64 md:h-96">
              <Image
                src={frontmatter.coverImage}
                alt={frontmatter.title}
                fill
                priority
                className="object-cover rounded-xl"
              />
            </div>
          )}

          {/* Blog Title */}
          <h1 className="text-3xl font-bold mb-4">{frontmatter.title}</h1>

          {/* Blog Meta Info */}
          <div className="text-gray-500 text-sm mb-6">
            By {frontmatter.author || "Admin"}
            {frontmatter.date ? ` | ${frontmatter.date}` : ""}
          </div>

          {/* ===== MOBILE: TOC AFTER INTRODUCTION ===== */}
          <div className="block md:hidden mb-8">
            <TableOfContents />
          </div>

          {/* Blog Body Content */}
          <div className="prose prose-lg max-w-none">
            <Markdown
              options={{
                overrides: {
                  h2: {
                    component: (props) => {
                      const id = props.children
                        ?.toString()
                        ?.toLowerCase()
                        ?.replace(/\s+/g, "-")
                        ?.replace(/[^\w-]+/g, "");
                      return <h2 id={id} {...props} />;
                    },
                  },
                  h3: {
                    component: (props) => {
                      const id = props.children
                        ?.toString()
                        ?.toLowerCase()
                        ?.replace(/\s+/g, "-")
                        ?.replace(/[^\w-]+/g, "");
                      return <h3 id={id} {...props} />;
                    },
                  },
                  img: {
                    component: (props) => {
                      let src = props.src || "";
                      if (!src.startsWith("http") && !src.startsWith("/")) {
                        src = `/${src}`;
                      }
                      return (
                        <div className="relative w-full h-64 my-6">
                          <Image
                            src={src}
                            alt={props.alt || ""}
                            fill
                            className="object-contain rounded-xl mx-auto"
                          />
                        </div>
                      );
                    },
                  },
                  a: {
                    component: ({ href, children }) => {
                      if (href?.startsWith("/")) {
                        return (
                          <Link href={href} className="text-blue-600 font-semibold hover:underline">
                            {children}
                          </Link>
                        );
                      }
                      return (
                        <a
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 font-semibold hover:underline"
                        >
                          {children}
                        </a>
                      );
                    },
                  },
                },
              }}
            >
              {content}
            </Markdown>
          </div>
        </article>

        {/* ------------------ DESKTOP SIDEBAR ------------------ */}
        <aside className="hidden md:flex flex-col sticky top-28 self-start h-[calc(100vh-120px)]">
          <div className="flex flex-col gap-6 overflow-y-auto pr-1">
            <TableOfContents />
          </div>
          <div className="mt-auto pt-4 border-t border-gray-200">
            <Sidebarad
              heading={bannerProps.heading}
              discount={bannerProps.discount}
              hostingName={bannerProps.question}
              affiliateLink={bannerProps.affiliateLink}
            />
          </div>
        </aside>
      </div>

      {/* ===== MOBILE: BANNER AT VERY BOTTOM ===== */}
      <div className="block md:hidden px-4 pb-8 max-w-6xl mx-auto">
        <Sidebarad
          heading={bannerProps.heading}
          discount={bannerProps.discount}
          hostingName={bannerProps.question}
          affiliateLink={bannerProps.affiliateLink}
        />
      </div>

      {/* FOOTER */}
      <Footer />
    </>
  );
}
