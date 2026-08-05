import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Services from '@/components/Services';
import Tech from '@/components/Tech';
import Teams from '@/components/Teams';

const ServicesPage = () => {
    return (
        <> 
            <Header />
            
            {/* Page content */}
            <Services />
            <Tech />
            <Teams />
            
            <Footer />
        </>
    );
};

export default ServicesPage;