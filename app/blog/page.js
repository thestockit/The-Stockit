// app/blog/page.js
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default async function BlogPage() {
  const postsDirectory = path.join(process.cwd(), "posts");

  // If posts directory missing — show friendly message
  try {
    await fs.promises.access(postsDirectory);
  } catch (err) {
    return (
      <>
        <div className="pt-10">
          <Header />
        </div>
        <div className="max-w-6xl mx-auto px-4 py-10 min-h-[60vh]">
          <h1 className="text-3xl font-bold mb-6">Blog Posts</h1>
          <p className="text-gray-600">
            No blog posts found. Please create posts in the <code className="bg-gray-100 px-2 py-1 rounded">/posts</code> directory.
          </p>
        </div>
        <Footer />
      </>
    );
  }

  const filenames = await fs.promises.readdir(postsDirectory);

  // keep only .md or .mdx files
  const postFiles = filenames.filter((f) => /\.(md|mdx)$/i.test(f));

  const posts = await Promise.all(
    postFiles.map(async (filename) => {
      const filePath = path.join(postsDirectory, filename);
      const fileContents = await fs.promises.readFile(filePath, "utf8");
      const { data } = matter(fileContents);

      return {
        slug: filename.replace(/\.(md|mdx)$/, ""),
        title: data.title || "Untitled Post",
        excerpt: data.excerpt || "No description available.",
        coverImage: data.coverImage || "/datacenter.avif",
        date: data.date || null,
        author: data.author || "Admin",
      };
    })
  );

  return (
    <>
      {/* HEADER */}
      <div className="pt-10">
        <Header />
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-6xl mx-auto px-4 py-8 min-h-[60vh]">
        {/* Breadcrumb Navigation */}
        <nav className="text-sm mb-6 text-gray-500">
          <Link href="/" className="hover:underline">Home</Link> /{" "}
          <span className="text-gray-700">Blog</span>
        </nav>

        <h1 className="text-3xl font-bold mb-8">Blog Posts</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <div
              key={post.slug}
              className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative w-full h-48">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  className="object-cover"
                  priority={false}
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2 line-clamp-2 hover:text-blue-600 transition-colors">
                  {post.title}
                </h2>
                
                <div className="text-gray-500 text-sm mb-3">
                  By {post.author}
                  {post.date ? ` | ${post.date}` : ""}
                </div>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors duration-200 font-semibold"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FOOTER */}
      <Footer />
    </>
  );
}