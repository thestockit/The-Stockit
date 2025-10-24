import Image from "next/image";
import Link from "next/link";
import logo from '@/public/logo.2eb85d29b6c42e62c4ad.webp'

const Footer = () => {
    return (
        <footer className="relative bg-gradient-to-r from-indigo-400 to-pink-600 overflow-hidden">
            <div className="absolute  z-10 overflow-hidden">
                <svg
                    className="absolute top-0 left-0 w-full h-full pointer-events-none"
                    viewBox="0 0 1440 320"
                    preserveAspectRatio="none"
                >
                    <path
                        fill="white"
                        d="M0,256L1440,160L1440,320L0,320Z"
                        opacity="0.1"
                    />
                </svg>
            </div>
            <div className="px-4 z-40 pt-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6">
                    <div className="md:max-w-md lg:col-span-2">
                        <div className="text-2xl font-bold">
                            <Link href="/">
                                <Image
                                    src={logo}
                                    alt="Agency Logo"
                                    className="h-12 w-auto cursor-pointer"
                                    width={100}
                                    height={100}
                                    loading='lazy'
                                />
                            </Link>
                        </div>
                        <div className="mt-4 lg:max-w-sm">
                            <p className="text-sm text-white">
                                At The Stockit, we are dedicated to transforming your digital vision into reality. Our expert team ensures your business stands out in the digital landscape.
                            </p>
                            <p className="mt-4 text-sm text-white">
                                With a commitment to excellence and a passion for innovation, we craft tailored solutions that drive growth and success.
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4">
                        <div>
                            <p className="font-semibold tracking-wide text-white">
                                Useful Links
                            </p>
                            <ul className="mt-2 space-y-2">

                                <li>
                                    <Link href="/about" className="transition-colors hover:underline cursor-pointer duration-300 text-white hover:text-teal-accent-400">
                                        About us
                                    </Link>
                                </li>
                                <li>
                                    <Link href="services" className="transition-colors hover:underline cursor-pointer duration-300 text-white hover:text-teal-accent-400">
                                        Services
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/blog" className="transition-colors hover:underline cursor-pointer duration-300 text-white hover:text-teal-accent-400">
                                        Blogs
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/free-tools" className="transition-colors hover:underline cursor-pointer duration-300 text-white hover:text-teal-accent-400">
                                        Free Tools
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/disclaimer" className="transition-colors hover:underline cursor-pointer duration-300 text-white hover:text-teal-accent-400">
                                        Disclaimer
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/privacy" className="transition-colors hover:underline cursor-pointer duration-300 text-white hover:text-teal-accent-400">
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/terms" className="transition-colors hover:underline cursor-pointer duration-300 text-white hover:text-teal-accent-400">
                                        Terms & Conditions
                                    </Link>
                                </li>
                            </ul>
                        </div>


                        <div>
                            <p className="font-semibold tracking-wide text-white ">
                                Services
                            </p>
                            <ul className="mt-2 space-y-2">
                                <li>
                                    <p

                                        className="transition-colors duration-300 text-white hover:text-teal-accent-400"
                                    >
                                        Web Development
                                    </p>
                                </li>
                                <li>
                                    <p

                                        className="transition-colors duration-300 text-white  hover:text-teal-accent-400"
                                    >
                                        SEO Optimization
                                    </p>
                                </li>
                                <li>
                                    <p

                                        className="transition-colors duration-300 text-white hover:text-teal-accent-400"
                                    >
                                        Digital Marketing
                                    </p>
                                </li>
                                <li>
                                    <p

                                        className="transition-colors duration-300 text-white hover:text-teal-accent-400"
                                    >
                                        Video Editing
                                    </p>
                                </li>
                            </ul>
                        </div>


                        <div className="col-span-2">
                            <p className="font-semibold tracking-wide text-white">
                                Contact Us
                            </p>
                            <ul className="mt-2 space-y-2">
                                <li className="transition-colors duration-300 text-white">
                                    10 Haslingden Drive, BD95HR, West Yorkshire, UK
                                </li>
                                <li className="transition-colors duration-300 text-white">
                                    info@thestockit.com
                                </li>
                                <li className="transition-colors duration-300 text-white">
                                    +44 7360 506217
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
                <div className="flex flex-col justify-between pt-5 pb-10 border-t border-deep-purple-accent-200 sm:flex-row">
                    <p className="text-sm text-gray-100">
                        © Copyright 2024 The Stockit. All rights reserved.
                    </p>

                    <div className="flex items-center mt-4 space-x-4 sm:mt-0">
                        <Link
                            href="https://web.facebook.com/The Stockit"
                            className="transition-colors duration-300 text-white hover:text-teal-accent-400"
                        >
                            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                                <path d="M22.675 0H1.325C0.593 0 0 0.593 0 1.325v21.351C0 23.407 0.593 24 1.325 24h11.489V14.708h-3.13v-3.631h3.13V8.045c0-3.1 1.893-4.787 4.66-4.787 1.325 0 2.463 0.099 2.794 0.143v3.241l-1.918 0.001c-1.504 0-1.795 0.716-1.795 1.763v2.313h3.587l-0.467 3.631h-3.12V24h6.117C23.407 24 24 23.407 24 22.676V1.325C24 0.593 23.407 0 22.675 0z" />
                            </svg>
                        </Link>

                        <Link
                            href="https://www.instagram.com/The Stockit/"
                            className="transition-colors duration-300 text-white hover:text-teal-accent-400"
                        >
                            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                                <path d="M12,2.2c3.2,0,3.6,0,4.8,0.1c1.2,0.1,1.9,0.2,2.4,0.4c0.6,0.2,1.1,0.5,1.6,1c0.5,0.5,0.8,1,1,1.6c0.2,0.5,0.4,1.2,0.4,2.4
                c0.1,1.2,0.1,1.6,0.1,4.8s0,3.6-0.1,4.8c-0.1,1.2-0.2,1.9-0.4,2.4c-0.2,0.6-0.5,1.1-1,1.6c-0.5,0.5-1,0.8-1.6,1
                c-0.5,0.2-1.2,0.4-2.4,0.4c-1.2,0.1-1.6,0.1-4.8,0.1s-3.6,0-4.8-0.1c-1.2-0.1-1.9-0.2-2.4-0.4c-0.6-0.2-1.1-0.5-1.6-1
                c-0.5-0.5-0.8-1-1-1.6c-0.2-0.5-0.4-1.2-0.4-2.4c-0.1-1.2-0.1-1.6-0.1-4.8s0-3.6,0.1-4.8c0.1-1.2,0.2-1.9,0.4-2.4
                c0.2-0.6,0.5-1.1,1-1.6c0.5-0.5,1-0.8,1.6-1c0.5-0.2,1.2-0.4,2.4-0.4C8.4,2.2,8.8,2.2,12,2.2 M12,0.3c-3.3,0-3.7,0-4.9,0.1
                c-1.2,0.1-2.1,0.2-2.8,0.4c-0.9,0.2-1.7,0.6-2.4,1.3c-0.7,0.7-1.1,1.5-1.3,2.4c-0.2,0.7-0.3,1.6-0.4,2.8C0.3,9.5,0.3,9.9,0.3,13.2
                s0,3.7,0.1,4.9c0.1,1.2,0.2,2.1,0.4,2.8c0.2,0.9,0.6,1.7,1.3,2.4c0.7,0.7,1.5,1.1,2.4,1.3c0.7,0.2,1.6,0.3,2.8,0.4
                c1.2,0.1,1.6,0.1,4.9,0.1s3.7,0,4.9-0.1c1.2-0.1,2.1-0.2,2.8-0.4c0.9-0.2,1.7-0.6,2.4-1.3c0.7-0.7,1.1-1.5,1.3-2.4
                c0.2-0.7,0.3-1.6,0.4-2.8c0.1-1.2,0.1-1.6,0.1-4.9s0-3.7-0.1-4.9c-0.1-1.2-0.2-2.1-0.4-2.8c-0.2-0.9-0.6-1.7-1.3-2.4
                c-0.7-0.7-1.5-1.1-2.4-1.3c-0.7-0.2-1.6-0.3-2.8-0.4C15.7,0.3,15.3,0.3,12,0.3L12,0.3z"/>
                                <path d="M12,5.8c-3.4,0-6.2,2.8-6.2,6.2c0,3.4,2.8,6.2,6.2,6.2c3.4,0,6.2-2.8,6.2-6.2C18.2,8.6,15.4,5.8,12,5.8L12,5.8z
                M12,16.3c-2.4,0-4.3-1.9-4.3-4.3c0-2.4,1.9-4.3,4.3-4.3c2.4,0,4.3,1.9,4.3,4.3C16.3,14.4,14.4,16.3,12,16.3L12,16.3z"/>
                                <circle cx="18.4" cy="5.6" r="1.4" />
                            </svg>
                        </Link>

                        <Link
                            href="https://www.youtube.com/@The Stockit"
                            className="transition-colors duration-300 text-white hover:text-teal-accent-400"
                        >
                            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                                <path d="M23.498,6.186c-0.275-1.033-1.078-1.84-2.114-2.128C19.552,3.504,12,3.504,12,3.504s-7.552,0-9.384,0.554 c-1.037,0.288-1.839,1.096-2.114,2.128C0,8.023,0,12,0,12s0,3.977,0.502,5.814c0.275,1.033,1.078,1.84,2.114,2.128 C4.448,20.496,12,20.496,12,20.496s7.552,0,9.384-0.554c1.037-0.288,1.839-1.096,2.114-2.128C24,15.977,24,12,24,12 S24,8.023,23.498,6.186z M9.751,15.205V8.795L15.545,12L9.751,15.205z" />
                            </svg>
                        </Link>

                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
