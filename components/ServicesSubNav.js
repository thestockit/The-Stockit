"use client";

import { useEffect, useState } from 'react';

const items = [
  { id: 'design', label: 'Design' },
  { id: 'development', label: 'Development' },
  { id: 'digital-marketing', label: 'Marketing & SEO' },
  { id: 'ai-services', label: 'AI' },
  { id: 'video-content', label: 'Video & Content' },
  { id: 'process', label: 'Process' },
  { id: 'faq', label: 'FAQ' },
];

const ServicesSubNav = () => {
  const [active, setActive] = useState('design');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-140px 0px -65% 0px', threshold: 0 }
    );

    items.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="On this page"
      className="sticky top-16 z-40 border-b border-gray-100 bg-white/85 backdrop-blur-xl"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ul className="flex gap-2 overflow-x-auto py-3 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {items.map((item) => {
            const isActive = active === item.id;
            return (
              <li key={item.id} className="shrink-0">
                <a
                  href={`#${item.id}`}
                  aria-current={isActive ? 'true' : undefined}
                  className={`inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 ${
                    isActive
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md shadow-blue-600/25'
                      : 'bg-gray-100/80 text-gray-700 hover:bg-gray-200/80 hover:text-gray-900'
                  }`}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default ServicesSubNav;
