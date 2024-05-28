import React from 'react'
import CardSection from '../sections/CardSection'
import AboutCard from '../components/AboutCard'
import FeatureSection from '../sections/FeatureSection'
import TestimonialSection from '../sections/TestimonialSection'
import AboutTeamSection from '../sections/AboutTeamSection'
import ContactSection from '../sections/ContactSection'
import Footer from '../components/Footer'
import FrontSection from '../sections/FrontSection'

function Home() {
    return (
        <div className="app">
            <FrontSection />
            <div className="app wrapper">
                <CardSection data-aos="fade-up" />
                <AboutCard data-aos="fade-up" />
                <FeatureSection data-aos="fade-up" />
                <TestimonialSection />
                <AboutTeamSection />
                <ContactSection />
                <Footer />
            </div>
        </div>
    )
}

export default Home