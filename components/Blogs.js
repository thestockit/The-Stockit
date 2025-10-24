import { blogData } from '@/Data/BlogsData';
import BlogCard from './BlogCard';
import Link from 'next/link';


const Blogs = () => {
    return (
        <section className="pt-14" id="blogs">
            <h2 className="block w-full text-center font-bold text-3xl sm:text-4xl text-gray-700">
                Latest Blog Highlights
            </h2>
            <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 mx-auto">
                {/* Grid */}
                <div className="grid lg:grid-cols-3 gap-6">
                    {blogData.slice(0, 3).map((blog, index) => (
                        <BlogCard blog={blog} key={index} />
                    ))}
                </div>
                {/* End Grid */}

                {/* Show More Button */}
                <div className="mt-12 text-center">
                    <Link
                        href="/all-blogs"
                        rel="noopener noreferrer"
                        className="inline-block px-10 py-1 text-md font-semibold border-2 rounded-full bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-pink-600 transition-transform transform hover:scale-105 hover:border-indigo-400 hover:border-2"
                    >
                        See All
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Blogs;
