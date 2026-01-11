import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogSlider from "@/components/BlogSlider";

const SearchIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
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
          coverImage: data.coverImage || "/datacenter.avif", // Ensure this matches your md frontmatter
        };
      })
    );
    // Sort by date newest first
    posts.sort((a, b) => new Date(b.date) - new Date(a.date));
  } catch (err) {
    console.error("No posts found.");
  }

  // Take first 3 for the slider, others for the grid
  const featuredPosts = posts.slice(0, 3);
  const regularPosts = posts.slice(3);

  return (
    <div className="bg-white min-h-screen text-slate-900" style={{ fontFamily: "Suisse, Arial, sans-serif" }}>
      <Header />

      <main className="max-w-7xl mx-auto px-6 py-12">
        
        {/* --- HERO SECTION --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20 items-stretch">
          
          {/* Hero Left: Articles & Subscription */}
          <div className="relative border border-slate-200 rounded-[2rem] p-12 flex flex-col justify-between bg-slate-50 shadow-sm overflow-hidden">
            <div className="absolute top-0 left-0 w-48 h-3 bg-white border-b border-slate-200" style={{ clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0% 100%)' }}></div>
            
            <div className="pt-4">
              <h1 className="text-7xl font-black leading-[0.9] mb-10 tracking-tighter text-slate-900">
                USEFUL<br />ARTICLES
              </h1>
              <div className="flex items-center gap-4 mb-12">
                <div className="w-12 h-12 rounded-full bg-slate-200 overflow-hidden relative border border-slate-300 shadow-inner">
                   <Image src="/avatar.webp" fill alt="avatar" className="object-cover" />
                </div>
                <p className="text-slate-500 text-sm max-w-[240px] font-medium leading-snug">
                  Stay in the loop and keep up with all our news and updates!
                </p>
              </div>
            </div>
            
            <form className="relative flex items-center bg-white rounded-full p-1.5 border border-slate-200 shadow-sm">
              <input 
                type="email" 
                placeholder="Join us, share your email" 
                className="bg-transparent text-slate-900 px-6 py-3 flex-grow outline-none text-sm placeholder:text-slate-400"
              />
              <button className="bg-indigo-600 text-white px-10 py-3 rounded-full font-bold text-xs uppercase hover:bg-indigo-700 transition-all">
                Subscribe
              </button>
            </form>
          </div>

          {/* Hero Right: NEW Featured Slider Card */}
          <div className="h-[500px] lg:h-auto">
             {featuredPosts.length > 0 ? (
                <FeaturedSlider featuredPosts={featuredPosts} />
             ) : (
                <div className="bg-slate-100 rounded-[2.5rem] h-full" />
             )}
          </div>
        </div>

        {/* --- CATEGORY BUTTONS --- */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-20">
          {["ALL POSTS", "INSIGHTS", "DEVELOPMENT", "DESIGN"].map((cat, i) => (
            <button key={cat} className={`px-8 py-3 rounded-full text-[11px] font-bold border transition-all ${i === 0 ? 'bg-slate-900 text-white border-slate-900' : 'bg-white border-slate-200 text-slate-500 hover:border-slate-900 hover:text-slate-900'}`}>
              {cat}
            </button>
          ))}
          <div className="flex items-center gap-3 px-6 py-3 rounded-full border border-slate-200 bg-slate-50 text-slate-400 text-[11px] font-bold cursor-pointer hover:bg-slate-100 transition-colors uppercase">
            Search <SearchIcon />
          </div>
        </div>

        {/* --- ARTICLE GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
          {regularPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
              <div className="relative mb-8">
                {/* FIXED: Image now appears inside the Folder Card */}
                <div 
                  className="rounded-[2.2rem] aspect-[16/10] relative shadow-lg overflow-hidden transition-transform duration-500 group-hover:-translate-y-2 border border-slate-100"
                  style={{ 
                    clipPath: 'polygon(0 15%, 40% 15%, 45% 0, 100% 0, 100% 100%, 0 100%)' 
                  }}
                >
                  <Image 
                    src={post.coverImage} 
                    alt={post.title} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Glass overlay effect */}
                  <div className="absolute inset-0 bg-indigo-900/10 group-hover:bg-transparent transition-colors duration-500" />
                  
                  {/* Decorative Glass Badge */}
                  <div className="absolute bottom-6 left-6 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl">
                    <span className="text-[9px] text-white font-black tracking-tighter uppercase">STOCKIT ARCHIVE</span>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest mb-4">
                <span className="text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded">{post.category}</span>
                <span className="text-slate-400">{post.date}</span>
              </div>
              <h3 className="text-2xl font-bold leading-tight group-hover:text-indigo-600 transition-colors line-clamp-2">
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