import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='header'>
      <a href="/" style={{textDecoration:'none'}}><div className='logo_name h7'>Hinterland Productions</div></a>
      <div className='nav_items h9'>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/blogs">Blogs</Link>
        {/* <Link to="/admin">Admin</Link> */}

        {/* <Link to="bts">Bts</Link> */}
      </div>
    </div>
  )
}

export default Header