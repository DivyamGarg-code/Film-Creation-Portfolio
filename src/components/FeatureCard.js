import React from 'react'
import { useScrollingEffect } from '../utils/useScrollingEffect';

function FeatureCard(props) {
  const {image,title,content}=props.featureData;
  useScrollingEffect();
  return (
    <div className='feature-card-container' data-aos="fade-up">
        <img src={image} alt="error" />
        <span className='h8'>{title}</span>
        <span className='h9'>{content}</span>
    </div>
  )
}

export default FeatureCard
