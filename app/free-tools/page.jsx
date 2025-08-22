import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ToolsCard from "@/components/ToolsCard";
import tool01 from '@/public/ipchecker.webp'
import tool02 from '@/public/iplookup.webp'


const ToolsPage = () => {
    const cardsData = [
        {
            imgSrc: tool01,
            title: "IP CHECKER",
            description: "Quickly identify your public IP address and obtain detailed information about your network. Ideal for troubleshooting and security checks.",
            url: 'https://The Stockit.net/tools/ip-detailer/'
        },
        {
            imgSrc: tool02,
            title: "IP LOOKUP",
            description: "Discover detailed information about an IP address, including geolocation data, country, timezone details, and more.",
            url: 'https://The Stockit.net/tools/ip-detailer/ip-lookup'
        },
    ];


    return (
        <>
            <div className="pt-10">
                <Header />
            </div>

            <div className="relative px-6 mt-10 mb-10 md:mt-20 mx-auto max-w-5xl text-center">
                <h2 className="block w-full text-black font-bold text-3xl sm:text-4xl">
                    Discover Our Free Tools
                </h2>
                <p className="mx-auto my-4 w-full max-w-xl bg-transparent text-center font-medium leading-relaxed tracking-wide text-gray-400">
                    We are providing a variety of free tools to help you enhance your productivity and streamline your workflow. Explore our collection of tools designed to meet your needs without any cost.
                </p>
            </div>


            <div className="flex items-center mb-10 justify-center max-w-5xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
                    {cardsData.map((card, index) => (
                        <ToolsCard
                            key={index}
                            imgSrc={card.imgSrc}
                            title={card.title}
                            description={card.description}
                            url={card.url}
                        />
                    ))}
                </div>
            </div>

            <Footer />
        </>
    );
};

export default ToolsPage;
