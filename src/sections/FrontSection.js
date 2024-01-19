import React from 'react'
import Header from '../components/Header'
import { useScrollingEffect } from '../utils/useScrollingEffect';

function FrontSection() {
  useScrollingEffect();
  return (
    <div className='front_section' data-aos="fade">
      <img src={require("../images/bg.png")} alt="error" />
      <Header />
      <div className='content_section'>
        <span className='h1'>Explore the World of Cinematic Odyssey</span>
        <span className='h2'>Discover the world of ad films, short films, documentaries, and more.</span>
        <div className='join'>
          <span className='h3'>Join Us Now</span>
          <div className='border'></div>
        </div>

      </div>
    </div>
  )
}

export default FrontSection