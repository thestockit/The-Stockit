"use client"
import React from 'react'
import AosAnimation from './AosAnimation'


const ServicesCard = ({index, elm}) => {

    return (
        <AosAnimation>
        <div
            key={index}
            data-aos="zoom-in"
            className="rounded-md p-8 text-center transition-shadow duration-300 ease-in-out transform hover:shadow-2xl hover:scale-105"
            style={{
                boxShadow: '0px 2px 70px 0px rgba(110, 130, 208, 0.18)',
            }}
           
        >
            <div
                className="mx-auto flex h-12 w-12 items-center justify-center rounded-md  bg-pink-600"
                style={{
                    color: 'white',                                   
                }}
            >
                {elm.icon}
            </div>
            <h3 className="mt-6 text-gray-700">{elm.title}</h3>
            <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-500">
                {elm.description}
            </p>
        </div>
        </AosAnimation>
    )
}

export default ServicesCard
