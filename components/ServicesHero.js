import Link from 'next/link';
import { ArrowRight, ChevronRight, MessageCircle } from 'lucide-react';
import { whatsappLink, defaultWhatsAppMessage } from '@/constant/site';

const stats = [
  { value: '100+', label: 'Pakistani clients' },
  { value: 'Since 2020', label: 'Serving Islamabad & Rawalpindi' },
  { value: '9+', label: 'Cities served in Pakistan' },
  { value: '24/7', label: 'WhatsApp support' },
];

const ServicesHero = () => {
  return (
    <section className="relative overflow-hidden bg-white">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(99,102,241,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(99,102,241,0.04)_1px,transparent_1px)] bg-[size:56px_56px]" />
        <div className="absolute -left-24 top-1/4 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute -right-24 top-1/4 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl" />
        <div className="absolute -bottom-32 left-1/3 h-80 w-80 rounded-full bg-pink-500/10 blur-3xl" />
      </div>

      <div
        aria-hidden
        className="relative h-px bg-gradient-to-r from-transparent via-blue-200/80 to-transparent"
      />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8 lg:py-28">
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center gap-2 text-sm text-gray-500">
            <li>
              <Link
                href="/"
                className="transition-colors hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                Home
              </Link>
            </li>
            <li aria-hidden>
              <ChevronRight className="h-4 w-4 text-gray-300" />
            </li>
            <li aria-current="page" className="font-medium text-gray-800">
              Services
            </li>
          </ol>
        </nav>

        <div className="max-w-3xl">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50/80 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-700">
            <span className="relative flex h-2 w-2" aria-hidden>
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-600" />
            </span>
            Our services
          </span>

          <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Web design, development, AI &amp;{' '}
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              digital marketing for Pakistan
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-gray-600 md:text-lg">
            The Stockit is a full-service digital agency based in Islamabad &
            Rawalpindi, serving 100+ Pakistani businesses. From UI/UX design and web
            development to SEO and video editing, we plan, design, build, and grow
            digital products that convert — with PKR pricing, Urdu support, and
            local payments.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-7 py-3.5 text-sm font-semibold text-white shadow-md shadow-blue-600/25 transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/30 hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            >
              Start your project
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
            <a
              href={whatsappLink(defaultWhatsAppMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-green-500 px-7 py-3.5 text-sm font-semibold text-white shadow-md shadow-green-600/25 transition-all duration-300 hover:bg-green-400"
            >
              <MessageCircle className="h-4 w-4" aria-hidden />
              WhatsApp Us Now
            </a>
            <a
              href="#design"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-200 bg-white px-7 py-3.5 text-sm font-semibold text-gray-800 transition-all duration-300 hover:border-blue-300 hover:bg-blue-50/60 hover:text-blue-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            >
              Explore services
            </a>
          </div>
        </div>

        <dl className="mt-14 grid grid-cols-2 gap-6 border-t border-gray-100 pt-10 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label}>
              <dt className="sr-only">{stat.label}</dt>
              <dd className="text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
                <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  {stat.value}
                </span>
              </dd>
              <dd className="mt-1.5 text-sm font-medium text-gray-500">
                {stat.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default ServicesHero;
