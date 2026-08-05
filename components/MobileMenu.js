// components/MobileMenu.js
"use client";
import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { X, ArrowRight } from 'lucide-react';
import logo from '@/public/logo.2eb85d29b6c42e62c4ad.webp';

const mobileLinks = [
  { label: 'Home', href: '/' },
  { label: 'Web Hosting', href: '/hosting' },
  { label: 'Domains', href: '/domain' },
  { label: 'Courses', href: '/courses' },
  { label: 'Blog', href: '/blog' },
  { label: 'Projects', href: '/portfolio' },
];

const MobileMenu = ({ isOpen, toggleMenu }) => {
  const pathname = usePathname();
  const closeButtonRef = useRef(null);

  // Move focus into the menu when it opens
  useEffect(() => {
    if (isOpen) {
      closeButtonRef.current?.focus();
    }
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') toggleMenu();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [toggleMenu]);

  const isActive = (href) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <motion.div
      id="mobile-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-[60] flex flex-col overflow-y-auto bg-white/95 backdrop-blur-xl lg:hidden"
    >
      <div className="flex items-center justify-between px-4 py-3">
        <Link href="/" onClick={toggleMenu} aria-label="The Stockit — home">
          <Image
            src={logo}
            alt="The Stockit"
            width={120}
            height={48}
            className="h-9 w-auto"
          />
        </Link>
        <button
          ref={closeButtonRef}
          type="button"
          onClick={toggleMenu}
          aria-label="Close menu"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm transition-colors hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      <nav aria-label="Mobile navigation" className="flex-1 px-6 py-6">
        <ul className="space-y-1.5">
          {mobileLinks.map((link, i) => {
            const active = isActive(link.href);
            return (
              <motion.li
                key={link.href}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 * i, duration: 0.3 }}
              >
                <Link
                  href={link.href}
                  onClick={toggleMenu}
                  aria-current={active ? 'page' : undefined}
                  className={`block rounded-xl px-4 py-3 text-xl font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                    active
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md shadow-blue-600/20'
                      : 'text-gray-800 hover:bg-gray-100'
                  }`}
                >
                  {link.label}
                </Link>
              </motion.li>
            );
          })}
        </ul>
      </nav>

      <div className="border-t border-gray-100 px-6 py-6">
        <Link
          href="/contact"
          onClick={toggleMenu}
          className="group flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-5 py-3.5 text-base font-semibold text-white shadow-lg shadow-blue-600/25 transition-all hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
        >
          Let&apos;s Connect
          <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5" />
        </Link>
      </div>
    </motion.div>
  );
};

export default MobileMenu;
