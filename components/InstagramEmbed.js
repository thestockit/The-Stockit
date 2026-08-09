import { Instagram, ArrowUpRight, Camera, Heart } from 'lucide-react';

const InstagramEmbed = () => {
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
        className="relative h-px bg-gradient-to-r from-transparent via-pink-200/80 to-transparent"
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

          {/* Static follow card (no third-party embed) */}
          <div className="flex-1">
            <div className="relative overflow-hidden rounded-2xl border border-gray-100 bg-gradient-to-br from-pink-50/60 via-white to-purple-50/40 p-8 text-center shadow-[0_4px_20px_-10px_rgba(79,70,229,0.18)]">
              <span
                className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500 via-rose-500 to-purple-500 text-white shadow-lg shadow-pink-500/25"
                aria-hidden
              >
                <Instagram className="h-8 w-8 fill-white" />
              </span>
              <p className="text-xl font-extrabold text-gray-900">@thestockit</p>
              <p className="mt-1 text-sm text-gray-500">
                Behind the scenes, case studies &amp; design inspiration
              </p>

              <div className="mt-6 flex items-center justify-center gap-6 text-sm text-gray-600">
                <span className="inline-flex items-center gap-2">
                  <Camera className="h-4 w-4 text-pink-600" aria-hidden />
                  Daily posts
                </span>
                <span className="inline-flex items-center gap-2">
                  <Heart className="h-4 w-4 text-pink-600" aria-hidden />
                  120+ brands
                </span>
              </div>

              <a
                href="https://www.instagram.com/thestockit/"
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-pink-500 via-rose-500 to-purple-500 px-6 py-3.5 text-sm font-bold text-white shadow-md shadow-pink-500/25 transition-all duration-300 hover:shadow-lg hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-500 focus-visible:ring-offset-2"
              >
                Follow us on Instagram
                <ArrowUpRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  aria-hidden
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstagramEmbed;
