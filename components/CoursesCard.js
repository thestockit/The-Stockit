
import React from 'react';


const courses = [
    {
        id: 1,
        title: "Web Designing",
        description: "Learn to create stunning websites with modern design practices.",
        svg: (
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white">
                <path d="M3 12L21 12M12 3L12 21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        bgColor: 'bg-teal-400'
    },
    {
        id: 2,
        title: "Graphics Designing",
        description: "Master the art of creating visually engaging graphics.",
        svg: (
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white">
                <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2" />
                <circle cx="12" cy="12" r="4" fill="white" />
            </svg>
        ),
        bgColor: 'bg-rose-500'
    },
    {
        id: 3,
        title: "SEO",
        description: "Optimize your site to rank higher in search engine results.",
        svg: (
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white">
                <path d="M5 3L19 21M19 3L5 21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        bgColor: 'bg-sky-500'
    },
    {
        id: 4,
        title: "Blogging",
        description: "Create and manage a successful blog with engaging content.",
        svg: (
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white">
                <path d="M5 3H19V21H5V3Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        bgColor: 'bg-yellow-500'
    }
];

const CoursesCard = () => (
    <div className=" max-w-7xl  mx-auto pt-12 p-4">
        <div className="relative px-6 mt-10 mb-10 md:mt-0 mx-auto max-w-5xl text-center">
        <h1 className='text-black font-bold text-3xl sm:text-4xl'>
                    Explore Our <span className='text-pink-600'>Courses</span>
                </h1>
            <p className="mx-auto my-4 w-full max-w-xl bg-transparent text-center font-medium leading-relaxed tracking-wide text-gray-400">
                We offer a range of courses designed to empower you with the skills and knowledge needed to excel in the digital world.
            </p>
        </div>

        <div className="grid gap-14 lg:grid-cols-4 md:grid-cols-3 md:gap-5">
            {courses.map(course => (
                <div key={course.id} className={`rounded-xl bg-white py-6 px-3 text-center `} style={{
                    boxShadow: '0px 2px 70px 0px rgba(110, 130, 208, 0.18)',
                }}>
                    <div className={`mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full shadow-xl ${course.bgColor}`}>
                        {course.svg}
                    </div>
                    <h1 className="text-darken mb-3 text-xl font-medium lg:px-8">{course.title}</h1>
                    <p className="px-4 text-gray-500">{course.description}</p>
                </div>
            ))}
        </div>
    </div>
);

export default CoursesCard;
