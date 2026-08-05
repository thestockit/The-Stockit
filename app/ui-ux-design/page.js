import Footer from '@/components/Footer'
import Header from '@/components/Header'
import ServiceHero from '@/components/ServiceHero'
import ChallengesSection from '@/components/ChallengesSection'
import CustomSolutionSection from '@/components/CustomSolutionSection'
import FeaturesSection from '@/components/FeaturesSection'
import ServiceFaqs from '@/components/ServiceFaqs'
import FoundersMessage from '@/components/FoundersMessage'
import React from 'react'

const UIUXDesgining = () => {
    return (
        <div className=" min-h-screen">
            <Header />
            <ServiceHero />
            <FoundersMessage />
            <FeaturesSection />
            <CustomSolutionSection />
            <ChallengesSection />
            <ServiceFaqs />
            <Footer />
        </div>
    )
}

export default UIUXDesgining