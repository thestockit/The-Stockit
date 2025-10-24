"use client";

import React, { useState } from "react";
import PortfolioGrid from "./PortfolioGrid";

const PortfolioFilter = () => {
    const [showCard, setShowCard] = useState("all");

    const handleProject = (category) => {
        setShowCard(category);
    };

    return (
        <>
            <div className="w-full flex justify-center mb-10">
                <div className="sm:bg-gray-100 sm:border-4 border-gradient-to-br from-indigo-400 to-pink-600 py-2 px-4 rounded-full">
                    <ul className="flex flex-wrap gap-3 space-x-1">
                        {["all", "wordpress", "shopify", "development"].map((category) => (
                            <li key={category}>
                                <button
                                    onClick={() => handleProject(category)}
                                    className={`py-2 px-5 font-semibold transition ${showCard === category
                                        ? " bg-gray-100 sm:border-0 border-2 border-opacity-80 border-y-indigo-400 border-x-pink-600 sm:bg-white text-black rounded-full"
                                        : "text-black  sm:border-0 border-2 rounded-full border-y-indigo-400 border-x-pink-600"
                                        }`}
                                >
                                    {category.charAt(0).toUpperCase() + category.slice(1)}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <PortfolioGrid showCard={showCard} />
        </>
    );
};

export default PortfolioFilter;
