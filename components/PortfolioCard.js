import Image from "next/image";
import Link from "next/link";
import React from "react";
import dynamic from "next/dynamic";
const AosAnimation = dynamic(() => import('@/components/AosAnimation'), { ssr: false });

const PortfolioCard = ({ ImageHref, category, title, link }) => {
    return (

        <Link href={link} target="_blank" className="w-full px-4 md:w-1/2 xl:w-1/3 mb-10 cursor-pointer" >
            <div className="group relative h-72 w-full rounded-xl ">
                <AosAnimation>
                    <div style={{
                        boxShadow: '0px 2px 70px 0px rgba(110, 130, 208, 0.18)',
                    }} data-aos="flip-right" className=" h-full relative w-full overflow-hidden rounded-xl border border-gray-200 transition-opacity duration-300 group-hover:opacity-100">
                        <Image
                            src={ImageHref}
                            alt={title}
                            fill
                            
                            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                    </div>
                </AosAnimation>
                <div className="absolute bg-white  bg-opacity-10 backdrop-blur-lg border border-white border-opacity-30 w-full rounded-xl bottom-0 pb-4 ps-4 -translate-y-1 translate-x-3">
                    <h1 className="text-2xl font-bold text-black my-2">{title}</h1>
                    <h2 className="text-md font-light bg-gradient-to-r px-6 capitalize from-purple-400 to-blue-500 rounded-full w-max text-gray-200">{category}</h2>
                </div>
            </div>
        </Link>
    );
};

export default PortfolioCard;
