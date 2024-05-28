import React from 'react'
import { useScrollingEffect } from '../utils/useScrollingEffect';

function AboutCard() {
    useScrollingEffect();
    return (
        <div className='about_card_container' data-aos="fade-up">
            <span className='text-[20px] md:h6'>The team at Cinematic Odyssey is truly dedicated to their craft, delivering exceptional films that engage and entertain audiences.</span>
            <span className='text-[18px] md:h7'>Join our esteemed list of clients who trust us to bring their vision to life.</span>
            <div className='about_items_container text-[18px] md:h8'>
                <span>Films</span>
                <span>Feature</span>
                <span>Journey</span>
                <span>Collaboration</span>
                <span>Team</span>
            </div>
        </div>
    )
}

export default AboutCard