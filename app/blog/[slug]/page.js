// app/blog/[slug]/page.js
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Markdown from "markdown-to-jsx";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TableOfContents from "@/components/Toc";
import Sidebarad from "@/components/Sidebarad"; // ✅ Affiliate banner

export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), "posts");
  try {
    await fs.promises.access(postsDirectory);
  } catch {
    return [];
  }

  const filenames = await fs.promises.readdir(postsDirectory);
  return filenames
    .filter((f) => /\.(md|mdx)$/i.test(f))
    .map((filename) => ({ slug: filename.replace(/\.(md|mdx)$/, "") }));
}

export default async function BlogPost({ params }) {
  const postsDirectory = path.join(process.cwd(), "posts");
  const filePath = path.join(postsDirectory, `${params.slug}.md`);

  const exists = await fs.promises
    .access(filePath)
    .then(() => true)
    .catch(() => false);

  if (!exists) {
    return (
      <>
        <div className="pt-20">
          <Header />
        </div>
        <div className="container mx-auto px-4 py-10 min-h-[60vh]">
          <h1>Post not found</h1>
          <Link href="/blog">Back to Blog</Link>
        </div>
        <Footer />
      </>
    );
  }

  const fileContents = await fs.promises.readFile(filePath, "utf8");
  const { data: frontmatter, content } = matter(fileContents);

  // ✅ Dynamic banner props from frontmatter
  const bannerProps = {
    heading: frontmatter.bannerHeading || "Exclusive for readers",
    question: frontmatter.bannerQuestion || "Want to try this hosting?",
    discount: frontmatter.bannerDiscount || 50,
    affiliateLink: frontmatter.bannerLink || "#",
    expiryDate: frontmatter.bannerExpiry || null,
  };

  return (
    <>
      {/* HEADER */}
      <div className="pt-10">
        <Header />
      </div>

      {/* MAIN CONTAINER */}
      <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-[1fr_300px] gap-8">
        
        {/* ------------------ MAIN BLOG CONTENT ------------------ */}
        <article className="bg-white shadow-lg rounded-2xl p-6">
          
          {/* Breadcrumb Navigation */}
          <nav className="text-sm mb-4 text-gray-500">
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
                className="object-cover rounded-xl"
                priority
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
          <div className="block md:hidden mb-8 bg-gray-50 rounded-xl p-5 border-l-4 border-blue-500">
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
          <div className="flex flex-col gap-6 overflow-y-auto">
            <TableOfContents />
          </div>
          <div className="mt-auto pt-4 border-t border-gray-200">
            <Sidebarad {...bannerProps} />
          </div>
        </aside>
      </div>

      {/* ===== MOBILE: BANNER AT VERY BOTTOM ===== */}
      <div className="block md:hidden px-4 pb-8 max-w-6xl mx-auto">
        <Sidebarad {...bannerProps} />
      </div>

      {/* FOOTER */}
      <Footer />
    </>
  );
}