import React from "react";
import Link from "next/link";

const MarketingText = () => {
  return (
    <>
      <div className='w-full '>
        <h1 className=' text-black font-bold text-3xl sm:text-4xl'>
          Discover Our Exceptional Digital Marketing {' '}
          <span className='text-pink-600'>Services</span>
        </h1>

        <div className='leading-relaxed mt-5'>
          The Stockit is a leading digital marketing agency that has established successful partnerships with numerous prominent brands. Our expertise in generating sales and building brand identity has made us the go-to agency for industry leaders. Notably, esteemed brands like Fiaka Karim have entrusted us with their digital marketing needs, leveraging our innovative strategies to elevate their online presence and drive business growth.
        </div>
        <div className='leading-relaxed mt-5'>
          Our comprehensive digital marketing services are tailored to meet the unique needs of each client, ensuring maximum ROI and brand visibility. By collaborating with The Stockit, businesses can:
          <ul className='list-none text-gray-700 mt-3'>
            <li className='flex items-center'>
              <svg
                className='w-6 h-6 text-indigo-400 mr-2'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M5 13l4 4L19 7'
                ></path>
              </svg>
              Boost online sales and revenue
            </li>
            <li className='flex items-center mt-2'>
              <svg
                className='w-6 h-6 text-indigo-400 mr-2'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M5 13l4 4L19 7'
                ></path>
              </svg>
              Enhance brand awareness and credibility
            </li>
            <li className='flex items-center mt-2'>
            <svg
                className='w-6 h-6 text-indigo-400 mr-2'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M5 13l4 4L19 7'
                ></path>
              </svg>
              Outpace competition with solutions
            </li>
          </ul>
        </div>
        <div className="mt-8">
          <Link href="#contact" className="px-6 py-2 bg-gradient-to-r from-purple-400 to-blue-500 text-white rounded-full hover:shadow-lg transition">
            Lets Connect
          </Link>
        </div>
      </div>
    </>
  );
};

export default MarketingText;
