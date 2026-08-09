"use client";
import { useState } from "react";

const ContactUs = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors((prev) => ({ ...prev, [e.target.name]: undefined }));
        setStatus("");
    };

    const validate = () => {
        const nextErrors = {};
        if (!formData.name.trim()) {
            nextErrors.name = "Please enter your name.";
        }
        if (!formData.email.trim()) {
            nextErrors.email = "Please enter your email address.";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            nextErrors.email = "Please enter a valid email address.";
        }
        if (!formData.message.trim()) {
            nextErrors.message = "Please enter a message.";
        }
        return nextErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const nextErrors = validate();
        setErrors(nextErrors);
        if (Object.keys(nextErrors).length > 0) {
            setStatus("");
            return;
        }

        const { name, email, message } = formData;
        const subject = encodeURIComponent(`Website inquiry from ${name}`);
        const body = encodeURIComponent(`${message}\n\n---\nName: ${name}\nEmail: ${email}`);
        window.location.href = `mailto:info@thestockit.com?subject=${subject}&body=${body}`;
        setStatus("Thank you! Your email app should open with your message ready to send.");
    };

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
                        className="absolute inset-0 border-0"
                        title="Map showing The Stockit office location in Bahria Town Phase 7, Rawalpindi"
                        src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=Asian%20Business%20Center,%20First%20Floor,%20Bahria%20Town%20Phase%207,%20Rawalpindi&ie=UTF8&t=&z=14&iwloc=B&output=embed"
                        style={{ filter: 'grayscale(1) contrast(1.2) opacity(0.9)' }}
                    ></iframe>
                    <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                        <div className="lg:w-1/2 px-6">
                            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
                            <p className="mt-1">Asian Business Center, First Floor, Bahria Town Phase 7, Rawalpindi</p>
                        </div>
                        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
                            <a href="mailto:info@thestockit.com" className="text-red-500 leading-relaxed hover:underline">info@thestockit.com</a>
                            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
                            <a href="tel:+923245304585" className="leading-relaxed hover:underline">+92 324 5304585</a>
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
                    <form onSubmit={handleSubmit} className="w-full" noValidate>
                        <div className="relative mb-4">
                            <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder='Enter your full name...'
                                required
                                aria-invalid={errors.name ? "true" : "false"}
                                aria-describedby={errors.name ? "name-error" : undefined}
                                className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            />
                            {errors.name && (
                                <p id="name-error" className="text-xs text-red-600 mt-1" role="alert">{errors.name}</p>
                            )}
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder='Enter your email address...'
                                required
                                aria-invalid={errors.email ? "true" : "false"}
                                aria-describedby={errors.email ? "email-error" : undefined}
                                className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            />
                            {errors.email && (
                                <p id="email-error" className="text-xs text-red-600 mt-1" role="alert">{errors.email}</p>
                            )}
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder='Share your thoughts or inquiries...'
                                required
                                aria-invalid={errors.message ? "true" : "false"}
                                aria-describedby={errors.message ? "message-error" : undefined}
                                className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                            ></textarea>
                            {errors.message && (
                                <p id="message-error" className="text-xs text-red-600 mt-1" role="alert">{errors.message}</p>
                            )}
                        </div>
                        <button
                            type="submit"
                            className="bg-gradient-to-r from-indigo-400 to-pink-600 text-white border-0 py-2 px-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-pink-700 rounded text-lg"
                        >
                            Send Message
                        </button>
                        {status && (
                            <p className="text-sm text-green-600 mt-3" role="status">
                                {status}
                            </p>
                        )}
                    </form>
                    <p className="text-xs text-gray-500 mt-3">
                        We look forward to connecting with you and exploring how we can help you achieve your digital goals.
                    </p>
                </div>

            </div>
        </section>
    );
}

export default ContactUs;
