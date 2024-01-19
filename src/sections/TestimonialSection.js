import React from 'react'
import Title from '../components/Title'
import { testimonialData } from '../utils/testimonialData'
import TestimonialCard from '../components/TestimonialCard'

function TestimonialSection() {
    return (
        <div className='section_wrapper app'>
            <div className='testimonial_heading'>
                <span className='h8' style={{ letterSpacing: "2px" }}><span style={{ color: "var(--highlight-color)", fontWeight: "bold" }}>12K+ </span>Happy Customers</span>
                <Title title={"Users Love @productions.hinterland"} />
            </div>
            <div className='testimonial_cards_container'>
                {testimonialData.map((data, index) => {
                    return <TestimonialCard key={index} data={data} />
                })}
            </div>
        </div>
    )
}

export default TestimonialSection