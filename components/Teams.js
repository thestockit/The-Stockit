"use client";
import { useState } from 'react';
import { teamMembers } from '@/Data/TeamData';
import TeamCard from './TeamCard';

const Teams = () => {
    // State to manage displayed team members
    const [showAll, setShowAll] = useState(false);

    // Toggle function for the "See All" button
    const toggleShowAll = () => {
        setShowAll(!showAll);
    };

    return (
        <div className="mb-16 relative overflow-hidden" id='about'>
            <div className="relative z-10 container flex justify-center mx-auto pt-16">
                <div>
                    <h1 className="xl:text-4xl text-3xl text-gray-800 font-extrabold pb-6 mx-auto">
                        Meet Our Team
                    </h1>
                </div>
            </div>
            <div className="w-full bg-gray-100 px-10 py-10 relative z-10">
                <div className="container mx-auto">
                    <div
                        role="list"
                        aria-label="Behind the scenes People"
                        className="flex flex-wrap justify-center"
                    >
                        {/* Cards */}
                        {(showAll ? teamMembers : teamMembers.slice(0, 6 )).map((member, index) => (
                            <TeamCard key={index} member={member} index={index} />
                        ))}
                    </div>
                    {/* "See All" button */}
                    <div className="mt-12 text-center">
                        <button
                            onClick={toggleShowAll}
                            className="inline-block px-10 py-1 text-md font-semibold border-2 rounded-full bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-pink-600 transition-transform transform hover:scale-105 hover:border-indigo-400 hover:border-2"
                        >
                            {showAll ? 'Show Less' : 'See All'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Teams;
