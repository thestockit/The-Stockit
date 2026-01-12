import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FeaturedSlider from "@/components/BlogSlider";

const SearchIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.3-4.3" />
  </svg>
);

export default async function BlogPage() {
  const postsDirectory = path.join(process.cwd(), "posts");
  let posts = [];

  try {
    const filenames = await fs.promises.readdir(postsDirectory);
    const postFiles = filenames.filter((f) => /\.(md|mdx)$/i.test(f));

    posts = await Promise.all(
      postFiles.map(async (filename) => {
        const filePath = path.join(postsDirectory, filename);
        const fileContents = await fs.promises.readFile(filePath, "utf8");
        const { data } = matter(fileContents);

        return {
          slug: filename.replace(/\.(md|mdx)$/, ""),
          title: data.title || "Untitled Post",
          excerpt: data.excerpt || "No description available.",
          category: data.category || "DESIGN",
          date: data.date || "2026-01-07",
          coverImage: data.coverImage || "/datacenter.avif",
        };
      })
    );

    posts.sort((a, b) => new Date(b.date) - new Date(a.date));
  } catch (err) {
    console.error("No posts found.", err);
  }

  const featuredPosts = posts.slice(0, 3);
  const regularPosts = posts.slice(3);

  return (
    <div className="bg-white min-h-screen text-slate-900">
      <Header />

      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* HERO */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20 items-stretch">
          {/* LEFT */}
          <div className="relative border border-slate-200 rounded-[2rem] p-12 flex flex-col justify-between bg-slate-50 shadow-sm">
            <h1 className="text-7xl font-black leading-[0.9] mb-10 tracking-tighter">
              USEFUL<br />ARTICLES
            </h1>

            <form className="flex items-center bg-white rounded-full p-1.5 border border-slate-200">
              <input
                type="email"
                placeholder="Join us, share your email"
                className="bg-transparent px-6 py-3 flex-grow outline-none text-sm"
              />
              <button className="bg-indigo-600 text-white px-10 py-3 rounded-full font-bold text-xs uppercase">
                Subscribe
              </button>
            </form>
          </div>

          {/* RIGHT */}
          <div className="h-[500px] lg:h-auto">
            {featuredPosts.length > 0 ? (
              <FeaturedSlider featuredPosts={featuredPosts} />
            ) : (
              <div className="bg-slate-100 rounded-[2.5rem] h-full" />
            )}
          </div>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
          {regularPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
              <div className="relative mb-8">
                <div className="rounded-[2.2rem] aspect-[16/10] relative overflow-hidden shadow-lg">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              </div>

              <div className="flex justify-between text-[10px] font-black uppercase mb-4">
                <span className="text-indigo-600">{post.category}</span>
                <span className="text-slate-400">{post.date}</span>
              </div>

              <h3 className="text-2xl font-bold leading-tight group-hover:text-indigo-600">
                {post.title}
              </h3>
            </Link>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
