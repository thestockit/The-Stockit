import React from 'react';

const CoursePolicy = () => {
    return (
        <div className=" lg:pt-14 ">
            <div className="mx-auto max-w-7xl pt-16 sm:pt-10">
                <div className="space-y-8 lg:space-y-0 lg:grid lg:grid-cols-12 lg:gap-8">
                    <div className="px-6 sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:flex lg:items-center lg:text-left">
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <span className="rounded-full uppercase bg-pink-500 px-3 py-0.5 text-sm font-semibold leading-5 text-white">
                                        Course Policy
                                    </span>
                                    <h1 className="text-4xl font-bold tracking-tight text-black sm:text-5xl md:text-6xl">
                                        <span className="sm:text-6xl"></span> The Stockit 
                                        <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-600"> offers
                                        </span>
                                        <br />
                                        expertly designed courses.
                                    </h1>
                                </div>

                                <p className="text-gray-700">
                                    At The Stockit, we are committed to your success. Our courses are designed to provide you with the skills and knowledge needed to excel in your career.
                                    If you do not achieve your desired results and are unable to earn within one month of completing the course, we will refund all your course fees, no questions asked.
                                    Our goal is to ensure that you have the best possible learning experience and the support you need to succeed.
                                </p>

                            </div>                      


                        </div>
                    </div>

                    <div className="flex items-center w-full col-span-6">
                        <div className="px-6 h-96 lg:h-100% w-full max-w-2xl col-span-6 flex items-center mx-auto">
                            <div style={{ width: '100%', height: '100%' }}>
                                <div style={{ width: '100%', height: '100%' }}>
                                    <iframe frameBorder="0" allowFullScreen="1"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        width="100%" height="100%"
                                        src="https://www.youtube.com/embed/W1RwZzMvtOU"
                                        id="widget2">
                                    </iframe>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default CoursePolicy;
