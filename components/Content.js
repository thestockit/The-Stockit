import Image from 'next/image';
import Link from 'next/link';

const Content = ({ title, imageUrl, content, btnText, btnLink }) => {
    return (
        <div className="max-w-5xl mx-auto px-4 pb-10 sm:px-6">
            <div className="max-w-3xl mx-auto">
                {/* Blog post header */}
                <div className="py-8">
                    <h1 className="text-3xl font-bold">{title}</h1>
                </div>

                {/* Featured image */}
                <div className="relative w-full h-52 lg:h-72 mb-8">
                    <Image src={imageUrl} alt="Featured image" fill className='object-contain lg:object-cover' />
                </div>

                {/* Blog post content */}
                <div className="prose prose-sm sm:prose mb-5 lg:prose-lg xl:prose-xl mx-auto">
                    <p>{content}</p>
                </div>
                <Link href={btnLink} className="px-5 py-2 bg-gradient-to-r from-purple-400 to-blue-500 text-white rounded-full hover:shadow-lg transition">
                   {btnText}
                </Link>
            </div>
        </div>
    );
};



export default Content;
