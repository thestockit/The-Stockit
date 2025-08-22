import React from "react";
import Link from "next/link";

const CourseText = () => {
    const whatsappNumber = '447360506217'; 
        const message = encodeURIComponent('Hello, I would like to know more about your courses.'); 
    return (
        <>
        
            <div className='w-full'>       

                <div className="">
                    <h4 className="text-xl font-bold text-black">Account Details For Registration</h4>
                    <ul className="mt-2 text-gray-700">
                        <li><strong>Account Name:</strong> The Stockit</li>

                        <li><strong>Bank Name:</strong> Bankislami Pakistan Ltd</li>
                        <li><strong>SWIFT CODE:</strong> BKIPPKKA</li>
                        <li><strong>Branch Code:</strong> 3128</li>
                        <li><strong>Branch Name:</strong> Bahria Town CBD PH8 RWP</li>
                        <li><strong>Account No:</strong> 312800027550001</li>
                        <li><strong>IBAN:</strong> PK38BKIP0312800027550001</li>
                    </ul>
                    <p className="mt-4 text-gray-700">
                        To confirm your <strong>payment</strong>, send the payment screenshot on whatsApp to <strong>+44 7360 506217</strong>.
                    </p>
                </div>

                <div className='mt-5 text-gray-700'>
                    <strong>Course Fees:</strong>
                    <ul className='list-none mt-2'>
                        <li className='flex items-center'>
                            <span className='font-semibold'>Online:</span> <span className='ml-2'>PKR 10,000</span>
                        </li>
                        <li className='flex items-center mt-1'>
                            <span className='font-semibold'>Physical:</span> <span className='ml-2'>PKR 30,000</span>
                        </li>
                    </ul>
                    <p className='mt-2'><strong>Limited seats available!</strong></p>
                </div>

                <div className="mt-8">
                    <Link
                        href={`https://wa.me/${whatsappNumber}?text=${message}`}
                        className="px-6 py-2 bg-gradient-to-r from-purple-400 to-blue-500 text-white rounded-full hover:shadow-lg transition"
                    >
                        Lets Connect
                    </Link>
                </div>
            </div>

        </>
    );
};

export default CourseText;
