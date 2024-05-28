import React from 'react'
import { Link } from 'react-router-dom'

function About() {
  return (
    <div className='flex flex-col items-center gap-10 p-4'>
      <div className='w-full flex justify-end'>
        <Link to="/" className='film-card-btn btn'>Back To Home</Link>
      </div>
      <div>About</div>
    </div>
  )
}

export default About