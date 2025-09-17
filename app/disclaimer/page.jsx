import Footer from '@/components/Footer';
import Header from '@/components/Header';
import React from 'react';

const Disclaimer = () => {
    return (
        <div className=" min-h-screen">
            <div className="pt-10">
                <Header />
            </div>

            <div className="relative px-6 mt-10 mb-10 md:mt-20 mx-auto max-w-4xl bg-white">
                <h2 className="text-black font-bold text-4xl sm:text-5xl mb-6">
                    Disclaimer
                </h2>
                
                <hr className="my-4 border-gray-300" />

                <p className="text-gray-600 leading-relaxed mb-4">
                    At <strong>The Stockit</strong>, we are committed to providing high-quality web development, SEO, and digital marketing services designed to enhance your online presence and drive growth. While we strive to deliver optimal results, we acknowledge that individual experiences and outcomes may vary based on numerous factors, including but not limited to:
                </p>

                <ul className="list-disc list-inside text-gray-600 mb-4">
                    <li>Unique business goals and strategies.</li>
                    <li>Market conditions and competition.</li>
                    <li>Implementation of our recommendations.</li>
                    <li>Client involvement and resources allocated to the projects.</li>
                </ul>

                <p className="text-gray-600 leading-relaxed mb-4">
                    Therefore, while we make every effort to ensure the accuracy of the information provided and the effectiveness of our services, <strong>The Stockit</strong> cannot guarantee specific results. We encourage our clients to engage in thorough research and due diligence prior to making decisions based on the information and recommendations we provide.
                </p>

                <hr className="my-4 border-gray-300" />

                <h3 className="text-gray-700 font-semibold text-2xl mt-4 mb-2">
                    Limitation of Liability
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                    The Stockit shall not be liable for any direct, indirect, incidental, or consequential damages that may arise from the use of our services, or reliance on the information provided on our website or through our communications. By utilizing our services, you acknowledge that you have read, understood, and agree to this disclaimer.
                </p>

                <h3 className="text-gray-700 font-semibold text-2xl mt-4 mb-2">
                    Contact Us
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                    If you have any questions or concerns regarding our services or this disclaimer, please feel free to contact us for further clarification.
                </p>
            </div>

            <Footer />
        </div>
    );
}

export default Disclaimer;
