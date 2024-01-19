import React from 'react'
import youtube from "../images/YouTube.svg"
import instagram from "../images/Instagram.svg"
import facebook from "../images/facebook.svg"
function Footer() {
  return (
    <div className="footer h9">
        <span>© 2024 Hinterland Productions. All rights reserved.</span>
        <div className="footer_links">
            <a href="https://www.youtube.com/@productions.hinterland" target='_blank'><img src={youtube} alt="error" /></a>
            <a href="/"><img src={instagram} alt="error" /></a>
            <a href="/"><img src={facebook} alt="error" /></a>  
        </div>
    </div>
  )
}

export default Footer