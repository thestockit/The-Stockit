import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

const TeamCard = ({ member, index }) => {

    const cardVariants = {
        initial: {
            opacity: 0,
            y: 100,
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {              
                bounce: 0.3,
                duration: member.duration,
            },
        },
    };

    return (
        <motion.div
            key={index}
            variants={cardVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: false }}
            transition={{ delay: index * 0.2 }}
            className="xl:w-1/5 sm:w-1/2 md:w-1/3 p-2 mb-6 md:mb-7 "
        >
            <div className="rounded mt-16 shadow-md px-4  bg-white"  >
            <div className="lg:min-h-[300px] ">
                <div className="relative">
                    <div className="h-32 w-32 absolute -top-16 left-1/2 transform -translate-x-1/2">
                        <Image
                            src={member.imageUrl}
                            alt={`Display Picture of ${member.name}`}
                            fill
                            className="rounded-full object-cover h-full w-full shadow-md"
                            loading='lazy'
                        />
                    </div>
                </div>
                <div className="px-[0.40rem] pt-16 pb-5  ">
                    <h1 className="font-bold text-2xl text-center mt-2 mb-1">{member.name}</h1>
                    <p className="text-gray-800 text-sm text-center">{member.role}</p>
                    <p className="text-center text-gray-600 text-base pt-3 font-normal">
                        {member.description}
                    </p>
                    <div className="w-full flex items-center gap-3  justify-center  pt-5">
                        {member.socialLinks.github && (
                            <a href={member.socialLinks.github} >
                                <div aria-label="Github" role="img">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="#db2777"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="feather feather-github"
                                    >
                                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                    </svg>
                                </div>
                            </a>
                        )}
                        {member.socialLinks.instagram && (
                            <a href={member.socialLinks.instagram} >
                                <div aria-label="Instagram" role="img">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="#db2777"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="feather feather-instagram"
                                    >
                                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                        <line x1="17.5" y1="6.5" x2="17.5" y2="6.5"></line>
                                    </svg>
                                </div>
                            </a>
                        )}
                        {member.socialLinks.linkedin && (
                            <a href={member.socialLinks.linkedin} >
                                <div aria-label="LinkedIn" role="img">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill='#db2777' color='#db2777' x="0px" y="0px" width="30" height="30" viewBox="0 0 24 24">
                                        <path d="M 5.75 3 C 4.2400226 3 3 4.2400226 3 5.75 L 3 18.25 C 3 19.759977 4.2400226 21 5.75 21 L 18.25 21 C 19.759977 21 21 19.759977 21 18.25 L 21 5.75 C 21 4.2400226 19.759977 3 18.25 3 L 5.75 3 z M 5.75 4.5 L 18.25 4.5 C 18.950023 4.5 19.5 5.0499774 19.5 5.75 L 19.5 18.25 C 19.5 18.950023 18.950023 19.5 18.25 19.5 L 5.75 19.5 C 5.0499774 19.5 4.5 18.950023 4.5 18.25 L 4.5 5.75 C 4.5 5.0499774 5.0499774 4.5 5.75 4.5 z M 8.1855469 6.7851562 C 7.4445469 6.7851563 7 7.2293594 7 7.8183594 C 7 8.4113594 7.444375 8.8574219 8.109375 8.8574219 C 8.850375 8.8574219 9.2910156 8.4113594 9.2910156 7.8183594 C 9.2910156 7.2303594 8.8505469 6.7851562 8.1855469 6.7851562 z M 7.0625 9.9628906 L 7.0625 16 L 9.2363281 16 L 9.2363281 9.9628906 L 7.0625 9.9628906 z M 11.033203 9.9628906 L 11.033203 16 L 13.207031 16 L 13.207031 12.697266 C 13.207031 11.718266 13.908141 11.574219 14.119141 11.574219 C 14.330141 11.574219 14.892578 11.785266 14.892578 12.697266 L 14.892578 16 L 17 16 L 17 12.697266 C 17 10.806266 16.154516 9.9628906 15.103516 9.9628906 C 14.052516 9.9628906 13.490031 10.312641 13.207031 10.806641 L 13.207031 9.9628906 L 11.033203 9.9628906 z"></path>
                                    </svg>
                                </div>
                            </a>
                        )}
                        {member.socialLinks.facebook && (
                            <a href={member.socialLinks.facebook} >
                                <div aria-label="Facebook" role="img">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="#db2777"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="feather feather-facebook"
                                    >
                                        <path d="M18 2H6a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h6v-7h-2v-3h2v-2a3 3 0 0 1 3-3h2v3h-2v3h2l-1 3h-3v7h6a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4z"></path>
                                    </svg>
                                </div>
                            </a>
                        )}
                    </div>
                </div>
                </div>
            </div>
        </motion.div>
    )
}

export default TeamCard
