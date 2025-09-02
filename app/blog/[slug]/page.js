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

const Banner = ({ src, link, width, height }) => (
  <div className="my-8 flex justify-center">
    <a href={link} target="_blank" rel="noopener noreferrer">
      <Image
        src={src}
        alt="Affiliate Banner"
        width={parseInt(width) || 300}
        height={parseInt(height) || 250}
        className="rounded-lg shadow-md hover:scale-105 transition-transform"
      />
    </a>
  </div>
);

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

  return (
    <>
      <div className="pt-10">
        <Header />
      </div>

      {/* Container */}
      <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Main Blog Content */}
        <article className="md:col-span-2 bg-white shadow-lg rounded-2xl p-6">
          
          {/* Breadcrumbs */}
          <nav className="text-sm mb-4 text-gray-500">
            <Link href="/" className="hover:underline">Home</Link> /{" "}
            <Link href="/blog" className="hover:underline">Blog</Link> /{" "}
            <span className="text-gray-700">{frontmatter.title}</span>
          </nav>

          {/* Cover Image */}
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

          {/* // CHANGED: Added mobile-only TOC above blog content */}

          {/* Title */}
          <h1 className="text-3xl font-bold mb-4">{frontmatter.title}</h1>

          {/* Meta Info */}
          <div className="text-gray-500 text-sm mb-6">
            By {frontmatter.author || "Admin"}
            {frontmatter.date ? ` | ${frontmatter.date}` : ""}
          </div>
          {/* ✅ Mobile TOC inserted here */}
          <div className="block md:hidden mb-6">
            <TableOfContents />
          </div>
          {/* Blog Content */}
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
                  Banner: { component: Banner },
                },
              }}
            >
              {content}
            </Markdown>
          </div>
        </article>

        {/* Desktop TOC */}
        <aside className="hidden md:block space-y-6 md:sticky md:top-24 self-start">
          <TableOfContents />
        </aside>
      </div>

      <Footer />
    </>
  );
}
