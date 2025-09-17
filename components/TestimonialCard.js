import Image from 'next/image';
import React from 'react';

const TestimonialCard = ({ elm, index }) => {
    return (
        <div className="relative keen-slider__slide w-full p-4 flex-col rounded-lg bg-white my-6  hover:scale-105">
            {/* Layer 1 */}
            <div className="absolute -inset-1 bg-indigo-200 transform -rotate-6 rounded-lg transition-transform duration-500 hover:rotate-0 hover:scale-110"></div>
            {/* Layer 2 */}
            <div className="absolute -inset-1 bg-pink-600 transform rotate-6 rounded-lg opacity-75 transition-transform duration-500 hover:rotate-0 hover:scale-110"></div>
            <div className="relative z-10 flex flex-col md:px-32 md:py-24 p-4 m-0 md:m-4 bg-white rounded-lg shadow-lg">
                <div className="flex items-center gap-4 text-slate-800">
                    <Image
                        src={elm.img}
                        alt={elm.name}
                        width={58}
                        height={58}
                        loading='lazy'
                        className="relative inline-block h-[58px] w-[58px] rounded-full object-cover object-center"
                    />
                    <div className="flex w-full flex-col">
                        <div className="flex items-center justify-between">
                            <h5 className="text-xl font-semibold text-slate-800">{elm.name}</h5>
                            <div className="flex items-center gap-0.5">
                                {Array(5).fill().map((_, idx) => (
                                    <svg
                                        key={idx}
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="w-5 h-5 text-yellow-600"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                            clipRule="evenodd"
                                        ></path>
                                    </svg>
                                ))}
                            </div>
                        </div>
                        <p className="text-xs uppercase font-bold text-slate-500 mt-0.5">{elm.title}</p>
                    </div>
                </div>
                <div className="mt-6">
                    <p className="text-base text-slate-600 font-light leading-normal">
                        {elm.text}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;
