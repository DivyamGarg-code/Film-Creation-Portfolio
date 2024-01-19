import React from 'react'
import { useScrollingEffect } from '../utils/useScrollingEffect';

function TestimonialCard(props) {
  const {image,content}=props.data;
  useScrollingEffect();
  return (
    <div className='testimonial-card-container' data-aos="fade-up">
      <img className="testimonial-icon" src={image} alt="error" />
      <span className='h10'>{content}</span>
    </div>
  )
}

export default TestimonialCard