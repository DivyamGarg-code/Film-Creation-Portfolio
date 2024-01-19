import React, { useEffect } from 'react'
import Title from '../components/Title'
import Contact from '../components/Contact'
import { useScrollingEffect } from '../utils/useScrollingEffect';

function ContactSection() {
    // Initialize AOS when the component mounts
    useScrollingEffect();
    return (
        <div className='section_wrapper app' data-aos="fade-up">
            <div className="contact_heading">
                <Title title={"Contact Us Today"} />
                <span>Let's talk about your cinematic journey.</span>
                <span>Reach out to us for any inquiries or collaborations.</span>
            </div>
            <Contact />
        </div>
    )
}

export default ContactSection