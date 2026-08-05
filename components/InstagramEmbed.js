'use client';

import { useEffect, useRef } from 'react';
import { Instagram, ArrowUpRight } from 'lucide-react';

const InstagramEmbed = () => {
  const embedRef = useRef(null);

  useEffect(() => {
    let script = document.getElementById('instagram-embed-js');
    if (!script) {
      script = document.createElement('script');
      script.id = 'instagram-embed-js';
      script.src = 'https://www.instagram.com/embed.js';
      script.async = true;
      document.body.appendChild(script);
    }

    // Re-process embeds if Instagram provides the global helper
    if (window?.instgrm && embedRef.current) {
      try {
        window.instgrm.Embeds.process();
      } catch {
        // ignore — embed renders via the plugin on script load
      }
    }
  }, []);

  return (
    <section id="instagram" className="relative overflow-hidden bg-white">
      {/* Decorative background */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(99,102,241,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(99,102,241,0.04)_1px,transparent_1px)] bg-[size:56px_56px]" />
        <div className="absolute -left-24 top-1/4 h-96 w-96 rounded-full bg-pink-500/10 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-purple-500/10 blur-3xl" />
      </div>

      {/* Hairline divider */}
      <div
        aria-hidden
        className="relative h-px bg-gradient-to-r from-transparent via-blue-200/80 to-transparent"
      />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8 lg:py-28">
        <div className="flex flex-col items-center gap-10 md:flex-row md:gap-16">
          {/* Text */}
          <div className="flex-1">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-pink-100 bg-pink-50/80 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-pink-700">
              <span className="relative flex h-2 w-2" aria-hidden>
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-pink-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-pink-600" />
              </span>
              Follow us
            </span>

            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
              Stay connected
              <span className="block bg-gradient-to-r from-pink-500 via-rose-500 to-purple-500 bg-clip-text text-transparent">
                on Instagram
              </span>
            </h2>

            <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-600 md:text-lg">
              Check out our latest updates and posts on our Instagram page. Stay
              connected and follow us for more amazing content!
            </p>

            <a
              href="https://www.instagram.com/thestockit/"
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-7 inline-flex items-center gap-2 rounded-full border border-pink-200 bg-white px-6 py-3 text-sm font-semibold text-pink-700 transition-all duration-300 hover:border-pink-400 hover:bg-pink-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-500 focus-visible:ring-offset-2"
            >
              <Instagram className="h-4 w-4" aria-hidden />
              Visit our page
              <ArrowUpRight
                className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden
              />
            </a>
          </div>

          {/* Instagram embed */}
          <div ref={embedRef} className="flex-1">
            <div className="relative overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-[0_4px_20px_-10px_rgba(79,70,229,0.18)]">
              <blockquote
                className="instagram-media"
                data-instgrm-permalink="https://www.instagram.com/thestockit/"
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
                  width: 'calc(100% - 2px)',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstagramEmbed;
