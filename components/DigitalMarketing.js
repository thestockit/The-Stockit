import MarketingGallery from './MarketingGallery';
import MarketingText from './MarketingText';

const DigitalMarketing = () => {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Decorative background */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(99,102,241,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(99,102,241,0.04)_1px,transparent_1px)] bg-[size:56px_56px]" />
        <div className="absolute -left-24 top-1/4 h-96 w-96 rounded-full bg-pink-500/10 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      {/* Hairline divider */}
      <div
        aria-hidden
        className="relative h-px bg-gradient-to-r from-transparent via-blue-200/80 to-transparent"
      />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8 lg:py-28">
        <div className="flex flex-wrap items-center">
          <MarketingGallery />

          <div className="mt-10 flex w-full flex-wrap content-start sm:pr-10 lg:mt-0 lg:w-1/2 lg:pl-5">
            <MarketingText />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalMarketing;
