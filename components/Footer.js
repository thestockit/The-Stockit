import Image from 'next/image';
import Link from 'next/link';
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import logo from '@/public/logo.2eb85d29b6c42e62c4ad.webp';

const footerLinks = [
  { label: 'About us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Blogs', href: '/blog' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Free Tools', href: '/free-tools' },
];

const legalLinks = [
  { label: 'Terms & Conditions', href: '/terms' },
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Disclaimer', href: '/disclaimer' },
];

const serviceLinks = [
  'Web Development',
  'UI/UX Design',
  'SEO Optimization',
  'Digital Marketing',
];

const socialLinks = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/TheStockit',
    Icon: Facebook,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/thestockit/',
    Icon: Instagram,
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/@TheStockit',
    Icon: Youtube,
  },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-gray-950">
      {/* Decorative background */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(99,102,241,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(99,102,241,0.05)_1px,transparent_1px)] bg-[size:56px_56px]" />
        <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-purple-600/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pt-16 sm:px-6 md:pt-20 lg:px-8">
        <div className="grid gap-12 pb-14 lg:grid-cols-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block" aria-label="The Stockit home">
              <Image
                src={logo}
                alt="The Stockit logo"
                className="h-12 w-auto"
                width={120}
                height={48}
                loading="lazy"
              />
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-gray-400">
              At The Stockit, we are dedicated to transforming your digital
              vision into reality. Our expert team ensures your business stands
              out in the digital landscape.
            </p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-gray-400">
              With a commitment to excellence and a passion for innovation, we
              craft tailored solutions that drive growth and success.
            </p>

            {/* Socials */}
            <div className="mt-7 flex items-center gap-3">
              {socialLinks.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-800 bg-gray-900 text-gray-400 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-400 hover:bg-gradient-to-br hover:from-blue-600 hover:to-purple-600 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                >
                  <Icon className="h-4 w-4" aria-hidden />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-8">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-white">
                Company
              </h3>
              <ul className="mt-4 space-y-3">
                {footerLinks.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="group inline-flex items-center gap-1 text-sm text-gray-400 transition-colors duration-200 hover:text-white"
                    >
                      {label}
                      <ArrowUpRight
                        className="h-3.5 w-3.5 text-blue-500 opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:opacity-100"
                        aria-hidden
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-white">
                Services
              </h3>
              <ul className="mt-4 space-y-3">
                {serviceLinks.map((service) => (
                  <li key={service}>
                    <Link
                      href="/services"
                      className="text-sm text-gray-400 transition-colors duration-200 hover:text-white"
                    >
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <h3 className="text-sm font-bold uppercase tracking-wider text-white">
                Contact
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-gray-400">
                <li>
                  <a
                    href="https://maps.google.com/?q=Asian+Business+Center,+Bahria+Town+Phase+7,+Rawalpindi,+Pakistan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-2.5 transition-colors duration-200 hover:text-white"
                  >
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-blue-500" aria-hidden />
                    Asian Business Center, First Floor, Bahria Town Phase 7, Rawalpindi, Pakistan
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@thestockit.com"
                    className="flex items-center gap-2.5 transition-colors duration-200 hover:text-white"
                  >
                    <Mail className="h-4 w-4 shrink-0 text-blue-500" aria-hidden />
                    info@thestockit.com
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+923245304585"
                    className="flex items-center gap-2.5 transition-colors duration-200 hover:text-white"
                  >
                    <Phone className="h-4 w-4 shrink-0 text-blue-500" aria-hidden />
                    +92 324 5304585
                  </a>
                </li>
              </ul>

              <h3 className="mt-8 text-sm font-bold uppercase tracking-wider text-white">
                Legal
              </h3>
              <ul className="mt-4 space-y-3">
                {legalLinks.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-sm text-gray-400 transition-colors duration-200 hover:text-white"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-gray-800/80 py-7 sm:flex-row">
          <p className="text-sm text-gray-500">
            © Copyright {year} The Stockit. All rights reserved.
          </p>
          <p className="text-sm text-gray-500">
            Designed &amp; built by{' '}
            <span className="font-semibold text-gray-300">The Stockit</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
