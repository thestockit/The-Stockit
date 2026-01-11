import React from "react";
import PortfolioCard from "./PortfolioCard";
import img01 from '@/public/project3.2c61cc145b5a6ef10d29.webp';
import img02 from '@/public/project5.ba8ef084db66f8e0fcaf.webp';
import img03 from '@/public/project2.218bb010c2a13fab6694.webp';
import img04 from '@/public/project6.66b1e7b5723a6ab7b40b.webp';
import img05 from '@/public/project4.642ebef5f7b52ecb6c36.webp';
import img06 from '@/public/img06.png';
import img007 from '@/public/img007.png';

import img07 from '@/public/web img.webp';
import img08 from '@/public/project img.webp';
import img09 from '@/public/sit img 09.webp';
import img10 from '@/public/site img 10.webp';
// import img11 from '@/public/site img 11.webp';
import img12 from '@/public/web img2.webp';
import img13 from '@/public/FNS (1).webp';
import img14 from '@/public/proj-new01.webp'
import img15 from '@/public/proj-new02.webp'
import img16 from '@/public/proj-new03.webp'
import img17 from '@/public/proj-new04.webp'
import img18 from '@/public/proj-new05.webp'
import img19 from '@/public/proj-new06.webp'
import img20 from '@/public/proj-new-07.webp'
import img21 from '@/public/proj-new08.webp'
import img22 from '@/public/cars.webp'







const portfolioItems = [
    { ImageHref: img02, title: "Cybernated Media", category: "wordpress", description: "Youtube Editing Service", link: "https://cybernatedmedia.com/" },
    { ImageHref: img07, title: "KMK Studio", category: "development", description: "Top-notch design solutions", link: "https://kmkstudio.uk/" },
    { ImageHref: img09, title: "Portfolio Website", category: "wordpress", description: "Animated website", link: "https://www.muhammadmushtaq.com/" },
    { ImageHref: img19, title: "Medely ", category: "development", description: "Online Restuarant", link: "https://medely.com/" },
    { ImageHref: img06, title: "Praktijk Groenendijk", category: "development", description: "Clinic in Belgium", link: "https://www.praktijkgroenendijk.be/" },
    { ImageHref: img13, title: "Fire n Steak House", category: "development", description: "Online Restuarant", link: "https://firensteakhouse.com/" },
    { ImageHref: img14, title: "La Ruby", category: "shopify", description: "Online Store", link: "https://www.laruby.store/" },
    { ImageHref: img15, title: "Krete", category: "shopify", description: "Online Store", link: "https://krete.club/" },
    { ImageHref: img16, title: "Mable clothing", category: "shopify", description: "Online Store", link: "https://mableclothing.com/" },
    { ImageHref: img17, title: "Urban Therapy", category: "shopify", description: "Online Store", link: "https://www.urbantherapy.store/" },
    { ImageHref: img18, title: "Handmade Mafia", category: "shopify", description: "Online Store", link: "https://handmademafia.pk/" },
    { ImageHref: img007, title: "Syeds Consultancy", category: "Development", description: "Visa Consultancy", link: "https:syedsconsultancy.com/" },

];

const PortfolioGrid = ({ showCard }) => {
    return (
        <div className="flex flex-wrap">
            {portfolioItems
                .filter(
                    (item) =>
                        showCard === "all" || item.category.toLowerCase() === showCard
                )
                .map((item, index) => (
                    <PortfolioCard key={index} {...item} />
                ))}

                
        </div>
    );
};

export default PortfolioGrid;
