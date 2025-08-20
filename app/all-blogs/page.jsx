import BlogCard from '@/components/BlogCard'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { blogData } from '@/Data/BlogsData'
import React from 'react'

const page = () => {
    return (
        <>
            <div className="pt-10">
                <Header />
            </div>

            <div className="max-w-[75rem] px-4 py-10 my-10 sm:px-6 lg:px-8 mx-auto">
                {/* Grid */}
                <div className="grid lg:grid-cols-3 gap-6">
                    {blogData.map((blog, index) => (
                        <BlogCard blog={blog} key={index} />
                    ))}
                </div>
                {/* End Grid */}


            </div>
            <Footer />
        </>
    )
}

export default page