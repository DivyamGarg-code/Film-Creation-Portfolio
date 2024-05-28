import React from 'react'
import { Link } from 'react-router-dom'

function Error() {
    return (
        <div className='h-screen w-screen flex justify-center items-center'>
            <div className='flex flex-col items-center gap-2'>
                <span>Error 404</span>
                <span>Page Not Found</span>
                <Link to="/" className='film-card-btn btn'>Go Back To Home</Link>
            </div>
        </div>
    )
}

export default Error