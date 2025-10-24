import React from 'react'

const HeroVideo = () => {
    return (
        <div className="absolute lg:right-6 transform bottom-[-30%] translate-y-[37%] lg:bottom-0 lg:translate-y-[70%] md:hidden lg:block p-4">
            <div className="relative max-w-lg aspect-w-16 aspect-h-9">
                {/* Layer 1 */}
                <div className="absolute inset-0 bg-indigo-200 transform -rotate-6 rounded-lg transition-transform duration-500 hover:rotate-0 hover:scale-110 z-10"></div>
                {/* Layer 2 */}
                <div className="absolute inset-0 bg-pink-600 transform rotate-6 rounded-lg opacity-75 transition-transform duration-500 hover:rotate-0 hover:scale-110 z-20"></div>
                <div className="relative bg-white rounded-lg overflow-hidden z-30">

                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/Ruk2W42u3JE"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-auto"
                    ></iframe>

                </div>
            </div>
        </div>
    )
}

export default HeroVideo