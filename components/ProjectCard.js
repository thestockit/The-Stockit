import React from 'react'
import Image from "next/image";

const ProjectCard = ({ image, index }) => {
    return (
        <div className="slide cursor-pointer" key={index}>
        <div className="relative group">
            <Image alt={image.title} src={image.src} className='img' loading='lazy' placeholder='blur' />
            <div className="overlay">
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out flex flex-col justify-end p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-white">{image.title}</h3>
                    <p className="text-sm text-gray-300">{image.description}</p>
                    <a
                        href={image.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-block px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-indigo-400 to-pink-600 rounded-lg"
                    >
                        View Live
                    </a>
                </div>
            </div>
        </div>
    </div>
    )
}

export default ProjectCard
