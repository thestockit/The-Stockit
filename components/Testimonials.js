"use client"
import React, { useState } from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import TestimonialCard from "./TestimonialCard"
import { testimonials } from '@/Data/ClientData'

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
  })

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="relative flex flex-col items-center">
        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <span className="text-black my-3 flex items-center justify-center font-medium uppercase tracking-wider"> What Our Clients Say </span>
          <h2 className="block w-full text-black font-bold text-3xl sm:text-4xl"> Hear from Our Satisfied Clients </h2>
          <p className="mx-auto my-4 w-full max-w-xl bg-transparent text-center font-medium leading-relaxed tracking-wide text-gray-400"> Our clients feedback is a testament to our commitment to excellence. Read what they have to say about our dedicated service and impactful solutions. </p>
        </div>
        <div className="navigation-wrapper relative w-full">
          <div ref={sliderRef} className="keen-slider flex">
            {testimonials.map((elm, i) => (
              <TestimonialCard elm={elm} index={i} key={i} />
            ))}
          </div>
          {loaded && instanceRef.current && (
            <>
              <button
                className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gradient-to-r from-indigo-400 to-pink-600 p-2 rounded-full"
                onClick={() => instanceRef.current?.prev()}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  className="w-5 h-5 text-white"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gradient-to-r from-indigo-400 to-pink-600 p-2 rounded-full"
                onClick={() => instanceRef.current?.next()}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  className="w-5 h-5 text-white"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
              <div className="dots flex justify-center mt-4">
                {[
                  ...Array(instanceRef.current.track.details.slides.length).keys(),
                ].map((idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      instanceRef.current?.moveToIdx(idx)
                    }}
                    className={"dot mx-1 w-3 h-3 rounded-full" + (currentSlide === idx ? " bg-blue-500" : " bg-gray-300")}
                  ></button>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Testimonials
