"use client";

import { useEffect, useState } from 'react';
import { Facebook as FacebookIcon, ArrowUpRight } from 'lucide-react';

const Facebook = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section id="facebook" className="relative overflow-hidden bg-white">
      {/* Decorative background */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(99,102,241,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(99,102,241,0.04)_1px,transparent_1px)] bg-[size:56px_56px]" />
        <div className="absolute -right-24 top-1/4 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-pink-500/10 blur-3xl" />
      </div>

      {/* Hairline divider */}
      <div
        aria-hidden
        className="relative h-px bg-gradient-to-r from-transparent via-blue-200/80 to-transparent"
      />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8 lg:py-28">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Text */}
          <div>
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50/80 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-700">
              <span className="relative flex h-2 w-2" aria-hidden>
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-600" />
              </span>
              Follow us
            </span>

            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
              Stay connected
              <span className="block bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                on Facebook
              </span>
            </h2>

            <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-600 md:text-lg">
              Join us on Facebook to get the latest updates, news, and insights
              from The Stockit. We share valuable content on web development,
              SEO, and digital marketing that can help you take your projects to
              the next level.
            </p>

            <a
              href="https://www.facebook.com/TheStockit"
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-7 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-6 py-3 text-sm font-semibold text-blue-700 transition-all duration-300 hover:border-blue-400 hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            >
              <FacebookIcon className="h-4 w-4" aria-hidden />
              Visit our page
              <ArrowUpRight
                className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden
              />
            </a>
          </div>

          {/* Facebook embed */}
          <div className="relative flex justify-center">
            {isClient && (
              <iframe
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FTheStockit&tabs=timeline&width=500&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                title="The Stockit Facebook page"
                loading="lazy"
                className="min-h-[500px] w-full max-w-[500px] rounded-2xl border border-gray-100 shadow-[0_4px_20px_-10px_rgba(79,70,229,0.18)]"
                style={{ border: 'none' }}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facebook;
