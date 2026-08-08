"use client";

import Link from 'next/link';
import { Zap, MessageCircle, MapPin, Users } from 'lucide-react';
import { serviceCategory } from '@/Data/Locations/_shared';
import { whatsappLink, defaultWhatsAppMessage } from '@/constant/site';

const defaultTrustLogos = [
  { label: 'Gulberg Homes', className: 'font-bold tracking-tight' },
  { label: 'Lahore Threads', className: 'font-serif font-bold italic' },
  { label: 'KarachiKart', className: 'font-black lowercase tracking-tighter' },
  { label: 'Sialkot Sports', className: 'font-semibold italic' },
  { label: 'Bahria Realty', className: 'font-bold' },
  { label: 'Clifton Mart', className: 'font-extrabold tracking-widest uppercase' },
];

const LocationHero = ({ city, trustLogos = defaultTrustLogos }) => {
  return (
    <section className="w-full bg-white py-8 md:py-12 px-4 md:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="relative bg-gradient-to-br from-indigo-50 via-white to-pink-50 rounded-[40px] overflow-hidden p-8 md:p-12 border border-gray-200 shadow-sm">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-12">
            <div className="lg:w-3/5">
              <div className="h-full flex flex-col justify-center min-h-[320px] md:min-h-[380px]">
                <span className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-blue-100 bg-blue-50/80 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-700">
                  <MapPin className="h-3.5 w-3.5" aria-hidden />
                  {city.province} · {city.tagline}
                </span>

                <h1 className="text-3xl md:text-5xl lg:text-[3.4rem] font-bold text-gray-900 leading-[1.1] tracking-tight">
                  Best {serviceCategory} Services in{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-600">
                    {city.name}
                  </span>
                </h1>

                <p className="mt-6 max-w-2xl text-base leading-relaxed text-gray-600 md:text-lg">
                  {city.intro}
                </p>
              </div>
            </div>

            <div className="lg:w-2/5 flex justify-center lg:justify-end">
              <div className="w-full max-w-[340px] rounded-3xl overflow-hidden shadow-lg border border-gray-200 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 p-8 text-white">
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 opacity-20"
                  style={{
                    backgroundImage:
                      'linear-gradient(to right, rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.3) 1px, transparent 1px)',
                    backgroundSize: '32px 32px',
                  }}
                />
                <div className="relative">
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/15 backdrop-blur-sm">
                      <Users className="h-5 w-5" aria-hidden />
                    </span>
                    <p className="text-sm font-medium leading-tight">
                      100+ Pakistani businesses
                      <br />
                      already work with us
                    </p>
                  </div>
                  <div className="mt-5 flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/15 backdrop-blur-sm">
                      <MapPin className="h-5 w-5" aria-hidden />
                    </span>
                    <p className="text-sm font-medium leading-tight">
                      PSEB registered & SECP
                      <br />
                      incorporated company
                    </p>
                  </div>
                  <div className="mt-6 border-t border-white/20 pt-6">
                    <p className="text-sm leading-relaxed text-white/85">
                      Local meetings, PKR pricing, JazzCash & Easypaisa payments, and support in
                      Urdu + English — built for how {city.name} businesses work.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-sm font-medium text-gray-700 max-w-md">
              Get a free, no-obligation consultation for your {city.name} business — we reply
              within hours.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/contact"
                className="flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-pink-600 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95 whitespace-nowrap text-sm md:text-base"
              >
                <Zap size={18} className="text-white" />
                Free Consultation
              </Link>
              <a
                href={whatsappLink(defaultWhatsAppMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-green-500 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95 whitespace-nowrap text-sm md:text-base"
              >
                <MessageCircle size={18} className="text-white" />
                WhatsApp Us Now
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 md:mt-12 px-4">
          <p className="text-center text-gray-600 text-sm mb-8 flex items-center justify-center gap-4 before:h-px before:w-12 before:bg-gray-300 after:h-px after:w-12 after:bg-gray-300 uppercase tracking-widest font-medium">
            Trusted by 100+ Pakistani businesses in Islamabad, Rawalpindi, Lahore & Karachi
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 items-center">
            {trustLogos.map(({ label, className }) => (
              <div
                key={label}
                className={`flex justify-center text-gray-800 text-base md:text-lg p-3 md:p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300 ${className}`}
              >
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationHero;
