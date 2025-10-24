import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PortfolioFilter from "@/components/PortfolioFilter";
import Link from "next/link";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";


const Portfolio = () => {
    return (
        <>
            <div className="pt-10">
                <Header />
            </div>
            <section className="pt-10 lg:pt-20 px-5 lg:px-24 pb-12 lg:pb-[30px]">
                <div className="container mx-auto">
                    <div className="text-center mb-[40px] max-w-[810px] mx-auto">
                        <h2 className="text-3xl sm:text-4xl md:text-[35px] font-bold bg-gradient-to-r from-indigo-400 to-pink-600 bg-clip-text text-transparent">
                            Create in minutes, launch sites in seconds
                        </h2>
                        <p className="text-body-color text-base">
                            We take pride in delivering high-quality, efficient solutions that meet your business needs and help you achieve your online goals swiftly.
                        </p>
                    </div>
                    <PortfolioFilter />

                    {/* <Link href="https://wa.me/447360506217" className="px-6 py-2 mx-auto w-max flex justify-center items-center bg-gradient-to-r from-purple-400 to-blue-500 text-white rounded-full hover:shadow-lg transition">
                    Lets Discuss <IoIosArrowRoundForward className="text-xl ms-2" />
                    </Link> */}

                </div>
            </section>
            <Footer />

        </>
    );
};

export default Portfolio;
