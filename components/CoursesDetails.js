
import CourseImg from './CourseImg';
import CourseText from './CourseText';

const CoursesDetails = () => {
    return (
        <>
            <section className='text-gray-600 mb-10 lg:mb-0 mt-10 lg:mt-10 body-font '>
                <h1 className='text-black text-center font-bold text-3xl sm:text-4xl'>
                    <span className='text-pink-600'>Register</span> Right Now
                </h1>

                <div className='container lg:max-w-[1324px] px-5 lg:pb-16 mx-auto flex flex-wrap items-center'>
                    <CourseImg />

                    <div className='flex flex-wrap mt-10 mb-auto lg:w-1/2 sm:w-full lg:pl-5 content-start sm:pr-10'>
                        <CourseText />
                    </div>
                </div>
            </section>
        </>
    );
};

export default CoursesDetails;
