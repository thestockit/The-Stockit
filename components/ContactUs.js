
const ContactUs = () => {
    return (
        <section className="text-gray-600 body-font relative" id='contact'>
            <div className="container px-5 py-14 mx-auto flex sm:flex-nowrap flex-wrap">
                {/* map */}
                <div
                    className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative"

                >
                    <iframe
                        width="100%"
                        height="100%"
                        className="absolute inset-0"
                        frameBorder="0"
                        title="map"
                        marginHeight="0"
                        marginWidth="0"
                        scrolling="no"
                        src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=Asian%20Business%20Center,%20First%20Floor,%20Bahria%20Town%20Phase%207,%20Rawalpindi&ie=UTF8&t=&z=14&iwloc=B&output=embed"
                        style={{ filter: 'grayscale(1) contrast(1.2) opacity(0.4)' }}
                    ></iframe>
                    <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                        <div className="lg:w-1/2 px-6">
                            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
                            <p className="mt-1">Asian Business Center, First Floor, Bahria Town Phase 7, Rawalpindi</p>
                        </div>
                        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
                            <a className="text-red-500 leading-relaxed">info@thestockit.com</a>
                            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
                            <p className="leading-relaxed">+44 7360506217</p>
                        </div>
                    </div>
                </div>

                {/* form */}
                <div
                    className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"

                >
                    <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Contact Us</h2>
                    <p className="leading-relaxed mb-5 text-gray-600">
                        We’re here to help you elevate your digital presence. </p>
                    <div className="relative mb-4">
                        <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder='Enter your full name...'
                            className="w-full bg-white rounded border border-gray-300 focus:border-gradient-focus focus:ring-2 focus:ring-gradient-focus text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder='Enter your email address...'
                            className="w-full bg-white rounded border border-gray-300 focus:border-gradient-focus focus:ring-2 focus:ring-gradient-focus text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            placeholder='Share your thoughts or inquiries...'
                            className="w-full bg-white rounded border border-gray-300 focus:border-gradient-focus focus:ring-2 focus:ring-gradient-focus h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                        ></textarea>
                    </div>
                    <button className="bg-gradient-to-r from-indigo-400 to-pink-600 text-white border-0 py-2 px-6 focus:outline-none hover:bg-gradient-to-r hover:from-indigo-500 hover:to-pink-700 rounded text-lg">
                        Send Message
                    </button>
                    <p className="text-xs text-gray-500 mt-3">
                        We look forward to connecting with you and exploring how we can help you achieve your digital goals.
                    </p>
                </div>

            </div>
        </section>
    );
}

export default ContactUs;
