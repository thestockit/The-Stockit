"use client";

import React, { useEffect, useState } from 'react';

const Facebook = () => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        <div className="max-w-5xl mb-10 mx-auto lg:mt-10 hidden md:block ">
            <div className="grid grid-cols-1 lg:grid-cols-2 ">
                {/* Left Column: Text */}
                <div>
                    <div className="relative mx-auto mb-7 lg:mb-0 p-5">
                        <span className="text-[#ec4899] my-3 flex justify-center lg:justify-start font-medium uppercase tracking-wider">
                            Follow Us on Facebook
                        </span>
                        <h2 className="block w-full text-center lg:text-start text-black font-bold text-3xl sm:text-4xl">
                            Stay Connected with The Stockit
                        </h2>
                        <p className="mx-auto my-4 w-full text-center lg:text-start max-w-xl bg-transparent font-medium leading-relaxed tracking-wide text-gray-400">
                            Join us on Facebook to get the latest updates, news, and insights from The Stockit. We share valuable content on web development, SEO, and digital marketing that can help you take your projects to the next level.
                        </p>
                    </div>
                </div>

                {/* Right Column: Facebook Iframe */}
                <div className="relative mx-auto  ">
                    {isClient && (
                        <iframe
                            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FTheStockit&tabs=timeline&width=1000&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                            
                            className='mx-auto min-h-[500px] lg:w-[500px] lg:h-[500px]'
                            style={{ border: 'none', }}
                            scrolling="no"
                            frameBorder="0"
                            allowFullScreen={true}
                            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                        ></iframe>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Facebook;
