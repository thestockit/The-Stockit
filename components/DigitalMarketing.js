import MarketingGallery from './MarketingGallery';
import MarketingText from './MarketingText';

const DigitalMarketing = () => {
    return (
        <>
            <section className='text-gray-600 mt-10 lg:mt-0 body-font '>
                <div className='container lg:max-w-[1324px] px-5 lg:py-16 mx-auto flex flex-wrap items-center'>
                    <MarketingGallery />

                    <div className='flex flex-wrap mt-10 mb-auto lg:w-1/2 sm:w-full lg:pl-5 content-start sm:pr-10'>
                        <MarketingText />
                    </div>
                </div>
            </section>
        </>
    );
};

export default DigitalMarketing;
