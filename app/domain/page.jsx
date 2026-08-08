import React from 'react';
import Card from '@/constant/Card';
import img01 from '@/public/Untitled-design-1024x1024.webp';
import img02 from '@/public/Untitled-design-2-1024x1024.webp';
import img03 from '@/public/Untitled-design-1-1024x1024.webp';
import img04 from '@/public/hostinger.webp';

import Image from 'next/image';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Link from 'next/link';
import { SITE } from '@/constant/site';
import { createMetadata } from '@/Data/Seo/seo-utils';

export const metadata = createMetadata({
  title: 'Domain Registration & Deals | The Stockit',
  description:
    'Register your .pk, .com or .net domain in Pakistan with The Stockit. Compare domain deals, promo codes and secure your online brand with local support and PKR-friendly guidance.',
  keywords:
    'domain registration Pakistan, buy domain Islamabad, .pk domain, domain promo codes, cheapest domain Pakistan, The Stockit domain',
  url: `${SITE.baseUrl}/domain`,
  image: '/og/og-default.jpg',
  type: 'website',
});

const Domain = () => {
    const cardsData = [
        { image: img01, text: "Save Big With Promo Code Given Below", buttonText: "Save15", link: 'https://domain.mno8.net/Nker32' },
        { image: img02, text: "Save Big With Promo Code Given Below", buttonText: "Nameboy", link: 'https://namecheap.pxf.io/EKoANe' },
        { image: img03, text: "Save Big With Promo Code Given Below", buttonText: "NEWCOM598", link: 'https://name.sjv.io/LX5Q3Y' },
        { image: img04, text: "Save Big With Promo Code Given Below", buttonText: "hostinger", link: 'https://hostinger.sjv.io/rnV05j' },
    
    ];

    return (
        <div >
            <Header />
            <div className="relative px-6 mt-10 mb-10 md:mt-20 mx-auto max-w-5xl text-center">
                <h2 className="block w-full text-black font-bold text-3xl sm:text-4xl">
                    Our Domain Partners
                </h2>
                <p className="mx-auto my-4 w-full max-w-xl bg-transparent text-center font-medium leading-relaxed tracking-wide text-gray-400">
                    At The Stockit, find your dream domain with the most affordable prices with our partner domain registrars.
                </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 p-4 mb-10">
                {cardsData.map((card, index) => (
                    <div key={index} className="w-full sm:w-1/2 lg:w-1/4 p-2">
                        <Card link={card.link} key={index}>
                            <Image
                                src={card.image}
                                alt="Domain Partner"
                                fill
                                className="w-full h-full object-contain"
                                style={{ transformStyle: 'preserve-3d' }}
                            />

                        </Card>
                        <div className="text-center mt-4">
                            <strong className="block mb-2">{card.text}</strong>
                            <Link href={card.link} target='_blank' className="px-4 py-1 w-full bg-gradient-to-r from-indigo-400 to-pink-600 text-white font-bold rounded-full">
                                {card.buttonText}
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    );
};

export default Domain;
