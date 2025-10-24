import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactUs from '@/components/ContactUs';

// This will be your dedicated contact Us page
const ContactPage = () => {  // ← Change this name
    return (
        <>
        {/* Header with homepage styling */}
        <div className="pt-10 ">
                <Header />  {/* ← ONLY ONE HEADER */}
            </div>



            <ContactUs />
            <Footer />
        </>
    );
};

export default ContactPage;  // ← And this export