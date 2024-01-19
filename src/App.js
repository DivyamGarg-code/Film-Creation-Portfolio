import React from 'react';
import './App.css';
import FrontSection from './sections/FrontSection';
import CardSection from './sections/CardSection';
import AboutCard from './components/AboutCard';
import FeatureSection from './sections/FeatureSection';
import Contact from './components/Contact'
import Footer from './components/Footer'
import TestimonialSection from './sections/TestimonialSection';
import AboutTeamSection from './sections/AboutTeamSection';
import ContactSection from './sections/ContactSection';

function App() {
  return (
    <div className="app">
      <FrontSection />
      <div className="app wrapper">
        <CardSection data-aos="fade-up"/>
        <AboutCard data-aos="fade-up"/>
        <FeatureSection data-aos="fade-up"/>
        <TestimonialSection/>
        <AboutTeamSection/>
        <ContactSection/>
        <Footer/>
      </div>

    </div>
  );
}

export default App;
