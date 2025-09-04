"use client";
import { useEffect, useState } from "react";

export default function Sidebarad({
  heading = "Exclusive For Readers",
  discount = 70,
  hostingName = "MissHosting",
  affiliateLink = "#",
}) {
  return (
    <div className="w-full">
      {/* Gradient Border Wrapper */}
      <div className="p-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl">
        
        {/* Inner White Card */}
        <div className="bg-white rounded-2xl p-6 flex flex-col items-center text-center space-y-5">
          
          {/* Animated Heading */}
          <h2 className="text-xl font-bold tracking-wide text-gray-900 uppercase animate-pulse">
            {heading}
          </h2>

          {/* Main Offer */}
          <div className="text-3xl md:text-4xl font-extrabold leading-snug">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-700">
              Get {discount}% Off
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-600">
              {hostingName}
            </span>
          </div>

          {/* CTA Button */}
          <a
            href={affiliateLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-gradient-to-r from-blue-600 to-purple-700 text-white font-bold px-6 py-3 rounded-full hover:opacity-90 transition-all shadow-lg"
          >
            Claim Deal
          </a>
        </div>
      </div>
    </div>
  );
}