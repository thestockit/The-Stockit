import { ServicesData } from "@/Data/ServicesData";
import ServicesCard from "./ServicesCard";

const Services = () => {

    return (
        <section
            id="services"
            className="relative mt-32 md:mt-0 block px-6 py-10 md:py-20 md:px-10"
        >
            <div className="relative mx-auto max-w-5xl text-center">
                <span className="text-black my-3 flex items-center justify-center font-medium uppercase tracking-wider">
                    Why Choose Us
                </span>
                <h2 className="block w-full text-black font-bold text-3xl sm:text-4xl">
                    Elevate Your Business with The Stockit
                </h2>
                <p className="mx-auto my-4 w-full max-w-xl bg-transparent text-center font-medium leading-relaxed tracking-wide text-gray-400">
                    Our services are designed to propel your business forward with a focus on results-driven strategies and custom solutions.
                </p>
            </div>

            <div className="relative mx-auto max-w-5xl z-10 grid grid-cols-1 gap-10 pt-14 sm:grid-cols-2 lg:grid-cols-3">
                {ServicesData.map((elm, i) => (
                    <ServicesCard key={i} elm={elm} index={i} />
                ))}
            </div>
        </section>
    );
};

export default Services;
