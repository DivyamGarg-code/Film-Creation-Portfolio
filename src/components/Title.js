import React from 'react'
import { useScrollingEffect } from '../utils/useScrollingEffect';

function Title({title}) {
  useScrollingEffect();
  return (
    <div className='title' data-aos="fade-up">
      <span >{title}</span>
      <div className='highlight'></div>
    </div>
  )
}

export default Title
