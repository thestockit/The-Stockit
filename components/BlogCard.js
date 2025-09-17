import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import AosAnimation from './AosAnimation'


const BlogCard = ({ blog }) => {
    return (
        <AosAnimation>
            <div
                className="group relative block rounded-xl focus:outline-none" data-aos="zoom-in-right"  data-aos-duration={blog.id * 20}
            >
                <Link key={blog.id} href={blog.link}
                    rel="noopener noreferrer" >
                    <div className="shrink-0 relative rounded-xl overflow-hidden w-full h-[350px] before:absolute before:inset-x-0 before:z-[1] before:size-full before:bg-gradient-to-t before:from-gray-900/70">
                        <Image
                            className="absolute top-0 start-0 object-cover w-full h-full"
                            src={blog.imageUrl}
                            alt="Blog Image"
                            fill
                            priority
                        />
                    </div>
                    <div className="absolute top-0 inset-x-0 z-10">
                        <div className="p-4 flex flex-col h-full sm:p-6">
                            {/* Avatar */}
                            <div className="flex items-center">
                                <div className="shrink-0">
                                    <Image
                                        className="border-2 border-white rounded-full"
                                        src={blog.avatarUrl}
                                        alt="Avatar"
                                        width={46}
                                        height={46}
                                    />
                                </div>
                                <div className="ms-2.5 sm:ms-4">
                                    <h4 className="font-semibold text-white">{blog.author}</h4>
                                    <p className="text-xs text-white/80">{blog.date}</p>
                                </div>
                            </div>
                            {/* End Avatar */}
                        </div>
                    </div>
                    <div className="absolute bottom-0 inset-x-0 z-10">
                        <div className="flex flex-col h-full p-4 sm:p-6">
                            <h3 className="text-lg sm:text-xl font-semibold text-white group-hover:text-white/80 group-focus:text-white/80">
                                {blog.title}
                            </h3>
                            <p className="mt-2 text-white/80">
                                {blog.description}
                            </p>
                        </div>
                    </div>
                </Link>
            </div >
        </AosAnimation>
    )
}

export default BlogCard
