'use client';

import { useEffect } from 'react';

const InstagramEmbed = () => {
    useEffect(() => {
        // Load Instagram embed script
        const script = document.createElement('script');
        script.src = 'https://www.instagram.com/embed.js';
        script.async = true;
        document.body.appendChild(script);

        // Clean up the script when the component is unmounted
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div className="container md:hidden mx-auto flex flex-col md:flex-row items-center p-3">

            <div className="relative mx-auto lg:mb-0 p-5 flex-1">
                <span className="text-[#ec4899] flex justify-center lg:justify-start font-medium uppercase tracking-wider">
                    Follow Us on Instagram
                </span>
                <h2 className="block w-full text-center mt-2 lg:text-start text-black font-bold text-lg sm:text-4xl">
                    Stay Connected with The Stockit
                </h2>
                <p className="mx-auto my-4 w-full text-center lg:text-start max-w-xl bg-transparent font-medium leading-relaxed tracking-wide text-gray-400">
                    Check out our latest updates and posts on our Instagram page. Stay connected and follow us for more amazing content!
                </p>
            </div>

            <div className="igwrapper flex-1 bg-white relative">
                <style jsx>{`
                    .igwrapper a {
                        color: rgba(0, 0, 0, 0);
                        position: absolute;
                        left: 0;
                        top: 0;
                        z-index: 0;
                    }
                `}</style>
                <a href="https://www.taxuni.com/oregon-state-income-tax/">
                    Oregon State Income Tax
                </a>
                <blockquote
                    className="instagram-media"
                    data-instgrm-permalink="https://www.instagram.com/The Stockit/"
                    data-instgrm-version="14"
                    style={{
                        background: '#FFF',
                        border: 0,
                        borderRadius: '3px',
                        boxShadow:
                            '0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)',
                        margin: '1px',
                        maxWidth: '658px',
                        minWidth: '326px',
                        padding: 0,
                        width: '99.375%',
                        width: 'calc(100% - 2px)',
                    }}
                ></blockquote>
            </div>
        </div>
    );
};

export default InstagramEmbed;
